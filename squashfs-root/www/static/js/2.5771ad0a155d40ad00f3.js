webpackJsonp([2,12],{"8UC1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("lC5x"),a=s.n(i),r=s("J0Oq"),n=s.n(r),o=s("teIl"),d=s("NxGh"),l=s("n8t0"),p=s("PkfQ"),c=s("HbzE"),u=s("Uolk"),m={name:"wireless",data:function(){return{step:4,list:[],formstate:{},sameRouterPwd:!0,routerPwd:null,encryption:"WPA2PSK",wifi:{name:"",ssid:"",nssid:"",nssid5G:"",password:null,initialize:1,locale:"家",nonce:"",newPwd:"",oldPwd:"",encryption:"WPA2PSK",enctype:"AES",channel:null,band:"",nencryption:"mixed-psk",npassword:null},update:!0,passtype:"password",passtype_ap:"password",Router_passtype:"password",result:{},adminPassword:"",clientHeight:document.documentElement.clientHeight,showBtn:!0,currentWifiEncry:!1}},components:{Header:o.a,Loading:d.a,CheckBox:l.a,Subtitle:p.a,Wificomplete:c.default,error2:u.default},methods:{handleBack:function(t){2==t&&this.currentWifiEncry&&t--,this.step=t},updateChange:function(t){this.update=t},getWifiList:function(){var t=this;return n()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.getWifiList();case 2:0==(s=e.sent).data.code&&(t.step=1,t.list=s.data.list);case 4:case"end":return e.stop()}},e,t)}))()},goDetail:function(t){this.wifi.ssid=t.ssid,this.wifi.channel=t.channel,this.wifi.band=t.band,this.encryption=t.encryption,"NONE"==t.encryption?(this.currentWifiEncry=!0,this.step=3,this.wifi.nssid=this.wifi.ssid+"_plus"):(this.currentWifiEncry=!1,this.step=2)},switchPwdType:function(t){0==t?this.passtype="password"===this.passtype?"text":"password":1==t?this.Router_passtype="password"===this.Router_passtype?"text":"password":2==t&&(this.passtype_ap="password"===this.passtype_ap?"text":"password")},onSubmit:function(){var t=this;return n()(a.a.mark(function e(){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==t.step){e.next=7;break}if(!t.formstate.name1.$invalid&&!t.formstate.password1.$invalid){e.next=3;break}return e.abrupt("return");case 3:t.step=5,setTimeout(function(){t.step=3,t.wifi.nssid=t.wifi.ssid+"_plus"},1e3),e.next=39;break;case 7:if(3!==t.step){e.next=39;break}if(!t.sameRouterPwd){e.next=14;break}if(t.routerPwd=t.wifi.npassword,!t.formstate.name2.$invalid&&!t.formstate.password2.$invalid){e.next=12;break}return e.abrupt("return");case 12:e.next=16;break;case 14:if(!(t.formstate.name2.$invalid||t.formstate.password2.$invalid||t.formstate.routerPwd.$invalid)){e.next=16;break}return e.abrupt("return");case 16:return t.step=5,t.wifi.name=t.wifi.nssid,t.wifi.nssid5G=t.wifi.nssid+"_5G",t.wifi.nonce=t.common.Encrypt.init(),t.wifi.oldPwd=t.common.Encrypt.oldPwd("admin"),t.wifi.newPwd=t.common.Encrypt.newPwd("admin",t.routerPwd),s={info:"auto_upgrade="+(t.update?1:0)},e.next=25,t.axios.upgrade(s);case 25:return e.sent,e.next=28,t.common.setInitLog({type:0,step:"wireless_relay_done"});case 28:return t.step=6,t.GLOBAL.adminPassword=t.routerPwd,t.adminPassword=t.routerPwd,t.result={ssid2g_ssid:t.wifi.nssid,ssid2g_passwd:t.wifi.npassword},(i=t.common.getCookie("hardware"))&&"R3L"!=i&&"R4C"!=i&&"R1CL"!=i&&"R4CM"!=i&&(t.result.ssid5g_ssid=t.wifi.nssid+"_5G",t.result.ssid5g_passwd=t.wifi.npassword),t.wifi.password||(t.wifi.encryption="NONE"),e.next=37,t.axios.postWireless(t.wifi);case 37:e.sent.data.code;case 39:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getWifiList()},mounted:function(){var t=this;window.onresize=function(){t.clientHeight>document.documentElement.clientHeight?t.showBtn=!1:t.showBtn=!0}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wireless"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step||2===t.step||3===t.step,expression:"step ===1|| step ===2 || step ===3"}],staticClass:"container"},[1===t.step?s("div",{staticClass:"step2"},[s("Header",{attrs:{name:"可中继WiFi列表",step:t.step},on:{goBack:t.handleBack}}),t._v(" "),s("div",{staticClass:"wifilist width100"},[s("ul",t._l(t.list,function(e,i){return s("li",{key:i,on:{click:function(s){t.goDetail(e)}}},[t._v(t._s(e.ssid)),s("span",{staticClass:"iconfont icon-fanhui"})])}))])],1):t._e(),t._v(" "),2===t.step||3===t.step?s("div",{staticClass:"step3 container"},[s("Header",{attrs:{name:"无线中继模式",step:t.step},on:{goBack:t.handleBack}}),t._v(" "),s("vue-form",{staticClass:"width100",attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step===2"}],staticClass:"form"},[s("Subtitle",{attrs:{name:"请输入需中继WiFi的密码"}}),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item1"},[s("label",{attrs:{for:"name1"}},[t._v("WiFi名称:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.ssid,expression:"wifi.ssid",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"XIAOMI_1A1A",name:"name1",readonly:"",autocomplete:"off",required:"",filterspecialchar:""},domProps:{value:t.wifi.ssid},on:{input:function(e){e.target.composing||t.$set(t.wifi,"ssid",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item2"},[s("label",{attrs:{for:"password1"}},[t._v("WiFi密码:")]),t._v(" "),"NONE"!=t.encryption?s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.password,expression:"wifi.password",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password1",type:t.passtype_ap,wifipassword:"",minlength:"8",maxlength:"63",required:"",filterspecialchar:""},domProps:{value:t.wifi.password},on:{input:function(e){e.target.composing||t.$set(t.wifi,"password",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}):t._e(),t._v(" "),"NONE"==t.encryption?s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.password,expression:"wifi.password",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password1",type:t.passtype_ap},domProps:{value:t.wifi.password},on:{input:function(e){e.target.composing||t.$set(t.wifi,"password",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}):t._e(),t._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===t.passtype_ap},on:{click:function(e){t.switchPwdType(2)}}})])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"name1",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi名称不能为空")]),t._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[t._v("*WiFi名称不能包含特殊字符` ; | $ & { } \\")])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"password1",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi密码不能为空")]),t._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("*WiFi密码不少于8位")]),t._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("*WiFi密码不多于63位")]),t._v(" "),s("div",{attrs:{slot:"wifipassword"},slot:"wifipassword"},[t._v("*WiFi密码不能包含中文")]),t._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[t._v("*WiFi密码不能包含特殊字符` ; | $ & { } \\")])]),t._v(" "),2===t.step?s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"footer width100"},[s("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("下一步")])]):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}],staticClass:"form form-res"},[s("Subtitle",{attrs:{name:"WiFi设置"}}),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item1"},[s("label",{attrs:{for:"name4"}},[t._v("WiFi名称:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.nssid,expression:"wifi.nssid",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"XIAOMI_1A1A",name:"name2",checklength:"",autocomplete:"off",required:"",filterspecialchar:""},domProps:{value:t.wifi.nssid},on:{input:function(e){e.target.composing||t.$set(t.wifi,"nssid",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item2"},[s("label",{attrs:{for:"passwd4"}},[t._v("WiFi密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.npassword,expression:"wifi.npassword",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password2",type:t.passtype,wifipassword:"",minlength:"8",maxlength:"63",required:"",filterspecialchar:""},domProps:{value:t.wifi.npassword},on:{input:function(e){e.target.composing||t.$set(t.wifi,"npassword",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===t.passtype},on:{click:function(e){t.switchPwdType(0)}}})])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"name2",show:"$touched"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi名称不能为空")]),t._v(" "),s("div",{attrs:{slot:"checklength"},slot:"checklength"},[t._v("*WiFi名称最多28字节")]),t._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[t._v("*WiFi名称不能包含特殊字符` ; | $ & { } \\")])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"password2",show:"$touched"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi密码不能为空")]),t._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("*WiFi密码不少于8位")]),t._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("*WiFi密码不多于63位")]),t._v(" "),s("div",{attrs:{slot:"wifipassword"},slot:"wifipassword"},[t._v("*WiFi密码不能包含中文")]),t._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[t._v("*WiFi密码不能包含特殊字符` ; | $ & { } \\")])]),t._v(" "),s("Subtitle",{directives:[{name:"show",rawName:"v-show",value:!t.sameRouterPwd,expression:"!sameRouterPwd"}],attrs:{name:"管理密码设置"}}),t._v(" "),s("validate",{directives:[{name:"show",rawName:"v-show",value:!t.sameRouterPwd,expression:"!sameRouterPwd"}],attrs:{tag:"label"}},[s("div",{staticClass:"item3 router_password"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.routerPwd,expression:"routerPwd",modifiers:{trim:!0}}],attrs:{name:"routerPwd",placeholder:"请设置管理密码，至少8位",type:t.Router_passtype,wifipassword:"",minlength:"8",maxlength:"63",required:""},domProps:{value:t.routerPwd},on:{input:function(e){e.target.composing||(t.routerPwd=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===t.Router_passtype},on:{click:function(e){t.switchPwdType(1)}}})])]),t._v(" "),s("field-messages",{directives:[{name:"show",rawName:"v-show",value:!t.sameRouterPwd,expression:"!sameRouterPwd"}],staticClass:"error-tip",attrs:{name:"routerPwd",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*路由器管理密码不能为空")]),t._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("*路由器管理密码不少于8位")]),t._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("*路由器管理密码不多于63位")]),t._v(" "),s("div",{attrs:{slot:"wifipassword"},slot:"wifipassword"},[t._v("*路由器管理密码不能包含中文")])]),t._v(" "),s("div",{staticClass:"checkboxs"},[s("ul",[s("li",[s("CheckBox",{attrs:{name:"passwd",value:"1"},model:{value:t.sameRouterPwd,callback:function(e){t.sameRouterPwd=e},expression:"sameRouterPwd"}}),t._v("将WiFi密码作为路由器管理密码")],1),t._v(" "),s("li",[s("CheckBox",{attrs:{name:"update",value:"2"},on:{change:t.updateChange},model:{value:t.update,callback:function(e){t.update=e},expression:"update"}}),t._v("路由空闲时为您自动升级固件版本，以便提供更好体验")],1)])]),t._v(" "),3===t.step?s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"footer width100"},[s("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("下一步")])]):t._e()],1)])],1):t._e()]),t._v(" "),4===t.step?s("div",{staticClass:"step1 loading"},[s("h3",[t._v("无线中继模式")]),t._v(" "),s("Loading",{attrs:{desc:"正在扫描附近的WiFi列表，请耐心等待......"}})],1):t._e(),t._v(" "),5===t.step?s("div",{staticClass:"loading"},[s("h3",[t._v("无线中继模式")]),t._v(" "),s("Loading",{attrs:{desc:"正在配置中，请稍候......"}})],1):t._e(),t._v(" "),6===t.step?s("Wificomplete",{attrs:{types:2,resultData:t.result,adminPassword:t.adminPassword,wireless:!0}}):t._e()],1)},staticRenderFns:[]};var w=s("C7Lr")(m,v,!1,function(t){s("vs0Q")},"data-v-26e6219b",null);e.default=w.exports},NI69:function(t,e){},Uolk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("teIl"),a=s("PkfQ"),r={name:"error2",data:function(){return{typeList:['宽带账号上网<span style="opacity: .4"> PPPOE</span>','自动获取IP<span style="opacity: .4"> DHCP</span>',"静态IP","WiFi中继","有线中继"],mapTypeLink:[{path:"/guide",query:{type:1}},{path:"/dhcp",query:{step:2}},"/static","/wireless","/wired"],errortip:!1,error_desc:""}},created:function(){var t=this;if(this.$route.query.from){this.errortip=!0,"wireless"===this.$route.query.from?this.error_desc="需中继WiFi的密码错误，无线中继模式配置失败，请重新选择模式":"dhcp"===this.$route.query.from?this.error_desc="dhcp配置失败，请重新选择模式":"wired"===this.$route.query.from?this.error_desc="有线中继配置失败，请重新选择模式":"static"===this.$route.query.from&&(this.error_desc="静态IP配置失败，请重新选择模式");var e=this.$router.history.current.path;this.$router.push({path:e}),setTimeout(function(){t.errortip=!1},3e3)}},components:{Header:i.a,Subtitle:a.a}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Header",{attrs:{name:"选择配置类型"}}),t._v(" "),s("div",{staticClass:"main width100"},[s("Subtitle",{attrs:{name:"请选择上网连接类型"}}),t._v(" "),s("ul",t._l(t.typeList,function(e,i){return s("router-link",{key:i,staticClass:"iconfont",attrs:{tag:"li",to:t.mapTypeLink[i]},domProps:{innerHTML:t._s(e)}})}))],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.errortip,expression:"errortip"}],staticClass:"wireless_failure"},[t._v("\n      "+t._s(t.error_desc)+"\n\n  ")])],1)},staticRenderFns:[]};var o=s("C7Lr")(r,n,!1,function(t){s("NI69")},"data-v-5bc7d214",null);e.default=o.exports},vs0Q:function(t,e){}});