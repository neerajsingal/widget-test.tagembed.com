(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[581,6264,6723,8167],{78167:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(9950),a=(o(52867),o(93662)),s=o(44414);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o,size:i}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:i||44,height:i||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(a.A,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});var i=o(9950),a=o(44414);const s=t=>{let{username:e,network:o,authorClass:i,errorPic:s}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,a.jsx)("img",{className:`${i}__`,src:s||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===o.id?"#000":n).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,i.memo)(s)},60531:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});var i=o(9950),a=o(44414);class s extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:i,item:s}=this.props,n=!(!o||1!==o.status),r={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,a.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(s),window.open(`${n?o.url:t.url}`,"_blank")},children:[" ",n?o.text:t.text]})}}const n=s},3720:(t,e,o)=>{"use strict";o.d(e,{A:()=>_});var i=o(9950),a=o(98776),s=o(38092),n=o.n(s),r=o(14478),l=o(66345),c=(o(45565),o(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e,carousel:o}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.pG)(o?e.postFile:e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.carousel?this.props.data.postFile:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var t;const{VideoClass:e,data:o,wallID:i,isCover:a,controls:s,autoPlay:_,handleVideoEnded:m,muted:u,wall:p,ownerId:h,carousel:b}=this.props,{paddingBottom:v,videoLoaded:w,isVisible:g}=this.state,k={paddingBottom:`${v}%`},x=o.mediaClip&&String(o.mediaClip).length>0?o.mediaClip:b?o.mediaFile:o.mediaUrl;return(0,c.jsx)("div",{className:`${e}_wrap_ mediaHolder${o.id}`,style:k,ref:this.videoRef,children:(0,c.jsx)(n(),{className:`${e} video${o.id}`,url:d(x,b?o.networkId:o.network.id),"data-type":"video","data-network":b?o.networkId:o.network.id,"data-link":null===o||void 0===o?void 0:o.link,"data-wall-id":i,"data-item-id":o.id,"data-feed-id":o.feedId?o.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),title:`${b?"":o.network.name} post video`,"aria-labelledby":`tb-hc-post-${o.id}`,autoPlay:_,role:"presentation"}},file:{attributes:{preload:"metadata",title:`${b?"":o.network.name} post video`,"aria-labelledby":`tb-hc-post-${o.id}`,autoPlay:_,role:"presentation"}}},loop:!0,onError:t=>{o.stories&&0!=o.stories||(0,r.zi)(t,o.id)},autoPlay:_,muted:u,volume:_?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?g:_,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===p||void 0===p||null===(t=p.Wall)||void 0===t?void 0:t.owner)||h)||s||!1,style:{backgroundImage:`url(${b?o.postFile:o.postFileNew})`,backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:m||null})})}}},44463:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var i=o(9950),a=o(66345),s=o(44414);const n=i.lazy((()=>o.e(620).then(o.bind(o,20620))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.uS&&36==t.id?"tagembed":t.icon;return c?(0,s.jsx)("div",{className:`${e} tb__icon tb-${d.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===t||void 0===t?void 0:t.name)||""}`,children:(0,s.jsx)("div",{})}):(0,s.jsxs)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},65859:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var i=o(9950),a=o(70804),s=o(52867),n=(o(66345),o(44463),o(44414));const r=i.lazy((()=>Promise.all([o.e(8615),o.e(1796)]).then(o.bind(o,21796)))),l=i.lazy((()=>o.e(3576).then(o.bind(o,33576))));class c extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var o,i;const t=(null===(o=this.contentRef)||void 0===o||null===(i=o.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:i,personalization:c,item:d,contentTitle:_,readMore:m,maxLength:u,textAlign:p,maxLines:h,isReadMore:b}=this.props,v={WebkitLineClamp:h,textAlign:o.textAlignment};p||o.textAlignment;let w=20==d.network.id?e:(0,s.w)(e);12==d.network.id&&(w=(0,a.Ay)(w));const g=""+(o.lineTrim?` tb_content_line-${o.lineTrim}`:""),k=`${t} ${b?"":g} tb-cTBfont-${o.font_varient}`;return(0,n.jsxs)("div",{className:k,ref:this.contentRef,style:v,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(_)}):null,d.aiStatus?(0,n.jsx)(l,{aiSummary:d.aiSummary,type:null===c||void 0===c?void 0:c.ai_summary}):(0,n.jsx)(r,{data:d,content:w,Personalization:c})]})}}},49395:(t,e,o)=>{"use strict";o.d(e,{A:()=>l});var i=o(9950),a=o(66345),s=o(44414);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=o[(null===e||void 0===e?void 0:e.aiNetwork)||(null===e||void 0===e?void 0:e.id)]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,s.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:i},"tb-network":e})};class l extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>o?(0,s.jsx)(r,{ThemeID:o},i):(0,s.jsx)(n,{network:e},i))):null})}}},173:(t,e,o)=>{"use strict";o.d(e,{A:()=>r});var i=o(9950),a=o(14478),s=o(66345),n=o(44414);class r extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:i,ownerId:n}=this.props;e.stopPropagation(),s.uS||(0,a.hq)({type:2,action:2,wall:i,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,a.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon "+(s.uS?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},46803:(t,e,o)=>{"use strict";o.d(e,{A:()=>c});var i=o(9950),a=(o(66345),o(52867)),s=o(44414);const n=(t,e,o)=>1==t?`https://twitter.com/intent/favorite?tweet_id=${(0,a.Ph)(e)}`:o,r=(t,e,o)=>1==t?`https://twitter.com/intent/tweet?in_reply_to=${(0,a.Ph)(e)}`:o,l=t=>{let{arialbl:e,hrefClick:o,Icon:i,count:n,itemId:r=0}=t;return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,s.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${r}`,"aria-label":`${e} post,${"eye"==i?"view":"heart-outline"==i?"like":"comment"==i?"comment":""} count ${(0,a.sl)(n)}`,role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${i}`,children:" "}),n>0?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sl)(n)}):""]})})};class c extends i.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,o=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(o))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:i}=this.props,c={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart-outline",m=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,s.jsx)(s.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,s.jsx)("div",{className:o,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[m?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:`https://twitter.com/intent/retweet?tweet_id=${(0,a.Ph)(t.postId)}`,Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,s.jsx)(l,{arialbl:p,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},6723:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});o(9950);var i=o(52867),a=o(44414);const s=t=>{const{postTime:e,timeClass:o}=t;return(0,a.jsx)("div",{className:o,role:"status","aria-label":`post timestamp ${(0,i.fF)(e)}`,children:(0,i.fF)(e)})}},57458:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>T});var i=o(9950),a=o(74378),s=o.n(a),n=o(52867),r=o(66345),l=o(78167),c=o(6723),d=o(44463),_=o(44414);const m=t=>{var e,o;let{author:i,personalization:a,postTime:s,network:m,ThemeRule:u,font:p,mediaType:h,ownerId:b}=t;const v=!(!a.postAuthor||i.isInstaUser),w=!(!a.postAuthor||!a.postTime||i.isInstaUser);return(0,_.jsxs)("div",{className:"tb_mc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,_.jsxs)("div",{className:"tb_mc_author",children:[v?(0,_.jsx)(l.default,{network:m,author:i,authorClass:"tb_mc_author_profile"},i.username):"",(0,_.jsxs)("div",{className:"tb_mc_author_info",children:[v?(0,_.jsx)("div",{className:"tb_mc_authorname","aria-label":i.name,children:i.name}):"",(0,_.jsx)("div",{className:"tb_mc_post_info",children:null!==i&&void 0!==i&&i.aiStatus?(0,_.jsxs)("div",{className:"tb_mc_username",children:[null===i||void 0===i||null===(e=i.avgRating)||void 0===e?void 0:e.avgRate," Based on ",null===i||void 0===i||null===(o=i.avgRating)||void 0===o?void 0:o.totalReviews," reviews"]}):(0,_.jsxs)(_.Fragment,{children:[v?(0,_.jsx)("div",{className:"tb_mc_username","aria-label":(null===i||void 0===i?void 0:i.username)||"",children:i.username&&i.username.length>0?`@${i.username}`:""}):"",w?(0,_.jsx)("div",{className:"tb_mc_seprator",children:" "}):"",a.postTime?(0,_.jsx)(c.default,{postTime:s,timeClass:`tb_mc_time tb-cTBfont-${u.font_varient}`}):""]})})]})]}),h&&m.id||r.uS||r.MH&&(0,n.Nv)(79)?(0,_.jsx)("div",{className:"tb_mc_social_",children:(0,_.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:m,isDefault:1===u.iconType,ThemeRule:u})}):null]})};var u=o(15537),p=o(78262),h=o(3720);const b=t=>{var e;let{itemData:o,wallID:i,ownerId:a,wall:s}=t;const n=3===o.type||5===o.type,l="tagembed"==(null===s||void 0===s||null===(e=s.User)||void 0===e?void 0:e.userDatabaseType),c=!(!l||!n||s.Personalization.mobilePopup||s.Personalization.postFeatured),d=!(!n||1!=s.ThemeRule.autoPlay),m=!(!l&&!r.MH)&&(!!s.ThemeRule.aspectImageRatio&&s.ThemeRule.aspectImageRatio);return(0,_.jsxs)("div",{className:"tb_mc_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[c||d?null:(0,_.jsx)(u.A,{itemData:o,IconClass:"tb_mc_media_icon",show:!0,isCenter:l}),d||c?(0,_.jsx)(h.A,{VideoClass:"tb_mc_video",data:o,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:a,size:m,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_mc_image",data:o,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:a,size:m,ThemeRule:s.ThemeRule})]})};var v=o(65859),w=o(173),g=o(60531),k=o(49395),x=o(46803);const f=r.uS?null:200;class j extends i.PureComponent{constructor(t){super(t),this.postTrack=i.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:o}=this.props;(0,n._7)(this.postTrack),t.isPopUp&&o(e,t);try{var i,a;null===(i=document.querySelector(`.tb_mc_post_cta_btn_${t.id}`))||void 0===i||i.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())})),null===(a=document.querySelector(`.tb_mc_post_in${t.id}`))||void 0===a||a.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(s){console.log(s)}}render(){const{itemData:t,personalization:e,adjustWidth:o,ThemeRule:i,clickToShowPopUp:a,itemIndex:s,wallID:l,ownerId:c,onClickToCTA:u,wall:p}=this.props,h=!(r.uS&&(0,n.Nv)(52)||1===t.type),j=t.rating>0,C=t.rating>0?"tb_mc_rating_content":"tb_mc_content",y=1===t.type&&t.content&&String(t.content).length>0&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",N=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),I=e.trimcontent?(0,n.Ex)(t.content,f):t.content;return(0,_.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:`${1==t.highlight?2*o:o}%`,padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,tabIndex:"0","area-label":I,role:"article",children:(0,_.jsx)("div",{className:"tb_mc_post_wrap_in "+(r.uS&&(0,n.Nv)(52)?"te_mc_post_wrap_in":""),children:(0,_.jsxs)("div",{className:`tb_mc_post_in tb_mc_post_in${t.id}`,onClick:a(s,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[r.uS&&(0,n.Nv)(20)?(0,_.jsx)("div",{className:"tb_mc_author_container",children:(0,_.jsx)(m,{ownerId:c,mediaType:h,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i})}):null,(0,_.jsxs)("div",{className:"tb_mc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[t.share.status?(0,_.jsx)(w.A,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:l,ownerId:c}):null,h?(0,_.jsx)(b,{itemData:t,wallID:l,ownerId:c,ThemeRule:i,wall:p}):null]}),(0,_.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[r.uS||h||!(0,n.Nv)(20)?null:(0,_.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,_.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i})," "]}),(0,_.jsxs)("div",{className:"tb_mc_content_wrap "+((0,n.Nv)(52)?"tb_mc_content_wrap_fixed":""),role:"article","aria-roledescription":"Post content wrapper","aria-label":"Post content wrapper includes rating ,content and CTA Button",children:[j?(0,_.jsxs)("div",{className:"tb_mc_rating__ "+(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,_.jsx)(k.A,{rating:t.rating,network:t.network})," "]}):null,N&&!r.uS?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.A,{ctaClass:`tb_mc_post_cta_btn tb_mc_post_cta_btn_${t.id}`,cta:t.cta,item:t,onClickToCTA:u})," "]}):null,!(t.content&&String(t.content).length>0)||i.hideContent&&h?null:(0,_.jsx)(v.default,{item:t,contentClass:`${C} ${y}`,content:I,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),N&&r.uS?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.A,{ctaClass:`tb_mc_post_cta_btn tb_mc_post_cta_btn_${t.id}`,cta:t.cta,item:t,onClickToCTA:u})," "]}):null,!r.uS||(0,n.Nv)(52)?(0,_.jsx)(m,{ownerId:c,mediaType:h,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i}):null]}),i.socialAction&&!(0,n.Nv)(52)?(0,_.jsx)(x.A,{itemData:t,ThemeRule:i,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})})})}}const C=j;var y=o(11127),N=o(14478);class I extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight(`${e}`)}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:i,clickToShowPopUp:a,onClickToCTA:n,onClickPopUpSlider:r}=this.props,{loadData:l}=this.state;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(s(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((t,s)=>{const l=e[t];return(0,_.jsx)(C,{ownerId:i.Wall.owner,itemData:l,itemIndex:s,adjustWidth:1==l.highlight?2*o:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n,wall:i,onClickPopUpSlider:r},`modern_card${l.id}`)})):null})})}}const T=(0,y.Ng)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,N.V3)(e))})))(I)},95098:()=>{}}]);