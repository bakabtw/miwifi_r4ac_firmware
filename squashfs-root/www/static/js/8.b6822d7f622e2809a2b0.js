webpackJsonp([8],{YAKE:function(e,t){},ossN:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("lC5x"),a=s.n(i),r=s("J0Oq"),o=s.n(r),n=s("teIl"),d=s("n8t0"),l=s("PkfQ"),c=s("NxGh"),u=s("hNqL"),p=s("HbzE"),m={name:"dhcp",data:function(){return{step:1,formstate:{},sameRouterPwd:!0,routerPwd:null,conflictIP:null,wifi:{name:"Xiaomi_1A1A",locale:"家",ssid:"",password:null,encryption:"mixed-psk",nonce:"",newPwd:"",oldPwd:"",txpwr:1},passtype:"password",Router_passtype:"password",update:!0,clientHeight:document.documentElement.clientHeight,showBtn:!0,result:{},adminPassword:""}},methods:{handleBack:function(e){2!=this.$route.query.step||1!=e?this.step=e:history.go(-1)},updateChange:function(e){this.update=e},switchPwdType:function(e){e?this.Router_passtype="password"===this.Router_passtype?"text":"password":this.passtype="password"===this.passtype?"text":"password"},goWifiSet:function(){this.step=2,this.common.setInitLog({type:0,step:"init_web_dhcp_wifiset"})},setDHCPMode:function(){var e=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.setWanNew({wanType:"dhcp",autoset:0});case 2:0==t.sent.data.code&&console.log("success");case 4:case"end":return t.stop()}},t,e)}))()},goCompletePage:function(){this.common.setInitLog({type:0,step:"ipconflict_next"}),this.$router.push({name:"wifi_complete"})},goModeChoose:function(){this.common.setInitLog({type:0,step:"ipconflict_rechoose"}),this.$router.push({path:"/error2"})},onSubmit:function(){var e=this;return o()(a.a.mark(function t(){var s,i,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.sameRouterPwd){t.next=6;break}if(e.routerPwd=e.wifi.password,!e.formstate.name.$invalid&&!e.formstate.password.$invalid){t.next=4;break}return t.abrupt("return");case 4:t.next=8;break;case 6:if(!e.formstate.$invalid){t.next=8;break}return t.abrupt("return");case 8:return e.step=3,e.wifi.ssid=e.wifi.name,e.wifi.name=e.wifi.ssid,e.wifi.nonce=e.common.Encrypt.init(),e.wifi.oldPwd=e.common.Encrypt.oldPwd("admin"),e.wifi.newPwd=e.common.Encrypt.newPwd("admin",e.routerPwd),e.GLOBAL.adminPassword=e.routerPwd,s={info:"auto_upgrade="+(e.update?1:0)},t.next=18,e.axios.upgrade(s);case 18:return t.sent,t.next=21,e.axios.setDHCP(e.wifi);case 21:0==(i=t.sent).data.code?(e.common.setInitLog({type:0,step:"init_web_dhcp_done"}),r={ssid2g_ssid:e.wifi.ssid,ssid2g_passwd:e.wifi.password,lan_ip:i.data.ip},e.GLOBAL.hardware&&"R3L"!=e.GLOBAL.hardware&&"R4C"!=e.GLOBAL.hardware&&"R1CL"!=e.GLOBAL.hardware&&"R4CM"!=e.GLOBAL.hardware&&(r.ssid5g_ssid=e.wifi.ssid+"_5G",r.ssid5g_passwd=e.wifi.password),e.step=4,e.adminPassword=e.routerPwd,e.result=r):e.$router.push({path:"/error2",query:{from:"dhcp"}});case 23:case"end":return t.stop()}},t,e)}))()}},created:function(){this.wifi.name=this.common.getCookie("ssid_name")?this.common.getCookie("ssid_name"):"",2==this.$route.query.step&&(this.step=2);var e=this;"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&window.addEventListener("hashchange",function(){var t=window.location.hash.slice(1);e.$route.path!==t&&e.$router.replace(t)},!1)},mounted:function(){var e=this;window.onresize=function(){e.clientHeight>document.documentElement.clientHeight?e.showBtn=!1:e.showBtn=!0}},watch:{step:function(e){"2"==e&&this.setDHCPMode()}},components:{Header:n.a,CheckBox:d.a,Subtitle:l.a,Loading:c.a,Toast:u.a,Wificomplete:p.default}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step||2==e.step,expression:"step == 1 || step == 2"}],staticClass:"container"},[s("Header",{attrs:{name:"上网向导",step:e.step},on:{goBack:e.handleBack}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}]},[e._m(0),e._v(" "),s("div",{staticClass:"footer width100"},[s("button",{staticClass:"button",on:{click:e.goWifiSet}},[e._v("下一步")]),e._v(" "),s("div",{staticClass:"others"},[e._v("\r\n                您也可以"),s("router-link",{attrs:{tag:"a",to:{path:"/error2"}}},[e._v(" 选择其他模式，继续配置")])],1)])]),e._v(" "),s("vue-form",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step===2"}],staticClass:"width100",attrs:{state:e.formstate},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"form form-res"},[s("Subtitle",{attrs:{name:"WiFi设置"}}),e._v(" "),s("input",{staticStyle:{position:"absolute","z-index":"-1"},attrs:{type:"text",name:"namerem",value:"",autocomplete:"off"}}),e._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item1"},[s("label",{attrs:{for:"name"}},[e._v("WiFi名称:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.wifi.name,expression:"wifi.name",modifiers:{trim:!0}}],attrs:{type:"text",name:"name",placeholder:"XIAOMI_1A1A",checklength:"",required:"",filterspecialchar:""},domProps:{value:e.wifi.name},on:{input:function(t){t.target.composing||e.$set(e.wifi,"name",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item2"},[s("label",{attrs:{for:"name"}},[e._v("WiFi密码:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.wifi.password,expression:"wifi.password",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password",type:e.passtype,wifipassword:"",minlength:"8",maxlength:"63",required:"",filterspecialchar:""},domProps:{value:e.wifi.password},on:{input:function(t){t.target.composing||e.$set(e.wifi,"password",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===e.passtype},on:{click:function(t){e.switchPwdType(0)}}})])]),e._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"name",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[e._v("*WiFi名称不能为空")]),e._v(" "),s("div",{attrs:{slot:"checklength"},slot:"checklength"},[e._v("*WiFi名称最多28字节")]),e._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[e._v("*WiFi名称不能包含特殊字符` ; | $ & { } \\")])]),e._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"password",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[e._v("*WiFi密码不能为空")]),e._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[e._v("*WiFi密码不少于8位")]),e._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[e._v("*WiFi密码不多于63位")]),e._v(" "),s("div",{attrs:{slot:"wifipassword"},slot:"wifipassword"},[e._v("*WiFi密码不能包含中文")]),e._v(" "),s("div",{attrs:{slot:"filterspecialchar"},slot:"filterspecialchar"},[e._v("*WiFi密码不能包含特殊字符` ; | $ & { } \\")])]),e._v(" "),s("Subtitle",{directives:[{name:"show",rawName:"v-show",value:!e.sameRouterPwd,expression:"!sameRouterPwd"}],attrs:{name:"管理密码设置"}}),e._v(" "),s("validate",{directives:[{name:"show",rawName:"v-show",value:!e.sameRouterPwd,expression:"!sameRouterPwd"}],attrs:{tag:"label"}},[s("div",{staticClass:"item3 router_password"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.routerPwd,expression:"routerPwd",modifiers:{trim:!0}}],attrs:{name:"routerPwd",placeholder:"请设置管理密码，至少8位",type:e.Router_passtype,minlength:"8",maxlength:"63",required:""},domProps:{value:e.routerPwd},on:{input:function(t){t.target.composing||(e.routerPwd=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===e.Router_passtype},on:{click:function(t){e.switchPwdType(1)}}})])]),e._v(" "),s("input",{staticStyle:{position:"absolute","z-index":"-1"},attrs:{type:"password",name:"pwdrem",value:" ",autocomplete:"off"}}),s("p"),e._v(" "),s("field-messages",{directives:[{name:"show",rawName:"v-show",value:!e.sameRouterPwd,expression:"!sameRouterPwd"}],staticClass:"error-tip",attrs:{name:"routerPwd",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[e._v("*路由器管理密码不能为空")]),e._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[e._v("*路由器管理密码不少于8位")]),e._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[e._v("*路由器管理密码不多于63位")])]),e._v(" "),s("ul",{staticClass:"checkboxs"},[s("li",[s("CheckBox",{attrs:{name:"passwd",value:"router"},model:{value:e.sameRouterPwd,callback:function(t){e.sameRouterPwd=t},expression:"sameRouterPwd"}}),e._v("将WiFi密码作为路由器管理密码")],1),e._v(" "),s("li",[s("CheckBox",{attrs:{name:"update",value:"update"},on:{change:e.updateChange},model:{value:e.update,callback:function(t){e.update=t},expression:"update"}}),e._v("路由空闲时为您自动升级固件版本，以便提供更好体验")],1)])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showBtn,expression:"showBtn"}],staticClass:"footer width40"},[s("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("下一步")])])])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3==e.step,expression:"step == 3"}],staticClass:"loading"},[s("h3",[e._v("上网向导")]),e._v(" "),s("Loading",{attrs:{desc:"正在配置中，请稍候......"}})],1),e._v(" "),s("Wificomplete",{directives:[{name:"show",rawName:"v-show",value:4===e.step,expression:"step===4"}],attrs:{types:2,resultData:e.result,adminPassword:e.adminPassword}}),e._v(" "),s("Toast",{ref:"tip"})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main"},[t("h4",[this._v("检测到当前模式为自动获取IP（DHCP）")]),this._v(" "),t("h4",[this._v("请点击下一步")])])}]};var v=s("C7Lr")(m,w,!1,function(e){s("YAKE")},"data-v-794836be",null);t.default=v.exports}});