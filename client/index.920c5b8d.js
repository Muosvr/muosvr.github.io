import{S as e,i as s,s as t,e as a,o as r,g as o,t as n,c as i,a as d,p as c,d as l,j as f,h,b as u,A as p,f as g,k as v,q as m,v as $,w as I,x as P,B as x,C as j,D as y}from"./client.8b5d2d74.js";import{L as b,g as w}from"./index.ef1483ad.js";import"./v4.96b22442.js";import{s as E,B as k}from"./Block.7046eba8.js";function B(e){let s,t,x,j,y,b,w;return x=new k({}),{c(){s=a("main"),t=a("div"),r(x.$$.fragment),j=o(),y=a("a"),b=n("Edit this page"),this.h()},l(e){s=i(e,"MAIN",{class:!0});var a=d(s);t=i(a,"DIV",{class:!0});var r=d(t);c(x.$$.fragment,r),r.forEach(l),j=f(a),y=i(a,"A",{class:!0,href:!0});var o=d(y);b=h(o,"Edit this page"),o.forEach(l),a.forEach(l),this.h()},h(){u(t,"class","block svelte-106zl87"),u(y,"class","edit-btn svelte-106zl87"),u(y,"href",e[1]),u(s,"class","svelte-106zl87"),p(s,"hidden",e[0])},m(e,a){g(e,s,a),v(s,t),m(x,t,null),v(s,j),v(s,y),v(y,b),w=!0},p(e,[t]){1&t&&p(s,"hidden",e[0])},i(e){w||($(x.$$.fragment,e),w=!0)},o(e){I(x.$$.fragment,e),w=!1},d(e){e&&l(s),P(x)}}}var z=function(e,s,t,a){return new(t||(t=Promise))((function(r,o){function n(e){try{d(a.next(e))}catch(e){o(e)}}function i(e){try{d(a.throw(e))}catch(e){o(e)}}function d(e){var s;e.done?r(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(n,i)}d((a=a.apply(e,s||[])).next())}))};function A(e,s){return z(this,void 0,void 0,(function*(){try{const{pageId:t}=e.params,a=s.userId;if(console.log("session userId",a),!a)return void this.redirect(b);const r=`/${t}.json`,o=yield this.fetch(r),n=yield o.json();return n?(n.pageProps.editingLayout=!1,n.pageProps.focusedBlock="",E.set(n),{storePreloaded:n,pageId:t,create:!1}):void this.error(404,"Page does not exist")}catch(e){this.error(500,e)}}))}function D(e,s,t){let a;x(e,E,e=>t(4,a=e));let{storePreloaded:r}=s,{pageId:o}=s;const n=w(o);let i=!0;return r&&j(E,a=r,a),y(()=>t(0,i=!1)),e.$$set=e=>{"storePreloaded"in e&&t(2,r=e.storePreloaded),"pageId"in e&&t(3,o=e.pageId)},[i,n,r,o]}export default class extends e{constructor(e){super(),s(this,e,D,B,t,{storePreloaded:2,pageId:3})}}export{A as preload};
