(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8092],{72414:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function s(e,t,r){var o={};return r.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&r.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"===typeof r?r:l}(a,r)(e[a],t[a],r):o[a]=n(t[a],r))})),o}function l(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?a.arrayMerge(e,r,a):s(e,r,a):n(r,a)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})};var u=l;e.exports=u},5237:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},11749:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}const a=function(e,t){var r;void 0===t&&(t=o);var n,a=[],i=!1;return function(){for(var o=[],s=0;s<arguments.length;s++)o[s]=arguments[s];return i&&r===this&&t(o,a)||(n=e.apply(this,o),i=!0,r=this,a=o),n}}},43488:(e,t,r)=>{"use strict";var n=r(93959);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},11942:(e,t,r)=>{e.exports=r(43488)()},93959:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24901:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!==l--;)if(!a(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!==l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof i.toString)return e.toString()===i.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!==e&&i!==i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},28891:(e,t,r)=>{var n,o=r(12897).default,a=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))c.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(n=s(t,o))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?a(u(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),f={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(f,{default:()=>g}),e.exports=(n=f,p(i({},"__esModule",{value:!0}),n));var h=y(r(9950)),b=y(r(24901)),m=r(77910),P=r(24261);class g extends h.Component{constructor(){var e;super(...arguments),e=this,d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",(function(){e.isLoading=!1,e.props.onError(...arguments)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:a,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,b.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,P.isMediaStream)(t))return console.warn("ReactPlayer: the attempt to load ".concat(t," is being deferred until the player has loaded")),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==a&&this.player.setPlaybackRate&&this.player.setPlaybackRate(a),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,o(o({},this.props),{},{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}d(g,"displayName","Player"),d(g,"propTypes",m.propTypes),d(g,"defaultProps",m.defaultProps)},25622:(e,t,r)=>{var n,o=r(12897).default,a=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))c.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(n=s(t,o))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?a(u(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),f={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(f,{createReactPlayer:()=>x}),e.exports=(n=f,p(i({},"__esModule",{value:!0}),n));var h=y(r(9950)),b=y(r(72414)),m=y(r(11749)),P=y(r(24901)),g=r(77910),v=r(24261),w=y(r(28891));const O=(0,v.lazy)((()=>r.e(6353).then(r.t.bind(r,64896,23)))),_="undefined"!==typeof window&&window.document&&"undefined"!==typeof document,k="undefined"!==typeof r.g&&r.g.window&&r.g.window.document,j=Object.keys(g.propTypes),S=_||k?h.Suspense:()=>null,T=[],x=(e,t)=>{var r;return r=class extends h.Component{constructor(){var r;super(...arguments),r=this,d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),d(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),d(this,"showPreview",(()=>{this.setState({showPreview:!0})})),d(this,"getDuration",(()=>this.player?this.player.getDuration():null)),d(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),d(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),d(this,"getInternalPlayer",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null})),d(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),d(this,"handleReady",(()=>{this.props.onReady(this)})),d(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...T,...e])if(t.canPlay(r))return t;return t||null}))),d(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return b.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),d(this,"getAttributes",(0,m.default)((e=>(0,v.omit)(this.props,j)))),d(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return h.default.createElement(w.default,o(o({},this.props),{},{key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady}))}))}shouldComponentUpdate(e,t){return!(0,P.default)(this.props,e)||!(0,P.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:a}=this.props;return h.default.createElement(O,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:a,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:i}=this.props,{showPreview:s}=this.state,l=this.getAttributes(e),u="string"===typeof i?this.references.wrapper:void 0;return h.default.createElement(i,o({ref:u,style:o(o({},t),{},{width:r,height:n})},l),h.default.createElement(S,{fallback:a},s?this.renderPreview(e):this.renderActivePlayer(e)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",g.propTypes),d(r,"defaultProps",g.defaultProps),d(r,"addCustomPlayer",(e=>{T.push(e)})),d(r,"removeCustomPlayers",(()=>{T.length=0})),d(r,"canPlay",(t=>{for(const r of[...T,...e])if(r.canPlay(t))return!0;return!1})),d(r,"canEnablePIP",(t=>{for(const r of[...T,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},38092:(e,t,r)=>{var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>h}),e.exports=(n=p,c(a({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(57757)),d=r(25622);const f=y.default[y.default.length-1];var h=(0,d.createReactPlayer)(y.default,f)},30277:(e,t,r)=>{var n,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>T,FLV_EXTENSIONS:()=>x,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>_,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>b,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>m,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>j,canPlay:()=>A}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of i(t))s.call(e,l)||l===r||o(e,l,{get:()=>t[l],enumerable:!(n=a(t,l))||n.enumerable});return e})(o({},"__esModule",{value:!0}),n));var u=r(24261);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,b=/streamable\.com\/([a-z0-9]+)$/,m=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,_=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,j=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,T=/\.(mpd)($|\?)/i,x=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(const t of e){if("string"===typeof t&&E(t))return!0;if(E(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(k.test(e)||j.test(e)||S.test(e)||T.test(e)||x.test(e))},A={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!k.test(e),vimeo:e=>y.test(e)&&!j.test(e)&&!S.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>b.test(e),wistia:e=>m.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>_.test(e),file:E}},57757:(e,t,r)=>{Object.create;var n,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of i(t))s.call(e,l)||l===r||o(e,l,{get:()=>t[l],enumerable:!(n=a(t,l))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),e.exports=(n=u,l(o({},"__esModule",{value:!0}),n));var c=r(24261),p=r(30277),y=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(8446).then(r.t.bind(r,37120,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(9979).then(r.t.bind(r,5769,23))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(6173).then(r.t.bind(r,33537,23))))},{key:"mux",name:"Mux",canPlay:p.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(2723).then(r.t.bind(r,22315,23))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(6887).then(r.t.bind(r,33453,23))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(7627).then(r.t.bind(r,15461,23))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(9340).then(r.t.bind(r,34968,23))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(2042).then(r.t.bind(r,3334,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(6328).then(r.t.bind(r,60794,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(7570).then(r.t.bind(r,7074,23))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(3392).then(r.t.bind(r,36666,23))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(6463).then(r.t.bind(r,84587,23))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(7458).then(r.t.bind(r,85006,23))))}]},77910:(e,t,r)=>{var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>k,propTypes:()=>O}),e.exports=(n=p,c(a({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(11942));const{string:d,bool:f,number:h,array:b,oneOfType:m,shape:P,object:g,func:v,node:w}=y.default,O={url:m([d,b,g]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:m([d,h]),height:m([d,h]),style:g,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:m([f,d,g]),playIcon:w,previewTabIndex:h,previewAriaLabel:d,fallback:w,oEmbedUrl:d,wrapper:m([d,v,P({render:v.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:v}),facebook:P({appId:d,version:d,playerId:d,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:d}),mux:P({attributes:g,version:d}),file:P({attributes:g,tracks:b,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:g,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:P({options:g,playerId:d,customControls:b}),mixcloud:P({options:g}),twitch:P({options:g,playerId:d}),vidyard:P({options:g})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},_=()=>{},k={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:_},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:_,onStart:_,onPlay:_,onPause:_,onBuffer:_,onBufferEnd:_,onEnded:_,onError:_,onDuration:_,onSeek:_,onPlaybackRateChange:_,onPlaybackQualityChange:_,onProgress:_,onClickPreview:_,onEnablePIP:_,onDisablePIP:_}},24261:(e,t,r)=>{var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{callPlayer:()=>M,getConfig:()=>E,getSDK:()=>x,isBlobUrl:()=>I,isMediaStream:()=>C,lazy:()=>b,omit:()=>A,parseEndTime:()=>_,parseStartTime:()=>O,queryString:()=>j,randomString:()=>k,supportsWebKitPresentationMode:()=>R}),e.exports=(n=y,c(a({},"__esModule",{value:!0}),n));var d=p(r(9950)),f=p(r(5237)),h=p(r(72414));const b=e=>d.default.lazy((async()=>{const t=await e();return"function"===typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,v=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(v.test(e))return parseInt(e)}}function O(e){return w(e,m)}function _(e){return w(e,P)}function k(){return Math.random().toString(36).substr(2,5)}function j(e){return Object.keys(e).map((t=>"".concat(t,"=").concat(e[t]))).join("&")}function S(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const T={},x=function(e){0;return e}((function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f.default;const a=S(t);return a&&n(a)?Promise.resolve(a):new Promise(((n,a)=>{if(T[e])return void T[e].push({resolve:n,reject:a});T[e]=[{resolve:n,reject:a}];const i=t=>{T[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(S(t))}}o(e,(n=>{n?(T[e].forEach((e=>e.reject(n))),T[e]=null):r||i(S(t))}))}))}));function E(e,t){return(0,h.default)(t.config,e.config)}function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const o=[].concat(...r),a={},i=Object.keys(e);for(const s of i)-1===o.indexOf(s)&&(a[s]=e[s]);return a}function M(e){if(!this.player||!this.player[e]){let t="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c \u2013 ");return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return this.player[e](...r)}function C(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream}function I(e){return/^blob:/.test(e)}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video");const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t}},43693:(e,t,r)=>{var n=r(77736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},12897:(e,t,r)=>{var n=r(43693);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},89045:(e,t,r)=>{var n=r(51357).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},77736:(e,t,r)=>{var n=r(51357).default,o=r(89045);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},51357:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);