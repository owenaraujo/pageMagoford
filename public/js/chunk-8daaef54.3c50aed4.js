(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8daaef54","chunk-2d21f315"],{"1f4c":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={key:0,class:"container-fluid"},o=Object(a["h"])("div",{class:"text-right"},null,-1),r={class:"row"},l={class:"col-lg-12"},u={class:"form-group form-floating mb-3 "},i=Object(a["h"])("label",null,"ubicacion",-1),d=Object(a["h"])("h4",{class:"text-center"},"Datos Venta",-1),s={class:"table-responsive"},b={ref:"table",class:"table table-hover"},O={class:"thead-dark"},j=Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"100px"},"Código"),Object(a["h"])("th",null,"descripcion"),Object(a["h"])("th",null,"Stock"),Object(a["h"])("th",null,"Acciones")],-1),p={key:0,class:"resultado2"},h={multiple:"",class:"custom-select scrollbar-light-blue"},f={id:"txt_descripcion"},v={id:"txt_existencia"},m=Object(a["h"])("tr",null,[Object(a["h"])("th",null,"Código"),Object(a["h"])("th",null,"nombre"),Object(a["h"])("th",null,"cantidad"),Object(a["h"])("th",null,"Acciones")],-1),g={id:"detalle_venta"},k={class:"col-lg-12 text-center"},y=Object(a["h"])("label",null,"Acciones",-1),C={class:"form-group"},V=Object(a["h"])("i",{class:"fas fa-save"},null,-1),_=Object(a["g"])(" Generar Venta "),w={key:2},x={class:"modal fade show",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel",style:{display:"block"},"aria-modal":"true"},P={class:"modal-dialog modal-center"},A={class:"modal-content"},E={class:"modal-header"},U=Object(a["h"])("h5",{class:"modal-title",id:"staticBackdropLabel"},"Modal title",-1),N=Object(a["h"])("span",{"aria-hidden":"true"},"×",-1),B={class:"modal-body"},L={key:0},J={class:"form-check d-none"},z=Object(a["h"])("label",{class:"form-check-label",for:"defaultCheck1"}," Reportar venta como prestamo ",-1),G=Object(a["h"])("label",{for:"inputNota"},null,-1),R={key:1,class:"text-center"},S=Object(a["h"])("p",null,[Object(a["h"])("strong",{class:"mt-4"},"que desea hacer?")],-1),I=Object(a["h"])("br",null,null,-1),K={class:"modal-footer"},q=Object(a["h"])("div",{class:"modal-backdrop fade show"},null,-1);function D(t,e,c,D,H,M){var T=Object(a["B"])("ListProductos"),F=Object(a["B"])("NoAccess");return Object(a["s"])(),Object(a["e"])(a["a"],null,[D.usuario.rol.grado<=2?(Object(a["s"])(),Object(a["e"])("div",n,[o,Object(a["h"])("div",r,[Object(a["h"])("div",l,[Object(a["h"])("div",u,[i,Object(a["O"])(Object(a["h"])("select",{onChange:e[1]||(e[1]=function(t){return D.findProductos()}),id:"ubicacion","onUpdate:modelValue":e[2]||(e[2]=function(t){return D.tienda=t}),name:"ubicacion",class:"form-control"},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(D.ubicaciones,(function(t){return Object(a["s"])(),Object(a["e"])("option",{key:t,value:t._id},Object(a["E"])(t.nombre),9,["value"])})),128))],544),[[a["I"],D.tienda]])]),d,Object(a["h"])("div",s,[Object(a["h"])("table",b,[Object(a["h"])("thead",O,[j,Object(a["h"])("tr",null,[Object(a["h"])("td",null,[Object(a["O"])(Object(a["h"])("input",{autocomplete:"off",type:"text",class:"form-control form-control-md",name:"txt_cod_producto",id:"txt_cod_producto","onUpdate:modelValue":e[3]||(e[3]=function(t){return D.buscarProducto=t})},null,512),[[a["J"],D.buscarProducto]]),D.buscarProducto?(Object(a["s"])(),Object(a["e"])("div",p,[Object(a["h"])("select",h,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(D.productos,(function(t){return Object(a["O"])((Object(a["s"])(),Object(a["e"])("option",{onClick:function(e){return D.selectProducto(t)},key:t._id,value:t._id},Object(a["E"])(t.id_product.descripcion)+"-"+Object(a["E"])(t.id_product.codigo),9,["onClick","value"])),[[a["K"],-1!=t.id_product.codigo.toLowerCase().indexOf(D.buscarProducto.toLowerCase())]])})),128))])])):Object(a["f"])("",!0)]),Object(a["h"])("td",f,Object(a["E"])(D.inputsAgregar.id_product.descripcion),1),Object(a["h"])("td",v,Object(a["E"])(D.inputsAgregar.cantidad||0),1),Object(a["h"])("td",null,[D.inputsAgregar.cantidad?Object(a["O"])((Object(a["s"])(),Object(a["e"])("button",{key:0,onClick:e[4]||(e[4]=function(t){return D.agregarCarrito()}),id:"add_product_venta",class:"btn btn-dark",disabled:0===D.inputsAgregar.cantidad}," Agregar ",8,["disabled"])),[[a["K"],D.cantidad>0]]):Object(a["f"])("",!0)])]),m]),Object(a["h"])("tbody",g,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(D.productosVenta,(function(t,e){return Object(a["s"])(),Object(a["e"])(T,{indice:e,key:e,producto:t},null,8,["indice","producto"])})),128))])],512)]),Object(a["h"])("div",k,[y,Object(a["h"])("div",C,[Object(a["h"])("button",{onClick:e[5]||(e[5]=function(t){return D.cancelVenta()}),class:"btn btn-danger mr-2"}," Anular "),Object(a["h"])("button",{onClick:e[6]||(e[6]=function(t){return D.preGuardarCompra()}),class:"btn btn-primary",id:"btn_facturar_venta"},[V,_])])])])])])):(Object(a["s"])(),Object(a["e"])(F,{key:1})),D.modalVenta?(Object(a["s"])(),Object(a["e"])("div",w,[Object(a["h"])("div",x,[Object(a["h"])("div",P,[Object(a["h"])("div",A,[Object(a["h"])("div",E,[U,Object(a["h"])("button",{type:"button",class:"close",onClick:e[7]||(e[7]=function(){return D.newVenta&&D.newVenta.apply(D,arguments)}),"data-dismiss":"modal","aria-label":"Close"},[N])]),Object(a["h"])("div",B,[D.statusVenta?Object(a["f"])("",!0):(Object(a["s"])(),Object(a["e"])("div",L,[Object(a["h"])("div",J,[Object(a["O"])(Object(a["h"])("input",{class:"form-check-input","onUpdate:modelValue":e[8]||(e[8]=function(t){return D.prestamo=t}),type:"checkbox",id:"defaultCheck1"},null,512),[[a["H"],D.prestamo]]),z]),G,Object(a["O"])(Object(a["h"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return D.notaVenta=t}),type:"text",id:"inputNota",placeholder:"agregar una nota",class:"form-control"},null,512),[[a["J"],D.notaVenta]]),Object(a["O"])(Object(a["h"])("input",{"onUpdate:modelValue":e[10]||(e[10]=function(t){return D.pago=t}),type:"",id:"",placeholder:"tipo de pago ",class:"form-control mt-4"},null,512),[[a["J"],D.pago]])])),D.statusVenta?(Object(a["s"])(),Object(a["e"])("div",R,[S,I,Object(a["h"])("button",{onClick:e[11]||(e[11]=function(){return D.newVenta&&D.newVenta.apply(D,arguments)}),class:"btn btn-primary mr-2"}," registrar otra venta ")])):Object(a["f"])("",!0)]),Object(a["h"])("div",K,[Object(a["h"])("button",{onClick:e[12]||(e[12]=function(){return D.newVenta&&D.newVenta.apply(D,arguments)}),class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar "),Object(a["h"])("button",{onClick:e[13]||(e[13]=function(t){return D.guardarCompra()}),class:"btn btn-primary"}," Comprar ")])])])]),q])):Object(a["f"])("",!0)],64)}var H=c("1da1"),M=(c("96cf"),c("99af"),c("d97a")),T=c("bc3a"),F=c.n(T),Q=c("5502"),W=c("a1e9"),X=Object(a["h"])("i",{class:"svg-inline--fa fas fa-trash-alt fa-w-14"},null,-1),Y=Object(a["g"])(" Eliminar ");function Z(t,e,c,n,o,r){return Object(a["s"])(),Object(a["e"])("tr",null,[Object(a["h"])("th",null,Object(a["E"])(c.producto.codigo),1),Object(a["h"])("th",null,Object(a["E"])(c.producto.productName),1),Object(a["h"])("th",null,Object(a["E"])(c.producto.cantidad),1),Object(a["h"])("th",null,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(t){return n.deleteProduct(c.indice)}),class:"btn btn-danger"},[X,Y])])])}c("a434");var $=c("5c40"),tt={props:["producto","indice"],setup:function(t){var e=Object(Q["b"])(),c=Object(W["k"])(t.producto),a=Object($["d"])((function(){return e.state.system.info.dolar})),n=Object($["d"])((function(){var t=c.value,e=t.precio*t.iva/100*t.cantidad,a=t.precio*t.cantidad;return a||(a=0),e||(e=0),a+e}));function o(t){e.dispatch("resProducto",{id:c.value.producto_id,indice:t}),c.value.imei.splice(t,1)}function r(t){e.dispatch("deleteStore",t)}return{total:n,dolar:a,deleteProduct:r,Producto:c,deleteOneItem:o}}};tt.render=Z;var et=tt,ct=c("98a0"),at={props:["param"],components:{ListProductos:et,NoAccess:M["default"]},setup:function(){var t=Object(Q["b"])(),e=!1,c=Object(W["k"])(!1),a=Object(W["k"])(""),n=Object(W["k"])({id_product:{}}),o=Object(W["k"])(1),r=Object(W["k"])(""),l=Object(W["k"])(""),u=Object(W["k"])(""),i=Object(W["k"])(),d=Object(W["k"])(!1),s=Object(W["k"])([]),b=Object(W["a"])((function(){return t.state.ubicaciones})),O=Object(W["a"])((function(){return t.state.toask})),j=Object(W["a"])((function(){return t.state.usuario})),p=Object(W["a"])((function(){return t.state.productosVenta})),h=Object(W["a"])((function(){return t.state.statusVenta})),f=Object(W["a"])((function(){return t.state.api})),v=Object(W["a"])((function(){return t.state.clientesActivos})),m=Object(W["a"])((function(){var t=n.value,e=t.precio*t.iva/100*o.value,c=t.precio*o.value;return c||(c=0),e||(e=0),c+e}));function g(){return k.apply(this,arguments)}function k(){return k=Object(H["a"])(regeneratorRuntime.mark((function t(){var e,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("".concat(f.value,"/productos/stock/").concat(i.value));case 2:e=t.sent,c=e.data,s.value=c;case 5:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function y(){t.dispatch("vaciarVenta"),l.value="",d.value=!1,c.value=!1,A()}function C(e){r.value="",t.dispatch("guardarCliente",e)}t.dispatch("getUbicaciones");var V=function(){var e={ruta:"/manager/ventas/add"};t.dispatch("sendUrl",e)};function _(){if(0==p.value.length)return Object(ct["a"])("no se puede hacer una venta vacia",O.value.warning);c.value=!0}function w(t){a.value="",n.value=t}function x(){o.value>n.value.cantidad&&(o.value=n.value.cantidad)}function P(){console.log("hola");var e={productName:n.value.id_product.descripcion,precio:n.value.id_product.precio,codigo:n.value.id_product.codigo,cantidad:o.value,producto_id:n.value.id_product._id};console.log(e),t.dispatch("agregarToCarrito",e)}function A(){t.dispatch("deleteProccessVenta"),n.value={},o.value=1}function E(){t.dispatch("generarPdf")}function U(){t.dispatch("comprar",{nota:l.value,credito:d.value,pago:u.value})}return{tienda:i,findProductos:g,usuario:j,infoCliente:e,newVenta:y,generarPdf:E,statusVenta:h,prestamo:d,modalVenta:c,notaVenta:l,pago:u,ubicaciones:b,preGuardarCompra:_,guardarCompra:U,cancelVenta:A,agregarCarrito:P,productosVenta:p,verifyStock:x,total:m,cantidad:o,inputsAgregar:n,selectProducto:w,buscarProducto:a,sendUrl:V,selectCliente:C,productos:s,buscarClientes:r,clientes:v}}};c("2096");at.render=D;e["default"]=at},2096:function(t,e,c){"use strict";c("d5e4")},d5e4:function(t,e,c){},d97a:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={style:{height:"70vh"},id:"layoutError"},o={id:"layoutError_content"},r={class:"container"},l={class:"row mt-5 justify-content-center"},u={class:"col-lg-6"},i={class:"text-center mt-4"},d=Object(a["h"])("h1",{class:"display-1"},"403",-1),s=Object(a["h"])("p",{class:"lead"},"sin autorizacion",-1),b=Object(a["h"])("p",null,"su acceso a esta area no esta permitido.",-1),O=Object(a["h"])("i",{class:"fas fa-arrow-left me-1"},null,-1),j=Object(a["g"])(" regresar al inicio ");function p(t,e,c,p,h,f){var v=Object(a["B"])("router-link");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",n,[Object(a["h"])("div",o,[Object(a["h"])("main",null,[Object(a["h"])("div",r,[Object(a["h"])("div",l,[Object(a["h"])("div",u,[Object(a["h"])("div",i,[d,s,b,Object(a["h"])(v,{to:"/"},{default:Object(a["N"])((function(){return[O,j]})),_:1})])])])])])])]),Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return p.alert&&p.alert.apply(p,arguments)})})],64)}var h={setup:function(){function t(){for(var t=4e4,e=0;e<t;e++)console.log("hola")}return{alert:t}}};h.render=p;e["default"]=h}}]);
//# sourceMappingURL=chunk-8daaef54.3c50aed4.js.map