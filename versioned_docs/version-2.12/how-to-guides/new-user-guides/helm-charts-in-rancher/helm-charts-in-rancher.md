---
title: Helm Charts and Apps
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher"/>
</head>

In this section, you'll learn how to manage Helm chart repositories and apps in Rancher. 

## How Helm Charts Work in Rancher

Helm chart repositories in Rancher are managed using **Apps**.

Rancher uses a catalog-like system to import bundles of charts from repositories and then uses those charts to either deploy custom Kubernetes applications or Rancher's tools such as Monitoring or Istio. Rancher tools come as pre-loaded repositories which deploy as standalone Helm charts. Any additional repositories are only added to the current cluster.

### Catalogs, Apps, and the Rancher UI

[Rancher v2.4 and earlier](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md), repositories of ready-to-deploy applications were called "catalogs". These repositories were managed through the **Catalogs** section of the UI. 

Rancher v2.5 replaced the former catalog system with a new **Apps & Marketplace** feature. 

Since Rancher v2.6.5, the **Apps & Marketplace** feature is named **Apps** in the UI.

### Versioning Scheme

The Rancher feature charts versioning scheme is centered around the major version of the charts and the `+up` annotation for upstream charts, where applicable.

**Major Version:** The major versions of feature charts are tied to particular minor versions of Rancher. When you upgrade to a new Rancher minor version, you should ensure that all of your feature charts are also upgraded to the correct release line for the chart.

**Charts based on upstream:** When you upgrade, make sure that the upstream chart version is compatible with your Rancher version. The `+up` annotation for the chart indicates which upstream version the Rancher chart is tracking. For example, `100.x.x+up16.6.0` for Monitoring tracks upstream kube-prometheus-stack `16.6.0` with some additional Rancher patches.

When upgrading Rancher versions, don't downgrade the version of the chart that you are using. For example, if you are using a version of Monitoring that is later than `16.6.0` in Rancher v2.5, you shouldn't upgrade to `100.x.x+up16.6.0`. Instead, you should upgrade to the appropriate version in the next release.

#### Prerelease Versions

Prereleases adhere to [the specification](https://semver.org/#spec-item-9) defined by [Semantic Versioning 2.0.0](https://semver.org/). For example, a Helm chart with a version of `0.1.3-dev.12ab4f` is considered a prerelease. Prerelease versions are not displayed by default and must be configured to do so.

To display prerelease versions:

1. Click on your user avatar in the upper right corner.
1. Click **Preferences**.
1. Under **Helm Charts**, select **Include Prerelease Versions**.

## Access Charts

The **Charts** page contains all Rancher, Partner, and Custom charts. You can filter charts by selecting the left-most dropdown menu:

* Rancher tools such as Logging or Monitoring are listed under the **Rancher** label.
* Partner charts are under the **Partners** label.
* Custom charts are listed under the name of their respective repository.

All three types of charts are deployed and managed in the same way.

:::note

Apps managed by the Cluster Manager (the global view in the legacy Rancher UI) continue to be managed only by the Cluster Manager, and apps managed with **Apps** in the new UI must be managed only by **Apps**.

:::

To access the **Charts** page:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose charts you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Charts**.

## Manage Repositories

The **Repositories** page lists your Helm repositories. These include traditional Helm endpoints which have an index.yaml, and Git repositories that are cloned and point to a specific branch. To use custom charts, add your repository here. After you add a repository, you can access custom charts in the **Charts** page, listed under the name of the repository.

To access the **Repositories** page:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.

### Add Custom Git Repositories

To add a custom Git repository that contains your Helm charts or cluster template definitions:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Click **Create**.
1. Select the target, **Git repository containing Helm chart...**.
1. You must enter a name and a Git repository URL. The other fields, including the description, are optional. Enter an alternative branch name if you don't want to pull from whichever branch the repo owner has set as the default. Usually, the default branch is named either `main` or `master`.
1. Click **Create** to add the repository. 

After you add a chart repository to Rancher, it becomes available immediately.

### Add Custom Helm Chart Repositories

You can add your own Helm chart repositories to serve chart packages to Rancher. You can use any HTTP server, as long as the server can respond to GET requests and serve YAML files and tar archives.

For more information on Helm chart repositories, see the [official Helm docs](https://helm.sh/docs/topics/chart_repository/).

To add a custom Helm chart repository to Rancher:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Click **Create**.
1. Select the target, **http(s) URL to an index generated by Helm**.
1. Enter a repo name and the index URL address of the chart repository.
1. Click **Create** to add the repository. 

### Add Private Git/Helm Chart Repositories

You can add private Git or Helm chart repositories with SSH key credentials or an HTTP basic auth secret, such as a username and password.

### Add a Private CA to Repositories

To add a private CA to Helm chart repositories, you must add a base64 encoded copy of the CA certificate in DER format to the `spec.caBundle field` of the chart repo, such as `openssl x509 -outform der -in ca.pem | base64 -w0`. Instructions are the same for both Git-based and HTTP-based repositories:

1. Click **☰**. Under **Explore Cluster** in the left navigation menu, select a cluster.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Find the row associated with the Git-based or HTTP-based repository you want to add a private CA to, and click **⋮ > Edit YAML**.
1. Set the `caBundle` value, as in the following example:

  ```yaml
    [...]
    spec:
      caBundle:
    MIIFXzCCA0egAwIBAgIUWNy8WrvSkgNzV0zdWRP79j9cVcEwDQYJKoZIhvcNAQELBQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRQwEgYDVQQKDAtNeU9yZywgSW5jLjENMAsGA1UEAwwEcm9vdDAeFw0yMTEyMTQwODMyMTdaFw0yNDEwMDMwODMyMT
    ...
    nDxZ/tNXt/WPJr/PgEB3hQdInDWYMg7vGO0Oz00G5kWg0sJ0ZTSoA10ZwdjIdGEeKlj1NlPyAqpQ+uDnmx6DW+zqfYtLnc/g6GuLLVPamraqN+gyU8CHwAWPNjZonFN9Vpg0PIk1I2zuOc4EHifoTAXSpnjfzfyAxCaZsnTptimlPFJJqAMj+FfDArGmr4=
    [...]
  ```

:::note Helm chart repositories with authentication

The Repo.Spec contains a `disableSameOriginCheck` value. This value allows you to bypass the same origin checks, sending the repository Authentication information as a Basic Auth Header with all API calls. This is not recommended but can be used as a temporary solution in cases of non-standard Helm chart repositories, such as those that have redirects to a different origin URL.

To use this feature for an existing Helm chart repository, follow previous steps up to edit the YAML. On the `spec` portion of the YAML file, add `disableSameOriginCheck` and set it to `true`.

```yaml
[...]
spec:
  disableSameOriginCheck: true
[...]
```

:::

### Add Custom OCI Chart Repositories

Helm v3 introduced storing Helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in container registries. With Rancher v2.9.0, you can add [OCI-based Helm chart repositories](https://helm.sh/docs/topics/registries/) alongside HTTP-based and Git-based repositories. This means you can deploy apps that are stored as OCI artifacts. For more information, see [Using OCI Helm Chart Repositories](./oci-repositories.md).

### Helm Compatibility

Only Helm 3 compatible charts are supported.

### Refresh Chart Repositories

The **Refresh** button can be used to sync changes from selected Helm chart repositories on the **Repositories** page.

To refresh a chart repository:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Use the toggle next to the **State** field to select all repositories, or toggle specified chart repositories to sync changes.
1. Click **Refresh**.
1. The **⋮** at the end of each chart repository row also includes a **Refresh** option, which can be clicked to refresh the respective repository.

Non-Airgap Rancher installations upon refresh will reflect any chart repository changes immediately and you will see the **State** field for updated repositories move from `In Progress` to `Active` once the action is completed.

Airgap installations where Rancher is configured to use the packaged copy of Helm system charts ([`useBundledSystemChart=true`](../../../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md#helm-chart-options-for-air-gap-installations)) will only refer to the [system-chart](https://github.com/rancher/system-charts) repository that comes bundled and will not be able to be refreshed or synced.

#### Refresh Interval

Rancher v2.10.0 adds the `refreshInterval` field to the `ClusterRepo` CRD. The default value is 3600 seconds, meaning that Rancher syncs each Helm repository every 3600 seconds.

To modify the refresh interval of a chart repository:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Find the repository you want to modify, and click **⋮ > Edit YAML**.
1. Set the **refreshInterval** field under **Spec** to the desired value in seconds.
1. Click **Save**.

### Enable/Disable Helm Chart Repositories

Rancher v2.10.0 adds the ability to enable and disable Helm repositories. Helm repositories are enabled by default.

To disable a chart repository:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Find the repository you want to disable, and click **⋮ > Edit YAML**.
1. Set the **Enabled** field under **Spec** to **false**.
1. Click **Save**.
1. When you disable a repository, updates are disabled and new changes to the clusterRepo are not applied.

To enable a chart repository:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Find the repository you want to disable, and click **⋮ > Edit YAML**.
1. Set the **Enabled** field under **Spec** to **true**.
1. Click **Save**.

## Deploy and Upgrade Charts

To install and deploy a chart:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Charts**.
1. Select a chart, and click **Install**.

Rancher and Partner charts may have extra configurations available through custom pages or questions.yaml files. However, all chart installations can modify the values.yaml and other basic settings. After you click **Install**, a Helm operation job is deployed, and the console for the job is displayed.

To view all recent changes, click **Apps > Recent Operations** in the left navigation menu. From there you can view the calls, conditions, events, and logs.

After installing a chart, you can view it by clicking **Apps > Installed Apps** in the left navigation menu. You can upgrade or delete the installation, and see further details. Upgrading uses the same forms and values as you saw during initial installation.

Most Rancher tools have additional pages located in the toolbar below the **Apps** section to help manage and use the features. These pages include links to dashboards, forms to easily add Custom Resources, and additional information.

:::caution

If you are upgrading your chart using **Customize Helm options before upgrade**, and your chart contains immutable fields, using the `--force` option may result in errors. This is because some objects in Kubernetes can't be changed after they're created. To prevent this error:

  * Use the default upgrade option (i.e don't use `--force`).
  * Uninstall the existing chart and install the upgraded chart.
  * Delete the resources with immutable fields from the cluster before performing a forced upgrade.

:::

### Legacy Apps

The upgrade button isn't available for legacy apps on the **Apps > Installed Apps** page.

If you want to upgrade an installed legacy app, the [legacy feature flag](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md) must be turned on. This flag is automatically turned on if you had a legacy app already running before you upgraded Rancher.

1. Enable the [legacy feature flag](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md), if it isn't enabled already.
1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose apps you want to access. Click **Explore** at the end of the cluster's row.
1. Click **Legacy > Project > Apps**.

If you don't see **Apps** listed under **Legacy > Project**, click the project/namespace search bar in the top navigation and select the relevant project from the dropdown menu.

To upgrade legacy multi-cluster apps:

1. Click **☰**. 
1. Under **Legacy Apps**, click **Multi-cluster Apps**.

### Chart-Specific Information

#### sriov Chart Deprecation and Migration

The `sriov` (SR-IOV network operator) chart from the Rancher Charts repository is deprecated and will be removed in Rancher v2.10. Please migrate to the `sriov-network-operator` chart from the SUSE Edge repository (https://github.com/suse-edge/charts) instead.

To migrate, follow these steps:

1. Add the SUSE Edge repository to your cluster by following the steps in [Add Custom Git Repositories](#add-custom-git-repositories).
1. For the **Git Repo URL** field, enter `https://github.com/suse-edge/charts`.
1. Click **Create**.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Charts**.
1. Find the `sriov-network-operator` chart and click on it.
1. Click **Install**.
1. In the **Name** field, enter the same name you used for your existing `sriov` chart installation.
1. Click **Next**.
1. Click **Install**.

**Result:** Rancher redirects to the **Installed Apps** page where your existing installation enters the **Updating** state. The migration is complete when it enters the **Deployed** state.

## Limitations

- Dashboard apps or Rancher feature charts can't be installed using the Rancher CLI.

- When determining the most recent version to display for the **Upgradable** column on the **Apps > Installed Apps** page, rather than only considering versions of the Helm chart from the repository it was installed from, Rancher considers versions of the Helm chart from all repositories on the cluster.

  For example, suppose you install `cert-manager` v1.13.0 from repository A, where v1.14.0 is now the most recent version available. In this case, you expect **Upgradable** to display v1.14.0. However, if the cluster also has access to repository B where v1.15.0 of `cert-manager` is available, then **Upgradable** displays v1.15.0 even though the original installation used repository A.
  