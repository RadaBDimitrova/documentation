(function(e){function t(t){for(var a,i,c=t[0],l=t[1],o=t[2],d=0,p=[];d<c.length;d++)i=c[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,c=1;c<s.length;c++){var l=s[c];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/installer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"2ba8":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=s("bb71"),n=(s("da64"),s("3ccf"));a["a"].use(r["a"],{iconfont:"md",directives:{Ripple:n["a"]}});var i=s("998c"),c=s.n(i);s("2c43");a["a"].use(c.a);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-toolbar",{attrs:{app:"",dark:""}},[s("v-toolbar-title",{staticClass:"headline text-uppercase",attrs:{dark:""}},[s("span",{staticClass:"font-weight-light"},[e._v("GARDENER INSTALLER")])]),s("v-spacer")],1),s("v-content",[s("router-view")],1)],1)},o=[],u={name:"App",components:{},data:function(){return{}}},d=u,p=s("2877"),f=s("6544"),v=s.n(f),h=s("7496"),b=s("549c"),m=s("9910"),g=s("71d9"),y=s("2a7f"),x=Object(p["a"])(d,l,o,!1,null,null,null),w=x.exports;v()(x,{VApp:h["a"],VContent:b["a"],VSpacer:m["a"],VToolbar:g["a"],VToolbarTitle:y["a"]});var k=s("8c4f"),C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-form",[s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:""}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",{staticClass:"title"},[e._v("Infrastructure")]),s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"py-0",attrs:{xs6:""}},[s("v-select",{attrs:{items:e.cloudProviderItems,label:"Provider",dense:""},model:{value:e.clusterIaas,callback:function(t){e.clusterIaas=t},expression:"clusterIaas"}})],1),s("v-flex",{staticClass:"py-0",attrs:{xs6:""}},[s("v-select",{attrs:{items:e.regionItems(e.clusterIaas),label:"Region",flat:""},model:{value:e.clusterRegion,callback:function(t){e.clusterRegion=t},expression:"clusterRegion"}})],1),s("v-flex",{staticClass:"py-0",attrs:{xs12:""}},["aws"===e.clusterIaas||"gcp"===e.clusterIaas?s("v-select",{attrs:{items:e.zoneItems(e.clusterIaas,e.clusterRegion),label:"Zones","small-chips":"",chips:"",multiple:"",flat:""},model:{value:e.zones,callback:function(t){e.zones=t},expression:"zones"}}):e._e()],1)],1)],1),"aws"===e.clusterIaas?s("v-card-text",[s("v-subheader",{staticClass:"px-0 black--text"},[e._v("Credentials")]),s("v-text-field",{attrs:{rules:[e.rules.required,e.rules.min(16)],counter:"128",hint:"e.g. AKIAIOSFODNN7EXAMPLE",label:"Access Key ID","browser-autocomplete":"off"},model:{value:e.accessKeyID,callback:function(t){e.accessKeyID=t},expression:"accessKeyID"}}),s("v-text-field",{attrs:{"append-icon":e.secretAccessKeyVisible?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min(40)],type:e.secretAccessKeyVisible?"text":"password",label:"Secret Access Key",hint:"e.g. wJalrXUtnFEMIK7MDENG/bPxRfiCYzEXAMPLEKEY",counter:"40"},on:{"click:append":function(t){e.secretAccessKeyVisible=!e.secretAccessKeyVisible}},model:{value:e.secretAccessKey,callback:function(t){e.secretAccessKey=t},expression:"secretAccessKey"}})],1):"azure"===e.clusterIaas?s("v-card-text",[s("v-subheader",{staticClass:"px-0 black--text"},[e._v("Credentials")]),s("v-text-field",{attrs:{rules:[e.rules.required],counter:"",label:"Client ID","browser-autocomplete":"off"},model:{value:e.clientID,callback:function(t){e.clientID=t},expression:"clientID"}}),s("v-text-field",{attrs:{"append-icon":e.clientSecretVisible?"visibility":"visibility_off",rules:[e.rules.required],type:e.clientSecretVisible?"text":"password",label:"Client Secret",counter:""},on:{"click:append":function(t){e.clientSecretVisible=!e.clientSecretVisible}},model:{value:e.clientSecret,callback:function(t){e.clientSecret=t},expression:"clientSecret"}}),s("v-text-field",{attrs:{rules:[e.rules.required],counter:"",label:"Tenant ID","browser-autocomplete":"off"},model:{value:e.tenantID,callback:function(t){e.tenantID=t},expression:"tenantID"}}),s("v-text-field",{attrs:{rules:[e.rules.required],counter:"",label:"Subscription ID","browser-autocomplete":"off"},model:{value:e.subscriptionID,callback:function(t){e.subscriptionID=t},expression:"subscriptionID"}})],1):"gcp"===e.clusterIaas?s("v-card-text",[s("v-subheader",{staticClass:"px-0 black--text"},[e._v("Credentials")]),s("v-text-field",{attrs:{readonly:"",placeholder:"No file choosen",label:"Service Account Key",hint:"Choose service account key file in JSON format","prepend-icon":"attach_file"},on:{click:e.pickServiceaccount,"click:prepend":e.pickServiceaccount},model:{value:e.serviceaccountFilename,callback:function(t){e.serviceaccountFilename=t},expression:"serviceaccountFilename"}}),s("input",{ref:"serviceaccountInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.onServiceaccount}})],1):e._e()],1)],1),s("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:""}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",{staticClass:"title"},[e._v("Cluster")]),s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"py-0",attrs:{xs12:""}},[s("v-text-field",{attrs:{readonly:"",placeholder:"No file choosen",label:"Kubeconfig","prepend-icon":"attach_file"},on:{click:e.pickKubeconfig,"click:prepend":e.pickKubeconfig},model:{value:e.kubeconfigFilename,callback:function(t){e.kubeconfigFilename=t},expression:"kubeconfigFilename"}}),s("input",{ref:"kubeconfigInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.onKubeconfig}})],1),s("v-flex",{staticClass:"py-0",attrs:{xs12:""}},[s("v-text-field",{attrs:{rules:[e.rules.required],hint:"e.g. mycluster.example.org","persistent-hint":"",label:"Domain","browser-autocomplete":"off"},model:{value:e.clusterDomain,callback:function(t){e.clusterDomain=t},expression:"clusterDomain"}})],1),s("v-flex",{staticClass:"pb-0",attrs:{xs12:""}},[s("v-subheader",{staticClass:"px-0 black--text"},[e._v("Administrator")])],1),s("v-flex",{staticClass:"py-0",attrs:{xs6:""}},[s("v-text-field",{attrs:{rules:[e.rules.required,e.rules.min(3)],hint:"e.g. john.doe@example.org",label:"Email","browser-autocomplete":"off"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("v-flex",{staticClass:"py-0",attrs:{xs6:""}},[s("v-text-field",{attrs:{"append-icon":e.passwordVisible?"visibility":"visibility_off",rules:[e.rules.required],type:e.secretAccessKeyVisible?"text":"password",label:"Password","browser-autocomplete":"off"},on:{"click:append":function(t){e.secretAccessKeyVisible=!e.secretAccessKeyVisible}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-flex",{staticClass:"pb-0",attrs:{xs12:""}},[s("v-subheader",{staticClass:"px-0 black--text"},[e._v("Networks")])],1),s("v-flex",{staticClass:"py-0",attrs:{xs4:""}},[s("v-text-field",{attrs:{rules:[e.rules.required],hint:"e.g. 10.132.0.0/16","persistent-hint":"",label:"Nodes CIDR","browser-autocomplete":"off"},model:{value:e.networkNodeCidr,callback:function(t){e.networkNodeCidr=t},expression:"networkNodeCidr"}})],1),s("v-flex",{staticClass:"pt-0",attrs:{xs4:""}},[s("v-text-field",{attrs:{rules:[e.rules.required],hint:"e.g. 10.44.0.0/15","persistent-hint":"",label:"Pods CIDR","browser-autocomplete":"off"},model:{value:e.networkPodCidr,callback:function(t){e.networkPodCidr=t},expression:"networkPodCidr"}})],1),s("v-flex",{staticClass:"pt-0",attrs:{xs4:""}},[s("v-text-field",{attrs:{rules:[e.rules.required],hint:"e.g. 10.47.240.0/20","persistent-hint":"",label:"Services CIDR","browser-autocomplete":"off"},model:{value:e.networkServiceCidr,callback:function(t){e.networkServiceCidr=t},expression:"networkServiceCidr"}})],1)],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",grow:"",xs12:""}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",{staticClass:"headline"},[e._v("Getting started")]),s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("p",[e._v("This is a POC trying to install the Gardener through a pod.")]),s("h3",[e._v("Deploy")]),s("p",[e._v("\n                    Enter your data in the form above, download the\n                    "),s("v-btn",{attrs:{small:"",depressed:"",color:"green lighten-5 green--text"},on:{click:e.onDeployDownload}},[s("tt",{staticClass:"text-lowercase"},[e._v("gardener-deploy.yaml")])],1),s("span",{staticClass:"ml-2"},[e._v("file")]),e._v(" and apply it.\n                  ")],1),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl apply -f gardener-deploy.yaml")])])]),s("br"),s("p",[e._v("To watch the installation progress run the following command.")]),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl logs -f garden-setup-installer")])])]),s("br"),s("p",[e._v("\n                    The kubeconfig for the created\n                    Garden can be found in the\n                    "),s("tt",[e._v("garden")]),e._v(" namespace of the hosting Kubernetes cluster in the secret\n                    "),s("tt",[e._v("garden-kubeconfig-for-admin")]),e._v(".\n                  ")],1),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl get -n garden secret garden-kubeconfig-for-admin -o jsonpath='{.data.kubeconfig}' | base64 -d")])])]),s("br"),e.clusterDomain?s("p",[e._v("\n                    The Garden Dashboard can be reached via the url\n                    "),s("a",{attrs:{href:e.dashboardUrl}},[e._v(e._s(e.dashboardUrl))]),e._v(".\n                  ")]):e._e(),s("br"),s("h3",[e._v("Delete")]),s("p",[e._v("\n                    To delete the Gardener from your cluster download the\n                    "),s("v-btn",{attrs:{small:"",depressed:"",color:"red lighten-5 red--text"},on:{click:e.onUndeployDownload}},[s("tt",{staticClass:"text-lowercase"},[e._v("gardener-undeploy.yaml")])],1),s("span",{staticClass:"ml-2"},[e._v("file")]),e._v(" and apply it.\n                  ")],1),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl apply -f gardener-undeploy.yaml")])])]),s("br"),s("p",[e._v("To watch the uninstallation progress run the following command.")]),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl logs -f garden-setup-uninstaller")])])]),s("br"),s("p",[e._v("Delete all resources created during the installation process.")]),s("div",{staticStyle:{"max-width":"800px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"reset bash"},[e._v("kubectl delete -f gardener-deploy.yaml")])])])])],1)],1)],1)],1)],1)],1)],1)},I=[],D=(s("7f7f"),s("a481"),s("cebc")),_=s("651e"),S=s.n(_),P=s("aeb1"),V=s.n(P),K=s("2f62"),A=s("f499"),j=s.n(A);function T(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=e.$refs["input-slot"];function r(e){e.stopPropagation(),e.preventDefault();var a=e.dataTransfer.files;if(a.length){var r=a[0];if(t.test(r.type)){var n=new FileReader,i=function(e){try{var t=JSON.parse(e.target.result);s(j()(t,null,"  "))}catch(a){}};n.onloadend=i,n.readAsText(r)}}}function n(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}a.addEventListener("dragover",n,!1),a.addEventListener("drop",r,!1)}var N={name:"Home",data:function(){return{name:"myGardener",accessKeyID:null,secretAccessKey:null,secretAccessKeyVisible:!1,serviceaccount:null,clientID:null,clientSecret:null,clientSecretVisible:null,subscriptionID:null,tenantID:null,kubeconfig:null,clusterIaas:"gcp",clusterRegion:null,clusterDomain:null,zones:[],networkNodeCidr:null,networkPodCidr:null,networkServiceCidr:null,username:null,password:null,passwordVisible:!1,files:[],kubeconfigFilename:null,serviceaccountFilename:null,rules:{required:function(e){return!!e||"Required."},min:function(e){return function(t){return t&&t.length>=e||"Min ".concat(e," characters")}}}}},computed:Object(D["a"])({},Object(K["b"])(["cloudProviderItems","regionItems","zoneItems","backupType","dnsType"]),{dashboardUrl:function(){return"https://gardener.ing.".concat(this.clusterDomain)},landscapeName:function(){return this.clusterDomain?this.clusterDomain.replace(/\./g,"-"):"my-garden-cloud"},landscape:function(){return{name:this.landscapeName,cluster:{kubeconfig:"./kubeconfig",domain:this.clusterDomain,iaas:this.clusterIaas,region:this.clusterRegion},networks:{pods:this.networkPodCidr,nodes:this.networkNodeCidr,services:this.networkServiceCidr},iaas:{region:this.clusterRegion,zones:this.zones,credentials:this.credentials},etcd:{backup:{type:this.backupType(this.clusterIaas),region:this.clusterRegion,credentials:this.credentials}},dns:{type:this.dnsType(this.clusterIaas),credentials:this.credentials},identity:{users:[{email:this.username,username:this.username,password:this.password}]}}},acre:function(){return S.a.dump({credentials:this.credentials,landscape:this.landscape})},credentials:function(){switch(this.clusterIaas){case"aws":return{region:this.clusterRegion,accessKeyID:this.accessKeyID,secretAccessKey:this.secretAccessKey};case"azure":return{clientID:this.clientID,clientSecret:this.clientSecret,subscriptionID:this.subscriptionID,tenantID:this.tenantID};case"gcp":return{"serviceaccount.json":this.serviceaccount};default:return null}},deployPod:function(){return S.a.dump(this.getPod("deploy","-An"))},deletePod:function(){return S.a.dump(this.getPod("delete","-A"))},pvc:function(){return S.a.dump({apiVersion:"v1",kind:"PersistentVolumeClaim",metadata:{name:"garden-setup-state",namespace:"default"},spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"1Gi"}}}})},secret:function(){return S.a.dump({apiVersion:"v1",kind:"Secret",metadata:{name:"garden-setup-config",namespace:"default"},type:"Opaque",data:{kubeconfig:btoa(this.kubeconfig),"acre.yaml":btoa(this.acre)}})},deployManifest:function(){return["---\n",this.secret,"---\n",this.pvc,"---\n",this.deployPod].join("")},undeployManifest:function(){return["---\n",this.deletePod].join("")}}),methods:{onDeployDownload:function(){V()(this.deployManifest,"gardener-deploy.yaml","text/yaml")},onUndeployDownload:function(){V()(this.undeployManifest,"gardener-undeploy.yaml","text/yaml")},getPod:function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return{apiVersion:"v1",kind:"Pod",metadata:{name:"garden-setup-".concat("delete"===e?"un":"","installer"),namespace:"default"},spec:{restartPolicy:"Never",containers:[{name:"garden-setup-installer",image:"diaphteiros/garden-setup:stable",imagePullPolicy:"Always",command:["./run.sh","--color",e].concat(s),resources:{},volumeMounts:[{name:"garden-setup-config",mountPath:"/etc/garden-setup/config"},{name:"garden-setup-state",mountPath:"/landscape"}]}],volumes:[{name:"garden-setup-config",secret:{secretName:"garden-setup-config"}},{name:"garden-setup-state",persistentVolumeClaim:{claimName:"garden-setup-state"}}]}}},pickServiceaccount:function(){this.$refs.serviceaccountInput.click()},onServiceaccount:function(e){var t=this,s=e.target.files[0];this.serviceaccountFilename=s.name;var a=new FileReader;a.onload=function(){t.serviceaccount=a.result},a.readAsText(s)},pickKubeconfig:function(){this.$refs.kubeconfigInput.click()},onKubeconfig:function(e){var t=this,s=e.target.files[0];this.kubeconfigFilename=s.name;var a=new FileReader;a.onload=function(){t.kubeconfig=a.result},a.readAsText(s)},clickKubeconfigUpload:function(){this.$refs.kubeconfigUploadButton.querySelector("input").click()}},watch:{clusterIaas:function(e){var t=this;"gcp"===e&&this.$nextTick(function(){var e=function(e){t.serviceaccount=e};T(t.$refs.serviceaccount,/json/,e)})}}},R=N,O=(s("8136"),s("8336")),F=s("b0af"),q=s("99d9"),E=s("12b2"),M=s("a523"),z=s("0e8f"),G=s("4bd4"),$=s("a722"),U=s("b56d"),L=s("e0c7"),J=s("2677"),X=Object(p["a"])(R,C,I,!1,null,"7f3ef17e",null),B=X.exports;v()(X,{VBtn:O["a"],VCard:F["a"],VCardText:q["a"],VCardTitle:E["a"],VContainer:M["a"],VFlex:z["a"],VForm:G["a"],VLayout:$["a"],VSelect:U["a"],VSubheader:L["a"],VTextField:J["a"]}),a["a"].use(k["a"]);var Y=new k["a"]({mode:"history",base:"/installer",routes:[{path:"/",name:"home",component:B}]}),H=s("a4bb"),W=s.n(H);a["a"].use(K["a"]);var Z={drawer:!1,cloudProviders:{aws:{dns:"aws-route53",storage:"s3",regions:{"eu-west-1":["a","b","c"].map(function(e){return"eu-west-1"+e}),"eu-central-1":["a","b","c"].map(function(e){return"eu-central-1"+e}),"us-east-1":["a","b","c"].map(function(e){return"us-east-1"+e})}},azure:{dns:"azure-dns",storage:"abs",regions:{westeurope:void 0,eastus:void 0}},gcp:{dns:"google-clouddns",storage:"gcs",regions:{"europe-west1":["b","c","d"].map(function(e){return"europe-west1-"+e}),"us-east1":["b","c","d"].map(function(e){return"us-east1-"+e}),"us-central1":["a","b","c"].map(function(e){return"us-central1-"+e})}}}},Q={cloudProviderItems:function(e){return W()(e.cloudProviders)},backupType:function(e){return function(t){var s=e.cloudProviders[t];return s?s.storage:null}},dnsType:function(e){return function(t){var s=e.cloudProviders[t];return s?s.dns:null}},regionItems:function(e){return function(t){var s=e.cloudProviders[t];return s?W()(s.regions):[]}},zoneItems:function(e){return function(t,s){var a=e.cloudProviders[t];return a?a.regions[s]:[]}}},ee={},te={setDrawer:function(e,t){return e.drawer=t},toggleDrawer:function(e){return e.drawer=!e.drawer}},se=new K["a"].Store({state:Z,getters:Q,actions:ee,mutations:te}),ae=se;a["a"].config.productionTip=!1,new a["a"]({router:Y,store:ae,render:function(e){return e(w)}}).$mount("#app")},8136:function(e,t,s){"use strict";var a=s("2ba8"),r=s.n(a);r.a}});
//# sourceMappingURL=app.55e1a531.js.map
