(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6842],{86842:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>yt});var r=n(72791),o=n(52007),i=n.n(o),a=n(39475),s=n.n(a),c=n(50077),l=n.n(c),u=n(31725),f=n.n(u),g="bodyAttributes",d="htmlAttributes",p="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(h).map((function(t){return h[t]})),"charset"),y="cssText",b="href",w="http-equiv",_="innerHTML",T="itemprop",j="name",k="property",x="rel",v="src",S="target",O={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},C="defaultTitle",A="defer",E="encodeSpecialCharacters",B="onChangeClientState",P="titleTemplate",U=Object.keys(O).reduce((function(t,e){return t[O[e]]=e,t}),{}),L=[h.NOSCRIPT,h.SCRIPT,h.STYLE],W="data-react-helmet",I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},D=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},z=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e},F=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(t){var e=Z(t,h.TITLE),n=Z(t,P);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,C);return e||r||void 0},H=function(t){return Z(t,B)||function(){}},Y=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return N({},t,e)}),{})},Q=function(t,e){return e.filter((function(t){return"undefined"!==typeof t[h.BASE]})).map((function(t){return t[h.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},K=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&J("Helmet: "+t+' should be of type "Array". Instead found type "'+I(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===e.indexOf(c)||n===x&&"canonical"===t[n].toLowerCase()||c===x&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(s)||s!==_&&s!==y&&s!==T||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=f()({},r[s],o[s]);r[s]=c}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){X(e)}),0)}}(),V=function(t){return clearTimeout(t)},G="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,$="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:n.g.cancelAnimationFrame||V,J=function(t){return console&&"function"===typeof console.warn&&console.warn(t)},tt=null,et=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,f=t.title,g=t.titleAttributes;ot(h.BODY,r),ot(h.HTML,o),rt(f,g);var d={baseTag:it(h.BASE,n),linkTags:it(h.LINK,i),metaTags:it(h.META,a),noscriptTags:it(h.NOSCRIPT,s),scriptTags:it(h.SCRIPT,l),styleTags:it(h.STYLE,u)},p={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(p[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),c(t,p,m)},nt=function(t){return Array.isArray(t)?t.join(""):t},rt=function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=nt(t)),ot(h.TITLE,e)},ot=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(W),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(W):n.getAttribute(W)!==a.join(",")&&n.setAttribute(W,a.join(","))}},it=function(t,e){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===_)n.innerHTML=e.innerHTML;else if(r===y)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s="undefined"===typeof e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(W,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},at=function(t){return Object.keys(t).reduce((function(e,n){var r="undefined"!==typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},st=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[O[n]||n]=t[n],e}),e)},ct=function(t,e,n){switch(t){case h.TITLE:return{toComponent:function(){return function(t,e,n){var o,i=((o={key:e})[W]=!0,o),a=st(n,i);return[r.createElement(h.TITLE,a,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var o=at(n),i=nt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+F(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case d:return{toComponent:function(){return st(e)},toString:function(){return at(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var o,i=((o={key:n})[W]=!0,o);return Object.keys(e).forEach((function(t){var n=O[t]||t;if(n===_||n===y){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),r.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===_||t===y)})).reduce((function(t,e){var o="undefined"===typeof r[e]?e:e+'="'+F(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===L.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},lt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,l=t.styleTags,u=t.title,f=void 0===u?"":u,p=t.titleAttributes;return{base:ct(h.BASE,e,r),bodyAttributes:ct(g,n,r),htmlAttributes:ct(d,o,r),link:ct(h.LINK,i,r),meta:ct(h.META,a,r),noscript:ct(h.NOSCRIPT,s,r),script:ct(h.SCRIPT,c,r),style:ct(h.STYLE,l,r),title:ct(h.TITLE,{title:f,titleAttributes:p},r)}},ut=function(t){var e,n;return n=e=function(e){function n(){return R(this,n),z(this,e.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.shouldComponentUpdate=function(t){return!l()(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:e};case h.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return N({},r,((e={})[n.type]=[].concat(r[n.type]||[],[N({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case h.TITLE:return N({},o,((e={})[r.type]=a,e.titleAttributes=N({},i),e));case h.BODY:return N({},o,{bodyAttributes:N({},i)});case h.HTML:return N({},o,{htmlAttributes:N({},i)})}return N({},o,((n={})[r.type]=N({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=N({},e);return Object.keys(t).forEach((function(e){var r;n=N({},n,((r={})[e]=t[e],r))})),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,o={};return r.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,i=r.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[U[n]||n]=t[n],e}),e)}(M(r,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:o=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(o,e)},n.prototype.render=function(){var e=this.props,n=e.children,o=M(e,["children"]),i=N({},o);return n&&(i=this.mapChildrenToProps(n,i)),r.createElement(t,i)},D(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(r.Component),e.propTypes={base:i().object,bodyAttributes:i().object,children:i().oneOfType([i().arrayOf(i().node),i().node]),defaultTitle:i().string,defer:i().bool,encodeSpecialCharacters:i().bool,htmlAttributes:i().object,link:i().arrayOf(i().object),meta:i().arrayOf(i().object),noscript:i().arrayOf(i().object),onChangeClientState:i().func,script:i().arrayOf(i().object),style:i().arrayOf(i().object),title:i().string,titleAttributes:i().object,titleTemplate:i().string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=lt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n}(s()((function(t){return{baseTag:Q([b,S],t),bodyAttributes:Y(g,t),defer:Z(t,A),encode:Z(t,E),htmlAttributes:Y(d,t),linkTags:K(h.LINK,[x,b],t),metaTags:K(h.META,[j,m,w,k,T],t),noscriptTags:K(h.NOSCRIPT,[_],t),onChangeClientState:H(t),scriptTags:K(h.SCRIPT,[v,_],t),styleTags:K(h.STYLE,[y],t),title:q(t),titleAttributes:Y(p,t)}}),(function(t){tt&&$(tt),t.defer?tt=G((function(){et(t,(function(){tt=null}))})):(et(t),tt=null)}),lt)((function(){return null})));ut.renderStatic=ut.rewind;var ft=n(70188),gt=n(2703),dt=n(79200),pt=n(46535),ht=n(80184);const mt=(0,gt.CL)()+1e3*((0,gt.QM)()+60*((0,gt.dn)()+60*(0,gt.eZ)()));class yt extends r.PureComponent{constructor(t){super(t),this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(mt):""}}componentDidMount(){const t=!!window.location.href.includes("hashtag_campaign"),{wall:e}=this.props,n=e.Wall.id,r=e.Wall.owner;t&&(0,dt.wl)({wallId:n,domainName:pt.QC?pt.nX?"https://test.taggbox.com/embed-widget/lite/".concat(n,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(e.Wall.url,"?hashtag_campaign=true"):pt.nX?"https://widget.taggbox.com/".concat(n,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(n),ownerId:r,screenshotSize:["1200x624"]}).then((t=>{let{data:n}=t;const{responseCode:r,responseData:o}=n;if(200==r&&o.length>0&&o[0]&&o[0].s3Url){const t=(0,gt.CL)()+1e3*((0,gt.QM)()+60*((0,gt.dn)()+60*(0,gt.eZ)()));this.setState({hashtag_campaign_image:"".concat(o[0].s3Url,"?v=").concat(t)})}else{const t=(0,gt.Bq)(e.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const n=(0,gt.Bq)(e.Personalization.widgetTheme);this.setState({hashtag_campaign_image:n})}))}render(){const{hashtag_campaign_image:t}=this.state,{wall:e}=this.props,n=!!(e.ThemeRule&&Object.keys(e.ThemeRule).length>0&&e.ThemeRule.link_font&&""!==e.ThemeRule.link_font),r=!(!n||"inherit"!==e.ThemeRule.link_font),o=!(!e.UgcSettings||"inherit"!==e.UgcSettings.onsite_link_font_btn),i=!(!e.UgcSettings||"inherit"!==e.UgcSettings.onsite_link_font_msg),a=!!(e.Banner&&Object.keys(e.Banner).length>0&&"inherit"===e.Banner.title_link_font),s=!!(e.Banner&&Object.keys(e.Banner).length>0&&"inherit"===e.Banner.subtitle_link_font),c=new URLSearchParams(window.location.search).get("preview"),l=e.Personalization.widgetTheme,u=!!window.location.href.includes("hashtag_campaign"),f=pt.nX?"Tagbox UGC Suite":pt.ZQ?"Tagembed Widget":"Taggbox",g="@font-face { font-family: 'TaggboxSocialFonts'; src: url('".concat(ft.do,"/media/web-fonts/TaggboxSocialFonts.ttf?var=").concat(2,"') format('truetype'), url('").concat(ft.do,"/media/web-fonts/TaggboxSocialFonts.woff?var=").concat(2,"') format('woff'), url('").concat(ft.do,"/media/web-fonts/TaggboxSocialFonts.svg?var=").concat(2,"') format('svg'); font-weight: normal; font-style: normal; font-display: swap;");return u?(0,ht.jsxs)(ut,{children:[pt.nX?(0,ht.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,ht.jsx)("meta",{property:"og:type",content:"website"}),(0,ht.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(e.Wall.id)}),(0,ht.jsx)("meta",{property:"og:title",content:"".concat(e.Wall.name," - ").concat(f," Widget")}),(0,ht.jsx)("meta",{property:"og:description",content:"".concat(e.Wall.name," hashtag campaign created using ").concat(f," Widget.")}),(0,ht.jsx)("meta",{property:"og:image",content:t}),(0,ht.jsx)("meta",{property:"type",content:"website"}),(0,ht.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(e.Wall.id)}),(0,ht.jsx)("meta",{property:"title",content:"".concat(e.Wall.name," - ").concat(f," Widget")}),(0,ht.jsx)("meta",{property:"description",content:"".concat(e.Wall.name," hashtag campaign created using ").concat(f," Widget.")}),(0,ht.jsx)("meta",{property:"image",content:t}),c?document.body.classList.add("tb_previw_th-".concat(l)):null,(0,ht.jsx)("style",{children:g}),1===e.Personalization.cssStatus?(0,ht.jsx)("style",{type:"text/css",children:e.Personalization.css}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_btn&&"Default"!=e.UgcSettings.onsite_link_font_btn?o?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_msg&&"Default"!=e.UgcSettings.onsite_link_font_msg?i?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,n&&e.ThemeRule.link_font&&"Default"!=e.ThemeRule.link_font?r?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.subtitle_link_font&&"Default"!=e.Banner.subtitle_link_font?s?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.title_link_font&&"Default"!=e.Banner.title_link_font?a?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,ht.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(e.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")?(0,ht.jsxs)(ut,{children:[pt.nX?(0,ht.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):pt.ZQ?(0,ht.jsx)("link",{rel:"icon",href:"https://widgets.tagembed.com/widget/logo192.png"}):null,(0,ht.jsx)("meta",{property:"og:type",content:"website"}),(0,ht.jsx)("meta",{property:"og:url",content:pt.ZQ?"https://widget-test.tagembed.com/".concat(e.Wall.id):"https://widget-lite.taggbox.com/".concat(e.Wall.id)}),(0,ht.jsx)("meta",{property:"og:title",content:"".concat(e.Wall.name," - ").concat(f," Widget")}),(0,ht.jsx)("meta",{property:"og:description",content:"".concat(e.Wall.name," featuring Social Feed using ").concat(f," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,ht.jsx)("meta",{property:"og:image",content:t}),(0,ht.jsx)("meta",{property:"type",content:"website"}),(0,ht.jsx)("meta",{property:"url",content:pt.ZQ?"https://widget-test.tagembed.com/".concat(e.Wall.id):"https://widget-lite.taggbox.com/".concat(e.Wall.id)}),(0,ht.jsx)("meta",{property:"title",content:"".concat(e.Wall.name," - ").concat(f," Widget")}),(0,ht.jsx)("meta",{property:"description",content:"".concat(e.Wall.name," featuring Social Feed using ").concat(f," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,ht.jsx)("meta",{property:"image",content:t}),c?document.body.classList.add("tb_previw_th-".concat(l)):null,(0,ht.jsx)("style",{children:g}),1===e.Personalization.cssStatus?(0,ht.jsx)("style",{type:"text/css",children:e.Personalization.css}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_btn&&"Default"!=e.UgcSettings.onsite_link_font_btn?o?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_msg&&"Default"!=e.UgcSettings.onsite_link_font_msg?i?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,n&&e.ThemeRule.link_font&&"Default"!=e.ThemeRule.link_font?r?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.subtitle_link_font&&"Default"!=e.Banner.subtitle_link_font?s?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.title_link_font&&"Default"!=e.Banner.title_link_font?a?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,ht.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(e.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):(0,ht.jsxs)(ut,{children:[c?document.body.classList.add("tb_previw_th-".concat(l)):null,(0,ht.jsx)("style",{children:g}),e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_button_status&&e.UgcSettings.onsite_css_font_btn?(0,ht.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(e.UgcSettings.onsite_css_font_btn),rel:"stylesheet"}):null,1===e.Personalization.cssStatus?(0,ht.jsx)("style",{type:"text/css",children:e.Personalization.css}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_btn&&"Default"!=e.UgcSettings.onsite_link_font_btn?o?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,e.UgcSettings&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_link_font_msg&&"Default"!=e.UgcSettings.onsite_link_font_msg?i?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,n&&e.ThemeRule.link_font&&"Default"!=e.ThemeRule.link_font?r?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.subtitle_link_font&&"Default"!=e.Banner.subtitle_link_font?s?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,e.Banner&&Object.keys(e.Banner).length>0&&e.Banner.title_link_font&&"Default"!=e.Banner.title_link_font?a?null:(0,ht.jsx)("link",{href:"".concat(ft.do,"/media/taggbox-fonts/").concat(e.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,ht.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,e.Wall&&e.Wall.google_tacking_status?(0,ht.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(e.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]})}}},80888:(t,e,n)=>{"use strict";var r=n(79047);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},52007:(t,e,n)=>{t.exports=n(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50077:t=>{var e="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!==c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!==c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!==c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!i(t[l[c]],a[l[c]]))return!1;return!0}return t!==t&&a!==a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},39475:(t,e,n)=>{"use strict";var r,o=n(72791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!==typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=t(l.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=6842.62186de4.chunk.js.map