const f="modulepreload",p=function(r){return"/"+r},c={},s=function(o,e,t){if(!e||e.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=p(i),i in c)return;c[i]=!0;const l=i.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!t)for(let u=n.length-1;u>=0;u--){const a=n[u];if(a.href===i&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const _=document.createElement("link");if(_.rel=l?"stylesheet":f,l||(_.as="script",_.crossOrigin=""),_.href=i,document.head.appendChild(_),l)return new Promise((u,a)=>{_.addEventListener("load",u),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o())},b={path:"/main/analysis/dashboard",component:()=>s(()=>import("./index-679a1410.js"),["assets/index-679a1410.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-ce2607da.css"]),meta:{title:"商品统计"}},h=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),y={path:"/main/analysis/overview",component:()=>s(()=>import("./index-51ba6eaa.js"),["assets/index-51ba6eaa.js","assets/index-edb7a26d.js","assets/index-320edd99.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/index-3f986f63.js"]),meta:{title:"核心技术"}},g=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),v={path:"/main/product/category",component:()=>s(()=>import("./index-c81e02dc.js"),["assets/index-c81e02dc.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/runtime-core.esm-bundler-e80ae98b.js"]),meta:{title:"商品类别"}},O=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),P={path:"/main/product/goods",component:()=>s(()=>import("./index-d2089576.js"),["assets/index-d2089576.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/runtime-core.esm-bundler-e80ae98b.js"])},T=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),E={path:"/main/story/chat",component:()=>s(()=>import("./index-994d0881.js"),["assets/index-994d0881.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/runtime-core.esm-bundler-e80ae98b.js"]),meta:{title:"你的故事"}},S=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),j={path:"/main/story/list",component:()=>s(()=>import("./index-153e6f28.js"),["assets/index-153e6f28.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/runtime-core.esm-bundler-e80ae98b.js"]),meta:{title:"故事列表"}},x=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),R={path:"/main/system/department",component:()=>s(()=>import("./index-186c6eb8.js"),["assets/index-186c6eb8.js","assets/usePageModal-2e6e4e20.js","assets/base-5abc892d.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/base-3111e043.css","assets/el-button-9b3b308d.js","assets/el-button-2cb60ae5.css","assets/el-message-cfa4b0b8.js","assets/config-provider-04140dd0.js","assets/el-message-003737a2.css","assets/el-col-1cb83c9b.js","assets/el-overlay-f2a1ea88.js","assets/el-tooltip-9505b920.js","assets/el-tooltip-f394526f.css","assets/index-320edd99.js","assets/_commonjsHelpers-edff4021.js","assets/el-overlay-053ade57.css","assets/vnode-147aa581.js","assets/refs-2b393c62.js","assets/el-col-6b49831e.css","assets/index-83542812.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/page-modal.vue_vue_type_style_index_0_scoped_d19b8773_lang-25079ebe.js","assets/page-modal-14f14e61.css","assets/usePageModal-2daa1433.css","assets/index-3f986f63.js","assets/index-666b5cd7.css"])},L=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),M={path:"/main/system/menu",component:()=>s(()=>import("./index-76d4d44c.js"),["assets/index-76d4d44c.js","assets/page-modal.vue_vue_type_style_index_0_scoped_d19b8773_lang-25079ebe.js","assets/base-5abc892d.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/base-3111e043.css","assets/el-overlay-f2a1ea88.js","assets/el-button-9b3b308d.js","assets/el-button-2cb60ae5.css","assets/el-tooltip-9505b920.js","assets/el-tooltip-f394526f.css","assets/el-message-cfa4b0b8.js","assets/config-provider-04140dd0.js","assets/el-message-003737a2.css","assets/index-320edd99.js","assets/_commonjsHelpers-edff4021.js","assets/el-overlay-053ade57.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/page-modal-14f14e61.css"])},I=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),$={path:"/main/system/role",component:()=>s(()=>import("./index-bdd4ba7e.js"),["assets/index-bdd4ba7e.js","assets/base-5abc892d.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/base-3111e043.css","assets/el-message-cfa4b0b8.js","assets/el-button-9b3b308d.js","assets/el-button-2cb60ae5.css","assets/config-provider-04140dd0.js","assets/el-message-003737a2.css","assets/page-modal.vue_vue_type_style_index_0_scoped_d19b8773_lang-25079ebe.js","assets/el-overlay-f2a1ea88.js","assets/el-tooltip-9505b920.js","assets/el-tooltip-f394526f.css","assets/index-320edd99.js","assets/_commonjsHelpers-edff4021.js","assets/el-overlay-053ade57.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/page-modal-14f14e61.css","assets/usePageModal-2e6e4e20.js","assets/el-col-1cb83c9b.js","assets/vnode-147aa581.js","assets/refs-2b393c62.js","assets/el-col-6b49831e.css","assets/index-83542812.js","assets/usePageModal-2daa1433.css","assets/index-3f986f63.js","assets/index-e8442bce.js","assets/index-ffd66896.css"])},z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),A={path:"/main/system/user",component:()=>s(()=>import("./index-e303dd3e.js"),["assets/index-e303dd3e.js","assets/base-5abc892d.js","assets/runtime-core.esm-bundler-e80ae98b.js","assets/base-3111e043.css","assets/el-button-9b3b308d.js","assets/el-button-2cb60ae5.css","assets/el-message-cfa4b0b8.js","assets/config-provider-04140dd0.js","assets/el-message-003737a2.css","assets/el-col-1cb83c9b.js","assets/el-overlay-f2a1ea88.js","assets/el-tooltip-9505b920.js","assets/el-tooltip-f394526f.css","assets/index-320edd99.js","assets/_commonjsHelpers-edff4021.js","assets/el-overlay-053ade57.css","assets/vnode-147aa581.js","assets/refs-2b393c62.js","assets/el-col-6b49831e.css","assets/index-83542812.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-3f986f63.js","assets/index-79bbd20d.css"])},D=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));function V(){const r=[],o=Object.assign({"../router/main/analysis/dashboard/index.ts":h,"../router/main/analysis/overview/index.ts":g,"../router/main/product/category/index.ts":O,"../router/main/product/goods/index.ts":T,"../router/main/story/chat/index.ts":S,"../router/main/story/list/index.ts":x,"../router/main/system/department/index.ts":L,"../router/main/system/menu/index.ts":I,"../router/main/system/role/role.ts":z,"../router/main/system/user/index.ts":D});for(const e in o){const t=o[e];r.push(t.default)}return r}let m=null;function w(r){const o=V(),e=[];for(const t of r)for(const n of t.children){const i=o.find(l=>l.path===n.url);i&&(e.find(l=>l.path===t.url)||e.push({path:t.url,redirect:i.path}),e.push(i)),!m&&i&&(m=n)}return e}function B(r,o){for(const e of o)for(const t of e.children)if(t.url===r)return t}function C(r,o){const e=[];for(const t of o)for(const n of t.children)n.url===r&&(e.push({name:t.name,path:t.url}),e.push({name:n.name,path:n.url}));return e}function G(r){const o=[];function e(t){for(const n of t)n.type===3?o.push(n.permission):e(n.children??[])}return e(r),o}function U(r){const o=[];function e(t){for(const n of t)n.children?e(n.children):o.push(n.id)}return e(r),o}export{s as _,w as a,C as b,B as c,U as d,m as f,G as m};
