(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9ea42c0","chunk-2d21f315"],{"72e7":function(t,e,a){"use strict";a("e5aa")},c285:function(t,e,a){"use strict";a.r(e);a("d3b7"),a("25f0");var c=a("7a23"),n=Object(c["S"])("data-v-401857ef");Object(c["w"])("data-v-401857ef");var i={key:0,class:"container-fluid"},r=Object(c["i"])("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[Object(c["i"])("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Panel de Administración")],-1),l={class:"text-right mb-2"},o=Object(c["h"])(" mostrar "),u={class:"btn-group ml-2"},s={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},b={class:"dropdown-menu"},d=Object(c["i"])("div",{class:"dropdown-divider"},null,-1),j={class:"row"},O={class:"col-lg-12"},f={class:"table-responsive"},v={class:"table table-striped table-bordered",id:"table"},p=Object(c["i"])("thead",{class:"thead-dark"},[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"# factura"),Object(c["i"])("th",null,"Fecha"),Object(c["i"])("th",null,"Acciones")])],-1),m={"aria-label":"...",class:"text-center"},g={class:"pagination justify-content-center"},h=Object(c["i"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true"},"Previous",-1),k={class:"pagination scroll scrollbar-light-blue"},y={class:"page-link"},w=Object(c["i"])("a",{class:"page-link",href:"#"},"Next",-1);Object(c["u"])();var F=n((function(t,e,a,n,F,C){var x=Object(c["C"])("ModalInfoFactura"),I=Object(c["C"])("List",!0),_=Object(c["C"])("NoAccess");return n.usuario.rol.grado<=2?(Object(c["t"])(),Object(c["e"])("div",i,[Object(c["i"])(x),r,Object(c["i"])("div",l,[o,Object(c["i"])("div",u,[Object(c["i"])("button",s,Object(c["F"])(n.limit),1),Object(c["i"])("div",b,[Object(c["i"])("a",{class:["dropdown-item",{active:5==n.limit}],onClick:e[1]||(e[1]=function(t){return n.limitar(5)})},"5",2),Object(c["i"])("a",{class:["dropdown-item",{active:10==n.limit}],onClick:e[2]||(e[2]=function(t){return n.limitar(10)})},"10",2),Object(c["i"])("a",{class:["dropdown-item",{active:20==n.limit}],onClick:e[3]||(e[3]=function(t){return n.limitar(20)})},"20",2),d,Object(c["i"])("a",{class:["dropdown-item",{active:void 0==n.limit}],onClick:e[4]||(e[4]=function(t){return n.limitar(void 0)})},"todos",2)])])]),Object(c["i"])("div",j,[Object(c["i"])("div",O,[Object(c["i"])("div",f,[Object(c["i"])("table",v,[p,Object(c["h"])(" "+Object(c["F"])(a.param)+" ",1),Object(c["i"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.ventas,(function(t,e){return Object(c["P"])((Object(c["t"])(),Object(c["e"])(I,{venta:t,key:e},null,8,["venta"])),[[c["L"],-1!=t.factura.toString().indexOf(a.param)]])})),128))])]),Object(c["i"])("nav",m,[Object(c["i"])("ul",g,[Object(c["i"])("div",{class:["page-item",{disabled:1==n.page}],onClick:e[5]||(e[5]=function(){return n.previous&&n.previous.apply(n,arguments)})},[h],2),Object(c["i"])("div",k,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.lista,(function(t,e){return Object(c["t"])(),Object(c["e"])("div",{key:e,class:["page-item",{active:n.page==t}],onClick:function(e){return n.getPage(t)}},[Object(c["i"])("a",y,Object(c["F"])(t),1)],10,["onClick"])})),128))]),Object(c["i"])("li",{class:["page-item",{disabled:n.lista.length===n.page||void 0===n.limit}],onClick:e[6]||(e[6]=function(){return n.next&&n.next.apply(n,arguments)})},[w],2)])])])])])])):(Object(c["t"])(),Object(c["e"])(_,{key:1}))})),C=a("1da1"),x=(a("96cf"),a("99af"),a("5c40")),I=a("a1e9"),_=a("d97a"),A={key:0},L={class:"modal fade show",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel",style:{display:"block"},"aria-modal":"true"},P={class:"modal-dialog modal-center"},M={class:"modal-content"},T={class:"modal-header"},B=Object(c["i"])("h5",{class:"modal-title",id:"staticBackdropLabel"},"Modal title",-1),N=Object(c["i"])("span",{"aria-hidden":"true"},"×",-1),E={class:"modal-body"},J={key:0},R={key:1},S={key:2},V=Object(c["h"])(" fecha: "),z=Object(c["i"])("p",null,"productos:",-1),q={key:0},D={class:"modal-footer"},G=Object(c["i"])("div",{class:"modal-backdrop fade show"},null,-1);function H(t,e,a,n,i,r){return Object(c["t"])(),Object(c["e"])("div",null,[n.modalInfo?(Object(c["t"])(),Object(c["e"])("div",A,[Object(c["i"])("div",L,[Object(c["i"])("div",P,[Object(c["i"])("div",M,[Object(c["i"])("div",T,[B,Object(c["i"])("button",{type:"button",class:"close",onClick:e[1]||(e[1]=function(){return n.cerrarFactura&&n.cerrarFactura.apply(n,arguments)}),"data-dismiss":"modal","aria-label":"Close"},[N])]),Object(c["i"])("div",E,[n.venta.user_id?(Object(c["t"])(),Object(c["e"])("h5",J,"Creada por : "+Object(c["F"])(n.venta.user_id.username||0),1)):Object(c["f"])("",!0),n.venta.pago?(Object(c["t"])(),Object(c["e"])("h5",R,"tipo de pago : "+Object(c["F"])(n.venta.pago||0),1)):Object(c["f"])("",!0),n.venta.nota?(Object(c["t"])(),Object(c["e"])("h5",S,"nota : "+Object(c["F"])(n.venta.nota||0),1)):Object(c["f"])("",!0),Object(c["i"])("span",null,[V,Object(c["i"])("strong",null,Object(c["F"])(n.formatTime(n.venta.createdAt)||0),1)]),z,Object(c["i"])("ul",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.venta.productos,(function(t,e){return Object(c["t"])(),Object(c["e"])("li",{key:e},[t.producto_id?(Object(c["t"])(),Object(c["e"])("p",q,Object(c["F"])(t.producto_id.descripcion||"null-"+t.producto_id.codigo||0),1)):Object(c["f"])("",!0),Object(c["h"])(" cantidad: "+Object(c["F"])(t.cantidad||0),1)])})),128))])]),Object(c["i"])("div",D,[Object(c["i"])("button",{onClick:e[2]||(e[2]=function(){return n.cerrarFactura&&n.cerrarFactura.apply(n,arguments)}),class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar ")])])])]),G])):Object(c["f"])("",!0)])}var K=a("5502"),Q=a("c1df"),U=a.n(Q),W={setup:function(){function t(t){return U()(t).format("lll")}function e(){a.dispatch("cerrarModalInfo")}var a=Object(K["b"])(),n=Object(c["c"])((function(){return a.state.modalInfo})),i=Object(c["c"])((function(){return a.state.factura}));return{modalInfo:n,venta:i,formatTime:t,cerrarFactura:e}}};W.render=H;var X=W,Y=a("bc3a"),Z=a.n(Y);function $(t,e,a,n,i,r){return Object(c["t"])(),Object(c["e"])("tr",null,[Object(c["i"])("td",null,Object(c["F"])(t.numeralFormat(a.venta.factura,"000000")),1),Object(c["i"])("td",null,Object(c["F"])(n.formatTime(a.venta.createdAt)),1),Object(c["i"])("td",null,[Object(c["i"])("button",{onClick:e[1]||(e[1]=function(t){return n.detalles(a.venta)}),type:"button",class:"btn btn-secondary view_factura ml-2"}," detalles ")])])}var tt={props:["venta"],setup:function(t){function e(t){return U()(t).format("L")}var a=Object(K["b"])(),c=Object(I["k"])(t.venta),n=c.value,i=Object(x["d"])((function(){return a.state.modalInfo}));function r(){a.dispatch("guardarVenta",c.value),a.dispatch("generarPdf")}var l=Object(x["d"])((function(){return n.productos.reduce((function(t,e){return t+(e.precio*e.iva/100+e.precio)*e.cantidad}),0)})),o=Object(x["d"])((function(){return a.state.system.info.dolar}));function u(t){a.dispatch("getInfoVenta",t)}return{total:l,pdf:r,formatTime:e,modalInfo:i,detalles:u,dolar:o}}};tt.render=$;var et=tt,at={props:["param"],components:{List:et,NoAccess:_["default"],ModalInfoFactura:X},setup:function(){var t=Object(K["b"])(),e=Object(x["d"])((function(){return t.state.api})),a=Object(x["d"])((function(){return t.state.usuario})),c=Object(I["k"])([]),n=Object(I["k"])(10),i=Object(I["k"])(1),r=Object(I["k"])([]);function l(t){n.value=t,i.value=1,b()}function o(){1!==i.value&&void 0!==n.value&&(i.value--,b())}function u(){i.value!==r.value.length&&void 0!==n.value&&(i.value++,b())}function s(t){i.value=t,b()}function b(){return d.apply(this,arguments)}function d(){return d=Object(C["a"])(regeneratorRuntime.mark((function t(){var a,l,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.value=[],t.next=3,Z.a.get("".concat(e.value,"/ventas/").concat(n.value,"/").concat(i.value));case 3:for(a=t.sent,l=a.data,c.value=l.ventas,r.value=[],o=0;o<l.count/n.value;o++)u=o+1,r.value.push(u);case 8:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}return b(),{ventas:c,lista:r,limit:n,page:i,getPage:s,previous:o,next:u,limitar:l,usuario:a}}};a("72e7");at.render=F,at.__scopeId="data-v-401857ef";e["default"]=at},d97a:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={style:{height:"70vh"},id:"layoutError"},i={id:"layoutError_content"},r={class:"container"},l={class:"row mt-5 justify-content-center"},o={class:"col-lg-6"},u={class:"text-center mt-4"},s=Object(c["i"])("h1",{class:"display-1"},"403",-1),b=Object(c["i"])("p",{class:"lead"},"sin autorizacion",-1),d=Object(c["i"])("p",null,"su acceso a esta area no esta permitido.",-1),j=Object(c["i"])("i",{class:"fas fa-arrow-left me-1"},null,-1),O=Object(c["h"])(" regresar al inicio ");function f(t,e,a,f,v,p){var m=Object(c["C"])("router-link");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["i"])("div",n,[Object(c["i"])("div",i,[Object(c["i"])("main",null,[Object(c["i"])("div",r,[Object(c["i"])("div",l,[Object(c["i"])("div",o,[Object(c["i"])("div",u,[s,b,d,Object(c["i"])(m,{to:"/"},{default:Object(c["O"])((function(){return[j,O]})),_:1})])])])])])])]),Object(c["i"])("button",{onClick:e[1]||(e[1]=function(){return f.alert&&f.alert.apply(f,arguments)})})],64)}var v={setup:function(){function t(){for(var t=4e4,e=0;e<t;e++)console.log("hola")}return{alert:t}}};v.render=f;e["default"]=v},e5aa:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a9ea42c0.39c03361.js.map