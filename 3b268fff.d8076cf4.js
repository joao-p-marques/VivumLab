(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return s}));var i=a(3),n=a(7),r=(a(0),a(229)),o={id:"authelia",title:"Authelia",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Authelia",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},l={unversionedId:"software/authelia",id:"software/authelia",isDocsHomePage:!1,title:"Authelia",description:"Authelia",source:"@site/docs/software/authelia.md",slug:"/software/authelia",permalink:"/docs/software/authelia",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"Authelia",sidebar:"docs",previous:{title:"Apache 2",permalink:"/docs/software/apache2"},next:{title:"Barcode Buddy",permalink:"/docs/software/barcodebuddy"}},u=[{value:"Information",id:"information",children:[]},{value:"SETUP",id:"setup",children:[{value:"What is this?",id:"what-is-this",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Overriding the default policy",id:"overriding-the-default-policy",children:[]},{value:"Enabling and customizing authelia",id:"enabling-and-customizing-authelia",children:[]}]},{value:"ACCESS",id:"access",children:[]},{value:"Need more help?",id:"need-more-help",children:[]}],c={rightToc:u};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"authelia"},"Authelia"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.Authelia.com"}),"Authelia")," is an open-source full-featured authentication server."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-amd64-inactive?style=flat",alt:"amd64"}))," ",Object(r.b)("br",null),"\n",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-arm64-inactive?style=flat",alt:"arm64"}))," ",Object(r.b)("br",null),"\n",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-armv7-inactive?style=flat",alt:"armv7"}))," ",Object(r.b)("br",null)),Object(r.b)("h2",{id:"information"},"Information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Docker Image:")," authelia/authelia ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Current Image Version:")," latest"),Object(r.b)("h2",{id:"setup"},"SETUP"),Object(r.b)("h3",{id:"what-is-this"},"What is this?"),Object(r.b)("p",null,"Authelia is a multi-factor, authentication proxy. Used in conjunction with traefik (which vivumlab already uses) it secures your vivumlab services behind authentication. By default you must authenticate with username and password, and at least one other 'factor' ie:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"one-time password from, say, google authenticator"),Object(r.b)("li",{parentName:"ul"},"a registered security key, for instance a YubiKey or something similar"),Object(r.b)("li",{parentName:"ul"},"A Push message to your mobile device through the Duo service")),Object(r.b)("p",null,"When enabled, Traefik will forward most requests (more on this later) to Authelia for authentication. Once you login to Authelia, it will redirect you to the service you requested. For instance, if you navigate to firefly.yourdomain.com, traefik will auto-redirect you to auth.yourname.com for authentication. Once you authenticate, it will redirect you back to firefly.yourdomain.com."),Object(r.b)("p",null,"On the backend, Authelia authenticates users against a userdb.yml file. The passwords in this file are hashed with sha512. If you need to manually edit the userdb.yml file, you'll need to create new password hashes with this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker run authelia/authelia:latest authelia hash-password 'YOUR NEW PASSWORD' | awk '{print $3}''Your new Password Here'\n")),Object(r.b)("p",null,"The docker image comes from ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/r/authelia/authelia"}),"authelia/authelia:latest")," and should support arm devices."),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Authelia is written in GO, and there is a known GO issue with certain Linux Kernel Versions. Specifically, Ubuntu 20.04 ships with a default kernel of 5.3.0-46 (as of 4/28/2020) Using this kernel will result in a constantly-dying-and-restarting Authelia container with a note that shows Runtime: mlock of signal stack failed.... Update your kernel to 5.3.15+, 5.4.2+, or 5.5+ You ",Object(r.b)("em",{parentName:"p"},"must")," upgrade your docker hosts' kernel to one of those versions for Authelia to work")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Authelia requires a working SMTP server to authenticate new users and register devices.")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"VivumLab ships with intelligent defaults for Authelia. However, there are some choices you must make. In config.yml, there is an Authelia section. The configuration options are explained below:"),Object(r.b)("h4",{id:"authelia-configuration-options"},"Authelia configuration options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"log_level: defaults to debug, you can set to 'error' as well")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"use_username: Defaults to true. if true, your authellia login name is your config.yml's default username: ",Object(r.b)("inlineCode",{parentName:"p"},"admin"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"max:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"retries: this is the maximum number of times someone can ",Object(r.b)("em",{parentName:"li"},"fail")," to authenticate within a given time frame before being locked out. (defaults 5)"),Object(r.b)("li",{parentName:"ul"},"retries_in_time: this is the time frame that a user has to fail X times in before they're banned. (Defaults to 2min.)"),Object(r.b)("li",{parentName:"ul"},"retries_ban_time: How long a user is prohibited from logging in after failing X times in Y mintes, per the first two variables. (defaults to 5 minutes) These three combined (as defaulted), means that a user who fails to authenticate 5 times within 2 minutes is banned for 5 minutes."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"default:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"factor_count: The number of authentication factors required to login. Options are:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"bypass")," - Authelia will not require authentication."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"one_factor")," - only a user/pass is required."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"two_factor")," - (",Object(r.b)("em",{parentName:"li"},"default"),") Username/password as well as a second factor is required."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"deny")," - Authelia will prevent login and access to the services."))),Object(r.b)("li",{parentName:"ul"},"cookie",Object(r.b)("em",{parentName:"li"},"expiration: How long the authentication cookie is good for. (","_","default: 1hr"),")"),Object(r.b)("li",{parentName:"ul"},"cookie",Object(r.b)("em",{parentName:"li"},"inactivity: How long the cookie can sit, without being refreshed (ie: user is active) before expiring. (","_","Defaults to 5min"),")"),Object(r.b)("li",{parentName:"ul"},"policy: This is the default policy for any un-named service. This is the policy for everything unless overriten by other service rules.")))),Object(r.b)("h3",{id:"overriding-the-default-policy"},"Overriding the default policy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"/home/root/vivumlab/Authelia/Authelia_config.yml")," file is the source of truth for post-deployment configuration settings. If you wish to override the default policy, stated in config.yml, you'll need to hand edit this configuration file and restart Authelia. You probably only need to do this if there is a service that you want to excempt from two-factor authentication, or excempt from Authelia all together. About 100 lines into the config you'll find a section that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yml"}),'rules:\n  - domain: portainer.vivumlab.xyz\n    policy: one_factor\n\n  - domain: auth.vivumlab.xyz\n    policy: bypass\n\n  - domain: "*.vivumlab.xyz"\n    policy: { { Authelia.default.factor_count } }\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Right above this section in your config file is a well documented explination of how this works.")),Object(r.b)("p",null,"Out of the box, the standard config bypasses Authelia for Authelia itself, and drops portainer down to a single-factor. All other subdomains are locked to the default factor-count, with the final rule. Note, the order of rules matters. The first matching rule wins. If you wish to set a subdomain/service to use something other than your configured default, simply add a clause to the rules section containing at least the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yml"}),"- domain: YourExampleSubdomainHere.vivumlab.xyz\n  policy: Whatever Policy You'd like for this domain.\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note, Authelia does understand the concept of groups, and can limit some services to particular groups, ie: administarators. You might use this to limit say, portainer, to admins.")),Object(r.b)("h3",{id:"enabling-and-customizing-authelia"},"Enabling and customizing authelia"),Object(r.b)("h4",{id:"command"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab service setup -s authelia"))),Object(r.b)("h5",{id:"file-alteration-not-recommended"},"File alteration (not recommended):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"edit config via cli ",Object(r.b)("inlineCode",{parentName:"li"},"vlab config edit_raw --dev")),Object(r.b)("li",{parentName:"ul"},"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"li"},"settings/decrypted.yml")," to true, after running ",Object(r.b)("inlineCode",{parentName:"li"},"vlab config decrypt --dev"))),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"authelia\n  enable: latest\n  hsts: True\n  auth: False\n  domain: False\n  subdomain: auth\n  version: latest\n")),Object(r.b)("h4",{id:"finalising-changes"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update -s authelia"))),Object(r.b)("h2",{id:"access"},"ACCESS"),Object(r.b)("p",null,"Authelia (HTTPS) link: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://auth.vivumlab.xyz/"}),"https://auth.vivumlab.xyz/"),"\nAuthelia (HTTP) link: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://auth.vivumlab.xyz/"}),"http://auth.vivumlab.xyz/")),Object(r.b)("h2",{id:"need-more-help"},"Need more help?"),Object(r.b)("p",null,"Further information regarding services can be found. ",Object(r.b)("br",null),"\nGeneral Information can be found in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://vivumlab.com/docs"}),"documentation"),". ",Object(r.b)("br",null),"\nAdditional assistance can be found on our ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://vivumlab.com/docs/contact"}),"Contact Us")," page."))}s.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=s(a),m=i,d=b["".concat(o,".").concat(m)]||b[m]||h[m]||r;return a?n.a.createElement(d,l(l({ref:t},c),{},{components:a})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);