var e=Object.defineProperty;var a=Object.getOwnPropertySymbols;var t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var b=(n,c,o)=>c in n?e(n,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[c]=o,g=(n,c)=>{for(var o in c||(c={}))t.call(c,o)&&b(n,o,c[o]);if(a)for(var o of a(c))r.call(c,o)&&b(n,o,c[o]);return n};var h=(n,c)=>{var o={};for(var s in n)t.call(n,s)&&c.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&a)for(var s of a(n))c.indexOf(s)<0&&r.call(n,s)&&(o[s]=n[s]);return o};import{j}from"./index.6bbc6b5b.js";const l=n=>n&&["b","c","d","h","r","w"].includes(n[0]);function x(o){var s=o,{modelId:n}=s,c=h(s,["modelId"]);const i=l(n)?`img/icon/${n}.png`:"";return i&&j("img",g({src:i,alt:n,loading:"lazy"},c))}export{x as M,l as h};
