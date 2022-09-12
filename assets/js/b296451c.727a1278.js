"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8799],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Logging Best Practices",weight:1},s=void 0,c={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",id:"reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",title:"Logging Best Practices",description:"In this guide, we recommend best practices for cluster-level logging and application logging.",source:"@site/docs/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",permalink:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Logging Best Practices",weight:1},sidebar:"tutorialSidebar",previous:{title:"Best Practices for Rancher Managed Clusters",permalink:"/pages-for-subheaders/rancher-managed-clusters"},next:{title:"Monitoring Best Practices",permalink:"/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"}},p={},u=[{value:"Cluster-level Logging",id:"cluster-level-logging",level:2},{value:"Cluster-wide Scraping",id:"cluster-wide-scraping",level:3},{value:"Kubernetes Components",id:"kubernetes-components",level:3},{value:"Application Logging",id:"application-logging",level:2},{value:"Specific Log Files",id:"specific-log-files",level:3},{value:"General Best Practices",id:"general-best-practices",level:2}],g={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide, we recommend best practices for cluster-level logging and application logging."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cluster-level-logging"},"Cluster-level Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#application-logging"},"Application Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#general-best-practices"},"General Best Practices"))),(0,o.kt)("p",null,"Before Rancher v2.5, logging in Rancher has historically been a pretty static integration. There were a fixed list of aggregators to choose from (ElasticSearch, Splunk, Kafka, Fluentd and Syslog), and only two configuration points to choose (Cluster-level and Project-level)."),(0,o.kt)("p",null,"Rancher provides a flexible experience for log aggregation. With the logging feature, administrators and users alike can deploy logging that meets fine-grained collection criteria while offering a wider array of destinations and configuration options. "),(0,o.kt)("p",null,'"Under the hood", Rancher logging uses the Banzai Cloud logging operator. We provide manageability of this operator (and its resources), and tie that experience in with managing your Rancher clusters. '),(0,o.kt)("h2",{id:"cluster-level-logging"},"Cluster-level Logging"),(0,o.kt)("h3",{id:"cluster-wide-scraping"},"Cluster-wide Scraping"),(0,o.kt)("p",null,"For some users, it is desirable to scrape logs from every container running in the cluster. This usually coincides with your security team's request (or requirement) to collect all logs from all points of execution."),(0,o.kt)("p",null,"In this scenario, it is recommended to create at least two ",(0,o.kt)("em",{parentName:"p"},"ClusterOutput")," objects - one for your security team (if you have that requirement), and one for yourselves, the cluster administrators. When creating these objects take care to choose an output endpoint that can handle the significant log traffic coming from the entire cluster. Also make sure to choose an appropriate index to receive all these logs."),(0,o.kt)("p",null,"Once you have created these ",(0,o.kt)("em",{parentName:"p"},"ClusterOutput")," objects, create a ",(0,o.kt)("em",{parentName:"p"},"ClusterFlow")," to collect all the logs. Do not define any ",(0,o.kt)("em",{parentName:"p"},"Include")," or ",(0,o.kt)("em",{parentName:"p"},"Exclude")," rules on this flow. This will ensure that all logs from across the cluster are collected. If you have two ",(0,o.kt)("em",{parentName:"p"},"ClusterOutputs"),", make sure to send logs to both of them. "),(0,o.kt)("h3",{id:"kubernetes-components"},"Kubernetes Components"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ClusterFlows")," have the ability to collect logs from all containers on all hosts in the Kubernetes cluster. This works well in cases where those containers are part of a Kubernetes pod; however, RKE containers exist outside of the scope of Kubernetes."),(0,o.kt)("p",null,"Currently the logs from RKE containers are collected, but are not able to easily be filtered. This is because those logs do not contain information as to the source container (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"). "),(0,o.kt)("p",null,"A future release of Rancher will include the source container name which will enable filtering of these component logs. Once that change is made, you will be able to customize a ",(0,o.kt)("em",{parentName:"p"},"ClusterFlow")," to retrieve ",(0,o.kt)("strong",{parentName:"p"},"only")," the Kubernetes component logs, and direct them to an appropriate output."),(0,o.kt)("h2",{id:"application-logging"},"Application Logging"),(0,o.kt)("p",null,"Best practice not only in Kubernetes but in all container-based applications is to direct application logs to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"stderr"),". The container runtime will then trap these logs and do ",(0,o.kt)("strong",{parentName:"p"},"something")," with them - typically writing them to a file. Depending on the container runtime (and its configuration), these logs can end up in any number of locations."),(0,o.kt)("p",null,"In the case of writing the logs to a file, Kubernetes helps by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," directory on each host. This directory symlinks the log files to their actual destination (which can differ based on configuration or container runtime). "),(0,o.kt)("p",null,"Rancher logging will read all log entries in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/containers"),", ensuring that all log entries from all containers (assuming a default configuration) will have the opportunity to be collected and processed. "),(0,o.kt)("h3",{id:"specific-log-files"},"Specific Log Files"),(0,o.kt)("p",null,"Log collection only retrieves ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," logs from pods in Kubernetes. But what if we want to collect logs from other files that are generated by applications? Here, a log streaming sidecar (or two) may come in handy."),(0,o.kt)("p",null,"The goal of setting up a streaming sidecar is to take log files that are written to disk, and have their contents streamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),". This way, the Banzai Logging Operator can pick up those logs and send them to your desired output. "),(0,o.kt)("p",null,"To set this up, edit your workload resource (e.g. Deployment) and add the following sidecar definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ncontainers:\n- args:\n  - -F\n  - /path/to/your/log/file.log\n  command:\n  - tail\n  image: busybox\n  name: stream-log-file-[name]\n  volumeMounts:\n  - mountPath: /path/to/your/log\n    name: mounted-log\n...\n")),(0,o.kt)("p",null,"This will add a container to your workload definition that will now stream the contents of (in this example) ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/your/log/file.log")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,o.kt)("p",null,"This log stream is then automatically collected according to any ",(0,o.kt)("em",{parentName:"p"},"Flows")," or ",(0,o.kt)("em",{parentName:"p"},"ClusterFlows")," you have setup. You may also wish to consider creating a ",(0,o.kt)("em",{parentName:"p"},"Flow")," specifically for this log file by targeting the name of the container. See example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  match:\n  - select:\n      container_names:\n      - stream-log-file-name\n...\n")),(0,o.kt)("h2",{id:"general-best-practices"},"General Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Where possible, output structured log entries (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"syslog"),", JSON). This makes handling of the log entry easier as there are already parsers written for these formats. "),(0,o.kt)("li",{parentName:"ul"},"Try to provide the name of the application that is creating the log entry, in the entry itself. This can make troubleshooting easier as Kubernetes objects do not always carry the name of the application as the object name. For instance, a pod ID may be something like ",(0,o.kt)("inlineCode",{parentName:"li"},"myapp-098kjhsdf098sdf98")," which does not provide much information about the application running inside the container. "),(0,o.kt)("li",{parentName:"ul"},"Except in the case of collecting all logs cluster-wide, try to scope your ",(0,o.kt)("em",{parentName:"li"},"Flow")," and ",(0,o.kt)("em",{parentName:"li"},"ClusterFlow")," objects tightly. This makes it easier to troubleshoot when problems arise, and also helps ensure unrelated log entries do not show up in your aggregator. An example of tight scoping would be to constrain a ",(0,o.kt)("em",{parentName:"li"},"Flow")," to a single ",(0,o.kt)("em",{parentName:"li"},"Deployment")," in a namespace, or perhaps even a single container within a ",(0,o.kt)("em",{parentName:"li"},"Pod"),"."),(0,o.kt)("li",{parentName:"ul"},"Keep the log verbosity down except when troubleshooting. High log verbosity poses a number of issues, chief among them being ",(0,o.kt)("strong",{parentName:"li"},"noise"),": significant events can be drowned out in a sea of ",(0,o.kt)("inlineCode",{parentName:"li"},"DEBUG")," messages. This is somewhat mitigated with automated alerting and scripting, but highly verbose logging still places an inordinate amount of stress on the logging infrastructure. "),(0,o.kt)("li",{parentName:"ul"},"Where possible, try to provide a transaction or request ID with the log entry. This can make tracing application activity across multiple log sources easier, especially when dealing with distributed applications.")))}d.isMDXComponent=!0}}]);