import{t as m,Q as r,ao as p}from"./vendor.9f6163a0.js";import{y as u}from"./index.539a7bf0.js";const f=[],y=`${u}/todo`,d=10,w=new Float32Array([0,0,0]),h=new r(0,1,0,0);async function Q(){const s=(await Promise.all(f.map(F))).map(x);j(s)}const A=async n=>{const s=`${n.name}.json`,o=JSON.stringify(n.toJSON()),t=new Blob([o],{type:"text/plain"});p.exports.saveAs(t,s)},j=async n=>{let s=0;for(const o of n)await A(o),s=++s%d,s||await P(1e3)},x=n=>{const{tracks:s}=n,o=i=>s.find(({name:l})=>l.includes(i)),t=o("jGameRoot.position")||o("position");if(!t)return console.log(`Failed ${n.name}`),n;const a=t.values.slice(-3).map(i=>-i);c(t,a),T(t),c(t,w);const e=o("jGameRoot.quaternion")||o("quaternion");return g(e),n},P=async n=>new Promise(s=>setTimeout(s,n)),v=n=>`${y}/${n}${n.endsWith(".json")?"":".json"}`,F=n=>{const s=v(n);return new Promise(o=>fetch(s).then(t=>t.json()).then(t=>m.parse(t)).then(o))},c=(n,[s,o,t])=>{const a=n.times.length,{values:e}=n;for(let i=0;i<a;i++)e[i*3]+=s,e[i*3+1]+=o,e[i*3+2]+=t},T=n=>{const s=n.times.length,{values:o}=n;for(let t=0;t<s;t++)o[t*3]*=-1,o[t*3+2]*=-1},g=n=>{const s=n.times.length,{values:o}=n;for(let t=0;t<s;t++){const e=new r(...o.slice(t*4,t*4+4)).multiply(h);o[t*4]=e.x,o[t*4+1]=e.y,o[t*4+2]=e.z,o[t*4+3]=e.w}};export{Q as processSummonClips};
