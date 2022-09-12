"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84305],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,k=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",weight:2010},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",weight:2010},sidebar:"tutorialSidebar",previous:{title:"Cluster Access",permalink:"/pages-for-subheaders/access-clusters"},next:{title:"How the Authorized Cluster Endpoint Works",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"}},l={},h=[{value:"Accessing Clusters with kubectl Shell in the Rancher UI",id:"accessing-clusters-with-kubectl-shell-in-the-rancher-ui",level:3},{value:"Accessing Clusters with kubectl from Your Workstation",id:"accessing-clusters-with-kubectl-from-your-workstation",level:3},{value:"Note on Resources Created Using kubectl",id:"note-on-resources-created-using-kubectl",level:3},{value:"Authenticating Directly with a Downstream Cluster",id:"authenticating-directly-with-a-downstream-cluster",level:2},{value:"Connecting Directly to Clusters with FQDN Defined",id:"connecting-directly-to-clusters-with-fqdn-defined",level:3},{value:"Connecting Directly to Clusters without FQDN Defined",id:"connecting-directly-to-clusters-without-fqdn-defined",level:3}],d={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to manipulate your downstream Kubernetes cluster with kubectl from the Rancher UI or from your workstation."),(0,o.kt)("p",null,"For more information on using kubectl, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"Kubernetes Documentation: Overview of kubectl"),"."),(0,o.kt)("h3",{id:"accessing-clusters-with-kubectl-shell-in-the-rancher-ui"},"Accessing Clusters with kubectl Shell in the Rancher UI"),(0,o.kt)("p",null,"You can access and manage your clusters by logging into Rancher and opening the kubectl shell in the UI. No further configuration necessary."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster you want to access with kubectl and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the top navigation menu, click the ",(0,o.kt)("strong",{parentName:"li"},"Kubectl Shell")," button. Use the window that opens to interact with your Kubernetes cluster.")),(0,o.kt)("h3",{id:"accessing-clusters-with-kubectl-from-your-workstation"},"Accessing Clusters with kubectl from Your Workstation"),(0,o.kt)("p",null,"This section describes how to download your cluster's kubeconfig file, launch kubectl from your workstation, and access your downstream cluster."),(0,o.kt)("p",null,"This alternative method of accessing the cluster allows you to authenticate with Rancher and manage your cluster without using the Rancher UI."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These instructions assume that you have already created a Kubernetes cluster, and that kubectl is installed on your workstation. For help installing kubectl, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubernetes documentation.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into Rancher. Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you want to access with kubectl and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the top navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Download KubeConfig")," button."),(0,o.kt)("li",{parentName:"ol"},"Save the YAML file on your local computer. Move the file to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),". Note: The default location that kubectl uses for the kubeconfig file is ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),", but you can use any directory and specify it using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--kubeconfig")," flag, as in this command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config get pods\n"))),(0,o.kt)("li",{parentName:"ol"},"From your workstation, launch kubectl. Use it to interact with your kubernetes cluster.")),(0,o.kt)("h3",{id:"note-on-resources-created-using-kubectl"},"Note on Resources Created Using kubectl"),(0,o.kt)("p",null,"Rancher will discover and show resources created by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),". However, these resources might not have all the necessary annotations on discovery. If an operation (for instance, scaling the workload) is done to the resource using the Rancher UI/API, this may trigger recreation of the resources due to the missing annotations. This should only happen the first time an operation is done to the discovered resource."),(0,o.kt)("h2",{id:"authenticating-directly-with-a-downstream-cluster"},"Authenticating Directly with a Downstream Cluster"),(0,o.kt)("p",null,"This section intended to help you set up an alternative method to access an ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster.")),(0,o.kt)("p",null,"This method is only available for RKE clusters that have the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," enabled. When Rancher creates this RKE cluster, it generates a kubeconfig file that includes additional kubectl context(s) for accessing your cluster. This additional context allows you to use kubectl to authenticate with the downstream cluster without authenticating through Rancher. For a longer explanation of how the authorized cluster endpoint works, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"this page.")),(0,o.kt)("p",null,"We recommend that as a best practice, you should set up this method to access your RKE cluster, so that just in case you can\u2019t connect to Rancher, you can still access the cluster."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following steps assume that you have created a Kubernetes cluster and followed the steps to ",(0,o.kt)("a",{parentName:"p",href:"#accessing-clusters-with-kubectl-from-your-workstation"},"connect to your cluster with kubectl from your workstation.")))),(0,o.kt)("p",null,"To find the name of the context(s) in your downloaded kubeconfig file, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl config get-contexts --kubeconfig /custom/path/kube.config\nCURRENT   NAME                        CLUSTER                     AUTHINFO     NAMESPACE\n*         my-cluster                  my-cluster                  user-46tmn\n          my-cluster-controlplane-1   my-cluster-controlplane-1   user-46tmn\n")),(0,o.kt)("p",null,"In this example, when you use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," with the first context, ",(0,o.kt)("inlineCode",{parentName:"p"},"my-cluster"),", you will be authenticated through the Rancher server."),(0,o.kt)("p",null,"With the second context, ",(0,o.kt)("inlineCode",{parentName:"p"},"my-cluster-controlplane-1"),", you would authenticate with the authorized cluster endpoint, communicating with an downstream RKE cluster directly."),(0,o.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,o.kt)("p",null,"Now that you have the name of the context needed to authenticate directly with the cluster, you can pass the name of the context in as an option when running kubectl commands. The commands will differ depending on whether your cluster has an FQDN defined. Examples are provided in the sections below."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," works normally, it confirms that you can access your cluster while bypassing Rancher's authentication proxy."),(0,o.kt)("h3",{id:"connecting-directly-to-clusters-with-fqdn-defined"},"Connecting Directly to Clusters with FQDN Defined"),(0,o.kt)("p",null,"If an FQDN is defined for the cluster, a single context referencing the FQDN will be created. The context will be named ",(0,o.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-fqdn"),". When you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to access this cluster without Rancher, you will need to use this context."),(0,o.kt)("p",null,"Assuming the kubeconfig file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-fqdn get nodes\n")),(0,o.kt)("p",null,"Directly referencing the location of the kubeconfig file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-fqdn get pods\n")),(0,o.kt)("h3",{id:"connecting-directly-to-clusters-without-fqdn-defined"},"Connecting Directly to Clusters without FQDN Defined"),(0,o.kt)("p",null,"If there is no FQDN defined for the cluster, extra contexts will be created referencing the IP address of each node in the control plane. Each context will be named ",(0,o.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-<NODE_NAME>"),". When you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to access this cluster without Rancher, you will need to use this context."),(0,o.kt)("p",null,"Assuming the kubeconfig file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-<NODE_NAME> get nodes\n")),(0,o.kt)("p",null,"Directly referencing the location of the kubeconfig file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-<NODE_NAME> get pods\n")))}p.isMDXComponent=!0}}]);