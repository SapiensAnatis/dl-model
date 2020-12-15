(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[41],{162:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(57),i=n(36),o=n(147),s=n.n(o),c=n(148),l=n(3),d=n(6),u=n(4),p=n(5),f=n(9),h=n(0),m=n(1),v=n(178),b=n(7),g=n(17),w=n(43),A=function(e){Object(u.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(l.a)(this,o);for(var r=arguments.length,d=new Array(r),u=0;u<r;u++)d[u]=arguments[u];return(e=t.call.apply(t,[this].concat(d))).disableInput=function(){return e.props.setIsLoading(!0)},e.enableInput=function(){return e.props.setIsLoading(!1)},e.initialize=Object(c.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.initScene(),e.materials=[],e.outlines={},e.models={},e.modelInfo={},t.next=8,e.loadMainModel();case 8:return t.next=10,null===(n=(r=e).afterMainModelLoad)||void 0===n?void 0:n.call(r);case 10:e.enableInput();case 11:case"end":return t.stop()}}),t)}))),e.initScene=function(){var t,n;e.viewport=e.props.viewport||{width:window.innerWidth,height:window.innerHeight},e.clock=new m.Clock,e.scene=new m.Scene,e.bgColor=e.props.bgColor,e.floor=Object(w.l)(),e.scene.add(e.floor),e.camera=new m.PerspectiveCamera(b.a.angle,e.viewport.width/e.viewport.height,b.a.near,b.a.far),e.cameraPosition=e.props.cameraPosition||[2,0,10],(t=e.camera.position).set.apply(t,Object(i.a)(e.cameraPosition)),e.camera.updateProjectionMatrix(),e.controls=new v.a(e.camera,e.mount),e.controlsPosition=e.props.controlsPosition||[0,0,0],(n=e.controls.target).set.apply(n,Object(i.a)(e.controlsPosition)),e.controls.update();var r=e.props.lights;e.addAllLights(r),e.loadedFX=new Map,e.rendererAA=new m.WebGLRenderer({antialias:!0,alpha:!0}),e.rendererAA.outputEncoding=m.sRGBEncoding,e.rendererNoAA=new m.WebGLRenderer({antialias:!1,alpha:!0}),e.rendererNoAA.outputEncoding=m.sRGBEncoding;var a=e.props.antiAliasing;e._AA=a,e.renderer=a?e.rendererAA:e.rendererNoAA,e.finalRenderer=e.renderer;var o=e.props.viewport,s=o.width,c=o.height;e.finalRenderer.setSize(s,c);var l=e.finalRenderer.domElement;e.canvas=l,e.animate()},e.loadMainModel=Object(c.a)(s.a.mark((function t(){var n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.model.id,e.modelInfo.main=n,r=Object(w.t)(n),t.next=5,Object(w.w)(r);case 5:return a=t.sent,e.models.main=a,e.basicMainProcessing(a),t.abrupt("return");case 9:case"end":return t.stop()}}),t)}))),e.addLight=function(t){t.id;var n=t.enable,r=Object(a.a)(t,["id","enable"]);if(n){var i=Object(w.m)(r);e.scene.add(i),e.lights.push(i)}},e.addAllLights=function(t){e.lights=[],t.forEach(e.addLight)},e.removeLight=function(t){return e.scene.remove(t)},e.removeAllLights=function(){return e.lights.forEach(e.removeLight)},e.addToScene=function(t){return e.floor.add(t)},e.basicMainProcessing=function(){var t=e.models.main;Object(w.x)(t);var n=e.matType,r=e.props.model.id;if(Object(g.q)(r)){var a=Object(w.b)("".concat(r,"n")).texturePath;Object(w.k)(t,{materialType:n,texturePath:a})}else Object(w.k)(t,{materialType:n,forced:!0});e.applyNewModelMat(t);var i=e.props.outline;e.outlines.main=Object(w.n)(t,i),e.addToScene(t)},e.updateViewer=function(t,n){var r,a;e.updateEnvironment(t,n),e.updateModel(t,n),null===(r=(a=e).otherUpdate)||void 0===r||r.call(a,t,n)},e.updateEnvironment=function(t,n){e.updateViewport(t.viewport,n.viewport),e.updateOutline(t.outline,n.outline),e.updateMaterial(t.material,n.material),e.updateLights(t.lights,n.lights),e.updateAscii(t.ascii,n.ascii),t.bgColor!==n.bgColor&&(e.bgColor=n.bgColor),e.AA=n.antiAliasing},e.updateModel=function(t,n){e.updateMainModel(t.model,n.model)},e.updateViewport=function(t,n){var r=n.width,a=n.height;t.width===r&&t.height===a||(e.viewport.width=r,e.viewport.height=a,e.finalRenderer.setSize(r,a),e.camera.aspect=r/a,e.camera.updateProjectionMatrix())},e.disposeMainModel=function(){var t=e.models.main;e.floor.remove(t),Object(w.o)(t)},e.replaceMainModel=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.disposeMainModel(),t.next=4,e.loadMainModel();case 4:e.applyNewModelMat(e.models.main),e.enableInput();case 6:case"end":return t.stop()}}),t)}))),e.updateMainModel=function(){var t=Object(c.a)(s.a.mark((function t(n,r){var a,i,o,c,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=r.id,n.id!==l){t.next=4;break}return t.abrupt("return");case 4:return null===(a=(i=e).beforeMainModelUpdate)||void 0===a||a.call(i),t.next=7,e.replaceMainModel();case 7:null===(o=(c=e).afterMainModelUpdate)||void 0===o||o.call(c);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.updateOutlineParams=function(t){Object.values(e.outlines).flat().forEach((function(e){Object(w.g)(e,t)}))},e.updateOutline=function(t,n){if(t!==n){var r=Object.keys(n).filter((function(e){return t[e]!==n[e]}));if(0!==r.length){var a=new Map(r.map((function(e){return[e,n[e]]})));e.updateOutlineParams(a)}}},e.saveMaterialReference=function(){var t=e.models.main;e.materials=Object(w.s)(t)},e.applyNewModelMat=function(t){var n=e.matParams;Object(w.y)(t,{prevParams:{useTexture:!0},params:n})},e.updateMaterial=function(t,n){if(t!==n){var r=e.matType,a=e.models.main,i=t.type!==r;i&&Object(w.k)(e.models.main,{materialType:r});var o=i?{useTexture:t.useTexture}:t,s=e.matParams;Object(w.y)(a,{prevParams:o,params:s})}},e.updateLights=function(t,n){t!==n&&(e.removeAllLights(),e.addAllLights(n))},e.updateAscii=function(){var t=Object(c.a)(s.a.mark((function t(r,a){var i,o,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object.keys(r).some((function(e){return r[e]!==a[e]}))){t.next=3;break}return t.abrupt("return");case 3:if(a.enable){t.next=9;break}return e.finalRenderer=e.renderer,i=e.renderer.domElement,e.canvas=i,t.abrupt("return");case 9:if(e.loadedFX.has("ascii")){t.next=18;break}return t.next=12,n.e(48).then(n.bind(null,185));case 12:o=t.sent,c=o.AsciiEffect,e.loadedFX.set("ascii",c),e.showAscii(),t.next=19;break;case 18:e.showAscii();case 19:e.finalRenderer.setSize(e.viewport.width,e.viewport.height);case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.showAscii=function(){var t=e.props.ascii,n=t.charSet,r=t.color,a=t.bgColor,i=t.invert,o=e.loadedFX.get("ascii");e.effect=new o(e.renderer,n,{invert:i});var s=e.viewport,c=s.width,l=s.height;e.effect.setSize(c,l);var d=e.effect.domElement;d.style.color=r,d.style.background=a,e.canvas=d,e.finalRenderer=e.effect},e.rotateFloor=function(t){var n=e.props.rotateSpeed;if(n){var r=n*t*Math.PI/2;e.floor.rotateY(r)}},e.everyAnimate=function(){var t=e.clock.getDelta();e.rotateFloor(t)},e.animate=function(){e.frameId=requestAnimationFrame(e.animate),e.everyAnimate(),e.finalRenderer.render(e.scene,e.camera)},e}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialize();case 2:this.finishedInit=!0;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.finishedInit){var t=this.props;console.log("Updated"),Object(g.n)(e,t).forEach((function(t){var n=Object(r.a)(t,2),a=n[0],i=n[1],o=e[a],s=Object.keys(i);0===s.length||"string"===typeof i?console.log("".concat(a,": ").concat(JSON.stringify(o)," to ").concat(JSON.stringify(i))):s.forEach((function(e){o[e]!==i[e]&&console.log("".concat(a,".").concat(e,": ").concat(JSON.stringify(o[e])," to ").concat(JSON.stringify(i[e])))}))})),this.updateViewer(e,t)}}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId),Object(w.o)(this.scene),this.mixer=null,this.clock=null,this.camera=null,this.controls=null,this.scene=null,this.renderer=null,this.rendererAA.renderLists.dispose(),this.rendererAA.dispose(),this.rendererAA=null,this.rendererNoAA.renderLists.dispose(),this.rendererNoAA.dispose(),this.rendererNoAA=null}},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{ref:function(t){e.mount=t}})}},{key:"AA",set:function(e){if(e!==this._AA){this._AA=e,this.renderer=e?this.rendererAA:this.rendererNoAA;var t=this.viewport,n=t.width,r=t.height;if(this.renderer.setSize(n,r),!this.props.ascii.enable){this.finalRenderer=this.renderer;var a=this.renderer.domElement;this.canvas=a}}}},{key:"matParams",get:function(){var e=this.props.material,t=e.type,n=Object(a.a)(e,["type"]),r=Object(w.u)(t);return Object(g.d)(n,r)}},{key:"matType",get:function(){return this.props.material.type}},{key:"bgColor",set:function(e){this.scene.background="transparent"!==e?new m.Color(e):null}},{key:"canvas",set:function(e){var t=this._canvas;t&&this.mount.removeChild(t),this.mount.appendChild(e),this._canvas=e},get:function(){return this._canvas}}]),o}(h.PureComponent);t.default=A}}]);
//# sourceMappingURL=41.935a311d.chunk.js.map