(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8635,8342,9239,5790],{89239:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var o=i(47313),n=(i(17739),i(98935)),a=i(46417);class s extends o.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:i,size:o}=this.props;return(0,a.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:o||44,height:o||44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(n.Z,{authorClass:t,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var o=i(47313),n=i(46417);const a=e=>{let{username:t,network:i,authorClass:o,errorPic:a}=e;const s="#ffffff"==i.color?"#000":i.color;return(0,n.jsx)("img",{className:"".concat(o,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":s).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},s=(0,o.memo)(a)},7138:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var o=i(47313),n=i(46417);class a extends o.PureComponent{render(){const{cta:e,ctaClass:t,postCta:i,onClickToCTA:o,item:a}=this.props,s=!(!i||1!==i.status),r={color:s?i.color:e.color,backgroundColor:s?i.background:e.background};return(0,n.jsxs)("div",{className:t,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),o(a),window.open("".concat(s?i.url:e.url),"_blank")},children:[" ",s?i.text:e.text]})}}const s=a},64442:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var o=i(47313),n=i(2406),a=i(20510),s=i.n(a),r=i(43635),l=i(35179),c=(i(98511),i(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,n.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{const{videoLoaded:t}=this.state;t!=e&&this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var e;const{VideoClass:t,data:i,wallID:o,isCover:n,controls:a,autoPlay:h,handleVideoEnded:u,muted:_,wall:p,ownerId:m}=this.props,{paddingBottom:g,videoLoaded:b,isVisible:v}=this.state,w={paddingBottom:"".concat(g,"%")},f=i.mediaClip&&String(i.mediaClip).length>0?i.mediaClip:i.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:w,ref:this.videoRef,children:(0,c.jsx)(s(),{className:"".concat(t," video").concat(i.id),url:d(f,i.network.id),"data-type":"video","data-network":i.network.id,"data-link":i.link,"data-wall-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),title:"".concat(i.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(i.id),autoPlay:h,role:"presentation"}},file:{attributes:{preload:"metadata",title:"".concat(i.network.name," post video"),"aria-labelledby":"tb-hc-post-".concat(i.id),autoPlay:h,role:"presentation"}}},loop:!0,onError:e=>{i.stories&&0!=i.stories||(0,r.ib)(e,i.id)},autoPlay:h,muted:_,volume:h?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?v:h,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===p||void 0===p||null===(e=p.Wall)||void 0===e?void 0:e.owner)||m)||a||!1,style:{backgroundImage:"url(".concat(i.postFileNew,")"),backgroundSize:n?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},25810:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(47313),n=i(35179),a=i(46417);const s=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,a.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(s,{network:e,networkClass:t})]})}}},62245:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var o=i(47313),n=i(16390),a=i(17739),s=(i(35179),i(25810),i(46417));const r=o.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584)))),l=o.lazy((()=>i.e(7531).then(i.bind(i,97531))));class c extends o.PureComponent{constructor(e){super(e),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var i,o;const e=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:i,font:o,personalization:c,item:d,contentTitle:h,readMore:u,maxLength:_,textAlign:p,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:i.textAlignment};p||i.textAlignment;let v=20==d.network.id?t:(0,a.Fx)(t);12==d.network.id&&(v=(0,n.ZP)(v));const w="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),f="".concat(e," ").concat(g?"":w," tb-cTBfont-").concat(i.font_varient);return(0,s.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[h?(0,s.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(h)}):null,d.aiStatus?(0,s.jsx)(l,{aiSummary:d.aiSummary,type:null===c||void 0===c?void 0:c.ai_summary}):(0,s.jsx)(r,{data:d,content:v,Personalization:c})]})}}},90905:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var o=i(47313),n=i(35179),a=i(46417);const s=e=>{let{network:t}=e;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:s}=i[(null===t||void 0===t?void 0:t.aiNetwork)||(null===t||void 0===t?void 0:t.id)]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:o,style:{color:s},"tb-network":t.id,children:(0,a.jsx)("div",{})})},r=e=>{let{ThemeID:t}=e;const{className:i,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[t]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:i,style:{color:o},"tb-network":t})};class l extends o.PureComponent{render(){const{rating:e,network:t,ThemeID:i}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:e?[...Array(e)].map(((e,o)=>i?(0,a.jsx)(r,{ThemeID:i},o):(0,a.jsx)(s,{network:t},o))):null})}}},5744:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var o=i(47313),n=i(43635),a=i(35179),s=i(46417);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:i,wallID:o,ownerId:s}=this.props;t.stopPropagation(),a.ZQ||(0,n.S5)({type:2,action:2,wall:o,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(a.ZQ?"tb-share-fill":"tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,s.jsx)("div",{})})}):"",e.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,s.jsx)("div",{})})}):"",e.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,s.jsx)("div",{})})}):""]})]})}}},32675:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var o=i(47313),n=(i(35179),i(17739)),a=i(46417);const s=(e,t,i)=>1==e?"https://twitter.com/intent/favorite?tweet_id=".concat((0,n.ok)(t)):i,r=(e,t,i)=>1==e?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,n.ok)(t)):i,l=e=>{let{arialbl:t,hrefClick:i,Icon:o,count:s,itemId:r=0}=e;return(0,a.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,a.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(r),"aria-label":"".concat(t," post,").concat("eye"==o?"view":"heart-outline"==o?"like":"comment"==o?"comment":""," count ").concat((0,n.sy)(s)),role:"button",tabIndex:"0",children:[(0,a.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),children:" "}),s>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:(0,n.sy)(s)}):""]})})};class c extends o.PureComponent{componentDidMount(){try{var e;const{itemData:t}=this.props,i=".tb_social_action__ico_wrap_".concat(null===t||void 0===t?void 0:t.id);null===(e=document.querySelector(i))||void 0===e||e.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}))}catch(t){console.log(t)}}render(){const{itemData:e,ThemeRule:t,actionClass:i,ThemeID:o}=this.props,c={color:3===o?1===t.iconType?t.iconColor:e.network.color:t.fontColor},d=e.network.id,h=3===d||10===d||7===d?"like":"heart-outline",u=!![1,2,3,7,8,9,10,18].includes(d),_=![29,19].includes(d),p=e.network.name?e.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,a.jsx)("div",{className:i,children:(0,a.jsxs)("div",{className:"tb_social_action__",role:"list",children:[u?(0,a.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:s(d,e.postId,e.link),Icon:h,iconColorStyle:c,count:e.like_count}):null,_?(0,a.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:r(d,e.postId,e.link),Icon:"comment",iconColorStyle:c,count:e.comment_count}):null,1===d?(0,a.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,n.ok)(e.postId)),Icon:"retweet",iconColorStyle:c,count:e.comment_count}):null,(0,a.jsx)(l,{arialbl:p,itemId:e.id,hrefClick:e.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},55790:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(47313),n=i(17739),a=i(46417);const s=e=>{const{postTime:t,timeClass:i}=e;return(0,a.jsx)("div",{className:i,role:"status","aria-label":"post timestamp ".concat((0,n.Sy)(t)),children:(0,n.Sy)(t)})},r=(0,o.memo)(s)},20837:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>C});var o=i(47313),n=i(34862),a=i(43411),s=i(11774),r=i(64442),l=i(35179),c=i(84261),d=i(81349),h=i(46417);const u=e=>{var t;let{itemData:i,wallID:o,ownerId:n,wall:a,isCover:s,ThemeRule:u}=e;const _=(3===i.type||5===i.type)&&1==a.ThemeRule.autoPlay,p=(l.ZQ||"tagembed"==(null===a||void 0===a||null===(t=a.User)||void 0===t?void 0:t.userDatabaseType))&&u.aspectImageRatio?u.aspectImageRatio:100,m=!i.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[m?(0,h.jsx)(d.Z,{itemData:i,IconClass:"tb_hc_media_icon",show:m,isCenter:!1}):null,_?(0,h.jsx)(r.Z,{VideoClass:"tb_hc_video",data:i,wallID:o,themeID:a.Personalization.widgetTheme,wall:a,size:p,isCover:s,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,h.jsx)(c.default,{ImageClass:"tb_hc_image",data:i,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:n,size:p,hotspot:!0})]})};var _=i(62245),p=i(5744),m=i(7138),g=i(90905),b=i(32675),v=i(55790),w=i(25810),f=i(89239);const x=e=>{var t,i;let{author:n,personalization:a,postTime:s,network:r,ThemeRule:l,font:c,rating:d,ownerId:u,instaHash:_}=e;const p=n.username&&n.username.length>0?"@".concat(n.username):"",m=!(!a.postAuthor||n.isInstaUser),g=!(!a.postAuthor||!a.postTime||n.isInstaUser),b=null!==r.id&&""!==r.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[m?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(f.default,{network:r,author:n,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[m?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(l.font_varient),children:n.name}):"",(0,h.jsx)("div",{className:"tb_hc_post_info",children:null!==n&&void 0!==n&&n.aiStatus?(0,h.jsxs)("div",{className:"tb_hc_username",children:[null===n||void 0===n||null===(t=n.avgRating)||void 0===t?void 0:t.avgRate," Based on ",null===n||void 0===n||null===(i=n.avgRating)||void 0===i?void 0:i.totalReviews," reviews"]}):(0,h.jsxs)(h.Fragment,{children:[m?(0,h.jsx)("div",{className:"tb_hc_username",children:p}):"",g?(0,h.jsx)("div",{className:"tb_hc_seprator",children:" "}):"",a.postTime?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(v.default,{postTime:s,timeClass:"tb_hc_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor})}):""]})})]}),b?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(w.default,{networkClass:"tb_hc_social_ico",network:r,isDefault:1===l.iconType,ThemeRule:l})})}):null]})};var k=i(17739);const y=l.ZQ?null:140;class j extends o.PureComponent{constructor(e){super(e),this.contentRef=e=>{this.setState({height:e})},this.contentRefHidden=e=>{this.setState({hiddenHeight:e})},this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=o.createRef()}componentDidMount(){const{itemData:e,itemIndex:t,onClickPopUpSlider:i}=this.props;(l.nX||l.ig)&&(0,k.YN)(this.postTrack),e.isPopUp&&i(t,e)}render(){const{itemData:e,personalization:t,ThemeRule:i,clickToShowPopUp:n,itemIndex:a,wallID:s,ownerId:r,onClickToCTA:c,wall:d,languageSetting:v}=this.props,{isExpanded:w,hiddenHeight:f,height:j}=this.state,I=1!==e.type,S=!!(e.rating&&e.rating>0),C=e.rating>0?"tb_hc_rating_content":"tb_hc_content",T=1===e.type?"tb_hc_text_post":"",N=1===e.type&&String(e.content).length>0&&t.textDecorate?"tb_hc_text_decoration":"",P=!!e.cta.status,D=t.trimcontent?(0,k.Sv)(e.content,y):e.content,R=f>j;return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:t.padding/2},role:"article","aria-label":"Post ".concat(parseInt(a)+1,",").concat(D),children:(0,h.jsxs)("div",{className:"tb_hc_post_in",onClick:n(a,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,h.jsxs)("div",{className:"tb_hc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[e.share.status?(0,h.jsx)(p.Z,{share:e.share,shareClass:"tb_hc_share_container",item:e,wallID:s,ownerId:r}):"",I?(0,h.jsx)(u,{itemData:e,wallID:s,wall:d,ownerId:r,size:!!t.trimcontent&&100,isCover:!!t.trimcontent,ThemeRule:i},"img".concat(a,"_").concat(e.id)):null]}),(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(T),children:[(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(x,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:t,ThemeRule:i,rating:e.rating,instaHash:e.instaHash})}),P?(0,h.jsxs)("div",{className:"tb_hc_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(m.Z,{ctaClass:"tb_hc_post_cta_btn",cta:t.cta,postCta:e.cta,item:e,onClickToCTA:c})," "]}):"",S?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(g.Z,{rating:e.rating,network:e.network})}):null,l.ig&&i.hideContent||!l.ig&&!i.hideContent||1==e.type?(0,h.jsxs)("div",{className:"tb_hc_content_wrapper__",children:[l.ZQ?(0,h.jsx)("div",{className:"tb_hc_content_hidden",children:(0,h.jsx)(_.default,{contentClass:"".concat(C," ").concat(N),item:e,content:D,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,h.jsx)(_.default,{contentClass:"".concat(C," ").concat(N),item:e,content:D,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:w?"":i.lineTrim,isReadMore:!0},e.id),i.lineTrim>0&&R&&l.ZQ?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:w?v.showLess:v.readMore}):null]}):null]}),l.ig||l.ZQ?i.socialAction?(0,h.jsx)(b.Z,{itemData:e,ThemeRule:i,ThemeID:t.widgetTheme,actionClass:"tb_hc_social_action__"}):null:""]})})}}var I=i(43635);i(37210);class S extends o.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:e,wall:t,preRender:i,hasMoreData:o,getDataNextSteps:n}=this.props;o&&n(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,i,e.heightEvent)},this.handleKeyPress=e=>{try{const{wall:i}=this.props;if(1==i.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:i}=this.props;e.preventDefault();var t=this.inputRefs[i].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(i){}},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,o=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),n=Number(o)+(i-1)+i;n>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(n*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(e,t,i,o)=>{const{wall:n}=this.props;if(1==n.Personalization.autoScrollStatus){const t=l.ZQ?e._o.perPage+e.index:e.index;e.length-t===(l.ZQ?1:e._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:t});document.querySelectorAll(".splide__slide").forEach((e=>{e.removeAttribute("role")}))}),100);const{postData:i}=this.props;if(i&&1==i.length){let n=document.querySelector(".tb_hc_arrow_left__"),a=document.querySelector(".tb_hc_arrow_right__");function s(){setTimeout((()=>{let e=document.querySelector(".splide__list");null!=e&&(e.style.transform="translateX(0)")}),100)}n&&a&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){s()})),s(),window.addEventListener("resize",s)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let o=document.querySelector("#kt_aside_toggle");null!=o&&o.addEventListener("click",this.reScrolled),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}componentDidUpdate(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;t+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:t+15})}),100)}render(){var e;const{postData:t,completeDataObject:i,wall:o,clickToShowPopUp:a,hasMoreData:r,onClickToCTA:c,parentID:d,keyRender:u,languageSetting:_,cardNumber:p,onClickPopUpSlider:m}=this.props,{sliderHeight:g}=this.state,b=d,{windowWidth:v}=this.state,w=o.ThemeRule.numberOfPosts,f=o.ThemeRule.numberOfCoumn,x=o.ThemeRule.mobileColumn,y=o.ThemeRule.slidePost&&!l.ig,I=o.ThemeRule.slideDuration,S=o.Personalization.autoScrollStatus,C=1===o.Personalization.trimcontent,T=l.ZQ?(0,k.b)():!!(v<768||n.tq),N=w>parseInt(p)?parseInt(p):w,P=t&&t.length?T?1:t.length>N?N:t.length:3,D=t&&t.length?T?1:t.length>N?N:t.length:4;T||1===S||t.length;const R=l.ZQ&&void 0!==(null===(e=o.Personalization)||void 0===e?void 0:e.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},E=1!=S?!(Object.keys(R).length>0)&&"slide":"slide",z=P!=t.length&&D!=t.length||0!=Object.keys(R).length?t:Array(2).fill(t).flat(),Z=(o.ThemeRule.lineTrim,!(l.ZQ||!C)),A={...R,type:1!==S&&E,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==S,interval:y?1e3*I:5e3,perPage:f>0?f:T?1:t.length>N?N:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:!!y,padding:"0",pagination:!1,arrows:!!T||t.length>=(f>0?f:D),fixedHeight:Z,breakpoints:{560:{perPage:x>0?x:1,perMove:x>0?x:1,arrows:t.length>=(x>0?x:1)},767:{perPage:f>0?f-3<1?f:f-3:P,arrows:t.length>=(f>0?f-3<1?f:f-3:P)},991:{perPage:f>0?f-4<1?f:f-4:P,arrows:t.length>=(f>0?f-4<1?f:f-4:P)},1200:{perPage:f>0?f-1==0?f:f-1:P,arrows:t.length>=(f>0?f-1==0?f:f-1:P)},1600:{perPage:f>0?f:D,arrows:t.length>=(f>0?f:D)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:g},children:(0,h.jsxs)(s.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(Z?"tb_hc_fixed_height":""),options:A,ref:e=>this.inputRefs[b]=e,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)(s.Gj,{children:z&&z.length>0&&z.map(((e,t)=>{const n=i[e];return(0,h.jsx)(s.jw,{p_id:d,className:"tb_".concat(n.id),children:(0,h.jsx)(j,{ownerId:o.Wall.owner,itemData:n,itemIndex:t,personalization:o.Personalization,ThemeRule:o.ThemeRule,clickToShowPopUp:a,wallID:o.Wall.id,onClickToCTA:c,wall:o,languageSetting:_,onClickPopUpSlider:m})},t)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-label":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-label":"Navigation Next Slide",onClick:l.ig?this.requestData:null,children:" "})]})]})}):null})}}const C=(0,o.memo)((0,a.$j)((e=>({})),(e=>({getDataNextSteps:(t,i,o,n,a,s,r,l)=>e((0,I.Sx)(t,i,o,n,a,s,r,l))})))(S))},2406:(e,t,i)=>{"use strict";t.Ad=void 0;var o=i(84228);var n=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var a=i(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return n(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const s=new Image;s.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{a&&window.clearTimeout(a),n("".concat(e.type,": ").concat(e.message))})),s.src=e,t.timeout&&(a=window.setTimeout((()=>n(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){"use strict";var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,a){function s(e){try{l(o.next(e))}catch(t){a(t)}}function r(e){try{l(o.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const n=i(47313),a=i(65786);t.useImageSize=(e,t)=>{const[i,s]=(0,n.useState)(null),[r,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),s(null);try{const{width:i,height:o}=yield(0,a.getImageSize)(e,t);s({width:i,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[e,t]),[i,{loading:r,error:c}]}},37210:()=>{},50247:()=>{}}]);