"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[177],{794:function(e,r,a){a.d(r,{A:function(){return f}});a(6573),a(8100),a(7936),a(7467),a(4732),a(9577);var o,t=new Uint8Array(16);function s(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(t)}a(4114);var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function n(e){return"string"===typeof e&&l.test(e)}for(var u=n,i=[],d=0;d<256;++d)i.push((d+256).toString(16).substr(1));function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(i[e[r+0]]+i[e[r+1]]+i[e[r+2]]+i[e[r+3]]+"-"+i[e[r+4]]+i[e[r+5]]+"-"+i[e[r+6]]+i[e[r+7]]+"-"+i[e[r+8]]+i[e[r+9]]+"-"+i[e[r+10]]+i[e[r+11]]+i[e[r+12]]+i[e[r+13]]+i[e[r+14]]+i[e[r+15]]).toLowerCase();if(!u(a))throw TypeError("Stringified UUID is invalid");return a}var c=p;function m(e,r,a){e=e||{};var o=e.random||(e.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r){a=a||0;for(var t=0;t<16;++t)r[a+t]=o[t];return r}return c(o)}var f=m},1177:function(e,r,a){a.r(r),a.d(r,{default:function(){return R}});var o=a(6768),t=a(5130);const s=e=>((0,o.Qi)("data-v-d83b3388"),e=e(),(0,o.jt)(),e),l=s((()=>(0,o.Lk)("h4",{class:"my-5 text-center"},[(0,o.Lk)("i",{class:"bi bi-bookmark-star-fill text-dark fs-2"}),(0,o.Lk)("br"),(0,o.eW)("Crea tu cuenta ")],-1))),n={class:"d-flex justify-content-between gap-2"},u={class:"mb-3"},i=s((()=>(0,o.Lk)("label",{for:"nombre",class:"form-label"},"Nombre",-1))),d={class:"mb-3"},p=s((()=>(0,o.Lk)("label",{for:"apellido",class:"form-label"},"Apellido",-1))),c={class:"d-flex justify-content-between gap-2"},m={class:"mb-3"},f=s((()=>(0,o.Lk)("label",{for:"email",class:"form-label"},"Correo",-1))),b={class:"mb-3"},k=s((()=>(0,o.Lk)("label",{for:"telefono",class:"form-label"},"Teléfono",-1))),v={class:"mb-3"},y=s((()=>(0,o.Lk)("label",{for:"password",class:"form-label"},"Contraseña",-1))),g=s((()=>(0,o.Lk)("div",{class:"text-center"},[(0,o.Lk)("button",{type:"submit",class:"btn btn-primary"},"Registrarse")],-1)));function h(e,r,a,s,h,L){return(0,o.uX)(),(0,o.CE)(o.FK,null,[l,(0,o.Lk)("form",{onSubmit:r[6]||(r[6]=(0,t.D$)(((...e)=>L.handleRegister&&L.handleRegister(...e)),["prevent"]))},[(0,o.Lk)("div",n,[(0,o.Lk)("div",u,[i,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>h.usuario.nombre=e),class:"form-control",id:"nombre",placeholder:"Ingresa tu nombre",required:""},null,512),[[t.Jo,h.usuario.nombre]])]),(0,o.Lk)("div",d,[p,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>h.usuario.apellido=e),class:"form-control",id:"apellido",placeholder:"Ingresa tu apellido",required:""},null,512),[[t.Jo,h.usuario.apellido]])])]),(0,o.Lk)("div",c,[(0,o.Lk)("div",m,[f,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":r[2]||(r[2]=e=>h.usuario.email=e),class:"form-control",id:"email",placeholder:"Ingresa tu e-mail",required:""},null,512),[[t.Jo,h.usuario.email]])]),(0,o.Lk)("div",b,[k,(0,o.bo)((0,o.Lk)("input",{type:"tel","onUpdate:modelValue":r[3]||(r[3]=e=>h.usuario.telefono=e),class:"form-control",id:"telefono",placeholder:"Ingresa tu teléfono",required:""},null,512),[[t.Jo,h.usuario.telefono]])])]),(0,o.Lk)("div",v,[y,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":r[4]||(r[4]=e=>h.usuario.password=e),class:"form-control",id:"password",placeholder:"Ingresa tu Contraseña",required:""},null,512),[[t.Jo,h.usuario.password]])]),(0,o.bo)((0,o.Lk)("input",{type:"hidden","onUpdate:modelValue":r[5]||(r[5]=e=>h.usuario.adminStatus=e),value:"false"},null,512),[[t.Jo,h.usuario.adminStatus]]),g],32)],64)}a(4114);var L=a(782),w=a(794),C={name:"RegisterView",data(){return{usuario:{id:(0,w.A)(),nombre:"",apellido:"",email:"",telefono:"",password:"",adminStatus:!1}}},methods:{...(0,L.i0)(["registrarUsuario"]),async handleRegister(){try{await this.registrarUsuario(this.usuario),this.$router.push("/mis-reservas")}catch(e){console.error("Error al registrar usuario:",e)}}}},V=a(1241);const U=(0,V.A)(C,[["render",h],["__scopeId","data-v-d83b3388"]]);var R=U}}]);
//# sourceMappingURL=177.5dfb81c7.js.map