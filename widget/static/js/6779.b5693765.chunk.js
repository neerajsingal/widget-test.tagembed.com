(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6264,6723,6779,8167,8262],{78167:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(9950),i=(s(52867),s(93662)),a=s(44414);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s,size:o}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:o||44,height:o||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(i.A,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var o=s(9950),i=s(44414);const a=t=>{let{username:e,network:s,authorClass:o,errorPic:a}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(o,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},r=(0,o.memo)(a)},45565:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var o=s(80415),i=s(52867),a=s(44414);const r=t=>{let{size:e}=t;const s=t=>!(!(0,i.Nv)(t)||1!=e);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(s(55)||s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(o.th,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},60531:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var o=s(9950),i=s(44414);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:a}=this.props,r=!(!s||1!==s.status),n={color:r?s.color:t.color,backgroundColor:r?s.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),o(a),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=a},89874:(t,e,s)=>{"use strict";s.d(e,{A:()=>_});var o=s(9950),i=s(73878),a=s(73068),r=s(1823),n=s(52867),l=s(14478),c=s(44414);const d=(0,a.componentWillAppendToBody)((t=>{let{children:e,wallId:s}=t;return s?(0,c.jsx)("div",{"data-widget-id":s,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:s}=this.props;if(e&&Object.keys(e).length>0){var o,i;const{wall:a}=e;(0,l.hq)({type:1,action:2,wall:null===a||void 0===a||null===(o=a.Wall)||void 0===o?void 0:o.id,product_id:t.id,post:s.referenceId,owner:null===a||void 0===a||null===(i=a.Wall)||void 0===i?void 0:i.owner,feed:s.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{var a,l;const h=(0,n.Ul)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(h),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,c.jsx)(d,{wallId:null===e||void 0===e||null===(a=e.wall)||void 0===a||null===(l=a.Wall)||void 0===l?void 0:l.id,children:(0,c.jsx)(r.m_,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(h),clickable:!0,html:p(t.UgcProduct)})})]},i)}))}):null}}const _=(0,i.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var o=s(9950),i=s(14478),a=s(89874),r=s(98776),n=s(52867),l=s(80415),c=(s(66345),s(45565),s(44414));class d extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,r.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:r,hotspot:d}=this.props,{imgUrl:p,paddingBottom:h,size:_,fixedPaddingBottom:u}=this.state,m={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:h,"%")},g={backgroundImage:"url(".concat(p,")")};if(_.width>_.height)var b="100%",v="".concat(_.height/_.width*100,"%");else v="100%",b="".concat(_.width/_.height*100,"%");const w=!!(e.hotspot&&e.ugc_products.length>0&&d),x={width:w&&this.props.size?b:null,height:w&&this.props.size?v:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[w?(0,c.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:x,children:[w?(0,c.jsx)(a.A,{product:e.ugc_products,dataItem:e}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.th,"/media/images/no-image.svg"),(0,i.bs)(t)},alt:(0,n.wE)(e.content)})]})]})}}},3720:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var o=s(9950),i=s(98776),a=s(38092),r=s.n(a),n=s(14478),l=s(66345),c=(s(45565),s(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:i,autoPlay:a,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,g={paddingBottom:"".concat(_,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,c.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:d(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.zi)(t,e.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?m:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},44463:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(9950),i=s(66345),a=s(44414);const r=o.lazy((()=>s.e(620).then(s.bind(s,20620))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,c=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.uS&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},65859:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(9950),i=s(70804),a=s(52867),r=(s(66345),s(44463),s(44414));const n=o.lazy((()=>Promise.all([s.e(8615),s.e(1796)]).then(s.bind(s,21796))));class l extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,o;const t=(null===(s=this.contentRef)||void 0===s||null===(o=s.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let v=20==d.network.id?e:(0,a.w)(e);12==d.network.id&&(v=(0,i.Ay)(v));const w="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(t," ").concat(g?"":w," tb-cTBfont-").concat(s.font_varient);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.Ay)(p)}):null,(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:d,content:v,Personalization:c})]})]})}}},6723:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(9950),i=s(52867),a=s(44414);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,i.fF)(e)),children:(0,i.fF)(e)})},n=(0,o.memo)(r)},69106:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var o=s(9950),i=s(53556),a=s(78167),r=s(6723),n=s(44463),l=s(44414);const c=t=>{let{author:e,personalization:s,postTime:o,network:i,ThemeRule:c,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",h={color:c.authorColor,fontFamily:c.css_font},_={backgroundColor:c.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[u?(0,l.jsx)(a.default,{author:e,network:i,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_authorname",style:h,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_username",style:h,children:p}):"",m?(0,l.jsx)("div",{className:"tb_spt_seprator",style:_,children:" "}):"",s.postTime?(0,l.jsx)(r.default,{postTime:o,timeClass:"tb_spt_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor,authorNameStyle:h}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:i,isDefault:1===c.iconType,ThemeRule:c})})]})},d=t=>{let{share:e,shareColor:s}=t;const o={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:o,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:o,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var p=s(78262),h=s(3720);const _=t=>{let{itemData:e,wallID:s,ownerId:o,wall:i}=t;const a=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:a?(0,l.jsx)(h.A,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:130,muted:!0,autoPlay:a,handleVideoEnded:()=>{}}):(0,l.jsx)(p.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:130})})};var u=s(65859),m=s(60531),g=s(52867);const b=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.Ph)(e)):s,v=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.Ph)(e)):s,w=t=>{let{itemData:e,ThemeRule:s}=t;const o={color:s.fontColor},i=e.network.id,a=3===i||10===i?"like":"heart-outline";return(0,l.jsx)(l.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:b(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(a),style:o,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:v(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:o,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),1===i?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,g.Ph)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:o,children:" "})})}):""]}):""})},x=t=>{let{itemData:e,personalization:s,ThemeRule:i,itemIndex:a,clickToShowPopUp:r,wallID:n,ownerId:p,onClickToCTA:h,wall:g,onClickPopUpSlider:b}=t;const v=!!(e.ugc_products&&e.ugc_products.length>0),x=!(!v||0!==e.hotspot),f=!(!e.hotspot||!v),y={backgroundColor:i.cardColor},j=1!==e.type,k=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),N={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(i.fontColor)};return(0,o.useEffect)((()=>{e.isPopUp&&b(a,e)}),[a,e.isPopUp,e]),(0,l.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":x?1:f?2:0,tabIndex:"0","area-label":e.content,role:"article",children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:r(a,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[j?(0,l.jsx)(_,{itemData:e,wallID:n,wall:g,ownerId:p}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(c,{ownerId:p,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[i.hideContent&&1!=e.type?"":(0,l.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:i,ThemeRule:i,personalization:s}),k?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(m.A,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:N,children:[e.share.status?(0,l.jsx)(d,{share:e.share,shareColor:i.fontColor}):"",i.socialAction?(0,l.jsx)(w,{itemData:e,ThemeRule:i}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:y,children:(0,l.jsx)("div",{})})]})})})};s(61038);class f extends o.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,onClickToCTA:a,onClickPopUpSlider:r}=this.props,n={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(i.eB,{hasTrack:!1,className:"tb_spt_post_slider",options:n,ref:this.myRef,children:[(0,l.jsx)(i.v9,{children:t&&t.length>0&&t.map(((t,n)=>{const c=e[t];return(0,l.jsx)(i.Nn,{style:{margin:0,padding:0},children:(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:c,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:a,wall:s,onClickPopUpSlider:r})},n)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,l.jsx)("div",{})})]})]})})}}},98776:(t,e,s)=>{"use strict";e.pG=void 0;var o=s(61529);var i=s(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return i.getImageSize}});var a=s(49363)},61529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{a&&window.clearTimeout(a),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(a=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(i,a){function r(t){try{l(o.next(t))}catch(e){a(e)}}function n(t){try{l(o.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(9950),a=s(95962);e.useImageSize=(t,e)=>{const[s,r]=(0,i.useState)(null),[n,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),r(null),d(null);try{const{width:s,height:o}=yield(0,a.getImageSize)(t,e);r({width:s,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:c}]}},61038:()=>{},95098:()=>{},80045:(t,e,s)=>{"use strict";s.d(e,{A:()=>i});var o=s(98587);function i(t,e){if(null==t)return{};var s,i,a=(0,o.A)(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],-1===e.indexOf(s)&&{}.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}}}]);