import{G as m}from"./GlowToggle.42042a1d.js";import{j as o}from"./index.cd5a105e.js";function j({type:c,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;t(a)},i=l.map((e,a)=>o(m,{type:c,value:e,name:n[a],icon:s[a],onClick:d,checked:r===e},e));return o("div",{className:"Selector",children:i})}export{j as S};
