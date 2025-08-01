---
title: API
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/about-the-api"/>
</head>

## 如何使用 API

API 有自己的用户界面，你可以从 Web 浏览器访问它。这是查看资源、执行操作以及查看等效 cURL 或 HTTP 请求和响应的一种简单的方法。要访问它：

<Tabs>
<TabItem value="Rancher v2.6.4+">

1. 单击右上角的用户头像。
1. 单击**账号 & API 密钥**。
1. 在 **API 密钥**下，找到 **API 端点**字段并单击链接。该链接类似于 `https://<RANCHER_FQDN>/v3`，其中 `<RANCHER_FQDN>` 是 Rancher deployment 的完全限定域名。

</TabItem>
<TabItem value="Rancher 版本低于 v2.6.4">

转到位于 `https://<RANCHER_FQDN>/v3` 的 URL 端点，其中 `<RANCHER_FQDN>` 是你的 Rancher deployment 的完全限定域名。

</TabItem>
</Tabs>

## 认证

API 请求必须包含认证信息。认证是通过 [API 密钥](../reference-guides/user-settings/api-keys.md)使用 HTTP 基本认证完成的。API 密钥可以创建新集群并通过 `/v3/clusters/` 访问多个集群。[集群和项目角色](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)会应用于这些键，并限制账号可以查看的集群和项目以及可以执行的操作。

默认情况下，某些集群级别的 API 令牌是使用无限期 TTL（`ttl=0`）生成的。换言之，除非你让令牌失效，否则 `ttl=0` 的 API 令牌永远不会过期。有关如何使 API 令牌失效的详细信息，请参阅 [API 令牌](api-tokens.md)。

## 发出请求

该 API 通常是 RESTful 的，但是还具有多种功能。这些功能可以使客户端发现所有内容，因此可以编写通用客户端，而不必为每种资源编写特定代码。有关通用 API 规范的详细信息，请参阅[此处](https://github.com/rancher/api-spec/blob/master/specification.md)。

- 每种类型都有一个 Schema，这个 Schema 描述了以下内容：
   - 用于获取此类资源集合的 URL
   - 资源可以具有的每个字段及其类型、基本验证规则、是必填还是可选字段等
   - 在此类资源上可以执行的每个操作，以及它们的输入和输出（也作为 schema）
   - 允许过滤的每个字段
   - 集合本身或集合中的单个资源可以使用的 HTTP 操作方法


- 因此，你可以只加载 schema 列表并了解 API 的所有信息。实际上，这是 API 的 UI 工作方式，它不包含特定于 Rancher 本身的代码。每个 HTTP 响应中的 `X-Api-Schemas` 标头都会发送获取 Schemas 的 URL。你可以按照每个 schema 上的 `collection` 链接了解要在哪里列出资源，并在返回资源中的其他 `links` 中获取其他信息。

- 在实践中，你可能只想构造 URL 字符串。我们强烈建议将此限制为在顶层列出的集合 (`/v3/<type>`)，或获取特定资源 (`/v3/<type>/<id>`)。除此之外的任何内容都可能在将来的版本中发生更改。

- 资源之间相互之间有联系，称为链接（links）。每个资源都包含一个 `links` 映射，其中包含链接名称和用于检索该信息的 URL。同样，你应该 `GET` 资源并遵循 `links` 映射中的 URL，而不是自己构造这些字符串。

- 大多数资源都有操作（action），表示可以执行某个操作或改变资源的状态。要使用操作，请将 HTTP `POST` 请求发送到 `actions` 映射中你想要的操作的 URL。某些操作需要输入或生成输出，请参阅每种类型的独立文档或 schema 以获取具体信息。

- 要编辑资源，请将 HTTP `PUT` 请求发送到资源上的 `links.update` 链接，其中包含要更改的字段。如果链接丢失，则你无权更新资源。未知字段和不可编辑的字段将被忽略。

- 要删除资源，请将 HTTP `DELETE` 请求发送到资源上的 `links.remove` 链接。如果链接丢失，则你无权更新资源。

- 要创建新资源，HTTP `POST` 到 schema（即 `/v3/<type>`）中的集合 URL。

## 过滤

你可以使用 HTTP 查询参数的公共字段在服务器端过滤大多数集合。`filters` 映射显示了可以过滤的字段，以及过滤后的值在你发起的请求中是什么。API UI 具有设置过滤和显示适当请求的控件。对于简单的 "equals" 匹配，它只是 `field=value`。你可以将修饰符添加到字段名称，例如 `field_gt=42` 表示“字段大于 42”。详情请参阅 [API 规范](https://github.com/rancher/api-spec/blob/master/specification.md#filtering)。

## 排序

你可以使用 HTTP 查询参数的公共字段在服务器端排序大多数集合。`sortLinks` 映射显示了可用的排序，以及用于获取遵循该排序的集合的 URL。它还包括当前响排序依据的信息（如果指定）。

## 分页

默认情况下，API 响应以每页 100 个资源的限制进行分页。你可以通过 `limit` 查询参数进行更改，最大为 1000，例如 `/v3/pods?limit=1000`。集合响应中的 `pagination` 映射能让你知道你是否拥有完整的结果集，如果没有，则会指向下一页的链接。

## 捕获 Rancher API 调用

You can use browser developer tools to capture how the v3 API is called. For example, you could follow these steps to use the Chrome developer tools to get the API call for provisioning a Rancher Kubernetes distribution cluster:

1. 在 Rancher UI 中，转到**集群管理**并单击**创建**。
1. 单击某个集群类型。此示例使用 Digital Ocean。
1. 使用集群名称和节点模板填写表单，但不要单击**创建**。
1. 在创建集群之前，你需要打开开发人员工具才能看到正在记录的 API 调用。要打开工具，右键单击 Rancher UI，然后单击**检查**。
1. 在开发者工具中，单击 **Network** 选项卡。
1. 在 **Network** 选项卡上，确保选择了 **Fetch/XHR**。
1. 在 Rancher UI 中，单击**创建**。在开发者工具中，你应该会看到一个名为 `cluster?_replace=true` 的新网络请求。
1. 右键单击 `cluster?_replace=true` 并单击**复制 > 复制为 cURL**。
1. 将结果粘贴到文本编辑器中。你将能够看到 POST 请求，包括被发送到的 URL、所有标头以及请求的完整正文。此命令可用于从命令行创建集群。请注意，请求包含凭证，因此请将请求存储在安全的地方。

### 启用在 API 中查看

你还可以查看针对各自集群和资源捕获的 Rancher API 调用。 默认情况下不启用此功能。 要启用它：

1. 单击 UI 右上角的 **用户图标**，然后从下拉菜单中选择 **偏好设置**
1. 在**高级功能**部分下，单击**启用"在 API 中查看"**

选中后，**在 API 中查看**链接现在将显示在 UI 资源页面上的 **⋮** 子菜单下。
