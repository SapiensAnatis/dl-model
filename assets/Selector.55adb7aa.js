import{G as d}from"./GlowToggle.657afc87.js";import{j as c}from"./index.5ce614b5.js";function f({type:o,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const i=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;t(a)},m=l.map((e,a)=>c(d,{type:o,value:e,name:n[a],icon:s[a],onClick:i,checked:r===e},e));return c("div",{className:"Selector",children:m})}export{f as S};
