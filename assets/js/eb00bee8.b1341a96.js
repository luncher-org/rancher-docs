"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52696],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11431:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"How Resource Quotas Work in Rancher Projects",weight:1},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",title:"How Resource Quotas Work in Rancher Projects",description:"Resource quotas in Rancher include the same functionality as the native version of Kubernetes. However, in Rancher, resource quotas have been extended so that you can apply them to projects.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"How Resource Quotas Work in Rancher Projects",weight:1},sidebar:"tutorialSidebar",previous:{title:"Project Resource Quotas",permalink:"/v2.0-v2.4/pages-for-subheaders/manage-project-resource-quotas"},next:{title:"Overriding the Default Limit for a Namespace",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"}},p={},l=[],m={toc:l};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Resource quotas in Rancher include the same functionality as the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"native version of Kubernetes"),". However, in Rancher, resource quotas have been extended so that you can apply them to projects."),(0,o.kt)("p",null,"In a standard Kubernetes deployment, resource quotas are applied to individual namespaces. However, you cannot apply the quota to your namespaces simultaneously with a single action. Instead, the resource quota must be applied multiple times."),(0,o.kt)("p",null,"In the following diagram, a Kubernetes administrator is trying to enforce a resource quota without Rancher. The administrator wants to apply a resource quota that sets the same CPU and memory limit to every namespace in his cluster (",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace 1-4"),") . However, in the base version of Kubernetes, each namespace requires a unique resource quota. The administrator has to create four different resource quotas that have the same specs configured (",(0,o.kt)("inlineCode",{parentName:"p"},"Resource Quota 1-4"),") and apply them individually."),(0,o.kt)("sup",null,"Base Kubernetes: Unique Resource Quotas Being Applied to Each Namespace"),"![Native Kubernetes Resource Quota Implementation](/img/kubernetes-resource-quota.svg)",(0,o.kt)("p",null,"Resource quotas are a little different in Rancher. In Rancher, you apply a resource quota to the project, and then the quota propagates to each namespace, whereafter Kubernetes enforces your limits using the native version of resource quotas. If you want to change the quota for a specific namespace, you can override it."),(0,o.kt)("p",null,"The resource quota includes two limits, which you set while creating or editing a project:"),(0,o.kt)("a",{id:"project-limits"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Project Limits:")),(0,o.kt)("p",{parentName:"li"},"  This set of values configures an overall resource limit for the project. If you try to add a new namespace to the project, Rancher uses the limits you've set to validate that the project has enough resources to accommodate the namespace.  In other words, if you try to move a namespace into a project near its resource quota, Rancher blocks you from moving the namespace.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Namespace Default Limits:")),(0,o.kt)("p",{parentName:"li"},"  This value is the default resource limit available for each namespace. When the resource quota is created at the project level, this limit is automatically propagated to each namespace in the project. Each namespace is bound to this default limit unless you override it.\n"))),(0,o.kt)("p",null,"In the following diagram, a Rancher administrator wants to apply a resource quota that sets the same CPU and memory limit for every namespace in their project (",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace 1-4"),"). However, in Rancher, the administrator can set a resource quota for the project (",(0,o.kt)("inlineCode",{parentName:"p"},"Project Resource Quota"),") rather than individual namespaces. This quota includes resource limits for both the entire project (",(0,o.kt)("inlineCode",{parentName:"p"},"Project Limit"),") and individual namespaces (",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace Default Limit"),"). Rancher then propagates the ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace Default Limit")," quotas to each namespace (",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace Resource Quota"),") when created."),(0,o.kt)("sup",null,"Rancher: Resource Quotas Propagating to Each Namespace"),"![Rancher Resource Quota Implementation](/img/rancher-resource-quota.png)",(0,o.kt)("p",null,"Let's highlight some more nuanced functionality. If a quota is deleted at the project level, it will also be removed from all namespaces contained within that project, despite any overrides that may exist. Further, updating an existing namespace default limit for a quota at the project level will not result in that value being propagated to existing namespaces in the project; the updated value will only be applied to newly created namespaces in that project. To update a namespace default limit for existing namespaces you can delete and subsequently recreate the quota at the project level with the new default value. This will result in the new default value being applied to all existing namespaces in the project."),(0,o.kt)("p",null,"The following table explains the key differences between the two quota types."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rancher Resource Quotas"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes Resource Quotas"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Applies to projects and namespace."),(0,o.kt)("td",{parentName:"tr",align:null},"Applies to namespaces only.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Creates resource pool for all namespaces in project."),(0,o.kt)("td",{parentName:"tr",align:null},"Applies static resource limits to individual namespaces.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Applies resource quotas to namespaces through propagation."),(0,o.kt)("td",{parentName:"tr",align:null},"Applies only to the assigned namespace.")))))}d.isMDXComponent=!0}}]);