var v=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var t=(o,a,c)=>a in o?v(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c,g=(o,a)=>{for(var c in a||(a={}))n.call(a,c)&&t(o,c,a[c]);if(l)for(var c of l(a))r.call(a,c)&&t(o,c,a[c]);return o},G=(o,a)=>w(o,x(a));var f=(o,a)=>{var c={};for(var e in o)n.call(o,e)&&a.indexOf(e)<0&&(c[e]=o[e]);if(o!=null&&l)for(var e of l(o))a.indexOf(e)<0&&r.call(o,e)&&(c[e]=o[e]);return c};import{j as s}from"./index.9dc87aba.js";function $(T){var i=T,{type:o,value:a,icon:c,checked:e=!1,name:d=a,onClick:h=()=>{}}=i,j=f(i,["type","value","icon","checked","name","onClick"]);const m=`GlowToggle ${e?"checked":""}`,p=o==="icon"?s("img",{src:c,alt:d}):s("span",{children:d});return s("div",G(g({className:m,"data-type":o,"data-value":a,onClick:h},j),{children:p}))}export{$ as G};
