var G=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,a,n)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,r=(e,a)=>{for(var n in a||(a={}))p.call(a,n)&&m(e,n,a[n]);if(s)for(var n of s(a))x.call(a,n)&&m(e,n,a[n]);return e},f=(e,a)=>h(e,u(a));var i=(e,a)=>{var n={};for(var o in e)p.call(e,o)&&a.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&s)for(var o of s(e))a.indexOf(o)<0&&x.call(e,o)&&(n[o]=e[o]);return n};import{j as d}from"./index.7c041e85.js";import{B as C}from"./Box.78c38afe.js";const N={display:"flex",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start",placeContent:"center"};function k(w){var t=w,{list:e=[],component:a,onClick:n,style:o={}}=t,j=i(t,["list","component","onClick","style"]);const y=a,g=r(r({},N),o);return d(C,f(r({className:"Gallery",sx:g},j),{children:e.length?e.map((l,B)=>{var c;return d(y,r({onClick:n},l),(c=l.id)!=null?c:B)}):"No Data"}))}export{k as G};
