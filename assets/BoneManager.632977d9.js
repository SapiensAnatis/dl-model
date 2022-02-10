var Re=Object.defineProperty,He=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ye=(e,t,o)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))xe.call(t,o)&&ye(e,o,t[o]);if(K)for(var o of K(t))Ce.call(t,o)&&ye(e,o,t[o]);return e},L=(e,t)=>He(e,_e(t));var $=(e,t)=>{var o={};for(var l in e)xe.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&K)for(var l of K(e))t.indexOf(l)<0&&Ce.call(e,l)&&(o[l]=e[l]);return o};/* empty css               */import{a as v,j as a,r as ne,F as M,m as Oe,h as Ve,c as Ee,B as je,v as ae,b as Ge}from"./index.1945fac9.js";import{M as Ue}from"./ModelIcon.9590168c.js";import{A as G}from"./Accordion.86cf67f8.js";import{a7 as ie,s as se,ad as qe,ab as w,y as X,aa as re,ai as Ke,aj as oe}from"./vendor.5500c094.js";import{a as Xe,b as Ye,S as Ne,T as ce,u as Te}from"./Gallery.ea2527ad.js";import{M as de,T as Qe}from"./filterConfig.5c5495a6.js";import{g as pe,b as ue,s as F,B as Je,a as x,_ as me,h as he,i as j,c as N,d as ke,f as ze,o as ge,p as Ze,q as et}from"./ButtonBase.11ccdb12.js";import{a as tt,B as at,M as ot,P as $e,F as lt,b as nt}from"./Popover.2e8d60a9.js";import{C as it}from"./ColorButton.8c79d5b4.js";import{S as st,B as rt,b as ct,a as dt,P as pt,c as ut}from"./SkipPrevious.75d4f865.js";import{u as Y}from"./useKey.14ec2dfd.js";import{I as ve,C as Q}from"./Close.ec36b812.js";import{c as P}from"./createSvgIcon.817f0bd1.js";import{B as g}from"./Button.e37b57bc.js";import{B as mt}from"./Box.df33ad7b.js";import{D as ht}from"./DialogTitle.8282836d.js";import{F as vt}from"./FaceSelect.c5a14e47.js";import{F as bt}from"./FaceTexture.7ac8bf8c.js";import{u as Me}from"./useToggleState.83fd3b92.js";import{G as ft}from"./GlowToggle.ce2a4f9a.js";import{A as St}from"./AddWeapon.cd6b26b1.js";function yt(e){return pe("PrivateSwitchBase",e)}ue("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const xt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ct=e=>{const{classes:t,checked:o,disabled:l,edge:n}=e,i={root:["root",o&&"checked",l&&"disabled",n&&`edge${N(n)}`],input:["input"]};return he(i,yt,t)},kt=F(Je)(({ownerState:e})=>x({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),gt=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Mt=ie(function(t,o){const{autoFocus:l,checked:n,checkedIcon:i,className:c,defaultChecked:s,disabled:r,disableFocusRipple:d=!1,edge:u=!1,icon:h,id:m,inputProps:p,inputRef:b,name:y,onBlur:f,onChange:C,onFocus:T,readOnly:H,required:_,tabIndex:U,type:D,value:q}=t,I=me(t,xt),[W,O]=tt({controlled:n,default:Boolean(s),name:"SwitchBase",state:"checked"}),A=Xe(),J=B=>{T&&T(B),A&&A.onFocus&&A.onFocus(B)},V=B=>{f&&f(B),A&&A.onBlur&&A.onBlur(B)},Z=B=>{if(B.nativeEvent.defaultPrevented)return;const Se=B.target.checked;O(Se),C&&C(B,Se)};let z=r;A&&typeof z=="undefined"&&(z=A.disabled);const We=D==="checkbox"||D==="radio",ee=x({},t,{checked:W,disabled:z,disableFocusRipple:d,edge:u}),fe=Ct(ee);return v(kt,x({component:"span",className:j(fe.root,c),centerRipple:!0,focusRipple:!d,disabled:z,tabIndex:null,role:void 0,onFocus:J,onBlur:V,ownerState:ee,ref:o},I,{children:[a(gt,x({autoFocus:l,checked:n,defaultChecked:s,className:fe.input,disabled:z,id:We&&m,name:y,onChange:Z,readOnly:H,ref:b,required:_,ownerState:ee,tabIndex:U,type:D},D==="checkbox"&&q===void 0?{}:{value:q},p)),W?i:h]}))});var wt=Mt;function Pt(e){return pe("MuiDialog",e)}const Nt=ue("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var te=Nt;const Tt=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],zt=F(at,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),$t=e=>{const{classes:t,scroll:o,maxWidth:l,fullWidth:n,fullScreen:i}=e,c={root:["root"],container:["container",`scroll${N(o)}`],paper:["paper",`paperScroll${N(o)}`,`paperWidth${N(String(l))}`,n&&"paperFullWidth",i&&"paperFullScreen"]};return he(c,Pt,t)},At=F(ot,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Ft=F("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.container,t[`scroll${N(o.scroll)}`]]}})(({ownerState:e})=>x({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Bt=F($e,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`scrollPaper${N(o.scroll)}`],t[`paperWidth${N(String(o.maxWidth))}`],o.fullWidth&&t.paperFullWidth,o.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>x({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${te.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${te.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${te.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Lt={enter:ke.enteringScreen,exit:ke.leavingScreen},Dt=ie(function(t,o){const l=ze({props:t,name:"MuiDialog"}),{"aria-describedby":n,"aria-labelledby":i,BackdropComponent:c,BackdropProps:s,children:r,className:d,disableEscapeKeyDown:u=!1,fullScreen:h=!1,fullWidth:m=!1,maxWidth:p="sm",onBackdropClick:b,onClose:y,open:f,PaperComponent:C=$e,PaperProps:T={},scroll:H="paper",TransitionComponent:_=lt,transitionDuration:U=Lt,TransitionProps:D}=l,q=me(l,Tt),I=x({},l,{disableEscapeKeyDown:u,fullScreen:h,fullWidth:m,maxWidth:p,scroll:H}),W=$t(I),O=se(),A=z=>{O.current=z.target===z.currentTarget},J=z=>{!O.current||(O.current=null,b&&b(z),y&&y(z,"backdropClick"))},V=Ye(i),Z=qe(()=>({titleId:V}),[V]);return a(At,x({className:j(W.root,d),BackdropProps:x({transitionDuration:U,as:c},s),closeAfterTransition:!0,BackdropComponent:zt,disableEscapeKeyDown:u,onClose:y,open:f,ref:o,onClick:J,ownerState:I},q,{children:a(_,x({appear:!0,in:f,timeout:U,role:"presentation"},D,{children:a(Ft,{className:j(W.container),onMouseDown:A,ownerState:I,children:a(Bt,x({as:C,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":V},T,{className:j(W.paper,T.className),ownerState:I,children:a(ht.Provider,{value:Z,children:r})}))})}))}))});var It=Dt;function Wt(e){return pe("MuiSwitch",e)}const Rt=ue("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var k=Rt;const Ht=["className","color","edge","size","sx"],_t=e=>{const{classes:t,edge:o,size:l,color:n,checked:i,disabled:c}=e,s={root:["root",o&&`edge${N(o)}`,`size${N(l)}`],switchBase:["switchBase",`color${N(n)}`,i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},r=he(s,Wt,t);return x({},t,r)},Ot=F("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${N(o.edge)}`],t[`size${N(o.size)}`]]}})(({ownerState:e})=>x({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${k.thumb}`]:{width:16,height:16},[`& .${k.switchBase}`]:{padding:4,[`&.${k.checked}`]:{transform:"translateX(16px)"}}})),Vt=F(wt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${k.input}`]:t.input},o.color!=="default"&&t[`color${N(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${k.checked}`]:{transform:"translateX(20px)"},[`&.${k.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${k.checked} + .${k.track}`]:{opacity:.5},[`&.${k.disabled} + .${k.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${k.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>x({"&:hover":{backgroundColor:ge(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${k.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:ge(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.disabled}`]:{color:e.palette.mode==="light"?Ze(e.palette[t.color].main,.62):et(e.palette[t.color].main,.55)}},[`&.${k.checked} + .${k.track}`]:{backgroundColor:e.palette[t.color].main}})),Et=F("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),jt=F("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Gt=ie(function(t,o){const l=ze({props:t,name:"MuiSwitch"}),{className:n,color:i="primary",edge:c=!1,size:s="medium",sx:r}=l,d=me(l,Ht),u=x({},l,{color:i,edge:c,size:s}),h=_t(u),m=a(jt,{className:h.thumb,ownerState:u});return v(Ot,{className:j(h.root,n),sx:r,ownerState:u,children:[a(Vt,x({type:"checkbox",icon:m,checkedIcon:m,ref:o,ownerState:u},d,{classes:x({},h,{root:h.switchBase})})),a(Et,{className:h.track,ownerState:u})]})});var Ut=Gt,be=P(a("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),qt=P(a("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),"Attachment"),Ae=P(a("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"}),"AutoAwesome"),Kt=P([a("path",{d:"M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"},"0"),a("circle",{cx:"12",cy:"12",r:"3"},"1")],"ControlCamera"),Xt=P(a("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"}),"CropOriginal"),Fe=P(a("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun"),Yt=P(a("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}),"Extension"),Be=P(a("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face"),Qt=P(a("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"Mood"),Jt=P(a("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull"),Zt=P(a("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonOutlined"),ea=P(a("path",{d:"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}),"Storage"),ta=P(a("path",{d:"M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"}),"Texture"),aa=P(a("path",{d:"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"}),"ThreeSixty");function Le(n){var i=n,{options:e,value:t,onChange:o}=i,l=$(i,["options","value","onChange"]);return a(Ne,L(S({className:"SelectBox",value:t,onChange:s=>o(s.target.value)},l),{children:e.map(({value:s,label:r=s,title:d})=>a(de,{value:s,title:d,children:r}))}))}function oa(r){var d=r,{target:e,keyList:t,labels:o=[],scale:l=1,inputProps:n={},onBeforeChange:i=void 0,onChange:c=void 0}=d,s=$(d,["target","keyList","labels","scale","inputProps","onBeforeChange","onChange"]);const u=t.map(b=>e[b]/l),[h,m]=w(u),p=b=>{const y=parseInt(b.currentTarget.getAttribute("index")),f=parseFloat(b.currentTarget.value);if(isNaN(f))return;let C;m(_=>(C=[..._],C[y]=f,C));const T=f*l,H=t[y];i==null||i(C),e[H]=T,c==null||c(C)};return a("div",L(S({className:"SetNumbers"},s),{children:t.map((b,y)=>{var f;return a(ce,{className:"SetNumbers-number",onChange:p,value:h[y],label:(f=o[y])!=null?f:b,size:"small",margin:"dense",variant:"outlined",inputProps:S({type:"number",index:y},n)},b)})}))}const la=["x","y","z","w"];function le(s){var r=s,{target:e,dimension:t=3,scale:o=1,min:l,max:n,step:i}=r,c=$(r,["target","dimension","scale","min","max","step"]);const d=la.slice(0,t);return a(oa,S({target:e,keyList:d,scale:o,inputProps:{min:l,max:n,step:i},className:"SetVector SetNumbers","data-dimension":t},c))}const na=(e,t=-1/0,o=1/0)=>{if(e===void 0)return;let l=e;return l<t&&(l=t),l>o&&(l=o),l};function De(d){var u=d,{target:e,propName:t,label:o,min:l,max:n,step:i=1,onBeforeChange:c,onChange:s}=u,r=$(u,["target","propName","label","min","max","step","onBeforeChange","onChange"]);const[h,m]=w(e[t]);return a("div",{className:"SetNumber",children:a(ce,S({onChange:b=>{if(!b.currentTarget.value)return;const y=parseFloat(b.currentTarget.value)||l;let f=na(y,l,n);m(f),c==null||c(f),e[t]=f,s==null||s(f)},value:h,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",min:l,max:n,step:i}},r))})}function ia(s){var r=s,{target:e,propName:t,label:o,inputProps:l={},onBeforeChange:n,onChange:i}=r,c=$(r,["target","propName","label","inputProps","onBeforeChange","onChange"]);const[d,u]=w(e[t]);return a("div",{className:"SetString",children:a(ce,S({onChange:m=>{const p=m.currentTarget.value;u(p),n==null||n(p),e[t]=p,i==null||i(p)},value:d,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:l},c))})}function sa({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,i]=w(e[t]);return a("div",{className:"SetBoolean",children:a(Ut,{onChange:()=>{const s=!n;i(s),o==null||o(s),e[t]=s,l==null||l(s)},checked:n})})}function ra({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,i]=w(e[t]),{inputColor:c}=ne(),s=async()=>{const r=await c();!r||(i(r),o==null||o(r),e[t]=r,l==null||l(r))};return a("div",{className:"SetColor",children:a(it,{color:n.startsWith("#")?n:"#"+n,onClick:s,style:{border:"1px solid rgba(255, 255, 255, 0.5)"}})})}function ca(s){var r=s,{target:e,propName:t,label:o,options:l,onBeforeChange:n,onChange:i}=r,c=$(r,["target","propName","label","options","onBeforeChange","onChange"]);const[d,u]=w(e[t]);return a("div",{className:"SetFromList",children:a(Le,S({onChange:m=>{u(m),n==null||n(m),e[t]=m,i==null||i(m)},options:l,value:d,size:"small",margin:"dense"},c))})}function da(h){var m=h,{target:e,propName:t,label:o=t,title:l,valueMap:n=String,min:i=0,max:c=1,step:s=.01,onBeforeChange:r,onChange:d}=m,u=$(m,["target","propName","label","title","valueMap","min","max","step","onBeforeChange","onChange"]);const[p,b]=w(e[t]),y=(C,T)=>{b(T),r==null||r(T),e[t]=T,d==null||d(T)},f=`${o}: ${n(p)}`;return v(M,{children:[a("div",{className:"Setters-label",title:l,children:f}),a("div",{className:"Setters-slider",children:a(st,S({size:"small",value:p,min:i,max:c,step:s,onChange:y},u))})]})}function R({target:e,propList:t}){const o=t.map(l=>{const u=l,{propName:n,label:i=n,title:c,type:s}=u,r=$(u,["propName","label","title","type"]),d=pa[s];switch(s){case"slider":return a(da,S({target:e,propName:n,label:i,title:c},r));case"vector":return v(M,{children:[a("div",{className:"Setters-label vector",title:c,children:i}),a(le,S({target:e[n]},r))]});default:return v(M,{children:[a("div",{className:"Setters-label",title:c,children:i}),a(d,S({target:e,propName:n},r))]})}});return a("div",{className:"Setters",children:o})}const pa={boolean:sa,number:De,string:ia,color:ra,select:ca};function ua({target:e,name:t}){if(!e)return null;const o=e.list.map(n=>({value:n}));o.push({value:"None"});const l=[{propName:"current",label:t.replaceAll("_"," "),type:"select",options:o}];return a(R,{target:e,propList:l})}function ma({list:e}){const t=e.map(({name:s})=>s),o=s=>e.find(({name:r})=>r===s),l=Object.fromEntries(t.map(s=>{var r;return[s,(r=o(s))==null?void 0:r.visible]})),[n,i]=w(l);return a(Qe,{name:"",options:t,type:"text",state:n,toggle:(s,r)=>{const d=!n[r];i(L(S({},n),{[r]:d})),o(r).visible=d}})}function ha({target:e}){const{parts:t}=e;if(!t)return null;const{list:o,others:l}=t;return v("div",{className:"BodyPartsController",children:[o.map(n=>a(ua,{target:t[n],name:n})),l.length&&v(G,{children:[a(M,{children:o.length?"Other Parts":"Body Parts"}),a(ma,{list:l})]})]})}const va=[{value:"img/textures/particle/cloud.png",label:"Cloud"},{value:"img/textures/particle/smoke.png",label:"Smoke"},{value:"img/textures/particle/heart.png",label:"Heart"}],ba=[{propName:"visible",label:"Visible",type:"boolean"},{propName:"speed",label:"Speed",type:"slider",title:"How fast the aura rises",min:0,max:10,step:.5},{propName:"auraSize",label:"Aura Size",type:"number",title:"How big the aura is",min:0,step:10},{propName:"auraOpacity",label:"Aura Opacity",type:"slider",title:"How opaque the aura is",min:0,max:1,step:.05},{propName:"particleSize",label:"Particle Size",type:"number",title:"How big the particles are",min:0,step:1},{propName:"particleOpacity",label:"Particle Opacity",type:"slider",title:"How opaque the particles are",min:0,max:1,step:.05},{propName:"spread",label:"Spread",type:"number",title:"Distance from the model",min:0,step:1},{propName:"threshold",label:"Threshold",type:"slider",title:"Higher value means less aura, more particles",min:0,max:.7,step:.05},{propName:"color",label:"Color",type:"color"},{propName:"color2",label:"Color 2",type:"color"},{propName:"texture",label:"Texture",type:"select",options:va}];function fa({target:e}){const{name:t}=e,l=a(ve,{title:"Remove",className:"closeButton",onClick:n=>{n.stopPropagation(),e.dispose()},children:a(Q,{})});return v(G,{disableGutters:!0,className:"AuraController",children:[v(M,{children:[t,l]}),a(R,{target:e,propList:ba})]})}function Sa({target:e}){const{particle:t}=e,[o,l]=Y();X(()=>{const{list:i}=t,c=i.addEventListener("change",l);return()=>i.removeEventListener("change",c)},[]);const n=i=>{i.stopPropagation(),t.add(),l()};return v(G,{disableGutters:!0,className:"ParticleController",children:[v(M,{children:[v("div",{className:"title",children:[a(Ae,{}),"Particles"]}),a(g,{onClick:n,title:"Add particles",variant:"contained",children:a(be,{})})]}),a(re.Fragment,{children:t.list.length?t.list.map((i,c)=>a(fa,{target:i},o+c)):"Click + to add particles"},o)]})}const ya=({onClick:e,color:t="#101010",title:o})=>a(mt,{position:"absolute",top:0,right:0,children:a(ve,{sx:{color:t,zIndex:5},onClick:e,size:"large",title:o,children:a(Q,{})})}),xa={sx:{margin:"0.3rem",minWidth:"12rem",minHeight:"12rem",maxHeight:"calc(100% - 2rem)"}},Ie=n=>{var i=n,{children:e,open:t,closeModal:o}=i,l=$(i,["children","open","closeModal"]);return t?Ke(v(It,L(S({className:"Modal",maxWidth:"lg",open:t,onClose:o,PaperProps:xa},l),{children:[a(ya,{onClick:o,title:"Close"}),e]})),document.getElementById("modal-root")):a(M,{})};const Ca={face:vt,faceTexture:bt};function ka({target:e}){var r;const t=e==null?void 0:e.face;if(!t)return a(oe,{});const[o,l]=w(""),n=()=>l(""),i=(r=Ca[o])!=null?r:oe,c=d=>{const{value:u}=d.currentTarget.dataset;l(u)},s=(...d)=>{const[u,h]=d;switch(o){case"face":e.face[`${h}BaseIdx`]=u;return;case"faceTexture":e.face[`${h}Texture`]=u;return;default:return}};return v("div",{className:"FaceController",children:[a(g,{variant:"contained",startIcon:a(Qt,{}),onClick:c,"data-value":"face",children:"Facial Expresion"}),t.type==="uv"&&a(g,{variant:"contained",startIcon:a(Be,{}),onClick:c,"data-value":"faceTexture",children:"Face Texture"}),a(Ie,{closeModal:n,open:!!o,children:a(i,{target:e,onSelect:s,onAfterSelect:n})})]})}const ga={backgroundColor:"#101010",color:"#ccc","& li:not(:last-child)":{borderBottom:"1px solid #ffffff33"},"& li[data-current]":{backgroundColor:"#202020",color:"#fff",borderColor:"#fff"},"& li:hover":{backgroundColor:"#ffffff33"}};function Ma({target:e,isReverse:t}){const{animation:o}=e,l=Math.abs(o.mixer.timeScale),[n,i]=w(l),[c,s]=w(null),r=m=>{m.stopPropagation(),s(m.currentTarget)},d=()=>s(null),u=Array(8).fill().map((m,p)=>p*.25+.25),h=m=>{const{value:p}=m.target.dataset;o.mixer.timeScale=t?-p:p,i(parseFloat(p)),d()};return v(M,{children:[a(g,{title:"Time Scale",onClick:r,children:`${n}x`}),a(nt,{anchorEl:c,open:!!c,onClose:d,className:"TimeScaleSelect",PaperProps:{sx:ga},children:u.map(m=>a(de,{onClick:h,"data-value":m,"data-current":m===n,children:`${m}x`}))})]})}function wa({target:e}){const{animation:t}=e,[o,l]=Me(t.isPaused),[n,i]=Me(t.mixer.timeScale<0),c=()=>{o?t.resume():t.pause(),l()},s=()=>{t.mixer.timeScale*=-1,i()},r=d=>{const{dir:u}=d.currentTarget.dataset,h=u==="next"?1:-1,p=1/60*h;o?(t.resume(),t.update(p),t.pause()):t.update(p)};return v("div",{className:"ModelTimeControl",children:[v(rt,{children:[a(g,{variant:"contained","data-dir":"prev",onClick:r,title:"Previous Frame",children:a(ct,{})}),a(g,{variant:"contained",onClick:c,title:o?"Resume":"Pause",children:o?a(dt,{}):a(pt,{})}),a(g,{variant:"contained","data-dir":"next",onClick:r,title:"Next Frame",children:a(ut,{})})]}),a(ft,{type:"text",value:"Reverse",checked:n,onClick:s}),a(Ma,{isReverse:n,target:e})]})}function Pa({target:e}){const{inputAni:t}=ne(),{toggle:o,setTarget:l}=Oe(),{loadState:n}=Ve(),i=async()=>{var p,b;n(e==null?void 0:e.userData.aniSelectState);const r=await t();if(!r)return;const d=e==null?void 0:e.animation.isPaused,[u,h]=r;e==null||e.animation.addChain(u).then(()=>d&&e.animation.pause());const m=Ee(u,h);(e==null?void 0:e.userData)&&((b=(p=e.userData.chain)==null?void 0:p.splice(0,1/0,...m))!=null||(e.userData.chain=m))},c=()=>{var r,d;(r=e==null?void 0:e.animation)==null||r.reset(),(d=e==null?void 0:e.userData)==null||d.chain.splice(0,1/0)},s=()=>{l(e),n(e==null?void 0:e.userData.aniSelectState),o()};return v("div",{className:"AnimationController",children:[a(wa,{target:e}),a(g,{variant:"contained",startIcon:a(Fe,{}),onClick:i,title:"Add Animation",children:"Add Animation"}),a(g,{variant:"contained",startIcon:a(ea,{}),onClick:s,title:"Open Chain Maker",children:"Chain Maker"}),a(g,{variant:"contained",startIcon:a(Q,{}),onClick:c,title:"Remove Animation",children:"Reset"})]})}function Na({target:e}){var h,m;if(!e)return a(M,{});const{inputModel:t}=ne(),o=["root",...(m=(h=e==null?void 0:e.bones)==null?void 0:h.list)!=null?m:[]],[l,n]=w(o[0]),i=je(e.attachment.list.map(p=>p.parentBone)),[c,s]=Y();X(()=>e==null?void 0:e.addEventListener("AttachmentChanged",s),[]);const r=p=>n(p.target.value),d=async(p=l)=>{const b=await t();if(!b)return;const[y,f]=b,C=await ae.loadDLModel(y);C.userData.name=f,e.attach(C,p==="root"?void 0:p),C.outline.code=e.outline.code,C.material.code=e.material.code,ae.render()},u=()=>d();return v(re.Fragment,{children:[v("div",{className:"AttachmentController-add",children:[a(Ne,{className:"AttachmentController-select",onChange:r,value:l,children:o.map(p=>a(de,{value:p,children:p},p))}),a(g,{title:"Add attachment to selected joint",variant:"contained",onClick:u,children:a(be,{})})]}),a("div",{className:"AttachmentList",children:i.map(p=>a(Xa,{target:e,add:d,bone:p},p))},c)]},e.uniqueId)}const Ta=a("img",{className:"btn-icon",src:"img/appIcon/weapon.png",alt:"Add Weapon"});function za({target:e}){const[t,o]=w(!1),l=e.bones.list.includes("jWeaponR"),n=()=>o(!1);return v("div",{className:"AttachmentController",children:[l&&a(g,{title:"Add Weapon",startIcon:Ta,onClick:()=>o(!0),children:"Add Weapon"}),a(Na,{target:e}),a(Ie,{open:t,closeModal:n,children:a(St,{target:e})})]})}const $a={propName:"texture",label:"Texture",type:"select"};function Aa({target:e}){const t=Te(l=>l["model-texture"]);if(!(t==null?void 0:t[e.id]))return null;const o=[L(S({},$a),{options:t[e.id]})];return a("div",{className:"TextureController",children:a(R,{target:e,propList:o})})}const Fa=e=>{var t,o;return!!((o=(t=Te.getState())==null?void 0:t["model-texture"])==null?void 0:o[e])},Ba=["Position","Rotation","Scale","Outline","Material","Particles","Animation","Attachment"],La={Position:Kt,Rotation:aa,Scale:Jt,Outline:Zt,Material:ta,Particles:Ae,Animation:Fe,Attachment:qt,"Body Parts":Yt,Face:Be,Texture:Xt},Da=l=>{var n=l,{target:e,type:t}=n,o=$(n,["target","type"]);switch(t){case"Position":return a(le,S({target:e.position,step:.005},o),"position");case"Rotation":return a(le,S({target:e.rotation,min:-1,max:1,step:.05,scale:Math.PI*2},o),"rotation");case"Scale":return a(De,S({target:e,propName:"scale",label:"Scale",step:.05},o));case"Outline":return a(Va,{target:e});case"Material":return a(qa,{target:e});case"Particles":return a(Sa,{target:e});case"Animation":return a(Pa,{target:e});case"Attachment":return a(za,{target:e});case"Face":return a(ka,{target:e});case"Body Parts":return a(ha,{target:e});case"Texture":return a(Aa,{target:e});default:return a(M,{})}},Ia=e=>{const t=[...Ba];return e.face&&t.push("Face"),e.parts&&t.push("Body Parts"),Fa(e.id)&&t.push("Texture"),t},Wa=e=>e.map(t=>({value:t})),Ra=e=>e.map(t=>{var l;const o=(l=La[t])!=null?l:oe;return{value:t,icon:a(o,{})}});function Ha({value:e,onChange:t,tabs:o,orientation:l="horizontal",className:n=""}){n=`IconTabBar ${n} `+l;const i=c=>{const{value:s}=c.currentTarget.dataset;t(s)};return a("div",{className:n,children:o.map(c=>{const{icon:s,value:r,title:d=r}=c;return a("button",L(S({},e===r&&{className:"selected"}),{title:d,"data-value":r,onClick:i,children:s}))})})}function _a({value:e,list:t,onChange:o}){const l=Ra(t);return a("div",{children:a(Ha,{className:"QuickAccess",value:e,onChange:o,tabs:l})})}function Oa({target:e}){var c;const t=Ia(e),[o,l]=w((c=e.userData.controller)!=null?c:t[0]),n=Wa(t),i=s=>{e.userData.controller=s,l(s)};return v("div",{className:"ModelController",children:[a(_a,{list:t,value:o,onChange:i}),a(Le,{options:n,value:o,onChange:i,fullWidth:!0,size:"small"}),a(Da,{type:o,target:e})]})}const we=[{propName:"enabled",label:"Enabled",type:"boolean"},{propName:"size",label:"Size",type:"slider",min:1,max:20,step:1},{propName:"opacity",label:"Opacity",type:"slider",step:.1,valueMap:e=>`${~~(e*100)}%`},{propName:"color",label:"Color",type:"color"}];function Va({target:e}){const{outline:t}=e,[o,l]=Y(),n=se(!1);X(()=>{const s=t.addEventListener("change",()=>{if(n.current){n.current=!1;return}l()});return()=>t.removeEventListener("change",s)},[]);const i=()=>{const{code:s}=t;e.attachment.traverse(r=>r.outline.code=s)};we.forEach(s=>{s.onBeforeChange=()=>n.current=!0,s.onChange=i});const c=()=>{const s=ae.settings.outline;Object.entries(s).forEach(([r,d])=>{t[r]=d}),i(),l()};return v(M,{children:[a(R,{target:t,propList:we},o),a("div",{className:"SettingGroup-extra",children:a(g,{onClick:c,children:"Reset"})})]})}const Ea=[{value:"Basic",title:"Most basic, doesn't respond to light"},{value:"Toon",title:"Toon shading, also called cell shading"},{value:"Lambert",title:"For matte or diffusely reflecting surface"},{value:"Phong",title:"For shiny surface"},{value:"Standard",title:"For physically based rendering"},{value:"Physical",title:"For physically based rendering, can simulate transparency like water or glass"},{value:"Matcap",title:"Material capture, doesn't respond to light"},{value:"MMDToon",label:"MMD Toon",title:"Combination of Phong, Toon, and Matcap material"}],ja=[{value:"none",label:"None"},{value:"127,255",label:"2 Tones"},{value:"85,170,255",label:"3 Tones"},{value:"64,128,172,255",label:"4 Tones"}],Ga=[{label:"Fresnel",value:"matcap_fresnel.jpg"},{label:"Black Stone",value:"matcap_black_stone.jpg"},{label:"Chrome 1",value:"matcap_chrome_1.jpg"},{label:"Chrome 2",value:"matcap_chrome_2.jpg"},{label:"Brown Clay",value:"matcap_clay_brown.jpg"},{label:"Dark Brown Clay",value:"matcap_clay_dark_brown.jpg"},{label:"Flesh Clay",value:"matcap_clay_flesh_6.jpg"},{label:"Gray Clay",value:"matcap_clay_gray.jpg"},{label:"Metal Putty",value:"matcap_metal_putty.jpg"},{label:"Obsidian",value:"matcap_obsidian.jpg"},{label:"Pearl",value:"matcap_pearl.jpg"},{label:"Yellow Plastic",value:"matcap_plastic_yellow.jpg"},{label:"Sci-fi Plastic",value:"matcap_scifi_plastic.jpg"},{label:"Slick Mud",value:"matcap_slick_mud.jpg"},{label:"Shiny Metal",value:"metal_shiny.jpg"}],E=e=>`${~~(e*100)}%`,Pe=[{propName:"type",label:"Type",type:"select",options:Ea}],Ua=[{propName:"transparent",label:"Transparent",type:"boolean",title:"Whether to allow seeing through the model"},{propName:"opacity",label:"Opacity",type:"slider",title:"The opacity of the material",min:0,max:1,valueMap:E},{propName:"showTexture",label:"Texture",type:"boolean",title:"Show / hide model texture"},{propName:"color",label:"Color",type:"color",title:"The color of the material. Default is white"},{propName:"wireframe",label:"Wireframe",type:"boolean",title:"Whether to show the model as wireframe. Turn off outline to only see the wireframe"},{propName:"flatShading",label:"Flat Shading",type:"boolean",title:"Whether to use flat shading"},{propName:"emissive",label:"Emissive",type:"color",title:"The emissive color of the material, essentially a solid color unaffected by other lighting. Default is black"},{propName:"emissiveIntensity",label:"Emissive Intensity",type:"slider",title:"The intensity of the emissive light. Default is 1",min:0,max:1,valueMap:E},{propName:"specular",label:"Specular",type:"color"},{propName:"metalness",label:"Metalness",type:"slider",title:"How much the material is like a metal. Default is 0",min:0,max:1,valueMap:E},{propName:"roughness",label:"Roughness",type:"slider",title:"How rough the material is, 0 means a smooth mirror reflection, 1 means fully diffuse. Default is 1",min:0,max:1,valueMap:E},{propName:"shininess",label:"Shininess",type:"slider",title:"How shiny the specular highlight is, a higher value gives a sharper highlight. Default is 30",min:1,max:100,step:1},{propName:"gradientMap",label:"Gradient Map",type:"select",title:"The gradient map to use",options:ja},{propName:"matcap",label:"Matcap",type:"select",title:"The matcap to use",options:Ga},{propName:"transmission",label:"Transmission",type:"slider",title:"The amount of light passing through the material. Default is 0",min:0,max:1,valueMap:E},{propName:"thickness",label:"Thickness",type:"slider",title:"The thickness of the material. Default is 0",min:0,max:10},{propName:"ior",label:"Index of Refraction",type:"slider",title:"The index of refraction of the material. Default is 1.5",min:1,max:2.333}];function qa({target:e}){const{material:t}=e,{propList:o}=t,[l,n]=Y(),i=se(!1);X(()=>{const r=t.addEventListener("change",()=>{if(i.current){i.current=!1;return}n()});return()=>t.removeEventListener("change",r)},[]);const c=()=>{const{code:r}=t;e.attachment.traverse(d=>{d.material.code=r})};Pe[0].onChange=()=>{n(),c()};const s=Ua.filter(({propName:r})=>o.includes(r));return s.forEach(r=>{r.onBeforeChange=()=>i.current=!0,r.onChange=c}),v(re.Fragment,{children:[a(R,{target:t,propList:Pe}),a(R,{target:t,propList:s})]},l)}function Ka({target:e,label:t=(l=>(l=(o=>(o=e==null?void 0:e.userData)==null?void 0:o.name)())!=null?l:e.id)()}){const n=s=>{s.stopPropagation(),e.dispose()},i=a(Ue,{modelId:e.id,alt:e==null?void 0:e.userData.name,className:"FullModelController-icon"}),c=a(ve,{title:"Remove",className:"closeButton",onClick:n,size:"large",children:a(Q,{})});return v(G,{className:"FullModelController",children:[v(M,{children:[i,t,c]}),a(Oa,{target:e})]})}function Xa({bone:e,add:t,target:o}){var c;const{activeModel:l}=Ge();o!=null||(o=l);const n=(c=o==null?void 0:o.attachment[e])!=null?c:[],i=s=>{s.stopPropagation(),t(e)};return v(G,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[v(M,{children:[a("div",{className:"BoneManager-name",children:e}),a(g,{variant:"contained",className:"BoneManager-add",onClick:i,children:a(be,{})})]}),a(M,{children:n.map(s=>a(Ka,{target:s}))})]})}export{qt as A,ha as B,ya as C,Fe as D,Ka as F,Ha as I,Ie as M,Va as O,Zt as P,ea as S,ta as T,Qt as a,Be as b,qa as c,Aa as d,Sa as e,R as f,aa as g,be as h,Xa as i};
