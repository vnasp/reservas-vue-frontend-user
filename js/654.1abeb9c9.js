"use strict";(self["webpackChunkreservas_restaurant_valentina_munoz"]=self["webpackChunkreservas_restaurant_valentina_munoz"]||[]).push([[654],{654:function(e,s,r){r.r(s),r.d(s,{default:function(){return z}});var t=r(6768);const c={class:"container my-5"},a=(0,t.Lk)("p",{class:"text-primary text-center"},"Nuestros Servicios",-1),i=(0,t.Lk)("h3",{class:"text-center mb-5 text-uppercase fw-bolder fs-1"},"Organizamos todo por ti",-1),o={class:"row row-cols-1 row-cols-md-3 row-cols-lg-4"};function n(e,s,r,n,l,d){const u=(0,t.g2)("CardProduct");return(0,t.uX)(),(0,t.CE)("main",c,[a,i,(0,t.Lk)("div",o,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.servicios,(e=>((0,t.uX)(),(0,t.CE)("div",{class:"col mb-4",key:e.id},[(0,t.bF)(u,{service:e},null,8,["service"])])))),128))])])}var l=r(782),d=r(4232);const u=e=>((0,t.Qi)("data-v-08118abd"),e=e(),(0,t.jt)(),e),v={class:"card h-100 rounded-3 shadow-sm"},p={class:"position-relative"},m=["src","alt"],b={class:"card-text bg-primary position-absolute top-0 end-0 px-2 py-1",style:{"font-size":"11px","border-top-right-radius":"5px"}},f={class:"card-header"},k={class:"card-title text-center text-uppercase"},x={class:"card-body fs-6"},y={class:"card-footer d-flex flex-row justify-content-between align-items-center py-3"},L={class:"card-text text-primary fw-bold fs-4"},h=u((()=>(0,t.Lk)("i",{class:"bi bi-tag"},null,-1)));function w(e,s,r,c,a,i){const o=(0,t.g2)("HomeButton");return(0,t.uX)(),(0,t.CE)("article",v,[(0,t.Lk)("div",p,[(0,t.Lk)("img",{src:r.service.img,class:"card-img-top",alt:r.service.nombre},null,8,m),(0,t.Lk)("p",b,(0,d.v_)(r.service.tipo),1)]),(0,t.Lk)("div",f,[(0,t.Lk)("h5",k,(0,d.v_)(r.service.nombre),1)]),(0,t.Lk)("div",x,[(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.service.caracteristicas,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e,class:"text-capitalize"},(0,d.v_)(e),1)))),128))])]),(0,t.Lk)("div",y,[(0,t.Lk)("div",L,[h,(0,t.eW)(" "+(0,d.v_)(i.formatPrice(r.service.precio)),1)]),(0,t.bF)(o,{to:"/reservas",text:"Reservar",class:""})])])}var C=r(2047),g={name:"CardProduct",components:{HomeButton:C.A},props:{service:{type:Object,required:!0}},data(){return{}},methods:{formatPrice(e){return new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(e)}}},_=r(1241);const E=(0,_.A)(g,[["render",w],["__scopeId","data-v-08118abd"]]);var P=E,S={name:"ServiciosView",components:{CardProduct:P},computed:{...(0,l.aH)(["servicios"])},methods:{...(0,l.i0)(["setServicios"])},async mounted(){await this.setServicios(),this.$nextTick((()=>{console.log("Servicios después de setServicios:",this.servicios)}))}};const X=(0,_.A)(S,[["render",n]]);var z=X}}]);
//# sourceMappingURL=654.1abeb9c9.js.map