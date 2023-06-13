import{L as w}from"./LocationsComponent-bd6d2541.js";import{_ as y,p as b,r as p,o as u,c as h,b as e,w as E,f as l,v as a,g as d,t as c,h as V,n as f,a as _,F as x,d as F,e as C}from"./index-021473f6.js";const S={data(){return{name:"",email:"",phone:"",message:"",err_icon:!1}},components:{LocationsComponent:w,patternLeaf:b},computed:{nameError(){return this.name.trim()===""?"Can't be empty":""},emailError(){return this.email.trim()===""?"Can't be empty":this.isValidEmail(this.email.trim())?"":"Please enter a valid email address"},phoneError(){return this.phone.trim()===""?"Can't be empty":""}},methods:{submitForm(){this.nameError===""&&this.emailError===""&&this.phoneError},setCustomValidity(o,t){const m=event.target;m.setCustomValidity(t),m.reportValidity()},isValidEmail(o){return/^\S+@\S+\.\S+$/.test(o)}}},n=o=>(F("data-v-25512055"),o=o(),C(),o),L={class:"contact-sec"},k={class:"form-box"},z=n(()=>e("div",{class:"left-side"},[e("h1",null,"Contact Us"),e("p",null,"Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.")],-1)),B={class:"right-side"},H={class:"form-item"},M={key:0,class:"error-message"},I=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},[e("g",{fill:"none","fill-rule":"evenodd"},[e("circle",{cx:"10",cy:"10",r:"10",fill:"#FFF"}),e("path",{fill:"#E7816B",d:"M11 14v2H9v-2h2zm0-9v7H9V5h2z"})])],-1)),N={class:"form-item"},U=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},[e("g",{fill:"none","fill-rule":"evenodd"},[e("circle",{cx:"10",cy:"10",r:"10",fill:"#FFF"}),e("path",{fill:"#E7816B",d:"M11 14v2H9v-2h2zm0-9v7H9V5h2z"})])],-1)),q={class:"form-item"},R=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},[e("g",{fill:"none","fill-rule":"evenodd"},[e("circle",{cx:"10",cy:"10",r:"10",fill:"#FFF"}),e("path",{fill:"#E7816B",d:"M11 14v2H9v-2h2zm0-9v7H9V5h2z"})])],-1)),D={class:"form-item"},P=n(()=>e("button",{type:"submit",class:"btn btn-dark"},"Submit",-1));function T(o,t,m,j,r,i){const v=p("LocationsComponent"),g=p("patternLeaf");return u(),h(x,null,[e("section",L,[e("div",k,[z,e("div",B,[e("form",{onSubmit:t[4]||(t[4]=E((...s)=>i.submitForm&&i.submitForm(...s),["prevent"]))},[e("div",H,[l(e("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=s=>r.name=s),required:""},null,512),[[a,r.name]]),this.err_icon?(u(),h("span",M,[d(c(i.nameError)+" ",1),I])):V("",!0)]),e("div",N,[l(e("input",{type:"email",placeholder:"Email Address","onUpdate:modelValue":t[1]||(t[1]=s=>r.email=s),required:""},null,512),[[a,r.email]]),e("span",{class:f(["error-message",{"show-error":o.formSubmitted&&i.emailError}])},[d(c(i.emailError)+" ",1),U],2)]),e("div",q,[l(e("input",{type:"number",placeholder:"Phone","onUpdate:modelValue":t[2]||(t[2]=s=>r.phone=s),required:""},null,512),[[a,r.phone]]),e("span",{class:f(["error-message",{"show-error":o.formSubmitted&&i.phoneError}])},[d(c(i.phoneError)+" ",1),R],2)]),e("div",D,[l(e("textarea",{cols:"30",rows:"5",placeholder:"Your Message","onUpdate:modelValue":t[3]||(t[3]=s=>r.message=s)},null,512),[[a,r.message]])]),P],32)])]),_(v)]),_(g,{class:"pattern-leaf2"})],64)}const G=y(S,[["render",T],["__scopeId","data-v-25512055"]]);export{G as default};