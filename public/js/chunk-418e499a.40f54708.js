(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-418e499a"],{4874:function(t,e,c){"use strict";c("882c")},"59fc":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"container-fluid"},r={class:"d-sm-flex align-items-center justify-content-between mb-4"},o=Object(a["h"])("h1",{class:"h3 mb-0 text-gray-800"},"Productos",-1),s=Object(a["g"])("Nuevo"),u={class:"row"},i={class:"col-lg-12"},l={class:"table-responsive scrollbar-light-blue"},b={class:"table table-striped table-bordered text-center",id:"table"},d={class:"thead-dark"},O=Object(a["h"])("th",null,"CODIGO",-1),j=Object(a["h"])("th",null,"PRODUCTO",-1),p=Object(a["h"])("th",null,"STOCK",-1),f=Object(a["h"])("th",null,"ubicacion",-1),h={key:0};function v(t,e,c,v,m,g){var k=Object(a["B"])("router-link"),w=Object(a["B"])("Lista");return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["h"])("div",n,[Object(a["h"])("div",r,[o,v.usuario.rol.grado<=1?(Object(a["s"])(),Object(a["e"])(k,{key:0,to:"/manager/productos/add",class:"btn btn-primary mt-2"},{default:Object(a["N"])((function(){return[s]})),_:1})):Object(a["f"])("",!0)]),Object(a["h"])("div",u,[Object(a["h"])("div",i,[Object(a["h"])("div",l,[Object(a["h"])("table",b,[Object(a["h"])("thead",d,[Object(a["h"])("tr",null,[O,j,p,f,v.usuario.rol.grado<=3?(Object(a["s"])(),Object(a["e"])("th",h,"ACCIONES")):Object(a["f"])("",!0)])]),Object(a["h"])("tbody",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(v.productos,(function(t){return Object(a["O"])((Object(a["s"])(),Object(a["e"])(w,{access:v.usuario.rol.grado,key:t,producto:t},null,8,["access","producto"])),[[a["K"],-1!=t.codigo.toLowerCase().indexOf(c.param.toLowerCase())||-1!=t.descripcion.toLowerCase().indexOf(c.param.toLowerCase())]])})),128))])])])])])])])}var m=c("5c40"),g=c("5502"),k={class:"d-none"},w=Object(a["h"])("i",{class:"fas fa-eye"},null,-1),y=Object(a["h"])("i",{class:"fas fa-audio-description"},null,-1),C=Object(a["h"])("i",{class:"fas fa-edit"},null,-1),x={key:2,class:"confirmar d-inline"},P=Object(a["h"])("i",{class:"fas fa-trash-alt"},null,-1),_=Object(a["h"])("i",{class:"fas fa-check"},null,-1);function E(t,e,c,n,r,o){var s=Object(a["B"])("Popper"),u=Object(a["B"])("router-link");return Object(a["s"])(),Object(a["e"])("tr",null,[Object(a["h"])("td",null,Object(a["E"])(c.producto.codigo),1),Object(a["h"])("td",null,Object(a["E"])(c.producto.descripcion),1),Object(a["h"])("td",k,[Object(a["h"])(s,{class:"dark-popper",arrow:"",hover:"",placement:"right",content:t.numeralFormat(c.producto.precio*n.dolar)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["h"])("div",null,Object(a["E"])(c.producto.precio),1)]})),_:1},8,["content"])]),Object(a["h"])("td",null,Object(a["E"])(c.producto.cantidad),1),Object(a["h"])("td",null,Object(a["E"])(c.producto.ubicacion),1),Object(a["h"])("td",null,[Object(a["h"])("div",{target:"_blank",onClick:e[1]||(e[1]=function(t){return n.getImagen(c.producto.img)}),class:"btn btn-primary ml-2"},[w]),c.access<=1?(Object(a["s"])(),Object(a["e"])(u,{key:0,to:"/manager/productos/add/cantidad?"+c.producto._id,class:"btn btn-primary ml-2"},{default:Object(a["N"])((function(){return[y]})),_:1},8,["to"])):Object(a["f"])("",!0),c.access<=1?(Object(a["s"])(),Object(a["e"])(u,{key:1,to:"/manager/productos/add?"+c.producto._id,class:"btn btn-warning ml-2"},{default:Object(a["N"])((function(){return[C]})),_:1},8,["to"])):Object(a["f"])("",!0),c.access<=1?(Object(a["s"])(),Object(a["e"])("div",x,[Object(a["O"])(Object(a["h"])("button",{onClick:e[2]||(e[2]=function(t){return n.desactivarProducto(c.producto._id)}),class:"btn btn-danger ml-2"},[P],512),[[a["K"],c.producto.status]]),Object(a["O"])(Object(a["h"])("button",{onClick:e[3]||(e[3]=function(t){return n.activarProducto(c.producto._id)}),class:"btn btn-success ml-2"},[_],512),[[a["K"],!c.producto.status]])])):Object(a["f"])("",!0)])])}var L=c("1da1"),N=(c("96cf"),c("99af"),c("98a0")),B=c("bc3a"),I=c.n(B),R=c("a1e9"),K=c("4b43"),D={props:["producto","access"],components:{Popper:K["a"]},setup:function(t){var e=Object(R["k"])(t.producto),c=Object(g["b"])(),a=Object(m["d"])((function(){return c.state.system.info.dolar})),n=Object(m["d"])((function(){return c.state.toask})),r=Object(m["d"])((function(){return c.state.token})),o=Object(m["d"])((function(){return c.state.api}));function s(t){return u.apply(this,arguments)}function u(){return u=Object(L["a"])(regeneratorRuntime.mark((function t(c){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.delete("".concat(o.value,"/productos/activar/").concat(c),{headers:{xtoken:r.value}});case 2:a=t.sent,s=a.data,e.value.status=!0,Object(N["a"])(s.value,n.value.warning);case 6:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function i(t){c.dispatch("verImagen",t)}function l(t){return b.apply(this,arguments)}function b(){return b=Object(L["a"])(regeneratorRuntime.mark((function t(a){var s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.delete("".concat(o.value,"/productos/").concat(a),{headers:{xtoken:r.value}});case 2:s=t.sent,u=s.data,e.value.status=!1,c.dispatch("getProductos"),Object(N["a"])(u.value,n.value.danger);case 7:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}return{activarProducto:s,desactivarProducto:l,dolar:a,getImagen:i}}};D.render=E;var J=D,S={props:["param"],components:{Lista:J},setup:function(){var t=Object(g["b"])();t.dispatch("getProductos"),t.dispatch("buscar");var e=Object(m["d"])((function(){return t.state.usuario})),c=Object(m["d"])((function(){return t.state.productos}));return{productos:c,usuario:e}}};c("4874");S.render=v;e["default"]=S},"882c":function(t,e,c){}}]);
//# sourceMappingURL=chunk-418e499a.40f54708.js.map