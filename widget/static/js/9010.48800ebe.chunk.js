"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9010],{18748:(e,t,i)=>{i.r(t),i.d(t,{Loader:()=>S,default:()=>z});var s=i(47313),o=i(31881),a=i.n(o),l=i(68375),r=(i(19161),i(30192)),d=i.n(r),n=i(66266),p=i.n(n),h=i(35179);const c=h.ig?"cloud.tagshop.ai":"cloud.tagbox.com";const u=class{constructor(e,t,i){let s="media/tmpimages/",o=c;h.nX&&(s="ugc-suite/tmp/",o="cloud.tagbox.com"),h.ig&&(s="tmp/"),this.uppy=new(d())({meta:{type:"avatar"},autoProceed:!0,debug:!0,allowMultipleUploads:!0,restrictions:{maxFileSize:104857600,maxNumberOfFiles:i||1,minNumberOfFiles:1,allowedFileTypes:["image/*","video/*"]},onBeforeFileAdded:e,onBeforeUpload:t}),this.uppy.use(p(),{params:{auth:{key:"0701d3d7f8d94e92a65a9cba388b1d96"},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",result:!0,bucket:o,key:"47ABVORKG52UYE1KB28S",secret:"pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",path:s+"${file.id}.${file.ext}"}}},waitForEncoding:!0})}};var m=i(17739),f=i(98501),g=i(16031),x=i.n(g),y=i(46417);const S=e=>{let{value:t,isBar:i}=e;const s=Math.round((100-t)/100*182.12);return i?(0,y.jsx)("div",{className:"t_m_pb_wrap",children:(0,y.jsx)("div",{className:"t_m_pb",style:{width:"".concat(t,"%")},children:(0,y.jsx)("div",{})})}):(0,y.jsx)("div",{className:"t_m_propgress",children:(0,y.jsxs)("svg",{width:"78",height:"78",viewBox:"-10 -10 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(-90deg)"},children:[(0,y.jsx)("circle",{r:"30",cx:"40",cy:"40",fill:"transparent",stroke:"#D9D9D9",strokeWidth:"4",strokeDasharray:"188.4px",strokeDashoffset:"0"}),(0,y.jsx)("circle",{id:"path_fr_circle",r:"30",cx:"40",cy:"40",stroke:"#545454",strokeWidth:"4",strokeLinecap:"butt",strokeDashoffset:"".concat(s,"px"),fill:"transparent",strokeDasharray:"188.4px"}),(0,y.jsxs)("text",{x:"25px",y:"47px",fill:"#545454",fontSize:"14px",style:{transform:"rotate(90deg) translate(17px, -84px)"},textAnchor:"middle",dominantBaseline:"middle",children:[t,"%"]})]})})};let b=[],v=[];class w extends s.Component{constructor(){super(...arguments),this.state={isLoading:!1,selectedFile:null,selectedUrl:null,type:null,thumb_file:[],fileSize:!1,filemaxSize:0,throwError:!1,videoPath:"",fileSizeText:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0,uploadPercent:0,limit:20,uploadedFiles:[]},this.beforeFileAdded=(e,t)=>{if(v.length>0){if(v.find((t=>t.id==e.id)))return!1}(0,m.AB)(1);const{size:i,sizeText:s}=(0,m.RD)(e.size);if(["GB","TB"].includes(s)){const t=e.meta.type.includes("image")?4:5;this.setState({type:t,fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>{this.onLoadError(t),setTimeout((()=>this.setState({fileSize:!1,fileSizeText:""})),2e3)})),(0,m.AB)(2)}else if("MB"==s){const t=e.meta.type.includes("image")?4:5,o=4==t?15:100;if(i>=o)return this.setState({type:t,filemaxSize:o,fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>{this.onLoadError(t),setTimeout((()=>this.setState({fileSize:!1,fileSizeText:"",type:null},(()=>this.onLoadError(t)))),5e3)})),(0,m.AB)(2),!1;5==t?v.length<20&&(b.push(e),v.push(e)):v.length<20&&v.push(e)}else"KB"==s&&e.meta.type.includes("image")&&v.length<20&&v.push(e)},this.beforeUpload=e=>{for(const t of v)if(t.meta.type.includes("video")){this.videoProcess();break}return this.setState({isLoading:!0}),Object.fromEntries(Object.entries(e).filter((e=>{let[t,i]=e;return!i.meta.type.includes("video")})))},this.videoProcess=()=>{if(b.length>0&&v.length<=20)try{const{onsite_token:e}=this.props;this.setState({isLoading:!0});const t=b[0],i=new FormData;i.append("file",t.data),i.append("onsite_token",e);const s={headers:{productdomain:"taggbox.com"},onUploadProgress:e=>{const t=Math.round(100*e.loaded/e.total);this.setState({uploadPercent:t,isLoading:!0})}};a().post(h.so,i,s).then((e=>{const{responseData:i}=e.data;i&&i.length>0&&(this.setState((e=>({videoPath:i[0].sscode,isLoading:!1,type:5,selectedFile:i[0].s3Url,selectedUrl:i[0].s3Url,thumb_file:i[0].s3ThumbUrl,ext:t.extension,size:t.size,fileName:t.name,mediaHeight:i[0].height,mediaWidth:i[0].width,uploadedFiles:[...e.uploadedFiles,{name:t.name,url:i[0].s3Url,id:t.id}]})),(()=>{this.onUpdateLocalState(),b.shift(),this.videoProcess()})),(0,m.AB)(2))})).catch((e=>{v=v.filter((e=>e.id!=t.id)),this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),(0,m.AB)(2)}))}catch(e){this.videoProcess(),this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),this.uppyUploader.uppy.reset(),(0,m.AB)(2)}},this.uppyUploader=new u(this.beforeFileAdded,this.beforeUpload,this.state.limit),this.onRemovedState=e=>{const{type:t}=this.state;this.setState({selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,fileSizeText:"",videoPath:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0},(()=>{this.onLoadError(t),e&&this.uppyUploader.uppy.reset()}))},this.onUpdateLocalState=()=>{const{addPostImage:e,isActiveIndex:t}=this.props,{selectedUrl:i,type:s,thumb_file:o,videoPath:a,ext:l,size:r,fileName:d,mediaHeight:n,mediaWidth:p,uploadedFiles:h}=this.state;e(i,5===s?o:i,a,s,t,l,r,d,n,p),5===s&&this.onRemovedState(!1)},this.onLoadError=e=>{const{uploadErrorCallback:t}=this.props,{fileSize:i,fileSizeText:s,filemaxSize:o,throwError:a}=this.state,l=i?"File Size (".concat(s,") Limit Exceeded ").concat(4==e?"Image":"Video"," Size : Max ").concat(o," MB"):"",r=a?"Something went wrong , Please try again.":"";t(l||(r||""))}}componentDidMount(){this.uppyUploader.uppy.on("transloadit:result",((e,t)=>{this.setState({isLoading:!1});const i=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.width:t.meta.height,s=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.height:t.meta.width;let o="".concat(f.ho,"media/tmpimages/");h.nX&&(o="https://cloud.tagbox.com/ugc-suite/tmp/"),h.ig&&(o="https://cloud.tagshop.ai/tmp/"),this.setState((e=>({type:t.mime.includes("video")?5:4,selectedFile:t.id,selectedUrl:"".concat(o).concat(t.id,".").concat(t.ext),ext:t.ext,size:t.size,fileName:t.name,mediaHeight:i,mediaWidth:s,uploadedFiles:[...e.uploadedFiles,{name:t.name,url:"".concat(o).concat(t.id,".").concat(t.ext),id:t.localId}]})),(()=>this.onUpdateLocalState())),(0,m.AB)(2)})),this.uppyUploader.uppy.on("file-removed",((e,t)=>{(0,m.AB)(2)})),this.uppyUploader.uppy.on("upload-progress",((e,t)=>{this.setState({uploadPercent:(t.bytesUploaded/t.bytesTotal*100).toFixed()})})),this.uppyUploader.uppy.on("upload-error",((e,t)=>{this.setState({throwError:!0})})),this.uppyUploader.uppy.on("upload-complete",((e,t)=>{this.onRemovedState(!0)}))}componentDidUpdate(e){const{removedFile:t}=this.props,{uploadedFiles:i}=this.state;if(!x().isEqual(t,e.removedFile)&&v.length>0){const e=i.find((e=>e.url==t.video));if(e&&Object.keys(e).length>0){5!=t.type&&this.uppyUploader.uppy.reset();const i=v.find((t=>t.id==e.id));i&&(v=v.filter((e=>e.id!==i.id))),this.setState((e=>({uploadedFiles:e.uploadedFiles.filter((e=>e.url!==t.video))})))}}}render(){const{isLoading:e,fileSize:t,throwError:i,fileSizeText:s,filemaxSize:o,type:a,uploadPercent:r,limit:d}=this.state,{upload_image:n}=this.props;return n&&n.length<20?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:"t_m_upload ".concat(n&&n.length<1?"t_m_dd":""),children:(0,y.jsx)("div",{className:"t_m_up_wrp",children:n&&n.length<1?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.v0,{note:"Video Size : Max 100MB | Photo Size : Max 15MB | Max 20 Posts",uppy:this.uppyUploader.uppy,inline:!0,maxNumberOfFiles:d,width:"100%",height:"auto",locale:{strings:{dropHereOr:"Drag a video / image to upload (optional)",browse:""}}}),e?(0,y.jsx)(S,{value:r,isBar:!0}):null]}):e?(0,y.jsx)(S,{value:r,isBar:!1}):(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(l.S2,{uppy:this.uppyUploader.uppy,allowMultipleFiles:!0,locale:{strings:{browse:"browse"}}})})})})}):null}}const z=w}}]);