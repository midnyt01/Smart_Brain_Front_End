(this.webpackJsonpsmart_brain=this.webpackJsonpsmart_brain||[]).push([[0],{339:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n.n(a),s=n(55),o=n.n(s),r=(n(62),n(20)),c=n(21),l=n(23),d=n(22),h=(n(63),n(2)),b=function(e){var t=e.onRouteChange;return e.isSignedin?Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{onClick:function(){return t("Signin")},className:"f3 link dim black underline pointer pa3",children:" Sign Out"})}):Object(h.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{onClick:function(){return t("Signin")},className:"f3 link dim black underline pointer pa3",children:" Sign In"}),Object(h.jsx)("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pointer pa3",children:" Register"})]})},u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({signInEmail:t.target.value})},e.onPasswordChange=function(t){e.setState({signInPassword:t.target.value})},e.onSubmitSignIn=function(){fetch("http://localhost:3000/Signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signInEmail,password:e.state.signInPassword})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e.state={signInEmail:"",signInPassword:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(h.jsx)("article",{className:"mw6 center shadow-5 br3 pa3 pa4-ns mv4 dark-gray",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"center f1 fw6 ph0 mh0",children:"Sign In"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(h.jsx)("div",{className:"lh-copy mt3",children:Object(h.jsx)("p",{onClick:function(){return e("Register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(i.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSubmitSignIn=function(){fetch("http://localhost:3000/Register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e.state={name:"",email:"",password:""},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("article",{className:"mw6 center shadow-5 br3 pa3 pa4-ns mv4 dark-gray",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"center f1 fw6 ph0 mh0",children:"Register"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Name"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"text",id:"text",onChange:this.onNameChange})]}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(i.a.Component),p=n(56),g=(n(65),function(){return Object(h.jsx)("div",{className:"ma4 mt0",children:Object(h.jsx)(p.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(h.jsx)("div",{className:"Tilt-inner pa3",children:Object(h.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:"data:image/png;base64,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"})})})})}),j=(n(66),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"f4",children:"This Magic Brain will detect faces in your Image, Give it a try"}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"form pa4 br3 shadow-5",children:[Object(h.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(h.jsx)("button",{className:"w-30 grow f4 link ph3 dib white bg-light-purple",onClick:n,children:"Detect it!"})]})})]})}),f=function(e){var t=e.name,n=e.entries;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"f3 white",children:"Hello, ".concat(t," your rank is ...")}),Object(h.jsx)("div",{className:"f1 white",children:n})]})},O=n(57),w=n.n(O),v=(n(339),function(e){var t=e.imageUrl,n=e.box;return Object(h.jsx)("div",{className:"center ma",children:Object(h.jsxs)("div",{className:"absolute mt3",children:[Object(h.jsx)("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),x={input:"",imageUrl:"",box:{},route:"Signin",isSignedin:!1,user:{id:"",name:"",email:"",password:"",entries:"0",joined:""}},N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.calculateFaceData=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),i=Number(n.height);return console.log(a,i),{leftCol:t.left_col*a,topRow:t.top_row*i,rightCol:a-t.right_col*a,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t}),console.log(t)},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageURL",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceData(t))}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedin:!0}):e.setState(x),e.setState({route:t})},e.state=x,e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedin,n=e.imageUrl,a=e.route,i=e.box;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(w.a,{className:"particles",params:A}),Object(h.jsx)(b,{isSignedin:t,onRouteChange:this.onRouteChange}),"home"===a?Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),Object(h.jsx)(f,{name:this.state.user.name,entries:this.state.user.entries}),Object(h.jsx)(j,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(v,{box:i,imageUrl:n})]}):"Signin"===this.state.route?Object(h.jsx)(u,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(h.jsx)(m,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),A={particles:{number:{value:50,density:{enable:!0,value_area:900}},color:{value:"#FFFFFF"},shape:{type:"circle",stroke:{width:0,color:"#FFFFFF"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:6,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFFFFF",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},C=N,y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(340);o.a.render(Object(h.jsx)(C,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Smart_Brain",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Smart_Brain","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){}},[[341,1,2]]]);
//# sourceMappingURL=main.1de1ca1f.chunk.js.map