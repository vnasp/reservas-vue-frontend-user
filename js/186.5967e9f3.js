"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[186],{794:function(e,a,r){r.d(a,{A:function(){return f}});r(6573),r(8100),r(7936),r(7467),r(4732),r(9577);var o,t=new Uint8Array(16);function s(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(t)}r(4114);var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function l(e){return"string"===typeof e&&n.test(e)}for(var i=l,u=[],d=0;d<256;++d)u.push((d+256).toString(16).substr(1));function c(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[e[a+0]]+u[e[a+1]]+u[e[a+2]]+u[e[a+3]]+"-"+u[e[a+4]]+u[e[a+5]]+"-"+u[e[a+6]]+u[e[a+7]]+"-"+u[e[a+8]]+u[e[a+9]]+"-"+u[e[a+10]]+u[e[a+11]]+u[e[a+12]]+u[e[a+13]]+u[e[a+14]]+u[e[a+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r}var p=c;function m(e,a,r){e=e||{};var o=e.random||(e.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,a){r=r||0;for(var t=0;t<16;++t)a[r+t]=o[t];return a}return p(o)}var f=m},5186:function(e,a,r){r.r(a),r.d(a,{default:function(){return V}});var o=r(6768),t=r(5130);const s={class:"container pt-5 h-100 d-flex flex-column align-items-center"},n=(0,o.Lk)("h1",{class:"my-5 text-center"},[(0,o.Lk)("i",{class:"bi bi-bookmark-star-fill me-1"}),(0,o.eW)("Crea tu cuenta")],-1),l=(0,o.Lk)("p",{class:"text-center w-75"},"Registrándote en Hostal Patagonia podrás reservar una habitación para ti y tus acompañantes, y disfrutar de una estadía inolvidable con servicios excepcionales y actividades emocionantes.",-1),i={class:"mb-3"},u=(0,o.Lk)("label",{for:"nombre",class:"form-label"},"Nombre",-1),d={class:"mb-3"},c=(0,o.Lk)("label",{for:"apellido",class:"form-label"},"Apellido",-1),p={class:"mb-3"},m=(0,o.Lk)("label",{for:"email",class:"form-label"},"Correo",-1),f={class:"mb-3"},b=(0,o.Lk)("label",{for:"telefono",class:"form-label"},"Teléfono",-1),v={class:"mb-3"},g=(0,o.Lk)("label",{for:"password",class:"form-label"},"Contraseña",-1),k=(0,o.Lk)("div",{class:"text-center"},[(0,o.Lk)("button",{type:"submit",class:"btn btn-primary"},"Registrarse")],-1);function y(e,a,r,y,h,L){return(0,o.uX)(),(0,o.CE)("main",s,[n,l,(0,o.Lk)("form",{onSubmit:a[6]||(a[6]=(0,t.D$)(((...e)=>L.handleRegister&&L.handleRegister(...e)),["prevent"])),class:"w-75"},[(0,o.Lk)("div",i,[u,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>h.usuario.nombre=e),class:"form-control",id:"nombre",placeholder:"Ingresa tu nombre",required:""},null,512),[[t.Jo,h.usuario.nombre]])]),(0,o.Lk)("div",d,[c,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>h.usuario.apellido=e),class:"form-control",id:"apellido",placeholder:"Ingresa tu apellido",required:""},null,512),[[t.Jo,h.usuario.apellido]])]),(0,o.Lk)("div",p,[m,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":a[2]||(a[2]=e=>h.usuario.email=e),class:"form-control",id:"email",placeholder:"Ingresa tu e-mail",required:""},null,512),[[t.Jo,h.usuario.email]])]),(0,o.Lk)("div",f,[b,(0,o.bo)((0,o.Lk)("input",{type:"tel","onUpdate:modelValue":a[3]||(a[3]=e=>h.usuario.telefono=e),class:"form-control",id:"telefono",placeholder:"Ingresa tu teléfono",required:""},null,512),[[t.Jo,h.usuario.telefono]])]),(0,o.Lk)("div",v,[g,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":a[4]||(a[4]=e=>h.usuario.password=e),class:"form-control",id:"password",placeholder:"Ingresa tu Contraseña",required:""},null,512),[[t.Jo,h.usuario.password]])]),(0,o.bo)((0,o.Lk)("input",{type:"hidden","onUpdate:modelValue":a[5]||(a[5]=e=>h.usuario.adminStatus=e),value:"false"},null,512),[[t.Jo,h.usuario.adminStatus]]),k],32)])}r(4114);var h=r(782),L=r(794),w={name:"RegisterView",data(){return{usuario:{id:(0,L.A)(),nombre:"Usuario",apellido:"Prueba",email:"usuario@correo.com",telefono:"912345678",password:"1234",adminStatus:!1}}},methods:{...(0,h.i0)(["registrarUsuario"]),handleRegister(){this.registrarUsuario(this.usuario),this.$router.push("/login")}}},C=r(1241);const U=(0,C.A)(w,[["render",y]]);var V=U}}]);
//# sourceMappingURL=186.5967e9f3.js.map