import{G as m}from"./GlowToggle.841e1dbe.js";import{j as a}from"./index.7fde6049.js";function f({type:r,value:c,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:o}=e.currentTarget.dataset;t(o)},i=l.map((e,o)=>a(m,{type:r,value:e,name:n[o],icon:s[o],onClick:d,checked:c===e},e));return a("div",{className:"Selector",children:i})}export{f as S};
