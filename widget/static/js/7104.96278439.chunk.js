"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7104],{3720:(e,t,i)=>{i.d(t,{A:()=>h});var o=i(9950),s=i(98776),a=i(38092),d=i.n(a),n=i(14478),r=i(66345),l=(i(45565),i(44414));const u=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,s.pG)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{const{videoLoaded:t}=this.state;t!=e&&this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:s,autoPlay:a,handleVideoEnded:h,muted:c}=this.props,{paddingBottom:p,videoLoaded:m,isVisible:g}=this.state,v={paddingBottom:`${p}%`},_=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,l.jsx)("div",{className:`${e}_wrap_ mediaHolder${t.id}`,style:v,ref:this.videoRef,children:(0,l.jsx)(d(),{className:`${e} video${t.id}`,url:u(_,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,n.zi)(e,t.id)},autoPlay:a,muted:c,volume:a?1:0,playsinline:!0,onReady:e=>{r.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.HY?g:a,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:`url(${t.postFileNew})`,backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},68642:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var o=i(9950),s=(i(66345),i(15537)),a=i(78262),d=i(3720),n=i(44414);const r=o.lazy((()=>Promise.resolve().then(i.bind(i,44463)))),l=e=>{var t;let{itemData:i,wallID:l,ThemeID:u,ownerId:h,wall:c}=e;const p="tagembed"==(null===c||void 0===c||null===(t=c.User)||void 0===t?void 0:t.userDatabaseType),m=!i.hotspot,g=(3===i.type||5===i.type)&&1==c.ThemeRule.autoPlay;return(0,n.jsxs)("div",{className:"tb_sp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[p?(0,n.jsx)("div",{className:"tb_sp_social_top_",children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(r,{networkClass:"tb_sp_social__ico",network:i.network,isDefault:1===c.ThemeRule.iconType,ThemeRule:c.ThemeRule})})}):null,(0,n.jsx)(s.A,{itemData:i,IconClass:"tb_sp_media_icon"+(p?" tb_sp_media_icon_te":""),show:m,isCenter:p}),g?(0,n.jsx)(d.A,{VideoClass:"tb_sp_video",data:i,wallID:l,themeID:c.Personalization.widgetTheme,ownerId:h,size:100,isCover:!0,muted:!0,autoPlay:!0}):(0,n.jsx)(a.default,{ImageClass:"tb_sp_image",data:i,wallID:l,themeID:u,ownerId:h,size:100,hotspot:!!i.hotspot})]})}},98776:(e,t,i)=>{t.pG=void 0;var o=i(61529);var s=i(95962);Object.defineProperty(t,"pG",{enumerable:!0,get:function(){return s.getImageSize}});var a=i(49363)},61529:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(61529);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,s)=>{if("undefined"===typeof window)return s(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return s(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const d=new Image;d.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:d.naturalWidth,height:d.naturalHeight})})),d.addEventListener("error",(e=>{a&&window.clearTimeout(a),s(`${e.type}: ${e.message}`)})),d.src=e,t.timeout&&(a=window.setTimeout((()=>s(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},49363:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function d(e){try{r(o.next(e))}catch(t){a(t)}}function n(e){try{r(o.throw(e))}catch(t){a(t)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(d,n)}r((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const s=i(9950),a=i(95962);t.useImageSize=(e,t)=>{const[i,d]=(0,s.useState)(null),[n,r]=(0,s.useState)(!1),[l,u]=(0,s.useState)(null);return(0,s.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){r(!0),d(null),u(null);try{const{width:i,height:o}=yield(0,a.getImageSize)(e,t);d({width:i,height:o})}catch(l){u(l.toString())}finally{r(!1)}}))}),[e,t]),[i,{loading:n,error:l}]}}}]);