import{Z as i,X as a}from"./three-95e0c7cb.js";import{P as f,F as r}from"./Pass-b3525e48.js";class l extends f{constructor(s,t){super(),this.textureID=t!==void 0?t:"tDiffuse",s instanceof i?(this.uniforms=s.uniforms,this.material=s):s&&(this.uniforms=a.clone(s.uniforms),this.material=new i({defines:Object.assign({},s.defines),uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader})),this.fsQuad=new r(this.material)}render(s,t,e){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=e.texture),this.fsQuad.material=this.material,this.renderToScreen?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(t),this.clear&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),this.fsQuad.render(s))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}export{l as ShaderPass};
