(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7694,8342,9239,5790],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var o=s(47313),a=(s(17739),s(98935)),i=s(46417);class n extends o.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,i.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(a.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var o=s(47313),a=s(46417);const i=e=>{let{username:t,network:s,authorClass:o,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},n=(0,o.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var o=s(47313),a=s(2406),i=s(20510),n=s.n(i),r=s(43635),l=s(35179),d=(s(98511),s(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:h,muted:u}=this.props,{paddingBottom:p,videoLoaded:_,isVisible:m}=this.state,b={paddingBottom:"".concat(p,"%")},v=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:b,ref:this.videoRef,children:(0,d.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:c(v,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:i,muted:u,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?m:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var o=s(47313),a=s(35179),i=s(46417);const n=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),c=a.ZQ&&36==e.id?"tagembed":e.icon;return d?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var o=s(47313),a=s(16390),i=s(17739),n=(s(35179),s(25810),s(46417));const r=o.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends o.PureComponent{constructor(e){super(e),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,o;const e=(null===(s=this.contentRef)||void 0===s||null===(o=s.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:d,item:c,contentTitle:h,readMore:u,maxLength:p,textAlign:_,maxLines:m,isReadMore:b}=this.props,v={WebkitLineClamp:m,textAlign:s.textAlignment};_||s.textAlignment;let g=20==c.network.id?t:(0,i.Fx)(t);12==c.network.id&&(g=(0,a.ZP)(g));const w="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(e," ").concat(b?"":w," tb-cTBfont-").concat(s.font_varient);return(0,n.jsxs)("div",{className:f,ref:this.contentRef,style:v,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:c,content:g,Personalization:d})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var o=s(47313),a=s(43635),i=s(35179),n=s(46417);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:o,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var o=s(17739),a=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var o=s(47313),a=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(t)),children:(0,a.Sy)(t)})},r=(0,o.memo)(n)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var o=s(47313),a=s(43411),i=s(11774),n=s(89239),r=s(55790),l=s(25810),d=s(35179),c=s(46417);const h=e=>{let{author:t,personalization:s,postTime:o,network:a,ThemeRule:i,font:h}=e;const u=!(!s.postAuthor||t.isInstaUser),p=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,c.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(d.ZQ?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_hs_author",children:[u?(0,c.jsx)(n.default,{network:a,author:t,authorClass:"tb_hs_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_hs_author_info",children:[u?(0,c.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,c.jsxs)("div",{className:"tb_hs_post_info",children:[u?(0,c.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",p?(0,c.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,c.jsx)(r.default,{postTime:o,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),d.T_?null:(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:a,isDefault:1===i.iconType,ThemeRule:i})})]})};var u=s(81349),p=s(84261),_=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:o,ThemeRule:a,ownerId:i,wall:n}=e;const r=!(!d.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=(d.ZQ||d.Jx)&&n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:100,h=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,m=!d.ig||!t.hotspot;return(0,c.jsxs)("div",{className:"tb_hs_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[r?null:(0,c.jsx)(u.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,c.jsx)(_.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:a,hotspot:!0})]})};var b=s(62245),v=s(17739),g=s(11502),w=s(5744);const f=d.ZQ?null:200,x=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:i,itemIndex:n,wallID:r,ownerId:u,postSizeInPx:p,wall:_,isPadding:x,isRowCount:j,onClickPopUpSlider:k}=e;const T=(0,o.useRef)(null),I=!!(t.ugc_products&&t.ugc_products.length>0),y=!(!I||0!==t.hotspot),P=(""===a.postHover||a.postHover,1!==t.type),D=s.trimcontent?(0,v.Sv)(t.content,f):t.content,C=p.adjustWidth<250,S=!(!t.hotspot||!I),N=(!d.ig||t.hotspot,!a.hideContent),R=y?0==N:1!=a.hideContent,z=!!y&&0!=N,E=0==a.postHover&&d.ig?"light":"dark",Z=d.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+E,U={backgroundColor:d.Jx?a.cardColor:""};return(0,o.useEffect)((()=>{d.ig&&(0,v.YN)(T)}),[]),(0,o.useEffect)((()=>{t.isPopUp&&k(n,t)}),[n,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(C?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":y?1:S?2:0,style:{padding:s.padding/2},ref:T,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,role:"article","aria-label":"Post ".concat(parseInt(n)+1,",").concat(D),children:(0,c.jsx)("div",{className:"tb_hs_post_in".concat(d.ig?" tb_hs_post_ani":""),onClick:i(n,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[P?(0,c.jsx)(m,{itemData:t,wallID:r,wall:_,ownerId:u},t.id):"",S?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_hs_post_details",children:[(0,c.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[d.ig?(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,z?(0,c.jsx)(g.Z,{ThemeRule:a,btnClass:"tb_hs_btn_wrap"}):null,R||1==t.type?(0,c.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:D,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.ig?null:(0,c.jsx)(h,{ownerId:u,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,c.jsx)(w.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(d.ZQ?"tb_hs_share_container_te":""),item:t,wallID:r,ownerId:u}):null]}),S?null:(0,c.jsx)("div",{className:"tb_hs_post_overlay ".concat(Z),style:U,children:(0,c.jsx)("div",{})}),d.ZQ?(0,c.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null]})]})})})};var j=s(43635);s(37210);class k extends o.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:o,getDataNextSteps:a}=this.props;o&&a(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,o)=>{const{wall:a}=this.props;if(1==a.Personalization.autoScrollStatus||d.ig){const t=d.ZQ?e._o.perPage+e.index:e.index;e.length-t===(d.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e,wall:t}=this.props;this.setState({postData:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var e,t,s,o;const{postData:a,completeDataObject:n,wall:r,clickToShowPopUp:l,onClickToCTA:h,postSizeInPx:u,parentID:p,loaderData:_,onClickPopUpSlider:m}=this.props,b=p,v=r.ThemeRule.numberOfCoumn,g=r.ThemeRule.mobileColumn,w=r.ThemeRule.slidePost,f=r.ThemeRule.slideDuration,j=r.Personalization.autoScrollStatus,k=r.ThemeRule.multiRow&&0!==r.ThemeRule.multiRow?r.ThemeRule.multiRow:1;var T=[];let I=!0;const y=("tagembed"==(null===r||void 0===r||null===(e=r.User)||void 0===e?void 0:e.userDatabaseType)||d.ZQ||d.ig)&&void 0!==(null===(t=r.Personalization)||void 0===t?void 0:t.clonePost)&&0===r.Personalization.clonePost?{clones:0}:{};for(var P=0,D=a.length;P<D;)T.push(a.slice(P,P+=k));d.ig&&y&&0==Object.keys(y).length&&(16677==r.User.id?"product"===window.dataFilterType&&(I=!!(T&&T.length>=5)):T=T.length<12?Array(15-T.length).fill(T).flat():T);const C=1!=j?!(Object.keys(y).length>0)&&("tagembed"==(null===r||void 0===r||null===(s=r.User)||void 0===s?void 0:s.userDatabaseType)||d.ZQ?"slide":"loop"):d.ig?"slide":"loop",S={...y,type:1!==j&&C,rewind:!0,speed:1e3,interval:1===w?1e3*parseInt(f):5e3,perPage:v>0?v:"tagembed"==(null===r||void 0===r||null===(o=r.User)||void 0===o?void 0:o.userDatabaseType)||d.ZQ?3:6,perMove:1,gap:0,autoplay:1===w,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:g>0?g:1},767:{perPage:g>0?g:2},991:{perPage:g>0?g:3},1200:{perPage:v>0?v:4},1400:{perPage:v>0?v:5},1600:{perPage:v>0?v:d.ZQ?3:6}}};return(0,c.jsx)(c.Fragment,{children:""!=p?(0,c.jsx)("div",{className:"tb_hs_post_container",children:I?(0,c.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:S,ref:e=>this.inputRefs[b]=e,onMove:this.autoScrollSlider,children:[(0,c.jsx)(i.Gj,{children:(r.ThemeRule.multiRow>1&&1!==T.length&&T.length%2!==0?T.pop():T)&&T&&T.length>0&&T.map(((e,t)=>(0,c.jsx)(i.jw,{className:"tb_".concat(t),idd:p,children:(0,c.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const s=n[e];return(0,c.jsx)(x,{parentID:p,ownerId:r.Wall.owner,wall:r,itemData:s,itemIndex:t,personalization:r.Personalization,ThemeRule:r.ThemeRule,clickToShowPopUp:l,wallID:r.Wall.id,onClickToCTA:h,postSizeInPx:u,onClickPopUpSlider:m},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(_.isShowMoreLoading?"tb_a_spinner":""),onClick:d.ig||d.ZQ?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]}):null}):null})}}const T=(0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,o,a,i,n,r,l)=>e((0,j.Sx)(t,s,o,a,i,n,r,l))})))(k)},2406:(e,t,s)=>{"use strict";t.Ad=void 0;var o=s(84228);var a=s(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var i=s(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=s(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{i&&window.clearTimeout(i),a("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(i=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,s){"use strict";var o=this&&this.__awaiter||function(e,t,s,o){return new(s||(s=Promise))((function(a,i){function n(e){try{l(o.next(e))}catch(t){i(t)}}function r(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const a=s(47313),i=s(65786);t.useImageSize=(e,t)=>{const[s,n]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:o}=yield(0,i.getImageSize)(e,t);n({width:s,height:o})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[s,{loading:r,error:d}]}},37210:()=>{},50247:()=>{}}]);