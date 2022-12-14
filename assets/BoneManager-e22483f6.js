/* empty css               */import{k as ee,o as a,_ as te,F as Ne,a as k,p as y,h as E,b as ae,j as $e}from"./jsxRuntime.module-9121d302.js";import{M as ze}from"./ModelIcon-6ce365e9.js";import{A as O}from"./Accordion-b426e74d.js";import{M as oe,T as Ae}from"./filterConfig-b75132fe.js";import{a as Fe,b as Be,S as ye,T as le,u as Se}from"./Gallery-44e2f555.js";import{f as ne,e as De,a as Le,b as Ie}from"./index-76ffaf5a.js";import{g as se,b as ie,s as T,B as We,a as f,_ as re,e as _,c as g,f as ce,d as Ce,m as he,n as Re,o as He}from"./ButtonBase-c56a8b38.js";import{a as _e,B as Oe,M as Ve,P as ke,u as Ee,F as je,b as Ge}from"./Popover-851dcb03.js";import{C as Ue}from"./ColorButton-28f4d73a.js";import{S as qe,B as Ke,b as Xe,a as Ye,P as Qe,c as Je}from"./SkipPrevious-6e1cb3e1.js";import{u as j}from"./useKey-ea23d921.js";import{C as G,I as de}from"./Close-0ad613b5.js";import{c as x}from"./createSvgIcon-f2a0048b.js";import{B as C}from"./Button-1aaa8f1a.js";import{B as Ze}from"./Box-9fcd2e2c.js";import{D as et}from"./DialogTitle-b23f8be5.js";import{F as tt}from"./FaceSelect-23c7fcb9.js";import{F as at}from"./FaceTexture-8543109d.js";import{c as ot}from"./helper-aa3b0c96.js";import{u as ve}from"./useToggleState-3fb9d00b.js";import{G as lt}from"./GlowToggle-14284aac.js";import{A as nt}from"./AddWeapon-a8e5ab16.js";import{h as st,v as J}from"./viewer-7c94c9c1.js";function it(e){return se("PrivateSwitchBase",e)}ie("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const rt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ct=e=>{const{classes:t,checked:o,disabled:l,edge:n}=e,s={root:["root",o&&"checked",l&&"disabled",n&&`edge${g(n)}`],input:["input"]};return ce(s,it,t)},dt=T(We)(({ownerState:e})=>f({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),pt=T("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ut=ee(function(t,o){const{autoFocus:l,checked:n,checkedIcon:s,className:r,defaultChecked:c,disabled:i,disableFocusRipple:d=!1,edge:u=!1,icon:h,id:p,inputProps:m,inputRef:v,name:P,onBlur:b,onChange:M,onFocus:A,readOnly:I,required:F,tabIndex:U,type:B,value:W}=t,q=re(t,rt),[V,D]=_e({controlled:n,default:Boolean(c),name:"SwitchBase",state:"checked"}),w=Fe(),R=z=>{A&&A(z),w&&w.onFocus&&w.onFocus(z)},K=z=>{b&&b(z),w&&w.onBlur&&w.onBlur(z)},X=z=>{if(z.nativeEvent.defaultPrevented)return;const me=z.target.checked;D(me),M&&M(z,me)};let N=i;w&&typeof N>"u"&&(N=w.disabled);const Y=B==="checkbox"||B==="radio",$=f({},t,{checked:V,disabled:N,disableFocusRipple:d,edge:u}),ue=ct($);return a(dt,f({component:"span",className:_(ue.root,r),centerRipple:!0,focusRipple:!d,disabled:N,tabIndex:null,role:void 0,onFocus:R,onBlur:K,ownerState:$,ref:o},q,{children:[a(pt,f({autoFocus:l,checked:n,defaultChecked:c,className:ue.input,disabled:N,id:Y&&p,name:P,onChange:X,readOnly:I,ref:v,required:F,ownerState:$,tabIndex:U,type:B},B==="checkbox"&&W===void 0?{}:{value:W},m)),V?s:h]}))}),mt=ut;function ht(e){return se("MuiDialog",e)}const vt=ie("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Q=vt,bt=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ft=T(Oe,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),yt=e=>{const{classes:t,scroll:o,maxWidth:l,fullWidth:n,fullScreen:s}=e,r={root:["root"],container:["container",`scroll${g(o)}`],paper:["paper",`paperScroll${g(o)}`,`paperWidth${g(String(l))}`,n&&"paperFullWidth",s&&"paperFullScreen"]};return ce(r,ht,t)},St=T(Ve,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Ct=T("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.container,t[`scroll${g(o.scroll)}`]]}})(({ownerState:e})=>f({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),kt=T(ke,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`scrollPaper${g(o.scroll)}`],t[`paperWidth${g(String(o.maxWidth))}`],o.fullWidth&&t.paperFullWidth,o.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>f({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${Q.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${Q.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Q.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),xt=ee(function(t,o){const l=Ce({props:t,name:"MuiDialog"}),n=Ee(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":r,"aria-labelledby":c,BackdropComponent:i,BackdropProps:d,children:u,className:h,disableEscapeKeyDown:p=!1,fullScreen:m=!1,fullWidth:v=!1,maxWidth:P="sm",onBackdropClick:b,onClose:M,open:A,PaperComponent:I=ke,PaperProps:F={},scroll:U="paper",TransitionComponent:B=je,transitionDuration:W=s,TransitionProps:q}=l,V=re(l,bt),D=f({},l,{disableEscapeKeyDown:p,fullScreen:m,fullWidth:v,maxWidth:P,scroll:U}),w=yt(D),R=te(),K=$=>{R.current=$.target===$.currentTarget},X=$=>{!R.current||(R.current=null,b&&b($),M&&M($,"backdropClick"))},N=Be(c),Y=Ne(()=>({titleId:N}),[N]);return a(St,f({className:_(w.root,h),closeAfterTransition:!0,components:{Backdrop:ft},componentsProps:{backdrop:f({transitionDuration:W,as:i},d)},disableEscapeKeyDown:p,onClose:M,open:A,ref:o,onClick:X,ownerState:D},V,{children:a(B,f({appear:!0,in:A,timeout:W,role:"presentation"},q,{children:a(Ct,{className:_(w.container),onMouseDown:K,ownerState:D,children:a(kt,f({as:I,elevation:24,role:"dialog","aria-describedby":r,"aria-labelledby":N},F,{className:_(w.paper,F.className),ownerState:D,children:a(et.Provider,{value:Y,children:u})}))})}))}))}),gt=xt;function Mt(e){return se("MuiSwitch",e)}const wt=ie("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),S=wt,Tt=["className","color","edge","size","sx"],Pt=e=>{const{classes:t,edge:o,size:l,color:n,checked:s,disabled:r}=e,c={root:["root",o&&`edge${g(o)}`,`size${g(l)}`],switchBase:["switchBase",`color${g(n)}`,s&&"checked",r&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=ce(c,Mt,t);return f({},t,i)},Nt=T("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${g(o.edge)}`],t[`size${g(o.size)}`]]}})(({ownerState:e})=>f({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${S.thumb}`]:{width:16,height:16},[`& .${S.switchBase}`]:{padding:4,[`&.${S.checked}`]:{transform:"translateX(16px)"}}})),$t=T(mt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${S.input}`]:t.input},o.color!=="default"&&t[`color${g(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${S.checked}`]:{transform:"translateX(20px)"},[`&.${S.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${S.checked} + .${S.track}`]:{opacity:.5},[`&.${S.disabled} + .${S.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${S.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>f({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:he(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${S.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:he(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${S.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?Re(e.palette[t.color].main,.62):He(e.palette[t.color].main,.55)}`}},[`&.${S.checked} + .${S.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),zt=T("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),At=T("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ft=ee(function(t,o){const l=Ce({props:t,name:"MuiSwitch"}),{className:n,color:s="primary",edge:r=!1,size:c="medium",sx:i}=l,d=re(l,Tt),u=f({},l,{color:s,edge:r,size:c}),h=Pt(u),p=a(At,{className:h.thumb,ownerState:u});return a(Nt,{className:_(h.root,n),sx:i,ownerState:u,children:[a($t,f({type:"checkbox",icon:p,checkedIcon:p,ref:o,ownerState:u},d,{classes:f({},h,{root:h.switchBase})})),a(zt,{className:h.track,ownerState:u})]})}),Bt=Ft,pe=x(a("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),Dt=x(a("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),"Attachment"),xe=x(a("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"}),"AutoAwesome"),Lt=x([a("path",{d:"M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"},"0"),a("circle",{cx:"12",cy:"12",r:"3"},"1")],"ControlCamera"),It=x(a("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"}),"CropOriginal"),ge=x(a("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun"),Wt=x(a("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}),"Extension"),Me=x(a("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face"),Rt=x(a("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"Mood"),Ht=x(a("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull"),_t=x(a("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonOutlined"),Ot=x(a("path",{d:"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}),"Storage"),Vt=x(a("path",{d:"M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"}),"Texture"),Et=x(a("path",{d:"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"}),"ThreeSixty");function we({options:e,value:t,onChange:o,...l}){return a(ye,{className:"SelectBox",value:t,onChange:s=>o(s.target.value),...l,children:e.map(({value:s,label:r=s,title:c})=>a(oe,{value:s,title:c,children:r}))})}function jt({target:e,keyList:t,labels:o=[],scale:l=1,inputProps:n={},onBeforeChange:s=void 0,onChange:r=void 0,...c}){const i=t.map(m=>e[m]/l),[d,u]=k(i),h=m=>{const v=m.currentTarget.value;if(v.endsWith("."))return;const P=parseInt(m.currentTarget.getAttribute("index")),b=parseFloat(v);if(isNaN(b))return;let M;u(F=>(M=[...F],M[P]=b,M));const A=b*l,I=t[P];s==null||s(M),e[I]=A,r==null||r(M)},p=m=>m.currentTarget.select();return a("div",{className:"SetNumbers",...c,children:t.map((m,v)=>a(le,{className:"SetNumbers-number",onChange:h,value:d[v],label:o[v]??m,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",index:v,onFocus:p,...n}},m))})}const Gt=["x","y","z","w"];function Z({target:e,dimension:t=3,scale:o=1,min:l,max:n,step:s,...r}){const c=Gt.slice(0,t);return a(jt,{target:e,keyList:c,scale:o,inputProps:{min:l,max:n,step:s},className:"SetVector SetNumbers","data-dimension":t,...r})}const Ut=(e,t=-1/0,o=1/0)=>{if(e===void 0)return;let l=e;return l<t&&(l=t),l>o&&(l=o),l};function Te({target:e,propName:t,label:o,min:l,max:n,step:s=1,onBeforeChange:r,onChange:c,...i}){const[d,u]=k(e[t]);return a("div",{className:"SetNumber",children:a(le,{onChange:p=>{if(!p.currentTarget.value)return;const m=parseFloat(p.currentTarget.value)||l;let v=Ut(m,l,n);u(v),r==null||r(v),e[t]=v,c==null||c(v)},value:d,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",min:l,max:n,step:s},...i})})}function qt({target:e,propName:t,label:o,inputProps:l={},onBeforeChange:n,onChange:s,...r}){const[c,i]=k(e[t]);return a("div",{className:"SetString",children:a(le,{onChange:u=>{const h=u.currentTarget.value;i(h),n==null||n(h),e[t]=h,s==null||s(h)},value:c,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:l,...r})})}function Kt({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,s]=k(e[t]);return a("div",{className:"SetBoolean",children:a(Bt,{onChange:()=>{const c=!n;s(c),o==null||o(c),e[t]=c,l==null||l(c)},checked:n})})}function Xt({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,s]=k(e[t]),{inputColor:r}=ne(),c=async()=>{const i=await r();!i||(s(i),o==null||o(i),e[t]=i,l==null||l(i))};return a("div",{className:"SetColor",children:a(Ue,{color:n.startsWith("#")?n:"#"+n,onClick:c,style:{border:"1px solid rgba(255, 255, 255, 0.5)"}})})}function Yt({target:e,propName:t,label:o,options:l,onBeforeChange:n,onChange:s,...r}){const[c,i]=k(e[t]);return a("div",{className:"SetFromList",children:a(we,{onChange:u=>{i(u),n==null||n(u),e[t]=u,s==null||s(u)},options:l,value:c,size:"small",margin:"dense",...r})})}function Qt({target:e,propName:t,label:o=t,title:l,valueMap:n=String,min:s=0,max:r=1,step:c=.01,onBeforeChange:i,onChange:d,...u}){const[h,p]=k(e[t]),m=(P,b)=>{p(b),i==null||i(b),e[t]=b,d==null||d(b)},v=`${o}: ${n(h)}`;return a(y,{children:[a("div",{className:"Setters-label",title:l,children:v}),a("div",{className:"Setters-slider",children:a(qe,{size:"small",value:h,min:s,max:r,step:c,onChange:m,...u})})]})}function L({target:e,propList:t}){const o=t.map(l=>{const{propName:n,label:s=n,title:r,type:c,...i}=l,d=Jt[c];switch(c){case"slider":return a(Qt,{target:e,propName:n,label:s,title:r,...i});case"vector":return a(y,{children:[a("div",{className:"Setters-label vector",title:r,children:s}),a(Z,{target:e[n],...i})]});default:return a(y,{children:[a("div",{className:"Setters-label",title:r,children:s}),a(d,{target:e,propName:n,...i})]})}});return a("div",{className:"Setters",children:o})}const Jt={boolean:Kt,number:Te,string:qt,color:Xt,select:Yt};function Zt({target:e,name:t}){if(!e)return null;const o=e.list.map(n=>({value:n}));o.push({value:"None"});const l=[{propName:"current",label:t.replaceAll("_"," "),type:"select",options:o}];return a(L,{target:e,propList:l})}function ea({list:e}){const t=e.map(({name:c})=>c),o=c=>e.find(({name:i})=>i===c),l=Object.fromEntries(t.map(c=>{var i;return[c,(i=o(c))==null?void 0:i.visible]})),[n,s]=k(l);return a(Ae,{name:"",options:t,type:"text",state:n,toggle:(c,i)=>{const d=!n[i];s({...n,[i]:d}),o(i).visible=d}})}function ta({target:e}){const{parts:t}=e;if(!t)return null;const{list:o,others:l}=t;return a("div",{className:"BodyPartsController",children:[o.map(n=>a(Zt,{target:t[n],name:n})),l.length>0&&a(O,{children:[a(y,{children:o.length?"Other Parts":"Body Parts"}),a(ea,{list:l})]})]})}const aa=[{value:"img/textures/particle/cloud.png",label:"Cloud"},{value:"img/textures/particle/smoke.png",label:"Smoke"},{value:"img/textures/particle/heart.png",label:"Heart"}],oa=[{propName:"visible",label:"Visible",type:"boolean"},{propName:"speed",label:"Speed",type:"slider",title:"How fast the aura rises",min:0,max:10,step:.5},{propName:"auraSize",label:"Aura Size",type:"number",title:"How big the aura is",min:0,step:10},{propName:"auraOpacity",label:"Aura Opacity",type:"slider",title:"How opaque the aura is",min:0,max:1,step:.05},{propName:"particleSize",label:"Particle Size",type:"number",title:"How big the particles are",min:0,step:1},{propName:"particleOpacity",label:"Particle Opacity",type:"slider",title:"How opaque the particles are",min:0,max:1,step:.05},{propName:"spread",label:"Spread",type:"number",title:"Distance from the model",min:0,step:1},{propName:"threshold",label:"Threshold",type:"slider",title:"Higher value means less aura, more particles",min:0,max:.7,step:.05},{propName:"color",label:"Color",type:"color"},{propName:"color2",label:"Color 2",type:"color"},{propName:"texture",label:"Texture",type:"select",options:aa}];function la({target:e}){const{name:t}=e,l=a(de,{title:"Remove",className:"closeButton",onClick:n=>{n.stopPropagation(),e.dispose()},children:a(G,{})});return a(O,{disableGutters:!0,className:"AuraController",children:[a(y,{children:[t,l]}),a(L,{target:e,propList:oa})]})}function na({target:e}){const{particle:t}=e,[o,l]=j();E(()=>{const{list:s}=t,r=s.addEventListener("change",l);return()=>s.removeEventListener("change",r)},[]);const n=s=>{s.stopPropagation(),t.add(),l()};return a(O,{disableGutters:!0,className:"ParticleController",children:[a(y,{children:[a("div",{className:"title",children:[a(xe,{}),"Particles"]}),a(C,{onClick:n,title:"Add particles",variant:"contained",children:a(pe,{})})]}),a(ae.Fragment,{children:t.list.length?t.list.map((s,r)=>a(la,{target:s},o+r)):"Click + to add particles"},o)]})}const sa=({onClick:e,color:t="#101010",title:o})=>a(Ze,{position:"absolute",top:0,right:0,children:a(de,{sx:{color:t,zIndex:5},onClick:e,size:"large",title:o,children:a(G,{})})}),ia={sx:{margin:"0.3rem",minWidth:"12rem",minHeight:"12rem",maxHeight:"calc(100% - 2rem)"}},Pe=({children:e,open:t,closeModal:o,...l})=>t?$e(a(gt,{className:"Modal",maxWidth:"lg",open:t,onClose:o,PaperProps:ia,...l,children:[a(sa,{onClick:o,title:"Close"}),e]}),document.getElementById("modal-root")):a(y,{});const ra={face:tt,faceTexture:at};function ca({target:e}){const t=e==null?void 0:e.face;if(!t)return a(y,{});const[o,l]=k(""),n=()=>l(""),s=ra[o]??y,r=i=>{const{value:d}=i.currentTarget.dataset;l(d)},c=(...i)=>{const[d,u]=i;switch(o){case"face":e.face[`${u}BaseIdx`]=d;return;case"faceTexture":e.face[`${u}Texture`]=d;return;default:return}};return a("div",{className:"FaceController",children:[a(C,{variant:"contained",startIcon:a(Rt,{}),onClick:r,"data-value":"face",children:"Facial Expresion"}),t.type==="uv"&&a(C,{variant:"contained",startIcon:a(Me,{}),onClick:r,"data-value":"faceTexture",children:"Face Texture"}),a(Pe,{closeModal:n,open:!!o,children:a(s,{target:e,onSelect:c,onAfterSelect:n})})]})}const da={backgroundColor:"#101010",color:"#ccc","& li:not(:last-child)":{borderBottom:"1px solid #ffffff33"},"& li[data-current]":{backgroundColor:"#202020",color:"#fff",borderColor:"#fff"},"& li:hover":{backgroundColor:"#ffffff33"}};function pa({target:e,isReverse:t}){const{animation:o}=e,l=Math.abs(o.mixer.timeScale),[n,s]=k(l),[r,c]=k(null),i=p=>{p.stopPropagation(),c(p.currentTarget)},d=()=>c(null),u=Array(8).fill().map((p,m)=>m*.25+.25),h=p=>{const{value:m}=p.target.dataset;o.mixer.timeScale=t?-m:m,s(parseFloat(m)),d()};return a(y,{children:[a(C,{title:"Time Scale",onClick:i,children:`${n}x`}),a(Ge,{anchorEl:r,open:!!r,onClose:d,className:"TimeScaleSelect",PaperProps:{sx:da},children:u.map(p=>a(oe,{onClick:h,"data-value":p,"data-current":p===n,children:`${p}x`}))})]})}function ua({target:e}){const{animation:t}=e,[o,l]=ve(t.isPaused),[n,s]=ve(t.mixer.timeScale<0),r=()=>{o?t.resume():t.pause(),l()},c=()=>{t.mixer.timeScale*=-1,s()},i=d=>{const{dir:u}=d.currentTarget.dataset,h=u==="next"?1:-1,m=1/60*h;o?(t.resume(),t.update(m),t.pause()):t.update(m)};return a("div",{className:"ModelTimeControl",children:[a(Ke,{children:[a(C,{variant:"contained","data-dir":"prev",onClick:i,title:"Previous Frame",children:a(Xe,{})}),a(C,{variant:"contained",onClick:r,title:o?"Resume":"Pause",children:o?a(Ye,{}):a(Qe,{})}),a(C,{variant:"contained","data-dir":"next",onClick:i,title:"Next Frame",children:a(Je,{})})]}),a(lt,{type:"text",value:"Reverse",checked:n,onClick:c}),a(pa,{isReverse:n,target:e})]})}function ma({target:e}){const{inputAni:t}=ne(),{toggle:o,setTarget:l}=De(),{loadState:n}=Le(),s=async()=>{var m;n(e==null?void 0:e.userData.aniSelectState);const i=await t();if(!i)return;const d=e==null?void 0:e.animation.isPaused,[u,h]=i;e==null||e.animation.addChain(u).then(()=>d&&e.animation.pause());const p=ot(u,h);e!=null&&e.userData&&(((m=e.userData.chain)==null?void 0:m.splice(0,1/0,...p))??(e.userData.chain=p))},r=()=>{var i,d;(i=e==null?void 0:e.animation)==null||i.reset(),(d=e==null?void 0:e.userData)==null||d.chain.splice(0,1/0)},c=()=>{l(e),n(e==null?void 0:e.userData.aniSelectState),o()};return a("div",{className:"AnimationController",children:[a(ua,{target:e}),a(C,{variant:"contained",startIcon:a(ge,{}),onClick:s,title:"Add Animation",children:"Add Animation"}),a(C,{variant:"contained",startIcon:a(Ot,{}),onClick:c,title:"Open Chain Maker",children:"Chain Maker"}),a(C,{variant:"contained",startIcon:a(G,{}),onClick:r,title:"Remove Animation",children:"Reset"})]})}function ha({target:e}){var h;if(!e)return a(y,{});const{inputModel:t}=ne(),o=["root",...((h=e==null?void 0:e.bones)==null?void 0:h.list)??[]],[l,n]=k(o[0]),s=st(e.attachment.list.map(p=>p.parentBone)),[r,c]=j();E(()=>e==null?void 0:e.addEventListener("AttachmentChanged",c),[]);const i=p=>n(p.target.value),d=async(p=l)=>{const m=await t();if(!m)return;const[v,P]=m,b=await J.loadDLModel(v);b.userData.name=P,e.attach(b,p==="root"?void 0:p),b.outline.code=e.outline.code,b.material.code=e.material.code,J.render()},u=()=>d();return a(ae.Fragment,{children:[a("div",{className:"AttachmentController-add",children:[a(ye,{className:"AttachmentController-select",onChange:i,value:l,children:o.map(p=>a(oe,{value:p,children:p},p))}),a(C,{title:"Add attachment to selected joint",variant:"contained",onClick:u,children:a(pe,{})})]}),a("div",{className:"AttachmentList",children:s.map(p=>a(Ia,{target:e,add:d,bone:p},p))},r)]},e.uniqueId)}const va=a("img",{className:"btn-icon",src:"img/appIcon/weapon.png",alt:"Add Weapon"});function ba({target:e}){const[t,o]=k(!1),l=e.bones.list.includes("jWeaponR"),n=()=>o(!1);return a("div",{className:"AttachmentController",children:[l&&a(C,{title:"Add Weapon",startIcon:va,onClick:()=>o(!0),children:"Add Weapon"}),a(ha,{target:e}),a(Pe,{open:t,closeModal:n,children:a(nt,{target:e})})]})}const fa={propName:"texture",label:"Texture",type:"select"};function ya({target:e}){const t=Se(l=>l["model-texture"]);if(!(t!=null&&t[e.id]))return null;const o=[{...fa,options:t[e.id]}];return a("div",{className:"TextureController",children:a(L,{target:e,propList:o})})}const Sa=e=>{var t,o;return!!((o=(t=Se.getState())==null?void 0:t["model-texture"])!=null&&o[e])},Ca=["Position","Rotation","Scale","Outline","Material","Particles","Animation","Attachment"],ka={Position:Lt,Rotation:Et,Scale:Ht,Outline:_t,Material:Vt,Particles:xe,Animation:ge,Attachment:Dt,"Body Parts":Wt,Face:Me,Texture:It},xa=({target:e,type:t,...o})=>{switch(t){case"Position":return a(Z,{target:e.position,step:.005,...o},"position");case"Rotation":return a(Z,{target:e.rotation,min:-1,max:1,step:.05,scale:Math.PI*2,...o},"rotation");case"Scale":return a(Te,{target:e,propName:"scale",label:"Scale",step:.05,...o});case"Outline":return a($a,{target:e});case"Material":return a(Da,{target:e});case"Particles":return a(na,{target:e});case"Animation":return a(ma,{target:e});case"Attachment":return a(ba,{target:e});case"Face":return a(ca,{target:e});case"Body Parts":return a(ta,{target:e});case"Texture":return a(ya,{target:e});default:return a(y,{})}},ga=e=>{const t=[...Ca];return e.face&&t.push("Face"),e.parts&&t.push("Body Parts"),Sa(e.id)&&t.push("Texture"),t},Ma=e=>e.map(t=>({value:t})),wa=e=>e.map(t=>{const o=ka[t]??y;return{value:t,icon:a(o,{})}});function Ta({value:e,onChange:t,tabs:o,orientation:l="horizontal",className:n=""}){n=`IconTabBar ${n} `+l;const s=r=>{const{value:c}=r.currentTarget.dataset;t(c)};return a("div",{className:n,children:o.map(r=>{const{icon:c,value:i,title:d=i}=r;return a("button",{...e===i&&{className:"selected"},title:d,"data-value":i,onClick:s,children:c})})})}function Pa({value:e,list:t,onChange:o}){const l=wa(t);return a("div",{children:a(Ta,{className:"QuickAccess",value:e,onChange:o,tabs:l})})}function Na({target:e}){const t=ga(e),[o,l]=k(e.userData.controller??t[0]),n=Ma(t),s=r=>{e.userData.controller=r,l(r)};return a("div",{className:"ModelController",children:[a(Pa,{list:t,value:o,onChange:s}),a(we,{options:n,value:o,onChange:s,fullWidth:!0,size:"small"}),a(xa,{type:o,target:e})]})}const be=[{propName:"enabled",label:"Enabled",type:"boolean"},{propName:"size",label:"Size",type:"slider",min:1,max:20,step:1},{propName:"opacity",label:"Opacity",type:"slider",step:.1,valueMap:e=>`${~~(e*100)}%`},{propName:"color",label:"Color",type:"color"}];function $a({target:e}){const{outline:t}=e,[o,l]=j(),n=te(!1);E(()=>{const c=t.addEventListener("change",()=>{if(n.current){n.current=!1;return}l()});return()=>t.removeEventListener("change",c)},[]);const s=()=>{const{code:c}=t;e.attachment.traverse(i=>i.outline.code=c)};be.forEach(c=>{c.onBeforeChange=()=>n.current=!0,c.onChange=s});const r=()=>{const c=J.settings.outline;Object.entries(c).forEach(([i,d])=>{t[i]=d}),s(),l()};return a(y,{children:[a(L,{target:t,propList:be},o),a("div",{className:"SettingGroup-extra",children:a(C,{onClick:r,children:"Reset"})})]})}const za=[{value:"Basic",title:"Most basic, doesn't respond to light"},{value:"Toon",title:"Toon shading, also called cell shading"},{value:"Lambert",title:"For matte or diffusely reflecting surface"},{value:"Phong",title:"For shiny surface"},{value:"Standard",title:"For physically based rendering"},{value:"Physical",title:"For physically based rendering, can simulate transparency like water or glass"},{value:"Matcap",title:"Material capture, doesn't respond to light"},{value:"MMDToon",label:"MMD Toon",title:"Combination of Phong, Toon, and Matcap material"}],Aa=[{value:"none",label:"None"},{value:"127,255",label:"2 Tones"},{value:"85,170,255",label:"3 Tones"},{value:"64,128,172,255",label:"4 Tones"}],Fa=[{label:"Fresnel",value:"matcap_fresnel.jpg"},{label:"Black Stone",value:"matcap_black_stone.jpg"},{label:"Chrome 1",value:"matcap_chrome_1.jpg"},{label:"Chrome 2",value:"matcap_chrome_2.jpg"},{label:"Brown Clay",value:"matcap_clay_brown.jpg"},{label:"Dark Brown Clay",value:"matcap_clay_dark_brown.jpg"},{label:"Flesh Clay",value:"matcap_clay_flesh_6.jpg"},{label:"Gray Clay",value:"matcap_clay_gray.jpg"},{label:"Metal Putty",value:"matcap_metal_putty.jpg"},{label:"Obsidian",value:"matcap_obsidian.jpg"},{label:"Pearl",value:"matcap_pearl.jpg"},{label:"Yellow Plastic",value:"matcap_plastic_yellow.jpg"},{label:"Sci-fi Plastic",value:"matcap_scifi_plastic.jpg"},{label:"Slick Mud",value:"matcap_slick_mud.jpg"},{label:"Shiny Metal",value:"metal_shiny.jpg"}],H=e=>`${~~(e*100)}%`,fe=[{propName:"type",label:"Type",type:"select",options:za}],Ba=[{propName:"transparent",label:"Transparent",type:"boolean",title:"Whether to allow seeing through the model"},{propName:"opacity",label:"Opacity",type:"slider",title:"The opacity of the material",min:0,max:1,valueMap:H},{propName:"showTexture",label:"Texture",type:"boolean",title:"Show / hide model texture"},{propName:"color",label:"Color",type:"color",title:"The color of the material. Default is white"},{propName:"wireframe",label:"Wireframe",type:"boolean",title:"Whether to show the model as wireframe. Turn off outline to only see the wireframe"},{propName:"flatShading",label:"Flat Shading",type:"boolean",title:"Whether to use flat shading"},{propName:"emissive",label:"Emissive",type:"color",title:"The emissive color of the material, essentially a solid color unaffected by other lighting. Default is black"},{propName:"emissiveIntensity",label:"Emissive Intensity",type:"slider",title:"The intensity of the emissive light. Default is 1",min:0,max:1,valueMap:H},{propName:"specular",label:"Specular",type:"color"},{propName:"metalness",label:"Metalness",type:"slider",title:"How much the material is like a metal. Default is 0",min:0,max:1,valueMap:H},{propName:"roughness",label:"Roughness",type:"slider",title:"How rough the material is, 0 means a smooth mirror reflection, 1 means fully diffuse. Default is 1",min:0,max:1,valueMap:H},{propName:"shininess",label:"Shininess",type:"slider",title:"How shiny the specular highlight is, a higher value gives a sharper highlight. Default is 30",min:1,max:100,step:1},{propName:"gradientMap",label:"Gradient Map",type:"select",title:"The gradient map to use",options:Aa},{propName:"matcap",label:"Matcap",type:"select",title:"The matcap to use",options:Fa},{propName:"transmission",label:"Transmission",type:"slider",title:"The amount of light passing through the material. Default is 0",min:0,max:1,valueMap:H},{propName:"thickness",label:"Thickness",type:"slider",title:"The thickness of the material. Default is 0",min:0,max:10},{propName:"ior",label:"Index of Refraction",type:"slider",title:"The index of refraction of the material. Default is 1.5",min:1,max:2.333}];function Da({target:e}){const{material:t}=e,{propList:o}=t,[l,n]=j(),s=te(!1);E(()=>{const i=t.addEventListener("change",()=>{if(s.current){s.current=!1;return}n()});return()=>t.removeEventListener("change",i)},[]);const r=()=>{const{code:i}=t;e.attachment.traverse(d=>{d.material.code=i})};fe[0].onChange=()=>{n(),r()};const c=Ba.filter(({propName:i})=>o.includes(i));return c.forEach(i=>{i.onBeforeChange=()=>s.current=!0,i.onChange=r}),a(ae.Fragment,{children:[a(L,{target:t,propList:fe}),a(L,{target:t,propList:c})]},l)}function La({target:e,label:t=(o=>(o=e==null?void 0:e.userData)==null?void 0:o.name)()??e.id}){const l=r=>{r.stopPropagation(),e.dispose()},n=a(ze,{modelId:e.id,alt:e==null?void 0:e.userData.name,className:"FullModelController-icon"}),s=a(de,{title:"Remove",className:"closeButton",onClick:l,size:"large",children:a(G,{})});return a(O,{className:"FullModelController",children:[a(y,{children:[n,t,s]}),a(Na,{target:e})]})}function Ia({bone:e,add:t,target:o}){const{activeModel:l}=Ie();o??(o=l);const n=(o==null?void 0:o.attachment[e])??[],s=r=>{r.stopPropagation(),t(e)};return a(O,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[a(y,{children:[a("div",{className:"BoneManager-name",children:e}),a(C,{variant:"contained",className:"BoneManager-add",onClick:s,children:a(pe,{})})]}),a(y,{children:n.map(r=>a(La,{target:r}))})]})}export{Dt as A,ta as B,sa as C,ge as D,La as F,Ta as I,Pe as M,$a as O,_t as P,Ot as S,Vt as T,Rt as a,Me as b,Da as c,ya as d,na as e,L as f,Et as g,pe as h,Ia as i};
