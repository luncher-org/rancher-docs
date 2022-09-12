"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14755],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?t.createElement(m,o(o({ref:n},l),{},{components:r})):t.createElement(m,o({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94160:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"SELinux RPM"},c=void 0,u={unversionedId:"pages-for-subheaders/selinux-rpm",id:"version-2.5/pages-for-subheaders/selinux-rpm",title:"SELinux RPM",description:"Available as of v2.5.8",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/selinux-rpm.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/selinux-rpm",permalink:"/v2.5/pages-for-subheaders/selinux-rpm",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/selinux-rpm.md",tags:[],version:"2.5",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"SELinux RPM"},sidebar:"tutorialSidebar",previous:{title:"CIS 1.6 Benchmark - Self-Assessment Guide - Rancher v2.5.4",permalink:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.6-benchmark"},next:{title:"About rancher-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"}},l={},p=[],d={toc:p};function f(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux."),(0,i.kt)("p",null,"Developed by Red Hat, it is an implementation of mandatory access controls (MAC) on Linux. Mandatory access controls allow an administrator of a system to define how applications and users can access different resources such as files, devices, networks and inter-process communication. SELinux also enhances security by making an OS restrictive by default. "),(0,i.kt)("p",null,"After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8. To check whether SELinux is enabled and enforcing on your system, use ",(0,i.kt)("inlineCode",{parentName:"p"},"getenforce"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# getenforce\nEnforcing\n")),(0,i.kt)("p",null,"We provide two RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"},(0,i.kt)("inlineCode",{parentName:"a"},"rancher-selinux"))," and ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},(0,i.kt)("inlineCode",{parentName:"a"},"rke2-selinux")),"."))}f.isMDXComponent=!0}}]);