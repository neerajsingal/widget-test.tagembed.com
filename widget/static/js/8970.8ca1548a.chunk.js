(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8970],{18970:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var i=s(47313),a=s(43411),o=s(46417);class n extends i.Component{constructor(){super(...arguments),this.state={uploadHide:!0},this.handleHide=e=>this.setState({uploadHide:!1})}render(){const{onClickToUpdateStep:e,isActiveIndex:t,isAddMoreActive:s,addCaption:i,item:a,onClickToUpdateMoreStep:n}=this.props;return(0,o.jsxs)("div",{className:"tb_onsite_add_caption_tab",children:[(0,o.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,o.jsx)("textarea",{className:"tb_onsite_form_control_textarea",rows:"2",placeholder:"Add your caption here....",onChange:i(t),value:a&&a.caption?a.caption:""}),a.error?(0,o.jsx)("div",{className:"tb_onsite_error",children:"* Please add caption."}):null]}),(0,o.jsxs)("div",{className:"tb_onsite_form_actions",style:a&&s?{justifyContent:"space-between"}:null,children:[a&&s?(0,o.jsx)("div",{className:"tb_onsite_btn_secondary",onClick:n(2),children:"Skip"}):null,(0,o.jsx)("div",{className:"tb_onsite_btn_primary",id:"tb_onsite_btn_id",onClick:e(2),children:"Next"})]})]})}}const r=n;var l=s(97626);class c extends i.Component{render(){const{upload_image:e,onClickToRemove:t,onClickToEdit:s}=this.props;return(0,o.jsx)(o.Fragment,{children:e&&e.map(((e,i)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"tb_onsite_post_area",children:[(0,o.jsxs)("div",{className:"tb_onsite_post_info",children:[e.thumb_file?(0,o.jsx)("div",{className:"tb_onsite_post_media",style:{backgroundImage:"url(".concat(e.thumb_file,")")}}):null,(0,o.jsxs)("div",{className:"tb_onsite_post_content_wrap",children:[(0,o.jsxs)("div",{className:"tb_onsite_post_content__",children:[" ",e.caption&&e.caption.length>0?e.caption:e.review&&e.review.length>0?e.review:null]}),""==e.caption&&e.rating||e.review&&e.review.length>0?(0,o.jsx)(l.Z,{edit:!1,count:5,size:20,value:e.rating}):null]})]}),(0,o.jsxs)("div",{className:"tb_onsite_post_actions",children:[(0,o.jsx)("div",{className:"tb_onsite_edit_post",onClick:s(i),children:(0,o.jsx)("div",{className:"tb_onsite_edit_icon tb__icon tb-edit",children:(0,o.jsx)("div",{})})}),(0,o.jsx)("div",{className:"tb_onsite_remove_post",onClick:t(i),children:(0,o.jsx)("div",{className:"tb_onsite_remove_icon tb__icon tb-delete",children:(0,o.jsx)("div",{})})})]})]})})))})}}const d=c;class u extends i.Component{render(){const{submitError:e,termsCheck:t,submitErrorMessage:s,wall:i,onClickToaddMore:a,onSubmitPostData:n,upload_image:r,onClickToRemove:l,isEdit:c,onTextName:u,onTextEmail:h,email:_,name:m,nameError:p,emailError:g,onClickToEdit:v,apiRequest:b,errorClickMore:f}=this.props;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tb_onsite_box_title",children:[(0,o.jsx)("div",{className:"tb_onsite_title",children:"Fill out the following information"}),(0,o.jsxs)("div",{className:"tb_onsite_sub_heading",children:[(0,o.jsx)("div",{className:"tb_onsite_sup",children:"*"})," Indicates required field"]})]}),(0,o.jsx)("div",{className:"tb_onsite_box_body",children:(0,o.jsxs)("div",{className:"tb_onsite_tabs_content",children:[r&&r.length>0?(0,o.jsx)(d,{upload_image:r,onClickToRemove:l,isEdit:c,onClickToEdit:v}):null,(0,o.jsx)("div",{className:"tb_onsite_form",children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,o.jsxs)("div",{className:"tb_onsite_form_label",children:["Your Name",(0,o.jsx)("div",{className:"tb_onsite_sup",children:"*"})]}),(0,o.jsx)("input",{type:"text",className:"tb_onsite_form_control",placeholder:"Enter Your Name",onChange:u,value:m}),p?(0,o.jsx)("div",{className:"tb_onsite_error",children:"Please enter correct your name."}):null]}),(0,o.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,o.jsxs)("div",{className:"tb_onsite_form_label",children:["Email Address",(0,o.jsx)("div",{className:"tb_onsite_sup",children:"*"})]}),(0,o.jsx)("input",{type:"email",className:"tb_onsite_form_control",placeholder:"Enter Your Email",onChange:h,value:_}),g?(0,o.jsx)("div",{className:"tb_onsite_error",children:"Please enter correct email."}):null]}),[104746].includes(i.Wall.owner)?(0,o.jsxs)("div",{className:"tb_onsite_terms_condition",children:[(0,o.jsxs)("label",{style:{display:"flex"},children:[(0,o.jsx)("input",{onClick:e=>t(e.target.checked?1:0),className:"display-flex",type:"checkbox"}),(0,o.jsx)("span",{style:{marginLeft:"5px"},children:" I agree to CALM using my story for marketing purposes --"})]}),(0,o.jsx)("a",{style:{color:"#1154cc",fontWeight:"normal",fontSize:"11px",paddingLeft:"26px"},href:i.UgcSettings.onsite_term_url,target:"_blank",children:" click for more information on how your story will be used."})]}):(0,o.jsxs)("div",{className:"tb_onsite_terms_condition",children:["By clicking on Submit, you are agreeing to our",(0,o.jsx)("a",{href:i.UgcSettings.onsite_term_url,target:"_blank",children:" terms and conditions *"})]}),e?(0,o.jsxs)("div",{className:"tb_onsite_error",children:["* ",s||(r&&0==r.length?"Please include atleast one post.":"Please check complete details.")]}):null,(0,o.jsxs)("div",{className:"tb_onsite_form_actions_footer",children:[(0,o.jsxs)("div",{className:"tb_onsite_btn_wrapper",children:[(0,o.jsx)("div",{className:"tb_onsite_btn_secondary",onClick:a,children:"+ Add More Post"}),(0,o.jsxs)("div",{className:"tb_onsite_post_limits",children:[(0,o.jsx)("div",{className:"tb_onsite_sup",children:"*"})," Max 20 Posts"]})]}),(0,o.jsx)("div",{className:"tb_onsite_btn_primary".concat(b?" tb_onsite_spinner":""),onClick:n,children:i.UgcSettings.onsite_popup_btn_txt})]}),f?(0,o.jsx)("div",{className:"tb_onsite_error",children:"* Max 20 posts are allowed."}):null]})})]})})]})}}const h=u;class _ extends i.Component{constructor(){super(...arguments),this.ratingChanged=e=>{const{isActiveIndex:t,addRatings:s}=this.props;s(e,t)}}render(){const{onClickToUpdateStep:e,isAddMoreActive:t,isActiveIndex:s,addReview:i,item:a,onClickToUpdateMoreStep:n}=this.props;return(0,o.jsxs)("div",{className:"tb_onsite_add_caption_tab",children:[(0,o.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,o.jsx)("textarea",{className:"tb_onsite_form_control_textarea",rows:"2",placeholder:"Add your review here....",onChange:i(s),value:a&&a.review?a.review:""}),a.error?(0,o.jsx)("div",{className:"tb_onsite_error",children:"* Please add review and ratings."}):null]}),(0,o.jsx)("div",{className:"tb_onsite_rating",children:(0,o.jsx)(l.Z,{size:24,count:5,onChange:this.ratingChanged,value:a&&a.rating?a.rating:0})}),(0,o.jsxs)("div",{className:"tb_onsite_form_actions",style:a&&t?{justifyContent:"space-between"}:null,children:[a&&t?(0,o.jsx)("div",{className:"tb_onsite_btn_secondary",onClick:n(2),children:"Skip"}):null,(0,o.jsx)("div",{className:"tb_onsite_btn_primary",id:"tb_onsite_btn_id",onClick:e(2),children:"Next"})]})]})}}const m=_;var p=s(43635);const g=e=>{let{onClosePopUp:t}=e;return(0,o.jsx)("div",{className:"tb_onsite_close_btn_wrapper",onClick:t,children:(0,o.jsx)("div",{className:"tb_onsite_close_btn tb__icon tb-close-alt",children:(0,o.jsx)("div",{})})})},v=e=>{const{wall:t}=e;return t.UgcSettings&&t.UgcSettings.onsite_logo&&""!=t.UgcSettings.onsite_logo?(0,o.jsx)("div",{className:"tb_onsite_logo_wrap",children:(0,o.jsx)("img",{loading:"lazy",src:t.UgcSettings.onsite_logo,className:"tb_onsite_popup_logo",width:"400",height:"50",alt:"logo"})}):null},b=e=>{let{item:t,isActiveIndex:s,onClickToImageRemove:i}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{loading:"lazy",className:"tb_onsite_uploaded",src:t.thumb_file,height:"200",width:"300",alt:"Post"}),(0,o.jsx)("div",{className:"tb_onsite_remove_ico",onClick:i(s),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,o.jsxs)("g",{"data-name":"Group 4331",transform:"translate(10956 -4533)",children:[(0,o.jsx)("rect",{id:"Rectangle_2069","data-name":"Rectangle 2069",width:"24",height:"24",transform:"translate(-10956 4533)",fill:"none",opacity:"0"}),(0,o.jsx)("g",{id:"Group_4324","data-name":"Group 4324",transform:"translate(-10952 4536)",children:(0,o.jsx)("path",{id:"Path_5188","data-name":"Path 5188",d:"M2.722,16.328A2,2,0,0,0,4.694,18h6.612a2,2,0,0,0,1.972-1.672L14,6H2ZM9,9.5A.5.5,0,0,1,9.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm-4,0A.5.5,0,0,1,5.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5ZM15,2H11A2,2,0,0,0,9,0H7A2,2,0,0,0,5,2H1A1,1,0,0,0,1,4H15a1,1,0,0,0,0-2Z",fill:"#545454",fillRule:"evenodd"})})]})})})]})},f=i.lazy((()=>Promise.all([s.e(8349),s.e(7329)]).then(s.bind(s,83704))));class x extends i.Component{render(){const{updateImageWithData:e,isActiveIndex:t,addPostImage:s,item:a,onClickToImageRemove:n,onsite_token:r}=this.props;return(0,o.jsx)("div",{className:"tb_onsite_add_caption_tab",children:(0,o.jsx)("div",{className:"tb_onsite_image_upload_box",children:(0,o.jsx)("div",{className:"tb_onsite_upload_box_content",children:a&&Object.keys(a).length>0&&a.thumb_file?(0,o.jsx)(b,{item:a,isActiveIndex:t,onClickToImageRemove:n}):(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(f,{updateImageWithData:e,isActiveIndex:t,addPostImage:s,onsite_token:r})})})})})}}const S=x;const y=function(e){const{wall:t}=e;return(0,o.jsx)("div",{className:"tb_success_post",children:(0,o.jsxs)("div",{className:"tb_success_post_box",children:[(0,o.jsx)("svg",{width:"70",height:"70",version:"1.1",viewBox:"0 0 700 700",xmlns:"http://www.w3.org/2000/svg",fill:"#6DC05E",children:(0,o.jsx)("path",{d:"m350 536.67c68.07 0 133.36-27.043 181.49-75.176 48.133-48.137 75.176-113.42 75.176-181.49s-27.043-133.36-75.176-181.49c-48.137-48.133-113.42-75.176-181.49-75.176s-133.36 27.043-181.49 75.176c-48.133 48.137-75.176 113.42-75.176 181.49s27.043 133.36 75.176 181.49c48.137 48.133 113.42 75.176 181.49 75.176zm-133.23-249.9c4.3711-4.3438 10.285-6.7852 16.449-6.7852 6.168 0 12.078 2.4414 16.453 6.7852l53.664 53.668 135.1-135.1c6.0078-5.1445 14.211-6.8945 21.793-4.6523 7.5859 2.2422 13.516 8.1758 15.758 15.758 2.2461 7.5859 0.49219 15.789-4.6523 21.797l-151.67 151.67 0.003907-0.003906c-4.375 4.3477-10.285 6.7852-16.453 6.7852-6.1641 0-12.078-2.4375-16.449-6.7852l-70-70c-4.418-4.3789-6.9023-10.344-6.9023-16.566 0-6.2188 2.4844-12.184 6.9023-16.566z"})}),(0,o.jsxs)("div",{className:"tb_onsite_success_title cTBfont-".concat(t.UgcSettings.onsite_font_varient_btn),style:{color:t.UgcSettings.onsite_thank_txt_color,fontFamily:t.UgcSettings.onsite_css_font_msg,fontSize:parseInt(t.UgcSettings.onsite_thank_fontSize)},children:[" ",t.UgcSettings.onsite_status?t.UgcSettings.onsite_succ_msg:"Thank you for sharing your amazing content with us."]}),(0,o.jsx)("button",{className:"tb_onsite_btn_primary",onClick:e.onClosePopUp,children:"Close"})]})})};var j=s(17739),k=s(98501),C=s(35179);const N=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());class w extends i.Component{constructor(){super(...arguments),this.state={submitPost:!0,activeTab:1,isOpen:!0,step:1,wall_id:null,name:null,email:null,upload_image:[{file:null,caption:null,review:null,rating:0,error:!1,activeTab:1,type:1,thumb_file:"",videoPath:""}],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1,submitErrorMessage:null,apiRequest:!1,isActiveIndex:0,isAddMoreActive:!1,isEdit:!1,submitError:!1,is_terms_check:0,errorClickMore:!1},this.handleNext=e=>this.setState({submitPost:!1}),this.hanleTab1=e=>this.setState({activeTab:1}),this.hanleTab2=e=>this.setState({activeTab:2}),this.onShowCloseSubmitPicPopUp=e=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})},this.updateImageWithData=e=>{const{upload_image:t}=this.state;t&&t.length<20&&(t.push(e),this.setState({upload_image:t}))},this.onClickToaddMore=e=>{const{upload_image:t}=this.state,{wall:s}=this.props;if(t&&t.length<20){const e=3==s.UgcSettings.choose_content_category?2:1;t.push({file:null,caption:null,review:null,rating:0,error:!1,activeTab:e,type:1,thumb_file:"",videoPath:""}),this.setState({isAddMoreActive:!0,upload_image:t,isActiveIndex:0==t.length||1==t.length?0:parseInt(t.length)-1,step:1,activeTab:e,submitError:!1,errorClickMore:!1})}else t.length>=20&&this.setState({errorClickMore:!0})},this.onClickToUpdateMoreStep=e=>t=>{const{isAddMoreActive:s,isActiveIndex:i,upload_image:a}=this.state;s&&a[i]&&a.splice(i,1),this.setState({isAddMoreActive:!1,upload_image:a,step:e,isEdit:!1,isActiveIndex:a&&a.length>0&&parseInt(a.length)-1>0?parseInt(a.length)-1:0,activeTab:1,errorClickMore:!1})},this.onClickToUpdateStep=e=>t=>{var s=!1;const{upload_image:i,isActiveIndex:a,activeTab:o}=this.state;i&&i[a]&&(1==o?null==i[a].caption||""==i[a].caption||0==i[a].caption.trim().length?(i[a].error=!0,s=!0):i[a].error=!1:2==o&&(null==i[a].review||""==i[a].review||0==i[a].review.length||0==i[a].rating?(i[a].error=!0,s=!0):i[a].error=!1)),s?this.setState({upload_image:i}):this.setState({isAddMoreActive:!1,upload_image:i,step:e,isEdit:!1,activeTab:1,submitErrorMessage:null,errorClickMore:!1})},this.onSubmitPostData=e=>{const{name:t,email:s,upload_image:i,is_terms_check:a,tandc:o,receiveMail:n}=this.state,{wallId:r,modalPop:l,wall:c,feeds:d}=this.props;if(this.setState({submitError:!1}),o&&t&&t.length>0&&s&&s.length>0&&N(s)&&!s.includes("mailinator")&&i&&i.length>0&&o){this.setState({apiRequest:!0});var u=!!window.ugcSuite||!!window.location.href.includes("ugcSuite=1"),h={};u&&d&&d.length>0&&d.map((e=>{e&&e.Network&&Object.keys(e.Network).length>0&&29==e.Network.id&&e.value1&&(h={feedId:e.value1})}));const e={wall_id:null!==c&&void 0!==c&&c.Wall.wallId?null===c||void 0===c?void 0:c.Wall.wallId:r,name:t,email:s,upload_file:i,receive_mail:n,onsite_token:l.onsite_token,...h};[104746].includes(c.Wall.owner)&&(e.is_terms_check=a),(0,p.uM)(e).then((e=>{const{onsite_token:t}=e.data;this.props.onsiteTokenUpdate(t),this.setState({step:3,apiRequest:!1},(()=>setTimeout((()=>this.props.onSitePopup(!1)),5e4)),document.querySelector("html").style.overflow="auto")})).catch((e=>{const{message:t}=e.toJSON();t&&this.setState({submitError:!0,submitErrorMessage:t,apiRequest:!1}),console.error(e)}))}else null!=this.state.name&&0!=this.state.name.trim().length||this.setState({nameError:!0,apiRequest:!1}),null!=this.state.email&&0!=this.state.email.trim().length&&N(this.state.email)&&!s.includes("mailinator")||this.setState({emailError:!0,apiRequest:!1}),i&&0==i.length&&this.setState({submitError:!0})},this.addCaption=e=>t=>{const{upload_image:s}=this.state;s&&s[e]&&(s[e].caption=t.target.value,s[e].review="",s[e].rating=0,s[e].error=!1,s[e].activeTab=1,this.setState({upload_image:s}))},this.addReview=e=>t=>{const{upload_image:s}=this.state;s&&s[e]&&(s[e].review=t.target.value,s[e].caption="",s[e].error=!1,s[e].activeTab=2,this.setState({upload_image:s}))},this.addRatings=(e,t)=>{const{upload_image:s}=this.state;s&&s[t]&&(s[t].caption="",s[t].rating=e,s[t].error=!1,s[t].activeTab=2,this.setState({upload_image:s}))},this.addPostImage=(e,t,s,i,a,o,n,r,l,c)=>{const{upload_image:d}=this.state;d&&d[a]&&(d[a].file=e,d[a].thumb_file=t,d[a].videoPath=s,d[a].type=i,d[a].ext=o,d[a].size=n,d[a].fileName=r,d[a].mediaHeight=l,d[a].mediaWidth=c,this.setState({upload_image:d}))},this.onClickToRemove=e=>t=>{const{upload_image:s}=this.state;s&&s.length>0&&s.splice(e,1),this.setState({upload_image:s,errorClickMore:!1})},this.onClickToImageRemove=e=>t=>{const{upload_image:s}=this.state;s&&s[e]&&(s[e].file=null,s[e].thumb_file="",s[e].videoPath="",s[e].type=1,s[e].ext=null,s[e].size=0,s[e].fileName=null,s[e].mediaHeight=0,s[e].mediaWidth=0,this.setState({upload_image:s}),(0,j.AB)(2))},this.onClickToEdit=e=>t=>{const{upload_image:s}=this.state;let i=1;s&&s[e]&&(i=s[e].activeTab),this.setState({isActiveIndex:e,isEdit:!0,step:1,activeTab:i})},this.onTextName=e=>{this.setState({name:e.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=e=>{this.setState({email:e.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&N(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onUpdatereceiveMail=e=>{const{receiveMail:t}=this.state;this.setState({receiveMail:!t})},this.onUpdatetandc=e=>{const{tandc:t}=this.state;this.setState({tandc:!t})},this.onClosePopUp=()=>{this.props.onSitePopup(!1),document.querySelector("html").style.overflow="auto"},this.termsCheck=e=>{this.setState({is_terms_check:e})}}componentDidMount(){const{wall:e}=this.props;this.setState({activeTab:3==e.UgcSettings.choose_content_category?2:1})}render(){const{activeTab:e,isActiveIndex:t,step:s,upload_image:i,isAddMoreActive:a,isEdit:n,name:l,email:c,receiveMail:d,tandc:u,nameError:_,emailError:p,apiRequest:b,submitError:f,submitErrorMessage:x,errorClickMore:j}=this.state,{wall:N,modalPop:w}=this.props,T={backgroundImage:"url(".concat(k.do,"/media/images/nopost.png)")},{onClosePopUp:I}=this;return N&&N.UgcSettings&&Object.keys(N.UgcSettings).length>0&&N.UgcSettings.onsite_status?(0,o.jsx)("div",{className:"onsite_submit_post_main",style:{backgroundImage:N.UgcSettings.onsite_background_image?"url(".concat(N.UgcSettings.onsite_background_image,")"):null,backgroundColor:N.UgcSettings.onsite_background_color},children:(0,o.jsx)("div",{className:"tb_onsite_post_inner",children:(0,o.jsx)("div",{className:"tb_onsite_upload_post",children:(0,o.jsxs)("div",{className:"tb_onsite_box",children:[(0,o.jsxs)("div",{className:"tb_onsite_box_header",children:[(0,o.jsx)(g,{onClosePopUp:I}),(0,o.jsx)(v,{wall:N})]}),1==s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tb_onsite_box_title",children:[(0,o.jsx)("div",{className:"tb_onsite_title",children:N.UgcSettings.onsite_status?N.UgcSettings.onsite_popup_title:"Share Your Images With Us"}),(0,o.jsx)("div",{className:"tb_onsite_sub_heading",children:N.UgcSettings.onsite_status?N.UgcSettings.onsite_popup_sub_heading:"Upload your image featuring our brand products and get a chance to feature in our UGC lookbook. "})]}),(0,o.jsxs)("div",{className:"tb_onsite_box_body",children:[C.ig||1==N.UgcSettings.choose_content_category?(0,o.jsxs)("div",{className:"tb_onsite_post_tabs",children:[1==N.UgcSettings.choose_content_category?(0,o.jsx)("div",{className:"tb_onsite_separator",children:"OR"}):null,(0,o.jsxs)("div",{className:"tb_onsite_tabs_nav",children:[C.ig||1==N.UgcSettings.choose_content_category||2==N.UgcSettings.choose_content_category?(0,o.jsx)("div",{className:"tb_onsite_tabs ".concat(1!=N.UgcSettings.choose_content_category?"active-single-tab":""," ").concat(1==e||2==N.UgcSettings.choose_content_category?" active":""),style:2==N.UgcSettings.choose_content_category?{width:"100%"}:{},onClick:this.hanleTab1,children:"Add Caption"}):null,C.ig||1==N.UgcSettings.choose_content_category||3==N.UgcSettings.choose_content_category?(0,o.jsx)("div",{className:"tb_onsite_tabs ".concat(1!=N.UgcSettings.choose_content_category?"active-single-tab":""," ").concat(2==e||3==N.UgcSettings.choose_content_category?" active":""),style:3==N.UgcSettings.choose_content_category?{width:"100%"}:{},onClick:this.hanleTab2,children:"Submit Review"}):null]})]}):null,(0,o.jsxs)("div",{className:"tb_onsite_tabs_content",children:[(0,o.jsx)(S,{updateImageWithData:this.updateImageWithData,isActiveIndex:t,addPostImage:this.addPostImage,item:i[t],onClickToImageRemove:this.onClickToImageRemove,onsite_token:w.onsite_token},i[t].thumb_file),1==e?(0,o.jsx)(r,{hasActive:this.handleNext,isActiveIndex:t,onClickToUpdateStep:this.onClickToUpdateStep,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:a,addCaption:this.addCaption,item:i[t]}):(0,o.jsx)(m,{isActiveIndex:t,onClickToUpdateStep:this.onClickToUpdateStep,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:a,addReview:this.addReview,item:i[t],addRatings:this.addRatings})]})]})]}):2==s?(0,o.jsx)(h,{termsCheck:this.termsCheck,submitError:f,submitErrorMessage:x,onClickToaddMore:this.onClickToaddMore,onSubmitPostData:this.onSubmitPostData,upload_image:i,isEdit:n,onClickToRemove:this.onClickToRemove,onTextName:this.onTextName,onTextEmail:this.onTextEmail,name:l,email:c,receiveMail:d,tandc:u,onUpdatereceiveMail:this.onUpdatereceiveMail,nameError:_,emailError:p,wall:N,onClickToEdit:this.onClickToEdit,apiRequest:b,errorClickMore:j}):3==s?(0,o.jsx)(y,{wall:N,onClosePopUp:I}):null]})})})}):(0,o.jsx)("div",{className:"onsite_submit_post_main",children:(0,o.jsxs)("div",{className:"tb_error_page wall_error",children:[(0,o.jsx)("div",{className:"tb_error_page_bg",style:T,children:" "}),(0,o.jsx)("div",{className:"tb_error_page_wrapper",children:(0,o.jsxs)("div",{className:"tb_error_content",children:[(0,o.jsx)("div",{className:"tb_error_title",children:"Thanks for Your Efforts!"}),(0,o.jsx)("div",{className:"tb_error_des",children:"Our review collection campaign has come to an end. We appreciate your interest. \ud83d\ude42"})]})})]})})}}const T=(0,a.$j)((e=>(void 0!=e.modalPop&&1==e.modalPop.onSiteIsShowPopUp&&(document.querySelector("html").style.overflow="hidden"),{modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,p.wg)(t)),onsiteTokenUpdate:t=>e((0,p.q3)(t))})))(w)},61729:(e,t,s)=>{"use strict";var i=s(79165);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,s,a,o,n){if(n!==i){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21827:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],i=!0,a=!1,o=void 0;try{for(var n,r=e[Symbol.iterator]();!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(l){a=!0,o=l}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),s=i(t,2),o=s[0],n=s[1],r=(0,a.useState)(e.size),l=i(r,2),c=l[0],d=l[1],u=(0,a.useState)(e.char),h=i(u,2),_=h[0],m=h[1],p=(0,a.useState)(e.color),g=i(p,2),v=g[0],b=g[1],f=(0,a.useState)(e.activeColor),x=i(f,2),S=x[0],y=x[1],j=(0,a.useState)(e.isHalf),k=i(j,2),C=k[0],N=k[1],w=(0,a.useState)(e.edit),T=i(w,2),I=T[0],M=T[1],U=(0,a.useState)(e.emptyIcon),A=i(U,2),E=A[0],P=A[1],R=(0,a.useState)(e.halfIcon),H=i(R,2),O=H[0],z=H[1],q=(0,a.useState)(e.filledIcon),D=i(q,2),W=D[0],L=D[1],F=(0,a.useState)(e.a11y),Z=i(F,2),B=Z[0],Y=Z[1];return[{count:o,size:c,char:_,color:v,activeColor:S,isHalf:C,edit:I,emptyIcon:E,halfIcon:O,filledIcon:W,a11y:B},function(e){n(e.count),d(e.size),m(e.char),b(e.color),y(e.activeColor),N(e.isHalf),M(e.edit),P(e.emptyIcon),z(e.halfIcon),L(e.filledIcon),Y(e.a11y)}]};var a=s(47313)},97626:(e,t,s)=>{"use strict";var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],i=!0,a=!1,o=void 0;try{for(var n,r=e[Symbol.iterator]();!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(l){a=!0,o=l}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=s(47313),o=c(a),n=c(s(75192)),r=c(s(21827)),l=c(s(33972));function c(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function h(e){var t=(0,a.useState)(""),s=i(t,2),n=s[0],c=s[1],h=(0,a.useState)(0),_=i(h,2),m=_[0],p=_[1],g=(0,a.useState)([]),v=i(g,2),b=v[0],f=v[1],x=(0,a.useState)(!1),S=i(x,2),y=S[0],j=S[1],k=(0,r.default)(e),C=i(k,2),N=C[0],w=C[1],T=(0,a.useState)(0),I=i(T,2),M=I[0],U=I[1],A=(0,a.useState)(!1),E=i(A,2),P=E[0],R=E[1],H=(0,a.useState)(""),O=i(H,2),z=O[0],q=O[1];function D(e){"undefined"===typeof e&&(e=N.isHalf?Math.floor(m):Math.round(m));for(var t=[],s=0;s<N.count;s++)t.push({active:s<=e-1});return t}function W(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(N.isHalf){var s=L(e);R(s),s&&(t+=1),U(t)}else t+=1;!function(e){var t=b.filter((function(e){return e.active}));e!==t.length&&f(D(e))}(t)}}function L(e){var t=e.target.getBoundingClientRect(),s=e.clientX-t.left;return(s=Math.round(Math.abs(s)))>t.width/2}function F(){N.edit&&(Z(m),f(D()))}function Z(e){N.isHalf&&(R(function(e){return e%1===0}(e)),U(Math.floor(e)))}function B(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index")),s=void 0;if(N.isHalf){var i=L(e);R(i),i&&(t+=1),s=i?t:t+.5,U(t)}else s=t+=1;Y(s)}}function Y(t){t!==m&&(f(D(t)),p(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,s;!function(){var t="react-stars";q(e.classNames+" "+t)}(),t=e.value,s=e.count,p(t<0||t>s?0:t),f(D(e.value)),w(e),c((Math.random()+"").replace(".","")),j(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),U(Math.floor(e.value)),R(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+n,style:{display:"flex"}},o.default.createElement("div",{tabIndex:N.a11y&&N.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(N.a11y||N.edit){var t=e.key,s=m,i=Number(t);i?Number.isInteger(i)&&i>0&&i<=N.count&&(s=i):("ArrowUp"===t||"ArrowRight"===t)&&s<N.count?(e.preventDefault(),s+=N.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&s>.5&&(e.preventDefault(),s-=N.isHalf?.5:1),Z(s),Y(s)}},className:z,style:d},N.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:y?(e=N.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(N.activeColor,n)}});var e}(),b.map((function(e,t){return o.default.createElement(l.default,{key:t,index:t,active:e.active,config:N,onMouseOver:W,onMouseLeave:F,onClick:B,halfStarHidden:P,halfStarAt:M,isUsingIcons:y,uniqueness:n})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},m)))}h.propTypes={classNames:n.default.string,edit:n.default.bool,half:n.default.bool,value:n.default.number,count:n.default.number,char:n.default.string,size:n.default.number,color:n.default.string,activeColor:n.default.string,emptyIcon:n.default.element,halfIcon:n.default.element,filledIcon:n.default.element,a11y:n.default.bool},h.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.Z=h},33972:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e};t.default=function(e){var t=e.index,s=e.active,a=e.config,o=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,h=e.isUsingIcons,_=e.uniqueness,m=a.color,p=a.activeColor,g=a.size,v=a.char,b=a.isHalf,f=a.edit,x=a.halfIcon,S=a.emptyIcon,y=a.filledIcon,j="",k=!1;b&&!d&&u===t&&(j=h?"react-stars-half":"react-stars-"+_,k=!0);var C=i({},r,{color:s?p:m,cursor:f?"pointer":"default",fontSize:g+"px"});return n.default.createElement("span",{className:j,style:C,key:t,"data-index":t,"data-forhalf":y?t:v,onMouseOver:o,onMouseMove:o,onMouseLeave:l,onClick:c},h?s?y:!s&&k?x:S:v)};var a,o=s(47313),n=(a=o)&&a.__esModule?a:{default:a};var r={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}}]);