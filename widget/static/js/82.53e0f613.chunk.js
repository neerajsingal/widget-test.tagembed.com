"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[82],{7138:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(47313),o=a(46417);class l extends s.PureComponent{render(){const{cta:e,ctaClass:t,postCta:a,onClickToCTA:s,item:l}=this.props,i=!(!a||1!==a.status),r={color:i?a.color:e.color,backgroundColor:i?a.background:e.background};return(0,o.jsxs)("div",{className:t,style:r,onClick:t=>{t.stopPropagation(),s(l),window.open("".concat(i?a.url:e.url),"_blank")},children:[" ",i?a.text:e.text]})}}const i=l},76254:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(47313),o=a(35179),l=a(43411),i=a(11774),r=a(43635),n=a(44084),c=a(17739),d=a(84261),p=a(64442),h=a(81349),_=a(46417);const u=e=>{let{itemData:t,wall:a,wallID:s,themeID:l,ownerId:i,ThemeRule:r}=e;const n=o.ZQ&&r.aspectImageRatio?r.aspectImageRatio:100,c=!(3!==t.type&&5!==t.type||1!=a.ThemeRule.autoPlay&&o.ig);return console.log("isVideo",c),(0,_.jsxs)("div",{className:"tb_ht_media_wrap",children:[(0,_.jsx)(h.Z,{itemData:t,IconClass:"tb_ht_media_icon",show:o.ZQ,isCenter:!1}),c?(0,_.jsx)(p.Z,{VideoClass:"tb_ht_video",data:t,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:o.ZQ?n:100,isCover:!0,muted:!0,autoPlay:!0}):(0,_.jsx)(d.default,{ImageClass:"tb_ht_image",data:t,wallID:s,themeID:l,ownerId:i,size:n,hotspot:!1})]})};var g=a(25810),m=a(11502),b=a(7138);const w=e=>{let{itemData:t,personalization:a,ThemeRule:l,wallID:i,ownerId:r,onClickToCTA:n,clickToShowPopUp:d,itemIndex:p,adjustWidth:h,wall:w}=e;const v=81!=a.widgetTheme,x=(0,s.useRef)(null),j=0==l.postHover&&o.ig?"light":"dark",f=o.Jx?"tb_ht_color_overlay":"tb_ht_post_overlay-"+j,D={backgroundColor:o.Jx?l.cardColor:""},T={padding:a.padding/2},k=1!==t.type,C=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&(!!o.ZQ||(!v||!o.Jx)),I=v&&o.Jx?"50%":null,S=!!(o.ig&&t.ugc_products.length>0),P=!!(o.ig&&t.ugc_products&&t.ugc_products.length>0),R=!(!o.ig||!P||0!==t.hotspot),N=!!(o.ig&&t.hotspot&&P);return(0,s.useEffect)((()=>{o.ig&&(0,c.YN)(x)}),[]),(0,_.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:T,"tb-network":t.network.id,"tb-product":R?1:N?2:0,ref:x,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,_.jsx)("div",{className:"tb_ht_post_in",onClick:d(p,t),style:{borderRadius:I},children:(0,_.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[k?(0,_.jsx)(u,{itemData:t,wallID:i,themeID:a.widgetTheme,ownerId:r,ThemeRule:l,wall:w}):"",(0,_.jsxs)("div",{className:"tb_ht_post_details",children:[(0,_.jsx)("div",{className:"tb_ht_social_",children:(0,_.jsx)(g.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:l,isDefault:1===l.iconType,Personalization:a})}),S?(0,_.jsx)(m.Z,{ThemeRule:l,btnClass:"tb_ht_btn_wrap"}):null,C?(0,_.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,_.jsx)(b.Z,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:n})," "]}):""]}),(0,_.jsx)("div",{className:"tb_ht_post_overlay ".concat(f),style:D,children:(0,_.jsx)("div",{})})]})})})};a(37210);class v extends s.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:a,hasMoreData:s,getDataNextSteps:o}=this.props;s&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,a,e.heightEvent)},this.onUpdateData=e=>{},this.autoScrollSlider=(e,t,a,s)=>{const l=o.ZQ?e._o.perPage+e.index:e.index;e.length-l===(o.ZQ?1:e._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:a,onClickPopUpSlider:s,wall:o,parentID:l}=this.props,i=o.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,o)=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=o[0];String(o[0]).includes("tb_")&&(i=String(o[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],o=t.getAttribute("p_id");String(l)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[i];s(r,t)}))}}}))}else if(2==i){Object.values(e)[5].map(((e,o)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var o=i[0];String(i[0]).includes("tb_")&&(o=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==o));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(l)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[o];s(r,t)}))}}}))}))}))}}render(){var e;const{postData:t,completeDataObject:a,wall:s,clickToShowPopUp:l,onClickToCTA:r,parentID:c,adjustWidth:d,cardNumber:p}=this.props,h=c,u=s.ThemeRule.numberOfCoumn,g=s.ThemeRule.mobileColumn,m=s.ThemeRule.slidePost,b=s.ThemeRule.slideDuration,v=s.Personalization.autoScrollStatus,x=o.ZQ?s.ThemeRule.multiRow:1,j=o.ZQ&&void 0!==(null===(e=s.Personalization)||void 0===e?void 0:e.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},f=1!=v?!(Object.keys(j).length>0)&&(o.ZQ?"slide":"loop"):o.ZQ?"slide":"loop",D={...j,grid:{rows:x},type:1!==v&&f,rewind:!!o.ZQ,rewindSpeed:1e3,interval:1===m&&parseInt(b)>0?1e3*parseInt(b):5e3,perPage:o.ig?p:u>0?u:5,perMove:1,gap:0,autoplay:1===m,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:o.ig?p:g>0?g:1},767:{perPage:o.ig?p:g>0?g:2},991:{perPage:o.ig?p:g>0?g:3},1200:{perPage:o.ig?p:u>0?u:4},1400:{perPage:o.ig?p:u>0?u:5},1600:{perPage:o.ig?p:u>0?u:6}}};return""!=c?(0,_.jsx)("div",{className:"tb_ht_post_container",children:(0,_.jsxs)(i.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:D,extensions:{Grid:n.r},ref:e=>this.inputRefs[h]=e,onMove:this.autoScrollSlider,children:[(0,_.jsx)(i.Gj,{children:(s.ThemeRule.multiRow>1&&1!==t.length&&t.length%2!==0?t.pop():t)&&t&&t.length>0&&t.map(((e,t)=>{const o=a[e];return(0,_.jsx)(i.jw,{style:{margin:0,padding:0},className:"tb_".concat(o.id),p_id:c,children:(0,_.jsx)(w,{itemData:o,itemIndex:t,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:l,wallID:s.Wall.id,onClickToCTA:r,adjustWidth:d,wall:s})},t)}))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,_.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,_.jsx)("div",{})})]})]})}):null}}const x=(0,s.memo)((0,l.$j)((e=>({})),(e=>({getDataNextSteps:(t,a,s,o,l,i,n,c)=>e((0,r.Sx)(t,a,s,o,l,i,n,c))})))(v))}}]);