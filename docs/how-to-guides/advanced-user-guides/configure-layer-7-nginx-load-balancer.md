---
title: Docker Install with TLS Termination at Layer-7 NGINX Load Balancer
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer"/>
</head>

For development and testing environments that have a special requirement to terminate TLS/SSL at a load balancer instead of your Rancher Server container, deploy Rancher and configure a load balancer to work with it conjunction.

A layer-7 load balancer can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with.

This install procedure walks you through deployment of Rancher using a single container, and then provides a sample configuration for a layer-7 NGINX load balancer.

## Requirements for OS, Docker, Hardware, and Networking

Make sure that your node fulfills the general [installation requirements.](../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md)

## Installation Outline


## 1. Provision Linux Host

Provision a single Linux host according to our [Requirements](../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md) to launch your Rancher Server.

## 2. Choose an SSL Option and Install Rancher

For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster.

:::note Do you want to..

- Complete an Air Gap Installation?
- Record all transactions with the Rancher API?

See [Advanced Options](#advanced-options) below before continuing.

:::

Choose from the following options:

<details id="option-a">
  <summary>Option A-Bring Your Own Certificate: Self-Signed</summary>

If you elect to use a self-signed certificate to encrypt communication, you must install the certificate on your load balancer (which you'll do later) and your Rancher container. Run the Docker command to deploy Rancher, pointing it toward your certificate.

:::note Prerequisites:

Create a self-signed certificate.

- The certificate files must be in PEM format.

:::

**To Install Rancher Using a Self-Signed Cert:**

1. While running the Docker command to deploy Rancher, point Docker toward your CA certificate file.

   ```
   docker run -d --restart=unless-stopped \
     -p 80:80 -p 443:443 \
     -v /etc/your_certificate_directory/cacerts.pem:/etc/rancher/ssl/cacerts.pem \
     rancher/rancher:latest
   ```

</details>
<details id="option-b">
  <summary>Option B-Bring Your Own Certificate: Signed by Recognized CA</summary>

If your cluster is public facing, it's best to use a certificate signed by a recognized CA.

:::note Prerequisites:

- The certificate files must be in PEM format.

:::

**To Install Rancher Using a Cert Signed by a Recognized CA:**

If you use a certificate signed by a recognized CA, installing your certificate in the Rancher container isn't necessary. We do have to make sure there is no default CA certificate generated and stored, you can do this by passing the `--no-cacerts` parameter to the container.

1.  Enter the following command.

    ```
    docker run -d --restart=unless-stopped \
      -p 80:80 -p 443:443 \
      rancher/rancher:latest --no-cacerts
    ```

</details>

## 3. Configure Load Balancer

When using a load balancer in front of your Rancher container, there's no need for the container to redirect port communication from port 80 or port 443. By passing the header `X-Forwarded-Proto: https` header, this redirect is disabled.

The load balancer or proxy has to be configured to support the following:

- **WebSocket** connections
- **SPDY** / **HTTP/2** protocols
- Passing / setting the following headers:

    | Header | Value | Description |
    |--------|-------|-------------|
    | `Host`                | Hostname used to reach Rancher.          | To identify the server requested by the client.
    | `X-Forwarded-Proto`   | `https`                                  | To identify the protocol that a client used to connect to the load balancer or proxy.<br /><br/>**Note:** If this header is present, `rancher/rancher` does not redirect HTTP to HTTPS.
    | `X-Forwarded-Port`    | Port used to reach Rancher.              | To identify the protocol that client used to connect to the load balancer or proxy.
    | `X-Forwarded-For`     | IP of the client connection.             | To identify the originating IP address of a client.
### Example NGINX configuration

This NGINX configuration is tested on NGINX 1.14.

:::note

This NGINX configuration is only an example and may not suit your environment. For complete documentation, see [NGINX Load Balancing - HTTP Load Balancing](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/).

:::

- Replace `rancher-server` with the IP address or hostname of the node running the Rancher container.
- Replace both occurrences of `FQDN` to the DNS name for Rancher.
- Replace `/certs/fullchain.pem` and `/certs/privkey.pem` to the location of the server certificate and the server certificate key respectively.

```
worker_processes 4;
worker_rlimit_nofile 40000;

events {
    worker_connections 8192;
}

http {
    upstream rancher {
        server rancher-server:80;
    }

    map $http_upgrade $connection_upgrade {
        default Upgrade;
        ''      close;
    }

    server {
        listen 443 ssl http2;
        server_name FQDN;
        ssl_certificate /certs/fullchain.pem;
        ssl_certificate_key /certs/privkey.pem;

        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://rancher;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
            # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.
            proxy_read_timeout 900s;
            proxy_buffering off;
        }
    }

    server {
        listen 80;
        server_name FQDN;
        return 301 https://$server_name$request_uri;
    }
}
```

<br/>

## What's Next?

- **Recommended:** Review Single Node [Backup](../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md) and [Restore](../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md). Although you don't have any data you need to back up right now, we recommend creating backups after regular Rancher use.
- Create a Kubernetes cluster: [Provisioning Kubernetes Clusters](../new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md).

<br/>

## FAQ and Troubleshooting

For help troubleshooting certificates, see [this section.](../../getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md)

## Advanced Options

### API Auditing

If you want to record all transactions with the Rancher API, enable the [API Auditing](enable-api-audit-log.md) feature by adding the flags below into your install command.

    -e AUDIT_LEVEL=1 \
    -e AUDIT_LOG_ENABLED=true \
    -e AUDIT_LOG_PATH=/var/log/auditlog/rancher-api-audit.log \
    -e AUDIT_LOG_MAXAGE=20 \
    -e AUDIT_LOG_MAXBACKUP=20 \
    -e AUDIT_LOG_MAXSIZE=100 \

### Air Gap

If you are visiting this page to complete an [Air Gap Installation](../../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md), you must pre-pend your private registry URL to the server tag when running the installation command in the option that you choose. Add `<REGISTRY.DOMAIN.COM:PORT>` with your private registry URL in front of `rancher/rancher:latest`.

**Example:**

     <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest

### Persistent Data

Rancher uses etcd as a datastore. When Rancher is installed with Docker, the embedded etcd is being used. The persistent data is at the following path in the container: `/var/lib/rancher`.

You can bind mount a host volume to this location to preserve data on the host it is running on:

```
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  -v /opt/rancher:/var/lib/rancher \
  --privileged \
  rancher/rancher:latest
```

This operation requires [privileged access](../../getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher).

This layer 7 NGINX configuration is tested on NGINX version 1.13 (mainline) and 1.14 (stable).

:::note

This NGINX configuration is only an example and may not suit your environment. For complete documentation, see [NGINX Load Balancing - TCP and UDP Load Balancer](https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/).

:::

```
upstream rancher {
    server rancher-server:80;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    ''      close;
}

server {
    listen 443 ssl http2;
    server_name rancher.yourdomain.com;
    ssl_certificate /etc/your_certificate_directory/fullchain.pem;
    ssl_certificate_key /etc/your_certificate_directory/privkey.pem;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://rancher;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.
        proxy_read_timeout 900s;
        proxy_buffering off;
    }
}

server {
    listen 80;
    server_name rancher.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

<br/>

