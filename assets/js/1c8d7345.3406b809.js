"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69603],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||n;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6447:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],s={title:"Enable Prometheus Federator",weight:1},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",title:"Enable Prometheus Federator",description:"Requirements",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Enable Prometheus Federator",weight:1},sidebar:"tutorialSidebar",previous:{title:"Prometheus Federator Guides",permalink:"/pages-for-subheaders/prometheus-federator-guides"},next:{title:"Uninstall Prometheus Federator",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/uninstall-prometheus-federator"}},m={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Ensure the cattle-monitoring-system namespace is placed into the System Project (or a similarly locked down Project that has access to other Projects in the cluster)",id:"ensure-the-cattle-monitoring-system-namespace-is-placed-into-the-system-project-or-a-similarly-locked-down-project-that-has-access-to-other-projects-in-the-cluster",level:3},{value:"Configure rancher-monitoring to only watch for resources created by the Helm chart itself",id:"configure-rancher-monitoring-to-only-watch-for-resources-created-by-the-helm-chart-itself",level:3},{value:"Increase the CPU / memory limits of the Cluster Prometheus",id:"increase-the-cpu--memory-limits-of-the-cluster-prometheus",level:3},{value:"Install the Prometheus Federator Application",id:"install-the-prometheus-federator-application",level:2}],u={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"By default, Prometheus Federator is configured and intended to be deployed alongside ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/"},"rancher-monitoring"),", which deploys Prometheus Operator alongside a Cluster Prometheus that each Project Monitoring Stack is configured to federate namespace-scoped metrics from by default."),(0,n.kt)("p",null,"For instructions on installing rancher-monitoring, refer to ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"this page"),"."),(0,n.kt)("p",null,"The default configuration should already be compatible with your rancher-monitoring stack. However, to optimize the security and usability of Prometheus Federator in your cluster, we recommend making these additional configurations to rancher-monitoring:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ensure-the-cattle-monitoring-system-namespace-is-placed-into-the-system-project-or-a-similarly-locked-down-project-that-has-access-to-other-projects-in-the-cluster"},"Ensure the cattle-monitoring-system namespace is placed into the System Project"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#configure-rancher-monitoring-to-only-watch-for-resources-created-by-the-helm-chart-itself"},"Configure rancher-monitoring to only watch for resources created by the Helm chart itself"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#increase-the-cpu--memory-limits-of-the-cluster-prometheus"},"Increase the CPU / memory limits of the Cluster Prometheus"),".")),(0,n.kt)("h3",{id:"ensure-the-cattle-monitoring-system-namespace-is-placed-into-the-system-project-or-a-similarly-locked-down-project-that-has-access-to-other-projects-in-the-cluster"},"Ensure the cattle-monitoring-system namespace is placed into the System Project (or a similarly locked down Project that has access to other Projects in the cluster)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select Projects-Namespaces",src:r(96912).Z,width:"1118",height:"402"})),(0,n.kt)("p",null,"Prometheus Operator's security model expects that the namespace it is deployed into (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),") has limited access for anyone except Cluster Admins to avoid privilege escalation via execing into Pods (such as the Jobs executing Helm operations). In addition, deploying Prometheus Federator and all Project Prometheus stacks into the System Project ensures that each Project Prometheus is able to reach out to scrape workloads across all Projects, even if Network Policies are defined via Project Network Isolation. It also provides limited access for Project Owners, Project Members, and other users so that they're unable to access data that they shouldn't have access to (i.e., being allowed to exec into pods, set up the ability to scrape namespaces outside of a given Project, etc.)."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," project to check your namespaces:"),(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces")," in the Rancher UI. This will display all of the namespaces in the ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," project:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Select Projects-Namespaces",src:r(56814).Z,width:"894",height:"693"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you have an existing Monitoring V2 installation within the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace, but that namespace is not in the ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," project, you may move the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace into the ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," project or into another project of limited access. To do so, you may either:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Drag and drop the namespace into the ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," project or")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," to the right of the namespace, click ",(0,n.kt)("strong",{parentName:"p"},"Move"),", then choose ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," from the ",(0,n.kt)("strong",{parentName:"p"},"Target Project")," dropdown"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Move to a New Project",src:r(81643).Z,width:"484",height:"347"})))))),(0,n.kt)("h3",{id:"configure-rancher-monitoring-to-only-watch-for-resources-created-by-the-helm-chart-itself"},"Configure rancher-monitoring to only watch for resources created by the Helm chart itself"),(0,n.kt)("p",null,"Since each Project Monitoring Stack will watch the other namespaces and collect additional custom workload metrics or dashboards already, it's recommended to configure the following settings on all selectors to ensure that the Cluster Prometheus Stack only monitors resources created by the Helm Chart itself:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'matchLabels:\n  release: "rancher-monitoring"\n')),(0,n.kt)("p",null,"The following selector fields are recommended to have this value:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".Values.alertmanager.alertmanagerSpec.alertmanagerConfigSelector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.serviceMonitorSelector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.podMonitorSelector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.ruleSelector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.probeSelector"))),(0,n.kt)("p",null,"Once this setting is turned on, you can always create ServiceMonitors or PodMonitors that are picked up by the Cluster Prometheus by adding the label ",(0,n.kt)("inlineCode",{parentName:"p"},'release: "rancher-monitoring"')," to them, in which case they will be ignored by Project Monitoring Stacks automatically by default, even if the namespace in which those ServiceMonitors or PodMonitors reside in are not system namespaces."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you don't want to allow users to be able to create ServiceMonitors and PodMonitors that aggregate into the Cluster Prometheus in Project namespaces, you can additionally set the namespaceSelectors on the chart to only target system namespaces (which must contain ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),", where resources are deployed into by default by rancher-monitoring; you will also need to monitor the ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," namespace to get apiserver metrics or create a custom ServiceMonitor to scrape apiserver metrics from the Service residing in the default namespace) to limit your Cluster Prometheus from picking up other Prometheus Operator CRs. In that case, it would be recommended to turn ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.prometheus.prometheusSpec.ignoreNamespaceSelectors=true")," to allow you to define ServiceMonitors that can monitor non-system namespaces from within a system namespace."))),(0,n.kt)("h3",{id:"increase-the-cpu--memory-limits-of-the-cluster-prometheus"},"Increase the CPU / memory limits of the Cluster Prometheus"),(0,n.kt)("p",null,"Depending on a cluster's setup, it's generally recommended to give a large amount of dedicated memory to the Cluster Prometheus to avoid restarts due to out-of-memory errors (OOMKilled) usually caused by churn created in the cluster that causes a large number of high cardinality metrics to be generated and ingested by Prometheus within one block of time. This is one of the reasons why the default Rancher Monitoring stack expects around 4GB of RAM to be able to operate in a normal-sized cluster. However, when introducing Project Monitoring Stacks that are all sending ",(0,n.kt)("inlineCode",{parentName:"p"},"/federate"),' requests to the same Cluster Prometheus and are reliant on the Cluster Prometheus being "up" to federate that system data on their namespaces, it\'s even more important that the Cluster Prometheus has an ample amount of CPU / memory assigned to it to prevent an outage that can cause data gaps across all Project Prometheis in the cluster.'),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"There are no specific recommendations on how much memory the Cluster Prometheus should be configured with since it depends entirely on the user's setup (namely the likelihood of encountering a high churn rate and the scale of metrics that could be generated at that time); it generally varies per setup."))),(0,n.kt)("h2",{id:"install-the-prometheus-federator-application"},"Install the Prometheus Federator Application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the cluster that you want to install Prometheus Federator and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Apps -> Charts"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Federator")," chart."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Install"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Metadata")," page, click ",(0,n.kt)("strong",{parentName:"li"},"Next"),"."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Project Release Namespace Project ID")," field, the ",(0,n.kt)("inlineCode",{parentName:"li"},"System Project")," is used as the default but can be overridden with another project with similarly ",(0,n.kt)("a",{parentName:"li",href:"#ensure-the-cattle-monitoring-system-namespace-is-placed-into-the-system-project-or-a-similarly-locked-down-project-that-has-access-to-other-projects-in-the-cluster"},"limited access"),". \x3c!-- add info on retrieving project IDs >"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Install"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The Prometheus Federator app is deployed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."))}d.isMDXComponent=!0},56814:function(e,t,r){t.Z=r.p+"assets/images/cattle-monitoring-system-8e4a3ee096b3865e2d8878fd7f7f1eab.png"},96912:function(e,t,r){t.Z=r.p+"assets/images/install-in-system-project-835e5a71298c8874a2011604b5d28618.png"},81643:function(e,t,r){t.Z=r.p+"assets/images/move-to-new-project-c7bc87d42c5189c2cccb2e25960da44e.png"}}]);