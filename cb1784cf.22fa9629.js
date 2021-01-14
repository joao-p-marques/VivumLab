(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(229)),c={id:"airsonic",title:"Airsonic",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Airsonic",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},o={unversionedId:"software/airsonic",id:"software/airsonic",isDocsHomePage:!1,title:"Airsonic",description:"Airsonic",source:"@site/docs/software/airsonic.md",slug:"/software/airsonic",permalink:"/docs/software/airsonic",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"Airsonic",sidebar:"docs",previous:{title:"AdGuard Home",permalink:"/docs/software/adguardhome"},next:{title:"Apache 2",permalink:"/docs/software/apache2"}},s=[{value:"Information",id:"information",children:[]},{value:"SETUP",id:"setup",children:[{value:"Enabling and customizing airsonic",id:"enabling-and-customizing-airsonic",children:[]}]},{value:"FIRST RUN",id:"first-run",children:[]},{value:"ACCESS",id:"access",children:[]},{value:"Need more help?",id:"need-more-help",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"airsonic"},"Airsonic"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://airsonic.github.io/"}),"Airsonic")," is a free, web-based media streamer, providing ubiquitous access to your music."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-amd64-inactive?style=flat",alt:"amd64"}))," ",Object(i.b)("br",null),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-arm64-inactive?style=flat",alt:"arm64"}))," ",Object(i.b)("br",null),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-armv7-inactive?style=flat",alt:"armv7"}))," ",Object(i.b)("br",null)),Object(i.b)("h2",{id:"information"},"Information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Docker Image:")," linuxserver/airsonic ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"Current Image Version:")," latest"),Object(i.b)("h2",{id:"setup"},"SETUP"),Object(i.b)("h3",{id:"enabling-and-customizing-airsonic"},"Enabling and customizing airsonic"),Object(i.b)("h4",{id:"command"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab service setup -s airsonic"))),Object(i.b)("h5",{id:"file-alteration-not-recommended"},"File alteration (not recommended):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"edit config via cli ",Object(i.b)("inlineCode",{parentName:"li"},"vlab config edit_raw --dev")),Object(i.b)("li",{parentName:"ul"},"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"li"},"settings/decrypted.yml")," to true, after running ",Object(i.b)("inlineCode",{parentName:"li"},"vlab config decrypt --dev"))),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"airsonic\n  enable: latest\n  hsts: True\n  auth: False\n  domain: False\n  subdomain: airsonic\n  version: latest\n")),Object(i.b)("h4",{id:"finalising-changes"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update -s airsonic"))),Object(i.b)("h2",{id:"first-run"},"FIRST RUN"),Object(i.b)("p",null,"!!! ",Object(i.b)("strong",{parentName:"p"},"DEVELOPERS"),": make sure that you include any information that the user requires to get started, below. !!! ",Object(i.b)("br",null),"\n!!! Below are some ",Object(i.b)("strong",{parentName:"p"},"examples")," with headings, and with some ",Object(i.b)("strong",{parentName:"p"},"example")," instructions !!!"),Object(i.b)("h4",{id:"administrator-setup"},"ADMINISTRATOR SETUP"),Object(i.b)("p",null,"Navigate to ",Object(i.b)("em",{parentName:"p"},"https://False/admin")),Object(i.b)("p",null,"Create an account with your desired username; as this is the first user, airsonic makes this account the administrator."),Object(i.b)("h2",{id:"access"},"ACCESS"),Object(i.b)("p",null,"Airsonic (HTTPS) link: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://airsonic.vivumlab.xyz/"}),"https://airsonic.vivumlab.xyz/"),"\nAirsonic (HTTP) link: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://airsonic.vivumlab.xyz/"}),"http://airsonic.vivumlab.xyz/")),Object(i.b)("h2",{id:"need-more-help"},"Need more help?"),Object(i.b)("p",null,"Further information regarding services can be found. ",Object(i.b)("br",null),"\nGeneral Information can be found in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://vivumlab.com/docs"}),"documentation"),". ",Object(i.b)("br",null),"\nAdditional assistance can be found on our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://vivumlab.com/docs/contact"}),"Contact Us")," page."))}l.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);