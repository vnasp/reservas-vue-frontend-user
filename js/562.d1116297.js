"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[562],{794:function(e,r,o){o.d(r,{A:function(){return c}});o(6573),o(8100),o(7936),o(7467),o(4732),o(9577);var a,t=new Uint8Array(16);function l(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(t)}o(4114);var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function n(e){return"string"===typeof e&&s.test(e)}for(var u=n,i=[],d=0;d<256;++d)i.push((d+256).toString(16).substr(1));function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(i[e[r+0]]+i[e[r+1]]+i[e[r+2]]+i[e[r+3]]+"-"+i[e[r+4]]+i[e[r+5]]+"-"+i[e[r+6]]+i[e[r+7]]+"-"+i[e[r+8]]+i[e[r+9]]+"-"+i[e[r+10]]+i[e[r+11]]+i[e[r+12]]+i[e[r+13]]+i[e[r+14]]+i[e[r+15]]).toLowerCase();if(!u(o))throw TypeError("Stringified UUID is invalid");return o}var f=p;function m(e,r,o){e=e||{};var a=e.random||(e.rng||l)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){o=o||0;for(var t=0;t<16;++t)r[o+t]=a[t];return r}return f(a)}var c=m},3562:function(e,r,o){o.r(r),o.d(r,{default:function(){return R}});var a=o(6768),t=o(5130);const l=e=>((0,a.Qi)("data-v-76e75316"),e=e(),(0,a.jt)(),e),s=l((()=>(0,a.Lk)("h4",{class:"my-5 text-center"},[(0,a.Lk)("i",{class:"bi bi-bookmark-star-fill text-dark fs-2"}),(0,a.Lk)("br"),(0,a.eW)("Crea tu cuenta")],-1))),n={class:"d-flex justify-content-between"},u={class:"mb-3"},i=l((()=>(0,a.Lk)("label",{for:"nombre",class:"form-label"},"Nombre",-1))),d={class:"mb-3"},p=l((()=>(0,a.Lk)("label",{for:"apellido",class:"form-label"},"Apellido",-1))),f={class:"d-flex justify-content-between"},m={class:"mb-3"},c=l((()=>(0,a.Lk)("label",{for:"email",class:"form-label"},"Correo",-1))),b={class:"mb-3"},k=l((()=>(0,a.Lk)("label",{for:"telefono",class:"form-label"},"Teléfono",-1))),v={class:"mb-3"},y=l((()=>(0,a.Lk)("label",{for:"password",class:"form-label"},"Contraseña",-1))),g=l((()=>(0,a.Lk)("div",{class:"text-center"},[(0,a.Lk)("button",{type:"submit",class:"btn btn-primary"},"Registrarse")],-1)));function L(e,r,o,l,L,h){return(0,a.uX)(),(0,a.CE)(a.FK,null,[s,(0,a.Lk)("form",{onSubmit:r[6]||(r[6]=(0,t.D$)(((...e)=>h.handleRegister&&h.handleRegister(...e)),["prevent"]))},[(0,a.Lk)("div",n,[(0,a.Lk)("div",u,[i,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>L.usuario.nombre=e),class:"form-control",id:"nombre",placeholder:"Ingresa tu nombre",required:""},null,512),[[t.Jo,L.usuario.nombre]])]),(0,a.Lk)("div",d,[p,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>L.usuario.apellido=e),class:"form-control",id:"apellido",placeholder:"Ingresa tu apellido",required:""},null,512),[[t.Jo,L.usuario.apellido]])])]),(0,a.Lk)("div",f,[(0,a.Lk)("div",m,[c,(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":r[2]||(r[2]=e=>L.usuario.email=e),class:"form-control",id:"email",placeholder:"Ingresa tu e-mail",required:""},null,512),[[t.Jo,L.usuario.email]])]),(0,a.Lk)("div",b,[k,(0,a.bo)((0,a.Lk)("input",{type:"tel","onUpdate:modelValue":r[3]||(r[3]=e=>L.usuario.telefono=e),class:"form-control",id:"telefono",placeholder:"Ingresa tu teléfono",required:""},null,512),[[t.Jo,L.usuario.telefono]])])]),(0,a.Lk)("div",v,[y,(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":r[4]||(r[4]=e=>L.usuario.password=e),class:"form-control",id:"password",placeholder:"Ingresa tu Contraseña",required:""},null,512),[[t.Jo,L.usuario.password]])]),(0,a.bo)((0,a.Lk)("input",{type:"hidden","onUpdate:modelValue":r[5]||(r[5]=e=>L.usuario.adminStatus=e),value:"false"},null,512),[[t.Jo,L.usuario.adminStatus]]),g],32)],64)}o(4114);var h=o(782),w=o(794),C={name:"RegisterView",data(){return{usuario:{id:(0,w.A)(),nombre:"",apellido:"",email:"",telefono:"",password:"",adminStatus:!1}}},methods:{...(0,h.i0)(["registrarUsuario"]),handleRegister(){this.registrarUsuario(this.usuario),this.$router.push("/login")}}},V=o(1241);const U=(0,V.A)(C,[["render",L],["__scopeId","data-v-76e75316"]]);var R=U}}]);
//# sourceMappingURL=562.d1116297.js.map