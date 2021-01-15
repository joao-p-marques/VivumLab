(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,m=s["".concat(b,".").concat(O)]||s[O]||u[O]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var l=2;l<i;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(229)),b={id:"octoprint",title:"OctoPrint",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"OctoPrint",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},c={unversionedId:"software/octoprint",id:"software/octoprint",isDocsHomePage:!1,title:"OctoPrint",description:"OctoPrint",source:"@site/docs/software/octoprint.md",slug:"/software/octoprint",permalink:"/docs/software/octoprint",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"OctoPrint",sidebar:"docs",previous:{title:"NodeRED",permalink:"/docs/software/nodered"},next:{title:"Ombi",permalink:"/docs/software/ombi"}},o=[{value:"Setup",id:"setup",children:[]},{value:"Information",id:"information",children:[]},{value:"SETUP",id:"setup-1",children:[{value:"Enabling octoprint",id:"enabling-octoprint",children:[]}]},{value:"FIRST RUN",id:"first-run",children:[{value:"SMTP/ MAIL",id:"smtp-mail",children:[]}]},{value:"ACCESS",id:"access",children:[]},{value:"OPTIONS",id:"options",children:[{value:"HTTPS_ONLY",id:"https_only",children:[]},{value:"AUTH",id:"auth",children:[]},{value:"DOMAIN",id:"domain",children:[]},{value:"SUBDOMAIN",id:"subdomain",children:[]},{value:"VERSION",id:"version",children:[]}]},{value:"Need more help?",id:"need-more-help",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"octoprint"},"OctoPrint"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://octoprint.org/"}),"OctoPrint")," The snappy web interface for your 3D printer."),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"To find the serial port and connect to your printer run"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"ls /dev/serial/by-id/*\n")),Object(i.b)("p",null,"then, set the value that corresponds to the 3D printer by going into the config file and under octoprint (in the devices array) add the address that you recieved in the previous step.\nUsing the pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"  devices: ['/dev/device1', '/dev/device2']\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-amd64-inactive?style=flat",alt:"amd64"}))," ",Object(i.b)("br",null),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-arm64-inactive?style=flat",alt:"arm64"}))," ",Object(i.b)("br",null),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-armv7-inactive?style=flat",alt:"armv7"}))," ",Object(i.b)("br",null)),Object(i.b)("h2",{id:"information"},"Information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Docker Image:")," !!! LINK TO DOCKER IMAGE/ DOCKER HUB !!! ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"Current Image Version:")," latest"),Object(i.b)("h2",{id:"setup-1"},"SETUP"),Object(i.b)("h3",{id:"enabling-octoprint"},"Enabling octoprint"),Object(i.b)("h4",{id:"command"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.enable True"))),Object(i.b)("h4",{id:"file-alteration"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  enable: True\n")),Object(i.b)("h4",{id:"finalising-changes"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h2",{id:"first-run"},"FIRST RUN"),Object(i.b)("p",null,"!!! ",Object(i.b)("strong",{parentName:"p"},"DEVELOPERS"),": make sure that you include any information that the user requires to get started, below. !!! ",Object(i.b)("br",null),"\n!!! Below are some ",Object(i.b)("strong",{parentName:"p"},"examples")," with headings, and with some ",Object(i.b)("strong",{parentName:"p"},"example")," instructions !!!"),Object(i.b)("h4",{id:"administrator-setup"},"ADMINISTRATOR SETUP"),Object(i.b)("p",null,"Navigate to ",Object(i.b)("em",{parentName:"p"},"https://False/admin")),Object(i.b)("p",null,"Create an account with your desired username; as this is the first user, octoprint makes this account the administrator."),Object(i.b)("h3",{id:"smtp-mail"},"SMTP/ MAIL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab decrypt"))," to decrypt the ",Object(i.b)("inlineCode",{parentName:"li"},"vault.yml")," file"),Object(i.b)("li",{parentName:"ol"},"make some changes")),Object(i.b)("h4",{id:"smtp-settings"},"SMTP Settings"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"smtp:\n  host:\n  port:\n  user:\n  pass:\n  from_email:\n  from_name:\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))," to complete the changes")),Object(i.b)("h2",{id:"access"},"ACCESS"),Object(i.b)("p",null,"octoprint (HTTPS) link: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://octoprint.vivumlab.xyz/"}),"https://octoprint.vivumlab.xyz/"),"\noctoprint (HTTP) link: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://octoprint.vivumlab.xyz/"}),"http://octoprint.vivumlab.xyz/")),Object(i.b)("h2",{id:"options"},"OPTIONS"),Object(i.b)("h3",{id:"https_only"},"HTTPS_ONLY"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default: False")," ",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"Options: True/False")),Object(i.b)("h4",{id:"command-1"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.https_only True"))),Object(i.b)("h4",{id:"file-alteration-1"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  https_only: True\n")),Object(i.b)("h5",{id:"finalising-changes-1"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h3",{id:"auth"},"AUTH"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default: False")," ",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"Options: True/False")),Object(i.b)("h4",{id:"command-2"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.auth True"))),Object(i.b)("h4",{id:"file-alteration-2"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  auth: True\n")),Object(i.b)("h5",{id:"finalising-changes-2"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h3",{id:"domain"},"DOMAIN"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default: False")," ",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"NOTE: include the sitename and top level domain suffix. eg. name.com, site.net")),Object(i.b)("h4",{id:"command-3"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.domain octoprint.com"))),Object(i.b)("h4",{id:"file-alteration-3"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  domain: octoprint.com\n")),Object(i.b)("h5",{id:"finalising-changes-3"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h3",{id:"subdomain"},"SUBDOMAIN"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default: octoprint")," ",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"NOTE: Periods/ delimiters are not required. eg. 'media' will set the full URL as 'media.vivumlab.xyz'")),Object(i.b)("h4",{id:"command-4"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.subdomain media"))),Object(i.b)("h4",{id:"file-alteration-4"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  subdomain: media\n")),Object(i.b)("h5",{id:"finalising-changes-4"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h3",{id:"version"},"VERSION"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default: latest")," ",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"NOTE: Ensure that the version exists")),Object(i.b)("h4",{id:"command-5"},"Command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab set octoprint.version 2.7"))),Object(i.b)("h4",{id:"file-alteration-5"},"File alteration:"),Object(i.b)("p",null,"set the appropriate service settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(i.b)("p",null,"eg."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"octoprint\n  version: 2.7\n")),Object(i.b)("h5",{id:"finalising-changes-5"},"Finalising changes:"),Object(i.b)("p",null,"run: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab update_one service=octoprint"))),Object(i.b)("h2",{id:"need-more-help"},"Need more help?"),Object(i.b)("p",null,"Further information regarding services can be found. ",Object(i.b)("br",null),"\nGeneral Information can be found in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://vivumlab.com/docs"}),"documentation"),". ",Object(i.b)("br",null),"\nAdditional assistance can be found on our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://vivumlab.com/docs/contact"}),"Contact Us")," page."))}p.isMDXComponent=!0}}]);