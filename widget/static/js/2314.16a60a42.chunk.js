(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2314,8342,9239,5790],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var o=a(47313),i=(a(17739),a(98935)),s=a(46417);class n extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a,size:o}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:o||44,height:o||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var o=a(47313),i=a(46417);const s=t=>{let{username:e,network:a,authorClass:o,errorPic:s}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,i.jsx)("img",{className:"".concat(o,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,o.memo)(s)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var o=a(47313),i=a(46417);class s extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:o,item:s}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),o(s),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=s},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var o=a(47313),i=a(2406),s=a(20510),n=a.n(s),r=a(43635),l=a(35179),c=(a(98511),a(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:o,controls:i,autoPlay:s,handleVideoEnded:_,muted:u}=this.props,{paddingBottom:h,videoLoaded:m,isVisible:p}=this.state,b={paddingBottom:"".concat(h,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),title:"".concat(e.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(e.id),autoPlay:s,role:"presentation"}},file:{attributes:{preload:"metadata",title:"".concat(e.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(e.id),autoPlay:s,role:"presentation"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:s,muted:u,volume:s?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?p:s,height:"100%",width:"100%",controls:!0,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(47313),i=a(35179),s=a(46417);const n=o.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var o=a(47313),i=a(16390),s=a(17739),n=(a(35179),a(25810),a(46417));const r=o.lazy((()=>Promise.all([a.e(622),a.e(584)]).then(a.bind(a,30584)))),l=o.lazy((()=>a.e(7531).then(a.bind(a,97531))));class c extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var a,o;const t=(null===(a=this.contentRef)||void 0===a||null===(o=a.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:o,personalization:c,item:d,contentTitle:_,readMore:u,maxLength:h,textAlign:m,maxLines:p,isReadMore:b}=this.props,w={WebkitLineClamp:p,textAlign:a.textAlignment};m||a.textAlignment;let v=20==d.network.id?e:(0,s.Fx)(e);12==d.network.id&&(v=(0,i.ZP)(v));const g="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),f="".concat(t," ").concat(b?"":g," tb-cTBfont-").concat(a.font_varient);return(0,n.jsxs)("div",{className:f,ref:this.contentRef,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,d.aiStatus?(0,n.jsx)(l,{aiSummary:d.aiSummary,type:null===a||void 0===a?void 0:a.ai_summary}):(0,n.jsx)(r,{data:d,content:v,Personalization:c})]})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var o=a(47313),i=a(35179),s=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:n},"tb-network":e.id,children:(0,s.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>a?(0,s.jsx)(r,{ThemeID:a},o):(0,s.jsx)(n,{network:e},o))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var o=a(47313),i=a(43635),s=a(35179),n=a(46417);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:o,ownerId:n}=this.props;e.stopPropagation(),s.ZQ||(0,i.S5)({type:2,action:2,wall:o,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(47313),i=a(17739),s=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,s.jsx)("div",{className:a,role:"status","aria-label":"post timestamp ".concat((0,i.Sy)(e)),children:(0,i.Sy)(e)})},r=(0,o.memo)(n)},95136:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>N});a(47313);var o=a(89239),i=a(55790),s=a(25810),n=a(46417);const r=t=>{var e,a;let{author:r,personalization:l,postTime:c,network:d,ThemeRule:_,font:u,mediaType:h}=t;const m=r.username&&r.username.length>0?"@".concat(r.username):"",p=!(!l.postAuthor||r.isInstaUser),b=!(!l.postAuthor||!l.postTime||r.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[p?(0,n.jsx)(o.default,{author:r,network:d,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[p?(0,n.jsx)("div",{className:"tb_wt_authorname",children:r.name}):"",(0,n.jsx)("div",{className:"tb_wt_post_info",children:null!==r&&void 0!==r&&r.aiStatus?(0,n.jsxs)("div",{className:"tb_wt_username",children:[null===r||void 0===r||null===(e=r.avgRating)||void 0===e?void 0:e.avgRate," Based on ",null===r||void 0===r||null===(a=r.avgRating)||void 0===a?void 0:a.totalReviews," reviews"]}):(0,n.jsxs)(n.Fragment,{children:[p?(0,n.jsx)("div",{className:"tb_wt_username",children:m}):"",b?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",l.postTime?(0,n.jsx)(i.default,{postTime:c,timeClass:"tb_wt_time tb-cTBfont-".concat(_.font_varient),authorColor:_.authorColor}):""]})})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(s.default,{networkClass:"tb_wt_social_ico",network:d,isDefault:1===_.iconType,ThemeRule:_})})]})};var l=a(35179),c=a(81349),d=a(84261),_=a(64442);const u=t=>{let{itemData:e,wallID:a,ownerId:o,wall:i}=t;const s=!(!l.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,u=(l.ZQ||l.Jx)&&i.ThemeRule.aspectImageRatio?i.ThemeRule.aspectImageRatio:100;return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[s?null:(0,n.jsx)(c.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:l.ZQ}),r||s?(0,n.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:o,size:u,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,n.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:o,size:u,ThemeRule:i.ThemeRule})]})};var h=a(62245),m=a(7138),p=a(90905);const b=t=>{let{share:e,shareClass:a}=t;const o=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=a(17739);const v=(t,e,a)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):a,g=(t,e,a)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):a,f=t=>{let{itemData:e,ThemeRule:a}=t;const o=e.network.id,i=3===o||10===o?"like":"heart-outline";return(0,n.jsx)(n.Fragment,{children:12!==o&&15!==o&&20!==o&&21!==o&&29!==o?(0,n.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:v(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post Like Url ".concat(v(o,e.postId,e.link)),title:"Favorite",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(i),children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:g(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url ".concat(g(o,e.postId,e.link)),title:"Comment",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:l.ZQ?e.comment_count:e.like_count}):""]})}),1===o?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),title:"Tweet",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var x=a(5744);const k=l.ZQ?null:200,j=t=>{let{itemData:e,personalization:a,ThemeRule:o,wallID:i,clickToShowPopUp:s,itemIndex:c,ownerId:d,onClickToCTA:_,wall:v}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),j=!(!g||0!==e.hotspot),N=!(!e.hotspot||!g),C=!(l.ZQ&&(0,w.mD)(53)||(0,w.mD)(57)||l.Jx&&(0,w.mD)(85)||1===e.type),I=e.rating>0,y=e.rating>0?"tb_wt_rating_content":"tb_wt_content",T=1===e.type&&a.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",P=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=a.trimcontent?(0,w.Sv)(e.content,k):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":j?1:N?2:0,role:"article","aria-label":"Post ".concat(parseInt(c)+1,",").concat(S),tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:s(c,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:a,ThemeRule:o,mediaType:C}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[C?(0,n.jsx)(u,{itemData:e,wallID:i,ownerId:d,wall:v},"img".concat(c,"_").concat(e.id)):"",I?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(p.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(x.Z,{share:e.share,shareClass:"tb_wt_share_container",item:e,wallID:i,ownerId:d}):"",P?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(m.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",o.hideContent&&1!=e.type?"":(0,n.jsx)(h.default,{contentClass:"".concat(y," ").concat(T),item:e,content:S,font:o,ThemeRule:o,personalization:a,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!o.socialAction?{justifyContent:"flex-end"}:{},children:[o.socialAction?(0,n.jsx)(f,{itemData:e,ThemeRule:o}):"",e.share.status?(0,n.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:a,adjustWidth:o,wall:i,clickToShowPopUp:s,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const l=a[t];return(0,n.jsx)(j,{ownerId:i.Wall.owner,itemData:l,itemIndex:e,adjustWidth:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,onClickToCTA:r,wall:i},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var o=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var s=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const n=new Image;n.addEventListener("load",(()=>{s&&window.clearTimeout(s),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{s&&window.clearTimeout(s),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(s=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var o=this&&this.__awaiter||function(t,e,a,o){return new(a||(a=Promise))((function(i,s){function n(t){try{l(o.next(t))}catch(e){s(e)}}function r(t){try{l(o.throw(t))}catch(e){s(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),s=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,i.useState)(null),[r,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:o}=yield(0,s.getImageSize)(t,e);n({width:a,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:c}]}},50247:()=>{}}]);