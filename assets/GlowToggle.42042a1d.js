var v=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var t=(o,a,e)=>a in o?v(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,g=(o,a)=>{for(var e in a||(a={}))n.call(a,e)&&t(o,e,a[e]);if(l)for(var e of l(a))r.call(a,e)&&t(o,e,a[e]);return o},G=(o,a)=>w(o,x(a));var f=(o,a)=>{var e={};for(var c in o)n.call(o,c)&&a.indexOf(c)<0&&(e[c]=o[c]);if(o!=null&&l)for(var c of l(o))a.indexOf(c)<0&&r.call(o,c)&&(e[c]=o[c]);return e};import{j as s}from"./index.cd5a105e.js";function b(T){var i=T,{type:o,value:a,icon:e,checked:c=!1,name:d=a,onClick:h=()=>{}}=i,j=f(i,["type","value","icon","checked","name","onClick"]);const m=`GlowToggle ${c?"checked":""}`,p=o==="icon"?s("img",{src:e,alt:d}):s("span",{children:d});return s("div",G(g({className:m,"data-type":o,"data-value":a,onClick:h},j),{children:p}))}export{b as G};
