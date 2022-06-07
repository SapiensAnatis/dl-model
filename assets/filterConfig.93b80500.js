var Ce=Object.defineProperty,Ie=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var Q=(e,t,o)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))he.call(t,o)&&Q(e,o,t[o]);if(K)for(var o of K(t))$e.call(t,o)&&Q(e,o,t[o]);return e},ee=(e,t)=>Ie(e,xe(t));import{x as W,q as _,j as l,h as ne,Z as Le,a as T,m as re,F as ie,_ as Te,a5 as Se,y as ke}from"./index.83ee0ec4.js";import{L as S,i as we,c as Me,M as Oe}from"./Gallery.1cdb7786.js";import{b as k,g as U,s as G,a as d,d as D,_ as N,e as H,f as O,m as h,l as le,u as ce,B as de,r as Ae}from"./ButtonBase.d76a961e.js";import{i as te}from"./Popover.0154ae24.js";import{T as V}from"./DialogTitle.71f850c5.js";import{B as Fe}from"./Box.2940a5f1.js";import{G as Pe}from"./GlowToggle.2ed157ce.js";import{c as Re}from"./createSvgIcon.1cb726f5.js";import{W as pe,R as ue,E as me,F as Ne,a as Ge}from"./lists.b00ff734.js";const Be=k("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var oe=Be;function Ee(e){return U("MuiListItem",e)}const Ve=k("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var M=Ve;const je=k("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var We=je;function _e(e){return U("MuiListItemSecondaryAction",e)}k("MuiListItemSecondaryAction",["root","disableGutters"]);const Ue=["className"],De=e=>{const{disableGutters:t,classes:o}=e;return H({root:["root",t&&"disableGutters"]},_e,o)},He=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),ge=W(function(t,o){const s=D({props:t,name:"MuiListItemSecondaryAction"}),{className:a}=s,n=N(s,Ue),r=_(S),c=d({},s,{disableGutters:r.disableGutters}),i=De(c);return l(He,d({className:O(i.root,a),ownerState:c,ref:o},n))});ge.muiName="ListItemSecondaryAction";var ze=ge;const Ye=["className"],qe=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],Xe=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},Ze=e=>{const{alignItems:t,button:o,classes:s,dense:a,disabled:n,disableGutters:r,disablePadding:c,divider:i,hasSecondaryAction:m,selected:y}=e;return H({root:["root",a&&"dense",!r&&"gutters",!c&&"padding",i&&"divider",n&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",m&&"secondaryAction",y&&"selected"],container:["container"]},Ee,s)},Je=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:Xe})(({theme:e,ownerState:t})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&d({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${We.root}`]:{paddingRight:48}},{[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Ke=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Qe=W(function(t,o){const s=D({props:t,name:"MuiListItem"}),{alignItems:a="center",autoFocus:n=!1,button:r=!1,children:c,className:i,component:m,components:y={},componentsProps:v={},ContainerComponent:x="li",ContainerProps:{className:C}={},dense:u=!1,disabled:p=!1,disableGutters:b=!1,disablePadding:f=!1,divider:g=!1,focusVisibleClassName:I,secondaryAction:B,selected:ye=!1}=s,fe=N(s.ContainerProps,Ye),be=N(s,qe),ve=_(S),z={dense:u||ve.dense||!1,alignItems:a,disableGutters:b},Y=ne(null);le(()=>{n&&Y.current&&Y.current.focus()},[n]);const w=Le.toArray(c),X=w.length&&we(w[w.length-1],["ListItemSecondaryAction"]),A=d({},s,{alignItems:a,autoFocus:n,button:r,dense:z.dense,disabled:p,disableGutters:b,disablePadding:f,divider:g,hasSecondaryAction:X,selected:ye}),Z=Ze(A),J=ce(Y,o),E=y.Root||Je,F=v.root||{},$=d({className:O(Z.root,F.className,i),disabled:p},be);let L=m||"li";return r&&($.component=m||"div",$.focusVisibleClassName=O(M.focusVisible,I),L=de),X?(L=!$.component&&!m?"div":L,x==="li"&&(L==="li"?L="div":$.component==="li"&&($.component="div")),l(S.Provider,{value:z,children:T(Ke,d({as:x,className:O(Z.container,C),ref:J,ownerState:A},fe,{children:[l(E,d({},F,!te(E)&&{as:L,ownerState:d({},A,F.ownerState)},$,{children:w})),w.pop()]}))})):l(S.Provider,{value:z,children:T(E,d({},F,{as:L,ref:J,ownerState:A},!te(E)&&{ownerState:d({},A,F.ownerState)},$,{children:[w,B&&l(ze,{children:B})]}))})});var et=Qe;const tt=k("MuiListItemIcon",["root","alignItemsFlexStart"]);var se=tt;function ot(e){return U("MuiListItemText",e)}const st=k("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var j=st;const at=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],nt=e=>{const{classes:t,inset:o,primary:s,secondary:a,dense:n}=e;return H({root:["root",o&&"inset",n&&"dense",s&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},ot,t)},rt=G("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${j.primary}`]:t.primary},{[`& .${j.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>d({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),it=W(function(t,o){const s=D({props:t,name:"MuiListItemText"}),{children:a,className:n,disableTypography:r=!1,inset:c=!1,primary:i,primaryTypographyProps:m,secondary:y,secondaryTypographyProps:v}=s,x=N(s,at),{dense:C}=_(S);let u=i!=null?i:a,p=y;const b=d({},s,{disableTypography:r,inset:c,primary:!!u,secondary:!!p,dense:C}),f=nt(b);return u!=null&&u.type!==V&&!r&&(u=l(V,d({variant:C?"body2":"body1",className:f.primary,component:"span",display:"block"},m,{children:u}))),p!=null&&p.type!==V&&!r&&(p=l(V,d({variant:"body2",className:f.secondary,color:"text.secondary",display:"block"},v,{children:p}))),T(rt,d({className:O(f.root,n),ownerState:b,ref:o},x,{children:[u,p]}))});var lt=it;function ct(e){return U("MuiMenuItem",e)}const dt=k("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var P=dt;const pt=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],ut=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},mt=e=>{const{disabled:t,dense:o,divider:s,disableGutters:a,selected:n,classes:r}=e,i=H({root:["root",o&&"dense",t&&"disabled",!a&&"gutters",s&&"divider",n&&"selected"]},ct,r);return d({},r,i)},gt=G(de,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ut})(({theme:e,ownerState:t})=>d({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${oe.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${oe.inset}`]:{marginLeft:52},[`& .${j.root}`]:{marginTop:0,marginBottom:0},[`& .${j.inset}`]:{paddingLeft:36},[`& .${se.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&d({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${se.root} svg`]:{fontSize:"1.25rem"}}))),yt=W(function(t,o){const s=D({props:t,name:"MuiMenuItem"}),{autoFocus:a=!1,component:n="li",dense:r=!1,divider:c=!1,disableGutters:i=!1,focusVisibleClassName:m,role:y="menuitem",tabIndex:v}=s,x=N(s,pt),C=_(S),u={dense:r||C.dense||!1,disableGutters:i},p=ne(null);le(()=>{a&&p.current&&p.current.focus()},[a]);const b=d({},s,{dense:u.dense,divider:c,disableGutters:i}),f=mt(s),g=ce(p,o);let I;return s.disabled||(I=v!==void 0?v:-1),l(S.Provider,{value:u,children:l(gt,d({ref:g,role:y,tabIndex:I,component:n,focusVisibleClassName:O(f.focusVisible,m)},x,{ownerState:b,classes:f}))})});var ft=yt;const R={box:{display:"flex",flexWrap:"no-wrap",flexGrow:1,minWidth:"15rem",padding:0,margin:"0 2rem",justifyContent:"center","&::-webkit-scrollbar":{height:"0.1rem",backgroundColor:"rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{height:"0.1rem",backgroundColor:"rgba(255, 255, 255, 0.3)"}},list:{backgroundColor:"rgba(16, 16, 16, 0.9)",color:"white",flex:"1 1",minWidth:"9rem",maxWidth:"20rem","&:hover":{backgroundColor:"rgba(16, 16, 16, 0.7)"},"& img":{filter:"drop-shadow(0 0 0.3rem white)"}},listItem:{cursor:"pointer",textAlign:"center","&[data-multi]::after":{content:'"\u25BC"',position:"absolute",bottom:"0.1rem",left:"50%",transform:"translateX(-50%)",fontSize:"x-small"},"&:not(first-of-type)":{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.5)"}},menuItem:{gap:"0.2rem",minWidth:"8rem"},icon:{maxHeight:"1.5rem",margin:"0 0.3rem"}},ae=e=>l("img",ee(q({},e),{style:R.icon}));function bt({level:e=0,selectedIndices:t,options:o,setIndex:s}){var b,f;const[a,n]=re(null),r=o.length>1;(b=t[e])!=null||s(e,0);const c=g=>{n(g.currentTarget)},i=g=>{const{level:I,index:B}=g.target.dataset;s(parseInt(I),parseInt(B)),n(null)},m=()=>{n(null)},y=(f=t[e])!=null?f:0,{label:v,value:x,icon:C,options:u}=o[y],p=T(ie,{children:[l(Me,{disablePadding:!0,sx:R.list,children:T(et,{"data-multi":r,sx:R.listItem,onClick:c,children:[C&&l(ae,{alt:x,src:C}),l(lt,{primary:`${v}`})]})}),r&&l(Oe,{anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:m,children:o.map((g,I)=>T(ft,{selected:I===y,onClick:i,sx:R.menuItem,"data-index":I,"data-level":e,children:[g.icon&&l(ae,{alt:g.value,src:g.icon}),g.label]},g.value))}),u&&l(bt,{options:u,selectedIndices:t,level:e+1,setIndex:s})]});return e===0?l(Fe,{className:"Breadcrumbs",sx:R.box,children:p}):p}const vt=(e,t)=>o=>{const s=o[e],a=s==null?void 0:s[t];a!==void 0&&(s[t]=!a,Object.values(s).every(Boolean)&&Object.keys(s).forEach(n=>s[n]=!1))};function Ct(e){const t=Te(()=>It(e),[e]),[o,s]=re(t);return[o,(r,c)=>s(i=>Se(i,vt(r,c))),()=>s(t)]}function It(e){const t=e.map(({name:o,options:s})=>{const a=s.map(r=>[r,!1]),n=Object.fromEntries(a);return[o,n]});return Object.fromEntries(t)}function xt({name:e,options:t,type:o,state:s,toggle:a}){const n=i=>{const{group:m,value:y}=i.currentTarget.dataset;a(m,y)},r=i=>`img/appIcon/${e}_${i}.png`,c=t.map(i=>l(Pe,{icon:r(i),value:i,type:o,checked:s[i],"data-group":e,onClick:n}));return l("div",{className:"ToggleGroup",children:c})}const ht=e=>Object.entries(e).map(([s,a])=>[s,Object.keys(a).filter(n=>a[n])]).filter(([,s])=>s.length);function Rt({config:e,onChange:t,compact:o}){if(!e)return l(ie,{});const[s,a,n]=Ct(e);ke(()=>{const c=ht(s);t(c)},[s]);const r=e.map((c,i)=>l(xt,q({state:s[c.name],toggle:a},c),i));return T("div",{className:"Filter","data-compact":o,children:[r,l("button",{className:"Filter-reset",onClick:n,children:l("span",{children:"Reset"})})]})}var Nt=Re(l("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");function $t(){return new Worker("/dl-model/assets/filterWorker.197797e9.js",{type:"module"})}function Gt(e,t){if(!t.length)return e;const o=new $t;return new Promise(s=>{o.addEventListener("message",a=>{o.terminate(),s(a.data)}),o.postMessage({fullList:e,conditions:t})})}const Bt=[{name:"weapon",type:"icon",options:pe},{name:"rarity",type:"icon",options:ue},{name:"element",type:"icon",options:me}],Et=[{name:"rarity",type:"icon",options:ue},{name:"element",type:"icon",options:me}],Vt=[{name:"weapon",type:"icon",options:pe},{name:"rarity",type:"icon",options:Ne},{name:"element",type:"icon",options:Ge}];export{bt as B,Nt as F,ft as M,xt as T,Rt as a,Bt as c,Et as d,Gt as f,Vt as w};
