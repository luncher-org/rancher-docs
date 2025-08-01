---
title: Overview
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/overview"/>
</head>

Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.

## Run Kubernetes Everywhere

Kubernetes has become the container orchestration standard. Most cloud and virtualization vendors now offer it as standard infrastructure. Rancher users have the choice of creating Kubernetes clusters with Rancher Kubernetes distributions (RKE2/K3s) or cloud Kubernetes services, such as GKE, AKS, and EKS. Rancher users can also import and manage their existing Kubernetes clusters created using any Kubernetes distribution or installer.

## Meet IT Requirements

Rancher supports centralized authentication, access control, and monitoring for all Kubernetes clusters under its control. For example, you can:

- Use your Active Directory credentials to access Kubernetes clusters hosted by cloud vendors, such as GKE.
- Setup and enforce access control and security policies across all users, groups, projects, clusters, and clouds.
- View the health and capacity of your Kubernetes clusters from a single-pane-of-glass.

## Empower DevOps Teams

Rancher provides an intuitive user interface for DevOps engineers to manage their application workload. The user does not need to have in-depth knowledge of Kubernetes concepts to start using Rancher. Rancher catalog contains a set of useful DevOps tools. Rancher is certified with a wide selection of cloud native ecosystem products, including, for example, security tools, monitoring systems, container registries, and storage and networking drivers.

The following figure illustrates the role Rancher plays in IT and DevOps organizations. Each team deploys their applications on the public or private clouds they choose. IT administrators gain visibility and enforce policies across all users, clusters, and clouds.

![Platform](/img/platform.png)

## Features of the Rancher API Server

The Rancher API server is built on top of an embedded Kubernetes API server and an etcd database. It implements the following functionalities:

### Authorization and Role-Based Access Control

- **User management:** The Rancher API server [manages user identities](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md) that correspond to external authentication providers like Active Directory or GitHub, in addition to local users.
- **Authorization:** The Rancher API server manages [access control](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md) and [security](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) standards.

### Working with Kubernetes

- **Provisioning Kubernetes clusters:** The Rancher API server can [provision Kubernetes](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md) on existing nodes, or perform [Kubernetes upgrades.](installation-and-upgrade/upgrade-and-roll-back-kubernetes.md)
- **Catalog management:** Rancher provides the ability to use a [catalog of Helm charts](../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md) that make it easy to repeatedly deploy applications.
- **Managing projects:** A project is a group of multiple namespaces and access control policies within a cluster. A project is a Rancher concept, not a Kubernetes concept, which allows you to manage multiple namespaces as a group and perform Kubernetes operations in them. The Rancher UI provides features for [project administration](../how-to-guides/advanced-user-guides/manage-projects/manage-projects.md) and for [managing applications within projects.](../how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-resources-setup.md)
- **Fleet Continuous Delivery:** Within Rancher, you can leverage [Fleet Continuous Delivery](../integrations-in-rancher/fleet/fleet.md) to deploy applications from git repositories, without any manual operation, to targeted downstream Kubernetes clusters.
- **Istio:** Our [integration with Istio](../integrations-in-rancher/istio/istio.md) is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing.

### Working with Cloud Infrastructure

- **Tracking nodes:** The Rancher API server tracks identities of all the [nodes](../how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md) in all clusters.
- **Setting up infrastructure:**  When configured to use a cloud provider, Rancher can dynamically provision [new nodes](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md) and [persistent storage](../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md) in the cloud.

### Cluster Visibility

- **Logging:** Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters.
- **Monitoring:** Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution.
- **Alerting:** To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned.

## Editing Downstream Clusters with Rancher

The options and settings available for an existing cluster change based on the method that you used to provision it.

After a cluster is created with Rancher, a cluster administrator can manage cluster membership or manage node pools, among [other options.](../reference-guides/cluster-configuration/cluster-configuration.md)

The following table summarizes the options and settings available for each cluster type:

import ClusterCapabilitiesTable from '../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />
