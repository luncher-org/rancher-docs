---
title: Certificate Rotation
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"/>
</head>

:::caution

Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.

:::

By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted.

Certificates can be rotated for the following services:

- admin
- api-server
- controller-manager
- scheduler
- rke2-controller
- rke2-server
- cloud-controller
- etcd
- auth-proxy
- kubelet
- kube-proxy

:::note

For users who didn't rotate their webhook certificates, and they have expired after one year, please see this [page](../../../troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md) for help.

:::

### Certificate Rotation

Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster you want to rotate certificates for and click **⋮ > Rotate Certificates**.
1. Select which certificates that you want to rotate.

   * Rotate all Service certificates (keep the same CA)
   * Rotate an individual service and choose one of the services from the drop-down menu

1. Click **Save**.

**Results:** The selected certificates will be rotated and the related services will be restarted to start using the new certificate.

### Additional Notes

In RKE2/K3s, both etcd and control plane nodes are treated as the same `server` concept. As such, when rotating certificates of services specific to either of these components will result in certificates being rotated on both. The certificates will only change for the specified service, but you will see nodes for both components go into an updating state. You may also see worker only nodes go into an updating state. This is to restart the workers after a certificate change to ensure they get the latest client certs.
