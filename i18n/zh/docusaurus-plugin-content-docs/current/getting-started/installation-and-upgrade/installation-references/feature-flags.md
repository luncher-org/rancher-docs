---
title: 功能开关
---

使用功能开关（Feature Flag），你可以试用可选或实验性的功能并启用正在逐步淘汰的旧版功能。

要了解功能的值以及如何启用它们，请参阅[启用实验性功能](../../../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md)。

:::note

某些功能要求重新启动 Rancher 容器。Rancher UI 中标记了要求重启的功能。

:::

以下是 Rancher 中可用的功能开关列表。如果你是从旧 Rancher 版本升级的，你可能会在 Rancher UI 中看到其他功能，例如 `proxy` 或 `dashboard`（均[已中断](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.5/reference-guides/installation-references/feature-flags.md)）：

- `clean-stale-secrets`: Removes stale secrets from the `cattle-impersonation-system` namespace. This slowly cleans up old secrets which are no longer being used by the impersonation system.
- `continuous-delivery`：允许从 Fleet 中单独禁用 Fleet GitOps。有关详细信息，请参阅[持续交付](../../../how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md)。
- `fleet`：v2.6 及更高版本的 Rancher 配置框架需要 Fleet。即使你在旧 Rancher 版本中禁用了该标志，该标志也将在升级时自动启用。有关详细信息，请参阅 [Fleet - GitOps at Scale](../../../integrations-in-rancher/fleet/fleet.md)。
- `harvester`：管理 Virtualization Management 页面的访问。用户可以在该页面直接导航到 Harvester 集群并访问 Harvester UI。有关详细信息，请参阅 [Harvester 集成](../../../integrations-in-rancher/harvester/overview.md)。
- `istio-virtual-service-ui`：启用[可视界面](../../../how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md)来创建、读取、更新和删除 Istio 虚拟服务和目标规则，这些都是 Istio 流量管理功能。
- `legacy`：启用 2.5.x 及更早版本的一组功能，这些功能正逐渐被新的实现淘汰。它们是已弃用以及后续可用于新版本的功能组合。新的 Rancher 安装会默认禁用此标志。如果你从以前版本的 Rancher 升级，此标志会启用。
- `multi-cluster-management`：允许配置和管理多个 Kubernetes 集群。此标志只能在安装时设置。后续无法启用或禁用它。
- `rke2`：启用配置 RKE2 集群。此标志默认启用。
- `token-hashing`：启用令牌哈希。启用后，会使用 SHA256 算法对现有 Token 和所有新 Token 进行哈希处理。一旦对 Token 进行哈希处理，就无法撤消操作。此标志在启用后无法禁用。有关详细信息，请参阅 [API 令牌](../../../api/api-tokens.md#令牌哈希)。
- `uiextension`: Enables UI extensions. This flag is enabled by default. Enabling or disabling the flag forces the Rancher pod to restart. The first time this flag is set to `true`, it creates a CRD and enables the controllers and endpoints necessary for the feature to work. If set to `false`, it disables the previously mentioned controllers and endpoints. Setting `uiextension` to `false` has no effect on the CRD -- it does not create a CRD if it does not yet exist, nor does it delete the CRD if it already exists. 
- `unsupported-storage-drivers`：允许启用非默认启用的存储提供程序和卷插件。有关详细信息，请参阅[允许使用不受支持的存储驱动程序](../../../how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers.md)。
- `ui-sql-cache`: Enables a SQLite-based cache for UI tables. See [UI Server-Side Pagination](../../../how-to-guides/advanced-user-guides/enable-experimental-features/ui-server-side-pagination.md) for more information.

下表介绍了 Rancher 中功能开关的可用性和默认值。标记为“GA”的功能已普遍可用：

| 功能开关名称 | 默认值 | 状态 | 可用于 |
| ----------------------------- | ------------- | ------------ | --------------- |
| `clean-stale-secrets` | `true` | GA | v2.10.2 | |
| `continuous-delivery` | `true` | GA | v2.6.0 |
| `fleet` | `true` | 不能禁用 | v2.6.0 |
| `fleet` | `true` | GA | v2.5.0 |
| `harvester` | `true` | 实验功能 | v2.6.1 |
| `legacy` | 新安装：`false`；升级：`true` | GA | v2.6.0 |
| `rke2` | `true` | 实验功能 | v2.6.0 |
| `token-hashing` | 新安装：`false`；升级：`true` | GA | v2.6.0 |
| `uiextension` | `true` | GA | v2.9.0 | |
| `ui-sql-cache` | `false` | Highly experimental | v2.9.0 | |
