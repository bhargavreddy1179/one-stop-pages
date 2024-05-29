var z=Object.defineProperty;var D=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function $(){}function V(e){return e()}function A(){return Object.create(null)}function L(e){e.forEach(V)}function q(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function x(){return O(" ")}function J(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}let N;function y(e){N=e}const m=[],F=[];let _=[];const P=[],X=Promise.resolve();let S=!1;function Z(){S||(S=!0,X.then(T))}function C(e){_.push(e)}const E=new Set;let g=0;function T(){if(g!==0)return;const e=N;do{try{for(;g<m.length;){const t=m[g];g++,y(t),ee(t.$$)}}catch(t){throw m.length=0,g=0,t}for(y(null),m.length=0,g=0;F.length;)F.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(m.length);for(;P.length;)P.pop()();S=!1,E.clear(),y(e)}function ee(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function te(e){const t=[],n=[];_.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),_=t}const b=new Set;let ne;function H(e,t){e&&e.i&&(b.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(b.has(e))return;b.add(e),ne.c.push(()=>{b.delete(e)}),e.o(t)}}function oe(e){e&&e.c()}function K(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),C(()=>{const i=e.$$.on_mount.map(V).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...i):L(i),e.$$.on_mount=[]}),o.forEach(C)}function R(e,t){const n=e.$$;n.fragment!==null&&(te(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(m.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,i,a=null,c=[-1]){const d=N;y(e);const l=e.$$={fragment:null,ctx:[],props:i,update:$,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:A(),dirty:c,skip_bound:!1,root:t.target||d.$$.root};a&&a(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(s,h,...u)=>{const w=u.length?u[0]:h;return l.ctx&&o(l.ctx[s],l.ctx[s]=w)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](w),v&&ie(e,s)),h}):[],l.update(),v=!0,L(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const s=Q(t.target);l.fragment&&l.fragment.l(s),s.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&H(e.$$.fragment),K(e,t.target,t.anchor),T()}y(d)}class Y{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){R(this,1),this.$destroy=$}$on(t,n){if(!q(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);const ae="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",se="/one-stop-pages/vite.svg";function ce(e){let t,n,r,o,i;return{c(){t=p("button"),n=O("count is "),r=O(e[0])},m(a,c){I(a,t,c),f(t,n),f(t,r),o||(i=J(t,"click",e[1]),o=!0)},p(a,[c]){c&1&&W(r,a[0])},i:$,o:$,d(a){a&&M(t),o=!1,i()}}}function fe(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ue extends Y{constructor(t){super(),U(this,t,fe,ce,B,{})}}function de(e){let t,n,r,o,i,a,c,d,l,v,s,h;return c=new ue({}),{c(){t=p("main"),n=p("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${se}" class="logo svelte-11cv5lq" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${ae}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`,r=x(),o=p("h1"),o.textContent="Vite + Svelte",i=x(),a=p("div"),oe(c.$$.fragment),d=x(),l=p("p"),l.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',v=x(),s=p("p"),s.textContent="Click on the Vite and Svelte logos to learn more",j(a,"class","card"),j(s,"class","read-the-docs svelte-11cv5lq")},m(u,w){I(u,t,w),f(t,n),f(t,r),f(t,o),f(t,i),f(t,a),K(c,a,null),f(t,d),f(t,l),f(t,v),f(t,s),h=!0},p:$,i(u){h||(H(c.$$.fragment,u),h=!0)},o(u){re(c.$$.fragment,u),h=!1},d(u){u&&M(t),R(c)}}}class he extends Y{constructor(t){super(),U(this,t,null,de,B,{})}}new he({target:document.getElementById("app")});
