(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3983,1088,7033,7234,7668,757],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(2703),c=s(14496),o=s(80184);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});s(72791);var a=s(80184);const i=t=>{let{username:e,network:s,authorClass:i}=t;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(72791),i=s(80184);class c extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:c}=this.props,o=!(!s||1!==s.status),n={color:o?s.color:t.color,backgroundColor:o?s.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,onClick:e=>{e.stopPropagation(),a(c),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=c},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),i=s(79200),c=s(80413),o=s(2703),n=s(70188),l=s(80184);class r extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:c}=this.props,{imgUrl:r,paddingBottom:d}=this.state,_={paddingBottom:"".concat(d,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,l.jsx)("img",{className:t,role:"img",src:r,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":c,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,o.P)(r)})})}}},98270:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),i=s(80413),c=s(96710),o=s(80184);const n=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class l extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:l}=this.props,{paddingBottom:r,videoLoaded:d}=this.state,_={paddingBottom:"".concat(r,"%")};return(0,o.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,o.jsx)(c.Z,{className:t,url:n(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.networkId,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:t=>{this.setVideoLoaded(!1)},autoPlay:l,muted:!0,volume:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:l,height:"100%",width:"100%",controls:i,style:{backgroundImage:d?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},37989:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var a=s(46535),i=s(41088),c=s(80184);const o=t=>{const{itemData:e,IconClass:s,position:o}=t,n=3===e.type||5===e.type,l=7===e.network.id,r=!!(e.imageList&&e.imageList.length>0),d=(e.imageList&&!a.ZQ&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_multi_images_ico_bottom":a.ZQ?"tb_multi_images_ico_te":"tb_multi_images_ico",_=1===e.isAudio,h=(0,c.jsx)(i.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,c.jsx)("div",{className:"".concat(d," tb__icon tb-multiple"),children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),p=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),u=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[r?m:"",n&&a.ZQ?u:"",n?l?h:_?b:a.ZQ?u:p:""]})}},41088:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(46535),c=s(80184);const o=a.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return i.ZQ?(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return i.ZQ?(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class n extends a.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),i=s(46535),c=s(2703),o=s(80184);const n=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,r=!!l&&(7!==t.id&&4!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:i.ZQ&&!(0,c.mD)(59)?s.iconColor:null},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),i=s(34867),c=s(2703),o=s(46535),n=s(80184);const l=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class r extends a.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:s,font:r,personalization:d,item:_,contentTitle:h}=this.props,m={fontFamily:s.css_font,fontSize:r.fontSize,color:o.ZQ&&!(0,c.mD)(59)?r.fontColor:null,textAlign:s.textAlignment};console.log("textStyle",s);let b=20==_.network.id?e:(0,c.Fx)(e);return 12==_.network.id&&(b=(0,i.ZP)(b)),(0,n.jsxs)("div",{className:"".concat(t," tb_content_line-").concat(s.lineTrim," tb-cTBfont-").concat(s.font_varient),style:m,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{data:_,content:b,Personalization:d})]})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),i=s(46535),c=s(80184);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,c.jsx)("div",{className:a,style:{color:o},"tb-network":e.id})},n=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,c.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,c.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,c.jsx)(n,{ThemeID:s},a):(0,c.jsx)(o,{network:e},a))):null})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(72791),i=s(79200),c=s(46535),o=s(80184);class n extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:a,ownerId:o}=this.props;e.stopPropagation(),c.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(c.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(72791),i=s(46535),c=s(2703),o=s(80184);const n=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,c.ok)(e)):s,l=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,c.ok)(e)):s,r=t=>{let{arialbl:e,hrefClick:s,Icon:a,iconColorStyle:i,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),style:i,children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",style:i,children:c}):""]})})};class d extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:a}=this.props,d={color:3===a?1===e.iconType?e.iconColor:t.network.color:i.ZQ?e.iconColor:e.fontColor},_=t.network.id,h=3===_||10===_||7===_?"like":"heart",m=!![1,2,3,7,8,9,10,18].includes(_),b=![29,19].includes(_),p=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==_&&26!==_&&23!==_&&6!==_&&5!==_&&11!==_&&12!==_&&15!==_&&20!==_&&21!==_?(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[m?(0,o.jsx)(r,{arialbl:p,hrefClick:n(_,t.postId,t.link),Icon:h,iconColorStyle:d,count:t.like_count}):null,b?(0,o.jsx)(r,{arialbl:p,hrefClick:l(_,t.postId,t.link),Icon:"comment",iconColorStyle:d,count:t.comment_count}):null,1===_?(0,o.jsx)(r,{arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,c.ok)(t.postId)),Icon:"retweet",iconColorStyle:d,count:t.comment_count}):null,(0,o.jsx)(r,{arialbl:p,hrefClick:t.link,Icon:"eye",iconColorStyle:d,count:0})]})}):""})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(2703),c=s(80184);const o=t=>{const{postTime:e,timeClass:s,authorColor:o}=t,n=(0,a.useMemo)((()=>(0,i.Sy)(e)),[]),l={color:o};return(0,c.jsx)("div",{className:s,style:l,children:n})},n=(0,a.memo)(o)},16292:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var a=s(72791),i=s(39852),c=s.n(i),o=s(2703),n=s(46535),l=s(97234),r=s(27668),d=s(70757),_=s(80184);const h=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:c,font:o,mediaType:h,ownerId:m}=t;const b={color:c.authorColor},p=!(!s.postAuthor||e.isInstaUser),u=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_mc_author",children:[p?(0,_.jsx)(l.default,{network:i,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,_.jsxs)("div",{className:"tb_mc_author_info",children:[p?(0,_.jsx)("div",{className:"tb_mc_authorname",style:b,children:e.name}):"",(0,_.jsxs)("div",{className:"tb_mc_post_info",children:[p?(0,_.jsx)("div",{className:"tb_mc_username",style:b,children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",u?(0,_.jsx)("div",{className:"tb_mc_seprator",style:{backgroundColor:c.authorColor},children:" "}):"",s.postTime?(0,_.jsx)(r.default,{postTime:a,timeClass:"tb_mc_time",authorColor:c.authorColor}):""]})]})]}),h&&i.id||n.ZQ?(0,_.jsx)("div",{className:"tb_mc_social_",children:(0,_.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:i,isDefault:1===c.iconType,ThemeRule:c})}):null]})};var m=s(37989),b=s(40115),p=s(98270);const u=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const c=!(!n.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),o=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,l=n.ZQ?!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio:100;return(0,_.jsxs)("div",{className:"tb_mc_media_wrap",children:[c?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:"tb_mc_media_icon"}),o||c?(0,_.jsx)(p.Z,{VideoClass:"tb_mc_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!0,autoPlay:!1}):(0,_.jsx)(b.Z,{ImageClass:"tb_mc_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:i.ThemeRule})]})};var x=s(23450),v=s(20169),j=s(16243),N=s(19036),g=s(31152);const w=n.ZQ?null:200;class k extends a.PureComponent{constructor(t){super(t),this.postTrack=a.createRef()}componentDidMount(){n.nX&&(0,o.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:a,clickToShowPopUp:i,itemIndex:c,wallID:l,ownerId:r,onClickToCTA:m,wall:b}=this.props,p=!(n.ZQ&&(0,o.mD)(52)||2!==t.type&&3!==t.type&&4!==t.type&&5!==t.type),k=t.rating>0,f=t.rating>0?"tb_mc_rating_content":"tb_mc_content",C=1===t.type&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",y=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),T=e.trimcontent?(0,o.Sv)(t.content,w):t.content;return(0,_.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*s:s,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":T,role:"article",children:(0,_.jsx)("div",{className:"tb_mc_post_wrap_in ".concat(n.ZQ&&(0,o.mD)(52)?"te_mc_post_wrap_in":""),style:{backgroundColor:a.cardColor,borderRadius:a.radius},children:(0,_.jsxs)("div",{className:"tb_mc_post_in",onClick:i(c,t),children:[n.ZQ&&(0,o.mD)(20)?(0,_.jsx)("div",{className:"tb_mc_contant_wrapper",children:(0,_.jsx)(h,{ownerId:r,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a})}):null,(0,_.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[n.ZQ||p||!(0,o.mD)(20)?null:(0,_.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,_.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a})," "]}),t.share.status?(0,_.jsx)(v.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:l,ownerId:r}):null,p?(0,_.jsx)(u,{itemData:t,wallID:l,ownerId:r,ThemeRule:a,wall:b}):null]}),(0,_.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[(0,_.jsxs)("div",{className:"tb_mc_content_wrap ".concat((0,o.mD)(52)?"tb_mc_content_wrap_fixed":""),children:[k?(0,_.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,_.jsx)(N.Z,{rating:t.rating,network:t.network})," "]}):null,y&&!n.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(j.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,a.hideContent&&p?null:(0,_.jsx)(x.default,{item:t,contentClass:"".concat(f," ").concat(C),content:T,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle})]}),y&&n.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(j.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,!n.ZQ||(0,o.mD)(52)?(0,_.jsx)(h,{ownerId:r,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a}):null]}),a.socialAction&&!(0,o.mD)(52)?(0,_.jsx)(g.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__ ".concat(n.ZQ?"tb_mc_social_action_bg":"")}):null]})})})}}const f=k;var C=s(77581),y=s(79200);class T extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,clickToShowPopUp:i,onClickToCTA:o}=this.props,{loadData:n}=this.state;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(c(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:n?t&&t.length>0&&t.map(((t,c)=>{const n=e[t];return(0,_.jsx)(f,{ownerId:a.Wall.owner,itemData:n,itemIndex:c,adjustWidth:1==n.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:i,wallID:a.Wall.id,onClickToCTA:o,wall:a},"modern_card".concat(n.id))})):null})})}}const I=(0,C.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(T)},50247:()=>{}}]);
//# sourceMappingURL=3983.f8bf1e86.chunk.js.map