(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[435,6264,6723,7956,8167],{83398:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(80415),s=i(44414);const a="https://cloud.tagshop.ai/app/theme/widget/media/images/no-product.svg";function r(t){const{className:e,urls:i,isProduct:r}=t;return(0,s.jsx)("img",{className:e,decoding:"async",src:(null===i||void 0===i?void 0:i.small)||"",width:"187",height:"259",alt:"",loading:"lazy",draggable:"false",onError:t=>t.target.src=r?a:`${o.th}/media/images/no-image.svg`})}},78167:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(9950),s=(i(52867),i(93662)),a=i(44414);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i,size:o}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:o||44,height:o||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(s.A,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(9950),s=i(44414);const a=t=>{let{username:e,network:i,authorClass:o,errorPic:a}=t;const r="#ffffff"==i.color?"#000":i.color;return(0,s.jsx)("img",{className:`${o}__`,src:a||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===i.id?"#000":r).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45,"aria-label":"author image"})},r=(0,o.memo)(a)},40435:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var o=i(44414);const s=(t,e)=>(0,o.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:"#F8B90C",fontSize:e},children:(0,o.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{width:10*t+"%",fontSize:e},children:[(0,o.jsx)("div",{})," "]})}),a=t=>{let{rating:e,size:i}=t;const a=e>5?5:e,r=Math.trunc(5-a),n=Math.trunc(a),l=String(a).split(".")[1];return(0,o.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[n?[...Array(n)].map(((t,e)=>(0,o.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:"#F8B90C",fontSize:i},children:(0,o.jsx)("div",{})},e))):null,l>0?s(l,i):null,r?[...Array(r)].map(((t,e)=>(0,o.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i},children:(0,o.jsx)("div",{})},e))):null]})}},45565:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(80415),s=i(52867),a=i(44414);const r=t=>{let{size:e}=t;const i=t=>!(!(0,s.Nv)(t)||1!=e);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("top",""+(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left",""+(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image",`url(${o.th}/media/images/tagshop-light.svg)`,"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},89874:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var o=i(9950),s=i(11127),a=i(73068),r=i(1823),n=i(52867),l=i(14478),d=i(44414);const c=(0,a.componentWillAppendToBody)((t=>{let{children:e,wallId:i}=t;return i?(0,d.jsx)("div",{"data-widget-id":i,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",o=t.product_price>0||t.product_discount>0?`${i}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${o}\n        </a>`};class u extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var o,s;const{wall:a}=e;(0,l.hq)({type:1,action:2,wall:null===a||void 0===a||null===(o=a.Wall)||void 0===o?void 0:o.id,product_id:t.id,post:i.referenceId,owner:null===a||void 0===a||null===(s=a.Wall)||void 0===s?void 0:s.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,s)=>{var a,l;const u=(0,n.Ul)();return(0,d.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${u}`,onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(s),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(i==s?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:s+1}),(0,d.jsx)(c,{wallId:null===e||void 0===e||null===(a=e.wall)||void 0===a||null===(l=a.Wall)||void 0===l?void 0:l.id,children:(0,d.jsx)(r.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${u}`,clickable:!0,html:p(t.UgcProduct)})})]},s)}))}):null}}const h=(0,s.Ng)((t=>({appData:t.appData})))(u)},78262:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var o=i(9950),s=i(14478),a=i(89874),r=i(98776),n=i(52867),l=i(80415),d=(i(66345),i(45565),i(44414));class c extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(`.track${this.props.data.id}`);i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,r.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:o,ownerId:r,hotspot:c}=this.props,{imgUrl:p,paddingBottom:u,size:h,fixedPaddingBottom:_}=this.state,m={paddingBottom:`${this.props.size?1==this.props.size?null:_:u}%`},g={backgroundImage:`url(${p})`};if(h.width>h.height)var v="100%",b=h.height/h.width*100+"%";else b="100%",v=h.width/h.height*100+"%";const w=!!(e.hotspot&&e.ugc_products.length>0&&c),x={width:w&&this.props.size?v:null,height:w&&this.props.size?b:null};return(0,d.jsxs)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:m,children:[w?(0,d.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,d.jsxs)("div",{className:`${t}_wrap_in`,style:x,children:[w?(0,d.jsx)(a.A,{product:e.ugc_products,dataItem:e}):null,(0,d.jsx)("img",{className:`${t} track${e.id}`,role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src=`${l.th}/media/images/no-image.svg`,(0,s.bs)(t)},alt:(0,n.wE)(e.content)})]})]})}}},3720:(t,e,i)=>{"use strict";i.d(e,{A:()=>p});var o=i(9950),s=i(98776),a=i(38092),r=i.n(a),n=i(14478),l=i(66345),d=(i(45565),i(44414));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,s.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var t;const{VideoClass:e,data:i,wallID:o,isCover:s,controls:a,autoPlay:p,handleVideoEnded:u,muted:h,wall:_,ownerId:m}=this.props,{paddingBottom:g,videoLoaded:v,isVisible:b}=this.state,w={paddingBottom:`${g}%`},x=i.mediaClip&&String(i.mediaClip).length>0?i.mediaClip:i.mediaUrl;return(0,d.jsx)("div",{className:`${e}_wrap_ mediaHolder${i.id}`,style:w,ref:this.videoRef,children:(0,d.jsx)(r(),{className:`${e} video${i.id}`,url:c(x,i.network.id),"data-type":"video","data-network":i.network.id,"data-link":i.link,"data-wall-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),title:`${i.network.name} post video`,"aria-labelledby":`tb-hc-post-${i.id}`,autoPlay:p,role:"presentation"}},file:{attributes:{preload:"metadata",title:`${i.network.name} post video`,"aria-labelledby":`tb-hc-post-${i.id}`,autoPlay:p,role:"presentation"}}},loop:!0,onError:t=>{i.stories&&0!=i.stories||(0,n.zi)(t,i.id)},autoPlay:p,muted:h,volume:p?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?b:p,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===_||void 0===_||null===(t=_.Wall)||void 0===t?void 0:t.owner)||m)||a||!1,style:{backgroundImage:`url(${i.postFileNew})`,backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},44463:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(66345),a=i(44414);const r=o.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:n,Personalization:l}=this.props,d=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),c=s.uS&&36==t.id?"tagembed":t.icon;return d?(0,a.jsx)("div",{className:`${e} tb__icon tb-${c.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===t||void 0===t?void 0:t.name)||""}`,children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},65859:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var o=i(9950),s=i(70804),a=i(52867),r=(i(66345),i(44463),i(44414));const n=o.lazy((()=>Promise.all([i.e(8615),i.e(1796)]).then(i.bind(i,21796)))),l=o.lazy((()=>i.e(3576).then(i.bind(i,33576))));class d extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,o;const t=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:o,personalization:d,item:c,contentTitle:p,readMore:u,maxLength:h,textAlign:_,maxLines:m,isReadMore:g}=this.props,v={WebkitLineClamp:m,textAlign:i.textAlignment};_||i.textAlignment;let b=20==c.network.id?e:(0,a.w)(e);12==c.network.id&&(b=(0,s.Ay)(b));const w=""+(i.lineTrim?` tb_content_line-${i.lineTrim}`:""),x=`${t} ${g?"":w} tb-cTBfont-${i.font_varient}`;return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:v,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(p)}):null,c.aiStatus?(0,r.jsx)(l,{aiSummary:c.aiSummary,type:null===d||void 0===d?void 0:d.ai_summary}):(0,r.jsx)(n,{data:c,content:b,Personalization:d})]})}}},49395:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var o=i(9950),s=i(66345),a=i(44414);const r=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:r}=i[(null===e||void 0===e?void 0:e.aiNetwork)||(null===e||void 0===e?void 0:e.id)]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:o,style:{color:r},"tb-network":e.id,children:(0,a.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:i,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:i,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>i?(0,a.jsx)(n,{ThemeID:i},o):(0,a.jsx)(r,{network:e},o))):null})}}},6723:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(52867),a=i(44414);const r=t=>{const{postTime:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},n=(0,o.memo)(r)},43711:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>j});var o=i(9950),s=i(74378),a=i.n(s),r=i(78167),n=i(6723),l=(i(49395),i(44414));const d=t=>{let{author:e,personalization:i,postTime:o,network:s,ThemeRule:a,font:d,size:c}=t;const p=!(!i.postAuthor||e.isInstaUser);return(0,l.jsx)("div",{className:"tb_g_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,l.jsxs)("div",{className:"tb_g_author",children:[p?(0,l.jsx)(r.default,{author:e,network:s,authorClass:"tb_g_author_profile",size:c}):"",(0,l.jsxs)("div",{className:"tb_g_author_info",children:[p?(0,l.jsx)("div",{className:"tb_g_authorname",children:e.name}):"",i.postTime?(0,l.jsx)(n.default,{postTime:o,timeClass:`tb_g_time tb-cTBfont-${a.font_varient}`,authorColor:a.authorColor}):""]})]})})};var c=i(66345),p=(i(78262),i(3720),i(53556),i(61038),i(83398)),u=i(68940),h=i(91109);i(99425),i(49071);class _ extends o.PureComponent{constructor(t){super(t),this.state={mediaLoaded:!1,currentIndex:0},this.splideRef=o.createRef()}render(){const{itemData:t}=this.props,e=(null===t||void 0===t?void 0:t.imageList.length)>1;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.RC,{modules:[h.dK,h.Vx],spaceBetween:0,autoHeight:!0,slidesPerView:1,pagination:!1,navigation:{prevEl:`#tb_c_p_prev-${t.id}`,nextEl:`#tb_c_p_next-${t.id}`},className:"tb_c_p__media_slider",children:(null===t||void 0===t?void 0:t.imageList.length)>0?(0,l.jsx)(l.Fragment,{children:t.imageList.map(((t,e)=>(0,l.jsx)(u.qr,{style:{margin:0},children:(0,l.jsx)(p.A,{className:"tb_c_p__",urls:{small:null===t||void 0===t?void 0:t.postFile,large:null===t||void 0===t?void 0:t.postFile,original:null===t||void 0===t?void 0:t.postFile}})},`slider_${e}`)))}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.qr,{style:{margin:0},children:(0,l.jsx)(p.A,{className:"tb_c_p__",urls:{small:null===t||void 0===t?void 0:t.postFileNew,large:null===t||void 0===t?void 0:t.postFileNew,original:null===t||void 0===t?void 0:t.filename}})})})}),e?(0,l.jsxs)("div",{className:"tb_c_p__arrow_wrapper_",onClick:t=>{t.stopPropagation()},children:[(0,l.jsx)("div",{id:`tb_c_p_prev-${t.id}`,className:"tb_c_p__arrow tb_c_p__arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{id:`tb_c_p_next-${t.id}`,className:"tb_c_p__arrow tb_c_p__arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]}):null]})}}const m=t=>{var e;let{itemData:i,wallID:o,ownerId:s,wall:a}=t;const r=3===i.type||5===i.type;!("tagembed"==(null===a||void 0===a||null===(e=a.User)||void 0===e?void 0:e.userDatabaseType))||!r||a.Personalization.mobilePopup||a.Personalization.postFeatured,!r||a.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_g_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,l.jsx)(_,{className:"tb_g_image",itemData:i})})};var g=i(65859),v=i(40435),b=i(52867);const w=t=>{var e,i,s,a,r,n,u,h,_,w,x,f,y,j,k;let{itemData:N,personalization:P,adjustWidth:S,ThemeRule:$,clickToShowPopUp:C,itemIndex:I,wallID:z,ownerId:T,onClickToCTA:A,wall:D,counter:W,onClickPopUpSlider:H}=t;const R=(0,o.useRef)(null),B={width:`${S}%`,padding:P.padding/2},L=1!=N.type,M=P.trimcontent?(0,b.Ex)(N.content,200):N.content;(0,o.useEffect)((()=>{(0,b._7)(R)}),[]),(0,o.useEffect)((()=>{N.isPopUp&&H(I,N)}),[I,N.isPopUp,N]);const U=null===N||void 0===N||null===(e=N.ugc_products)||void 0===e||null===(i=e[0])||void 0===i||null===(s=i.UgcProduct)||void 0===s?void 0:s.product_image;return(0,l.jsx)("div",{id:`tb-g-post-${N.id}`,className:"tb_g_post_wrapper","tb-network":N.network.id,role:"article","aria-label":`Post ${parseInt(I)+1},${M}`,style:B,tabIndex:"0",ref:R,"post-id":N.referenceId?N.referenceId:N.id,"feed-id":N.feedId,children:(0,l.jsxs)("div",{className:"tb_g_post_in",onClick:C(I,N),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[L?(0,l.jsx)(m,{itemData:N,wallID:z,ownerId:T,ThemeRule:$,wall:D}):null,(0,l.jsxs)("div",{className:"tb_g_contant_wrapper",children:[(0,l.jsx)(d,{ownerId:T,postTime:N.createdAt,author:N.author,network:N.network,font:$,personalization:P,ThemeRule:$,mediaType:L,size:40}),N.rating>0?(0,l.jsxs)("div",{className:"tb_g_rating__",children:[(0,l.jsx)(v.default,{size:20,rating:N.rating})," "]}):"",c.HY&&$.hideContent?(0,l.jsx)(g.default,{contentClass:"tb_g_content",item:N,content:M,font:$,ThemeRule:$,personalization:P,contentTitle:N.contentTitle}):"",(null===N||void 0===N||null===(a=N.ugc_products)||void 0===a?void 0:a.length)>0?(0,l.jsxs)("div",{className:"tb_g_p_wrp",children:[(0,l.jsx)("div",{className:"tb_g_p_",children:(0,l.jsx)(p.A,{className:"tb_g_p_img",urls:{small:U,large:U,original:U},isProduct:!0})}),(0,l.jsxs)("div",{className:"tb_g_p_info",children:[(0,l.jsx)("div",{className:"tb_g_p_t",children:null===N||void 0===N||null===(r=N.ugc_products)||void 0===r||null===(n=r[0])||void 0===n||null===(u=n.UgcProduct)||void 0===u?void 0:u.product_title}),(0,l.jsxs)("div",{className:"tb_g_p_p",children:[null===N||void 0===N||null===(h=N.ugc_products)||void 0===h||null===(_=h[0])||void 0===_?void 0:_.UgcProduct.price_currency_symbol,(null===N||void 0===N||null===(w=N.ugc_products)||void 0===w||null===(x=w[0])||void 0===x?void 0:x.UgcProduct.product_discount)>0?null===N||void 0===N||null===(f=N.ugc_products)||void 0===f||null===(y=f[0])||void 0===y?void 0:y.UgcProduct.product_discount:null===N||void 0===N||null===(j=N.ugc_products)||void 0===j||null===(k=j[0])||void 0===k?void 0:k.UgcProduct.product_price]})]})]}):null]})]})})};var x=i(11127),f=i(14478);class y extends o.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight(`${e}`)}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:o,postSize:s,clickToShowPopUp:r,onClickToCTA:n,onClickPopUpSlider:d}=this.props,{loadData:p}=this.state;let u=0;return(0,l.jsx)(a(),{className:"tb_g_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:p?t&&t.length>0&&t.map(((t,a)=>{const p=e[t];return u=c.uS||c.MH&&83==o.Personalization.widgetTheme?a%6===0?1:u+1:1,(0,l.jsx)(w,{ownerId:o.Wall.owner,itemData:p,itemIndex:a,adjustWidth:1==p.highlight?2*i:i,postSize:s,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:r,onClickToCTA:n,wall:o,counter:u,onClickPopUpSlider:d},a)})):null})}}const j=(0,x.Ng)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,f.V3)(e))})))(y)},49071:()=>{},61038:()=>{},95098:()=>{}}]);