"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55610],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=i,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Creating a Nutanix AOS Cluster",shortTitle:"Nutanix",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},u=void 0,c={unversionedId:"pages-for-subheaders/nutanix",id:"pages-for-subheaders/nutanix",title:"Creating a Nutanix AOS Cluster",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",source:"@site/docs/pages-for-subheaders/nutanix.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/nutanix",permalink:"/pages-for-subheaders/nutanix",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/nutanix.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Creating a Nutanix AOS Cluster",shortTitle:"Nutanix",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},sidebar:"tutorialSidebar",previous:{title:"Creating a vSphere Virtual Machine Template",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template"},next:{title:"Provisioning Kubernetes Clusters in Nutanix AOS",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"}},l={},p=[],h={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nutanix.com/products/acropolis"},"Nutanix Acropolis Operating System")," (Nutanix AOS) is an operating system for the Nutanix hyper-converged infrastructure platform. AOS comes with a built-in hypervisor called ",(0,o.kt)("a",{parentName:"p",href:"https://www.nutanix.com/products/ahv"},"Acropolis Hypervisor"),", or AHV. By using Rancher with Nutanix AOS (AHV), you can bring cloud operations on-premises."),(0,o.kt)("p",null,"Rancher can provision nodes in AOS (AHV) and install Kubernetes on them. When creating a Kubernetes cluster in AOS, Rancher first provisions the specified number of virtual machines by communicating with the Prism Central API. Then it installs Kubernetes on top of the VMs."),(0,o.kt)("p",null,"A Nutanix cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos#creating-a-nutanix-aos-cluster"},"Creating a Nutanix Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"},"Provisioning Storage"))),(0,o.kt)("h1",{id:"creating-a-nutanix-cluster"},"Creating a Nutanix Cluster"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"},"this section,")," you'll learn how to use Rancher to install an ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Nutanix AOS."))}f.isMDXComponent=!0}}]);