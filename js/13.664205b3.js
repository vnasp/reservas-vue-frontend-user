"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[13],{7451:function(e,r,t){t.d(r,{A:function(){return f}});var a=t(6768),n=t(4232);const s={class:"table table-striped"},l=(0,a.Lk)("th",null,"Nombre y Apellido",-1),u=(0,a.Lk)("th",null,"N° Personas",-1),o=(0,a.Lk)("th",null,"Fecha",-1),i=(0,a.Lk)("th",null,"Check-in",-1),c=(0,a.Lk)("th",null,"Tipo",-1),d=(0,a.Lk)("th",null,"Fono Contacto",-1),v=(0,a.Lk)("th",null,"Correo Contacto",-1),k={key:0},h={key:0},m=["onClick"];function p(e,r,t,p,L,b){return(0,a.uX)(),(0,a.CE)("table",s,[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[l,u,o,i,c,d,v,t.adminStatus?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("th",k,"Acciones"))])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.reservas,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("td",null,(0,n.v_)(b.getClienteNombre(e.user_id)),1),(0,a.Lk)("td",null,(0,n.v_)(e.personas),1),(0,a.Lk)("td",null,(0,n.v_)(e.fecha),1),(0,a.Lk)("td",null,(0,n.v_)(e.hora),1),(0,a.Lk)("td",null,(0,n.v_)(e.tipo),1),(0,a.Lk)("td",null,(0,n.v_)(e.telefono),1),(0,a.Lk)("td",null,(0,n.v_)(e.correo),1),t.adminStatus?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("td",h,[(0,a.Lk)("button",{onClick:r=>b.handleCancelar(e.id),class:"btn btn-primary"},"Cancelar",8,m)]))])))),128))])])}var L={name:"TablaReservas",props:{reservas:{type:Array,required:!0},usuarios:{type:Array,required:!0},usuarioActual:{type:Object,required:!0},adminStatus:{type:Boolean,default:!1}},methods:{getClienteNombre(e){const r=this.usuarios.find((r=>r.id===e));return`${r.nombre} ${r.apellido}`},handleCancelar(e){this.$emit("cancelar-reserva",e)}}},b=t(1241);const C=(0,b.A)(L,[["render",p]]);var f=C},3013:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var a=t(6768);const n={class:"container pt-5 h-100"},s=(0,a.Lk)("p",{class:"text-primary text-center"},"Panel de Administración",-1),l=(0,a.Lk)("h3",{class:"text-center mb-5 text-uppercase fw-bolder fs-1"},"Listado de Reservas",-1),u={class:"overflow-x-auto"};function o(e,r,t,o,i,c){const d=(0,a.g2)("TableReservas");return(0,a.uX)(),(0,a.CE)("main",n,[s,l,(0,a.Lk)("div",u,[(0,a.bF)(d,{reservas:e.reservas,usuarios:e.usuarios,adminStatus:!0},null,8,["reservas","usuarios"])])])}var i=t(782),c=t(7451),d={name:"AdminReservasView",components:{TableReservas:c.A},computed:{...(0,i.L8)(["reservas","usuarios"])},methods:{...(0,i.i0)(["cargarReservas"])},mounted(){this.cargarReservas()}},v=t(1241);const k=(0,v.A)(d,[["render",o]]);var h=k}}]);
//# sourceMappingURL=13.664205b3.js.map