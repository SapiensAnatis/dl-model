var G=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var f=(e,a,n)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,r=(e,a)=>{for(var n in a||(a={}))x.call(a,n)&&f(e,n,a[n]);if(s)for(var n of s(a))c.call(a,n)&&f(e,n,a[n]);return e},m=(e,a)=>b(e,h(a));var i=(e,a)=>{var n={};for(var o in e)x.call(e,o)&&a.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&s)for(var o of s(e))a.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};import{j as d}from"./index.8ee699b6.js";import{B as u}from"./Box.09ff57b9.js";const C={display:"flex",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start",placeContent:"center"};function k(N){var t=N,{list:e=[],component:a,onClick:n,style:o={}}=t,j=i(t,["list","component","onClick","style"]);const y=a,g=r(r({},C),o);return d(u,m(r({className:"Gallery",sx:g},j),{children:e.length?e.map((l,B)=>{var p;return d(y,r({onClick:n},l),(p=l.id)!=null?p:B)}):"No Data"}))}export{k as G};
