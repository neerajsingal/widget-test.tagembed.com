"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9171,7234,7668,757],{97234:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(72791),o=a(2703),i=a(14496),n=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==a.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color})},Math.random())}}},14496:(t,e,a)=>{a.d(e,{Z:()=>o});a(72791);var s=a(80184);const o=t=>{let{username:e,network:a,authorClass:o}=t;return(0,s.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(72791),o=a(80184);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,n=!(!a||1!==a.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},40115:(t,e,a)=>{a.d(e,{Z:()=>l});var s=a(72791),o=a(11225),i=a(80413),n=a(2703),r=a(70188),d=a(80184);class l extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:i}=this.props,{imgUrl:l,paddingBottom:c}=this.state,h={paddingBottom:"".concat(c,"%")};return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:h,children:(0,d.jsx)("img",{className:t,role:"img",src:l,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(l)})})}}},98270:(t,e,a)=>{a.d(e,{Z:()=>c});var s=a(72791),o=a(80413),i=a(96710),n=a.n(i),r=a(11225),d=a(80184);const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class c extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:o,autoPlay:i,handleVideoEnded:c,muted:h}=this.props,{paddingBottom:p,videoLoaded:u}=this.state,m={paddingBottom:"".concat(p,"%")};return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,d.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:l(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:i,height:"100%",width:"100%",controls:o,style:{backgroundImage:u?"":"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:c||null})})}}},70757:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=a(72791),o=a(46535),i=a(2703),n=a(80184);const r=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class d extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:d}=this.props,l=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),c=o.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),style:{color:(0,i.mD)(59)?null:a.iconColor},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},27668:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(72791),o=a(2703),i=a(80184);const n=t=>{const{postTime:e,timeClass:a}=t,n=(0,s.useMemo)((()=>(0,o.Sy)(e)),[]);return(0,i.jsx)("div",{className:a,children:n})},r=(0,s.memo)(n)},59171:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var s=a(72791),o=a(48282),i=a(77581),n=a(40115),r=a(98270),d=a(46535),l=a(80184);const c=t=>{let{itemData:e,wallID:a,ownerId:s,wall:o,autoVPlay:i,handleVideoEnded:c}=t;const h=!!(e.imageList&&e.imageList.length>0),p=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_stt_multi_images_ico_bottom":"tb_stt_multi_images_ico",u=!(3!==e.type&&5!==e.type||28===e.network.id||1!=o.ThemeRule.autoPlay&&!d.ZQ);return(0,l.jsxs)("div",{className:"tb_stt_media_wrap",children:[h&&!d.ZQ?(0,l.jsx)("div",{className:"".concat(p," tb__icon tb-multiple"),children:" "}):"",u?(0,l.jsx)(r.Z,{VideoClass:"tb_stt_video",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:200,controls:!1,autoPlay:!(!d.ZQ||!i)||!!u&&i,handleVideoEnded:c,muted:!0}):(0,l.jsx)(n.Z,{ImageClass:"tb_stt_image",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:200})]})};var h=a(97234),p=a(70757);a(27668);const u=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:i,font:n}=t;const r=e.username&&e.username.length>0?"@".concat(e.username):"",c={color:i.authorColor,fontFamily:i.css_font},u={color:i.authorColor,fontSize:i.fontSize,fontFamily:i.css_font},m=(i.authorColor,!(!a.postAuthor||e.isInstaUser));!a.postAuthor||a.postTime;return(0,l.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,l.jsx)("div",{className:"tb_stt_author_img",children:m?(0,l.jsx)(h.default,{author:e,network:o,authorClass:"tb_stt_author_img_00"}):" "}),(0,l.jsxs)("div",{className:"tb_stt_author_info",children:[(0,l.jsx)(p.default,{networkClass:"tb_stt_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_stt_author_001",children:[0===i.hideContent?(0,l.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(i.font_varient),style:d.ZQ?null:u,children:r}):"",m?(0,l.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:c,children:e.name}):""]})]})]})};var m=a(16243);const _=t=>{let{itemData:e,personalization:a,adjustWidth:s,ThemeRule:o,wallID:i,ownerId:n,wall:r,onClickToCTA:h,autoPlay:p,handleVideoEnded:_}=t;const g={width:"".concat(s,"%")},w=2===e.type||3===e.type||4===e.type||5===e.type,v=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,l.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:g,"tb-network":e.network.icon,children:(0,l.jsxs)("div",{className:"tb_stt_card_wrapper",children:[w?(0,l.jsx)("div",{className:"tb_stt_media_img",children:(0,l.jsx)(c,{itemData:e,wallID:i,wall:r,ownerId:n,autoVPlay:p,handleVideoEnded:_})}):"",(0,l.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,l.jsxs)("div",{className:"tb_stt_card_content_0",children:[v&&d.ZQ?(0,l.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,l.jsx)(u,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:o})]})})]})})};a(59169);class g extends s.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,a=e+1;a<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(a)},this.secondaryRef=s.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:a,wall:s}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((o,i)=>{if(o.classList){const i=String(o.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var n=i[0];String(i[0]).includes("tb_")&&(n=String(i[0]).replace("tb_",""));const r=t.findIndex((t=>t==n));document.querySelector(".tb_stt_post_container #".concat(o.id)).addEventListener("click",(t=>{t.preventDefault();const o=e[n];56!=s.Personalization.widgetTheme&&d.ZQ||a(r,o)}))}}))}render(){var t;const{completeDataObject:e,wall:a,onClickToCTA:s,modalPop:i}=this.props,{arrowWidth:n,currentIndex:r}=this.state;let c=this.props.postData;c&&c.length>0&&(c=1==c.length?[...c,...c,...c,...c]:2==c.length?[...c,...c]:this.props.postData);const h=a.ThemeRule.numberOfCoumn,p=a.ThemeRule.mobileColumn,u=a.ThemeRule.slidePost,m=a.ThemeRule.slideDuration,g=a.Personalization.autoScrollStatus,w=d.ZQ&&void 0!==(null===(t=a.Personalization)||void 0===t?void 0:t.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{},v=1!=g?!(Object.keys(w).length>0)&&"loop":"loop",f={...w,type:v,rewind:!1,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:h>0?h:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===u,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==a.Wall.owner?0:2,breakpoints:{560:{perPage:p>0?p:1,start:127183==a.Wall.owner?0:2},767:{perPage:p>0?p:3,start:127183==a.Wall.owner?0:2},991:{perPage:p>0?p:3,start:2},1200:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2},1400:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2},1600:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2}},updateOnMove:!0},b=1===f.breakpoints[560].perPage?"tb_stt_center_mode560":"",y=1===f.breakpoints[767].perPage?"tb_stt_center_mode767":"",x=1===f.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===u){var I=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;i.isShowPopUp&&I?I.pause():I&&I.play()}return(0,l.jsx)("div",{className:"tb_stt_post_container",children:(0,l.jsxs)(o.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(b," ").concat(y," ").concat(x),options:f,ref:this.secondaryRef,onActive:(t,e,a)=>this.setState({currentIndex:e.index}),children:[(0,l.jsx)(o.Gj,{children:c&&c.length>0&&c.map(((t,i)=>{const n=e[t];return(0,l.jsx)(o.jw,{style:{margin:0,padding:0},"data-index":i,className:"tb_".concat(n.id),children:(0,l.jsx)(_,{ownerId:a.Wall.owner,itemData:n,autoPlay:r==i,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,onClickToCTA:s,wall:a,handleVideoEnded:this.handleVideoEnded})},i)}))}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:n},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:n},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const w=(0,i.$j)((t=>({modalPop:t.modalPop})))(g)},80413:(t,e,a)=>{e.Ad=void 0;var s=a(7782);var o=a(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=a(52047)},7782:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),o("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,a){var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(o,i){function n(t){try{d(s.next(t))}catch(e){i(e)}}function r(t){try{d(s.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}d((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(72791),i=a(94590);e.useImageSize=(t,e)=>{const[a,n]=(0,o.useState)(null),[r,d]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){d(!0),n(null);try{const{width:a,height:s}=yield(0,i.getImageSize)(t,e);n({width:a,height:s})}catch(l){c(l.toString())}finally{d(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},59169:()=>{}}]);
//# sourceMappingURL=9171.829c724a.chunk.js.map