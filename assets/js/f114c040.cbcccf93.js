"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86479],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),c=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=t,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,s(s({ref:r},u),{},{components:n})):a.createElement(g,s({ref:r},u))}));function h(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49653:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),t=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",weight:3040,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress"]},i=void 0,c={unversionedId:"pages-for-subheaders/load-balancer-and-ingress-controller",id:"version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller",title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/load-balancer-and-ingress-controller",permalink:"/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",weight:3040,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress"]},sidebar:"tutorialSidebar",previous:{title:"Testing HPAs with kubectl",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"},next:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"}},u={},d=[{value:"Load Balancers",id:"load-balancers",level:2},{value:"Load Balancer Limitations",id:"load-balancer-limitations",level:3},{value:"Ingress",id:"ingress",level:2}],p={toc:d};function h(e){var r=e.components,n=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, you can set up load balancers and ingress controllers to redirect service requests."),(0,o.kt)("h2",{id:"load-balancers"},"Load Balancers"),(0,o.kt)("p",null,"After you launch an application, the app is only available within the cluster. It can't be reached from outside the cluster."),(0,o.kt)("p",null,"If you want your applications to be externally accessible, you must add a load balancer or ingress to your cluster. Load balancers create a gateway for external connections to access your cluster, provided that the user knows the load balancer's IP address and the application's port number."),(0,o.kt)("p",null,"Rancher supports two types of load balancers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-4-load-balancer"},"Layer-4 Load Balancers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-7-load-balancer"},"Layer-7 Load Balancers"))),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"load balancers"),"."),(0,o.kt)("h3",{id:"load-balancer-limitations"},"Load Balancer Limitations"),(0,o.kt)("p",null,"Load Balancers have a couple of limitations you should be aware of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load Balancers can only handle one IP address per service, which means if you run multiple services in your cluster, you must have a load balancer for each service. Running multiples load balancers can be expensive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to use a load balancer with a Hosted Kubernetes cluster (i.e., clusters hosted in GKE, EKS, or AKS), the load balancer must be running within that cloud provider's infrastructure. Please review the compatibility tables regarding support for load balancers based on how you've provisioned your clusters:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- [Support for Layer-4 Load Balancing](/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-4-load-balancing)\n\n- [Support for Layer-7 Load Balancing](/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-7-load-balancing)\n")),(0,o.kt)("h2",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,"As mentioned in the limitations above, the disadvantages of using a load balancer are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load Balancers can only handle one IP address per service."),(0,o.kt)("li",{parentName:"ul"},"If you run multiple services in your cluster, you must have a load balancer for each service."),(0,o.kt)("li",{parentName:"ul"},"It can be expensive to have a load balancer for every service.")),(0,o.kt)("p",null,"In contrast, when an ingress is used as the entrypoint into a cluster, the ingress can route traffic to multiple services with greater flexibility. It can map multiple HTTP requests to services without individual IP addresses for each service. "),(0,o.kt)("p",null,"Therefore, it is useful to have an ingress if you want multiple services to be exposed with the same IP address, the same Layer 7 protocol, or the same privileged node-ports: 80 and 443."),(0,o.kt)("p",null,"Ingress works in conjunction with one or more ingress controllers to dynamically route service requests. When the ingress receives a request, the ingress controller(s) in your cluster direct the request to the correct service based on service subdomains or path rules that you've configured."),(0,o.kt)("p",null,"Each Kubernetes Ingress resource corresponds roughly to a file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"server{}")," configuration block, where requests for specific files and folders are configured."),(0,o.kt)("p",null,"Your ingress, which creates a port of entry to your cluster similar to a load balancer, can reside within your cluster or externally. Ingress and ingress controllers residing in RKE-launched clusters are powered by ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),"."),(0,o.kt)("p",null,"Ingress can provide other functionality as well, such as SSL termination, name-based virtual hosting, and more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Using Rancher in a High Availability Configuration?")),(0,o.kt)("p",{parentName:"blockquote"},"Refrain from adding an Ingress to the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster. The Nginx Ingress Controller that Rancher uses acts as a global entry point for ",(0,o.kt)("em",{parentName:"p"},"all")," clusters managed by Rancher, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster.  Therefore, when users try to access an application, your Rancher connection may drop due to the Nginx configuration being reloaded. We recommend working around this issue by deploying applications only in clusters that you launch using Rancher.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For more information on how to set up ingress in Rancher, see ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Ingress"),"."),(0,o.kt)("li",{parentName:"ul"},"For complete information about ingress and ingress controllers, see the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress Documentation")),(0,o.kt)("li",{parentName:"ul"},"When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a Global DNS entry, see ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS"),".")))}h.isMDXComponent=!0}}]);