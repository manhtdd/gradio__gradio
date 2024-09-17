import{P as q}from"./prism-python-So2OGypt.js";import"./index-6jqsFzvP.js";import"./svelte/svelte.js";(function(a){a.languages.typescript=a.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete a.languages.typescript.parameter,delete a.languages.typescript["literal-property"];var e=a.languages.extend("typescript",{});delete e["class-name"],a.languages.typescript["class-name"].inside=e,a.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),a.languages.ts=a.languages.typescript})(Prism);const{HtmlTag:D,SvelteComponent:G,append:o,attr:g,binding_callbacks:J,destroy_block:K,detach:y,element:k,empty:N,ensure_array_like:Z,flush:z,init:Q,insert:v,listen:U,noop:E,safe_not_equal:W,set_data:S,set_style:X,space:w,text:A,toggle_class:L,update_keyed_each:Y}=window.__gradio__svelte__internal;function O(a,e,l){const t=a.slice();return t[11]=e[l].type,t[12]=e[l].description,t[13]=e[l].default,t[14]=e[l].name,t}function j(a){let e,l,t,s,n,i,f,u,_;return{c(){e=k("div"),l=k("span"),t=A(a[1]),s=w(),n=k("button"),i=A("▼"),g(l,"class","title svelte-1k7zb06"),g(n,"class","toggle-all svelte-1k7zb06"),g(n,"title",f=a[4]?"Close All":"Open All"),g(e,"class","header svelte-1k7zb06")},m(p,b){v(p,e,b),o(e,l),o(l,t),o(e,s),o(e,n),o(n,i),u||(_=U(n,"click",a[5]),u=!0)},p(p,b){b&2&&S(t,p[1]),b&16&&f!==(f=p[4]?"Close All":"Open All")&&g(n,"title",f)},d(p){p&&y(e),u=!1,_()}}}function H(a){let e=[],l=new Map,t,s=Z(a[3]);const n=i=>i[14];for(let i=0;i<s.length;i+=1){let f=O(a,s,i),u=n(f);l.set(u,e[i]=B(u,f))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=N()},m(i,f){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(i,f);v(i,t,f)},p(i,f){f&9&&(s=Z(i[3]),e=Y(e,f,n,1,i,s,l,t.parentNode,K,B,t,O))},d(i){i&&y(t);for(let f=0;f<e.length;f+=1)e[f].d(i)}}}function I(a){let e,l,t=a[11]+"",s;return{c(){e=A(": "),l=new D(!1),s=N(),l.a=s},m(n,i){v(n,e,i),l.m(t,n,i),v(n,s,i)},p(n,i){i&8&&t!==(t=n[11]+"")&&l.p(t)},d(n){n&&(y(e),y(s),l.d())}}}function M(a){let e,l,t,s,n,i,f=a[13]+"";return{c(){e=k("div"),l=k("span"),l.textContent="default",t=w(),s=k("code"),n=A("= "),i=new D(!1),g(l,"class","svelte-1k7zb06"),X(l,"padding-right","4px"),i.a=null,g(s,"class","svelte-1k7zb06"),g(e,"class","default svelte-1k7zb06"),L(e,"last",!a[12])},m(u,_){v(u,e,_),o(e,l),o(e,t),o(e,s),o(s,n),i.m(f,s)},p(u,_){_&8&&f!==(f=u[13]+"")&&i.p(f),_&8&&L(e,"last",!u[12])},d(u){u&&y(e)}}}function T(a){let e,l,t=a[12]+"",s;return{c(){e=k("div"),l=k("p"),s=A(t),g(e,"class","description svelte-1k7zb06")},m(n,i){v(n,e,i),o(e,l),o(l,s)},p(n,i){i&8&&t!==(t=n[12]+"")&&S(s,t)},d(n){n&&y(e)}}}function B(a,e){let l,t,s,n,i=e[14]+"",f,u,_,p,b,c=e[11]&&I(e),d=e[13]&&M(e),r=e[12]&&T(e);return{key:a,first:null,c(){l=k("details"),t=k("summary"),s=k("pre"),n=k("code"),f=A(i),c&&c.c(),_=w(),d&&d.c(),p=w(),r&&r.c(),b=w(),g(n,"class","svelte-1k7zb06"),g(s,"class",u="language-"+e[0]+" svelte-1k7zb06"),g(t,"class","type svelte-1k7zb06"),g(l,"class","param md svelte-1k7zb06"),this.first=l},m(h,m){v(h,l,m),o(l,t),o(t,s),o(s,n),o(n,f),c&&c.m(n,null),o(l,_),d&&d.m(l,null),o(l,p),r&&r.m(l,null),o(l,b)},p(h,m){e=h,m&8&&i!==(i=e[14]+"")&&S(f,i),e[11]?c?c.p(e,m):(c=I(e),c.c(),c.m(n,null)):c&&(c.d(1),c=null),m&1&&u!==(u="language-"+e[0]+" svelte-1k7zb06")&&g(s,"class",u),e[13]?d?d.p(e,m):(d=M(e),d.c(),d.m(l,p)):d&&(d.d(1),d=null),e[12]?r?r.p(e,m):(r=T(e),r.c(),r.m(l,b)):r&&(r.d(1),r=null)},d(h){h&&y(l),c&&c.d(),d&&d.d(),r&&r.d()}}}function P(a){let e,l,t=a[1]!==null&&j(a),s=a[3]&&H(a);return{c(){e=k("div"),t&&t.c(),l=w(),s&&s.c(),g(e,"class","wrap svelte-1k7zb06")},m(n,i){v(n,e,i),t&&t.m(e,null),o(e,l),s&&s.m(e,null),a[8](e)},p(n,[i]){n[1]!==null?t?t.p(n,i):(t=j(n),t.c(),t.m(e,l)):t&&(t.d(1),t=null),n[3]?s?s.p(n,i):(s=H(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:E,o:E,d(n){n&&y(e),t&&t.d(),s&&s.d(),a[8](null)}}}function x(a,e,l){let{docs:t}=e,{lang:s="python"}=e,{linkify:n=[]}=e,{header:i}=e,f,u,_=!1;function p(r,h){let m=q.highlight(r,q.languages[h],h);for(const F of n)m=m.replace(new RegExp(F,"g"),`<a href="#h-${F.toLocaleLowerCase()}">${F}</a>`);return m}function b(r,h){return r?Object.entries(r).map(([m,{type:F,description:R,default:$}])=>{let V=F?p(F,h):null;return{name:m,type:V,description:R,default:$?p($,h):null}}):[]}function c(){l(4,_=!_),f.querySelectorAll(".param").forEach(h=>{h instanceof HTMLDetailsElement&&(h.open=_)})}function d(r){J[r?"unshift":"push"](()=>{f=r,l(2,f)})}return a.$$set=r=>{"docs"in r&&l(6,t=r.docs),"lang"in r&&l(0,s=r.lang),"linkify"in r&&l(7,n=r.linkify),"header"in r&&l(1,i=r.header)},a.$$.update=()=>{a.$$.dirty&65&&l(3,u=b(t,s))},[s,i,f,u,_,c,t,n,d]}class ee extends G{constructor(e){super(),Q(this,e,x,P,W,{docs:6,lang:0,linkify:7,header:1})}get docs(){return this.$$.ctx[6]}set docs(e){this.$$set({docs:e}),z()}get lang(){return this.$$.ctx[0]}set lang(e){this.$$set({lang:e}),z()}get linkify(){return this.$$.ctx[7]}set linkify(e){this.$$set({linkify:e}),z()}get header(){return this.$$.ctx[1]}set header(e){this.$$set({header:e}),z()}}const{SvelteComponent:te,create_component:le,destroy_component:ne,flush:C,init:ie,mount_component:se,safe_not_equal:ae,transition_in:re,transition_out:fe}=window.__gradio__svelte__internal;function ue(a){let e,l;return e=new ee({props:{docs:a[0],linkify:a[1],header:a[2]}}),{c(){le(e.$$.fragment)},m(t,s){se(e,t,s),l=!0},p(t,[s]){const n={};s&1&&(n.docs=t[0]),s&2&&(n.linkify=t[1]),s&4&&(n.header=t[2]),e.$set(n)},i(t){l||(re(e.$$.fragment,t),l=!0)},o(t){fe(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function oe(a,e,l){let{value:t}=e,{linkify:s=[]}=e,{header:n=null}=e;return a.$$set=i=>{"value"in i&&l(0,t=i.value),"linkify"in i&&l(1,s=i.linkify),"header"in i&&l(2,n=i.header)},[t,s,n]}class ge extends te{constructor(e){super(),ie(this,e,oe,ue,ae,{value:0,linkify:1,header:2})}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),C()}get linkify(){return this.$$.ctx[1]}set linkify(e){this.$$set({linkify:e}),C()}get header(){return this.$$.ctx[2]}set header(e){this.$$set({header:e}),C()}}export{ge as default};
//# sourceMappingURL=Index-DJy-MBlJ.js.map
