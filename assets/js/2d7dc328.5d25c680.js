"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54544],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"API",weight:24},l=void 0,c={unversionedId:"pages-for-subheaders/about-the-api",id:"version-2.0-2.4/pages-for-subheaders/about-the-api",title:"API",description:"How to use the API",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/about-the-api.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-the-api",permalink:"/v2.0-v2.4/pages-for-subheaders/about-the-api",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/about-the-api.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663001277,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"API",weight:24},sidebar:"tutorialSidebar",previous:{title:"kubectl Utility",permalink:"/v2.0-v2.4/reference-guides/cli-with-rancher/kubectl-utility"},next:{title:"API Tokens",permalink:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens"}},p={},u=[{value:"How to use the API",id:"how-to-use-the-api",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Making requests",id:"making-requests",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Pagination",id:"pagination",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-use-the-api"},"How to use the API"),(0,i.kt)("p",null,"The API has its own user interface accessible from a web browser.  This is an easy way to see resources, perform actions, and see the equivalent cURL or HTTP request & response.  To access it, click on your user avatar in the upper right corner. Under ",(0,i.kt)("strong",{parentName:"p"},"API & Keys"),", you can find the URL endpoint as well as create ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/user-settings/api-keys"},"API keys"),"."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"API requests must include authentication information.  Authentication is done with HTTP basic authentication using ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/user-settings/api-keys"},"API Keys"),". API keys can create new clusters and have access to multiple clusters via ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/clusters/"),". ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and project roles")," apply to these keys and restrict what clusters and projects the account can see and what actions they can take."),(0,i.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. For details on how to invalidate them, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens"},"API tokens page"),"."),(0,i.kt)("h2",{id:"making-requests"},"Making requests"),(0,i.kt)("p",null,"The API is generally RESTful but has several features to make the definition of everything discoverable by a client so that generic clients can be written instead of having to write specific code for every type of resource.  For detailed info about the generic API spec, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md"},"see here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every type has a Schema which describes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to get to the collection of this type of resources"),(0,i.kt)("li",{parentName:"ul"},"Every field the resource can have, along with their type, basic validation rules, whether they are required or optional, etc."),(0,i.kt)("li",{parentName:"ul"},"Every action that is possible on this type of resource, with their inputs and outputs (also as schemas)."),(0,i.kt)("li",{parentName:"ul"},"Every field that filtering is allowed on"),(0,i.kt)("li",{parentName:"ul"},"What HTTP verb methods are available for the collection itself, or for individual resources in the collection.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"So the theory is that you can load just the list of schemas and know everything about the API.  This is in fact how the UI for the API works, it contains no code specific to Rancher itself.  The URL to get Schemas is sent in every HTTP response as a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Api-Schemas")," header.  From there you can follow the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," link on each schema to know where to list resources, and other ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," inside of the returned resources to get any other information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In practice, you will probably just want to construct URL strings.  We highly suggest limiting this to the top-level to list a collection (",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),") or get a specific resource (",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>/<id>"),").  Anything deeper than that is subject to change in future releases.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resources have relationships between each other called links.  Each resource includes a map of ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," with the name of the link and the URL to retrieve that information.  Again you should ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," the resource and then follow the URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," map, not construct these strings yourself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most resources have actions, which do something or change the state of the resource.  To use these, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," map for the action you want.  Some actions require input or produce output, see the individual documentation for each type or the schemas for specific information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To edit a resource, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"links.update")," link on the resource with the fields that you want to change.  If the link is missing then you don't have permission to update the resource. Unknown fields and ones that are not editable are ignored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To delete a resource, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"links.remove")," link on the resource.  If the link is missing then you don't have permission to update the resource.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To create a new resource, HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the collection URL in the schema (which is ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),")."))),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"Most collections can be filtered on the server-side by common fields using HTTP query parameters.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"filters"),' map shows you what fields can be filtered on and what the filtered values were for the request you made.  The API UI has controls to setup filtering and show you the appropriate request.  For simple "equals" matches it\'s just ',(0,i.kt)("inlineCode",{parentName:"p"},"field=value"),".  Modifiers can be added to the field name, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"field_gt=42"),' for "field is greater than 42".  See the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md#filtering"},"API spec")," for full details."),(0,i.kt)("h2",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"Most collections can be sorted on the server-side by common fields using HTTP query parameters.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"sortLinks")," map shows you what sorts are available, along with the URL to get the collection sorted by that.  It also includes info about what the current response was sorted by, if specified."),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"API responses are paginated with a limit of 100 resources per page by default.  This can be changed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," query parameter, up to a maximum of 1000, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/pods?limit=1000"),".  The ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination")," map in collection responses tells you whether or not you have the full result set and has a link to the next page if you do not."))}d.isMDXComponent=!0}}]);