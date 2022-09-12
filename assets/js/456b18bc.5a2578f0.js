"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36097],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),f=n,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?o.createElement(d,i(i({ref:r},c),{},{components:t})):o.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34009:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],u={title:"Examples",weight:400},s=void 0,l={unversionedId:"reference-guides/monitoring-v2-configuration/examples",id:"reference-guides/monitoring-v2-configuration/examples",title:"Examples",description:"ServiceMonitor",source:"@site/docs/reference-guides/monitoring-v2-configuration/examples.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/examples",permalink:"/reference-guides/monitoring-v2-configuration/examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/examples.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Examples",weight:400},sidebar:"tutorialSidebar",previous:{title:"Helm Chart Options",permalink:"/reference-guides/monitoring-v2-configuration/helm-chart-options"},next:{title:"Prometheus Federator",permalink:"/pages-for-subheaders/prometheus-federator"}},c={},p=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"PodMonitor",id:"podmonitor",level:3},{value:"PrometheusRule",id:"prometheusrule",level:3},{value:"Alertmanager Config",id:"alertmanager-config",level:3}],m={toc:p};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"servicemonitor"},"ServiceMonitor"),(0,a.kt)("p",null,"An example ServiceMonitor custom resource can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml"},"here.")," "),(0,a.kt)("h3",{id:"podmonitor"},"PodMonitor"),(0,a.kt)("p",null,"An example PodMonitor can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/example-app-pod-monitor.yaml"},"here.")," An example Prometheus resource that refers to it can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/prometheus-pod-monitor.yaml"},"here.")),(0,a.kt)("h3",{id:"prometheusrule"},"PrometheusRule"),(0,a.kt)("p",null,"For users who are familiar with Prometheus, a PrometheusRule contains the alerting and recording rules that you would normally place in a ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"Prometheus rule file"),"."),(0,a.kt)("p",null,"For a more fine-grained application of PrometheusRules within your cluster, the ruleSelector field on a Prometheus resource allows you to select which PrometheusRules should be loaded onto Prometheus based on the labels attached to the PrometheusRules resources."),(0,a.kt)("p",null,"An example PrometheusRule is on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/alerting.md"},"this page.")),(0,a.kt)("h3",{id:"alertmanager-config"},"Alertmanager Config"),(0,a.kt)("p",null,"For an example configuration, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#example-alertmanager-config"},"this section.")))}f.isMDXComponent=!0}}]);