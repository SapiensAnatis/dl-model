import{G as d}from"./GlowToggle.421664b5.js";import{j as o}from"./index.6c38cc78.js";function j({type:a,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const i=e=>{e.stopPropagation();const{value:c}=e.currentTarget.dataset;t(c)},m=l.map((e,c)=>o(d,{type:a,value:e,name:n[c],icon:s[c],onClick:i,checked:r===e},e));return o("div",{className:"Selector",children:m})}export{j as S};
