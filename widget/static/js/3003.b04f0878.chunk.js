(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3003,6264,6723,8167],{78167:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(9950),o=(s(52867),s(93662)),a=s(44414);class r extends i.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s,size:i}=this.props;return(0,a.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:`${t}__`,src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:i||44,height:i||44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(o.A,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},93662:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var i=s(9950),o=s(44414);const a=e=>{let{username:t,network:s,authorClass:i,errorPic:a}=e;const r="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:`${i}__`,src:a||`https://ui-avatars.com/api/?name=${t.replace(/\s/g,"")}&background=${String(null===s.id?"#000":r).replace("#","")}&color=fff&length=1`,alt:t,width:45,height:45,"aria-label":"author image"})},r=(0,i.memo)(a)},3720:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var i=s(9950),o=s(98776),a=s(38092),r=s.n(a),n=s(14478),l=s(66345),d=(s(45565),s(44414));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends i.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t,carousel:s}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,o.pG)(s?t.postFile:t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{const{videoLoaded:t}=this.state;t!=e&&this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.carousel?this.props.data.postFile:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var e;const{VideoClass:t,data:s,wallID:i,isCover:o,controls:a,autoPlay:h,handleVideoEnded:u,muted:p,wall:_,ownerId:m,carousel:v}=this.props,{paddingBottom:b,videoLoaded:w,isVisible:g}=this.state,f={paddingBottom:`${b}%`},x=s.mediaClip&&String(s.mediaClip).length>0?s.mediaClip:v?s.mediaFile:s.mediaUrl;return(0,d.jsx)("div",{className:`${t}_wrap_ mediaHolder${s.id}`,style:f,ref:this.videoRef,children:(0,d.jsx)(r(),{className:`${t} video${s.id}`,url:c(x,v?s.networkId:s.network.id),"data-type":"video","data-network":v?s.networkId:s.network.id,"data-link":null===s||void 0===s?void 0:s.link,"data-wall-id":i,"data-item-id":s.id,"data-feed-id":s.feedId?s.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),title:`${v?"":s.network.name} post video`,"aria-labelledby":`tb-hc-post-${s.id}`,autoPlay:h,role:"presentation"}},file:{attributes:{preload:"metadata",title:`${v?"":s.network.name} post video`,"aria-labelledby":`tb-hc-post-${s.id}`,autoPlay:h,role:"presentation"}}},loop:!0,onError:e=>{s.stories&&0!=s.stories||(0,n.zi)(e,s.id)},autoPlay:h,muted:p,volume:h?1:0,playsinline:!0,onReady:e=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?g:h,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===_||void 0===_||null===(e=_.Wall)||void 0===e?void 0:e.owner)||m)||a||!1,style:{backgroundImage:`url(${v?s.postFile:s.postFileNew})`,backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},44463:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var i=s(9950),o=s(66345),a=s(44414);const r=i.lazy((()=>s.e(620).then(s.bind(s,20620))));class n extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:n,Personalization:l}=this.props,d=!!n&&(7!==e.id&&4!==e.id&&36!==e.id),c=o.uS&&36==e.id?"tagembed":e.icon;return d?(0,a.jsx)("div",{className:`${t} tb__icon tb-${c.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===e||void 0===e?void 0:e.name)||""}`,children:(0,a.jsx)("div",{})}):(0,a.jsxs)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:e,networkClass:t})]})}}},65859:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(9950),o=s(70804),a=s(52867),r=(s(66345),s(44463),s(44414));const n=i.lazy((()=>Promise.all([s.e(8615),s.e(1796)]).then(s.bind(s,21796)))),l=i.lazy((()=>s.e(3576).then(s.bind(s,33576))));class d extends i.PureComponent{constructor(e){super(e),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,i;const e=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:i,personalization:d,item:c,contentTitle:h,readMore:u,maxLength:p,textAlign:_,maxLines:m,isReadMore:v}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};_||s.textAlignment;let w=20==c.network.id?t:(0,a.w)(t);12==c.network.id&&(w=(0,o.Ay)(w));const g=""+(s.lineTrim?` tb_content_line-${s.lineTrim}`:""),f=`${e} ${v?"":g} tb-cTBfont-${s.font_varient}`;return(0,r.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(h)}):null,c.aiStatus?(0,r.jsx)(l,{aiSummary:c.aiSummary,type:null===d||void 0===d?void 0:d.ai_summary}):(0,r.jsx)(n,{data:c,content:w,Personalization:d})]})}}},173:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var i=s(9950),o=s(14478),a=s(66345),r=s(44414);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:i,ownerId:r}=this.props;t.stopPropagation(),a.uS||(0,o.hq)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,o.nF)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,r.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon "+(a.uS?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",e.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",e.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},47713:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var i=s(52867),o=s(44414);const a=e=>{let{ThemeRule:t,btnClass:s}=e;const a={fontFamily:t.css_font};return(0,o.jsx)("div",{className:`tb_shop_btn_wrap ${s}`,children:(0,o.jsx)("div",{className:"tb_shop_btn"+(t.postHover||(0,i.Nv)(4)||(0,i.Nv)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:a,children:t.shoppingText})})}},6723:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});s(9950);var i=s(52867),o=s(44414);const a=e=>{const{postTime:t,timeClass:s}=e;return(0,o.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,i.fF)(t)}`,children:(0,i.fF)(t)})}},2508:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>S});var i=s(9950),o=s(11127),a=s(53556),r=s(78167),n=s(6723),l=s(44463),d=s(66345),c=s(44414);const h=e=>{var t,s;let{author:i,personalization:o,postTime:a,network:h,ThemeRule:u,font:p}=e;const _=!(!o.postAuthor||i.isInstaUser),m=!(!o.postAuthor||!o.postTime||i.isInstaUser);return(0,c.jsxs)("div",{className:"tb_hs_author_wrapper "+(d.uS?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_hs_author",children:[_?(0,c.jsx)(r.default,{network:h,author:i,authorClass:"tb_hs_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_hs_author_info",children:[_?(0,c.jsx)("div",{className:"tb_hs_authorname",children:i.name}):"",(0,c.jsx)("div",{className:"tb_hs_post_info",children:null!==i&&void 0!==i&&i.aiStatus?(0,c.jsxs)("div",{className:"tb_hs_username",children:[null===i||void 0===i||null===(t=i.avgRating)||void 0===t?void 0:t.avgRate," Based on ",null===i||void 0===i||null===(s=i.avgRating)||void 0===s?void 0:s.totalReviews," reviews"]}):(0,c.jsxs)(c.Fragment,{children:[_?(0,c.jsx)("div",{className:"tb_hs_username",children:`@${i.username}`}):"",m?(0,c.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",o.postTime?(0,c.jsx)(n.default,{postTime:a,timeClass:`tb_hs_time tb-cTBfont-${u.font_varient}`,authorColor:u.authorColor}):""]})})]})]}),d.id?null:(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:h,isDefault:1===u.iconType,ThemeRule:u})})]})};var u=s(15537),p=s(78262),_=s(3720);const m=e=>{let{itemData:t,wallID:s,ThemeID:i,ThemeRule:o,ownerId:a,wall:r}=e;const n=!(!d.uS||3!==t.type&&5!==t.type||r.Personalization.mobilePopup||r.Personalization.postFeatured),l=(d.uS||d.MH)&&r.ThemeRule.aspectImageRatio?r.ThemeRule.aspectImageRatio:100,h=(3===t.type||5===t.type)&&1==r.ThemeRule.autoPlay,m=!d.HY||!t.hotspot;return(0,c.jsxs)("div",{className:"tb_hs_media_wrap",role:"group",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[n?null:(0,c.jsx)(u.A,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,c.jsx)(_.A,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o,hotspot:!0})]})};var v=s(65859),b=s(52867),w=s(47713),g=s(173);const f=d.uS?null:200,x=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:a,itemIndex:r,wallID:n,ownerId:u,postSizeInPx:p,wall:_,isPadding:x,isRowCount:j,onClickPopUpSlider:y,isTrue:k}=e;const S=(0,i.useRef)(null),T=!!(t.ugc_products&&t.ugc_products.length>0),I=!(!T||0!==t.hotspot),P=(""===o.postHover||o.postHover,1!==t.type),N=s.trimcontent?(0,b.Ex)(t.content,f):t.content,C=p.adjustWidth<250,R=!(!t.hotspot||!T),D=(!d.HY||t.hotspot,!o.hideContent),z=I?0==D:1!=o.hideContent,$=!!I&&0!=D,E=0==o.postHover&&d.HY?"light":"dark",A=d.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+E,H={backgroundColor:d.MH?o.cardColor:""},W=k?{width:p.adjustWidth}:{};return(0,i.useEffect)((()=>{(0,b._7)(S)}),[]),(0,i.useEffect)((()=>{t.isPopUp&&y(r,t)}),[r,t.isPopUp,t]),(0,c.jsx)("div",{id:`tb-hs-post-${t.id}`,className:"tb_hs_post_wrapper"+(C?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":I?1:R?2:0,style:{...W,padding:s.padding/2},ref:S,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,role:"article","aria-label":`Post ${parseInt(r)+1},${N}`,children:(0,c.jsx)("div",{className:"tb_hs_post_in"+(d.HY?" tb_hs_post_ani":""),onClick:a(r,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[P?(0,c.jsx)(m,{itemData:t,wallID:n,wall:_,ownerId:u},t.id):"",R?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_hs_post_details",children:[(0,c.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[d.HY?(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,$?(0,c.jsx)(w.A,{ThemeRule:o,btnClass:"tb_hs_btn_wrap"}):null,z||1==t.type?(0,c.jsx)(v.default,{contentClass:"tb_hs_content",item:t,content:N,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.HY?null:(0,c.jsx)(h,{ownerId:u,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o}),t.share.status?(0,c.jsx)(g.A,{share:t.share,shareClass:"tb_hs_share_container "+(d.uS?"tb_hs_share_container_te":""),item:t,wallID:n,ownerId:u}):null]}),R?null:(0,c.jsx)("div",{className:`tb_hs_post_overlay ${A}`,style:H,children:(0,c.jsx)("div",{})}),d.uS?(0,c.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null]})]})})})};var j=s(14478);s(61038);const y=e=>{let{isTrue:t,children:s}=e;return t?(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class k extends i.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:i,getDataNextSteps:o}=this.props,a=t.Personalization.autoScrollStatus;i&&1==a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,i)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||d.HY){const t=d.uS?e._o.perPage+e.index:e.index;e.length-t===(d.uS?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e,wall:t}=this.props;this.setState({postData:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var e,t,s,i,o;const{postData:r,completeDataObject:n,wall:l,clickToShowPopUp:h,onClickToCTA:u,postSizeInPx:p,parentID:_,loaderData:m,onClickPopUpSlider:v,adjustWidth:w,cardNumber:g}=this.props,f=_,j=l.ThemeRule.numberOfCoumn,k=l.ThemeRule.mobileColumn,S=l.ThemeRule.slidePost,T=l.ThemeRule.slideDuration,I=l.Personalization.autoScrollStatus,P=l.ThemeRule.multiRow&&0!==l.ThemeRule.multiRow?l.ThemeRule.multiRow:1;var N=[];let C=!0,R="tagembed"!=(null===l||void 0===l||null===(e=l.User)||void 0===e?void 0:e.userDatabaseType)&&!d.uS&&!d.HY||142546!=l.Wall.owner&&141171!=l.Wall.owner&&void 0===(null===(t=l.Personalization)||void 0===t?void 0:t.clonePost)?{}:142546==l.Wall.owner||141171==l.Wall.owner||0===l.Personalization.clonePost?{clones:0}:{};l.Personalization.clonePost||0!=I||(R={clones:0});for(var D=0,z=r.length;D<z;)N.push(r.slice(D,D+=P));d.HY&&R&&0==Object.keys(R).length&&(16677==l.User.id?"product"===window.dataFilterType&&(C=!!(N&&N.length>=5)):N=N.length<12?Array(15-N.length).fill(N).flat():N);const $=1!=I?!(Object.keys(R).length>0)&&("tagembed"==(null===l||void 0===l||null===(s=l.User)||void 0===s?void 0:s.userDatabaseType)||d.uS?"slide":"loop"):d.HY?"slide":"loop",E=!(142546!=l.Wall.owner&&141171!=l.Wall.owner||0!=j&&0!=k||(0,b.qs)())&&!(parseInt(g)<r.length),A=(0,b.qs)()?1:r.length,H={...R,type:1!==I&&$,rewind:!0,speed:1e3,interval:1===S?1e3*parseInt(T):5e3,perPage:j>0?j:"tagembed"==(null===l||void 0===l||null===(i=l.User)||void 0===i?void 0:i.userDatabaseType)||d.uS?3:A>6?6:A,perMove:1,gap:0,autoplay:1===S,padding:0,pagination:!1,arrows:(null===(o=N)||void 0===o?void 0:o.length)>0,breakpoints:{560:{perPage:k>0?k:1},767:{perPage:k>0?k:2},991:{perPage:k>0?k:A>3?3:A},1200:{perPage:j>0?j:A>4?4:A},1400:{perPage:j>0?j:A>5?5:A},1600:{perPage:j>0?j:d.uS?3:A>6?6:A}}};return(0,c.jsx)(c.Fragment,{children:""!=_?(0,c.jsxs)(y,{isTrue:E,children:[" ",(0,c.jsx)("div",{className:"tb_hs_post_container",style:E?{maxWidth:r.length*p.adjustWidth}:null,children:C?(0,c.jsxs)(a.eB,{hasTrack:!1,className:"tb_hs_post_slider",options:H,ref:e=>this.inputRefs[f]=e,onMove:this.autoScrollSlider,children:[(0,c.jsx)(a.v9,{children:(l.ThemeRule.multiRow>1&&1!==N.length&&N.length%2!==0?N.pop():N)&&N&&N.length>0&&N.map(((e,t)=>(0,c.jsx)(a.Nn,{className:`tb_${t}`,idd:_,children:(0,c.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const s=n[e];return(0,c.jsx)(x,{parentID:_,ownerId:l.Wall.owner,wall:l,itemData:s,itemIndex:t,personalization:l.Personalization,ThemeRule:l.ThemeRule,clickToShowPopUp:h,wallID:l.Wall.id,onClickToCTA:u,postSizeInPx:p,onClickPopUpSlider:v,adjustWidth:w,isTrue:E},t)}))})},`tb_${t}_${t}`)))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(m.isShowMoreLoading?"tb_a_spinner":""),onClick:d.HY||d.uS?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]}):null})," "]}):null})}}const S=(0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,i,o,a,r,n,l)=>e((0,j.H5)(t,s,i,o,a,r,n,l))})))(k)},98776:(e,t,s)=>{"use strict";t.pG=void 0;var i=s(61529);var o=s(95962);Object.defineProperty(t,"pG",{enumerable:!0,get:function(){return o.getImageSize}});var a=s(49363)},61529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const i=s(61529);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,o)=>{if("undefined"===typeof window)return o(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return o(i.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(e=>{a&&window.clearTimeout(a),o(`${e.type}: ${e.message}`)})),r.src=e,t.timeout&&(a=window.setTimeout((()=>o(i.ErrorMessage.TIMEOUT)),t.timeout))}))}},49363:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function r(e){try{l(i.next(e))}catch(t){a(t)}}function n(e){try{l(i.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,n)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const o=s(9950),a=s(95962);t.useImageSize=(e,t)=>{const[s,r]=(0,o.useState)(null),[n,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),r(null),c(null);try{const{width:s,height:i}=yield(0,a.getImageSize)(e,t);r({width:s,height:i})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[s,{loading:n,error:d}]}},61038:()=>{},95098:()=>{}}]);