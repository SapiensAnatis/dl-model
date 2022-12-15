import{_ as p,a as i,H as _,I as N,g as u,b as h,s as m,c as M,d as y,e as f,f as v}from"./ButtonBase-e35dbca3.js";import{k as x,o as C,B as S,q as U}from"./jsxRuntime.module-9121d302.js";const w=["sx"],O=o=>{var t,s;const e={systemProps:{},otherProps:{}},n=(t=o==null||(s=o.theme)==null?void 0:s.unstable_sxConfig)!=null?t:_;return Object.keys(o).forEach(a=>{n[a]?e.systemProps[a]=o[a]:e.otherProps[a]=o[a]}),e};function j(o){const{sx:t}=o,s=p(o,w),{systemProps:e,otherProps:n}=O(s);let a;return Array.isArray(t)?a=[e,...t]:typeof t=="function"?a=(...l)=>{const r=t(...l);return N(r)?i({},e,r):e}:a=i({},e,t),i({},n,{sx:a})}function k(o){return u("MuiTypography",o)}h("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const A=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],I=o=>{const{align:t,gutterBottom:s,noWrap:e,paragraph:n,variant:a,classes:l}=o,r={root:["root",a,o.align!=="inherit"&&`align${M(t)}`,s&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return v(r,k,l)},L=m("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.variant&&t[s.variant],s.align!=="inherit"&&t[`align${M(s.align)}`],s.noWrap&&t.noWrap,s.gutterBottom&&t.gutterBottom,s.paragraph&&t.paragraph]}})(({theme:o,ownerState:t})=>i({margin:0},t.variant&&o.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),$={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=o=>q[o]||o,E=x(function(t,s){const e=y({props:t,name:"MuiTypography"}),n=z(e.color),a=j(i({},e,{color:n})),{align:l="inherit",className:r,component:c,gutterBottom:g=!1,noWrap:P=!1,paragraph:T=!1,variant:d="body1",variantMapping:D=$}=a,B=p(a,A),b=i({},a,{align:l,color:n,className:r,component:c,gutterBottom:g,noWrap:P,paragraph:T,variant:d,variantMapping:D}),R=c||(T?"p":D[d]||$[d])||"span",W=I(b);return C(L,i({as:R,ref:s,ownerState:b,className:f(W.root,r)},B))}),H=E,J=S({}),V=J;function Y(o){return u("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function F(o){return u("MuiDialogTitle",o)}const G=h("MuiDialogTitle",["root"]),K=G,Q=["className","dividers"],X=o=>{const{classes:t,dividers:s}=o;return v({root:["root",s&&"dividers"]},Y,t)},Z=m("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${K.root} + &`]:{paddingTop:0}})),tt=x(function(t,s){const e=y({props:t,name:"MuiDialogContent"}),{className:n,dividers:a=!1}=e,l=p(e,Q),r=i({},e,{dividers:a}),c=X(r);return C(Z,i({className:f(c.root,n),ownerState:r,ref:s},l))}),it=tt,ot=["className","id"],st=o=>{const{classes:t}=o;return v({root:["root"]},F,t)},et=m(H,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),at=x(function(t,s){const e=y({props:t,name:"MuiDialogTitle"}),{className:n,id:a}=e,l=p(e,ot),r=e,c=st(r),{titleId:g=a}=U(V);return C(et,i({component:"h2",className:f(c.root,n),ownerState:r,ref:s,variant:"h6",id:g},l))}),lt=at;export{V as D,H as T,lt as a,it as b,j as e};
