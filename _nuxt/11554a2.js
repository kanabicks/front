(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{441:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{email:"",pass:""}},methods:{getToken:function(){var t=this;this.$axios({method:"post",url:"/auth",data:{email:this.email,pass:this.pass}}).then((function(e){t.$store.commit("setToken",e.data)}))}}},o=n(85),l=n(116),c=n.n(l),v=n(375),d=n(188),m=n(398),f=n(387),_=n(407),h=n(408),w=n(435),y=n(436),x=n(171),V=n(143),k=n(437),C=n(381),T=n(439),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:{"pa-3":t.$vuetify.breakpoint.smAndUp},attrs:{dark:t.darkTheme,id:"inspire"}},[n("v-container",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[n("v-card",{attrs:{elevation:"4",light:"",tag:"section"}},[n("v-card-title",[n("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[n("h3",{staticClass:"headline"},[t._v("\n                "+t._s(t.platformName)+"\n              ")]),t._v(" "),n("v-flex",[n("v-img",{staticClass:"ml-3",attrs:{alt:t.platformName,contain:"",height:"48px",position:"center right",src:"https://www.mobygames.com/images/i/12/25/1435075.png"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("p",[t._v("Sign in with your username and password:")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{outline:"",label:"Username",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{attrs:{outline:"","hide-details":"",label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{class:{"pa-3":t.$vuetify.breakpoint.smAndUp}},[n("v-btn",{attrs:{color:"info",flat:""}},[t._v("\n              Forgot password?\n            ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"info",large:t.$vuetify.breakpoint.smAndUp},on:{click:function(e){return t.getToken()}}},[n("v-icon",{attrs:{left:""}},[t._v("lock")]),t._v("\n              Login\n            ")],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[n("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[n("p",{staticClass:"caption my-3"},[n("a",{attrs:{href:"#"}},[t._v("Privacy Policy")]),t._v("\n            |\n            "),n("a",{attrs:{href:"#"}},[t._v("Terms of Service")])]),t._v(" "),n("p",{staticClass:"caption my-3"},[t._v("Powered by "),n("a",{attrs:{href:"#"}},[t._v("StaffCircle")])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VApp:v.a,VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VContainer:_.a,VDivider:h.a,VFlex:w.a,VForm:y.a,VIcon:x.a,VImg:V.a,VLayout:k.a,VSpacer:C.a,VTextField:T.a})}}]);