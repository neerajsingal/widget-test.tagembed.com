(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2687,6264,6723,8167],{78167:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var o=n(9950),i=(n(52867),n(93662)),a=n(44414);class s extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:n,size:o}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:o||44,height:o||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(i.A,{authorClass:e,username:t.name,network:n,color:null===n.id?"#000":n.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var o=n(9950),i=n(44414);const a=t=>{let{username:e,network:n,authorClass:o,errorPic:a}=t;const s="#ffffff"==n.color?"#000":n.color;return(0,i.jsx)("img",{className:"".concat(o,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===n.id?"#000":s).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},s=(0,o.memo)(a)},60531:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var o=n(9950),i=n(44414);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:n,onClickToCTA:o,item:a}=this.props,s=!(!n||1!==n.status),r={color:s?n.color:t.color,backgroundColor:s?n.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),o(a),window.open("".concat(s?n.url:t.url),"_blank")},children:[" ",s?n.text:t.text]})}}const s=a},44463:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var o=n(9950),i=n(66345),a=n(44414);const s=o.lazy((()=>n.e(620).then(n.bind(n,20620))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:n,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.uS&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(s,{network:t,networkClass:e})]})}}},65859:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var o=n(9950),i=n(70804),a=n(52867),s=(n(66345),n(44463),n(44414));const r=o.lazy((()=>Promise.all([n.e(8615),n.e(1796)]).then(n.bind(n,21796))));class l extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var n,o;const t=(null===(n=this.contentRef)||void 0===n||null===(o=n.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:n,font:l,personalization:c,item:d,contentTitle:_,readMore:u,maxLength:h,textAlign:p,maxLines:m,isReadMore:b}=this.props,g={WebkitLineClamp:m,textAlign:n.textAlignment};p||n.textAlignment;let x=20==d.network.id?e:(0,a.w)(e);12==d.network.id&&(x=(0,i.Ay)(x));const w="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),v="".concat(t," ").concat(b?"":w," tb-cTBfont-").concat(n.font_varient);return(0,s.jsxs)("div",{className:v,ref:this.contentRef,style:g,children:[_?(0,s.jsx)("div",{className:"tb_bold_txt__",children:(0,i.Ay)(_)}):null,(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(r,{data:d,content:x,Personalization:c})]})]})}}},49395:(t,e,n)=>{"use strict";n.d(e,{A:()=>l});var o=n(9950),i=n(66345),a=n(44414);const s=t=>{let{network:e}=t;const n={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:s}=n[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:o,style:{color:s},"tb-network":e.id,children:(0,a.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:n,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:n,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:n}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>n?(0,a.jsx)(r,{ThemeID:n},o):(0,a.jsx)(s,{network:e},o))):null})}}},173:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var o=n(9950),i=n(14478),a=n(66345),s=n(44414);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:n,wallID:o,ownerId:s}=this.props;e.stopPropagation(),a.uS||(0,i.hq)({type:2,action:2,wall:o,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:s}),(0,i.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(a.uS?"tb-share-fill":"tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,s.jsx)("div",{})})}):"",t.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,s.jsx)("div",{})})}):"",t.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,s.jsx)("div",{})})}):""]})]})}}},46803:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var o=n(9950),i=(n(66345),n(52867)),a=n(44414);const s=(t,e,n)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.Ph)(e)):n,r=(t,e,n)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.Ph)(e)):n,l=t=>{let{arialbl:e,hrefClick:n,Icon:o,count:s,itemId:r=0}=t;return(0,a.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(n,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(r),"aria-label":"".concat(e," post,").concat("eye"==o?"view":"heart-outline"==o?"like":"comment"==o?"comment":""," count ").concat((0,i.sl)(s)),role:"button",tabIndex:"0",children:[(0,a.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),children:" "}),s>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sl)(s)}):""]})})};class c extends o.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,n=".tb_social_action__ico_wrap_".concat(null===e||void 0===e?void 0:e.id);null===(t=document.querySelector(n))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:n,ThemeID:o}=this.props,c={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart-outline",u=!![1,2,3,7,8,9,10,18].includes(d),h=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,a.jsx)("div",{className:n,children:(0,a.jsxs)("div",{className:"tb_social_action__",role:"list",children:[u?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:s(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,h?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.Ph)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,a.jsx)(l,{arialbl:p,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},6723:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var o=n(9950),i=n(52867),a=n(44414);const s=t=>{const{postTime:e,timeClass:n}=t;return(0,a.jsx)("div",{className:n,role:"status","aria-label":"post timestamp ".concat((0,i.fF)(e)),children:(0,i.fF)(e)})},r=(0,o.memo)(s)},71630:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>C});var o=n(89379),i=n(9950),a=n(41377),s=n(73878),r=n(53556),l=n(52867),c=n(66345),d=n(78167),_=n(6723),u=n(44463),h=n(44414);const p=t=>{let{author:e,personalization:n,postTime:o,network:i,ThemeRule:a,font:s,mediaType:r,ownerId:l}=t;const p=!(!n.postAuthor||e.isInstaUser),m=!(!n.postAuthor||!n.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[p?(0,h.jsx)(d.default,{network:i,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",m?(0,h.jsx)("div",{className:"tb_rc_seprator",children:" "}):"",n.postTime?(0,h.jsx)(_.default,{postTime:o,timeClass:"tb_rc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor}):""]})]})]}),r&&i.id||c.uS||c.MH?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(u.default,{networkClass:"tb_rc_social_ico",network:i,isDefault:1===a.iconType,ThemeRule:a})}):null]})};var m=n(65859),b=n(173),g=n(60531),x=n(49395),w=n(46803);const v=c.uS?null:200;class f extends i.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this)}componentDidMount(){const{itemData:t,onClickPopUpSlider:e,itemIndex:n}=this.props;t.isPopUp&&e(n,t)}componentDidMount(){const{itemData:t,onClickPopUpSlider:e,itemIndex:n}=this.props;t.isPopUp&&e(n,t)}render(){const{itemData:t,personalization:e,adjustWidth:n,ThemeRule:o,clickToShowPopUp:i,itemIndex:a,wallID:s,ownerId:r,onClickToCTA:d,wall:_,languageSetting:f}=this.props,{isExpanded:k,hiddenHeight:j,height:S}=this.state,C=1!==t.type,N=t.rating>0,y=t.rating>0||(0,l.Nv)(54)?"tb_rc_rating_content":"tb_rc_content",T=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",I=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),P=e.trimcontent?(0,l.Ex)(t.content,v):t.content,D=j>S;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper","data-id":t.id,style:{width:"".concat(1==t.highlight?2*n:n,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"area-label":P,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in ".concat(c.uS?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_rc_post_in",onClick:i(a,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[c.uS||C||!(0,l.Nv)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(u.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o})," "]}),t.share.status?(0,h.jsx)(b.A,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:s,ownerId:r}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,l.Nv)(52)?"tb_rc_content_wrap_fixed":""),style:{textAlign:o.textAlignment},children:[N?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(x.A,{rating:t.rating,network:t.network})," "]}):null,I&&!c.uS?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(g.A,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,o.hideContent&&C?null:(0,h.jsxs)("div",{className:"tb_rc_content_in",children:[(0,h.jsx)("div",{className:"tb_rc_rating_content_hidden",children:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(y," ").concat(T),content:P,font:o,ThemeRule:o,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0})}),(0,h.jsx)(m.default,{item:t,contentClass:"".concat(y," ").concat(T),content:P,font:o,ThemeRule:o,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:k?"":o.lineTrim,isReadMore:!0}),o.lineTrim>0&&D?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,languageSetting:f,children:k?f.showLess:f.readMore}):null]})]}),I&&c.uS?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(g.A,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(p,{ownerId:r,mediaType:C,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:e,ThemeRule:o})]}),o.socialAction&&!(0,l.Nv)(52)?(0,h.jsx)(w.A,{itemData:t,ThemeRule:o,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(c.uS?"tb_rc_social_action_bg":"")}):null]})})})}}const k=f;var j=n(14478);n(61038);class S extends i.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(l.S2)&&document.getElementById(l.S2).clientWidth?document.getElementById(l.S2).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(l.S2)&&document.getElementById(l.S2).clientWidth?document.getElementById(l.S2).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:n,hasMoreData:o,getDataNextSteps:i}=this.props;o&&i(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,n,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const n=document.querySelectorAll(".splide__slide.is-visible").length,o=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),i=Number(o)+(n-1)+n;i>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(i*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(t,e,n,o)=>{const{wall:i}=this.props;if(1==i.Personalization.autoScrollStatus){const e=c.uS?t._o.perPage+t.index:t.index;t.length-e===(c.uS?1:t._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let n=document.querySelector(".tb_rc_arrow_left__"),o=document.querySelector(".tb_rc_arrow_right__");function i(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}n&&o&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){i()})),i(),window.addEventListener("resize",i)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:n,onClickPopUpSlider:o,parentID:i}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,a)=>{if(t.classList){const a=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var s=a[0];String(a[0]).includes("tb_")&&(s=String(a[0]).replace("tb_",""));const r=e.findIndex((t=>t==s));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],a=e.getAttribute("p_id");String(i)===String(a)&&e.addEventListener("click",(t=>{t.preventDefault();const e=n[s];o(r,e)}))}}}))}}render(){var t;const{postData:e,completeDataObject:n,wall:i,clickToShowPopUp:s,hasMoreData:l,onClickToCTA:d,parentID:_,languageSetting:u,onClickPopUpSlider:p}=this.props,m=_,{windowWidth:b}=this.state,g=i.ThemeRule.numberOfCoumn,x=i.ThemeRule.mobileColumn,w=i.ThemeRule.slidePost,v=i.ThemeRule.slideDuration,f=i.Personalization.autoScrollStatus,j=1===i.Personalization.trimcontent,S=!!(b<768||a.Fr),C=e&&e.length?S?1:e.length>3?3:e.length:3,N=e&&e.length?S?1:e.length>3?3:e.length:3;S||1===f||e.length;const y=c.uS?3:5,T=c.uS&&void 0!==(null===(t=i.Personalization)||void 0===t?void 0:t.clonePost)&&0===i.Personalization.clonePost?{clones:0}:{},I=1!=f?!(Object.keys(T).length>0)&&"slide":"slide",P=(0,o.A)((0,o.A)({},T),{},{type:1!==f&&I,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===w?1e3*v:5e3,perPage:g>0?g:S?1:e.length>y?y:e.length,gap:0,perMove:!!c.uS&&1,autoplay:1===w,padding:"0",pagination:!1,arrows:!!S||e.length>(g>0?g:N),fixedHeight:j,breakpoints:{560:{perPage:x>0?x:1,perMove:x>0?x:1,arrows:e.length>(x>0?x:1)},767:{perPage:g>0?g-3<1?g:g-3:C,arrows:e.length>(g>0?g-3<1?g:g-3:C)},991:{perPage:g>0?g-4<1?g:g-4:C,arrows:e.length>(g>0?g-4<1?g:g-4:C)},1200:{perPage:g>0?g-1==0?g:g-1:C,arrows:e.length>(g>0?g-1==0?g:g-1:C)},1600:{perPage:g>0?g:N,arrows:e.length>(g>0?g:N)}}});return(0,h.jsx)(h.Fragment,{children:""!=_?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(r.eB,{hasTrack:!1,className:"tb_rc_post_slider ".concat(j?"tb_rc_fixed_height":""," ").concat(c.uS?"tb_rc_fixed_height_te":""),options:P,ref:t=>this.inputRefs[m]=t,onMove:this.autoScrollSlider,children:[(0,h.jsx)(r.v9,{children:e&&e.length>0&&e.map(((t,e)=>{const o=n[t];return(0,h.jsx)(r.Nn,{p_id:_,className:"tb_".concat(o.id),children:(0,h.jsx)(k,{ownerId:i.Wall.owner,itemData:o,itemIndex:e,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:s,wallID:i.Wall.id,onClickToCTA:d,wall:i,languageSetting:u,onClickPopUpSlider:p})},e)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,i.memo)((0,s.Ng)((t=>({})),(t=>({getDataNextSteps:(e,n,o,i,a,s,r,l)=>t((0,j.H5)(e,n,o,i,a,s,r,l))})))(S))},61038:()=>{},95098:()=>{},80045:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var o=n(98587);function i(t,e){if(null==t)return{};var n,i,a=(0,o.A)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}}}]);