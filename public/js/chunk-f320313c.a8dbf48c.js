(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f320313c","chunk-2d21f315"],{1276:function(e,t,n){"use strict";var c=n("d784"),r=n("44e7"),o=n("825a"),a=n("1d80"),i=n("4840"),l=n("8aa5"),u=n("50c4"),s=n("14c3"),d=n("9263"),b=n("9f7f"),v=n("d039"),p=b.UNSUPPORTED_Y,f=[].push,O=Math.min,h=4294967295,j=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=String(a(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===e)return[c];if(!r(e))return t.call(c,e,o);var i,l,u,s=[],b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,p=new RegExp(e.source,b+"g");while(i=d.call(p,c)){if(l=p.lastIndex,l>v&&(s.push(c.slice(v,i.index)),i.length>1&&i.index<c.length&&f.apply(s,i.slice(1)),u=i[0].length,v=l,s.length>=o))break;p.lastIndex===i.index&&p.lastIndex++}return v===c.length?!u&&p.test("")||s.push(""):s.push(c.slice(v)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,n):c.call(String(r),t,n)},function(e,r){var a=n(c,this,e,r,c!==t);if(a.done)return a.value;var d=o(this),b=String(e),v=i(d,RegExp),f=d.unicode,j=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"g":"y"),m=new v(p?"^(?:"+d.source+")":d,j),g=void 0===r?h:r>>>0;if(0===g)return[];if(0===b.length)return null===s(m,b)?[b]:[];var y=0,k=0,x=[];while(k<b.length){m.lastIndex=p?0:k;var w,_=s(m,p?b.slice(k):b);if(null===_||(w=O(u(m.lastIndex+(p?k:0)),b.length))===y)k=l(b,k,f);else{if(x.push(b.slice(y,k)),x.length===g)return x;for(var E=1;E<=_.length-1;E++)if(x.push(_[E]),x.length===g)return x;k=y=w}}return x.push(b.slice(y)),x}]}),!j,p)},"44e7":function(e,t,n){var c=n("861d"),r=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}},"883a":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},"8c44":function(e,t,n){"use strict";n("883a")},"9d49":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={key:0},o={class:"container-fluid mt-2"},a={class:"d-sm-flex align-items-center justify-content-between mb-4"},i=Object(c["h"])("h1",{class:"h3 mb-0 text-gray-800"},"Panel de Administración",-1),l=Object(c["g"])("Regresar"),u={class:"row"},s={class:"col-lg-6 m-auto"},d={class:"form-group form-floating mb-3 "},b=Object(c["h"])("label",null,"ubicacion",-1),v={class:"form-group form-floating mb-3 d-none"},p=Object(c["h"])("label",null,"Proveedor",-1),f={class:"form-check mb-4 d-none"},O=Object(c["h"])("label",{for:"iva",class:"form-check-label"},"iva 16%",-1),h={class:"text-center"},j={key:0,class:"mb-3",id:"div_file"},m=Object(c["h"])("p",{id:"texto"},"añadir imagen",-1),g=Object(c["h"])("input",{class:"form-control btn",type:"file",id:"img",name:"img",accept:"image/*"},null,-1),y=Object(c["h"])("button",{type:"submit",value:"",class:"btn btn-primary"}," Guardar Producto ",-1);function k(e,t,n,k,x,w){var _=Object(c["B"])("router-link"),E=Object(c["B"])("NoAccess");return k.usuario.rol.grado<=1?(Object(c["s"])(),Object(c["e"])("div",r,[Object(c["h"])("div",o,[Object(c["h"])("div",a,[i,Object(c["h"])(_,{to:"/productos",class:"btn btn-primary"},{default:Object(c["N"])((function(){return[l]})),_:1})]),Object(c["h"])("div",u,[Object(c["h"])("div",s,[Object(c["h"])("form",{ref:"NewForm",enctype:"multipart/form-data",autocomplete:"off",onSubmit:t[4]||(t[4]=Object(c["Q"])((function(e){return k.sendProduct()}),["prevent"]))},[Object(c["h"])("div",d,[b,Object(c["O"])(Object(c["h"])("select",{id:"ubicacion","onUpdate:modelValue":t[1]||(t[1]=function(e){return k.producto.ubicacion=e}),name:"ubicacion",class:"form-control"},[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(k.ubicacion,(function(e){return Object(c["s"])(),Object(c["e"])("option",{key:e,value:e},Object(c["E"])(e),9,["value"])})),128))],512),[[c["I"],k.producto.ubicacion]])]),Object(c["h"])("div",v,[p,Object(c["O"])(Object(c["h"])("select",{class:[{"is-invalid":""===k.producto.proveedor_id},"form-control"],id:"proveedor","onUpdate:modelValue":t[2]||(t[2]=function(e){return k.producto.proveedor_id=e}),name:"ubicacion"},[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(k.proveedores,(function(e){return Object(c["O"])((Object(c["s"])(),Object(c["e"])("option",{key:e.id,value:e._id},Object(c["E"])(e.nombre),9,["value"])),[[c["K"],!0===e.status]])})),128))],2),[[c["I"],k.producto.proveedor_id]])]),(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(k.form,(function(e,t){return Object(c["s"])(),Object(c["e"])("div",{class:"mb-2",key:t},[Object(c["h"])("label",{for:e.valor},Object(c["E"])(e.valor),9,["for"]),e.number?Object(c["f"])("",!0):Object(c["O"])((Object(c["s"])(),Object(c["e"])("input",{key:0,class:[{"is-invalid":""===k.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return k.producto[e.valor]=t},type:"text",name:e.valor,placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","name","placeholder","id"])),[[c["J"],k.producto[e.valor]]]),e.number?Object(c["O"])((Object(c["s"])(),Object(c["e"])("input",{key:1,class:[{"is-invalid":""===k.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return k.producto[e.valor]=t},type:"Number",name:e.valor,placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","name","placeholder","id"])),[[c["J"],k.producto[e.valor],void 0,{number:!0}]]):Object(c["f"])("",!0)])})),128)),Object(c["h"])("div",f,[Object(c["O"])(Object(c["h"])("input",{class:"form-check-input ","onUpdate:modelValue":t[3]||(t[3]=function(e){return k.producto.iva=e}),type:"checkbox",id:"iva"},null,512),[[c["H"],k.producto.iva]]),O]),Object(c["h"])("div",h,[k.producto._id?Object(c["f"])("",!0):(Object(c["s"])(),Object(c["e"])("div",j,[m,g])),y])],544)])])])])):(Object(c["s"])(),Object(c["e"])(E,{key:1}))}var x=n("1da1"),w=(n("96cf"),n("99af"),n("ac1f"),n("1276"),n("4de4"),n("a434"),n("a1e9")),_=n("5502"),E=n("98a0"),U=n("6c02"),N=n("5c40"),P=n("bc3a"),I=n.n(P),R=n("d97a"),V={components:{NoAccess:R["default"]},setup:function(){var e=Object(N["d"])((function(){return t.state.toask})),t=Object(_["b"])(),n=Object(U["c"])();t.dispatch("getProveedores");var c=Object(N["d"])((function(){return t.state.proveedores})),r=["barquisimeto","valencia","el vigia"],o=Object(N["d"])((function(){return t.state.token})),a=Object(w["k"])(),i=Object(w["k"])([{valor:"nombre"},{valor:"descripcion"},{valor:"cantidad",number:!0},{valor:"codigo"}]),l="",u=Object(w["k"])({proveedor_id:null,nombre:null,img:null}),s=Object(N["d"])((function(){return t.state.api})),d=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var c,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(),c=new FormData(a.value),u.value.imagen=c,t.next=6,I.a.post("".concat(s.value,"/productos/").concat(l),c,{headers:{xtoken:o.value,"content-type":"multipart/form-data"}});case 6:if(r=t.sent,i=r.data,!0!==i.status){t.next=15;break}return n.push("/productos"),l="",Object(E["a"])(i.value,e.value.success),t.abrupt("return");case 15:Object(E["a"])(i.value,e.value.danger);case 16:t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log(t.t0),Object(E["a"])("no se pudo conectar al servidor");case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();function b(){try{var e=window.location.href.split("?");if(2===e.length){var c=Object(N["d"])((function(){return t.state.productos})),r=c.value;if(0===r.length)return void n.push("/productos/add");l=e[1];var o=r.filter((function(e){return e._id===l&&e}));o?(u.value=o[0],o[0].iva?o[0].iva=!0:o[0].iva=!1,i.value.splice(4,2)):u.value={}}}catch(a){}}b();var v=Object(N["d"])((function(){return t.state.usuario}));return{producto:u,form:i,sendProduct:d,proveedores:c,token:o,usuario:v,ubicacion:r,NewForm:a}}};n("8c44");V.render=k;t["default"]=V},d97a:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={style:{height:"70vh"},id:"layoutError"},o={id:"layoutError_content"},a={class:"container"},i={class:"row mt-5 justify-content-center"},l={class:"col-lg-6"},u={class:"text-center mt-4"},s=Object(c["h"])("h1",{class:"display-1"},"403",-1),d=Object(c["h"])("p",{class:"lead"},"sin autorizacion",-1),b=Object(c["h"])("p",null,"su acceso a esta area no esta permitido.",-1),v=Object(c["h"])("i",{class:"fas fa-arrow-left me-1"},null,-1),p=Object(c["g"])(" regresar al inicio ");function f(e,t,n,f,O,h){var j=Object(c["B"])("router-link");return Object(c["s"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",r,[Object(c["h"])("div",o,[Object(c["h"])("main",null,[Object(c["h"])("div",a,[Object(c["h"])("div",i,[Object(c["h"])("div",l,[Object(c["h"])("div",u,[s,d,b,Object(c["h"])(j,{to:"/"},{default:Object(c["N"])((function(){return[v,p]})),_:1})])])])])])])]),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return f.alert&&f.alert.apply(f,arguments)})})],64)}var O={setup:function(){function e(){for(var e=4e4,t=0;t<e;t++)console.log("hola")}return{alert:e}}};O.render=f;t["default"]=O}}]);
//# sourceMappingURL=chunk-f320313c.a8dbf48c.js.map