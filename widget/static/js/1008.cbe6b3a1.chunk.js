(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1008,7033,7234,7668,757],{97234:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i});var s=o(72791),r=o(2703),n=o(14496),a=o(80184);class i extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==o.id?"visible":""},children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,r.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(n.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color})},Math.random())}}},14496:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});o(72791);var s=o(80184);const r=t=>{let{username:e,network:o,authorClass:r}=t;return(0,s.jsx)("img",{className:"".concat(r,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":o.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var s=o(72791),r=o(80184);class n extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:s,item:n}=this.props,a=!(!o||1!==o.status),i={color:a?o.color:t.color,backgroundColor:a?o.background:t.background};return(0,r.jsxs)("div",{className:e,style:i,onClick:e=>{e.stopPropagation(),s(n),window.open("".concat(a?o.url:t.url),"_blank")},children:[" ",a?o.text:t.text]})}}const a=n},70757:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var s=o(72791),r=o(46535),n=o(2703),a=o(80184);const i=s.lazy((()=>o.e(1088).then(o.bind(o,41088))));class l extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:l}=this.props,c=!!l&&(7!==t.id&&4!==t.id),d=r.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:r.ZQ&&!(0,n.mD)(59)?o.iconColor:null},children:(0,a.jsx)("div",{})}):(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(i,{network:t,networkClass:e})]})}}},23450:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var s=o(72791),r=o(34867),n=o(2703),a=o(46535),i=o(80184);const l=s.lazy((()=>Promise.all([o.e(6332),o.e(6476)]).then(o.bind(o,46476))));class c extends s.PureComponent{constructor(t){super(t),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:t,content:e,ThemeRule:o,font:c,personalization:d,item:_,contentTitle:h,readMore:u,maxLength:m}=this.props,{expanded:p}=this.state,b={fontFamily:o.css_font,fontSize:c.fontSize,color:a.ZQ&&!(0,n.mD)(59)?c.fontColor:null,textAlign:o.textAlignment};let g=20==_.network.id?e:(0,n.Fx)(e);12==_.network.id&&(g=(0,r.ZP)(g));const w=u?p?g:g.slice(0,m):g;return(0,i.jsxs)("div",{className:"".concat(t," ").concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):"","tb-cTBfont-").concat(o.font_varient),style:b,children:[h?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,r.ZP)(h)}):null,(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(l,{data:_,content:w,Personalization:d})]}),u&&g.length>m&&(0,i.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:p?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var s=o(72791),r=o(46535),n=o(80184);const a=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:a}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:s,style:{color:a},"tb-network":e.id})},i=t=>{let{ThemeID:e}=t;const{className:o,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:o,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>o?(0,n.jsx)(i,{ThemeID:o},s):(0,n.jsx)(a,{network:e},s))):null})}}},20169:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var s=o(72791),r=o(79200),n=o(46535),a=o(80184);class i extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:s,ownerId:a}=this.props;e.stopPropagation(),n.ZQ||(0,r.S5)({type:2,action:2,wall:s,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:a}),(0,r.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,o)=>{"use strict";o.d(e,{Z:()=>d});var s=o(72791),r=o(46535),n=o(2703),a=o(80184);const i=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,n.ok)(e)):o,l=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,n.ok)(e)):o,c=t=>{let{arialbl:e,hrefClick:o,Icon:s,iconColorStyle:r,count:n}=t;return(0,a.jsx)("div",{className:"tb_social_action__list",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,a.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),style:r,children:" "}),n>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",style:r,children:n}):""]})})};class d extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:s}=this.props,d={color:3===s?1===e.iconType?e.iconColor:t.network.color:r.ZQ?e.iconColor:e.fontColor},_=t.network.id,h=3===_||10===_||7===_?"like":"heart",u=!![1,2,3,7,8,9,10,18].includes(_),m=![29,19].includes(_),p=t.network.name?t.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==_&&26!==_&&23!==_&&6!==_&&5!==_&&11!==_&&12!==_&&15!==_&&20!==_&&21!==_?(0,a.jsx)("div",{className:o,children:(0,a.jsxs)("div",{className:"tb_social_action__",children:[u?(0,a.jsx)(c,{arialbl:p,hrefClick:i(_,t.postId,t.link),Icon:h,iconColorStyle:d,count:t.like_count}):null,m?(0,a.jsx)(c,{arialbl:p,hrefClick:l(_,t.postId,t.link),Icon:"comment",iconColorStyle:d,count:t.comment_count}):null,1===_?(0,a.jsx)(c,{arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,n.ok)(t.postId)),Icon:"retweet",iconColorStyle:d,count:t.comment_count}):null,(0,a.jsx)(c,{arialbl:p,hrefClick:t.link,Icon:"eye",iconColorStyle:d,count:0})]})}):""})}}},27668:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i});var s=o(72791),r=o(2703),n=o(80184);const a=t=>{const{postTime:e,timeClass:o,authorColor:a,authorNameStyle:i}=t,l=(0,s.useMemo)((()=>(0,r.Sy)(e)),[]),c={color:a,...i};return(0,n.jsx)("div",{className:o,style:c,children:l})},i=(0,s.memo)(a)},51433:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>C});var s=o(72791),r=o(60173),n=o(77581),a=o(48282),i=o(2703),l=o(46535),c=o(97234),d=o(27668),_=o(70757),h=o(80184);const u=t=>{let{author:e,personalization:o,postTime:s,network:r,ThemeRule:n,font:a,mediaType:i,ownerId:u}=t;const m={color:n.authorColor,fontFamily:n.css_font},p=!(!o.postAuthor||e.isInstaUser),b=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[p?(0,h.jsx)(c.default,{network:r,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_authorname",style:m,children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_username",style:m,children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",b?(0,h.jsx)("div",{className:"tb_rc_seprator",style:{backgroundColor:n.authorColor},children:" "}):"",o.postTime?(0,h.jsx)(d.default,{postTime:s,timeClass:"tb_rc_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor,authorNameStyle:m}):""]})]})]}),i&&r.id||l.ZQ?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:r,isDefault:1===n.iconType,ThemeRule:n})}):null]})};var m=o(23450),p=o(20169),b=o(16243),g=o(19036),w=o(31152);const x=l.ZQ?null:200;class f extends s.PureComponent{constructor(t){super(t),this.postTrack=s.createRef()}componentDidMount(){l.nX&&(0,i.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:o,ThemeRule:s,clickToShowPopUp:r,itemIndex:n,wallID:a,ownerId:c,onClickToCTA:d,wall:f}=this.props,k=2===t.type||3===t.type||4===t.type||5===t.type,v=t.rating>0,j=t.rating>0||(0,i.mD)(54)?"tb_rc_rating_content":"tb_rc_content",C=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",N=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),y=e.trimcontent?(0,i.Sv)(t.content,x):t.content;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*o:o,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":y,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in ".concat(l.ZQ?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_rc_post_in",style:{backgroundColor:s.cardColor,borderRadius:s.radius},onClick:r(n,t),children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",children:[l.ZQ||k||!(0,i.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s})," "]}),t.share.status?(0,h.jsx)(p.Z,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:a,ownerId:c}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,i.mD)(52)?"tb_rc_content_wrap_fixed":""),children:[v?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(g.Z,{rating:t.rating,network:t.network})," "]}):null,N&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,s.hideContent&&k?null:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(j," ").concat(C),content:y,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle,readMore:!0,maxLength:100})]}),N&&l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(u,{ownerId:c,mediaType:k,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:e,ThemeRule:s})]}),s.socialAction&&!(0,i.mD)(52)?(0,h.jsx)(w.Z,{itemData:t,ThemeRule:s,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(l.ZQ?"tb_rc_social_action_bg":"")}):null]})})})}}const k=f;var v=o(79200);o(59169);class j extends s.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:o,hasMoreData:s}=this.props;s&&(0,v.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,o,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const o=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),r=Number(s)+(o-1)+o;r>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(r*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let o=document.querySelector(".tb_rc_arrow_left__"),s=document.querySelector(".tb_rc_arrow_right__");function r(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}o&&s&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){r()})),r(),window.addEventListener("resize",r)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:o,onClickPopUpSlider:s,parentID:r}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,n)=>{if(t.classList){const n=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var a=n[0];String(n[0]).includes("tb_")&&(a=String(n[0]).replace("tb_",""));const i=e.findIndex((t=>t==a));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],n=e.getAttribute("p_id");String(r)===String(n)&&e.addEventListener("click",(t=>{t.preventDefault();const e=o[a];s(i,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:o,clickToShowPopUp:s,hasMoreData:n,onClickToCTA:i,parentID:c}=this.props,d=c,{windowWidth:_}=this.state,u=o.ThemeRule.numberOfCoumn,m=o.ThemeRule.mobileColumn,p=o.ThemeRule.slidePost,b=o.ThemeRule.slideDuration,g=o.Personalization.autoScrollStatus,w=1===o.Personalization.trimcontent,x=!!(_<768||r.tq),f=t&&t.length?x?1:t.length>3?3:t.length:3,v=t&&t.length?x?1:t.length>4?4:t.length:4;x||1===g||t.length;const j=l.ZQ?3:5,C={role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===p?1e3*b:5e3,perPage:u>0?u:x?1:t.length>j?j:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:1===p,padding:"0",pagination:!1,arrows:!!x||t.length>(u>0?u:v),fixedHeight:w,breakpoints:{560:{perPage:m>0?m:1,perMove:m>0?m:1,arrows:t.length>(m>0?m:1)},767:{perPage:u>0?u-3<1?u:u-3:f,arrows:t.length>(u>0?u-3<1?u:u-3:f)},991:{perPage:u>0?u-4<1?u:u-4:f,arrows:t.length>(u>0?u-4<1?u:u-4:f)},1200:{perPage:u>0?u-1==0?u:u-1:f,arrows:t.length>(u>0?u-1==0?u:u-1:f)},1600:{perPage:u>0?u:v,arrows:t.length>(u>0?u:v)}}};return(0,h.jsx)(h.Fragment,{children:""!=c?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_rc_post_slider ".concat(w?"tb_rc_fixed_height":""),options:C,ref:t=>this.inputRefs[d]=t,children:[(0,h.jsx)(a.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,h.jsx)(a.jw,{p_id:c,className:"tb_".concat(n.id),children:(0,h.jsx)(k,{ownerId:o.Wall.owner,itemData:n,itemIndex:r,personalization:o.Personalization,ThemeRule:o.ThemeRule,clickToShowPopUp:s,wallID:o.Wall.id,onClickToCTA:i,wall:o})},r)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:void 0!=n?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,s.memo)((0,n.$j)((t=>({})),(t=>({getDataNextSteps:(e,o,s,r,n,a,i,l)=>t((0,v.Sx)(e,o,s,r,n,a,i,l))})))(j))},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=1008.cbe6b3a1.chunk.js.map