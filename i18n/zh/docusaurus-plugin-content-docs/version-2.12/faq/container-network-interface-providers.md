---
title: CNI 网络插件
description: 了解容器网络接口 (CNI)、Rancher 提供的 CNI 网络插件、提供商的功能，以及如何选择网络提供商
---

## 什么是 CNI？

CNI（容器网络接口）是一个[云原生计算基金会项目](https://cncf.io/)，它包含了一些规范和库，用于编写在 Linux 容器中配置网络接口的一系列插件。CNI 只关注容器的网络连接，并在容器被删除时移除所分配的资源。

Kubernetes 使用 CNI 作为网络提供商和 Kubernetes Pod 网络之间的接口。

![CNI Logo](/img/cni-logo.png)

有关更多信息，请访问 [CNI GitHub 项目](https://github.com/containernetworking/cni)。

## CNI 使用了哪些网络模型？

CNI 网络插件使用封装网络模型（例如 Virtual Extensible Lan，缩写是 [VXLAN](https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#vxlan)）或非封装网络模型（例如 Border Gateway Protocol，缩写是 [BGP](https://en.wikipedia.org/wiki/Border_Gateway_Protocol)）来实现网络结构。

### 什么是封装网络？

此网络模型提供了一个逻辑二层（L2）网络，该网络封装在跨 Kubernetes 集群节点的现有三层（L3）网络拓扑上。使用此模型，你可以为容器提供一个隔离的 L2 网络，而无需分发路由。封装网络带来了少量的处理开销以及由于覆盖封装生成 IP header 造成的 IP 包大小增加。封装信息由 Kubernetes worker 之间的 UDP 端口分发，交换如何访问 MAC 地址的网络控制平面信息。此类网络模型中常用的封装是 VXLAN、Internet 协议安全性 (IPSec) 和 IP-in-IP。

简单来说，这种网络模型在 Kubernetes worker 之间生成了一种扩展网桥，其中连接了 pod。

如果你偏向使用扩展 L2 网桥，则可以选择此网络模型。此网络模型对 Kubernetes worker 的 L3 网络延迟很敏感。如果数据中心位于不同的地理位置，请确保它们之间的延迟较低，以避免最终的网络分段。

使用这种网络模型的 CNI 网络插件包括 Flannel、Canal、Weave 和 Cilium。默认情况下，Calico 不会使用此模型，但你可以对其进行配置。

![封装网络](/img/encapsulated-network.png)

### 什么是非封装网络？

该网络模型提供了一个 L3 网络，用于在容器之间路由数据包。此模型不会生成隔离的 L2 网络，也不会产生开销。这些好处的代价是，Kubernetes worker 必须管理所需的所有路由分发。该网络模型不使用 IP header 进行封装，而是使用 Kubernetes Worker 之间的网络协议来分发路由信息以实现 Pod 连接，例如 [BGP](https://en.wikipedia.org/wiki/Border_Gateway_Protocol)。

简而言之，这种网络模型在 Kubernetes worker 之间生成了一种扩展网络路由器，提供了如何连接 Pod 的信息。

如果你偏向使用 L3 网络，则可以选择此网络模型。此模型在操作系统级别为 Kubernetes Worker 动态更新路由。对延迟较不敏感。

使用这种网络模型的 CNI 网络插件包括 Calico 和 Cilium。Cilium 可以使用此模型进行配置，即使这不是默认模式。

![非封装网络](/img/unencapsulated-network.png)

## Rancher 提供哪些 CNI 插件？

### RKE2 Kubernetes 集群

Rancher 开箱即用地为 RKE2 Kubernetes 集群提供了几个 CNI 网络插件，分别是 Canal、Calico 和 Cilium。

如果你使用 Rancher 创建新的 Kubernetes 集群，你可以选择你的 CNI 网络插件。

#### Calico

![Calico Logo](/img/calico-logo.png)

Calico 在云上的 Kubernetes 集群中启用网络和网络策略。默认情况下，Calico 使用纯净、未封装的 IP 网络结构和策略引擎为 Kubernetes 工作负载提供网络。工作负载能够使用 BGP 在云上和本地进行通信。

Calico 还提供了一种无状态的 IP-in-IP 或 VXLAN 封装模式。如果需要，你可以使用它。Calico 还支持策略隔离，让你使用高级 ingress 和 egress 策略保护和管理 Kubernetes 工作负载。

如果使用 BGP，Kubernetes Worker 需要打开 TCP 端口 `179`，如果使用 VXLAN 封装，则需要打开 UDP 端口 `4789`。另外，使用 Typha 时需要 TCP 端口 `5473`。有关详细信息，请参阅[下游集群的端口要求](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md#网络要求)。

:::note 重要提示：

在 Rancher 2.6.3 中，Calico 探测到在安装 RKE2 时 Windows 节点会失败。<b>请注意，此问题已在 v2.6.4 中解决。</b>

- 要解决此问题，请先导航到 `https://<rancherserverurl>/v3/settings/windows-rke2-install-script`。

- 在那里，将当前设置 `https://raw.githubusercontent.com/rancher/wins/v0.1.3/install.ps1` 更改为新设置 `https://raw.githubusercontent .com/rancher/rke2/master/windows/rke2-install.ps1`。

:::

![Calico Diagram](/img/calico-diagram.svg)

有关详细信息，请参阅以下页面：

- [Project Calico 官方网站](https://www.projectcalico.org/)
- [Calico 项目 GitHub 页面](https://github.com/projectcalico/calico)

#### Canal

![Canal Logo](/img/canal-logo.png)

Canal 是一个 CNI 网络插件，它很好地结合了 Flannel 和 Calico 的优点。它让你轻松地将 Calico 和 Flannel 网络部署为统一的网络解决方案，将 Calico 的网络策略执行与 Calico（未封装）和 Flannel（封装）丰富的网络连接选项结合起来。

Canal 是 Rancher 默认的 CNI 网络插件，并采用了 Flannel 和 VXLAN 封装。

Kubernetes Worker 需要打开 UDP 端口 `8472` (VXLAN) 和 TCP 端口 `9099`（健康检查）。如果使用 Wireguard，则需要打开 UDP 端口 `51820` 和 `51821`。有关详细信息，请参阅[下游集群的端口要求](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md)。

![](/img/canal-diagram.png)

有关详细信息，请参阅 [Canal GitHub 页面](https://github.com/projectcalico/canal)

#### Cilium

![Cilium Logo](/img/cilium-logo.png)

Cilium 在 Kubernetes 中启用网络和网络策略（L3、L4 和 L7）。默认情况下，Cilium 使用 eBPF 技术在节点内部路由数据包，并使用 VXLAN 将数据包发送到其他节点。你也可以配置非封装的技术。

Cilium 推荐大于 5.2 的内核版本，从而充分利用 eBPF 的能力。Kubernetes worker 需要打开 TCP 端口 `8472`（VXLAN）和 TCP 端口 `4240`（健康检查）。此外，还必须为健康检查启用 ICMP 8/0。有关详细信息，请查看 [Cilium 系统要求](https://docs.cilium.io/en/latest/operations/system_requirements/#firewall-requirements)。

##### Cilium 中跨节点的 Ingress 路由
<br/>
默认情况下，Cilium 不允许 Pod 与其他节点上的 Pod 通信。要解决此问题，请启用 Ingress Controller 以使用 “CiliumNetworkPolicy” 进行跨节点路由请求。

选择 Cilium CNI 并为新集群启用项目网络隔离后，配置如下：

```
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: hn-nodes
  namespace: default
spec:
  endpointSelector: {}
  ingress:
    - fromEntities:
      - remote-node
```

## 各个网络插件的 CNI 功能

下表总结了 Rancher 中每个 CNI 网络插件支持的不同功能：

| 提供商 | 网络模型 | 路线分发 | 网络策略 | 网格 | 外部数据存储 | 加密 | Ingress/Egress 策略 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Canal | 封装 (VXLAN) | 否 | 是 | 否 | K8s API | 是 | 是 |
| Flannel | 封装 (VXLAN) | 否 | 否 | 否 | K8s API | 是 | 否 |
| Calico | 封装（VXLAN，IPIP）或未封装 | 是 | 是 | 是 | Etcd 和 K8s API | 是 | 是 |
| Weave | 封装 | 是 | 是 | 是 | 否 | 是 | 是 |
| Cilium | 封装 (VXLAN) | 是 | 是 | 是 | Etcd 和 K8s API | 是 | 是 |

- 网络模型：封装或未封装。如需更多信息，请参阅 [CNI 中使用的网络模型](#cni-使用了哪些网络模型)。

- 路由分发：一种外部网关协议，用于在互联网上交换路由和可达性信息。BGP 可以帮助进行跨集群 pod 之间的网络。此功能对于未封装的 CNI 网络插件是必须的，并且通常由 BGP 完成。如果你想构建跨网段拆分的集群，路由分发是一个很好的功能。

- 网络策略：Kubernetes 提供了强制执行规则的功能，这些规则决定了哪些 service 可以使用网络策略进行相互通信。这是从 Kubernetes 1.7 起稳定的功能，可以与某些网络插件一起使用。

- 网格：允许在不同的 Kubernetes 集群间进行 service 之间的网络通信。

- 外部数据存储：具有此功能的 CNI 网络插件需要一个外部数据存储来存储数据。

- 加密：允许加密和安全的网络控制和数据平面。

- Ingress/Egress 策略：允许你管理 Kubernetes 和非 Kubernetes 通信的路由控制。


## CNI 社区人气

下表总结了不同的 GitHub 指标，让你了解每个项目的受欢迎程度和活动。数据收集于 2022 年 1 月。

| 提供商 | 项目 | Stars | Forks | Contributors |
| ---- | ---- | ---- | ---- | ---- |
| Canal | https://github.com/projectcalico/canal | 679 | 100 | 21 |
| Flannel | https://github.com/flannel-io/flannel | 7k | 2.5k | 185 |
| Calico | https://github.com/projectcalico/calico | 3.1k | 741 | 224 |
| Weave | https://github.com/weaveworks/weave/ | 6.2k | 635 | 84 |
| Cilium | https://github.com/cilium/cilium | 10.6k | 1.3k | 352 |

<br/>

## 使用哪个 CNI 插件？

这取决于你的项目需求。各个提供商都有不同的功能和选项。没有一个提供商可以满足所有用户的需求。

Canal 是默认的 CNI 网络插件。对于大多数用例，我们推荐你使用它。它使用 Flannel 为容器提供封装网络，同时添加 Calico 网络策略，可以在网络方面提供项目/命名空间隔离。

## 如何配置 CNI 网络插件？

如需了解如何为你的集群配置网络插件，请参阅[集群选项](../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)。有关更高级的配置选项，请参阅有关使用[配置文件](../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md#rke-集群配置文件参考)和[网络插件](https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/)选项来配置集群的说明。
