"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31032],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=u(r),p=a,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47080:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={title:"Security",weight:20,aliases:["/rancher/v2.x/en/security/"]},c=void 0,u={unversionedId:"pages-for-subheaders/rancher-security",id:"pages-for-subheaders/rancher-security",title:"Security",description:"Security policy",source:"@site/docs/pages-for-subheaders/rancher-security.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-security",permalink:"/pages-for-subheaders/rancher-security",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-security.md",tags:[],version:"current",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Security",weight:20,aliases:["/rancher/v2.x/en/security/"]},sidebar:"tutorialSidebar",previous:{title:"Example YAML File",permalink:"/reference-guides/pipelines/example-yaml"},next:{title:"Self-Assessment and Hardening Guides for Rancher v2.6",permalink:"/pages-for-subheaders/rancher-v2.6-hardening-guides"}},l={},d=[{value:"NeuVector Integration with Rancher",id:"neuvector-integration-with-rancher",level:3},{value:"Running a CIS Security Scan on a Kubernetes Cluster",id:"running-a-cis-security-scan-on-a-kubernetes-cluster",level:3},{value:"SELinux RPM",id:"selinux-rpm",level:3},{value:"Rancher Hardening Guide",id:"rancher-hardening-guide",level:3},{value:"The CIS Benchmark and Self-Assessment",id:"the-cis-benchmark-and-self-assessment",level:3},{value:"Third-party Penetration Test Reports",id:"third-party-penetration-test-reports",level:3},{value:"Rancher Security Advisories and CVEs",id:"rancher-security-advisories-and-cves",level:3},{value:"Kubernetes Security Best Practices",id:"kubernetes-security-best-practices",level:3}],h={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",{width:"100%"},(0,s.kt)("tr",{style:{verticalAlign:"top"}},(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Security policy"),(0,s.kt)("p",{style:{padding:"8px"}},"Rancher Labs supports responsible disclosure, and endeavours to resolve all issues in a reasonable time frame. ")),(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Reporting process"),(0,s.kt)("p",{style:{padding:"8px"}},"Please submit possible security issues by emailing ",(0,s.kt)("a",{href:"mailto:security-rancher@suse.com"},"security-rancher@suse.com")," .")),(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Announcements"),(0,s.kt)("p",{style:{padding:"8px"}},"Subscribe to the ",(0,s.kt)("a",{href:"https://forums.rancher.com/c/announcements"},"Rancher announcements forum")," for release updates.")))),(0,s.kt)("p",null,"Security is at the heart of all Rancher features. From integrating with all the popular authentication tools and services, to an enterprise grade ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC capability"),", Rancher makes your Kubernetes clusters even more secure."),(0,s.kt)("p",null,"On this page, we provide security related documentation along with resources to help you secure your Rancher installation and your downstream Kubernetes clusters."),(0,s.kt)("h3",{id:"neuvector-integration-with-rancher"},"NeuVector Integration with Rancher"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"New in v2.6.5")),(0,s.kt)("p",null,"NeuVector is an open-source, container-focused security application that is now integrated into Rancher. NeuVector provides production security, DevOps vulnerability protection, and a container firewall, et al. Please see the ",(0,s.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/neuvector"},"Rancher docs")," and the ",(0,s.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"NeuVector docs")," for more information."),(0,s.kt)("h3",{id:"running-a-cis-security-scan-on-a-kubernetes-cluster"},"Running a CIS Security Scan on a Kubernetes Cluster"),(0,s.kt)("p",null,"Rancher leverages ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench"},"kube-bench")," to run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/cis-benchmarks/"},"CIS")," (Center for Internet Security) Kubernetes Benchmark."),(0,s.kt)("p",null,"The CIS Kubernetes Benchmark is a reference document that can be used to establish a secure configuration baseline for Kubernetes."),(0,s.kt)("p",null,"The Center for Internet Security (CIS) is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace".'),(0,s.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,s.kt)("p",null,"The Benchmark provides recommendations of two types: Automated and Manual. We run tests related to only Automated recommendations."),(0,s.kt)("p",null,"When Rancher runs a CIS security scan on a cluster, it generates a report showing the results of each test, including a summary with the number of passed, skipped and failed tests. The report also includes remediation steps for any failed tests."),(0,s.kt)("p",null,"For details, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cis-scan-guides"},"security scans"),"."),(0,s.kt)("h3",{id:"selinux-rpm"},"SELinux RPM"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8."),(0,s.kt)("p",null,"We provide two RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"rke2-selinux"),". For details, see ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/selinux-rpm"},"this page"),"."),(0,s.kt)("h3",{id:"rancher-hardening-guide"},"Rancher Hardening Guide"),(0,s.kt)("p",null,"The Rancher Hardening Guide is based on controls and best practices found in the ",(0,s.kt)("a",{href:"https://www.cisecurity.org/benchmark/kubernetes/",target:"_blank"},"CIS Kubernetes Benchmark")," from the Center for Internet Security."),(0,s.kt)("p",null,"The hardening guides provide prescriptive guidance for hardening a production installation of Rancher. See Rancher's guides for ",(0,s.kt)("a",{parentName:"p",href:"#the-cis-benchmark-and-self-sssessment"},"Self Assessment of the CIS Kubernetes Benchmark")," for the full list of security controls."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The hardening guides describe how to secure the nodes in your cluster, and it is recommended to follow a hardening guide before installing Kubernetes.")),(0,s.kt)("p",null,"Each version of the hardening guide is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher."),(0,s.kt)("h3",{id:"the-cis-benchmark-and-self-assessment"},"The CIS Benchmark and Self-Assessment"),(0,s.kt)("p",null,"The benchmark self-assessment is a companion to the Rancher security hardening guide. While the hardening guide shows you how to harden the cluster, the benchmark guide is meant to help you evaluate the level of security of the hardened cluster."),(0,s.kt)("p",null,"Because Rancher and RKE install Kubernetes services as Docker containers, many of the control verification checks in the CIS Kubernetes Benchmark don't apply. This guide will walk through the various controls and provide updated example commands to audit compliance in Rancher created clusters. The original benchmark documents can be downloaded from the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/benchmark/kubernetes/"},"CIS website"),"."),(0,s.kt)("p",null,"Each version of Rancher's self-assessment guide corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark."),(0,s.kt)("h3",{id:"third-party-penetration-test-reports"},"Third-party Penetration Test Reports"),(0,s.kt)("p",null,"Rancher periodically hires third parties to perform security audits and penetration tests of the Rancher 2.x software stack. The environments under test follow the Rancher provided hardening guides at the time of the testing. Results are posted when the third party has also verified fixes classified MEDIUM or above."),(0,s.kt)("p",null,"Results:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf"},"Cure53 Pen Test - July 2019")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf"},"Untamed Theory Pen Test - March 2019"))),(0,s.kt)("h3",{id:"rancher-security-advisories-and-cves"},"Rancher Security Advisories and CVEs"),(0,s.kt)("p",null,"Rancher is committed to informing the community of security issues in our products. For the list of CVEs (Common Vulnerabilities and Exposures) for issues we have resolved, refer to ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/rancher-security/security-advisories-and-cves"},"this page.")),(0,s.kt)("h3",{id:"kubernetes-security-best-practices"},"Kubernetes Security Best Practices"),(0,s.kt)("p",null,"For recommendations on securing your Kubernetes cluster, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/rancher-security/kubernetes-security-best-practices"},"Kubernetes Security Best Practices")," guide."))}p.isMDXComponent=!0}}]);