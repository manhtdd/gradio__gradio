import{a as D}from"./Tabs-DmAVZe52.js";import E from"./Index-u7CI81_l.js";import"./index-6jqsFzvP.js";import"./svelte/svelte.js";import"./Index-BXfYA563.js";const{SvelteComponent:M,attr:b,component_subscribe:S,create_component:z,create_slot:F,destroy_component:G,detach:H,element:J,flush:d,get_all_dirty_from_scope:K,get_slot_changes:L,init:N,insert:O,mount_component:P,safe_not_equal:Q,set_style:k,transition_in:q,transition_out:I,update_slot_base:R}=window.__gradio__svelte__internal,{getContext:U,onMount:V,createEventDispatcher:W,tick:X}=window.__gradio__svelte__internal;function Y(l){let e;const s=l[11].default,t=F(s,l,l[12],null);return{c(){t&&t.c()},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&4096)&&R(t,s,i,i[12],e?L(s,i[12],n,null):K(i[12]),null)},i(i){e||(q(t,i),e=!0)},o(i){I(t,i),e=!1},d(i){t&&t.d(i)}}}function Z(l){let e,s,t,i;return s=new E({props:{$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){e=J("div"),z(s.$$.fragment),b(e,"id",l[0]),b(e,"class",t="tabitem "+l[1].join(" ")+" svelte-tcemt9"),b(e,"role","tabpanel"),k(e,"display",l[4]===l[2]&&l[3]?"block":"none")},m(n,c){O(n,e,c),P(s,e,null),i=!0},p(n,[c]){const o={};c&4096&&(o.$$scope={dirty:c,ctx:n}),s.$set(o),(!i||c&1)&&b(e,"id",n[0]),(!i||c&2&&t!==(t="tabitem "+n[1].join(" ")+" svelte-tcemt9"))&&b(e,"class",t),c&28&&k(e,"display",n[4]===n[2]&&n[3]?"block":"none")},i(n){i||(q(s.$$.fragment,n),i=!0)},o(n){I(s.$$.fragment,n),i=!1},d(n){n&&H(e),G(s)}}}function $(l,e,s){let t,i,{$$slots:n={},$$scope:c}=e,{elem_id:o=""}=e,{elem_classes:g=[]}=e,{name:r}=e,{id:u={}}=e,{visible:f}=e,{interactive:h}=e;const _=W(),{register_tab:A,unregister_tab:B,selected_tab:w,selected_tab_index:C}=U(D);S(l,w,a=>s(4,i=a)),S(l,C,a=>s(10,t=a));let v;return V(()=>()=>B({name:r,id:u,elem_id:o})),l.$$set=a=>{"elem_id"in a&&s(0,o=a.elem_id),"elem_classes"in a&&s(1,g=a.elem_classes),"name"in a&&s(7,r=a.name),"id"in a&&s(2,u=a.id),"visible"in a&&s(3,f=a.visible),"interactive"in a&&s(8,h=a.interactive),"$$scope"in a&&s(12,c=a.$$scope)},l.$$.update=()=>{l.$$.dirty&397&&s(9,v=A({name:r,id:u,elem_id:o,visible:f,interactive:h})),l.$$.dirty&1664&&t===v&&X().then(()=>_("select",{value:r,index:v}))},[o,g,u,f,i,w,C,r,h,v,t,n,c]}class y extends M{constructor(e){super(),N(this,e,$,Z,Q,{elem_id:0,elem_classes:1,name:7,id:2,visible:3,interactive:8})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),d()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),d()}get name(){return this.$$.ctx[7]}set name(e){this.$$set({name:e}),d()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),d()}get visible(){return this.$$.ctx[3]}set visible(e){this.$$set({visible:e}),d()}get interactive(){return this.$$.ctx[8]}set interactive(e){this.$$set({interactive:e}),d()}}const{SvelteComponent:x,create_component:p,create_slot:ee,destroy_component:te,flush:m,get_all_dirty_from_scope:ie,get_slot_changes:se,init:ne,mount_component:le,safe_not_equal:_e,transition_in:j,transition_out:T,update_slot_base:ae}=window.__gradio__svelte__internal;function ce(l){let e;const s=l[7].default,t=ee(s,l,l[9],null);return{c(){t&&t.c()},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&512)&&ae(t,s,i,i[9],e?se(s,i[9],n,null):ie(i[9]),null)},i(i){e||(j(t,i),e=!0)},o(i){T(t,i),e=!1},d(i){t&&t.d(i)}}}function oe(l){let e,s;return e=new y({props:{elem_id:l[0],elem_classes:l[1],name:l[2],visible:l[5],interactive:l[6],id:l[3],$$slots:{default:[ce]},$$scope:{ctx:l}}}),e.$on("select",l[8]),{c(){p(e.$$.fragment)},m(t,i){le(e,t,i),s=!0},p(t,[i]){const n={};i&1&&(n.elem_id=t[0]),i&2&&(n.elem_classes=t[1]),i&4&&(n.name=t[2]),i&32&&(n.visible=t[5]),i&64&&(n.interactive=t[6]),i&8&&(n.id=t[3]),i&512&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function re(l,e,s){let{$$slots:t={},$$scope:i}=e,{elem_id:n=""}=e,{elem_classes:c=[]}=e,{label:o}=e,{id:g}=e,{gradio:r}=e,{visible:u=!0}=e,{interactive:f=!0}=e;const h=({detail:_})=>r.dispatch("select",_);return l.$$set=_=>{"elem_id"in _&&s(0,n=_.elem_id),"elem_classes"in _&&s(1,c=_.elem_classes),"label"in _&&s(2,o=_.label),"id"in _&&s(3,g=_.id),"gradio"in _&&s(4,r=_.gradio),"visible"in _&&s(5,u=_.visible),"interactive"in _&&s(6,f=_.interactive),"$$scope"in _&&s(9,i=_.$$scope)},[n,c,o,g,r,u,f,t,h,i]}class he extends x{constructor(e){super(),ne(this,e,re,oe,_e,{elem_id:0,elem_classes:1,label:2,id:3,gradio:4,visible:5,interactive:6})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),m()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),m()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),m()}get id(){return this.$$.ctx[3]}set id(e){this.$$set({id:e}),m()}get gradio(){return this.$$.ctx[4]}set gradio(e){this.$$set({gradio:e}),m()}get visible(){return this.$$.ctx[5]}set visible(e){this.$$set({visible:e}),m()}get interactive(){return this.$$.ctx[6]}set interactive(e){this.$$set({interactive:e}),m()}}export{he as default};
//# sourceMappingURL=Index-gzS2MrAP.js.map
