import{G as m}from"./GlowToggle.23164f5d.js";import{j as a}from"./index.61c1998e.js";function f({type:c,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:o}=e.currentTarget.dataset;t(o)},i=l.map((e,o)=>a(m,{type:c,value:e,name:n[o],icon:s[o],onClick:d,checked:r===e},e));return a("div",{className:"Selector",children:i})}export{f as S};
