(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aaa4314"],{1276:function(t,e,n){"use strict";var c=n("d784"),r=n("44e7"),a=n("825a"),i=n("1d80"),u=n("4840"),o=n("8aa5"),s=n("50c4"),l=n("14c3"),d=n("9263"),b=n("9f7f"),p=n("d039"),O=b.UNSUPPORTED_Y,f=[].push,j=Math.min,h=4294967295,v=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(t,e,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var c=String(i(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===t)return[c];if(!r(t))return e.call(c,t,a);var u,o,s,l=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,O=new RegExp(t.source,b+"g");while(u=d.call(O,c)){if(o=O.lastIndex,o>p&&(l.push(c.slice(p,u.index)),u.length>1&&u.index<c.length&&f.apply(l,u.slice(1)),s=u[0].length,p=o,l.length>=a))break;O.lastIndex===u.index&&O.lastIndex++}return p===c.length?!s&&O.test("")||l.push(""):l.push(c.slice(p)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):c.call(String(r),e,n)},function(t,r){var i=n(c,this,t,r,c!==e);if(i.done)return i.value;var d=a(this),b=String(t),p=u(d,RegExp),f=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(O?"g":"y"),g=new p(O?"^(?:"+d.source+")":d,v),m=void 0===r?h:r>>>0;if(0===m)return[];if(0===b.length)return null===l(g,b)?[b]:[];var w=0,k=0,x=[];while(k<b.length){g.lastIndex=O?0:k;var y,C=l(g,O?b.slice(k):b);if(null===C||(y=j(s(g.lastIndex+(O?k:0)),b.length))===w)k=o(b,k,f);else{if(x.push(b.slice(w,k)),x.length===m)return x;for(var _=1;_<=C.length-1;_++)if(x.push(C[_]),x.length===m)return x;k=w=y}}return x.push(b.slice(w)),x}]}),!v,O)},"3dfc":function(t,e,n){},"44e7":function(t,e,n){var c=n("861d"),r=n("c6b6"),a=n("b622"),i=a("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},"8aa5":function(t,e,n){"use strict";var c=n("6547").charAt;t.exports=function(t,e,n){return e+(n?c(t,e).length:1)}},a502:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r={class:"container-fluid"},a={class:"d-sm-flex align-items-center justify-content-between mb-4"},i=Object(c["i"])("h1",{class:"h3 mb-0 text-gray-800"},"Inventario",-1),u={class:"dropdown mt-2"},o=Object(c["i"])("option",{value:!1,selected:"true"},"Selecciona una ubicacion",-1),s=Object(c["h"])("Nuevo"),l={class:"row"},d={class:"col-lg-12"},b={class:"table-responsive scrollbar-light-blue"},p={class:"table table-striped table-bordered text-center",id:"table"},O={class:"thead-dark"},f=Object(c["i"])("th",null,"CODIGO",-1),j=Object(c["i"])("th",null,"PRODUCTO",-1),h=Object(c["i"])("th",null,"CANTIDAD",-1),v=Object(c["i"])("th",null,"UBICACION",-1),g={key:0};function m(t,e,n,m,w,k){var x=Object(c["C"])("router-link"),y=Object(c["C"])("Lista");return Object(c["t"])(),Object(c["e"])("div",null,[Object(c["i"])("div",r,[Object(c["i"])("div",a,[i,Object(c["i"])("div",u,[Object(c["P"])(Object(c["i"])("select",{onChange:e[1]||(e[1]=function(t){return m.findProductos()}),id:"ubicacion","onUpdate:modelValue":e[2]||(e[2]=function(t){return m.ubicacion=t}),name:"ubicacion",class:"btn btn-secondary  center dropdown-toggle "},[o,(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(m.ubicaciones,(function(t){return Object(c["t"])(),Object(c["e"])("option",{class:"dropdown-item bg-white",key:t,value:t._id},Object(c["F"])(t.nombre),9,["value"])})),128))],544),[[c["J"],m.ubicacion]])]),Object(c["i"])("div",null,[m.usuario.rol.grado<=1?(Object(c["t"])(),Object(c["e"])(x,{key:0,to:"/manager/productos/add",class:"btn btn-primary mt-2"},{default:Object(c["O"])((function(){return[s]})),_:1})):Object(c["f"])("",!0)])]),Object(c["i"])("div",l,[Object(c["i"])("div",d,[Object(c["i"])("div",b,[Object(c["i"])("table",p,[Object(c["i"])("thead",O,[Object(c["i"])("tr",null,[f,j,h,v,m.usuario.rol.grado<=3?(Object(c["t"])(),Object(c["e"])("th",g,"ACCIONES")):Object(c["f"])("",!0)])]),Object(c["i"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(m.productos,(function(t){return Object(c["P"])((Object(c["t"])(),Object(c["e"])(y,{access:m.usuario.rol.grado,key:t,producto:t},null,8,["access","producto"])),[[c["L"],-1!=t.id_product.codigo.toLowerCase().indexOf(n.param.toLowerCase())||-1!=t.id_product.descripcion.toLowerCase().indexOf(n.param.toLowerCase())]])})),128))])])])])])])])}var w=n("1da1"),k=(n("96cf"),n("ac1f"),n("1276"),n("99af"),n("5c40")),x=n("5502"),y=Object(c["i"])("td",{class:"d-none"},null,-1),C=Object(c["i"])("i",{class:"fas fa-eye"},null,-1),_=Object(c["i"])("i",{class:"fas fa-audio-description"},null,-1),I=Object(c["i"])("i",{class:"fas fa-edit"},null,-1);function R(t,e,n,r,a,i){var u=Object(c["C"])("router-link");return Object(c["t"])(),Object(c["e"])("tr",null,[Object(c["i"])("td",null,Object(c["F"])(n.producto.id_product.codigo||null),1),Object(c["i"])("td",null,Object(c["F"])(n.producto.id_product.descripcion),1),Object(c["i"])("td",null,Object(c["F"])(n.producto.cantidad),1),Object(c["i"])("td",null,Object(c["F"])(n.producto.id_tienda.nombre),1),y,Object(c["i"])("td",null,[Object(c["i"])("div",{target:"_blank",onClick:e[1]||(e[1]=function(t){return r.getImagen(n.producto.id_product.img)}),class:"btn btn-primary ml-2"},[C]),n.access<=2?(Object(c["t"])(),Object(c["e"])(u,{key:0,to:"/manager/productos/add/cantidad?"+n.producto.id_product._id+"?"+n.producto.id_tienda._id,class:"btn btn-primary ml-2"},{default:Object(c["O"])((function(){return[_]})),_:1},8,["to"])):Object(c["f"])("",!0),n.access<=1?(Object(c["t"])(),Object(c["e"])(u,{key:1,to:"/manager/productos/add?"+n.producto.id_product._id,class:"btn btn-warning ml-2"},{default:Object(c["O"])((function(){return[I]})),_:1},8,["to"])):Object(c["f"])("",!0)])])}var P=n("98a0"),A=n("bc3a"),L=n.n(A),S=n("a1e9"),U={props:["producto","access"],setup:function(t){var e=Object(S["k"])(t.producto),n=Object(x["b"])(),c=Object(k["d"])((function(){return n.state.system.info.dolar})),r=Object(k["d"])((function(){return n.state.toask})),a=Object(k["d"])((function(){return n.state.token})),i=Object(k["d"])((function(){return n.state.api}));function u(t){return o.apply(this,arguments)}function o(){return o=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("".concat(i.value,"/productos/stock/").concat(e));case 2:n=t.sent,c=n.data,console.log(c);case 5:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function s(t){n.dispatch("verImagen",t)}function l(t){return d.apply(this,arguments)}function d(){return d=Object(w["a"])(regeneratorRuntime.mark((function t(c){var u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.delete("".concat(i.value,"/productos/").concat(c),{headers:{xtoken:a.value}});case 2:u=t.sent,o=u.data,e.value.status=!1,n.dispatch("getProductos"),Object(P["a"])(o.value,r.value.danger);case 7:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}return{activarProducto:u,desactivarProducto:l,dolar:c,getImagen:s}}};U.render=R;var D=U,E={props:["param"],components:{Lista:D},setup:function(){var t=Object(x["b"])(),e=Object(k["d"])((function(){return t.state.api})),n=Object(S["k"])({}),c=Object(S["k"])(0),r=Object(k["d"])((function(){return t.state.ubicaciones}));t.dispatch("getUbicaciones");var a=Object(k["d"])((function(){return t.state.usuario})),i=window.location.href.split("?");function u(){return o.apply(this,arguments)}function o(){return o=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i[1]){t.next=2;break}return t.abrupt("return",c.value=0);case 2:1!=i.lengt&&(c.value=i[1],s());case 3:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function s(){return l.apply(this,arguments)}function l(){return l=Object(w["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c.value){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,L.a.get("".concat(e.value,"/productos/stock/").concat(c.value));case 4:r=t.sent,a=r.data,n.value=a;case 7:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}return u(),{usuario:a,productos:n,findProductos:s,ubicaciones:r,ubicacion:c}}};n("d23b");E.render=m;e["default"]=E},d23b:function(t,e,n){"use strict";n("3dfc")}}]);
//# sourceMappingURL=chunk-4aaa4314.e9e4dc2b.js.map