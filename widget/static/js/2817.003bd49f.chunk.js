(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2817,8342,9239,5790],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var a=o(47313),i=(o(17739),o(98935)),n=o(46417);class s extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o,size:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:a||44,height:a||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var a=o(47313),i=o(46417);const n=t=>{let{username:e,network:o,authorClass:a,errorPic:n}=t;const s="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":s).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},s=(0,a.memo)(n)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var a=o(47313),i=o(46417);class n extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:n}=this.props,s=!(!o||1!==o.status),c={color:s?o.color:t.color,backgroundColor:s?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:c,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(n),window.open("".concat(s?o.url:t.url),"_blank")},children:[" ",s?o.text:t.text]})}}const s=n},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var a=o(47313),i=o(2406),n=o(20510),s=o.n(n),c=o(43635),r=o(35179),l=(o(98511),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:i,autoPlay:n,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:p,videoLoaded:m,isVisible:u}=this.state,b={paddingBottom:"".concat(p,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(s(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),title:"".concat(e.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(e.id),autoPlay:n,role:"presentation"}},file:{attributes:{preload:"metadata",title:"".concat(e.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(e.id),autoPlay:n,role:"presentation"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:n,muted:h,volume:n?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?u:n,height:"100%",width:"100%",controls:!0,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),i=o(35179),n=o(46417);const s=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class c extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:c,Personalization:r}=this.props,l=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(47313),i=o(16390),n=o(17739),s=(o(35179),o(25810),o(46417));const c=a.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class r extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var o,a;const t=(null===(o=this.contentRef)||void 0===o||null===(a=o.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:p,textAlign:m,maxLines:u,isReadMore:b}=this.props,g={WebkitLineClamp:u,textAlign:o.textAlignment};m||o.textAlignment;let w=20==d.network.id?e:(0,n.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const x="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),v="".concat(t," ").concat(b?"":x," tb-cTBfont-").concat(o.font_varient);return(0,s.jsxs)("div",{className:v,ref:this.contentRef,style:g,children:[_?(0,s.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(c,{data:d,content:w,Personalization:l})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var a=o(47313),i=o(35179),n=o(46417);const s=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:s}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:a,style:{color:s},"tb-network":e.id,children:(0,n.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class r extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,n.jsx)(c,{ThemeID:o},a):(0,n.jsx)(s,{network:e},a))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var a=o(47313),i=o(43635),n=o(35179),s=o(46417);class c extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:s}=this.props;e.stopPropagation(),n.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:s}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,s.jsx)("div",{})})}):"",t.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,s.jsx)("div",{})})}):"",t.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,s.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var a=o(47313),i=(o(35179),o(17739)),n=o(46417);const s=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):o,c=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):o,r=t=>{let{arialbl:e,hrefClick:o,Icon:a,count:s,itemId:c=0}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(c),"aria-label":"".concat(e," post,").concat("eye"==a?"view":"heart-outline"==a?"like":"comment"==a?"comment":""," count ").concat((0,i.sy)(s)),role:"button",tabIndex:"0",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),s>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sy)(s)}):""]})})};class l extends a.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,o=".tb_social_action__ico_wrap_".concat(null===e||void 0===e?void 0:e.id);null===(t=document.querySelector(o))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart-outline",h=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{className:"tb_social_action__",role:"list",children:[h?(0,n.jsx)(r,{itemId:t.id,arialbl:m,hrefClick:s(d,t.postId,t.link),Icon:_,iconColorStyle:l,count:t.like_count}):null,p?(0,n.jsx)(r,{itemId:t.id,arialbl:m,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,n.jsx)(r,{itemId:t.id,arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,n.jsx)(r,{arialbl:m,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),i=o(17739),n=o(46417);const s=t=>{const{postTime:e,timeClass:o}=t;return(0,n.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,i.Sy)(e)),children:(0,i.Sy)(e)})},c=(0,a.memo)(s)},16977:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>I});var a=o(47313),i=o(61395),n=o.n(i),s=o(89239),c=o(55790),r=o(25810),l=o(35179),d=o(17739),_=o(46417);const h=t=>{let{author:e,personalization:o,postTime:a,network:i,ThemeRule:n,itemData:h,mediaType:p}=t;const m=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!o.postAuthor||e.isInstaUser),b=!(!o.postAuthor||!o.postTime||e.isInstaUser||""==m);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(l.ZQ&&(0,d.mD)(19)&&p?"tb_nc_author_top":""),children:[u?(0,_.jsx)(s.default,{itemData:h,network:i,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[u?(0,_.jsx)("div",{className:"tb_nc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[u&&""!=m?(0,_.jsx)("div",{className:"tb_nc_username",children:m}):"",b?(0,_.jsx)("div",{className:"tb_nc_seprator",children:" "}):"",o.postTime?(0,_.jsx)(c.default,{postTime:a,timeClass:"tb_nc_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor}):""]})]})]}),l.ZQ&&(0,d.mD)(19)&&l.ZQ&&!p||(0,d.mD)(59)||(0,d.mD)(83)||(0,d.mD)(19)&&(l.ig||l.Jx)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:i,isDefault:1===n.iconType,ThemeRule:n})}):null]})};var p=o(81349),m=o(84261),u=o(64442);const b=t=>{let{itemData:e,wallID:o,ownerId:a,wall:i}=t;const n=!(!l.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),s=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,c=l.ZQ||l.Jx?!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio:(l.ig,!1),h=(e.hotspot,!!(l.ZQ&&(0,d.mD)(19)||!(0,d.mD)(59)&&!l.ig&&!l.Jx));return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[h?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===i.ThemeRule.iconType,ThemeRule:i.ThemeRule})}):null,n?null:(0,_.jsx)(p.Z,{itemData:e,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,isCenter:l.ZQ}),s||n?(0,_.jsx)(u.Z,{VideoClass:"tb_nc_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,_.jsx)(m.default,{ImageClass:"tb_nc_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:i.ThemeRule,hotspot:!0})]})};var g=o(62245),w=o(5744),x=o(7138),v=o(90905),k=o(32675);const f=l.ZQ?null:200,j=t=>{let{itemData:e,personalization:o,adjustWidth:i,ThemeRule:n,clickToShowPopUp:s,itemIndex:c,wallID:r,ownerId:p,onClickToCTA:m,wall:u,counter:j,onClickPopUpSlider:C}=t;const T=(0,a.useRef)(null),y={width:"".concat(i,"%"),padding:o.padding/2},I=1!==e.type,N=e.rating>0,D=e.rating>0?"tb_nc_rating_content":"tb_nc_content",P=1===e.type&&o.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",S=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),R=o.trimcontent?(0,d.Sv)(e.content,f):e.content;(0,a.useEffect)((()=>{l.ig&&(0,d.YN)(T)}),[]),(0,a.useEffect)((()=>{e.isPopUp&&C(c,e)}),[c,e.isPopUp,e]);e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(l.ZQ&&(0,d.mD)(59)||l.Jx&&(0,d.mD)(83)?"tb_nc_post_gradient tb_nc_gradient-".concat(j):""),style:y,"tb-network":e.network.icon,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,ref:T,tabIndex:"0","area-label":R,role:"article",children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,_.jsxs)("div",{className:"tb_nc_post_in",onClick:s(c,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[e.share.status?(0,_.jsx)(w.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:r,ownerId:p}):"",I?(0,_.jsx)(b,{itemData:e,wallID:r,ownerId:p,wall:u},"img_".concat(e.id)):"",!N||l.ZQ||(0,d.mD)(59)||l.ig?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(v.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:I,ownerId:p,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:n,personalization:o,ThemeRule:n}),l.ZQ?"":S?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):"",N&&(l.ZQ&&((0,d.mD)(59)||(0,d.mD)(19))||l.ig)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(v.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})}):"",l.ig&&n.hideContent||!l.ig&&!n.hideContent||1==e.type?(0,_.jsx)(g.default,{contentClass:"".concat(D," ").concat(P),item:e,content:R,font:n,ThemeRule:n,personalization:o,contentTitle:e.contentTitle}):"",l.ZQ&&S?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):""]}),n.socialAction?(0,_.jsx)(k.Z,{itemData:e,ThemeRule:n,ThemeID:o.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var C=o(43411),T=o(43635);class y extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,postSize:i,clickToShowPopUp:s,onClickToCTA:c,onClickPopUpSlider:r}=this.props,{loadData:d}=this.state;let h=0;return(0,_.jsx)(n(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,n)=>{const d=e[t];return h=l.ZQ||l.Jx&&83==a.Personalization.widgetTheme?n%6===0?1:h+1:1,(0,_.jsx)(j,{ownerId:a.Wall.owner,itemData:d,itemIndex:n,adjustWidth:1==d.highlight?2*o:o,postSize:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:s,onClickToCTA:c,wall:a,counter:h,onClickPopUpSlider:r},n)})):null})}}const I=(0,C.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(y)},50247:()=>{}}]);