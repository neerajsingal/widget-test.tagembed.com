(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7694,8342,9239,5790],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(47313),o=(s(17739),s(98935)),i=s(46417);class n extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s,size:a}=this.props;return(0,i.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:a||44,height:a||44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(o.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(47313),o=s(2406),i=s(20510),n=s.n(i),r=s(43635),l=s(35179),d=(s(98511),s(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{const{videoLoaded:t}=this.state;t!=e&&this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var e;const{VideoClass:t,data:s,wallID:a,isCover:o,controls:i,autoPlay:h,handleVideoEnded:u,muted:p,wall:_,ownerId:m}=this.props,{paddingBottom:v,videoLoaded:b,isVisible:w}=this.state,g={paddingBottom:"".concat(v,"%")},f=s.mediaClip&&String(s.mediaClip).length>0?s.mediaClip:s.mediaUrl;return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(s.id),style:g,ref:this.videoRef,children:(0,d.jsx)(n(),{className:"".concat(t," video").concat(s.id),url:c(f,s.network.id),"data-type":"video","data-network":s.network.id,"data-link":s.link,"data-wall-id":a,"data-item-id":s.id,"data-feed-id":s.feedId?s.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),title:"".concat(s.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(s.id),autoPlay:h,role:"presentation"}},file:{attributes:{preload:"metadata",title:"".concat(s.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(s.id),autoPlay:h,role:"presentation"}}},loop:!0,onError:e=>{s.stories&&0!=s.stories||(0,r.ib)(e,s.id)},autoPlay:h,muted:p,volume:h?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?w:h,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===_||void 0===_||null===(e=_.Wall)||void 0===e?void 0:e.owner)||m)||i||!1,style:{backgroundImage:"url(".concat(s.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(35179),i=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),c=o.ZQ&&36==e.id?"tagembed":e.icon;return d?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(47313),o=s(16390),i=s(17739),n=(s(35179),s(25810),s(46417));const r=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584)))),l=a.lazy((()=>s.e(7531).then(s.bind(s,97531))));class d extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,a;const e=(null===(s=this.contentRef)||void 0===s||null===(a=s.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:a,personalization:d,item:c,contentTitle:h,readMore:u,maxLength:p,textAlign:_,maxLines:m,isReadMore:v}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};_||s.textAlignment;let w=20==c.network.id?t:(0,i.Fx)(t);12==c.network.id&&(w=(0,o.ZP)(w));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(e," ").concat(v?"":g," tb-cTBfont-").concat(s.font_varient);return(0,n.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(h)}):null,c.aiStatus?(0,n.jsx)(l,{aiSummary:c.aiSummary,type:null===d||void 0===d?void 0:d.ai_summary}):(0,n.jsx)(r,{data:c,content:w,Personalization:d})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(43635),i=s(35179),n=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(17739),o=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,o.Sy)(t)),children:(0,o.Sy)(t)})},r=(0,a.memo)(n)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var a=s(47313),o=s(43411),i=s(11774),n=s(89239),r=s(55790),l=s(25810),d=s(35179),c=s(46417);const h=e=>{var t,s;let{author:a,personalization:o,postTime:i,network:h,ThemeRule:u,font:p}=e;const _=!(!o.postAuthor||a.isInstaUser),m=!(!o.postAuthor||!o.postTime||a.isInstaUser);return(0,c.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(d.ZQ?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_hs_author",children:[_?(0,c.jsx)(n.default,{network:h,author:a,authorClass:"tb_hs_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_hs_author_info",children:[_?(0,c.jsx)("div",{className:"tb_hs_authorname",children:a.name}):"",(0,c.jsx)("div",{className:"tb_hs_post_info",children:null!==a&&void 0!==a&&a.aiStatus?(0,c.jsxs)("div",{className:"tb_hs_username",children:[null===a||void 0===a||null===(t=a.avgRating)||void 0===t?void 0:t.avgRate," Based on ",null===a||void 0===a||null===(s=a.avgRating)||void 0===s?void 0:s.totalReviews," reviews"]}):(0,c.jsxs)(c.Fragment,{children:[_?(0,c.jsx)("div",{className:"tb_hs_username",children:"@".concat(a.username)}):"",m?(0,c.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",o.postTime?(0,c.jsx)(r.default,{postTime:i,timeClass:"tb_hs_time tb-cTBfont-".concat(u.font_varient),authorColor:u.authorColor}):""]})})]})]}),d.T_?null:(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:h,isDefault:1===u.iconType,ThemeRule:u})})]})};var u=s(81349),p=s(84261),_=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:a,ThemeRule:o,ownerId:i,wall:n}=e;const r=!(!d.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=(d.ZQ||d.Jx)&&n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:100,h=(3===t.type||5===t.type)&&1==n.ThemeRule.autoPlay,m=!d.ig||!t.hotspot;return(0,c.jsxs)("div",{className:"tb_hs_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[r?null:(0,c.jsx)(u.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,c.jsx)(_.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:o,hotspot:!0})]})};var v=s(62245),b=s(17739),w=s(11502),g=s(5744);const f=d.ZQ?null:200,x=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:i,itemIndex:n,wallID:r,ownerId:u,postSizeInPx:p,wall:_,isPadding:x,isRowCount:j,onClickPopUpSlider:y,isTrue:k}=e;const T=(0,a.useRef)(null),I=!!(t.ugc_products&&t.ugc_products.length>0),P=!(!I||0!==t.hotspot),S=(""===o.postHover||o.postHover,1!==t.type),C=s.trimcontent?(0,b.Sv)(t.content,f):t.content,D=p.adjustWidth<250,N=!(!t.hotspot||!I),R=(!d.ig||t.hotspot,!o.hideContent),z=P?0==R:1!=o.hideContent,E=!!P&&0!=R,W=0==o.postHover&&d.ig?"light":"dark",Z=d.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+W,U={backgroundColor:d.Jx?o.cardColor:""},M=k?{width:p.adjustWidth}:{};return(0,a.useEffect)((()=>{d.ig&&(0,b.YN)(T)}),[]),(0,a.useEffect)((()=>{t.isPopUp&&y(n,t)}),[n,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(D?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":P?1:N?2:0,style:{...M,padding:s.padding/2},ref:T,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,role:"article","aria-label":"Post ".concat(parseInt(n)+1,",").concat(C),children:(0,c.jsx)("div",{className:"tb_hs_post_in".concat(d.ig?" tb_hs_post_ani":""),onClick:i(n,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[S?(0,c.jsx)(m,{itemData:t,wallID:r,wall:_,ownerId:u},t.id):"",N?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_hs_post_details",children:[(0,c.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[d.ig?(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,E?(0,c.jsx)(w.Z,{ThemeRule:o,btnClass:"tb_hs_btn_wrap"}):null,z||1==t.type?(0,c.jsx)(v.default,{contentClass:"tb_hs_content",item:t,content:C,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.ig?null:(0,c.jsx)(h,{ownerId:u,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o}),t.share.status?(0,c.jsx)(g.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(d.ZQ?"tb_hs_share_container_te":""),item:t,wallID:r,ownerId:u}):null]}),N?null:(0,c.jsx)("div",{className:"tb_hs_post_overlay ".concat(Z),style:U,children:(0,c.jsx)("div",{})}),d.ZQ?(0,c.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null]})]})})})};var j=s(43635);s(37210);const y=e=>{let{isTrue:t,children:s}=e;return t?(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class k extends a.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||d.ig){const t=d.ZQ?e._o.perPage+e.index:e.index;e.length-t===(d.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e,wall:t}=this.props;this.setState({postData:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var e,t,s,a,o;const{postData:n,completeDataObject:r,wall:l,clickToShowPopUp:h,onClickToCTA:u,postSizeInPx:p,parentID:_,loaderData:m,onClickPopUpSlider:v,adjustWidth:w,cardNumber:g}=this.props,f=_,j=l.ThemeRule.numberOfCoumn,k=l.ThemeRule.mobileColumn,T=l.ThemeRule.slidePost,I=l.ThemeRule.slideDuration,P=l.Personalization.autoScrollStatus,S=l.ThemeRule.multiRow&&0!==l.ThemeRule.multiRow?l.ThemeRule.multiRow:1;var C=[];let D=!0,N="tagembed"!=(null===l||void 0===l||null===(e=l.User)||void 0===e?void 0:e.userDatabaseType)&&!d.ZQ&&!d.ig||142546!=l.Wall.owner&&141171!=l.Wall.owner&&void 0===(null===(t=l.Personalization)||void 0===t?void 0:t.clonePost)?{}:142546==l.Wall.owner||141171==l.Wall.owner||0===l.Personalization.clonePost?{clones:0}:{};l.Personalization.clonePost||0!=P||(N={clones:0});for(var R=0,z=n.length;R<z;)C.push(n.slice(R,R+=S));d.ig&&N&&0==Object.keys(N).length&&(16677==l.User.id?"product"===window.dataFilterType&&(D=!!(C&&C.length>=5)):C=C.length<12?Array(15-C.length).fill(C).flat():C);const E=1!=P?!(Object.keys(N).length>0)&&("tagembed"==(null===l||void 0===l||null===(s=l.User)||void 0===s?void 0:s.userDatabaseType)||d.ZQ?"slide":"loop"):d.ig?"slide":"loop",W=!(142546!=l.Wall.owner&&141171!=l.Wall.owner||0!=j&&0!=k||(0,b.b)())&&!(parseInt(g)<n.length),Z=(0,b.b)()?1:n.length,U={...N,type:1!==P&&E,rewind:!0,speed:1e3,interval:1===T?1e3*parseInt(I):5e3,perPage:j>0?j:"tagembed"==(null===l||void 0===l||null===(a=l.User)||void 0===a?void 0:a.userDatabaseType)||d.ZQ?3:Z>6?6:Z,perMove:1,gap:0,autoplay:1===T,padding:0,pagination:!1,arrows:(null===(o=C)||void 0===o?void 0:o.length)>0,breakpoints:{560:{perPage:k>0?k:1},767:{perPage:k>0?k:2},991:{perPage:k>0?k:Z>3?3:Z},1200:{perPage:j>0?j:Z>4?4:Z},1400:{perPage:j>0?j:Z>5?5:Z},1600:{perPage:j>0?j:d.ZQ?3:Z>6?6:Z}}};return(0,c.jsx)(c.Fragment,{children:""!=_?(0,c.jsxs)(y,{isTrue:W,children:[" ",(0,c.jsx)("div",{className:"tb_hs_post_container",style:W?{maxWidth:n.length*p.adjustWidth}:null,children:D?(0,c.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:U,ref:e=>this.inputRefs[f]=e,onMove:this.autoScrollSlider,children:[(0,c.jsx)(i.Gj,{children:(l.ThemeRule.multiRow>1&&1!==C.length&&C.length%2!==0?C.pop():C)&&C&&C.length>0&&C.map(((e,t)=>(0,c.jsx)(i.jw,{className:"tb_".concat(t),idd:_,children:(0,c.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const s=r[e];return(0,c.jsx)(x,{parentID:_,ownerId:l.Wall.owner,wall:l,itemData:s,itemIndex:t,personalization:l.Personalization,ThemeRule:l.ThemeRule,clickToShowPopUp:h,wallID:l.Wall.id,onClickToCTA:u,postSizeInPx:p,onClickPopUpSlider:v,adjustWidth:w,isTrue:W},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(m.isShowMoreLoading?"tb_a_spinner":""),onClick:d.ig||d.ZQ?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]}):null})," "]}):null})}}const T=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,j.Sx)(t,s,a,o,i,n,r,l))})))(k)},2406:(e,t,s)=>{"use strict";t.Ad=void 0;var a=s(84228);var o=s(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=s(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const a=s(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,o)=>{if("undefined"===typeof window)return o(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return o(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{i&&window.clearTimeout(i),o("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(i=window.setTimeout((()=>o(a.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,s){"use strict";var a=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))((function(o,i){function n(e){try{l(a.next(e))}catch(t){i(t)}}function r(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const o=s(47313),i=s(65786);t.useImageSize=(e,t)=>{const[s,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:a}=yield(0,i.getImageSize)(e,t);n({width:s,height:a})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[s,{loading:r,error:d}]}},37210:()=>{},50247:()=>{}}]);