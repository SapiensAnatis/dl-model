var f=Object.defineProperty;var a=Object.getOwnPropertySymbols;var t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var g=(n,c,o)=>c in n?f(n,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[c]=o,h=(n,c)=>{for(var o in c||(c={}))t.call(c,o)&&g(n,o,c[o]);if(a)for(var o of a(c))r.call(c,o)&&g(n,o,c[o]);return n};var e=(n,c)=>{var o={};for(var s in n)t.call(n,s)&&c.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&a)for(var s of a(n))c.indexOf(s)<0&&r.call(n,s)&&(o[s]=n[s]);return o};import{j}from"./index.a3818f6b.js";const l=n=>n&&["b","c","d","h","r","w"].includes(n[0]);function x(o){var s=o,{modelId:n}=s,c=e(s,["modelId"]);const i=l(n)?`img/icon/${n}.png`:"";return i&&j("img",h({src:i,alt:n,loading:"lazy"},c))}export{x as M,l as h};
