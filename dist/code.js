!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}({5:function(e,t){var a=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}s((n=n.apply(e,t||[])).next())}))};let n=new class{start(e){this.id=setInterval(e,1e3/15)}stop(){clearInterval(this.id)}};var r=[],i=[],o="**~~ Focus-order annotations ~~**";figma.showUI(__html__,{width:375,height:480}),figma.ui.onmessage=e=>a(this,void 0,void 0,(function*(){var t={};if("add-focus"===e.type){var u=[],g=[],d=figma.currentPage.selection;if(d.length>0){for(let e of d)"annotation"!=e.getSharedPluginData("a11y","type")&&(u.push(e.name),g.push(e.id));t={type:e.type,loading:!1,names:u,ids:g}}}else if("create-annotationUI"===e.type){var f=figma.getNodeById(e.id);if("annotation"!==f.getSharedPluginData("a11y","type")){var c=yield function(e,t){return a(this,void 0,void 0,(function*(){var a=t.absoluteTransform[0][2],n=t.absoluteTransform[1][2],r=t.width,i=t.height,o=figma.createRectangle();o.x=a,o.y=n,o.resize(r,i),o.strokeWeight=2,o.strokeAlign="OUTSIDE",o.cornerRadius=4,o.strokes=[{color:{r:.76,g:.15,b:.87},opacity:1,type:"SOLID",visible:!0}],o.fills=[],o.name="Border 1",o.constraints={horizontal:"STRETCH",vertical:"STRETCH"};var l=figma.createRectangle();l.x=a,l.y=n,l.resize(r,i),l.strokeWeight=2,l.cornerRadius=4,l.strokes=[{color:{r:1,g:1,b:1},opacity:1,type:"SOLID",visible:!0}],l.fills=[],l.name="Border 2",l.constraints={horizontal:"STRETCH",vertical:"STRETCH"};var s=figma.group([o,l],figma.currentPage);s.name="Borders";var u=figma.createEllipse();u.resize(28,28),u.strokeWeight=2,u.strokes=[{color:{r:1,g:1,b:1},opacity:1,type:"SOLID",visible:!0}],u.constraints={horizontal:"CENTER",vertical:"CENTER"},u.x=a-u.width/2+2,u.y=n-u.width/2+2,u.fills=[{type:"SOLID",color:{r:.76,g:.15,b:.87}}],u.name="Ellipse background";var g=figma.createText();yield figma.loadFontAsync(g.fontName),g.fills=[{type:"SOLID",color:{r:1,g:1,b:1}}],g.textAlignHorizontal="CENTER",g.fontSize=12,g.x=u.x+13,g.y=u.y+7,g.characters=e.number.toString(),g.name="Order",g.constraints={horizontal:"CENTER",vertical:"CENTER"};var d=figma.group([u,g,s],figma.currentPage);return d.name=e.number.toString(),t.setSharedPluginData("a11y","tabindex",e.number.toString()),d.setSharedPluginData("a11y","type","annotation"),d.setSharedPluginData("a11y","source",e.id),d}))}(e,f);f.setSharedPluginData("a11y","type","object"),f.setSharedPluginData("a11y","annotation",c.id),i.push(c),r.push([e.id,c.id]),figma.currentPage.appendChild(c),s()}}else if("renumber-annotationUI"===e.type){var y=e.nextNumber;if(null!=(b=function(e){var t=r.filter(t=>t[0]==e)[0][1];return figma.getNodeById(t)}(e.id))){b.name=y.toString();var m=b.children[2];yield figma.loadFontAsync(m.fontName),m.characters=y.toString(),figma.getNodeById(e.id).setSharedPluginData("a11y","tabindex",y.toString()),s()}}else if("remove-annotationUI"===e.type){var p=e.id,h=r.filter(e=>e[0]==p)[0][1];null!=(b=figma.getNodeById(h))&&b.remove(),i=(i=i.filter(e=>e.id!=h)).filter(e=>null!=e),r=r.filter(e=>e[0]!=p),null!=(v=figma.getNodeById(p))&&v.setSharedPluginData("a11y","tabindex","-1")}else if("refresh-annotationUI"===e.type){p=e.id,h=r.filter(e=>e[0]==p)[0][1];var v=figma.getNodeById(p),b=figma.getNodeById(h);if(null==v||null==b)t={type:"node-remove",id:p};else{var S=v.absoluteTransform[0][2],P=v.absoluteTransform[1][2];b.x=S-14,b.y=P-14,b.children.filter((function(e){return"Borders"==e.name}))[0].resize(v.width,v.height),t={type:"node-rename",nodeName:v.name,id:p}}}else if("test-annotationUI"===e.type){var I=[];for(let e of r){p=e[0],v=figma.getNodeById(p);I.push(v)}figma.viewport.scrollAndZoomIntoView(I)}else if("select-annotationUI"===e.type){var w=figma.getNodeById(e.id);figma.currentPage.selection=[w]}else if("load-annotations"===e.type){o=figma.currentPage.selection[0].name;var D=figma.currentPage.selection[0].children;u=new Array(D.length-1),g=new Array(D.length-1);if(D.length>0){for(let e of D){"annotation"!=e.getSharedPluginData("a11y","type")&&Error("Something is very wrong, this probably is not an annotation layer");var T=e.getSharedPluginData("a11y","source"),x=(v=figma.getNodeById(T),parseInt(e.name));u[x-1]=v.name,g[x-1]=v.id,r.push([v.id,e.id]),i.push(e)}t={type:"add-focus",loading:!0,names:u,ids:g}}}else"window-blur"===e.type?n.start(l):"window-focus"===e.type&&n.stop();figma.ui.postMessage(t)}));figma.currentPage.selection[0];function l(){var e=!1,t=!1;1==figma.currentPage.selection.length?"annotation"==figma.currentPage.selection[0].getSharedPluginData("a11y","type")?e=!0:t=!0:figma.currentPage.selection.length>1&&(t=!0);var a={type:"update-buttons",isDisabled:!t,loadButtonDisabled:!e};figma.ui.postMessage(a)}function s(){var e=figma.group(i,figma.currentPage);e.name=o,e.setSharedPluginData("a11y","type","annotation")}}});