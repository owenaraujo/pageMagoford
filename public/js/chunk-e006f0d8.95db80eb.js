(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e006f0d8","chunk-2d21f315"],{"1f4c":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={key:0,class:"container-fluid"},i=Object(a["i"])("div",{class:"text-right"},null,-1),o={class:"row"},r={class:"col-sm-3"},l=Object(a["i"])("h4",{class:""},"Datos del Cliente",-1),u={style:{"font-size":"16px","text-transform":"uppercase",color:"blue"}},s=Object(a["i"])("label",{for:"buscarCliente"},"busqueda de cliente",-1),d={key:0,class:"resultado"},b={multiple:"",class:"custom-select scrollbar-light-blue"},O={class:"col-lg-12"},j=Object(a["i"])("h4",{class:"text-center"},"Datos Venta",-1),p={class:"table-responsive"},f={ref:"table",class:"table table-hover"},v={class:"thead-dark"},m=Object(a["i"])("tr",null,[Object(a["i"])("th",{width:"100px"},"Código"),Object(a["i"])("th",null,"nombre"),Object(a["i"])("th",null,"Stock"),Object(a["i"])("th",null,"Acciones")],-1),h={key:0,class:"resultado2"},C={multiple:"",class:"custom-select scrollbar-light-blue"},g={id:"txt_descripcion"},k={id:"txt_existencia"},y=Object(a["i"])("tr",null,[Object(a["i"])("th",null,"Código"),Object(a["i"])("th",null,"nombre"),Object(a["i"])("th",null,"cantidad"),Object(a["i"])("th",null,"Acciones")],-1),V={id:"detalle_venta"},P={class:"col-lg-12 text-center"},w=Object(a["i"])("label",null,"Acciones",-1),x={class:"form-group"},_=Object(a["i"])("i",{class:"fas fa-save"},null,-1),A=Object(a["h"])(" Generar Venta "),L={key:2},F={class:"modal fade show",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel",style:{display:"block"},"aria-modal":"true"},U={class:"modal-dialog modal-center"},N={class:"modal-content"},K={class:"modal-header"},B=Object(a["i"])("h5",{class:"modal-title",id:"staticBackdropLabel"},"Modal title",-1),E=Object(a["i"])("span",{"aria-hidden":"true"},"×",-1),G={class:"modal-body"},S={key:0},q={class:"form-check d-none"},z=Object(a["i"])("label",{class:"form-check-label",for:"defaultCheck1"}," Reportar venta como prestamo ",-1),D=Object(a["i"])("label",{for:"inputNota"},null,-1),I={key:1,class:"text-center"},J=Object(a["i"])("p",null,[Object(a["i"])("strong",{class:"mt-4"},"que desea hacer?")],-1),T=Object(a["i"])("br",null,null,-1),M={class:"modal-footer"},R=Object(a["i"])("div",{class:"modal-backdrop fade show"},null,-1);function H(t,e,c,H,Q,W){var X=Object(a["C"])("ListProductos"),Y=Object(a["C"])("NoAccess");return Object(a["t"])(),Object(a["e"])(a["a"],null,[H.usuario.rol.grado<=2?(Object(a["t"])(),Object(a["e"])("div",n,[i,Object(a["i"])("div",o,[Object(a["P"])(Object(a["i"])("div",r,[l,Object(a["P"])(Object(a["i"])("div",null,[Object(a["i"])("h5",u,Object(a["F"])(H.datosCliente.nombre)+" "+Object(a["F"])(H.datosCliente.apellido),1),Object(a["i"])("p",null,Object(a["F"])(H.datosCliente.dni),1)],512),[[a["L"],H.dataCliente]]),Object(a["P"])(Object(a["i"])("div",null,[s,Object(a["P"])(Object(a["i"])("input",{autocomplete:"off","onUpdate:modelValue":e[1]||(e[1]=function(t){return H.buscarClientes=t}),id:"buscarCliente",type:"text",class:"form-control mb-2"},null,512),[[a["K"],H.buscarClientes]]),H.buscarClientes?(Object(a["t"])(),Object(a["e"])("div",d,[Object(a["i"])("select",b,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(H.clientes,(function(t){return Object(a["P"])((Object(a["t"])(),Object(a["e"])("option",{onClick:function(e){return H.selectCliente(t)},key:t._id,value:t._id},Object(a["F"])(t.nombre),9,["onClick","value"])),[[a["L"],-1!=t.nombre.toLowerCase().indexOf(H.buscarClientes.toLowerCase())||-1!=t.dni.toLowerCase().indexOf(H.buscarClientes.toLowerCase())]])})),128))])])):Object(a["f"])("",!0)],512),[[a["L"],!H.dataCliente]])],512),[[a["L"],H.infoCliente]]),Object(a["i"])("div",O,[j,Object(a["i"])("div",p,[Object(a["i"])("table",f,[Object(a["i"])("thead",v,[m,Object(a["i"])("tr",null,[Object(a["i"])("td",null,[Object(a["P"])(Object(a["i"])("input",{autocomplete:"off",type:"text",class:"form-control form-control-md",name:"txt_cod_producto",id:"txt_cod_producto","onUpdate:modelValue":e[2]||(e[2]=function(t){return H.buscarProducto=t})},null,512),[[a["K"],H.buscarProducto]]),H.buscarProducto?(Object(a["t"])(),Object(a["e"])("div",h,[Object(a["i"])("select",C,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(H.productos,(function(t){return Object(a["P"])((Object(a["t"])(),Object(a["e"])("option",{onClick:function(e){return H.selectProducto(t)},key:t._id,value:t._id},Object(a["F"])(t.nombre)+"-"+Object(a["F"])(t.codigo),9,["onClick","value"])),[[a["L"],-1!=t.codigo.toLowerCase().indexOf(H.buscarProducto.toLowerCase())]])})),128))])])):Object(a["f"])("",!0)]),Object(a["i"])("td",g,Object(a["F"])(H.inputsAgregar.descripcion),1),Object(a["i"])("td",k,Object(a["F"])(H.inputsAgregar.cantidad||0),1),Object(a["i"])("td",null,[H.inputsAgregar.cantidad?Object(a["P"])((Object(a["t"])(),Object(a["e"])("button",{key:0,onClick:e[3]||(e[3]=function(t){return H.agregarCarrito()}),id:"add_product_venta",class:"btn btn-dark",disabled:0===H.inputsAgregar.cantidad}," Agregar ",8,["disabled"])),[[a["L"],H.cantidad>0]]):Object(a["f"])("",!0)])]),y]),Object(a["i"])("tbody",V,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(H.productosVenta,(function(t,e){return Object(a["t"])(),Object(a["e"])(X,{indice:e,key:e,producto:t},null,8,["indice","producto"])})),128))])],512)]),Object(a["i"])("div",P,[w,Object(a["i"])("div",x,[Object(a["i"])("button",{onClick:e[4]||(e[4]=function(t){return H.cancelVenta()}),class:"btn btn-danger mr-2"}," Anular "),Object(a["i"])("button",{onClick:e[5]||(e[5]=function(t){return H.preGuardarCompra()}),class:"btn btn-primary",id:"btn_facturar_venta"},[_,A])])])])])])):(Object(a["t"])(),Object(a["e"])(Y,{key:1})),H.modalVenta?(Object(a["t"])(),Object(a["e"])("div",L,[Object(a["i"])("div",F,[Object(a["i"])("div",U,[Object(a["i"])("div",N,[Object(a["i"])("div",K,[B,Object(a["i"])("button",{type:"button",class:"close",onClick:e[6]||(e[6]=function(){return H.newVenta&&H.newVenta.apply(H,arguments)}),"data-dismiss":"modal","aria-label":"Close"},[E])]),Object(a["i"])("div",G,[H.statusVenta?Object(a["f"])("",!0):(Object(a["t"])(),Object(a["e"])("div",S,[Object(a["i"])("div",q,[Object(a["P"])(Object(a["i"])("input",{class:"form-check-input","onUpdate:modelValue":e[7]||(e[7]=function(t){return H.prestamo=t}),type:"checkbox",id:"defaultCheck1"},null,512),[[a["I"],H.prestamo]]),z]),D,Object(a["P"])(Object(a["i"])("input",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return H.notaVenta=t}),type:"text",id:"inputNota",placeholder:"agregar una nota",class:"form-control"},null,512),[[a["K"],H.notaVenta]]),Object(a["P"])(Object(a["i"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return H.pago=t}),type:"",id:"",placeholder:"tipo de pago ",class:"form-control mt-4"},null,512),[[a["K"],H.pago]])])),H.statusVenta?(Object(a["t"])(),Object(a["e"])("div",I,[J,T,Object(a["i"])("button",{onClick:e[10]||(e[10]=function(){return H.newVenta&&H.newVenta.apply(H,arguments)}),class:"btn btn-primary mr-2"},"registrar otra venta")])):Object(a["f"])("",!0)]),Object(a["i"])("div",M,[Object(a["i"])("button",{onClick:e[11]||(e[11]=function(){return H.newVenta&&H.newVenta.apply(H,arguments)}),class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar "),Object(a["i"])("button",{onClick:e[12]||(e[12]=function(t){return H.guardarCompra()}),class:"btn btn-primary"}," Comprar ")])])])]),R])):Object(a["f"])("",!0)],64)}var Q=c("d97a"),W=c("5502"),X=c("a1e9"),Y=Object(a["i"])("i",{class:"svg-inline--fa fas fa-trash-alt fa-w-14"},null,-1),Z=Object(a["h"])(" Eliminar ");function $(t,e,c,n,i,o){return Object(a["t"])(),Object(a["e"])("tr",null,[Object(a["i"])("th",null,Object(a["F"])(c.producto.codigo),1),Object(a["i"])("th",null,Object(a["F"])(c.producto.productName),1),Object(a["i"])("th",null,Object(a["F"])(c.producto.cantidad),1),Object(a["i"])("th",null,[Object(a["i"])("button",{onClick:e[1]||(e[1]=function(t){return n.deleteProduct(c.indice)}),class:"btn btn-danger"},[Y,Z])])])}c("a434");var tt=c("5c40"),et={props:["producto","indice"],setup:function(t){var e=Object(W["b"])(),c=Object(X["k"])(t.producto),a=Object(tt["d"])((function(){return e.state.system.info.dolar})),n=Object(tt["d"])((function(){var t=c.value,e=t.precio*t.iva/100*t.cantidad,a=t.precio*t.cantidad;return a||(a=0),e||(e=0),a+e}));function i(t){e.dispatch("resProducto",{id:c.value.producto_id,indice:t}),c.value.imei.splice(t,1)}function o(t){e.dispatch("deleteStore",t)}return{total:n,dolar:a,deleteProduct:o,Producto:c,deleteOneItem:i}}};et.render=$;var ct=et,at=c("98a0"),nt={props:["param"],components:{ListProductos:ct,NoAccess:Q["default"]},setup:function(){var t=Object(W["b"])();t.dispatch("getProductos"),t.dispatch("buscar"),t.dispatch("getClientes");var e=!1,c=Object(X["a"])((function(){return t.state.system.info.dolar})),a=Object(X["k"])(!1),n=Object(X["k"])(""),i=Object(X["k"])({}),o=Object(X["k"])(1),r=Object(X["k"])(""),l=Object(X["a"])((function(){return t.state.toask})),u=Object(X["a"])((function(){return t.state.usuario})),s=Object(X["a"])((function(){return t.state.productosVenta})),d=Object(X["a"])((function(){return t.state.statusVenta})),b=Object(X["k"])(""),O=Object(X["k"])(""),j=Object(X["k"])(!1),p=Object(X["a"])((function(){var t=i.value,e=t.precio*t.iva/100*o.value,c=t.precio*o.value;return c||(c=0),e||(e=0),c+e})),f=Object(X["a"])((function(){return t.state.dataCliente})),v=Object(X["a"])((function(){return t.state.datosCliente})),m=Object(X["a"])((function(){return s.value.reduce((function(t,e){return t+e.cantidad*e.precio}),0)})),h=Object(X["a"])((function(){return s.value.reduce((function(t,e){return t+e.cantidad*e.precio*e.iva/100}),0)})),C=Object(X["a"])((function(){return t.state.productosTrue})),g=Object(X["a"])((function(){return t.state.clientesActivos}));function k(){t.dispatch("vaciarVenta"),b.value="",j.value=!1,a.value=!1,A()}function y(e){r.value="",t.dispatch("guardarCliente",e)}var V=function(){var e={ruta:"/manager/ventas/add"};t.dispatch("sendUrl",e)};function P(){if(0==s.value.length)return Object(at["a"])("no se puede hacer una venta vacia",l.value.warning);a.value=!0}function w(t){n.value="",i.value=t}function x(){o.value>i.value.cantidad&&(o.value=i.value.cantidad)}function _(){var e={productName:i.value.descripcion,modelo:i.value.modelo,marca:i.value.marca,precio:i.value.precio,codigo:i.value.codigo,imei:[{value:null}],cantidad:o.value,iva:i.value.iva,producto_id:i.value._id};t.dispatch("agregarToCarrito",e)}function A(){t.dispatch("deleteProccessVenta"),i.value={},o.value=1}function L(){t.dispatch("generarPdf")}function F(){t.dispatch("comprar",{nota:b.value,credito:j.value,pago:O.value})}return{usuario:u,infoCliente:e,newVenta:k,generarPdf:L,statusVenta:d,dolar:c,prestamo:j,modalVenta:a,notaVenta:b,pago:O,preGuardarCompra:P,guardarCompra:F,iva:h,totalVenta:m,cancelVenta:A,agregarCarrito:_,productosVenta:s,verifyStock:x,total:p,cantidad:o,inputsAgregar:i,selectProducto:w,buscarProducto:n,sendUrl:V,selectCliente:y,productos:C,buscarClientes:r,clientes:g,dataCliente:f,datosCliente:v}}};c("84dc");nt.render=H;e["default"]=nt},"84dc":function(t,e,c){"use strict";c("d6d4")},d6d4:function(t,e,c){},d97a:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={style:{height:"70vh"},id:"layoutError"},i={id:"layoutError_content"},o={class:"container"},r={class:"row mt-5 justify-content-center"},l={class:"col-lg-6"},u={class:"text-center mt-4"},s=Object(a["i"])("h1",{class:"display-1"},"403",-1),d=Object(a["i"])("p",{class:"lead"},"sin autorizacion",-1),b=Object(a["i"])("p",null,"su acceso a esta area no esta permitido.",-1),O=Object(a["i"])("i",{class:"fas fa-arrow-left me-1"},null,-1),j=Object(a["h"])(" regresar al inicio ");function p(t,e,c,p,f,v){var m=Object(a["C"])("router-link");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["i"])("div",n,[Object(a["i"])("div",i,[Object(a["i"])("main",null,[Object(a["i"])("div",o,[Object(a["i"])("div",r,[Object(a["i"])("div",l,[Object(a["i"])("div",u,[s,d,b,Object(a["i"])(m,{to:"/"},{default:Object(a["O"])((function(){return[O,j]})),_:1})])])])])])])]),Object(a["i"])("button",{onClick:e[1]||(e[1]=function(){return p.alert&&p.alert.apply(p,arguments)})})],64)}var f={setup:function(){function t(){for(var t=4e4,e=0;e<t;e++)console.log("hola")}return{alert:t}}};f.render=p;e["default"]=f}}]);
//# sourceMappingURL=chunk-e006f0d8.95db80eb.js.map