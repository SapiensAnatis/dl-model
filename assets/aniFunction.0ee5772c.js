var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(s,e,a)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,i=(s,e)=>{for(var a in e||(e={}))d.call(e,a)&&t(s,a,e[a]);if(n)for(var a of n(e))m.call(e,a)&&t(s,a,e[a]);return s};import{y as l,z as o}from"./index.9dc87aba.js";function p(){return new Worker("/dl-model/assets/aniWorker.63742bf1.js",{type:"module"})}const u=async s=>{const e=new p;return new Promise(a=>{e.addEventListener("message",r=>{e.terminate(),a(r.data)}),e.postMessage(i({},s))})},w=async s=>{const e=await u(s);await l(e,"animation"),console.log("Animation DB Initialized")},A=s=>o({type:"search",store:"animation",index:"fullName",value:s}),x=s=>o({type:"getAllByIndex",store:"animation",index:"User",value:s});export{x as g,w as i,A as s};
