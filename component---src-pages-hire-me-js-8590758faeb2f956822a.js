(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n),i=a(155),c=a(153);a(156);t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(i.a,{location:a,title:n},r.a.createElement(c.a,{title:"Hire me",keywords:["hire","freelance","developer","javascript","react","reactjs","nodejs"]}),r.a.createElement("p",null,"If you like my mindset and the way I solve the problems drop me a line via the form above."),r.a.createElement("form",{onSubmit:l},r.a.createElement("label",{className:"form-row"},r.a.createElement("span",{className:"form-label"},"Your email:"),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("label",{className:"form-row"},r.a.createElement("span",{className:"form-label"},"What your project is about?:"),r.a.createElement("textarea",{name:"description",required:!0})),r.a.createElement("button",{type:"submit"},"Hire me")))};var o="1097489062";function l(e){e.preventDefault();var t=e.target.email.value,a=e.target.description.value;console.log(t,a)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(149),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(51),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},152:function(e){e.exports={data:{site:{siteMetadata:{author:"Ivan Mironchik",social:{mail:"mailto:aiven715@gmail.com",github:"//github.com/aiven715",twitter:"//twitter.com/aiven715",stackoverflow:"//stackoverflow.com/users/10788188/aiven715",linkedin:"//linkedin.com/in/aiven715",facebook:"//facebook.com/aiven715"}}}}}},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),c=(a(4),a(150)),o=a.n(c),l=a(148);t.a=function(e){var t=e.title,a=e.description,r=e.lang,c=void 0===r?"en":r,u=e.meta,m=void 0===u?[]:u,d=e.keywords,f=void 0===d?[]:d;return i.a.createElement(l.StaticQuery,{query:s,render:function(e){var n=a||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:c},title:t,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:t},{name:"twitter:description",content:n}].concat(f.length>0?{name:"keywords",content:f.join(", ")}:[]).concat(m)})},data:n})};var s="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Passionated programming",description:"Software Engineering blog",author:"Ivan Mironchik"}}}}},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(150),c=a.n(i),o=a(152),l=(a(159),a(148)),s=function(e){var t=e.title;return r.a.createElement(l.StaticQuery,{query:u,render:function(e){var a=e.site.siteMetadata,n=a.author,i=a.social;return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"page-title"},r.a.createElement("h3",null,r.a.createElement(l.Link,{to:"/"},t)),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:i.mail},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/mail.svg")})),r.a.createElement("a",{href:i.github},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/github.svg")})),r.a.createElement("a",{href:i.twitter},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/twitter.svg")})),r.a.createElement("a",{href:i.stackoverflow},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/stack-overflow.svg")})),r.a.createElement("a",{href:i.linkedin},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/linkedin.svg")})),r.a.createElement("a",{href:i.facebook},r.a.createElement("img",{src:Object(l.withPrefix)("/icons/facebook.svg")})))),r.a.createElement("div",{className:"bio"},r.a.createElement("img",{src:Object(l.withPrefix)("/images/avatar.jpg"),alt:n}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,n)," independent software consultant, specifying on building complex web applications")),r.a.createElement("div",{className:"menu"},r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/open-source"},"Open source")),r.a.createElement("div",{className:"menu-right"},r.a.createElement(l.Link,{to:"/hire-me"},"Hire me"))))},data:o})},u="2351195078";t.a=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Montserrat:900",rel:"stylesheet"})),r.a.createElement("div",{className:"container"},r.a.createElement(s,{title:t}),a))}},156:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(157);var n=function(e){var t=Math.round(e/5);return new Array(t||1).fill("☕️").join("")+" "+e+" min read"}},157:function(e,t,a){var n=a(11);n(n.P,"Array",{fill:a(158)}),a(34)("fill")},158:function(e,t,a){"use strict";var n=a(24),r=a(73),i=a(14);e.exports=function(e){for(var t=n(this),a=i(t.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,a),l=c>2?arguments[2]:void 0,s=void 0===l?a:r(l,a);s>o;)t[o++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-hire-me-js-8590758faeb2f956822a.js.map