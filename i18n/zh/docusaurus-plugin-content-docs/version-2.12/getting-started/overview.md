---
title: 概述
---

Rancher 是一个为使用容器的公司打造的容器管理平台。Rancher 使得开发者可以随处运行 Kubernetes（Run Kubernetes Everywhere），满足 IT 需求规范，赋能 DevOps 团队。

## Run Kubernetes Everywhere

Kubernetes 已经成为容器编排标准。现在，大多数云和虚拟化提供商都提供容器编排服务。Rancher 用户可以选择使用 Rancher Kubernetes distributions（RKE2/K3s）或云 Kubernetes 服务（例如 GKE、AKS 和 EKS）创建 Kubernetes 集群，还可以导入和管理使用任何 Kubernetes 发行版或安装程序创建的现有 Kubernetes 集群。

## 满足 IT 需求规范

Rancher 支持对其控制的所有 Kubernetes 集群进行集中认证、访问控制和监控。例如，你可以：

- 使用你的 Active Directory 凭证访问由云提供商（例如 GKE）托管的 Kubernetes 集群。
- 设置所有用户、组、项目、集群和云服务的权限控制策略和安全策略。
- 一站式查看 Kubernetes 集群的运行状况和容量。

## 赋能 DevOps 团队

Rancher 为 DevOps 工程师提供简单直接的用户界面，以管理其应用负载。用户不需要对 Kubernetes 有非常深入的了解，即可使用 Rancher。Rancher 应用商店包含一套实用的 DevOps 开发工具。Rancher 获得了多种云原生生态系统产品的认证，包括安全工具、监控系统、容器镜像仓库、存储和网络驱动等。

下图讲述了 Rancher 在 IT 管理团队和 DevOps 开发团队之间扮演的角色。DevOps 团队把他们的应用部署在他们选择的公有云或私有云上。IT 管理员负责查看并管理用户、集群、云服务的权限。

![平台](/img/platform.png)

## Rancher API Server 的功能

Rancher API Server 是基于嵌入式 Kubernetes API Server 和 etcd 数据库建立的，它提供了以下功能：

### 授权和基于角色的权限控制（RBAC）

- **用户管理**：Rancher API Server 除了管理本地用户，还[管理用户用来访问外部服务所需的认证信息](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)，如登录 Active Directory 和 GitHub 所需的账号密码。
- **授权**：Rancher API Server 可以管理[访问控制策略](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)和[安全标准](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md)。

### 使用 Kubernetes 的功能

- **配置 Kubernetes 集群**：Rancher API Server 可以在已有节点上[配置 Kubernetes](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md)，或进行 [Kubernetes 版本升级](installation-and-upgrade/upgrade-and-roll-back-kubernetes.md)。
- **管理应用商店**：Rancher 支持使用 [Helm Chart 应用商店](../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md)实现轻松重复部署应用。
- **管理项目**：项目由集群中多个命名空间和访问控制策略组成，是 Rancher 中的一个概念，Kubernetes 中并没有这个概念。你可以使用项目实现以组为单位，管理多个命名空间，并进行 Kubernetes 相关操作。Rancher UI 提供用于[项目管理](../how-to-guides/advanced-user-guides/manage-projects/manage-projects.md)和[项目内应用管理](../how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-resources-setup.md)的功能。
- **Fleet 持续交付**：在 Rancher 中，你可以使用 [Fleet 持续交付](../integrations-in-rancher/fleet/fleet.md)将应用程序从 Git 仓库部署到目标下游 Kubernetes 集群，无需任何手动操作。
- **Istio**：[Rancher 与 Istio 集成](../integrations-in-rancher/istio/istio.md)，使得管理员或集群所有者可以将 Istio 交给开发者，然后开发者使用 Istio 执行安全策略，排查问题，或为蓝绿部署，金丝雀部署，和 A/B 测试进行流量管理。

### 配置云基础设施

- **同步节点信息**：Rancher API Server 可以同步所有集群中全部[节点](../how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md)的信息。
- **配置云基础设施**：如果你为 Rancher 配置了云提供商，Rancher 可以在云端动态配置[新节点](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)和[持久化存储](../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md)。

### 查看集群信息

- **日志管理**：Rancher 可以与多种 Kubernetes 集群之外的主流日志管理工具集成。
- **监控**：你可以使用 Rancher，通过业界领先并开源的 Prometheus 来监控集群节点、Kubernetes 组件和软件部署的状态和进程。
- **告警**：为了保证集群和应用的正常运行，提高公司的生产效率，你需要随时了解集群和项目的计划内和非计划事件。

## 使用 Rancher 编辑下游集群

对于已有集群而言，可提供的选项和设置取决于你配置集群的方法。

使用 Rancher 创建集群后，集群管理员可以管理集群成员，管理节点池，或进行[其他操作](../reference-guides/cluster-configuration/cluster-configuration.md)。

下表总结了每一种类型的集群和对应的可编辑的选项和设置：

import ClusterCapabilitiesTable from '../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />
