---
title: Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/compliance-scans/configuration-reference"/>
</head>

This configuration reference is intended to help you manage the custom resources created by the `rancher-compliance` application. These resources are used for performing compliance scans on a cluster, skipping tests, setting the test profile that will be used during a scan, and other customization.

To configure the custom resources, go to the **Cluster Dashboard** To configure the compliance scans,

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to configure compliance scans and click **Explore**.
1. In the left navigation bar, click **Compliance**.

## Scans

A scan is created to trigger a compliance scan on the cluster based on the defined profile. A report is created after the scan is completed.

When configuring a scan, you need to define the name of the scan profile that will be used with the `scanProfileName` directive.

An example ClusterScan custom resource is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScan
metadata:
  name: rke-cis
spec:
  scanProfileName: rke-profile-hardened
```

## Profiles

A profile contains the configuration for the compliance scan, which includes the benchmark version to use and any specific tests to skip in that benchmark.

:::caution

By default, a few ClusterScanProfiles are installed as part of the `rancher-compliance` chart. If a user edits these default benchmarks or profiles, the next chart update will reset them back. So it is advisable for users to not edit the default  ClusterScanProfiles.

:::

Users can clone the ClusterScanProfiles to create custom profiles.

Skipped tests are listed under the `skipTests` directive.

When you create a new profile, you will also need to give it a name.

An example `ClusterScanProfile` is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScanProfile
metadata:
  annotations:
    meta.helm.sh/release-name: clusterscan-operator
    meta.helm.sh/release-namespace: compliance-operator-system
  labels:
    app.kubernetes.io/managed-by: Helm
  name: "<example-profile>"
spec:
  benchmarkVersion: cis-1.5
  skipTests:
    - "1.1.20"
    - "1.1.21"
```

## Benchmark Versions

A benchmark version is the name of benchmark to run using `kube-bench`, as well as the valid configuration parameters for that benchmark.

A `ClusterScanBenchmark` defines the Compliance `BenchmarkVersion` name and test configurations. The `BenchmarkVersion` name is a parameter provided to the `kube-bench` tool.

By default, a few `BenchmarkVersion` names and test configurations are packaged as part of the Compliance scan application. When this feature is enabled, these default BenchmarkVersions will be automatically installed and available for users to create a ClusterScanProfile.

:::caution

If the default BenchmarkVersions are edited, the next chart update will reset them back. Therefore we don't recommend editing the default ClusterScanBenchmarks.

:::

A ClusterScanBenchmark consists of the fields:

- `ClusterProvider`: This is the cluster provider name for which this benchmark is applicable. For example: RKE, EKS, GKE, etc. Leave it empty if this benchmark can be run on any cluster type.
- `MinKubernetesVersion`: Specifies the cluster's minimum kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular Kubernetes version.
- `MaxKubernetesVersion`: Specifies the cluster's maximum Kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular k8s version.

An example `ClusterScanBenchmark` is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScanBenchmark
metadata:
  annotations:
    meta.helm.sh/release-name: clusterscan-operator
    meta.helm.sh/release-namespace: compliance-operator-system
  creationTimestamp: "2020-08-28T18:18:07Z"
  generation: 1
  labels:
    app.kubernetes.io/managed-by: Helm
  name: cis-1.5
  resourceVersion: "203878"
  selfLink: /apis/cis.cattle.io/v1/clusterscanbenchmarks/cis-1.5
  uid: 309e543e-9102-4091-be91-08d7af7fb7a7
spec:
  clusterProvider: ""
  minKubernetesVersion: 1.15.0
```
