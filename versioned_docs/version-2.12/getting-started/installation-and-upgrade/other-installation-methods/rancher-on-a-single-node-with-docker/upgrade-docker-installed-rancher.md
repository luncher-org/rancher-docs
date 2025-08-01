---
title: Upgrading Rancher Installed with Docker
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"/>
</head>

<DockerSupportWarning />

The following instructions will guide you through upgrading a Rancher server that was installed with Docker.

## Prerequisites

- **Review the [known upgrade issues](../../install-upgrade-on-a-kubernetes-cluster/upgrades.md#known-upgrade-issues)** section in the Rancher documentation for the most noteworthy issues to consider when upgrading Rancher. A more complete list of known issues for each Rancher version can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums](https://forums.rancher.com/c/announcements/12). Note that upgrades to or from any chart in the [rancher-alpha repository](../../resources/choose-a-rancher-version.md#helm-chart-repositories) aren’t supported.
- **For [air gap installs only,](../air-gapped-helm-cli-install/air-gapped-helm-cli-install.md) collect and populate images for the new Rancher server version**. Follow the guide to [populate your private registry](../air-gapped-helm-cli-install/publish-images.md) with the images for the Rancher version that you want to upgrade to.

## Placeholder Review

During upgrade, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (`<EXAMPLE>`).

Here's an **example** of a command with a placeholder:

```
docker stop <RANCHER_CONTAINER_NAME>
```

In this command, `<RANCHER_CONTAINER_NAME>` is the name of your Rancher container.

## Get Data for Upgrade Commands

To obtain the data to replace the placeholders, run:

```
docker ps
```

Write down or copy this information before starting the upgrade.

<sup>Terminal <code>docker ps</code> Command, Displaying Where to Find <code>&lt;RANCHER_CONTAINER_TAG&gt;</code> and <code>&lt;RANCHER_CONTAINER_NAME&gt;</code></sup>

![Placeholder Reference](/img/placeholder-ref.png)

| Placeholder                | Example                    | Description                                               |
| -------------------------- | -------------------------- | --------------------------------------------------------- |
| `<RANCHER_CONTAINER_TAG>`  | `v2.1.3`                   | The rancher/rancher image you pulled for initial install. |
| `<RANCHER_CONTAINER_NAME>` | `festive_mestorf`          | The name of your Rancher container.                       |
| `<RANCHER_VERSION>`        | `v2.1.3`                   | The version of Rancher that you're creating a backup for. |
| `<DATE>`                   | `2018-12-19`               | The date that the data container or backup was created.   |
<br/>

You can obtain `<RANCHER_CONTAINER_TAG>` and `<RANCHER_CONTAINER_NAME>` by logging into your Rancher server by remote connection and entering the command to view the containers that are running: `docker ps`. You can also view containers that are stopped using a different command: `docker ps -a`. Use these commands for help anytime during while creating backups.

## Upgrade

:::danger 
Rancher upgrades to version 2.12.0 and later will be blocked if any RKE1-related resources are detected, as the Rancher Kubernetes Engine (RKE/RKE1) is end of life as of **July 31, 2025**. For detailed cleanup and recovery steps, refer to the [RKE1 Resource Validation and Upgrade Requirements in Rancher v2.12](#rke1-resource-validation-and-upgrade-requirements-in-rancher-v212).
:::

During upgrade, you create a copy of the data from your current Rancher container and a backup in case something goes wrong. Then you deploy the new version of Rancher in a new container using your existing data.
### 1. Create a copy of the data from your Rancher server container

1. Using a remote Terminal connection, log into the node running your Rancher server.

1. Stop the container currently running Rancher server. Replace `<RANCHER_CONTAINER_NAME>` with the name of your Rancher container.

    ```
    docker stop <RANCHER_CONTAINER_NAME>
    ```

1. <a id="backup"></a>Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped.

    ```
    docker create --volumes-from <RANCHER_CONTAINER_NAME> --name rancher-data rancher/rancher:<RANCHER_CONTAINER_TAG>
    ```

### 2. Create a backup tarball

1. <a id="tarball"></a>From the data container that you just created (<code>rancher-data</code>), create a backup tarball (<code>rancher-data-backup-&lt;RANCHER_VERSION&gt;-&lt;DATE&gt;.tar.gz</code>).

    This tarball will serve as a rollback point if something goes wrong during upgrade. Use the following command, replacing each placeholder.
    ```
    docker run --volumes-from rancher-data -v "$PWD:/backup" --rm busybox tar zcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher
    ```

    **Step Result:** When you enter this command, a series of commands should run.

1. Enter the `ls` command to confirm that the backup tarball was created. It will have a name similar to `rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz`.

    ```
   [rancher@ip-10-0-0-50 ~]$ ls
   rancher-data-backup-v2.1.3-20181219.tar.gz
    ```

1. Move your backup tarball to a safe location external from your Rancher server.

### 3. Pull the New Docker Image

Pull the image of the Rancher version that you want to upgrade to.

Placeholder | Description
------------|-------------
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

```
docker pull rancher/rancher:<RANCHER_VERSION_TAG>
```

### 4. Start the New Rancher Server Container

Start a new Rancher server container using the data from the `rancher-data` container. Remember to pass in all the environment variables that you had used when you started the original container.

:::danger

**_Do not_** stop the upgrade after initiating it, even if the upgrade process seems longer than expected. Stopping the upgrade may result in database migration errors during future upgrades.

:::

If you used a proxy, see [HTTP Proxy Configuration.](../../../../reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md)

If you configured a custom CA root certificate to access your services, see [Custom CA root certificate.](../../../../reference-guides/single-node-rancher-in-docker/advanced-options.md#custom-ca-certificate)

If you are recording all transactions with the Rancher API, see [API Auditing](../../../../reference-guides/single-node-rancher-in-docker/advanced-options.md#api-audit-log)

To see the command to use when starting the new Rancher server container, choose from the following options:

- Docker Upgrade
- Docker Upgrade for Air Gap Installs

<Tabs>
<TabItem value="Docker Upgrade">

Select which option you had installed Rancher server

#### Option A: Default Self-Signed Certificate

<details id="option-a">
  <summary>Click to expand</summary>

If you have selected to use the Rancher generated self-signed certificate, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container.

Placeholder | Description
------------|-------------
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

```
docker run -d --volumes-from rancher-data \
  --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  --privileged \
  rancher/rancher:<RANCHER_VERSION_TAG>
```

Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)

</details>

#### Option B: Bring Your Own Certificate: Self-Signed

<details id="option-b">
<summary>Click to expand</summary>

If you have selected to bring your own self-signed certificate, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container and need to have access to the same certificate that you had originally installed with.

:::note Reminder of the Cert Prerequisite:

The certificate files must be in PEM format. In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates.

:::

Placeholder | Description
------------|-------------
 `<CERT_DIRECTORY>` | The path to the directory containing your certificate files.
`<FULL_CHAIN.pem>` | The path to your full certificate chain.
`<PRIVATE_KEY.pem>` | The path to the private key for your certificate.
`<CA_CERTS.pem>` | The path to the certificate authority's certificate.
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

```
docker run -d --volumes-from rancher-data \
  --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
  -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \
  --privileged \
  rancher/rancher:<RANCHER_VERSION_TAG>
```

Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)

</details>

#### Option C: Bring Your Own Certificate: Signed by Recognized CA

<details id="option-c">
  <summary>Click to expand</summary>

If you have selected to use a certificate signed by a recognized CA, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container and need to have access to the same certificates that you had originally installed with. Remember to include `--no-cacerts` as an argument to the container to disable the default CA certificate generated by Rancher.

:::note Reminder of the Cert Prerequisite:

The certificate files must be in PEM format. In your certificate file, include all intermediate certificates provided by the recognized CA. Order your certificates with your certificate first, followed by the intermediates. For an example, see [Certificate Troubleshooting.](certificate-troubleshooting.md)

:::

Placeholder | Description
------------|-------------
`<CERT_DIRECTORY>` | The path to the directory containing your certificate files.
`<FULL_CHAIN.pem>` | The path to your full certificate chain.
`<PRIVATE_KEY.pem>` | The path to the private key for your certificate.
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

```
docker run -d --volumes-from rancher-data \
  --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
  --privileged \
  rancher/rancher:<RANCHER_VERSION_TAG> \
  --no-cacerts
```

Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)
</details>

#### Option D: Let's Encrypt Certificate

<details id="option-d">
  <summary>Click to expand</summary>

:::caution

Let's Encrypt provides rate limits for requesting new certificates. Therefore, limit how often you create or destroy the container. For more information, see [Let's Encrypt documentation on rate limits](https://letsencrypt.org/docs/rate-limits/).

:::

If you have selected to use [Let's Encrypt](https://letsencrypt.org/) certificates, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container and need to provide the domain that you had used when you originally installed Rancher.

:::note Reminder of the Cert Prerequisites:

- Create a record in your DNS that binds your Linux host IP address to the hostname that you want to use for Rancher access (`rancher.mydomain.com` for example).
- Open port `TCP/80` on your Linux host. The Let's Encrypt http-01 challenge can come from any source IP address, so port `TCP/80` must be open to all IP addresses.

:::

Placeholder | Description
------------|-------------
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.
`<YOUR.DNS.NAME>` | The domain address that you had originally started with

```
docker run -d --volumes-from rancher-data \
  --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  --privileged \
  rancher/rancher:<RANCHER_VERSION_TAG> \
  --acme-domain <YOUR.DNS.NAME>
```

Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)

</details>

</TabItem>
<TabItem value="Docker Air Gap Upgrade">

For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster.

When starting the new Rancher server container, choose from the following options:

#### Option A: Default Self-Signed Certificate

<details id="option-a">
  <summary>Click to expand</summary>

If you have selected to use the Rancher generated self-signed certificate, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container.

Placeholder | Description
------------|-------------
`<REGISTRY.YOURDOMAIN.COM:PORT>` |  Your private registry URL and port.
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to to upgrade to.

```
  docker run -d --volumes-from rancher-data \
      --restart=unless-stopped \
      -p 80:80 -p 443:443 \
      -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
      -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
      --privileged \
      <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)
</details>

#### Option B: Bring Your Own Certificate: Self-Signed

<details id="option-b">
  <summary>Click to expand</summary>

If you have selected to bring your own self-signed certificate, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container and need to have access to the same certificate that you had originally installed with.

:::note Reminder of the Cert Prerequisite:

The certificate files must be in PEM format. In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see [Certificate Troubleshooting.](certificate-troubleshooting.md)

:::

Placeholder | Description
------------|-------------
`<CERT_DIRECTORY>` | The path to the directory containing your certificate files.
`<FULL_CHAIN.pem>` | The path to your full certificate chain.
`<PRIVATE_KEY.pem>` | The path to the private key for your certificate.
`<CA_CERTS.pem>` | The path to the certificate authority's certificate.
`<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
    -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
    --privileged \
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```
Privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)
</details>

#### Option C: Bring Your Own Certificate: Signed by Recognized CA

<details id="option-c">
  <summary>Click to expand</summary>

If you have selected to use a certificate signed by a recognized CA, you add the `--volumes-from rancher-data` to the command that you had started your original Rancher server container and need to have access to the same certificates that you had originally installed with.

  :::note Reminder of the Cert Prerequisite:

  The certificate files must be in PEM format. In your certificate file, include all intermediate certificates provided by the recognized CA. Order your certificates with your certificate first, followed by the intermediates. For an example, see [Certificate Troubleshooting.](certificate-troubleshooting.md)

  :::

Placeholder | Description
------------|-------------
`<CERT_DIRECTORY>` | The path to the directory containing your certificate files.
`<FULL_CHAIN.pem>` | The path to your full certificate chain.
`<PRIVATE_KEY.pem>` | The path to the private key for your certificate.
`<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.
`<RANCHER_VERSION_TAG>` | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to upgrade to.

:::note

Use the `--no-cacerts` as argument to the container to disable the default CA certificate generated by Rancher.

:::

```
docker run -d --volumes-from rancher-data \
    --restart=unless-stopped \
     -p 80:80 -p 443:443 \
     --no-cacerts \
     -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
     -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
     -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
     -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
     --privileged
     <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```
privileged access is [required.](rancher-on-a-single-node-with-docker.md#privileged-access-for-rancher)
</details>

</TabItem>
</Tabs>

**Result:** You have upgraded Rancher. Data from your upgraded server is now saved to the `rancher-data` container for use in future upgrades.

### 5. Verify the Upgrade

Log into Rancher. Confirm that the upgrade succeeded by checking the version displayed in the bottom-left corner of the browser window.

:::note Having network issues in your user clusters following upgrade?

See [Restoring Cluster Networking](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md).

:::

### 6. Clean up Your Old Rancher Server Container

Remove the previous Rancher server container. If you only stop the previous Rancher server container (and don't remove it), the container may restart after the next server reboot.

## RKE1 Resource Validation and Upgrade Requirements in Rancher v2.12

Rancher v2.12.0 and later has removed support for the Rancher Kubernetes Engine (RKE/RKE1). During upgrade, Rancher validates the cluster resources and blocks the upgrade if any RKE1-related resources are detected.

This validation affects the following resource types:

- Clusters with `rkeConfig` (`clusters.management.cattle.io`)
- NodeTemplates (`nodetemplates.management.cattle.io`)
- ClusterTemplates (`clustertemplates.management.cattle.io`)

This is particularly relevant for single-node Docker installations, where Rancher is not running during the upgrade. In such cases, controllers are not available to automatically clean up deprecated resources, and the upgrade process will fail early with an error listing the blocking resources.

### 1. Pre-Upgrade (Recommended)

Before upgrading, while Rancher is still running:

- Run the `pre-upgrade-hook` cleanup script to delete all RKE1 clusters and templates. You can find the script in the Rancher GitHub repository: [pre-upgrade-hook.sh](https://github.com/rancher/rancher/blob/v2.12.0/chart/scripts/pre-upgrade-hook.sh).
- This allows Rancher to clean up associated resources and finalizers.

### 2. Post-Upgrade Failure Due to Residual RKE1 Resources

If the upgrade to Rancher v2.12.0 or later is attempted without prior cleanup of RKE1 resources:

- The upgrade will fail and display an error listing the resource names that are preventing the upgrade.
- This occurs because Rancher includes validation to detect and block upgrades when unsupported RKE1 resources are still present.
- To proceed, [rollback](#rolling-back) to the previous Rancher version, delete the identified resources, and then retry after [manual cleanup](#manual-cleanup-after-rollback).

:::note Helm-based Rancher
Helm-based Rancher installations are not affected by this issue, as Rancher remains available during the upgrade and can perform resource cleanup as needed.
:::

### Manual Cleanup After Rollback

Users should perform the following steps after rolling back to a previous Rancher version:

- **Manually delete** the resources listed in the upgrade error message (e.g., RKE1 clusters, NodeTemplates, ClusterTemplates).
- If deletion is blocked due to **finalizers**, edit the resources and remove the `metadata.finalizers` field.
- If a **validating webhook** prevents deletion (e.g., for the `system-project`), please refer to the [Bypassing the Webhook](../../../../reference-guides/rancher-webhook.md#bypassing-the-webhook) documentation.

## Rolling Back

If your upgrade does not complete successfully, you can roll back Rancher server and its data back to its last healthy state. For more information, see [Docker Rollback](roll-back-docker-installed-rancher.md).
