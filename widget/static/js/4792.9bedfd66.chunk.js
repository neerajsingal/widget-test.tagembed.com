"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4792,5867,7732,4576],{81291:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(47313),a=i(46417);const l=s.lazy((()=>i.e(5867).then(i.bind(i,95867)))),n=t=>{let{filterIconClass:e,network:i,isDefault:n}=t;return!!n||(7===i.id||4===i.id||36===i.id)?(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(l,{network:i,networkClass:e})]}):(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(i.icon),children:(0,a.jsx)("div",{children:" "})})}},17732:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(47313),a=i(98501),l=i(43411),n=i(43635),o=i(81291),c=i(46417);const r=(0,s.memo)((t=>{let{LogoImage:e,title:i,networkID:s}=t;return(0,c.jsx)("div",{className:"tb_sb__brand",children:(0,c.jsx)("div",{className:"tb_sb__brand_icon",children:(0,c.jsx)("img",{loading:"lazy",className:"tb_brand_img",height:64,width:64,src:e,alt:"",onError:t=>{return t.target.src=(e="fff",s="000","https://ui-avatars.com/api/?name=".concat(i,"&background=").concat(s,"&color=").concat(e,"&length=1"));var e,s}})})},"network_image_".concat(s))}));class d extends s.Component{constructor(){super(...arguments),this.state={networkID:0,data:null},this.onUpdate=t=>{const{Banner:e}=this.props,i=e.find((e=>e.networkId===t));i&&(((t,e)=>{const i=document.createElement("link");i.id="link_".concat(t),i.rel="stylesheet",i.type="text/css",i.href="".concat(a.$p,"/web-fonts/").concat(e,".css"),document.head.appendChild(i)})(t,null===i||void 0===i?void 0:i.title_link_font),this.setState({data:i,networkID:t}))},this.onClickWebFilters=t=>e=>{const{appData:i}=this.props;if(i){const{wall:e,postData:s}=i,a=null===s||void 0===s?void 0:s.appendData,l=Math.floor(Date.now()/1e3);let n=e.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(e.Wall.id,l,n,t,null===a||void 0===a?void 0:a.after,null===a||void 0===a?void 0:a.heightEvent,null),this.onUpdate(t)}}}componentDidMount(){var t;const{Banner:e}=this.props;this.onUpdate((null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.networkId)||this.state.networkID)}render(){const{Banner:t}=this.props,{data:e,networkID:i}=this.state;return console.log("\ud83d\ude80 ~ SocialBanner ~ render ~ data:",e),e&&Object.keys(e).length>0?(0,c.jsxs)("div",{className:"tb_sb__b_cont",style:{backgroundColor:null===e||void 0===e?void 0:e.background_color},children:[(0,c.jsxs)("div",{className:"tb_sb__b_wrapper",children:[(0,c.jsxs)("div",{className:"tb_sb__profile",children:[(0,c.jsx)(r,{LogoImage:null===e||void 0===e?void 0:e.LogoImage,title:null===e||void 0===e?void 0:e.title,networkID:i}),(0,c.jsxs)("div",{className:"tb_sb___info tb-cTBfont-regular",style:{fontFamily:null===e||void 0===e?void 0:e.title_css_font},children:[(0,c.jsx)("div",{className:"tb_sb__name","aria-label":null===e||void 0===e?void 0:e.title,style:{color:null===e||void 0===e?void 0:e.title_font_color,fontSize:parseInt(null===e||void 0===e?void 0:e.title_font_size)},children:null===e||void 0===e?void 0:e.title}),(0,c.jsx)("div",{className:"tb_sb__posts","aria-label":null===e||void 0===e?void 0:e.subTitle,style:{color:null===e||void 0===e?void 0:e.title_font_color,fontSize:parseInt(null===e||void 0===e?void 0:e.subTitle_font_size)},children:null===e||void 0===e?void 0:e.subTitle})]})]}),(0,c.jsx)("div",{className:"tb_sb_btn_wrap_",onClick:0!=(null===e||void 0===e?void 0:e.networkId)?t=>window.open(null===e||void 0===e?void 0:e.followLink,"_blank"):null,title:0==(null===e||void 0===e?void 0:e.networkId)?"All":null===e||void 0===e?void 0:e.networkName,children:(0,c.jsxs)("div",{className:"tb_sb_f_btn",style:{backgroundColor:null===e||void 0===e?void 0:e.background_color_two,color:null===e||void 0===e?void 0:e.social_icon_color,borderColor:null===e||void 0===e?void 0:e.background_color_two},children:[0!=(null===e||void 0===e?void 0:e.networkId)?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(o.Z,{filterIconClass:"tb_sb_f_ico",network:null===e||void 0===e?void 0:e.network,isDefault:!1})}):null,(0,c.jsx)("div",{className:"tb_sb_f_button_text",children:null===e||void 0===e?void 0:e.subtitle_font_varient})]})})]}),(null===t||void 0===t?void 0:t.length)>1?(0,c.jsx)("div",{className:"tb_sb_f_wrapper",children:t.map(((t,e)=>(0,c.jsx)("div",{className:"tb_sb_f_list ".concat((null===t||void 0===t?void 0:t.networkId)==i?"tb_active":""),"tb-data-network":null===t||void 0===t?void 0:t.networkId,onClick:this.onClickWebFilters(null===t||void 0===t?void 0:t.networkId),children:(0,c.jsxs)("div",{className:"tb_sb_f_button tb-network-rectangular-ico-users",children:[0==(null===t||void 0===t?void 0:t.networkId)?(0,c.jsx)("div",{className:"tb_sb_f_ico tb__icon tb-users",children:(0,c.jsx)("div",{})}):(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(o.Z,{filterIconClass:"tb_sb_f_ico",network:null===t||void 0===t?void 0:t.network,isDefault:!0})}),(0,c.jsx)("div",{className:"tb_sb_f_button_text",children:0==(null===t||void 0===t?void 0:t.networkId)?"All":null===t||void 0===t?void 0:t.networkName})]})},e)))}):null]},"network_".concat(i)):null}}const _=(0,l.$j)((t=>({appData:t.appData})),(t=>({filterPostDataAppendWebFilter:(e,i,s,a,l,o,c)=>t((0,n.GG)(e,i,s,a,l,o,c))})))(d)},84792:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var s=i(47313),a=i(35179),l=(i(17732),i(98501)),n=i(43411),o=i(43635),c=i(24576),r=i(95867),d=i(46417);class _ extends s.PureComponent{constructor(t){super(t),this.toggleDropdown=()=>{const{activeId:t}=this.state,{reviewFilters:e}=this.props;if(0!=t&&e.length>0){const i=e.filter((e=>e.Network.id==t));i&&i.length>0&&window.open(i[0].Network.link,"_blank")}else this.setState((t=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=t=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(t.target)&&this.setState((t=>({isOpen:!1})))},this.onLoadTotalRating=t=>{let e=0,i=0,s="",a=0,l=this.props.wall.Banner.title_font_color;return t.map((n=>{const o=n.Network;e+=o.averageReviews*o.totalReviews,i+=o.totalReviews,s=t.length>1?"Overall":o.name,a=t.length>1?0:o.id,l=t.length>1?this.props.wall.Banner.title_font_color:o.color})),{network:{name:s,avgRate:isNaN(e/i)?0:(e/i).toFixed(1),totalReviews:i,color:l},activeId:a}},this.totalReviewNetworks=t=>e=>{const{network:i,activeId:s}=this.onLoadTotalRating(t);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const a=Math.floor(Date.now()/1e3),{appendData:l,wall:n}=this.props;let o=n.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(n.Wall.id,a,o,s,l.after,l.heightEvent,null),this.setState({network:i,activeId:s,networkID:s})},this.getReviewLogo=t=>{switch(t){case"Overall":return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return a.Jx?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0,network:{name:"",avgRate:0,totalReviews:0,color:this.props.wall.Banner.title_font_color}},this.dropdownRef=s.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:t,activeId:e}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:t,activeId:e,networkID:e})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{reviewFilters:t,wall:e,languageSetting:i}=this.props,{isOpen:s,network:n,activeId:o}=this.state,_={color:e.Banner.subTitle_font_color,fontFamily:e.Banner.subtitle_css_font,fontSize:e.Banner.subTitle_font_size},v={color:e.Banner.title_font_color,fontFamily:e.Banner.title_css_font,fontSize:e.Banner.title_font_size},b=a.Jx?{backgroundColor:e.Banner.background_color_two,..._}:{backgroundColor:e.Banner.background_color_two,color:"#fff"};return(0,d.jsx)("div",{className:"tb_rv_container",style:{padding:e.Personalization.padding/2},children:(0,d.jsxs)("div",{className:"tb_rv_wrapper",style:{borderRadius:e.ThemeRule.radius,backgroundColor:e.Banner.background_color},children:[t&&t.length>1?(0,d.jsx)("div",{className:"tb_rv_scrollable",children:(0,d.jsx)("div",{className:"tb_rv_filter_wrap",children:(0,d.jsxs)("div",{className:"tb_rv_filter_wrap_in",children:[Object.keys(t).length>0?(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(0==o?" tb_fil_active":""),onClick:this.totalReviewNetworks(t),children:(0,d.jsx)("div",{className:"tb_fil_btn_txt",children:i.filterButton})}):null,Object.keys(t).length>0&&t.map(((t,e)=>{const i=t.Network;return(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(o==i.id?" tb_fil_active":""),onClick:this.totalReviewNetworks([t]),children:(0,d.jsx)(r.default,{network:i,networkClass:"tb_review_filter_ico"})},e)}))]})})}):null,(0,d.jsxs)("div",{className:"tb_rv_banner_wrap",style:{minHeight:e.Banner.banner_height},children:[(0,d.jsxs)("div",{className:"tb_rv_rating",children:[(0,d.jsxs)("div",{className:"tb_rv_head_text",children:["Overall"!=n.name?(0,d.jsx)("div",{className:"tb_rv_head_logo",children:(0,d.jsx)("img",{className:"tb_rv_head_log_img","data-name":this.getReviewLogo(n.name),src:"".concat(l.do,"/media/review-logo/").concat(this.getReviewLogo(n.name),".svg"),height:40,width:50,style:{marginTop:"Trustpilot Reviews"==n.name?-6:""}})}):null,(0,d.jsx)("div",{className:"tb_rv_head_r_text ".concat(a.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:a.Jx?v:{},children:"Overall"==n.name?"Overall Rating":"Rating"})]}),(0,d.jsxs)("div",{className:"tb_rv_rating_wrap",children:[(0,d.jsx)("div",{className:"tb_rv_review_count ".concat(a.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:a.Jx?v:{color:e.Banner.subTitle_font_color},children:n.avgRate}),(0,d.jsx)("div",{className:"tb_rv_rview_star",children:(0,d.jsx)(c.default,{size:!1,rating:n.avgRate})}),(0,d.jsxs)("div",{className:"tb_rv_review_total_post tb-cTBfont-".concat(a.Jx?e.Banner.title_font_varient:e.Banner.subtitle_font_varient),style:a.Jx?v:_,children:[n.totalReviews," reviews"]})]})]}),(0,d.jsxs)("div",{className:"tb_rv_banner_btn_wrap",ref:this.dropdownRef,children:[(0,d.jsx)("div",{className:"tb_rv_banner_btn tb-cTBfont-".concat(a.Jx?e.Banner.subtitle_font_varient:""),onClick:this.toggleDropdown,style:b,children:"Write a Review"}),s&&(0,d.jsxs)("div",{className:"tb_rv_dropdown_ ".concat(s?"tb_rv_dd_show":""),children:[(0,d.jsx)("div",{className:"tb_rv_dropdown_title",children:"Where do you want to leave a review?"}),Object.keys(t).length>0&&t.map(((t,e)=>{const i=t.Network;return(0,d.jsxs)("div",{className:"tb_rv_dropdown_list",onClick:t=>i.link?window.open(i.link,"_blank"):null,children:[(0,d.jsx)(r.default,{network:i,networkClass:"tb_rv_dd_ico"}),i.name&&String(i.name).includes("Google")?"Google":String(i.name).includes("UGC Upload")?"SnapUp":i.name]},e)}))]})]})]})]})})}}const v=(0,n.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,i,s,a,l,n,c)=>t((0,o.GG)(e,i,s,a,l,n,c))})))(_);class b extends s.PureComponent{constructor(t){var e,i,s;super(t),this.state={network:{name:"",avgRate:0,totalReviews:0,color:null===(e=this.props)||void 0===e||null===(i=e.wall)||void 0===i||null===(s=i.Banner)||void 0===s?void 0:s.title_font_color}}}render(){var t,e,i,s,l,n,o,r,_,v;const{reviewFilters:b,wall:h}=this.props,u=(null===h||void 0===h||null===(t=h.Banner)||void 0===t||t.title_font_color,null===h||void 0===h||null===(e=h.Banner)||void 0===e||e.title_css_font,null===h||void 0===h||null===(i=h.Banner)||void 0===i||i.title_font_size,null===h||void 0===h||null===(s=h.Banner)||void 0===s||s.background_color_two,(null===h||void 0===h||null===(l=h.UserRule)||void 0===l?void 0:l.on_site_upload)&&h.UgcSettings.onsite_status&&(a.ig||h.UgcSettings.onsite_button_status));return(0,d.jsxs)("div",{className:"tb_m_container",children:[(0,d.jsx)("div",{className:"tb_m_title tb-cTBfont-".concat(null===h||void 0===h||null===(n=h.UgcSettings)||void 0===n?void 0:n.headerFontVariant),children:h.UgcSettings.headingText}),(0,d.jsxs)("div",{className:"tb_m_wrapper",children:[(0,d.jsx)("div",{className:"tb_m_rating",children:(0,d.jsxs)("div",{className:"tb_m_rating_wrap",children:[(0,d.jsxs)("div",{className:"tb_m_avg",children:[(0,d.jsx)("div",{className:"tb_m_rview_star",children:(0,d.jsx)(c.default,{size:20,rating:parseFloat(null===b||void 0===b||null===(o=b.reviewDetails)||void 0===o?void 0:o.avgRating)})}),(0,d.jsxs)("div",{className:"tb_m_review_total_post",children:[null===b||void 0===b||null===(r=b.reviewDetails)||void 0===r?void 0:r.avgRating," out of 5"]})]}),(0,d.jsxs)("div",{className:"tb_m_total",children:["Based on ",null===b||void 0===b||null===(_=b.reviewDetails)||void 0===_?void 0:_.totalReviewGiven," reviews"]})]})}),u?(0,d.jsx)("div",{className:"tb_m_banner_btn_wrap",ref:this.dropdownRef,children:(0,d.jsx)("div",{className:"tb_m_banner_btn tb-cTBfont-".concat(null===h||void 0===h||null===(v=h.UgcSettings)||void 0===v?void 0:v.buttonFontWeight),onClick:()=>this.props.onSitePopup(!0),children:h.UgcSettings.buttonText})}):null]})]})}}const h=(0,n.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,i,s,a,l,n,c)=>t((0,o.GG)(e,i,s,a,l,n,c)),onSitePopup:e=>t((0,o.wg)(e))})))(b),u=(t,e)=>{try{return(t/e*100).toFixed(2)}catch(i){return 0}};class x extends s.PureComponent{constructor(t){var e,i,s;super(t),this.state={network:{name:"",avgRate:0,totalReviews:0,color:null===(e=this.props)||void 0===e||null===(i=e.wall)||void 0===i||null===(s=i.Banner)||void 0===s?void 0:s.title_font_color}}}render(){var t,e,i,s,l,n;const{reviewFilters:o,wall:r}=this.props,_=(null===r||void 0===r||null===(t=r.UserRule)||void 0===t?void 0:t.on_site_upload)&&r.UgcSettings.onsite_status&&(a.ig||r.UgcSettings.onsite_button_status);return(0,d.jsxs)("div",{className:"tb_c_container",children:[(0,d.jsx)("div",{className:"tb_c_title tb-cTBfont-".concat(null===r||void 0===r||null===(e=r.UgcSettings)||void 0===e?void 0:e.headerFontVariant),children:r.UgcSettings.headingText}),(0,d.jsxs)("div",{className:"tb_c_wrapper",children:[(0,d.jsx)("div",{className:"tb_c_rating",children:(0,d.jsxs)("div",{className:"tb_c_rating_wrap",children:[(0,d.jsxs)("div",{className:"tb_c_avg",children:[(0,d.jsx)("div",{className:"tb_c_rview_star",children:(0,d.jsx)(c.default,{size:20,rating:parseFloat(null===o||void 0===o||null===(i=o.reviewDetails)||void 0===i?void 0:i.avgRating)})}),(0,d.jsxs)("div",{className:"tb_c_review_total_post",children:[null===o||void 0===o||null===(s=o.reviewDetails)||void 0===s?void 0:s.avgRating," out of 5"]})]}),(0,d.jsxs)("div",{className:"tb_c_total",children:["Based on ",null===o||void 0===o||null===(l=o.reviewDetails)||void 0===l?void 0:l.totalReviewGiven," reviews"]})]})}),(0,d.jsx)("div",{className:"tb_c_avg_st",children:null===o||void 0===o?void 0:o.reviewList.map(((t,e)=>{var i;return(0,d.jsxs)("div",{className:"tb_c_avg_list",children:[(0,d.jsx)(c.default,{size:16,rating:t.rating}),(0,d.jsx)("div",{className:"tb_c_bar",children:(0,d.jsx)("div",{className:"tb_c_bar_active",style:{width:"".concat(u(t.count,null===o||void 0===o||null===(i=o.reviewDetails)||void 0===i?void 0:i.totalReviewGiven),"%")},children:(0,d.jsx)("div",{})})}),(0,d.jsx)("div",{className:"tb_c_rate_count",children:t.count})]},"rating_".concat(e))}))}),_?(0,d.jsx)("div",{className:"tb_c_banner_btn_wrap",ref:this.dropdownRef,children:(0,d.jsx)("div",{className:"tb_c_banner_btn tb-cTBfont-".concat(null===r||void 0===r||null===(n=r.UgcSettings)||void 0===n?void 0:n.buttonFontWeight),onClick:()=>this.props.onSitePopup(!0),children:r.UgcSettings.buttonText})}):null]})]})}}const j=(0,n.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,i,s,a,l,n,c)=>t((0,o.GG)(e,i,s,a,l,n,c)),onSitePopup:e=>t((0,o.wg)(e))})))(x);class m extends s.PureComponent{constructor(t){super(t),this.state={networkID:null,isOpen:!1,activeId:0},this.dropdownRef=s.createRef()}render(){const{reviewFilters:t,wall:e,languageSetting:i,isHeader:s}=this.props,{isOpen:a,network:l,activeId:n}=this.state;return s?(0,d.jsx)(d.Fragment,{children:1==e.ThemeRule.themeHeader?(0,d.jsx)(h,{...this.props}):2==e.ThemeRule.themeHeader?(0,d.jsx)(j,{...this.props}):null}):(0,d.jsx)(v,{...this.props})}}const p=m},24576:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(46417);const a=(t,e,i)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:"#F8B90C",fontSize:i},children:(0,s.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i},children:[(0,s.jsx)("div",{})," "]})}),l=t=>{let{rating:e,size:i}=t;const l=e>5?5:e,n=Math.trunc(5-l),o=Math.trunc(l),c=String(l).split(".")[1];return(0,s.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[o?[...Array(o)].map(((t,e)=>(0,s.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:"#F8B90C",fontSize:i},children:(0,s.jsx)("div",{})},e))):null,c>0?a("#F8B90C",c,i):null,n?[...Array(n)].map(((t,e)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i},children:(0,s.jsx)("div",{})},e))):null]})}},95867:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i(47313),a=i(35179),l=i(46417);const n=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,l.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,l.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,l.jsx)("div",{})});case 3:return(0,l.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,l.jsx)("div",{})});case 4:return(0,l.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})})]});case 5:return(0,l.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,l.jsx)("div",{})});case 6:return(0,l.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})})]});case 7:return(0,l.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})})]});case 8:return(0,l.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,l.jsx)("div",{})});case 10:return(0,l.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,l.jsx)("div",{})});case 11:return(0,l.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,l.jsx)("div",{})});case 12:return(0,l.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,l.jsx)("div",{})});case 15:return(0,l.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,l.jsx)("div",{})});case 19:return(0,l.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,l.jsx)("div",{})});case 20:return(0,l.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,l.jsx)("div",{})})]});case 21:return(0,l.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,l.jsx)("div",{})});case 23:return(0,l.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,l.jsx)("div",{})});case 25:return(0,l.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,l.jsx)("div",{})});case 26:return(0,l.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,l.jsx)("div",{})})]});case 28:return a.ZQ?(0,l.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,l.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,l.jsx)("div",{})})]});case 29:return a.ZQ?(0,l.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,l.jsx)("div",{})}):(0,l.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,l.jsx)("div",{})});case 30:case 32:return(0,l.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,l.jsx)("div",{})});case 31:return(0,l.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,l.jsx)("div",{})})]});case 33:return(0,l.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})})]});case 34:return(0,l.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})})]});case 35:return(0,l.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,l.jsx)("div",{})});case 36:return(0,l.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})})]});case 37:return(0,l.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,l.jsx)("div",{})})]});case 38:return(0,l.jsxs)("div",{className:"".concat(s," tb-booking-default"),children:[(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,l.jsx)("div",{})})]});default:return""}}));class o extends s.PureComponent{render(){return(0,l.jsx)(n,{...this.props})}}}}]);