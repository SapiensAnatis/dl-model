var v=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var t=(o,e,a)=>e in o?v(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,g=(o,e)=>{for(var a in e||(e={}))n.call(e,a)&&t(o,a,e[a]);if(s)for(var a of s(e))r.call(e,a)&&t(o,a,e[a]);return o},f=(o,e)=>w(o,x(e));var G=(o,e)=>{var a={};for(var l in o)n.call(o,l)&&e.indexOf(l)<0&&(a[l]=o[l]);if(o!=null&&s)for(var l of s(o))e.indexOf(l)<0&&r.call(o,l)&&(a[l]=o[l]);return a};import{j as c}from"./index.7fde6049.js";function b(T){var i=T,{type:o,value:e,icon:a,checked:l=!1,name:d=e,onClick:h=()=>{}}=i,j=G(i,["type","value","icon","checked","name","onClick"]);const m=`GlowToggle ${l?"checked":""}`,p=o==="icon"?c("img",{src:a,alt:d}):c("span",{children:d});return c("div",f(g({className:m,"data-type":o,"data-value":e,onClick:h},j),{children:p}))}export{b as G};
