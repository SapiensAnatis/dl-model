import{a0 as i,a1 as n}from"./index.e3161ce3.js";function o(){return new Worker("/dl-model/assets/aniWorker.cc225a2a.js",{type:"module"})}const r=async e=>{const a=new o;return new Promise(s=>{a.addEventListener("message",t=>{a.terminate(),s(t.data)}),a.postMessage({...e})})},m=async e=>{const a=await r(e);await i(a,"animation"),console.info("Animation DB Initialized")},d=e=>n({type:"search",store:"animation",index:"fullName",value:e}),l=e=>n({type:"getAllByIndex",store:"animation",index:"User",value:e});export{l as g,m as i,d as s};
