---
title: Backup, Restore, and Disaster Recovery
keywords: [rancher backup restore, rancher backup and restore, backup restore rancher, rancher backup and restore rancher]
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery"/>
</head>

In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster.

The `rancher-backup` operator is used to backup and restore Rancher on any Kubernetes cluster. This application is a Helm chart, and it can be deployed through the Rancher **Apps** page, or by using the Helm CLI. The `rancher-backup` Helm chart is [here.](https://github.com/rancher/charts/tree/release-v2.6/charts/rancher-backup)

The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster.


## Backup and Restore for Rancher installed with Docker

For Rancher installed with Docker, refer to [this page](back-up-docker-installed-rancher.md) to perform backups and [this page](restore-docker-installed-rancher.md) to perform restores.

## How Backups and Restores Work

The `rancher-backup` operator introduces three custom resources: Backups, Restores, and ResourceSets. The following cluster-scoped custom resource definitions are added to the cluster:

- `backups.resources.cattle.io`
- `resourcesets.resources.cattle.io`
- `restores.resources.cattle.io`

The ResourceSet defines which Kubernetes resources need to be backed up. The ResourceSet is not available to be configured in the Rancher UI because the values required to back up Rancher are predefined. This ResourceSet should not be modified.

When a Backup custom resource is created, the `rancher-backup` operator calls the `kube-apiserver` to get the resources in the ResourceSet that the Backup custom resource refers to.

The operator then creates the backup file in the .tar.gz format and stores it in the location configured in the Backup resource.

When a Restore custom resource is created, the operator accesses the backup .tar.gz file specified by the Restore, and restores the application from that file.

The Backup and Restore custom resources can be created in the Rancher UI, or by using `kubectl apply`.

:::note

Refer [here](migrate-rancher-to-new-cluster.md#2-restore-from-backup-using-a-restore-custom-resource) for help on restoring an existing backup file into a v1.22 cluster in Rancher v2.6.3.

:::

## Installing the rancher-backup Operator

The `rancher-backup` operator can be installed from the Rancher UI, or with the Helm CLI. In both cases, the `rancher-backup` Helm chart is installed on the Kubernetes cluster running the Rancher server. It is a cluster-admin only feature and available only for the **local** cluster.  (*If you do not see `rancher-backup` in the Rancher UI, you may have selected the wrong cluster.*)

:::note

There is a known issue in Fleet that occurs after performing a restoration using the backup-restore-operator: Secrets used for clientSecretName and helmSecretName are not included in Fleet gitrepos. Refer [Fleet Troubleshooting](../../../integrations-in-rancher/fleet/overview.md#troubleshooting) for a workaround.

:::

### Installing rancher-backup with the Rancher UI

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the `local` cluster and click **Explore**.
1. In the left navigation bar, **Apps > Charts**.
1. Click **Rancher Backups**.
1. Click **Install**.
1. Optional: Configure the default storage location. For help, refer to the [configuration section.](../../../reference-guides/backup-restore-configuration/storage-configuration.md)
1. Click **Install**.

**Result:** The `rancher-backup` operator is installed.

From the **Cluster Dashboard,** you can see the `rancher-backup` operator listed under **Deployments**.

To configure the backup app in Rancher, go to the left navigation menu and click **Rancher Backups**.

### RBAC

Only the rancher admins and the local cluster’s cluster-owner can:

* Install the Chart
* See the navigation links for Backup and Restore CRDs
* Perform a backup or restore by creating a Backup CR and Restore CR respectively
* List backups/restores performed so far

## Backing up Rancher

A backup is performed by creating a Backup custom resource. For a tutorial, refer to [this page.](back-up-rancher.md)

## Restoring Rancher

A restore is performed by creating a Restore custom resource. For a tutorial, refer to [this page.](restore-rancher.md)

## Migrating Rancher to a New Cluster

A migration is performed by following [these steps.](migrate-rancher-to-new-cluster.md)

## Default Storage Location Configuration

Configure a default storage location for your backups. There are various configuration options, such as specifying an S3-compatible object store as the location for individual backups or choosing an existing `StorageClass` during installation of the `backup-restore-operator` Helm chart. You also have the option to override the configured storage location with each backup, but are limited to using an S3-compatible or Minio object store.

For information on configuring these options, refer to [this page.](../../../reference-guides/backup-restore-configuration/storage-configuration.md)

### Example YAML File: Rancher Backup Helm Chart

The example [values.yaml file](../../../reference-guides/backup-restore-configuration/storage-configuration.md#example-yaml-file-rancher-backup-helm-chart) can be used to configure the `backup-restore-operator` when the Helm CLI is used to install it.
