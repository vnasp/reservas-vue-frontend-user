"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[574],{8574:function(t,a,l){l.r(a),l.d(a,{default:function(){return h}});var n=l(6768),r=l(4232);const e={class:"container pt-5"},u=(0,n.Lk)("p",{class:"text-primary text-center"},"Panel de Administración",-1),i=(0,n.Lk)("h3",{class:"text-center mb-5 text-uppercase fw-bolder fs-1"},"Listado de Usuarios",-1),s={class:"table table-striped"},o=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"ID"),(0,n.Lk)("th",null,"Nombre"),(0,n.Lk)("th",null,"Apellido"),(0,n.Lk)("th",null,"Correo"),(0,n.Lk)("th",null,"Teléfono"),(0,n.Lk)("th",null,"Rol"),(0,n.Lk)("th",null,"Acciones")])],-1),d=["onClick"];function k(t,a,l,k,c,m){return(0,n.uX)(),(0,n.CE)("main",e,[u,i,(0,n.Lk)("table",s,[o,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(m.filteredUsuarios,(t=>((0,n.uX)(),(0,n.CE)("tr",{key:t.id},[(0,n.Lk)("td",null,(0,r.v_)(t.id),1),(0,n.Lk)("td",null,(0,r.v_)(t.nombre),1),(0,n.Lk)("td",null,(0,r.v_)(t.apellido),1),(0,n.Lk)("td",null,(0,r.v_)(t.email),1),(0,n.Lk)("td",null,(0,r.v_)(t.telefono),1),(0,n.Lk)("td",null,(0,r.v_)(t.adminStatus?"Administrador":"Usuario"),1),(0,n.Lk)("td",null,[(0,n.Lk)("button",{onClick:a=>m.handleUsuarioRol(t),class:(0,r.C4)(["btn btn-sm",{"btn-primary":!t.adminStatus,"btn-dark":t.adminStatus}])},(0,r.v_)(t.adminStatus?"Cambiar a Usuario":"Cambiar a Administrador"),11,d)])])))),128))])])])}var c=l(782),m={name:"AdminUsuariosView",computed:{...(0,c.L8)(["usuarios","usuarioActual"]),filteredUsuarios(){return this.usuarios.filter((t=>t.id!==this.usuarioActual.id))}},methods:{...(0,c.i0)(["cambiarRol"]),handleUsuarioRol(t){this.cambiarRol(t)}}},L=l(1241);const b=(0,L.A)(m,[["render",k]]);var h=b}}]);
//# sourceMappingURL=574.0416d2c5.js.map