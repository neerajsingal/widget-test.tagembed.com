(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8124,6476,757],{39004:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>D});var s=a(72791),o=a(77581),n=a(46535),i=a(80184);const l=s.lazy((()=>Promise.all([a.e(6710),a.e(8282),a.e(9208)]).then(a.bind(a,89208)))),r=s.lazy((()=>a.e(3108).then(a.bind(a,53108)))),d=s.lazy((()=>Promise.all([a.e(6710),a.e(8764)]).then(a.bind(a,78764)))),c=s.lazy((()=>Promise.all([a.e(3519),a.e(3712)]).then(a.bind(a,28688))));class _ extends s.PureComponent{constructor(){super(...arguments),this.mediaSize=t=>{this.props.mediaSizeCallback(t)}}render(){const{data:t}=this.props;return(0,i.jsx)("div",{className:"tb_post_modal_media_holder",children:t.imageList&&t.imageList.length>0?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(l,{imageList:t.imageList,...this.props})}):2===t.type||4===t.type?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(r,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:1})}):3===t.type||5===t.type?t&&t.isAudio?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(c,{...this.props})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[(0,i.jsx)(r,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:0}),(0,i.jsx)(d,{...this.props})]}):null})}}var h=a(70757),p=a(2703),m=a(14496);class b extends s.PureComponent{constructor(t){super(t),this.state={picture:t.item.author.picture,isAuthorImagevalid:!0}}componentWillReceiveProps(t){const{item:e}=t;this.setState({picture:e.author.picture})}render(){const{item:t,ThemeRule:e,ownerId:a}=this.props,s=t.author.picture&&String(t.author.picture).includes("author")?" ":t.author.picture.replace(/[ ]+/g,""),o="".concat(t.author.username&&t.author.username.length>0?"@":"").concat(t.author.username),n=0!=t.postAuthor&&!t.author.isInstaUser,l=0!=t.postAuthor&&0!=t.timePost&&!t.author.isInstaUser,r=0!=t.timePost&&!t.author.isInstaUser,d={color:e.authorColor},c={backgroundColor:e.authorColor};return(0,i.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,i.jsxs)("div",{className:"tb_post_modal_author_details",children:[n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"tb_post_modal_author_media",style:{backgroundImage:"url(".concat(s,")")},onClick:e=>t.link?window.open(t.link,"_blank"):null,children:!this.state.isAuthorImagevalid&&(0,i.jsx)(m.Z,{network:t.network,username:t.author.name,authorClass:"tb_post_modal_author_media"})}),(0,i.jsx)("img",{loading:"lazy",src:s,alt:(0,p.P)(s),height:"68",width:"68",style:{display:"none"},onError:t=>{this.setState({isAuthorImagevalid:!1})}})]}):null,(0,i.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[n?(0,i.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,i.jsxs)("div",{className:"tb_post_modal_author_usrname",style:d,onClick:e=>t.link?window.open(t.link):null,children:[t.author.name," "]})}):null,(0,i.jsxs)("div",{className:"tb_post_modal_author_info",children:[n?(0,i.jsx)("div",{className:"tb_post_modal_author_handlename",style:d,children:o}):null,l?(0,i.jsx)("div",{className:"tb_post_modal_seprator_dot",style:c,children:" "}):null,r?(0,i.jsx)("span",{className:"tb_post_modal_post_time",style:d,children:(0,p.Sy)(t.createdAt)}):null]})]})]}),(0,i.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link?window.open(t.link,"_blank"):null,children:(0,i.jsx)(h.default,{network:t.network,networkClass:"tb_post_modal_social_ico tb__icon",font:e,ThemeRule:e,isDefault:1===e.iconType,isPopUp:!0})})]})}}var u=a(79200);class g extends s.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:a,wall:s}=this.props;n.ZQ||(0,u.S5)({type:2,action:2,wall:s.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.Wall.owner}),(0,u.Fv)("Tagbox","popup_share_click","popup_share",s.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:a}=this.props;t&&(n.ZQ||(0,u.S5)({type:2,action:2,wall:a.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:a.Wall.owner}),(0,u.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:a,wall:s}=this.props;n.ZQ||(0,u.S5)({type:2,action:2,wall:s.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.Wall.owner}),(0,u.Fv)("Tagbox","popup_share_click","popup_share",s.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:a}=this.props,s={color:a};return(0,i.jsxs)("div",{className:"tb_post_modal_post_footer_social_ ".concat(n.ZQ?"tb_post_modal_post_footer_social_te":""),children:[(0,i.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,i.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,i.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,i.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:s,children:" "})})}),(0,i.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,i.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:s})}),(0,i.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,i.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:s})}),!n.ZQ&&e.link?(0,i.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:a=>t(e),children:(0,i.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-mail",style:s,children:" "})}):null,!n.ZQ&&e.link?(0,i.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,i.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:s,children:" "})}):null]}),n.ZQ&&e.link?(0,i.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(e.link,"_blank"),children:[(0,i.jsx)("div",{className:"tb_post_modal_view",style:s,children:e.network.name}),(0,i.jsx)("div",{className:"tb_post_network_ico tb__icon tb-share-square",style:s,children:" "})]}):null]})}}const w=(0,o.$j)((t=>{}),(t=>({sharePostPopUP:e=>t((0,u.K8)(e))})))(g);var x=a(34867);const y=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4",fontSize:30},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707",fontSize:30},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c",fontSize:30},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983",fontSize:30},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000",fontSize:30},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1",fontSize:30}},{className:s,color:o,fontSize:l}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30};return(0,i.jsx)("div",{className:s,style:{color:o,fontSize:l},"tb-network":e.id})};class v extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(y,{network:e},a))):null})}}var k=a(60173),f=a(46476);class j extends s.PureComponent{render(){const{contentTitle:t,item:e,Personalization:a,ThemeRule:s,mediaSize:o}=this.props,n=k.tq?s.fontSize:k.Em?s.fontSize+2:s.fontSize+5,l={fontFamily:s.css_font,fontSize:n,color:s.fontColor};let r=20==e.network.id?this.props.contentData:(0,p.Fx)(this.props.contentData);12==e.network.id&&(r=(0,x.ZP)(r));const d=a.textDecorate?" tb_post_modal_text_decorate":"";return 47===a.widgetTheme&&(document.querySelector("html").style.overflow="auto"),(0,i.jsx)("div",{className:"tb_post_modal_post_wrapper",style:{height:1!=e.type?o.height-90:"auto"},children:(0,i.jsx)("div",{className:"tb_post_modal_post_wrap_in",children:(0,i.jsxs)("div",{className:"tb_post_modal_post_content tb-cTBfont-".concat(s.font_varient),style:l,children:[null!=e.rating&&e.rating?(0,i.jsx)(v,{rating:e.rating,network:e.network}):null,(0,i.jsxs)("div",{className:"tb_post_modal_content ".concat(d),children:[t?(0,i.jsx)("div",{className:"tb_post_bold_txt",children:(0,x.ZP)(t)}):null,(0,i.jsx)(f.default,{data:e,content:r,Personalization:a})]})]})})},"content_".concat(e.id))}}var P=a(70188);function N(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}class S extends s.PureComponent{render(){const{brandingNetworks:t,languageSetting:e,wallId:a,themeID:s}=this.props,o=n.ZQ?"".concat(P.ZS,"?utm_source=free_plan_widget_").concat(s,"&utm_medium=").concat(a,"&utm_campaign=powered-by-logo"):"".concat((0,p.$t)(t,a)[0]).concat(P.Si),l=n.ZQ?"tagembed_logo-light.svg":"taggbox_logo-light.svg";return(0,i.jsxs)("a",{href:o,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-30px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding-top","4px","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),t.style.setProperty("transform","none","important"),N(t))},children:[(0,i.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","inherit","important"),t.style.setProperty("transform","none","important"),N(t))},children:[Object.keys(e).length>0&&e.poweredBy?e.poweredBy:"Powered by"," "]}),(0,i.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(P.do,"/media/images/").concat(l,")"),"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","26px","important"),t.style.setProperty("min-height","26px","important"),t.style.setProperty("width","96px","important"),t.style.setProperty("min-width","96px","important"),t.style.setProperty("transform","none","important"),N(t))}})]})}}class C extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,mediaSize:{height:500,width:500}},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:""},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a,isRepeatingPost:s}=this.state;a.idArray.length-1!=t&&t!==a.idArray.length||s?t===a.idArray.length-1||t===a.idArray.length?this.setState({currentIndex:0,isRepeatingPost:!1}):-1===t?this.setState({currentIndex:a.idArray.length-1,isRepeatingPost:!1}):this.setState({currentIndex:t,isRepeatingPost:!1}):this.loadMore()},this.loadMore=()=>{const{wall:t,postData:e,postHeight:a}=this.props,{eventData:s,currentIndex:o}=this.state,n=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(s.idArray.length-1==o&&this.setState({isRepeatingPost:!0}),n){const s=t.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);this.props.managePostHeight(a),this.props.getDataNextSteps(t.Wall.id,o,s,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.mediaSize=t=>{this.setState({mediaSize:{height:t.height,width:t.width}})}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),a=p.b8?p.b8:e.parentNode.id;this.setState({parentID:a}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var e=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));e&&e.classList.add("tb_post_modal_show"),void 0!=t.personalization.widgetTheme&&47==t.personalization.widgetTheme&&e&&(e.style.overflow="hidden")}));var s=document.getElementsByTagName("html");s&&s[0]&&(s[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent)}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let a=document.getElementById("tb_post_modal_modal-taggbox_main"),s=document.querySelector(".tb_post_modal_conetent"),o=document.querySelector(".tb_post_modal_nxt_btn"),n=document.querySelector(".tb_post_modal_prev_btn");a&&(s&&(s.onclick=()=>e=1),o&&(o.onclick=()=>e=1),n&&(n.onclick=()=>e=1),a.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:s}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));s.idArray=t,this.setState({completeData:t,eventData:s},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:a,brandingNetworks:s,postData:o}=this.props,{currentIndex:l,completeData:r,eventData:d,parentID:c,mediaSize:h}=this.state;let m=null;m=-1===l?r[d.idArray.length-1]:r[l];const u=1==t.Personalization.popupSlideShow,g=(0,p.uu)(t.ThemeRule.cardColor),x=!!(m&&c&&Object.keys(m).length>0&&1==t.ThemeRule.hideContent&&1!=m.type);return m&&c&&Object.keys(m).length>0?(0,i.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(c),children:(0,i.jsx)("div",{className:"tb_post_modal_modal_dialog  ".concat(x?"tb_only_media_modal":""),children:(0,i.jsxs)("div",{className:"tb_post_modal_conetent",children:[(0,i.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,i.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,i.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,i.jsx)("div",{className:"tb_post_modal_post_address",children:m.link?(0,i.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(m.link,"_blank"),children:[(0,i.jsxs)("div",{className:"tb_post_modal_view",children:[a.viewOnText," ",m.network.name]}),(0,i.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,i.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,i.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,i.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),u?(0,i.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===m.type?"tb_post_modal_text_nav__":null),children:[(0,i.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(l-1),children:(0,i.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,i.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(l+1),children:(0,i.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,i.jsx)("div",{className:"tb_post_modal_body_container",children:(0,i.jsxs)("div",{className:"tb_post_modal_modal_body",style:{backgroundColor:t.ThemeRule.cardColor,borderRadius:t.ThemeRule.radius},children:[1!=m.type?(0,i.jsxs)("div",{className:"tb_post_modal_details_left",children:[u?(0,i.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,i.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(l-1),children:(0,i.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,i.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(l+1),children:(0,i.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,i.jsx)(_,{data:m,wall:t,mediaSizeCallback:this.mediaSize})]}):null,(0,i.jsx)("div",{className:"tb_post_modal_details_right ".concat(1===m.type?"tb_post_modal_text__":""),style:{backgroundColor:t.ThemeRule.cardColor},children:(0,i.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,i.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[(0,i.jsx)(b,{item:m,ThemeRule:{...t.ThemeRule,fontColor:g},Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(m.id)),x?null:(0,i.jsx)(j,{ThemeRule:{...t.ThemeRule,fontColor:g},Personalization:t.Personalization,item:m,contentData:m.content,contentTitle:m.contentTitle,mediaSize:h},m.id)]}),(0,i.jsxs)("div",{className:"tb_post_modal_post_footer",children:[n.ZQ?null:(0,i.jsx)("div",{className:"tb_post_modal_post_footer_report",children:(0,i.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",onClick:t=>e(m),children:(0,i.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",style:{color:g},children:"Report"})})}),(0,i.jsx)(w,{item:m,wall:t,color:g,languageSetting:a})]})]})}),t.UserRule.branding_lite&&1==t.UserRule.branding_lite||o.isFreeAdsStatus?(0,i.jsx)(S,{brandingNetworks:s,languageSetting:a,wallId:t.Wall.id,themeID:t.Personalization.widgetTheme}):null]})})]})})}):null}}const D=(0,o.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,u.zj)(e)),reportMediaPopUp:e=>t((0,u.SD)(e)),managePostHeight:e=>t((0,u.B0)(e)),getDataNextSteps:(e,a,s,o,n,i,l)=>t((0,u.Sx)(e,a,s,o,n,i,l))})))(C)},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(72791);var s=a(80184);const o=t=>{let{username:e,network:a,authorClass:o}=t;return(0,s.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),o=a(46535),n=a(2703),i=a(80184);const l=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r}=this.props,d=!!r&&(7!==t.id&&4!==t.id),c=o.ZQ&&36==t.id?"tagembed":t.icon;return d?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),style:{color:o.ZQ&&!(0,n.mD)(59)?a.iconColor:null},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(l,{network:t,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(72791),o=a(35737),n=a(34867),i=a(80184);const l=a(80844),r=t=>(0,i.jsx)(o.default,{children:(0,n.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const o={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:o,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,i.jsx)("div",{className:"tb_text_hashtag",style:o,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,a)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:o,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:o,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,n.ZP)(a),e.hash.hashString,((t,e)=>(0,i.jsx)("div",{className:"tb_text_hashtag",style:o,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,a)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:o,children:["#",t]},"".concat(e.id,"_").concat(a)))):(0,n.ZP)(a)})},c=(0,s.memo)(d)},50247:()=>{}}]);
//# sourceMappingURL=8124.2f441f81.chunk.js.map