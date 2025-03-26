"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2578],{60531:(e,t,o)=>{o.d(t,{A:()=>i});var l=o(9950),a=o(44414);class s extends l.PureComponent{render(){const{cta:e,ctaClass:t,postCta:o,onClickToCTA:l,item:s}=this.props,i=!(!o||1!==o.status),r={color:i?o.color:e.color,backgroundColor:i?o.background:e.background};return(0,a.jsxs)("div",{className:t,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),l(s),window.open(`${i?o.url:e.url}`,"_blank")},children:[" ",i?o.text:e.text]})}}const i=s},28185:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var l=o(9950),a=o(66345),s=o(11127),i=o(53556),r=o(14478),n=o(61302),d=o(52867),c=o(78262),p=o(3720),u=o(15537),h=o(44414);const _=e=>{var t;let{itemData:o,wall:l,wallID:s,themeID:i,ownerId:r,ThemeRule:n}=e;const d=(a.uS||"tagembed"==(null===l||void 0===l||null===(t=l.User)||void 0===t?void 0:t.userDatabaseType))&&n.aspectImageRatio?n.aspectImageRatio:100,_=(3===o.type||5===o.type)&&1==l.ThemeRule.autoPlay;return(0,h.jsxs)("div",{className:"tb_ht_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,h.jsx)(u.A,{itemData:o,IconClass:"tb_ht_media_icon",show:a.uS,isCenter:!1}),_?(0,h.jsx)(p.A,{VideoClass:"tb_ht_video",data:o,wallID:s,themeID:l.Personalization.widgetTheme,ownerId:r,size:a.uS?d:100,isCover:!0,muted:!0,autoPlay:!0}):(0,h.jsx)(c.default,{ImageClass:"tb_ht_image",data:o,wallID:s,themeID:i,ownerId:r,size:d,hotspot:!1})]})};var b=o(44463),m=o(47713),g=o(60531);const v=e=>{let{itemData:t,personalization:o,ThemeRule:s,wallID:i,ownerId:r,onClickToCTA:n,clickToShowPopUp:c,itemIndex:p,adjustWidth:u,wall:v,onClickPopUpSlider:w}=e;const x=81!=o.widgetTheme,P=(0,l.useRef)(null),S=0==s.postHover&&a.HY?"light":"dark",f=a.MH?"tb_ht_color_overlay":"tb_ht_post_overlay-"+S,T={backgroundColor:a.MH?s.cardColor:""},k={padding:o.padding/2},C=1!==t.type,D=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&(!!a.uS||(!x||!a.MH)),j=x&&a.MH?"50%":null,I=!!(a.HY&&""!=s.shoppingText&&t.ugc_products.length>0),R=!!(a.HY&&t.ugc_products&&t.ugc_products.length>0),y=!(!a.HY||!R||0!==t.hotspot),N=!!(a.HY&&t.hotspot&&R);return(0,l.useEffect)((()=>{(0,d._7)(P)}),[]),(0,l.useEffect)((()=>{t.isPopUp&&w(p,t)}),[p,t.isPopUp,t]),(0,h.jsx)("div",{id:`tb-ht-post-${t.id}`,className:"tb_ht_post_wrapper",style:k,"tb-network":t.network.id,"tb-product":y?1:N?2:0,ref:P,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"area-label":t.content,role:"article",children:(0,h.jsx)("div",{className:"tb_ht_post_in",style:{borderRadius:j},role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,h.jsxs)("div",{className:"tb_ht_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[C?(0,h.jsx)(_,{itemData:t,wallID:i,themeID:o.widgetTheme,ownerId:r,ThemeRule:s,wall:v},`img${p}_${t.id}`):"",(0,h.jsxs)("div",{className:"tb_ht_post_details",children:[(0,h.jsx)("div",{className:"tb_ht_social_",children:(0,h.jsx)(b.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:s,isDefault:1===s.iconType,Personalization:o})}),I?(0,h.jsx)(m.A,{ThemeRule:s,btnClass:"tb_ht_btn_wrap"}):null,D?(0,h.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(g.A,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:n})," "]}):""]}),(0,h.jsx)("div",{className:`tb_ht_post_overlay ${f}`,style:T,children:(0,h.jsx)("div",{})})]})})})};o(61038);class w extends l.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:o,hasMoreData:l,getDataNextSteps:a}=this.props,s=t.Personalization.autoScrollStatus;l&&1==s&&a(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,o,e.heightEvent)},this.autoScrollSlider=(e,t,o,l)=>{const{wall:s}=this.props;if(1==s.Personalization.autoScrollStatus){var i;const t=a.uS||"tagembed"==(null===s||void 0===s||null===(i=s.User)||void 0===i?void 0:i.userDatabaseType),o=t?e._o.perPage+e.index:e.index;e.length-o===(t?1:e._o.perPage)&&this.requestData()}},this.onClickToPopUP=(e,t,o,l)=>{try{var a;const{postData:e,onClickPopUpSlider:o,completeDataObject:l}=this.props;o(e.findIndex((e=>{var o;return e==(null===t||void 0===t||null===(o=t.slide)||void 0===o?void 0:o.getAttribute("postId"))})),l[null===t||void 0===t||null===(a=t.slide)||void 0===a?void 0:a.getAttribute("postId")])}catch(s){console.warn("Error in onClickToPopUP",s)}},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:o,onClickPopUpSlider:l,wall:a,parentID:s}=this.props,i=a.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,a)=>{if(e.classList){const a=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=a[0];String(a[0]).includes("tb_")&&(i=String(a[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll(`#${e.id}`);for(let e=0;e<n.length;e++){let t=n[e],a=t.getAttribute("p_id");String(s)===String(a)&&t.addEventListener("click",(e=>{e.preventDefault();const t=o[i];l(r,t)}))}}}))}else if(2==i){Object.values(e)[5].map(((e,a)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var a=i[0];String(i[0]).includes("tb_")&&(a=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==a));let n=document.querySelectorAll(`.tb_hs_post_container #${e.id}`);for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(s)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=o[a];l(r,t)}))}}}))}))}))}}render(){var e,t;const{postData:o,completeDataObject:l,wall:s,clickToShowPopUp:r,onClickToCTA:d,parentID:c,adjustWidth:p,cardNumber:u,onClickPopUpSlider:_}=this.props,b=a.uS||"tagembed"==(null===s||void 0===s||null===(e=s.User)||void 0===e?void 0:e.userDatabaseType),m=c,g=s.ThemeRule.numberOfCoumn,w=s.ThemeRule.mobileColumn,x=s.ThemeRule.slidePost,P=s.ThemeRule.slideDuration,S=s.Personalization.autoScrollStatus,f=b?s.ThemeRule.multiRow:1,T=b&&void 0!==(null===(t=s.Personalization)||void 0===t?void 0:t.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},k=1!=S?!(Object.keys(T).length>0)&&(b?"slide":"loop"):b?"slide":"loop",C={...T,grid:{rows:f},type:1!==S&&k,rewind:!!b,rewindSpeed:1e3,interval:1===x&&parseInt(P)>0?1e3*parseInt(P):5e3,perPage:a.HY?u:g>0?g:5,perMove:1,gap:0,autoplay:1===x,padding:0,pagination:!1,arrows:(null===o||void 0===o?void 0:o.length)>1,breakpoints:{560:{perPage:a.HY?u:w>0?w:1},767:{perPage:a.HY?u:w>0?w:2},991:{perPage:a.HY?u:w>0?w:3},1200:{perPage:a.HY?u:g>0?g:4},1400:{perPage:a.HY?u:g>0?g:5},1600:{perPage:a.HY?u:g>0?g:6}}};return""!=c?(0,h.jsx)("div",{className:"tb_ht_post_container",children:(0,h.jsxs)(i.eB,{hasTrack:!1,className:"tb_ht_post_slider",options:C,extensions:{Grid:n.x},ref:e=>this.inputRefs[m]=e,onMove:this.autoScrollSlider,onClick:this.onClickToPopUP,children:[(0,h.jsx)(i.v9,{children:(s.ThemeRule.multiRow>1&&1!==o.length&&o.length%2!==0?o.pop():o)&&o&&o.length>0&&o.map(((e,t)=>{const o=l[e];return(0,h.jsx)(i.Nn,{style:{margin:0,padding:0},className:`tb_${o.id}`,p_id:c,postId:null===o||void 0===o?void 0:o.id,children:(0,h.jsx)(v,{itemData:o,itemIndex:t,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:r,wallID:s.Wall.id,onClickToCTA:d,adjustWidth:p,wall:s,onClickPopUpSlider:_})},`SplideSlide_${o.id}`)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,h.jsx)("div",{})})]})]})}):null}}const x=(0,l.memo)((0,s.Ng)((e=>({})),(e=>({getDataNextSteps:(t,o,l,a,s,i,n,d)=>e((0,r.H5)(t,o,l,a,s,i,n,d))})))(w))}}]);