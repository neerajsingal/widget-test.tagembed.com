"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8262],{45565:(t,e,i)=>{i.d(e,{A:()=>s});var o=i(80415),r=i(52867),a=i(44414);const s=t=>{let{size:e}=t;const i=t=>!(!(0,r.Nv)(t)||1!=e);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("top",""+(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left",""+(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image",`url(${o.th}/media/images/tagshop-light.svg)`,"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},89874:(t,e,i)=>{i.d(e,{A:()=>u});var o=i(9950),r=i(11127),a=i(73068),s=i(1823),d=i(52867),n=i(14478),l=i(44414);const p=(0,a.componentWillAppendToBody)((t=>{let{children:e,wallId:i}=t;return i?(0,l.jsx)("div",{"data-widget-id":i,children:e}):null})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",o=t.product_price>0||t.product_discount>0?`${i}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${o}\n        </a>`};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var o,r;const{wall:a}=e;(0,n.hq)({type:1,action:2,wall:null===a||void 0===a||null===(o=a.Wall)||void 0===o?void 0:o.id,product_id:t.id,post:i.referenceId,owner:null===a||void 0===a||null===(r=a.Wall)||void 0===r?void 0:r.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,r)=>{var a,n;const h=(0,d.Ul)();return(0,l.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${h}`,onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(r),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(i==r?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ "+(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:r+1}),(0,l.jsx)(p,{wallId:null===e||void 0===e||null===(a=e.wall)||void 0===a||null===(n=a.Wall)||void 0===n?void 0:n.id,children:(0,l.jsx)(s.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${h}`,clickable:!0,html:c(t.UgcProduct)})})]},r)}))}):null}}const u=(0,r.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var o=i(9950),r=i(14478),a=i(89874),s=i(98776),d=i(52867),n=i(80415),l=(i(66345),i(45565),i(44414));class p extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(`.track${this.props.data.id}`);i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,s.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:o,ownerId:s,hotspot:p}=this.props,{imgUrl:c,paddingBottom:h,size:u,fixedPaddingBottom:g}=this.state,m={paddingBottom:`${this.props.size?1==this.props.size?null:g:h}%`},_={backgroundImage:`url(${c})`};if(u.width>u.height)var y="100%",v=u.height/u.width*100+"%";else v="100%",y=u.width/u.height*100+"%";const w=!!(e.hotspot&&e.ugc_products.length>0&&p),f={width:w&&this.props.size?y:null,height:w&&this.props.size?v:null};return(0,l.jsxs)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:m,children:[w?(0,l.jsx)("div",{className:"tb_blur_bg_",style:_}):null,(0,l.jsxs)("div",{className:`${t}_wrap_in`,style:f,children:[w?(0,l.jsx)(a.A,{product:e.ugc_products,dataItem:e}):null,(0,l.jsx)("img",{className:`${t} track${e.id}`,role:"img",src:c,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src=`${n.th}/media/images/no-image.svg`,(0,r.bs)(t)},alt:(0,d.wE)(e.content)})]})]})}}},98776:(t,e,i)=>{e.pG=void 0;var o=i(61529);var r=i(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return r.getImageSize}});var a=i(49363)},61529:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=i(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,r)=>{if("undefined"===typeof window)return r(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return r(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const s=new Image;s.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(t=>{a&&window.clearTimeout(a),r(`${t.type}: ${t.message}`)})),s.src=t,e.timeout&&(a=window.setTimeout((()=>r(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,i){var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(r,a){function s(t){try{n(o.next(t))}catch(e){a(e)}}function d(t){try{n(o.throw(t))}catch(e){a(e)}}function n(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,d)}n((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const r=i(9950),a=i(95962);e.useImageSize=(t,e)=>{const[i,s]=(0,r.useState)(null),[d,n]=(0,r.useState)(!1),[l,p]=(0,r.useState)(null);return(0,r.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){n(!0),s(null),p(null);try{const{width:i,height:o}=yield(0,a.getImageSize)(t,e);s({width:i,height:o})}catch(l){p(l.toString())}finally{n(!1)}}))}),[t,e]),[i,{loading:d,error:l}]}}}]);