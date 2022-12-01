import{ak as P,ay as W,az as X,aA as J,aB as q,aC as F,aD as Z,aE as U,aF as Q,aG as $,aH as B,aI as ee,ar as te,aJ as se,aK as ne,aq as ie,aL as re,aM as oe,aN as ae,aO as ce,aP as le,aQ as ue}from"./index.8d5f3838.js";class j{constructor(){this.pluginCallbacks=[],this.register(function(e){return new Ee(e)}),this.register(function(e){return new ye(e)}),this.register(function(e){return new Ie(e)}),this.register(function(e){return new Ae(e)}),this.register(function(e){return new Me(e)}),this.register(function(e){return new we(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,s,r,t){const i=new Te,n=[];for(let o=0,a=this.pluginCallbacks.length;o<a;o++)n.push(this.pluginCallbacks[o](i));i.setPlugins(n),i.write(e,s,t).catch(r)}parseAsync(e,s){const r=this;return new Promise(function(t,i){r.parse(e,t,i,s)})}}const x={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123,FLOAT:5126,UNSIGNED_INT:5125,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},A={};A[te]=x.NEAREST;A[se]=x.NEAREST_MIPMAP_NEAREST;A[ne]=x.NEAREST_MIPMAP_LINEAR;A[ie]=x.LINEAR;A[re]=x.LINEAR_MIPMAP_NEAREST;A[oe]=x.LINEAR_MIPMAP_LINEAR;A[ae]=x.CLAMP_TO_EDGE;A[ce]=x.REPEAT;A[le]=x.MIRRORED_REPEAT;const G={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},k=12,fe=1179937895,he=2,z=8,pe=1313821514,de=5130562;function L(c,e){return c.length===e.length&&c.every(function(s,r){return s===e[r]})}function ge(c){return new TextEncoder().encode(c).buffer}function xe(c){return L(c.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function me(c,e,s){const r={min:new Array(c.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(c.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let t=e;t<e+s;t++)for(let i=0;i<c.itemSize;i++){let n;c.itemSize>4?n=c.array[t*c.itemSize+i]:i===0?n=c.getX(t):i===1?n=c.getY(t):i===2?n=c.getZ(t):i===3&&(n=c.getW(t)),r.min[i]=Math.min(r.min[i],n),r.max[i]=Math.max(r.max[i],n)}return r}function Y(c){return Math.ceil(c/4)*4}function D(c,e=0){const s=Y(c.byteLength);if(s!==c.byteLength){const r=new Uint8Array(s);if(r.set(new Uint8Array(c)),e!==0)for(let t=c.byteLength;t<s;t++)r[t]=e;return r.buffer}return c}function V(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function H(c,e){if(c.toBlob!==void 0)return new Promise(r=>c.toBlob(r,e));let s;return e==="image/jpeg"?s=.92:e==="image/webp"&&(s=.8),c.convertToBlob({type:e,quality:s})}class Te{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,s,r){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},r),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const t=this,i=t.buffers,n=t.json;r=t.options;const o=t.extensionsUsed,a=new Blob(i,{type:"application/octet-stream"}),l=Object.keys(o);if(l.length>0&&(n.extensionsUsed=l),n.buffers&&n.buffers.length>0&&(n.buffers[0].byteLength=a.size),r.binary===!0){const h=new FileReader;h.readAsArrayBuffer(a),h.onloadend=function(){const u=D(h.result),m=new DataView(new ArrayBuffer(z));m.setUint32(0,u.byteLength,!0),m.setUint32(4,de,!0);const f=D(ge(JSON.stringify(n)),32),p=new DataView(new ArrayBuffer(z));p.setUint32(0,f.byteLength,!0),p.setUint32(4,pe,!0);const d=new ArrayBuffer(k),E=new DataView(d);E.setUint32(0,fe,!0),E.setUint32(4,he,!0);const T=k+p.byteLength+f.byteLength+m.byteLength+u.byteLength;E.setUint32(8,T,!0);const S=new Blob([d,p,f,m,u],{type:"application/octet-stream"}),g=new FileReader;g.readAsArrayBuffer(S),g.onloadend=function(){s(g.result)}}}else if(n.buffers&&n.buffers.length>0){const h=new FileReader;h.readAsDataURL(a),h.onloadend=function(){const u=h.result;n.buffers[0].uri=u,s(n)}}else s(n)}serializeUserData(e,s){if(Object.keys(e.userData).length===0)return;const r=this.options,t=this.extensionsUsed;try{const i=JSON.parse(JSON.stringify(e.userData));if(r.includeCustomExtensions&&i.gltfExtensions){s.extensions===void 0&&(s.extensions={});for(const n in i.gltfExtensions)s.extensions[n]=i.gltfExtensions[n],t[n]=!0;delete i.gltfExtensions}Object.keys(i).length>0&&(s.extras=i)}catch(i){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+i.message)}}getUID(e,s=!1){if(this.uids.has(e)===!1){const t=new Map;t.set(!0,this.uid++),t.set(!1,this.uid++),this.uids.set(e,t)}return this.uids.get(e).get(s)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const r=new P;for(let t=0,i=e.count;t<i;t++)if(Math.abs(r.fromBufferAttribute(e,t).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const s=this.cache;if(s.attributesNormalized.has(e))return s.attributesNormalized.get(e);const r=e.clone(),t=new P;for(let i=0,n=r.count;i<n;i++)t.fromBufferAttribute(r,i),t.x===0&&t.y===0&&t.z===0?t.setX(1):t.normalize(),r.setXYZ(i,t.x,t.y,t.z);return s.attributesNormalized.set(e,r),r}applyTextureTransform(e,s){let r=!1;const t={};(s.offset.x!==0||s.offset.y!==0)&&(t.offset=s.offset.toArray(),r=!0),s.rotation!==0&&(t.rotation=s.rotation,r=!0),(s.repeat.x!==1||s.repeat.y!==1)&&(t.scale=s.repeat.toArray(),r=!0),r&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=t,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,s){if(e===s)return e;function r(f){return f.encoding===ue?function(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}:function(d){return d}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const t=e==null?void 0:e.image,i=s==null?void 0:s.image,n=Math.max((t==null?void 0:t.width)||0,(i==null?void 0:i.width)||0),o=Math.max((t==null?void 0:t.height)||0,(i==null?void 0:i.height)||0),a=V();a.width=n,a.height=o;const l=a.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,n,o);const h=l.getImageData(0,0,n,o);if(t){l.drawImage(t,0,0,n,o);const f=r(e),p=l.getImageData(0,0,n,o).data;for(let d=2;d<p.length;d+=4)h.data[d]=f(p[d]/256)*256}if(i){l.drawImage(i,0,0,n,o);const f=r(s),p=l.getImageData(0,0,n,o).data;for(let d=1;d<p.length;d+=4)h.data[d]=f(p[d]/256)*256}l.putImageData(h,0,0);const m=(e||s).clone();return m.source=new W(a),m.encoding=X,m}processBuffer(e){const s=this.json,r=this.buffers;return s.buffers||(s.buffers=[{byteLength:0}]),r.push(e),0}processBufferView(e,s,r,t,i){const n=this.json;n.bufferViews||(n.bufferViews=[]);let o;s===x.UNSIGNED_BYTE?o=1:s===x.UNSIGNED_SHORT?o=2:o=4;const a=Y(t*e.itemSize*o),l=new DataView(new ArrayBuffer(a));let h=0;for(let f=r;f<r+t;f++)for(let p=0;p<e.itemSize;p++){let d;e.itemSize>4?d=e.array[f*e.itemSize+p]:p===0?d=e.getX(f):p===1?d=e.getY(f):p===2?d=e.getZ(f):p===3&&(d=e.getW(f)),s===x.FLOAT?l.setFloat32(h,d,!0):s===x.UNSIGNED_INT?l.setUint32(h,d,!0):s===x.UNSIGNED_SHORT?l.setUint16(h,d,!0):s===x.UNSIGNED_BYTE&&l.setUint8(h,d),h+=o}const u={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:a};return i!==void 0&&(u.target=i),i===x.ARRAY_BUFFER&&(u.byteStride=e.itemSize*o),this.byteOffset+=a,n.bufferViews.push(u),{id:n.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const s=this,r=s.json;return r.bufferViews||(r.bufferViews=[]),new Promise(function(t){const i=new FileReader;i.readAsArrayBuffer(e),i.onloadend=function(){const n=D(i.result),o={buffer:s.processBuffer(n),byteOffset:s.byteOffset,byteLength:n.byteLength};s.byteOffset+=n.byteLength,t(r.bufferViews.push(o)-1)}})}processAccessor(e,s,r,t){const i=this.json,n={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=x.FLOAT;else if(e.array.constructor===Uint32Array)o=x.UNSIGNED_INT;else if(e.array.constructor===Uint16Array)o=x.UNSIGNED_SHORT;else if(e.array.constructor===Uint8Array)o=x.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");if(r===void 0&&(r=0),t===void 0&&(t=e.count),t===0)return null;const a=me(e,r,t);let l;s!==void 0&&(l=e===s.index?x.ELEMENT_ARRAY_BUFFER:x.ARRAY_BUFFER);const h=this.processBufferView(e,o,r,t,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:t,max:a.max,min:a.min,type:n[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),i.accessors||(i.accessors=[]),i.accessors.push(u)-1}processImage(e,s,r,t="image/png"){const i=this,n=i.cache,o=i.json,a=i.options,l=i.pending;n.images.has(e)||n.images.set(e,{});const h=n.images.get(e),u=t+":flipY/"+r.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const m={mimeType:t},f=V();f.width=Math.min(e.width,a.maxTextureSize),f.height=Math.min(e.height,a.maxTextureSize);const p=f.getContext("2d");if(r===!0&&(p.translate(0,f.height),p.scale(1,-1)),e.data!==void 0){s!==J&&console.error("GLTFExporter: Only RGBAFormat is supported."),(e.width>a.maxTextureSize||e.height>a.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const E=new Uint8ClampedArray(e.height*e.width*4);for(let T=0;T<E.length;T+=4)E[T+0]=e.data[T+0],E[T+1]=e.data[T+1],E[T+2]=e.data[T+2],E[T+3]=e.data[T+3];p.putImageData(new ImageData(E,e.width,e.height),0,0)}else p.drawImage(e,0,0,f.width,f.height);a.binary===!0?l.push(H(f,t).then(E=>i.processBufferViewImage(E)).then(E=>{m.bufferView=E})):f.toDataURL!==void 0?m.uri=f.toDataURL(t):l.push(H(f,t).then(E=>new FileReader().readAsDataURL(E)).then(E=>{m.uri=E}));const d=o.images.push(m)-1;return h[u]=d,d}processSampler(e){const s=this.json;s.samplers||(s.samplers=[]);const r={magFilter:A[e.magFilter],minFilter:A[e.minFilter],wrapS:A[e.wrapS],wrapT:A[e.wrapT]};return s.samplers.push(r)-1}processTexture(e){const s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]);let t=e.userData.mimeType;t==="image/webp"&&(t="image/png");const i={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,t)};e.name&&(i.name=e.name),this._invokeAll(function(o){o.writeTexture&&o.writeTexture(e,i)});const n=r.textures.push(i)-1;return s.textures.set(e,n),n}processMaterial(e){const s=this.cache,r=this.json;if(s.materials.has(e))return s.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;r.materials||(r.materials=[]);const t={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const i=e.color.toArray().concat([e.opacity]);if(L(i,[1,1,1,1])||(t.pbrMetallicRoughness.baseColorFactor=i),e.isMeshStandardMaterial?(t.pbrMetallicRoughness.metallicFactor=e.metalness,t.pbrMetallicRoughness.roughnessFactor=e.roughness):(t.pbrMetallicRoughness.metallicFactor=.5,t.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),a={index:this.processTexture(o)};this.applyTextureTransform(a,o),t.pbrMetallicRoughness.metallicRoughnessTexture=a}if(e.map){const o={index:this.processTexture(e.map)};this.applyTextureTransform(o,e.map),t.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive.clone().multiplyScalar(e.emissiveIntensity),a=Math.max(o.r,o.g,o.b);if(a>1&&(o.multiplyScalar(1/a),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),a>0&&(t.emissiveFactor=o.toArray()),e.emissiveMap){const l={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(l,e.emissiveMap),t.emissiveTexture=l}}if(e.normalMap){const o={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),t.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),t.occlusionTexture=o}e.transparent?t.alphaMode="BLEND":e.alphaTest>0&&(t.alphaMode="MASK",t.alphaCutoff=e.alphaTest),e.side===q&&(t.doubleSided=!0),e.name!==""&&(t.name=e.name),this.serializeUserData(e,t),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,t)});const n=r.materials.push(t)-1;return s.materials.set(e,n),n}processMesh(e){const s=this.cache,r=this.json,t=[e.geometry.uuid];if(Array.isArray(e.material))for(let g=0,y=e.material.length;g<y;g++)t.push(e.material[g].uuid);else t.push(e.material.uuid);const i=t.join(":");if(s.meshes.has(i))return s.meshes.get(i);const n=e.geometry;let o;e.isLineSegments?o=x.LINES:e.isLineLoop?o=x.LINE_LOOP:e.isLine?o=x.LINE_STRIP:e.isPoints?o=x.POINTS:o=e.material.wireframe?x.LINES:x.TRIANGLES;const a={},l={},h=[],u=[],m={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=n.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),n.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let p=null;for(let g in n.attributes){if(g.slice(0,5)==="morph")continue;const y=n.attributes[g];if(g=m[g]||g.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(g)||(g="_"+g),s.attributes.has(this.getUID(y))){l[g]=s.attributes.get(this.getUID(y));continue}p=null;const M=y.array;g==="JOINTS_0"&&!(M instanceof Uint16Array)&&!(M instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new F(new Uint16Array(M),y.itemSize,y.normalized));const I=this.processAccessor(p||y,n);I!==null&&(l[g]=I,s.attributes.set(this.getUID(y),I))}if(f!==void 0&&n.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const g=[],y=[],w={};if(e.morphTargetDictionary!==void 0)for(const M in e.morphTargetDictionary)w[e.morphTargetDictionary[M]]=M;for(let M=0;M<e.morphTargetInfluences.length;++M){const I={};let O=!1;for(const b in n.morphAttributes){if(b!=="position"&&b!=="normal"){O||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),O=!0);continue}const R=n.morphAttributes[b][M],v=b.toUpperCase(),_=n.attributes[b];if(s.attributes.has(this.getUID(R,!0))){I[v]=s.attributes.get(this.getUID(R,!0));continue}const C=R.clone();if(!n.morphTargetsRelative)for(let N=0,K=R.count;N<K;N++)C.setXYZ(N,R.getX(N)-_.getX(N),R.getY(N)-_.getY(N),R.getZ(N)-_.getZ(N));I[v]=this.processAccessor(C,n),s.attributes.set(this.getUID(_,!0),I[v])}u.push(I),g.push(e.morphTargetInfluences[M]),e.morphTargetDictionary!==void 0&&y.push(w[M])}a.weights=g,y.length>0&&(a.extras={},a.extras.targetNames=y)}const d=Array.isArray(e.material);if(d&&n.groups.length===0)return null;const E=d?e.material:[e.material],T=d?n.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let g=0,y=T.length;g<y;g++){const w={mode:o,attributes:l};if(this.serializeUserData(n,w),u.length>0&&(w.targets=u),n.index!==null){let I=this.getUID(n.index);(T[g].start!==void 0||T[g].count!==void 0)&&(I+=":"+T[g].start+":"+T[g].count),s.attributes.has(I)?w.indices=s.attributes.get(I):(w.indices=this.processAccessor(n.index,n,T[g].start,T[g].count),s.attributes.set(I,w.indices)),w.indices===null&&delete w.indices}const M=this.processMaterial(E[T[g].materialIndex]);M!==null&&(w.material=M),h.push(w)}a.primitives=h,r.meshes||(r.meshes=[]),this._invokeAll(function(g){g.writeMesh&&g.writeMesh(e,a)});const S=r.meshes.push(a)-1;return s.meshes.set(i,S),S}processCamera(e){const s=this.json;s.cameras||(s.cameras=[]);const r=e.isOrthographicCamera,t={type:r?"orthographic":"perspective"};return r?t.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:t.perspective={aspectRatio:e.aspect,yfov:Z.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(t.name=e.type),s.cameras.push(t)-1}processAnimation(e,s){const r=this.json,t=this.nodeMap;r.animations||(r.animations=[]),e=j.Utils.mergeMorphTargetTracks(e.clone(),s);const i=e.tracks,n=[],o=[];for(let a=0;a<i.length;++a){const l=i[a],h=U.parseTrackName(l.name);let u=U.findNode(s,h.nodeName);const m=G[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!m)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;const f=1;let p=l.values.length/l.times.length;m===G.morphTargetInfluences&&(p/=u.morphTargetInfluences.length);let d;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(d="CUBICSPLINE",p/=3):l.getInterpolation()===Q?d="STEP":d="LINEAR",o.push({input:this.processAccessor(new F(l.times,f)),output:this.processAccessor(new F(l.values,p)),interpolation:d}),n.push({sampler:o.length-1,target:{node:t.get(u),path:m}})}return r.animations.push({name:e.name||"clip_"+r.animations.length,samplers:o,channels:n}),r.animations.length-1}processSkin(e){const s=this.json,r=this.nodeMap,t=s.nodes[r.get(e)],i=e.skeleton;if(i===void 0)return null;const n=e.skeleton.bones[0];if(n===void 0)return null;const o=[],a=new Float32Array(i.bones.length*16),l=new $;for(let u=0;u<i.bones.length;++u)o.push(r.get(i.bones[u])),l.copy(i.boneInverses[u]),l.multiply(e.bindMatrix).toArray(a,u*16);return s.skins===void 0&&(s.skins=[]),s.skins.push({inverseBindMatrices:this.processAccessor(new F(a,16)),joints:o,skeleton:r.get(n)}),t.skin=s.skins.length-1}processNode(e){const s=this.json,r=this.options,t=this.nodeMap;s.nodes||(s.nodes=[]);const i={};if(r.trs){const o=e.quaternion.toArray(),a=e.position.toArray(),l=e.scale.toArray();L(o,[0,0,0,1])||(i.rotation=o),L(a,[0,0,0])||(i.translation=a),L(l,[1,1,1])||(i.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),xe(e.matrix)===!1&&(i.matrix=e.matrix.elements);if(e.name!==""&&(i.name=String(e.name)),this.serializeUserData(e,i),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(i.mesh=o)}else e.isCamera&&(i.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let a=0,l=e.children.length;a<l;a++){const h=e.children[a];if(h.visible||r.onlyVisible===!1){const u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(i.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,i)});const n=s.nodes.push(i)-1;return t.set(e,n),n}processScene(e){const s=this.json,r=this.options;s.scenes||(s.scenes=[],s.scene=0);const t={};e.name!==""&&(t.name=e.name),s.scenes.push(t);const i=[];for(let n=0,o=e.children.length;n<o;n++){const a=e.children[n];if(a.visible||r.onlyVisible===!1){const l=this.processNode(a);l!==null&&i.push(l)}}i.length>0&&(t.nodes=i),this.serializeUserData(e,t)}processObjects(e){const s=new B;s.name="AuxScene";for(let r=0;r<e.length;r++)s.children.push(e[r]);this.processScene(s)}processInput(e){const s=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(t){t.beforeParse&&t.beforeParse(e)});const r=[];for(let t=0;t<e.length;t++)e[t]instanceof B?this.processScene(e[t]):r.push(e[t]);r.length>0&&this.processObjects(r);for(let t=0;t<this.skins.length;++t)this.processSkin(this.skins[t]);for(let t=0;t<s.animations.length;++t)this.processAnimation(s.animations[t],e[0]);this._invokeAll(function(t){t.afterParse&&t.afterParse(e)})}_invokeAll(e){for(let s=0,r=this.plugins.length;s<r;s++)e(this.plugins[s])}}class Ee{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,s){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const r=this.writer,t=r.json,i=r.extensionsUsed,n={};e.name&&(n.name=e.name),n.color=e.color.toArray(),n.intensity=e.intensity,e.isDirectionalLight?n.type="directional":e.isPointLight?(n.type="point",e.distance>0&&(n.range=e.distance)):e.isSpotLight&&(n.type="spot",e.distance>0&&(n.range=e.distance),n.spot={},n.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,n.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),i[this.name]||(t.extensions=t.extensions||{},t.extensions[this.name]={lights:[]},i[this.name]=!0);const o=t.extensions[this.name].lights;o.push(n),s.extensions=s.extensions||{},s.extensions[this.name]={light:o.length-1}}}class ye{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,s){if(!e.isMeshBasicMaterial)return;const t=this.writer.extensionsUsed;s.extensions=s.extensions||{},s.extensions[this.name]={},t[this.name]=!0,s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=.9}}class Me{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,s){if(!e.isMeshPhysicalMaterial)return;const r=this.writer,t=r.extensionsUsed,i={};if(i.clearcoatFactor=e.clearcoat,e.clearcoatMap){const n={index:r.processTexture(e.clearcoatMap)};r.applyTextureTransform(n,e.clearcoatMap),i.clearcoatTexture=n}if(i.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const n={index:r.processTexture(e.clearcoatRoughnessMap)};r.applyTextureTransform(n,e.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=n}if(e.clearcoatNormalMap){const n={index:r.processTexture(e.clearcoatNormalMap)};r.applyTextureTransform(n,e.clearcoatNormalMap),i.clearcoatNormalTexture=n}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class we{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,s){if(!e.isMeshPhysicalMaterial)return;const r=this.writer,t=r.extensionsUsed,i={};if(i.iridescenceFactor=e.iridescence,e.iridescenceMap){const n={index:r.processTexture(e.iridescenceMap)};r.applyTextureTransform(n,e.iridescenceMap),i.iridescenceTexture=n}if(i.iridescenceIor=e.iridescenceIOR,i.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const n={index:r.processTexture(e.iridescenceThicknessMap)};r.applyTextureTransform(n,e.iridescenceThicknessMap),i.iridescenceThicknessTexture=n}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Ie{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,s){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const r=this.writer,t=r.extensionsUsed,i={};if(i.transmissionFactor=e.transmission,e.transmissionMap){const n={index:r.processTexture(e.transmissionMap)};r.applyTextureTransform(n,e.transmissionMap),i.transmissionTexture=n}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Ae{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,s){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const r=this.writer,t=r.extensionsUsed,i={};if(i.thicknessFactor=e.thickness,e.thicknessMap){const n={index:r.processTexture(e.thicknessMap)};r.applyTextureTransform(n,e.thicknessMap),i.thicknessTexture=n}i.attenuationDistance=e.attenuationDistance,i.attenuationColor=e.attenuationColor.toArray(),s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}j.Utils={insertKeyframe:function(c,e){const r=c.getValueSize(),t=new c.TimeBufferType(c.times.length+1),i=new c.ValueBufferType(c.values.length+r),n=c.createInterpolant(new c.ValueBufferType(r));let o;if(c.times.length===0){t[0]=e;for(let a=0;a<r;a++)i[a]=0;o=0}else if(e<c.times[0]){if(Math.abs(c.times[0]-e)<.001)return 0;t[0]=e,t.set(c.times,1),i.set(n.evaluate(e),0),i.set(c.values,r),o=0}else if(e>c.times[c.times.length-1]){if(Math.abs(c.times[c.times.length-1]-e)<.001)return c.times.length-1;t[t.length-1]=e,t.set(c.times,0),i.set(c.values,0),i.set(n.evaluate(e),c.values.length),o=t.length-1}else for(let a=0;a<c.times.length;a++){if(Math.abs(c.times[a]-e)<.001)return a;if(c.times[a]<e&&c.times[a+1]>e){t.set(c.times.slice(0,a+1),0),t[a+1]=e,t.set(c.times.slice(a+1),a+2),i.set(c.values.slice(0,(a+1)*r),0),i.set(n.evaluate(e),(a+1)*r),i.set(c.values.slice((a+1)*r),(a+2)*r),o=a+1;break}}return c.times=t,c.values=i,o},mergeMorphTargetTracks:function(c,e){const s=[],r={},t=c.tracks;for(let i=0;i<t.length;++i){let n=t[i];const o=U.parseTrackName(n.name),a=U.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){s.push(n);continue}if(n.createInterpolant!==n.InterpolantFactoryMethodDiscrete&&n.createInterpolant!==n.InterpolantFactoryMethodLinear){if(n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),n=n.clone(),n.setInterpolation(ee)}const l=a.morphTargetInfluences.length,h=a.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(r[a.uuid]===void 0){u=n.clone();const f=new u.ValueBufferType(l*u.times.length);for(let p=0;p<u.times.length;p++)f[p*l+h]=u.values[p];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=f,r[a.uuid]=u,s.push(u);continue}const m=n.createInterpolant(new n.ValueBufferType(1));u=r[a.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=m.evaluate(u.times[f]);for(let f=0;f<n.times.length;f++){const p=this.insertKeyframe(u,n.times[f]);u.values[p*l+h]=n.values[f]}}return c.tracks=s,c}};export{j as GLTFExporter};
