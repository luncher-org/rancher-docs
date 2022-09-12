"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11303],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},35370:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Adding Users to Clusters",weight:2020},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",title:"Adding Users to Clusters",description:"If you want to provide a user with access and permissions to all projects, nodes, and resources within a cluster, assign the user a cluster membership.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Adding Users to Clusters",weight:2020},sidebar:"tutorialSidebar",previous:{title:"How the Authorized Cluster Endpoint Works",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},next:{title:"Cluster Autoscaler",permalink:"/pages-for-subheaders/install-cluster-autoscaler"}},u={},d=[{value:"Editing Cluster Membership",id:"editing-cluster-membership",level:2}],p={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you want to provide a user with access and permissions to ",(0,s.kt)("em",{parentName:"p"},"all")," projects, nodes, and resources within a cluster, assign the user a cluster membership."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Want to provide a user with access to a ",(0,s.kt)("em",{parentName:"p"},"specific")," project within a cluster? See ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects"},"Adding Project Members")," instead."))),(0,s.kt)("p",null,"There are two contexts where you can add cluster members:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Adding Members to a New Cluster"),(0,s.kt)("p",{parentName:"li"},"  You can add members to a cluster as you create it (recommended if possible).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#editing-cluster-membership"},"Adding Members to an Existing Cluster")),(0,s.kt)("p",{parentName:"li"},"  You can always add members to a cluster after a cluster is provisioned."))),(0,s.kt)("h2",{id:"editing-cluster-membership"},"Editing Cluster Membership"),(0,s.kt)("p",null,"Cluster administrators can edit the membership for a cluster, controlling which Rancher users can access the cluster and what features they can use."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to the cluster you want to add members to and click ",(0,s.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"Member Roles")," tab, click ",(0,s.kt)("strong",{parentName:"p"},"Add Member"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Search for the user or group that you want to add to the cluster."),(0,s.kt)("p",{parentName:"li"},"If external authentication is configured:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Rancher returns users from your ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication"},"external authentication")," source as you type."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Using AD but can't find your users?")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"There may be an issue with your search attribute configuration. See ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},"Configuring Active Directory Authentication: Step 5"),".")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A drop-down allows you to add groups instead of individual users. The drop-down only lists groups that you, the logged in user, are part of."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are logged in as a local user, external users do not display in your search results. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Assign the user or group ",(0,s.kt)("strong",{parentName:"p"},"Cluster")," roles."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"What are Cluster Roles?")),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For Custom Roles, you can modify the list of individual roles available for assignment."),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"To add roles to the list, ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"Add a Custom Role"),"."),(0,s.kt)("li",{parentName:"ul"},"To remove roles from the list, ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"Lock/Unlock Roles"),".")))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The chosen users are added to the cluster."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To revoke cluster membership, select the user and click ",(0,s.kt)("strong",{parentName:"li"},"Delete"),". This action deletes membership, not the user."),(0,s.kt)("li",{parentName:"ul"},"To modify a user's roles in the cluster, delete them from the cluster, and then re-add them with modified roles.")))}m.isMDXComponent=!0}}]);