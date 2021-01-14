(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(229)),o={id:"getting-started",title:"Next Step",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Getting Started",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},c={unversionedId:"core/getting-started",id:"core/getting-started",isDocsHomePage:!1,title:"Next Step",description:"Next Step",source:"@site/docs/core/Getting-Started.md",slug:"/core/getting-started",permalink:"/docs/core/getting-started",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/core/installation"},next:{title:"VivumLab Backup",permalink:"/docs/core/backup"}},l=[{value:"Securing Services",id:"securing-services",children:[]},{value:"File locations",id:"file-locations",children:[]},{value:"HTTPS via LetsEncrypt",id:"https-via-letsencrypt",children:[]},{value:"SMTP",id:"smtp",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"next-step"},"Next Step"),Object(i.b)("p",null,"Once you are all setup and ready to go you should be able to load SUI at ","[https://sui.vivumlab.xyz/]","."),Object(i.b)("h2",{id:"securing-services"},"Securing Services"),Object(i.b)("p",null,"If you want to add an extra layer of authentication to a service, all you have to do is set ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab service <service> auth -v true")),". Once this is set, authentication will be handled outside of the service."),Object(i.b)("p",null,"This is useful, if the service doesn't provide authentication, eg. SUI. and you would like it to be protected."),Object(i.b)("p",null,"By default ",Object(i.b)("inlineCode",{parentName:"p"},"Traefik")," handles authentication, if the ",Object(i.b)("inlineCode",{parentName:"p"},"<service>.auth")," is set to true. More specialised and full featured options are available, check out your options ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../welcome"}),"here"),"."),Object(i.b)("h2",{id:"file-locations"},"File locations"),Object(i.b)("p",null,"VivumLab sets up ",Object(i.b)("inlineCode",{parentName:"p"},"/home/root/vivumlab")," on your server, which maps to ",Object(i.b)("inlineCode",{parentName:"p"},"/home/<ssh_user>")," by default. All data used to set up your services, can be found here."),Object(i.b)("p",null,'If you can\'t find what you are looking for there; large databases, media collections (audio and video) are typically stored in the "/mnt/nas", which defaults to ',Object(i.b)("inlineCode",{parentName:"p"},"/mnt/nas"),". Using NAS storage? see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"Storage"}),"NAS")," for more information."),Object(i.b)("h2",{id:"https-via-letsencrypt"},"HTTPS via LetsEncrypt"),Object(i.b)("p",null,"VivumLab will use Traefik's built in LetsEncrypt integration to automatically generate SSL certificates for your various services."),Object(i.b)("p",null,"If initially some of the certificates don't appear valid, you have likely run into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://letsencrypt.org/docs/rate-limits/"}),"LetsEncrypt rate limits"),"."),Object(i.b)("p",null,"This is LetsEncrypts way of keeping LetsEncrypt usage fair, and as such does not have a fix. Limits will reset in a week. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://letsencrypt.org/docs/rate-limits/#a-id-overrides-a-overrides"}),"see here")),Object(i.b)("h2",{id:"smtp"},"SMTP"),Object(i.b)("p",null,"In order for your applications to be able to utilise email (confirmation emails, etc), you need an SMTP server. A nice free one is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://mailgun.com/"}),"Mailgun"),"."),Object(i.b)("p",null,"Create an account, and follow their steps to register your domain."),Object(i.b)("p",null,"Once that is completed, you can plug the settings they provide into your ",Object(i.b)("inlineCode",{parentName:"p"},"settings/encrypted.yml")," file.\nTo do this:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"run the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab config decrypt --dev"))," command"),Object(i.b)("li",{parentName:"ol"},"find and edit the ",Object(i.b)("inlineCode",{parentName:"li"},"decrypted.yml")," file",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"NOTE: editing this file may require superuser/ root permissions"))),Object(i.b)("li",{parentName:"ol"},"Set the following settings to what you have been provided")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"# SMTP Settings\nsmtp:\n  host:\n  port:\n  user:\n  pass:\n  from_email:\n  from_name:\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Now, edit the ",Object(i.b)("inlineCode",{parentName:"li"},"settings/decrypted.yml")," file, and set:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mailu:\n  forward_to_smtp: False\n")),Object(i.b)("p",null,"to ..."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mailu:\n  forward_to_smtp: True\n")),Object(i.b)("p",null,"This will allow mailu (and every other VivumLab service) to use the mail gun SMTP server"),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Save, and run ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"vlab deploy"))," to finalise any changes.")))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);