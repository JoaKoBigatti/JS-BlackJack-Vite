(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const Cr=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:r*1},Rn=(n,r,t)=>{const e=document.querySelectorAll("small");return t[r]=t[r]+Cr(n),e[r].innerText=t[r],t[r]},Vn=(n,r)=>{if(!n)throw new Error("La carta es un argumento obligarorio");const t=document.querySelectorAll(".divCartas"),e=document.createElement("img");return e.src=`assets/cartas/${n}.png`,e.classList.add("carta"),t[r].append(e),e};var Fn="1.13.6",Mn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},X=Array.prototype,fn=Object.prototype,Nn=typeof Symbol<"u"?Symbol.prototype:null,Rr=X.push,R=X.slice,D=fn.toString,Vr=fn.hasOwnProperty,$n=typeof ArrayBuffer<"u",Fr=typeof DataView<"u",$r=Array.isArray,Pn=Object.keys,Sn=Object.create,Tn=$n&&ArrayBuffer.isView,zr=isNaN,Ur=isFinite,zn=!{toString:null}.propertyIsEnumerable("toString"),In=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Wr=Math.pow(2,53)-1;function m(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function M(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Hr(n){return n===null}function Un(n){return n===void 0}function Wn(n){return n===!0||n===!1||D.call(n)==="[object Boolean]"}function Gr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return D.call(t)===r}}const ln=h("String"),Hn=h("Number"),Jr=h("Date"),Xr=h("RegExp"),Yr=h("Error"),Gn=h("Symbol"),Jn=h("ArrayBuffer");var Xn=h("Function"),Qr=Mn.document&&Mn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Qr!="function"&&(Xn=function(n){return typeof n=="function"||!1});const g=Xn,Yn=h("Object");var Qn=Fr&&Yn(new DataView(new ArrayBuffer(8))),an=typeof Map<"u"&&Yn(new Map),Zr=h("DataView");function Kr(n){return n!=null&&g(n.getInt8)&&Jn(n.buffer)}const W=Qn?Kr:Zr,N=$r||h("Array");function E(n,r){return n!=null&&Vr.call(n,r)}var x=h("Arguments");(function(){x(arguments)||(x=function(n){return E(n,"callee")})})();const on=x;function xr(n){return!Gn(n)&&Ur(n)&&!isNaN(parseFloat(n))}function Zn(n){return Hn(n)&&zr(n)}function Kn(n){return function(){return n}}function xn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Wr}}function kn(n){return function(r){return r==null?void 0:r[n]}}const H=kn("byteLength"),kr=xn(H);var br=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function jr(n){return Tn?Tn(n)&&!W(n):kr(n)&&br.test(D.call(n))}const bn=$n?jr:Kn(!1),d=kn("length");function nt(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function jn(n,r){r=nt(r);var t=In.length,e=n.constructor,u=g(e)&&e.prototype||fn,i="constructor";for(E(n,i)&&!r.contains(i)&&r.push(i);t--;)i=In[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!M(n))return[];if(Pn)return Pn(n);var r=[];for(var t in n)E(n,t)&&r.push(t);return zn&&jn(n,r),r}function rt(n){if(n==null)return!0;var r=d(n);return typeof r=="number"&&(N(n)||ln(n)||on(n))?r===0:d(v(n))===0}function nr(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Fn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Ln(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,H(n))}var Bn="[object DataView]";function k(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:rr(n,r,t,e)}function rr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=D.call(n);if(u!==D.call(r))return!1;if(Qn&&u=="[object Object]"&&W(n)){if(!W(r))return!1;u=Bn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Nn.valueOf.call(n)===Nn.valueOf.call(r);case"[object ArrayBuffer]":case Bn:return rr(Ln(n),Ln(r),t,e)}var i=u==="[object Array]";if(!i&&bn(n)){var f=H(n);if(f!==H(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,o=r.constructor;if(l!==o&&!(g(l)&&l instanceof l&&g(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),i){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!k(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(E(r,p)&&k(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function tt(n,r){return k(n,r)}function V(n){if(!M(n))return[];var r=[];for(var t in n)r.push(t);return zn&&jn(n,r),r}function cn(n){var r=d(n);return function(t){if(t==null)return!1;var e=V(t);if(d(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ur||!g(t[sn])}}var sn="forEach",tr="has",vn=["clear","delete"],er=["get",tr,"set"],et=vn.concat(sn,er),ur=vn.concat(er),ut=["add"].concat(vn,sn,tr);const it=an?cn(et):h("Map"),ft=an?cn(ur):h("WeakMap"),lt=an?cn(ut):h("Set"),at=h("WeakSet");function I(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function ot(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function ir(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function b(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function hn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),l=f.length,o=0;o<l;o++){var a=f[o];(!r||t[a]===void 0)&&(t[a]=i[a])}return t}}const fr=hn(V),G=hn(v),lr=hn(V,!0);function ct(){return function(){}}function ar(n){if(!M(n))return{};if(Sn)return Sn(n);var r=ct();r.prototype=n;var t=new r;return r.prototype=null,t}function st(n,r){var t=ar(n);return r&&G(t,r),t}function vt(n){return M(n)?N(n)?n.slice():fr({},n):n}function ht(n,r){return r(n),n}function or(n){return N(n)?n:[n]}c.toPath=or;function F(n){return c.toPath(n)}function pn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function cr(n,r,t){var e=pn(n,F(r));return Un(e)?t:e}function pt(n,r){r=F(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!E(n,u))return!1;n=n[u]}return!!t}function gn(n){return n}function q(n){return n=G({},n),function(r){return nr(r,n)}}function mn(n){return n=F(n),function(r){return pn(r,n)}}function $(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function sr(n,r,t){return n==null?gn:g(n)?$(n,r,t):M(n)&&!N(n)?q(n):mn(n)}function dn(n,r){return sr(n,r,1/0)}c.iteratee=dn;function y(n,r,t){return c.iteratee!==dn?c.iteratee(n,r):sr(n,r,t)}function gt(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var l=e[f];i[l]=r(n[l],l,n)}return i}function vr(){}function mt(n){return n==null?vr:function(r){return cr(n,r)}}function dt(n,r,t){var e=Array(Math.max(0,n));r=$(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function j(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const C=Date.now||function(){return new Date().getTime()};function hr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const pr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},yt=hr(pr),wt=ir(pr),At=hr(wt),_t=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Q=/(.)^/,Et={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ot=/\\|'|\r|\n|\u2028|\u2029/g;function Mt(n){return"\\"+Et[n]}var Nt=/^\s*(\w|\$)+\s*$/;function Pt(n,r,t){!r&&t&&(r=t),r=lr({},r,c.templateSettings);var e=RegExp([(r.escape||Q).source,(r.interpolate||Q).source,(r.evaluate||Q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(a,s,p,En,On){return i+=n.slice(u,On).replace(Ot,Mt),u=On+a.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?i+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:En&&(i+=`';
`+En+`
__p+='`),a}),i+=`';
`;var f=r.variable;if(f){if(!Nt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var l;try{l=new Function(f,"_",i)}catch(a){throw a.source=i,a}var o=function(a){return l.call(this,a,c)};return o.source="function("+f+`){
`+i+"}",o}function St(n,r,t){r=F(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Tt=0;function It(n){var r=++Tt+"";return n?n+r:r}function Lt(n){var r=c(n);return r._chain=!0,r}function gr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=ar(n.prototype),f=n.apply(i,u);return M(f)?f:i}var L=m(function(n,r){var t=L.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),l=0;l<i;l++)f[l]=r[l]===t?arguments[u++]:r[l];for(;u<arguments.length;)f.push(arguments[u++]);return gr(n,e,this,this,f)};return e});L.placeholder=c;const mr=m(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=m(function(u){return gr(n,e,r,this,t.concat(u))});return e}),w=xn(d);function P(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=d(n);i<f;i++){var l=n[i];if(w(l)&&(N(l)||on(l)))if(r>1)P(l,r-1,t,e),u=e.length;else for(var o=0,a=l.length;o<a;)e[u++]=l[o++];else t||(e[u++]=l)}return e}const Bt=m(function(n,r){r=P(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=mr(n[e],n)}return n});function Dt(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return E(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const dr=m(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),qt=L(dr,c,1);function Ct(n,r,t){var e,u,i,f,l=0;t||(t={});var o=function(){l=t.leading===!1?0:C(),e=null,f=n.apply(u,i),e||(u=i=null)},a=function(){var s=C();!l&&t.leading===!1&&(l=s);var p=r-(s-l);return u=this,i=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),l=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,p)),f};return a.cancel=function(){clearTimeout(e),l=0,e=u=i=null},a}function Rt(n,r,t){var e,u,i,f,l,o=function(){var s=C()-u;r>s?e=setTimeout(o,r-s):(e=null,t||(f=n.apply(l,i)),e||(i=l=null))},a=m(function(s){return l=this,i=s,u=C(),e||(e=setTimeout(o,r),t&&(f=n.apply(l,i))),f});return a.cancel=function(){clearTimeout(e),e=i=l=null},a}function Vt(n,r){return L(r,n)}function yn(n){return function(){return!n.apply(this,arguments)}}function Ft(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function $t(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function yr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const zt=L(yr,2);function wr(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function Ar(n){return function(r,t,e){t=y(t,e);for(var u=d(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const wn=Ar(1),_r=Ar(-1);function Er(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=d(n);i<f;){var l=Math.floor((i+f)/2);t(n[l])<u?i=l+1:f=l}return i}function Or(n,r,t){return function(e,u,i){var f=0,l=d(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+l,f):l=i>=0?Math.min(i+1,l):i+l+1;else if(t&&i&&l)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(R.call(e,f,l),Zn),i>=0?i+f:-1;for(i=n>0?f:l-1;i>=0&&i<l;i+=n)if(e[i]===u)return i;return-1}}const Mr=Or(1,wn,Er),Ut=Or(-1,_r);function nn(n,r,t){var e=w(n)?wn:wr,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Wt(n,r){return nn(n,q(r))}function _(n,r,t){r=$(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function O(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var l=e?e[f]:f;i[f]=r(n[l],l,n)}return i}function Nr(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),l=(f||t).length,o=n>0?0:l-1;for(i||(u=t[f?f[o]:o],o+=n);o>=0&&o<l;o+=n){var a=f?f[o]:o;u=e(u,t[a],a,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,$(e,i,4),u,f)}}const Z=Nr(1),Dn=Nr(-1);function T(n,r,t){var e=[];return r=y(r,t),_(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Ht(n,r,t){return T(n,yn(y(r)),t)}function qn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function Cn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=I(n)),(typeof t!="number"||e)&&(t=0),Mr(n,r,t)>=0}const Gt=m(function(n,r,t){var e,u;return g(r)?u=r:(r=F(r),e=r.slice(0,-1),r=r[r.length-1]),O(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=pn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function An(n,r){return O(n,mn(r))}function Jt(n,r){return T(n,q(r))}function Pr(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:I(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i>e&&(e=i)}else r=y(r,t),_(n,function(a,s,p){f=r(a,s,p),(f>u||f===-1/0&&e===-1/0)&&(e=a,u=f)});return e}function Xt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:I(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i<e&&(e=i)}else r=y(r,t),_(n,function(a,s,p){f=r(a,s,p),(f<u||f===1/0&&e===1/0)&&(e=a,u=f)});return e}var Yt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Sr(n){return n?N(n)?R.call(n):ln(n)?n.match(Yt):w(n)?O(n,gn):I(n):[]}function Tr(n,r,t){if(r==null||t)return w(n)||(n=I(n)),n[j(n.length-1)];var e=Sr(n),u=d(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var l=j(f,i),o=e[f];e[f]=e[l],e[l]=o}return e.slice(0,r)}function Qt(n){return Tr(n,1/0)}function Zt(n,r,t){var e=0;return r=y(r,t),An(O(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,l=i.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return u.index-i.index}),"value")}function Y(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),_(t,function(f,l){var o=e(f,l,t);n(i,f,o)}),i}}const Kt=Y(function(n,r,t){E(n,t)?n[t].push(r):n[t]=[r]}),xt=Y(function(n,r,t){n[t]=r}),kt=Y(function(n,r,t){E(n,t)?n[t]++:n[t]=1}),bt=Y(function(n,r,t){n[t?0:1].push(r)},!0);function jt(n){return n==null?0:w(n)?n.length:v(n).length}function ne(n,r,t){return r in t}const Ir=m(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=$(e,r[1])),r=V(n)):(e=ne,r=P(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),re=m(function(n,r){var t=r[0],e;return g(t)?(t=yn(t),r.length>1&&(e=r[1])):(r=O(P(r,!1,!1),String),t=function(u,i){return!A(r,i)}),Ir(n,t,e)});function Lr(n,r,t){return R.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function K(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Lr(n,n.length-r)}function z(n,r,t){return R.call(n,r==null||t?1:r)}function te(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:z(n,Math.max(0,n.length-r))}function ee(n){return T(n,Boolean)}function ue(n,r){return P(n,r,!1)}const Br=m(function(n,r){return r=P(r,!0,!0),T(n,function(t){return!A(r,t)})}),ie=m(function(n,r){return Br(n,r)});function rn(n,r,t,e){Wn(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,l=d(n);f<l;f++){var o=n[f],a=t?t(o,f,n):o;r&&!t?((!f||i!==a)&&u.push(o),i=a):t?A(i,a)||(i.push(a),u.push(o)):A(u,o)||u.push(o)}return u}const fe=m(function(n){return rn(P(n,!0,!0))});function le(n){for(var r=[],t=arguments.length,e=0,u=d(n);e<u;e++){var i=n[e];if(!A(r,i)){var f;for(f=1;f<t&&A(arguments[f],i);f++);f===t&&r.push(i)}}return r}function tn(n){for(var r=n&&Pr(n,d).length||0,t=Array(r),e=0;e<r;e++)t[e]=An(n,e);return t}const ae=m(tn);function oe(n,r){for(var t={},e=0,u=d(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function ce(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function se(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(R.call(n,e,e+=r));return t}function _n(n,r){return n._chain?c(r).chain():r}function Dr(n){return _(b(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Rr.apply(e,arguments),_n(this,t.apply(c,e))}}),c}_(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=X[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),_n(this,t)}});_(["concat","join","slice"],function(n){var r=X[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),_n(this,t)}});const ve=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Fn,after:$t,all:qn,allKeys:V,any:Cn,assign:G,before:yr,bind:mr,bindAll:Bt,chain:Lt,chunk:se,clone:vt,collect:O,compact:ee,compose:Ft,constant:Kn,contains:A,countBy:kt,create:st,debounce:Rt,default:c,defaults:lr,defer:qt,delay:dr,detect:nn,difference:Br,drop:z,each:_,escape:yt,every:qn,extend:fr,extendOwn:G,filter:T,find:nn,findIndex:wn,findKey:wr,findLastIndex:_r,findWhere:Wt,first:K,flatten:ue,foldl:Z,foldr:Dn,forEach:_,functions:b,get:cr,groupBy:Kt,has:pt,head:K,identity:gn,include:A,includes:A,indexBy:xt,indexOf:Mr,initial:Lr,inject:Z,intersection:le,invert:ir,invoke:Gt,isArguments:on,isArray:N,isArrayBuffer:Jn,isBoolean:Wn,isDataView:W,isDate:Jr,isElement:Gr,isEmpty:rt,isEqual:tt,isError:Yr,isFinite:xr,isFunction:g,isMap:it,isMatch:nr,isNaN:Zn,isNull:Hr,isNumber:Hn,isObject:M,isRegExp:Xr,isSet:lt,isString:ln,isSymbol:Gn,isTypedArray:bn,isUndefined:Un,isWeakMap:ft,isWeakSet:at,iteratee:dn,keys:v,last:te,lastIndexOf:Ut,map:O,mapObject:gt,matcher:q,matches:q,max:Pr,memoize:Dt,methods:b,min:Xt,mixin:Dr,negate:yn,noop:vr,now:C,object:oe,omit:re,once:zt,pairs:ot,partial:L,partition:bt,pick:Ir,pluck:An,property:mn,propertyOf:mt,random:j,range:ce,reduce:Z,reduceRight:Dn,reject:Ht,rest:z,restArguments:m,result:St,sample:Tr,select:T,shuffle:Qt,size:jt,some:Cn,sortBy:Zt,sortedIndex:Er,tail:z,take:K,tap:ht,template:Pt,templateSettings:_t,throttle:Ct,times:dt,toArray:Sr,toPath:or,transpose:tn,unescape:At,union:fe,uniq:rn,unique:rn,uniqueId:It,unzip:tn,values:I,where:Jt,without:ie,wrap:Vt,zip:ae},Symbol.toStringTag,{value:"Module"}));var en=Dr(ve);en._=en;const he=(n,r)=>{if(!n||n.length===0)throw new Error("tiposDeCartas es obligatorio como un arreglo de string");if(!r||r.length===0)throw new Error("cartasEspeciales es obligatorio como un arreglo de string");let t=[];for(let e=2;e<=10;e++)for(let u of n)t.push(e+u);for(let e of n)for(let u of r)t.push(u+e);return en.shuffle(t)},pe=n=>{const[r,t]=n;setTimeout(()=>{r===t?alert("Uh empataste man, volve a jugar"):t<=21&&t>r||r>21?alert("Perdiste a la chingada, gana la casa"):alert("VAAMO!!, GANASTE WEY")},200)},ge=(n=2)=>{const r=document.querySelector("#btnPedir"),t=document.querySelector("#btnDetener"),e=document.querySelectorAll(".divCartas"),u=document.querySelectorAll("small");let i=[];for(let f=0;f<n;f++)i.push(0);return u.forEach(f=>f.innerText=0),e.forEach(f=>f.innerHTML=""),r.disabled=!1,t.disabled=!1,i},qr=n=>{if(!n||n.length===0)throw"No hay cartas en el deck";return n.shift()},un=(n,r,t)=>{let e=0;do{const u=qr(r);e=Rn(u,t.length-1,t),Vn(u,t.length-1)}while(e<n&&n<=21);pe(t)};let B=[],S=[];const me=["C","D","H","S"],de=["A","J","K","Q"],U=document.querySelector("#btnPedir"),J=document.querySelector("#btnDetener"),ye=document.querySelector("#btnNuevo");U.addEventListener("click",()=>{const n=qr(B),r=Rn(n,0,S);Vn(n,0),r>21?(U.disabled=!0,J.disabled=!0,un(r,B,S),setTimeout(()=>{alert("Te pasaste wey")},100)):r===21&&(U.disabled=!0,J.disabled=!0,setTimeout(()=>{alert("llegaste a 21")},100),un(r,B,S))});J.addEventListener("click",()=>{U.disabled=!0,J.disabled=!0,un(S[0],B,S)});ye.addEventListener("click",()=>{B=he(me,de),S=ge()});