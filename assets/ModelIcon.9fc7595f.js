var j=Object.defineProperty;var s=Object.getOwnPropertySymbols;var t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var e=(n,c,a)=>c in n?j(n,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[c]=a,g=(n,c)=>{for(var a in c||(c={}))t.call(c,a)&&e(n,a,c[a]);if(s)for(var a of s(c))r.call(c,a)&&e(n,a,c[a]);return n};var h=(n,c)=>{var a={};for(var o in n)t.call(n,o)&&c.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&s)for(var o of s(n))c.indexOf(o)<0&&r.call(n,o)&&(a[o]=n[o]);return a};import{j as l}from"./index.18c8aea3.js";const p=n=>n&&["b","c","d","h","r","w"].includes(n[0]);function f(a){var o=a,{modelId:n}=o,c=h(o,["modelId"]);const i=p(n)?`img/icon/${n}.png`:"";return i&&l("img",g({src:i,alt:n,loading:"lazy"},c))}export{f as M,p as h};
