import{G as u}from"./d65f183e-GlowToggle.js";import{o as c}from"./9121d302-jsxRuntime.module.js";function p({type:r,value:t,options:a,icons:l=[],onClick:s,labels:n=[]}){const m=e=>{e.stopPropagation();const{value:o}=e.currentTarget.dataset;s(o)},i=a.map((e,o)=>c(u,{type:r,value:e,name:n[o],icon:l[o],onClick:m,checked:t===e},e));return c("div",{className:"Selector",children:i})}export{p as S};
