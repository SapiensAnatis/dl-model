import{G as m}from"./GlowToggle.c4084c79.js";import{j as o}from"./index.c7db4231.js";function j({type:a,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:c}=e.currentTarget.dataset;t(c)},i=l.map((e,c)=>o(m,{type:a,value:e,name:n[c],icon:s[c],onClick:d,checked:r===e},e));return o("div",{className:"Selector",children:i})}export{j as S};
