(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1008,7033,7234,7668],{97234:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var s=n(72791),o=n(2703),i=n(14496),a=n(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:n}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==n.id?"visible":""},children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(i.Z,{authorClass:e,username:t.name,network:n,color:null===n.id?"#000":n.color,errorPic:t.errorPic})},Math.random())}}},14496:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});n(72791);var s=n(80184);const o=t=>{let{username:e,network:n,authorClass:o,errorPic:i}=t;return(0,s.jsx)("img",{className:"".concat(o,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===n.id?"#000":n.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},16243:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(72791),o=n(80184);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:n,onClickToCTA:s,item:i}=this.props,a=!(!n||1!==n.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(a?n.url:t.url),"_blank")},children:[" ",a?n.text:t.text]})}}const a=i},70757:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var s=n(72791),o=n(46535),i=n(2703),a=n(80184);const r=s.lazy((()=>n.e(1088).then(n.bind(n,41088))));class l extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:n,isDefault:l,Personalization:c}=this.props,d=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),_=o.ZQ&&36==t.id?"tagembed":t.icon;var h=[61,16,53,4,50,55].includes(parseInt(null===c||void 0===c?void 0:c.widgetTheme))?1==n.postHover?(0,i.uu)(n.iconColor,"#000000"):(0,i.uu)(n.iconColor,"#ffffff"):n.iconColor;const u=(0,i.mD)(59)?null:o.ig?o.Jc?(0,i.uu)(n.iconColor,n.cardColor):h:n.iconColor;return d?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:u},children:(0,a.jsx)("div",{})}):(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var s=n(72791),o=n(34867),i=n(2703),a=(n(46535),n(70757),n(80184));const r=s.lazy((()=>Promise.all([n.e(6332),n.e(6476)]).then(n.bind(n,46476))));class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:n,font:l,personalization:c,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m,maxLines:p,isReadMore:b}=this.props,g={WebkitLineClamp:p,textAlign:n.textAlignment};m||n.textAlignment;let x=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(x=(0,o.ZP)(x));const w="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),f="".concat(t," ").concat(b?"":w," ").concat(n.font_varient?"tb-cTBfont-".concat(n.font_varient):"");return(0,a.jsxs)("div",{className:f,ref:this.contentRef,style:g,children:[_?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(_)}):null,(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{data:d,content:x,Personalization:c})]})]})}}},19036:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var s=n(72791),o=n(46535),i=n(80184);const a=t=>{let{network:e}=t;const n={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:a}=n[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:a},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:n,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:n,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:n}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>n?(0,i.jsx)(r,{ThemeID:n},s):(0,i.jsx)(a,{network:e},s))):null})}}},20169:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var s=n(72791),o=n(11225),i=n(46535),a=n(80184);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:n,wallID:s,ownerId:a}=this.props;e.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:s,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:a}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",t.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",t.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},31152:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var s=n(72791),o=(n(46535),n(2703)),i=n(80184);const a=(t,e,n)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,o.ok)(e)):n,r=(t,e,n)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,o.ok)(e)):n,l=t=>{let{arialbl:e,hrefClick:n,Icon:s,count:a}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(n,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),a>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sy)(a)}):""]})})};class c extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:n,ThemeID:s}=this.props,c={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(l,{arialbl:m,hrefClick:a(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,i.jsx)(l,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,i.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,o.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,i.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},27668:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var s=n(72791),o=n(2703),i=n(80184);const a=t=>{const{postTime:e,timeClass:n}=t;return(0,i.jsx)("div",{className:n,children:(0,o.Sy)(e)})},r=(0,s.memo)(a)},51433:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>C});var s=n(72791),o=n(60173),i=n(77581),a=n(48282),r=n(2703),l=n(46535),c=n(97234),d=n(27668),_=n(70757),h=n(80184);const u=t=>{let{author:e,personalization:n,postTime:s,network:o,ThemeRule:i,font:a,mediaType:r,ownerId:u}=t;const m=!(!n.postAuthor||e.isInstaUser),p=!(!n.postAuthor||!n.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[m?(0,h.jsx)(c.default,{network:o,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",p?(0,h.jsx)("div",{className:"tb_rc_seprator",children:" "}):"",n.postTime?(0,h.jsx)(d.default,{postTime:s,timeClass:"tb_rc_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),r&&o.id||l.ZQ?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var m=n(23450),p=n(20169),b=n(16243),g=n(19036),x=n(31152);const w=l.ZQ?null:200;class f extends s.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this)}render(){const{itemData:t,personalization:e,adjustWidth:n,ThemeRule:s,clickToShowPopUp:o,itemIndex:i,wallID:a,ownerId:c,onClickToCTA:d,wall:f}=this.props,{isExpanded:v,hiddenHeight:j,height:k}=this.state,C=2===t.type||3===t.type||4===t.type||5===t.type,N=t.rating>0,T=t.rating>0||(0,r.mD)(54)?"tb_rc_rating_content":"tb_rc_content",y=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",S=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),I=e.trimcontent?(0,r.Sv)(t.content,w):t.content,D=j>k;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper","data-id":t.id,style:{width:"".concat(1==t.highlight?2*n:n,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":I,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in ".concat(l.ZQ?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_rc_post_in",onClick:o(i,t),children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",children:[l.ZQ||C||!(0,r.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s})," "]}),t.share.status?(0,h.jsx)(p.Z,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:a,ownerId:c}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,r.mD)(52)?"tb_rc_content_wrap_fixed":""),style:{textAlign:s.textAlignment},children:[N?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(g.Z,{rating:t.rating,network:t.network})," "]}):null,S&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,s.hideContent&&C?null:(0,h.jsxs)("div",{className:"tb_rc_content_in",children:[(0,h.jsx)("div",{className:"tb_rc_rating_content_hidden",children:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(T," ").concat(y),content:I,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0})}),(0,h.jsx)(m.default,{item:t,contentClass:"".concat(T," ").concat(y),content:I,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:v?"":s.lineTrim,isReadMore:!0}),s.lineTrim>0&&D?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:v?"Read less":"Read more"}):null]})]}),S&&l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(u,{ownerId:c,mediaType:C,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:e,ThemeRule:s})]}),s.socialAction&&!(0,r.mD)(52)?(0,h.jsx)(x.Z,{itemData:t,ThemeRule:s,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(l.ZQ?"tb_rc_social_action_bg":"")}):null]})})})}}const v=f;var j=n(11225);n(59169);class k extends s.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(r.u$)&&document.getElementById(r.u$).clientWidth?document.getElementById(r.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(r.u$)&&document.getElementById(r.u$).clientWidth?document.getElementById(r.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:n,hasMoreData:s,getDataNextSteps:o}=this.props;s&&o(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,n,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const n=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(s)+(n-1)+n;o>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(o*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(t,e,n,s)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus){const e=l.ZQ?t._o.perPage+t.index:t.index;t.length-e===(l.ZQ?1:t._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let n=document.querySelector(".tb_rc_arrow_left__"),s=document.querySelector(".tb_rc_arrow_right__");function o(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}n&&s&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){o()})),o(),window.addEventListener("resize",o)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:n,onClickPopUpSlider:s,parentID:o}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,i)=>{if(t.classList){const i=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var a=i[0];String(i[0]).includes("tb_")&&(a=String(i[0]).replace("tb_",""));const r=e.findIndex((t=>t==a));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],i=e.getAttribute("p_id");String(o)===String(i)&&e.addEventListener("click",(t=>{t.preventDefault();const e=n[a];s(r,e)}))}}}))}}render(){var t;const{postData:e,completeDataObject:n,wall:s,clickToShowPopUp:i,hasMoreData:r,onClickToCTA:c,parentID:d}=this.props,_=d,{windowWidth:u}=this.state,m=s.ThemeRule.numberOfCoumn,p=s.ThemeRule.mobileColumn,b=s.ThemeRule.slidePost,g=s.ThemeRule.slideDuration,x=s.Personalization.autoScrollStatus,w=1===s.Personalization.trimcontent,f=!!(u<768||o.tq),j=e&&e.length?f?1:e.length>3?3:e.length:3,k=e&&e.length?f?1:e.length>3?3:e.length:3;f||1===x||e.length;const C=l.ZQ?3:5,N=l.ZQ&&void 0!==(null===(t=s.Personalization)||void 0===t?void 0:t.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},T=1!=x?!(Object.keys(N).length>0)&&"slide":"slide",y={...N,type:1!==x&&T,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===b?1e3*g:5e3,perPage:m>0?m:f?1:e.length>C?C:e.length,gap:0,perMove:!!l.ZQ&&1,autoplay:1===b,padding:"0",pagination:!1,arrows:!!f||e.length>(m>0?m:k),fixedHeight:w,breakpoints:{560:{perPage:p>0?p:1,perMove:p>0?p:1,arrows:e.length>(p>0?p:1)},767:{perPage:m>0?m-3<1?m:m-3:j,arrows:e.length>(m>0?m-3<1?m:m-3:j)},991:{perPage:m>0?m-4<1?m:m-4:j,arrows:e.length>(m>0?m-4<1?m:m-4:j)},1200:{perPage:m>0?m-1==0?m:m-1:j,arrows:e.length>(m>0?m-1==0?m:m-1:j)},1600:{perPage:m>0?m:k,arrows:e.length>(m>0?m:k)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_rc_post_slider ".concat(w?"tb_rc_fixed_height":""," ").concat(l.ZQ?"tb_rc_fixed_height_te":""),options:y,ref:t=>this.inputRefs[_]=t,onMove:this.autoScrollSlider,children:[(0,h.jsx)(a.Gj,{children:e&&e.length>0&&e.map(((t,e)=>{const o=n[t];return(0,h.jsx)(a.jw,{p_id:d,className:"tb_".concat(o.id),children:(0,h.jsx)(v,{ownerId:s.Wall.owner,itemData:o,itemIndex:e,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:i,wallID:s.Wall.id,onClickToCTA:c,wall:s})},e)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,s.memo)((0,i.$j)((t=>({})),(t=>({getDataNextSteps:(e,n,s,o,i,a,r,l)=>t((0,j.Sx)(e,n,s,o,i,a,r,l))})))(k))},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=1008.b51f264c.chunk.js.map