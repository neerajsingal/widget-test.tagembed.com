"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[472,1528,6696],{91528:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),d=i(43635),o=(i(2406),i(97915)),s=i(98511),l=i(17739),r=(i(35179),i(46417));class n extends a.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:i,mediaSize:a}=this.props,{mediaLoaded:n,imgSize:c}=this.state,p=!!(t.hotspot&&t.ugc_products.length>0),_={opacity:i,filter:n?"blur(2px)":null};return(0,r.jsxs)("div",{className:"tb_post_modal_img_holder",children:[null!==t&&void 0!==t&&t.postBranding?(0,r.jsx)(s.Z,{size:2}):null,p?(0,r.jsx)(o.Z,{product:t.ugc_products,dataItem:t}):null,(0,r.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:c.small,srcSet:"".concat(c.large,", 991w ").concat(c.small,", 480w"),sizes:a&&a.width,alt:(0,l.P)(c.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,d.ht)(t)},loading:"lazy",draggable:"false",width:a&&a.width,height:a&&a.height,style:_},c.small)]})}}},70472:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),d=i(91528),o=i(36696),s=i(11774),l=i(35179),r=i(46417);JSON.parse(window.localStorage.getItem("mediaDimension"));class n extends a.PureComponent{constructor(t){super(t),this.handleSlideChange=()=>{const t=this.splideRef.current.splide,e=t.index,i=0===e,a=e===t.length-1;this.setState({isFirst:i,isLast:a})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.data.postFileNew,largerHeight:0,isFirst:!1,isLast:!1,currentIndex:0},this.splideRef=a.createRef()}componentWillReceiveProps(t){const{data:e}=t,{ImageUrl:i}=t;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}})}componentDidMount(){const{data:t}=this.props;this.setState({mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{imageList:t,data:e,wall:i,onUpdateProdImgIdx:a}=this.props,{mediaSize:n,isFirst:c,isLast:p,currentIndex:_}=this.state;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{ImageUrl:e.postFile,data:{...e,...t[this.state.currentIndex]},wall:i,opacity:0}),(0,r.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,r.jsxs)(s.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!1,speed:400,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,onActive:(t,e,i)=>{this.setState({currentIndex:e.index},(()=>a(this.state.currentIndex)))},children:[(0,r.jsx)(s.Gj,{children:t.map(((t,a)=>{const n=_==a,c=l.ZQ?t.file:t.postFile;return(0,r.jsx)(s.jw,{style:{margin:0},children:2!==t.type&&4!==t.type&&n?3===t.type||5===t.type?(0,r.jsx)(o.default,{data:{mediaUrl:l.ZQ?t.media:t.mediaFile,link:e.link,network:{id:l.ZQ?t.networkId:e.networkId},id:t.id,filterId:e.filterId,stories:t.stories?t.stories:0,postFileNew:c,filename:c,file:c,feedId:e.feedId},wall:i,opacity:1}):null:(0,r.jsx)(d.default,{ImageUrl:c,data:{link:e.link,network:{id:e.network.id},id:t.id,filterId:e.filterId,stories:t.stories,feedId:e.feedId,postFileNew:c,filename:c,file:c},wall:i,opacity:1},"multi-slider".concat(a))},a)}))}),(0,r.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,r.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:c,role:"button","aria-label":"Go to previous slide",children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:p,role:"button","aria-label":"Go to next slide",children:(0,r.jsx)("div",{})})]})]})})]})}}},36696:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var a=i(47313),d=i(20510),o=i.n(d),s=i(43635),l=i(35179),r=i(17739),n=i(46417);const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=t=>{try{if(l.ig){const{played:e}=this.state;this.setState({played:e+t.playedSeconds})}}catch(e){console.log(e)}},this.state={videoLoaded:!1,muted:!1,played:0},this.VideoWrap=a.createRef()}componentWillUnmount(){const{played:t}=this.state;l.ig&&(0,r.qE)(t)}render(){const{data:t,wall:e}=this.props,{videoLoaded:i,muted:a}=this.state,d=![7,3,25].includes(t.network.id);return(0,n.jsxs)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[d?(0,n.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,n.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,n.jsx)("div",{})})}):"",(0,n.jsx)(o(),{className:"tb_post_modal_video video".concat(t.id),url:c(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:a}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,s.ib)(e,t.id)},autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!d,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onProgress:this.onUpdateTime})]},t.mediaUrl)}}},97915:(t,e,i)=>{i.d(e,{Z:()=>u});var a=i(47313),d=i(43411),o=i(83773),s=i(6119),l=i(17739),r=i(43635),n=i(46417);const c=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class _ extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var a,d;const{wall:o}=e;(0,r.S5)({type:1,action:2,wall:null===o||void 0===o||null===(a=o.Wall)||void 0===a?void 0:a.id,product_id:t.id,post:i.referenceId,owner:null===o||void 0===o||null===(d=o.Wall)||void 0===d?void 0:d.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const d=(0,l.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(d),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(c,{children:(0,n.jsx)(s.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(d),clickable:!0,html:p(t.UgcProduct)})})]},e)}))}):null}}const u=(0,d.$j)((t=>({appData:t.appData})))(_)}}]);