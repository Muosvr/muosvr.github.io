import{S as e,i as t,s,e as r,t as a,c as n,a as o,h as i,d as l,b as c,f as u,k as d,m as f,g as p,j as h,o as v,l as m,n as b,z as g}from"./client.a86f1b76.js";import{a as y,r as w}from"./index.ea2af0eb.js";function q(e){let t,s;return{c(){t=r("p"),s=a(e[3]),this.h()},l(r){t=n(r,"P",{class:!0});var a=o(t);s=i(a,e[3]),a.forEach(l),this.h()},h(){c(t,"class","error svelte-1l1q8ob")},m(e,r){u(e,t,r),d(t,s)},p(e,t){8&t&&f(s,e[3])},d(e){e&&l(t)}}}function x(e){let t,s,f,y,w,x,E,T,P,I,L,U,N,S,j,B,D,R,z,A,O,V,$,k=e[4].h1+"",F=e[4].buttonText+"",H=e[3]&&q(e);return{c(){t=r("div"),s=r("div"),f=r("h1"),y=a(k),w=p(),H&&H.c(),x=p(),E=r("form"),T=r("label"),P=a("Username"),I=p(),L=r("input"),U=p(),N=r("label"),S=a("Password"),j=p(),B=r("input"),D=p(),R=r("input"),z=p(),A=r("button"),O=a(F),this.h()},l(e){t=n(e,"DIV",{class:!0});var r=o(t);s=n(r,"DIV",{class:!0});var a=o(s);f=n(a,"H1",{class:!0});var c=o(f);y=i(c,k),c.forEach(l),w=h(a),H&&H.l(a),x=h(a),E=n(a,"FORM",{class:!0});var u=o(E);T=n(u,"LABEL",{for:!0});var d=o(T);P=i(d,"Username"),d.forEach(l),I=h(u),L=n(u,"INPUT",{id:!0,type:!0,required:!0}),U=h(u),N=n(u,"LABEL",{for:!0});var p=o(N);S=i(p,"Password"),p.forEach(l),j=h(u),B=n(u,"INPUT",{id:!0,type:!0,required:!0}),D=h(u),R=n(u,"INPUT",{hidden:!0,value:!0}),z=h(u),A=n(u,"BUTTON",{class:!0});var v=o(A);O=i(v,F),v.forEach(l),u.forEach(l),a.forEach(l),r.forEach(l),this.h()},h(){c(f,"class","svelte-1l1q8ob"),c(T,"for","username-input"),c(L,"id","username-input"),c(L,"type","text"),L.required=!0,c(N,"for","password-input-1"),c(B,"id","password-input-1"),c(B,"type","password"),B.required=!0,R.hidden=!0,R.value=e[0],c(A,"class","capitalize svelte-1l1q8ob"),c(E,"class","svelte-1l1q8ob"),c(s,"class","panel svelte-1l1q8ob"),c(t,"class","input-container svelte-1l1q8ob")},m(r,a){u(r,t,a),d(t,s),d(s,f),d(f,y),d(s,w),H&&H.m(s,null),d(s,x),d(s,E),d(E,T),d(T,P),d(E,I),d(E,L),v(L,e[1]),d(E,U),d(E,N),d(N,S),d(E,j),d(E,B),v(B,e[2]),d(E,D),d(E,R),d(E,z),d(E,A),d(A,O),V||($=[m(L,"input",e[7]),m(B,"input",e[8]),m(E,"submit",e[5])],V=!0)},p(e,[t]){e[3]?H?H.p(e,t):(H=q(e),H.c(),H.m(s,x)):H&&(H.d(1),H=null),2&t&&L.value!==e[1]&&v(L,e[1]),4&t&&B.value!==e[2]&&v(B,e[2]),1&t&&R.value!==e[0]&&(R.value=e[0])},i:b,o:b,d(e){e&&l(t),H&&H.d(),V=!1,g($)}}}var E=function(e,t,s,r){return new(s||(s=Promise))((function(a,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function i(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))};function T(e,t){return E(this,void 0,void 0,(function*(){let s=e.params.type;console.log("type",s),console.log("['login', 'register'].includes(type)",["login","register"].includes(s)),["login","register"].includes(s)||this.error(404,"Not found");const{user:r,csrf:a}=t||{};return r?this.redirect(302,"/"):{csrf:a,type:s}}))}function P(e,t,s){let{csrf:r}=t,{type:a}=t;const n={login:{h1:"Log In",buttonText:"Login",handleSubmit:y},register:{h1:"Register for an account",buttonText:"Register",handleSubmit:w}}[a];let o,i,l;return e.$$set=e=>{"csrf"in e&&s(0,r=e.csrf),"type"in e&&s(6,a=e.type)},[r,o,i,l,n,e=>{e.preventDefault(),n.handleSubmit({username:o,password:i}).then(e=>{console.log("redirecting to ","/"),window.location.assign("/")}).catch(e=>s(3,l=e.response.data.error))},a,function(){o=this.value,s(1,o)},function(){i=this.value,s(2,i)}]}export default class extends e{constructor(e){super(),t(this,e,P,x,s,{csrf:0,type:6})}}export{T as preload};
