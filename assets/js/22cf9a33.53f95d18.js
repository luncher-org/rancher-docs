"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12752],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",shortTitle:"Set up K3s for Rancher",weight:2},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",id:"how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",description:"This section describes how to install a Kubernetes cluster according to the best practices for the Rancher server environment.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",shortTitle:"Set up K3s for Rancher",weight:2},sidebar:"tutorialSidebar",previous:{title:"About High-availability Installations",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs"},next:{title:"Setting up a High-availability RKE Kubernetes Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"}},c={},p=[{value:"1. Install Kubernetes and Set up the K3s Server",id:"1-install-kubernetes-and-set-up-the-k3s-server",level:3},{value:"2. Confirm that K3s is Running",id:"2-confirm-that-k3s-is-running",level:3},{value:"3. Save and Start Using the kubeconfig File",id:"3-save-and-start-using-the-kubeconfig-file",level:3},{value:"4. Check the Health of Your Cluster Pods",id:"4-check-the-health-of-your-cluster-pods",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how to install a Kubernetes cluster according to the ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations#environment-for-kubernetes-installations"},"best practices for the Rancher server environment.")),(0,s.kt)("p",null,"For systems without direct internet access, refer to the air gap installation instructions."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Single-node Installation Tip:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In a single-node Kubernetes cluster, the Rancher server does not have high availability, which is important for running Rancher in production. However, installing Rancher on a single-node cluster can be useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path."),(0,s.kt)("p",{parentName:"div"},"To set up a single-node K3s cluster, run the Rancher server installation command on just one node instead of two nodes."),(0,s.kt)("p",{parentName:"div"},"In both single-node setups, Rancher can be installed with Helm on the Kubernetes cluster in the same way that it would be installed on any other cluster."))),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"These instructions assume you have set up two nodes, a load balancer, a DNS record, and an external MySQL database as described in ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},"this section.")),(0,s.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,s.kt)("h1",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,s.kt)("h3",{id:"1-install-kubernetes-and-set-up-the-k3s-server"},"1. Install Kubernetes and Set up the K3s Server"),(0,s.kt)("p",null,"When running the command to start the K3s Kubernetes API server, you will pass in an option to use the external datastore that you set up earlier."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Connect to one of the Linux nodes that you have prepared to run the Rancher server.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On the Linux node, run this command to start the K3s server and connect it to the external datastore:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("p",{parentName:"li"},"To specify the K3s version, use the INSTALL_K3S_VERSION environment variable:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -sfL https://get.k3s.io |  INSTALL_K3S_VERSION=vX.Y.Z sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The datastore endpoint can also be passed in using the environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"$K3S_DATASTORE_ENDPOINT"),".")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Repeat the same command on your second K3s server node."))),(0,s.kt)("h3",{id:"2-confirm-that-k3s-is-running"},"2. Confirm that K3s is Running"),(0,s.kt)("p",null,"To confirm that K3s has been set up successfully, run the following command on either of the K3s server nodes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get nodes\n")),(0,s.kt)("p",null,"Then you should see two nodes with the master role:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo k3s kubectl get nodes\nNAME               STATUS   ROLES    AGE    VERSION\nip-172-31-60-194   Ready    master   44m    v1.17.2+k3s1\nip-172-31-63-88    Ready    master   6m8s   v1.17.2+k3s1  \n")),(0,s.kt)("p",null,"Then test the health of the cluster pods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get pods --all-namespaces\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have successfully set up a K3s Kubernetes cluster."),(0,s.kt)("h3",{id:"3-save-and-start-using-the-kubeconfig-file"},"3. Save and Start Using the kubeconfig File"),(0,s.kt)("p",null,"When you installed K3s on each Rancher server node, a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,s.kt)("p",null,"To use this ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,s.kt)("li",{parentName:"ol"},"Copy the file at ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and save it to the directory ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,s.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,s.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,s.kt)("inlineCode",{parentName:"li"},"k3s.yaml"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your K3s cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,s.kt)("p",null,"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s documentation")," or the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,s.kt)("h3",{id:"4-check-the-health-of-your-cluster-pods"},"4. Check the Health of Your Cluster Pods"),(0,s.kt)("p",null,"Now that you have set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to access the cluster from your local machine."),(0,s.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo kubectl get pods --all-namespaces\nNAMESPACE       NAME                                      READY   STATUS    RESTARTS   AGE\nkube-system     metrics-server-6d684c7b5-bw59k            1/1     Running   0          8d\nkube-system     local-path-provisioner-58fb86bdfd-fmkvd   1/1     Running   0          8d\nkube-system     coredns-d798c9dd-ljjnf                    1/1     Running   0          8d\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have confirmed that you can access the cluster with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and the K3s cluster is running successfully. Now the Rancher management server can be installed on the cluster."))}h.isMDXComponent=!0}}]);