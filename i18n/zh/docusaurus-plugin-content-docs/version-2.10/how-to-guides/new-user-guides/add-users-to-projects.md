---
title: 添加项目成员
---

如果你想为用户提供集群内 _特定_ 项目和资源的访问权限，请为用户分配项目成员资格。

你可以在创建项目时将成员添加到项目中，或将用户添加到现有项目中。

:::tip

如果你需要为用户提供对集群内 _所有_ 项目的访问权限，请参见[添加集群成员](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)。

:::

## 将成员添加到新项目

你可以在创建项目时将成员添加到项目中（建议）。有关创建新项目的详细信息，请参阅[集群管理](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md)。

## 将成员添加到现有项目

创建项目后，你可以将用户添加为项目成员，以便用户可以访问项目的资源：

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要添加项目成员的集群，然后单击 **Explore**。
1. 单击**集群 > 项目/命名空间**。
1. 转到要添加成员的项目。在项目名称上方的**创建命名空间**按钮旁边，单击 **☰**。选择 **编辑配置**。
1. 在**成员**选项卡中，单击**添加**。
1. 搜索要添加到项目的用户或组。

   :::note Notes:

   - At least 2 characters must be typed in the search box for results to appear.
   - Users can be searched based on their username or display name.
   - Search is prefix-based (e.g., a user named `Stan Dard` will appear when searching for `Sta`, but not when searching for `Dar`) and case-sensitive.

   :::

   如果配置了外部身份验证：

   - 在你键入时，Rancher 会从你的外部身份验证源返回用户。

   - 你可以在下拉菜单中添加组，而不是单个用户。下拉列表仅会列出你（登录用户）所在的组。

   :::note

   如果你以本地用户身份登录，外部用户不会显示在你的搜索结果中。

   :::

1. 分配用户或组的**项目**角色。

   [什么是项目角色？](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)

   :::note 注意事项：

   - 如果用户分配到了项目的`所有者`或`成员`角色，用户会自动继承`命名空间创建`角色。然而，这个角色是 [Kubernetes ClusterRole](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)，这表示角色的范围会延展到集群中的所有项目。因此，对于显式分配到了项目`所有者`或`成员`角色的用户来说，即使只有`只读`角色，这些用户也可以在分配给他们的其他项目中创建或删除命名空间。

   - 默认情况下，Rancher 的`项目成员`角色继承自 `Kubernetes-edit` 角色，而`项目所有者`角色继承自 `Kubernetes-admin` 角色。因此，`项目成员`和`项目所有者`角色都能管理命名空间，包括创建和删除命名空间。

   - 对于`自定义`角色，你可以修改可分配的角色列表。

      - 要将角色添加到列表中，请[添加自定义角色](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md)。
      - 要从列表中删除角色，请[锁定/解锁角色](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md)。

   :::

**结果**：已将选中的用户添加到项目中。

- 要撤销项目成员资格，请选择用户并单击**删除**。此操作会删除成员资格，而不会删除用户。
- 要修改项目中的用户角色，请将其从项目中删除，然后使用修改后的角色重新添加用户。