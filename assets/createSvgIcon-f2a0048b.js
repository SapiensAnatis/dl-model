import{g as w,b as C,s as b,c as S,d as R,_ as N,a as g,e as B,f as M}from"./ButtonBase-c56a8b38.js";import{k as z,o as $,g as T}from"./jsxRuntime.module-9121d302.js";function U(o){return w("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const k=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],A=o=>{const{color:e,fontSize:t,classes:n}=o,i={root:["root",e!=="inherit"&&`color${S(e)}`,`fontSize${S(t)}`]};return M(i,U,n)},L=b("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${S(t.color)}`],e[`fontSize${S(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,n,i,m,a,s,c,v,r,l,u,h,d,p,f,y,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(n=t.create)==null?void 0:n.call(t,"fill",{duration:(i=o.transitions)==null||(m=i.duration)==null?void 0:m.shorter}),fontSize:{inherit:"inherit",small:((a=o.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=o.typography)==null||(v=c.pxToRem)==null?void 0:v.call(c,24))||"1.5rem",large:((r=o.typography)==null||(l=r.pxToRem)==null?void 0:l.call(r,35))||"2.1875rem"}[e.fontSize],color:(u=(h=(o.vars||o).palette)==null||(d=h[e.color])==null?void 0:d.main)!=null?u:{action:(p=(o.vars||o).palette)==null||(f=p.action)==null?void 0:f.active,disabled:(y=(o.vars||o).palette)==null||(_=y.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),I=z(function(e,t){const n=R({props:e,name:"MuiSvgIcon"}),{children:i,className:m,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:v,inheritViewBox:r=!1,titleAccess:l,viewBox:u="0 0 24 24"}=n,h=N(n,k),d=g({},n,{color:a,component:s,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:r,viewBox:u}),p={};r||(p.viewBox=u);const f=A(d);return $(L,g({as:s,className:B(f.root,m),focusable:"false",color:v,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},p,h,{ownerState:d,children:[i,l?$("title",{children:l}):null]}))});I.muiName="SvgIcon";const x=I;function j(o,e){function t(n,i){return $(x,g({"data-testid":`${e}Icon`,ref:i},n,{children:o}))}return t.muiName=x.muiName,T(z(t))}export{j as c};
