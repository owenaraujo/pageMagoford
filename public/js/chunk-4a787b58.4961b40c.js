(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a787b58","chunk-2d21f315"],{"784b":function(t,e,a){},"8da9":function(t,e,a){"use strict";a("784b")},c285:function(t,e,a){"use strict";a.r(e);a("d3b7"),a("25f0");var c=a("7a23"),n=Object(c["S"])("data-v-cbec77ae");Object(c["w"])("data-v-cbec77ae");var i={key:0,class:"container-fluid"},r=Object(c["i"])("input",{class:"d-none",type:"datetime-local",name:"",id:""},null,-1),l=Object(c["i"])("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[Object(c["i"])("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Panel de Administración")],-1),o={class:"text-right mb-2"},s=Object(c["h"])(" mostrar "),u={class:"btn-group ml-2"},b={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},d={class:"dropdown-menu"},j=Object(c["i"])("div",{class:"dropdown-divider"},null,-1),O={class:"row"},f={class:"col-lg-12"},p={class:"table-responsive"},v={class:"table table-striped table-bordered",id:"table"},m=Object(c["i"])("thead",{class:"thead-dark"},[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"# factura"),Object(c["i"])("th",null,"Fecha"),Object(c["i"])("th",null,"Acciones")])],-1),h={"aria-label":"...",class:"text-center"},g={class:"pagination justify-content-center"},k=Object(c["i"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true"},"Previous",-1),y={class:"pagination scroll scrollbar-light-blue"},w={class:"page-link"},F=Object(c["i"])("a",{class:"page-link",href:"#"},"Next",-1);Object(c["u"])();var x=n((function(t,e,a,n,x,C){var I=Object(c["C"])("ModalInfoFactura"),_=Object(c["C"])("List",!0),A=Object(c["C"])("NoAccess");return n.usuario.rol.grado<=2?(Object(c["t"])(),Object(c["e"])("div",i,[Object(c["i"])(I),r,l,Object(c["i"])("div",o,[s,Object(c["i"])("div",u,[Object(c["i"])("button",b,Object(c["F"])(n.limit),1),Object(c["i"])("div",d,[Object(c["i"])("a",{class:["dropdown-item",{active:5==n.limit}],onClick:e[1]||(e[1]=function(t){return n.limitar(5)})},"5",2),Object(c["i"])("a",{class:["dropdown-item",{active:10==n.limit}],onClick:e[2]||(e[2]=function(t){return n.limitar(10)})},"10",2),Object(c["i"])("a",{class:["dropdown-item",{active:20==n.limit}],onClick:e[3]||(e[3]=function(t){return n.limitar(20)})},"20",2),j,Object(c["i"])("a",{class:["dropdown-item",{active:void 0==n.limit}],onClick:e[4]||(e[4]=function(t){return n.limitar(void 0)})},"todos",2)])])]),Object(c["i"])("div",O,[Object(c["i"])("div",f,[Object(c["i"])("div",p,[Object(c["i"])("table",v,[m,Object(c["h"])(" "+Object(c["F"])(a.param)+" ",1),Object(c["i"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.ventas,(function(t,e){return Object(c["P"])((Object(c["t"])(),Object(c["e"])(_,{venta:t,key:e},null,8,["venta"])),[[c["L"],-1!=t.factura.toString().indexOf(a.param)]])})),128))])]),Object(c["i"])("nav",h,[Object(c["i"])("ul",g,[Object(c["i"])("div",{class:["page-item",{disabled:1==n.page}],onClick:e[5]||(e[5]=function(){return n.previous&&n.previous.apply(n,arguments)})},[k],2),Object(c["i"])("div",y,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.lista,(function(t,e){return Object(c["t"])(),Object(c["e"])("div",{key:e,class:["page-item",{active:n.page==t}],onClick:function(e){return n.getPage(t)}},[Object(c["i"])("a",w,Object(c["F"])(t),1)],10,["onClick"])})),128))]),Object(c["i"])("li",{class:["page-item",{disabled:n.lista.length===n.page||void 0===n.limit}],onClick:e[6]||(e[6]=function(){return n.next&&n.next.apply(n,arguments)})},[F],2)])])])])])])):(Object(c["t"])(),Object(c["e"])(A,{key:1}))})),C=a("1da1"),I=(a("96cf"),a("99af"),a("5c40")),_=a("a1e9"),A=a("d97a"),L={key:0},P={class:"modal fade show",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel",style:{display:"block"},"aria-modal":"true"},M={class:"modal-dialog modal-center"},R={class:"modal-content"},T={class:"modal-header"},B=Object(c["i"])("h5",{class:"modal-title",id:"staticBackdropLabel"},"Modal title",-1),N=Object(c["i"])("span",{"aria-hidden":"true"},"×",-1),V={class:"modal-body"},E={key:0},J={key:1},S={key:2},z=Object(c["h"])(" fecha: "),q=Object(c["i"])("p",null,"productos:",-1),D={key:0},G={class:"modal-footer"},H=Object(c["i"])("div",{class:"modal-backdrop fade show"},null,-1);function K(t,e,a,n,i,r){return Object(c["t"])(),Object(c["e"])("div",null,[n.modalInfo?(Object(c["t"])(),Object(c["e"])("div",L,[Object(c["i"])("div",P,[Object(c["i"])("div",M,[Object(c["i"])("div",R,[Object(c["i"])("div",T,[B,Object(c["i"])("button",{type:"button",class:"close",onClick:e[1]||(e[1]=function(){return n.cerrarFactura&&n.cerrarFactura.apply(n,arguments)}),"data-dismiss":"modal","aria-label":"Close"},[N])]),Object(c["i"])("div",V,[n.venta.user_id?(Object(c["t"])(),Object(c["e"])("h5",E,"Creada por : "+Object(c["F"])(n.venta.user_id.username||0),1)):Object(c["f"])("",!0),n.venta.pago?(Object(c["t"])(),Object(c["e"])("h5",J,"tipo de pago : "+Object(c["F"])(n.venta.pago||0),1)):Object(c["f"])("",!0),n.venta.nota?(Object(c["t"])(),Object(c["e"])("h5",S,"nota : "+Object(c["F"])(n.venta.nota||0),1)):Object(c["f"])("",!0),Object(c["i"])("span",null,[z,Object(c["i"])("strong",null,Object(c["F"])(n.formatTime(n.venta.createdAt)||0),1)]),q,Object(c["i"])("ul",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(n.venta.productos,(function(t,e){return Object(c["t"])(),Object(c["e"])("li",{key:e},[t.producto_id?(Object(c["t"])(),Object(c["e"])("p",D,Object(c["F"])(t.producto_id.descripcion||"null-"+t.producto_id.codigo||0),1)):Object(c["f"])("",!0),Object(c["h"])(" cantidad: "+Object(c["F"])(t.cantidad||0),1)])})),128))])]),Object(c["i"])("div",G,[Object(c["i"])("button",{onClick:e[2]||(e[2]=function(){return n.cerrarFactura&&n.cerrarFactura.apply(n,arguments)}),class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar ")])])])]),H])):Object(c["f"])("",!0)])}var Q=a("5502"),U=a("c1df"),W=a.n(U),X={setup:function(){function t(t){return W()(t).format("lll")}function e(){a.dispatch("cerrarModalInfo")}var a=Object(Q["b"])(),n=Object(c["c"])((function(){return a.state.modalInfo})),i=Object(c["c"])((function(){return a.state.factura}));return{modalInfo:n,venta:i,formatTime:t,cerrarFactura:e}}};X.render=K;var Y=X,Z=a("bc3a"),$=a.n(Z);function tt(t,e,a,n,i,r){return Object(c["t"])(),Object(c["e"])("tr",null,[Object(c["i"])("td",null,Object(c["F"])(t.numeralFormat(a.venta.factura,"000000")),1),Object(c["i"])("td",null,Object(c["F"])(n.formatTime(a.venta.createdAt)),1),Object(c["i"])("td",null,[Object(c["i"])("button",{onClick:e[1]||(e[1]=function(t){return n.detalles(a.venta)}),type:"button",class:"btn btn-secondary view_factura ml-2"}," detalles ")])])}var et={props:["venta"],setup:function(t){function e(t){return W()(t).format("L")}var a=Object(Q["b"])(),c=Object(_["k"])(t.venta),n=c.value,i=Object(I["d"])((function(){return a.state.modalInfo}));function r(){a.dispatch("guardarVenta",c.value),a.dispatch("generarPdf")}var l=Object(I["d"])((function(){return n.productos.reduce((function(t,e){return t+(e.precio*e.iva/100+e.precio)*e.cantidad}),0)})),o=Object(I["d"])((function(){return a.state.system.info.dolar}));function s(t){a.dispatch("getInfoVenta",t)}return{total:l,pdf:r,formatTime:e,modalInfo:i,detalles:s,dolar:o}}};et.render=tt;var at=et,ct={props:["param"],components:{List:at,NoAccess:A["default"],ModalInfoFactura:Y},setup:function(){var t=Object(Q["b"])(),e=Object(I["d"])((function(){return t.state.api})),a=Object(I["d"])((function(){return t.state.usuario})),c=Object(_["k"])([]),n=Object(_["k"])(10),i=Object(_["k"])(1),r=Object(_["k"])([]);function l(t){n.value=t,i.value=1,j()}function o(){1!==i.value&&void 0!==n.value&&(i.value--,j())}function s(){i.value!==r.value.length&&void 0!==n.value&&(i.value++,j())}function u(t){i.value=t,j()}function b(){return d.apply(this,arguments)}function d(){return d=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=this.fechaInicio){t.next=2;break}return t.abrupt("return");case 2:if(null!=this.fechaFinal){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,$.a.get("".concat(this.server,"/ventas/get/").concat(this.fechaInicio,"/").concat(this.fechaFinal));case 6:e=t.sent,a=e.data,console.log(a);case 9:case"end":return t.stop()}}),t,this)}))),d.apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return O=Object(C["a"])(regeneratorRuntime.mark((function t(){var a,l,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.value=[],t.next=3,$.a.get("".concat(e.value,"/ventas/").concat(n.value,"/").concat(i.value));case 3:for(a=t.sent,l=a.data,c.value=l.ventas,r.value=[],o=0;o<l.count/n.value;o++)s=o+1,r.value.push(s);case 8:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}return j(),{ventas:c,getVentas:b,lista:r,limit:n,page:i,getPage:u,previous:o,next:s,limitar:l,usuario:a}}};a("8da9");ct.render=x,ct.__scopeId="data-v-cbec77ae";e["default"]=ct},d97a:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={style:{height:"70vh"},id:"layoutError"},i={id:"layoutError_content"},r={class:"container"},l={class:"row mt-5 justify-content-center"},o={class:"col-lg-6"},s={class:"text-center mt-4"},u=Object(c["i"])("h1",{class:"display-1"},"403",-1),b=Object(c["i"])("p",{class:"lead"},"sin autorizacion",-1),d=Object(c["i"])("p",null,"su acceso a esta area no esta permitido.",-1),j=Object(c["i"])("i",{class:"fas fa-arrow-left me-1"},null,-1),O=Object(c["h"])(" regresar al inicio ");function f(t,e,a,f,p,v){var m=Object(c["C"])("router-link");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["i"])("div",n,[Object(c["i"])("div",i,[Object(c["i"])("main",null,[Object(c["i"])("div",r,[Object(c["i"])("div",l,[Object(c["i"])("div",o,[Object(c["i"])("div",s,[u,b,d,Object(c["i"])(m,{to:"/"},{default:Object(c["O"])((function(){return[j,O]})),_:1})])])])])])])]),Object(c["i"])("button",{onClick:e[1]||(e[1]=function(){return f.alert&&f.alert.apply(f,arguments)})})],64)}var p={setup:function(){function t(){for(var t=4e4,e=0;e<t;e++)console.log("hola")}return{alert:t}}};p.render=f;e["default"]=p}}]);
//# sourceMappingURL=chunk-4a787b58.4961b40c.js.map