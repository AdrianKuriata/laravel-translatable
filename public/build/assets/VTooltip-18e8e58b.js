import{n as Ce,t as y,c as k,r as P,L as B,ah as xt,a4 as kt,ab as G,ad as re,ae as Te,W as Be,b as H,ai as Fe,p as q,K as j,i as Re,a5 as ie,aj as wt,g as se,ak as ze,ac as M,al as Ot,am as ce,U as _t,an as At,ao as Le,ap as Pt,o as Ct,a as Ne,d as Tt,M as Bt,q as Ft,v as He,z as Me,s as Rt,u as zt,w as Lt,A as D,aq as ue,ar as Nt,y as Ht,a8 as Mt,as as It,e as Vt,__tla as Wt}from"./app-863aaf36.js";import{l as Ie,n as Ve,a as Z,I as jt,o as We,M as U,p as je,q as ve,r as de,s as De,B as fe,t as qe,v as $e,w as Dt,e as qt,x as $t,y as Gt,z as Ut,A as Yt,C as Kt,__tla as Xt}from"./forwardRefs-f7189e1d.js";let Ge,Ue,J,me,pe,Q,ee,Zt=Promise.all([(()=>{try{return Wt}catch{}})(),(()=>{try{return Xt}catch{}})()]).then(async()=>{function ge(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Ye(e){for(;e;){if(te(e))return e;e=e.parentElement}return document.scrollingElement}function Y(e,t){const o=[];if(t&&e&&!t.contains(e))return o;for(;e&&(te(e)&&o.push(e),e!==t);)e=e.parentElement;return o}function te(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ke(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function Xe(e){return{aspectStyles:k(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}let ye;ye=Ce({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ie()},setup(e,t){let{slots:o}=t;const{aspectStyles:a}=Xe(e),{dimensionStyles:r}=Ve(e);return Z(()=>{var n;return y("div",{class:"v-responsive",style:r.value},[y("div",{class:"v-responsive__sizer",style:a.value},null),(n=o.additional)==null?void 0:n.call(o),o.default&&y("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),Ge=Ce({name:"VImg",directives:{intersect:jt},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...We()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:o,slots:a}=t;const r=P(""),n=P(),l=P(e.eager?"loading":"idle"),i=P(),v=P(),s=k(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),u=k(()=>s.value.aspect||i.value/v.value||0);B(()=>e.src,()=>{g(l.value!=="idle")}),B(u,(b,_)=>{!b&&_&&n.value&&S(n.value)}),xt(()=>g());function g(b){if(!(e.eager&&b)&&!(kt&&!b&&!e.eager)){if(l.value="loading",s.value.lazySrc){const _=new Image;_.src=s.value.lazySrc,S(_,null)}s.value.src&&G(()=>{var _,m;if(o("loadstart",((_=n.value)==null?void 0:_.currentSrc)||s.value.src),(m=n.value)!=null&&m.complete){if(n.value.naturalWidth||d(),l.value==="error")return;u.value||S(n.value,null),h()}else u.value||S(n.value),f()})}}function h(){var b;f(),l.value="loaded",o("load",((b=n.value)==null?void 0:b.currentSrc)||s.value.src)}function d(){var b;l.value="error",o("error",((b=n.value)==null?void 0:b.currentSrc)||s.value.src)}function f(){const b=n.value;b&&(r.value=b.currentSrc||b.src)}let C=-1;function S(b){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(C);const{naturalHeight:O,naturalWidth:p}=b;O||p?(i.value=p,v.value=O):!b.complete&&l.value==="loading"&&_!=null?C=window.setTimeout(m,_):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(i.value=1,v.value=1)};m()}const w=k(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var b;if(!s.value.src||l.value==="idle")return null;const _=y("img",{class:["v-img__img",w.value],src:s.value.src,srcset:s.value.srcset,alt:"",sizes:e.sizes,ref:n,onLoad:h,onError:d},null),m=(b=a.sources)==null?void 0:b.call(a);return y(U,{transition:e.transition,appear:!0},{default:()=>[re(m?y("picture",{class:"v-img__picture"},[m,_]):_,[[Fe,l.value==="loaded"]])]})},c=()=>y(U,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&y("img",{class:["v-img__img","v-img__img--preload",w.value],src:s.value.lazySrc,alt:""},null)]}),F=()=>a.placeholder?y(U,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!a.error)&&y("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,I=()=>a.error?y(U,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&y("div",{class:"v-img__error"},[a.error()])]}):null,V=()=>e.gradient?y("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=P(!1);{const b=B(u,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),b())})}return Z(()=>re(y(ye,{class:["v-img",{"v-img--booting":!W.value}],style:{width:H(e.width==="auto"?i.value:e.width)},aspectRatio:u.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>y(Be,null,[y(E,null,null),y(c,null,null),y(V,null,null),y(F,null,null),y(I,null,null)]),default:a.default}),[[Te("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:r,image:n,state:l,naturalWidth:i,naturalHeight:v}}});const Ze=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Je(e,t){const o={},a=r=>()=>{if(!j)return Promise.resolve(!0);const n=r==="openDelay";return o.closeDelay&&window.clearTimeout(o.closeDelay),delete o.closeDelay,o.openDelay&&window.clearTimeout(o.openDelay),delete o.openDelay,new Promise(l=>{const i=parseInt(e[r]??0,10);o[r]=window.setTimeout(()=>{t==null||t(n),l(n)},i)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}let he;me=Symbol.for("vuetify:v-menu"),he=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ze()},"v-overlay-activator");function Qe(e,t){let{isActive:o,isTop:a}=t;const r=P();let n=!1,l=!1,i=!0;const v=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),s=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!v.value),{runOpenDelay:u,runCloseDelay:g}=Je(e,c=>{c===(e.openOnHover&&n||v.value&&l)&&!(e.openOnHover&&o.value&&!a.value)&&(o.value!==c&&(i=!0),o.value=c)}),h={click:c=>{c.stopPropagation(),r.value=c.currentTarget||c.target,o.value=!o.value},mouseenter:c=>{n=!0,r.value=c.currentTarget||c.target,u()},mouseleave:c=>{n=!1,g()},focus:c=>{Ot&&!c.target.matches(":focus-visible")||(l=!0,c.stopPropagation(),r.value=c.currentTarget||c.target,u())},blur:c=>{l=!1,c.stopPropagation(),g()}},d=k(()=>{const c={};return s.value&&(c.click=h.click),e.openOnHover&&(c.mouseenter=h.mouseenter,c.mouseleave=h.mouseleave),v.value&&(c.focus=h.focus,c.blur=h.blur),c}),f=k(()=>{const c={};if(e.openOnHover&&(c.mouseenter=()=>{n=!0,u()},c.mouseleave=()=>{n=!1,g()}),e.closeOnContentClick){const F=Re(me,null);c.click=()=>{o.value=!1,F==null||F.closeParents()}}return c}),C=k(()=>{const c={};return e.openOnHover&&(c.mouseenter=()=>{i&&(n=!0,i=!1,u())},c.mouseleave=()=>{n=!1,g()}),c});B(a,c=>{c&&(e.openOnHover&&!n&&(!v.value||!l)||v.value&&!l&&(!e.openOnHover||!n))&&(o.value=!1)});const S=P();ie(()=>{S.value&&G(()=>{const c=S.value;r.value=wt(c)?c.$el:c})});const w=se("useActivator");let E;return B(()=>!!e.activator,c=>{c&&j?(E=ze(),E.run(()=>{et(e,w,{activatorEl:r,activatorEvents:d})})):E&&E.stop()},{flush:"post",immediate:!0}),M(()=>{var c;(c=E)==null||c.stop()}),{activatorEl:r,activatorRef:S,activatorEvents:d,contentEvents:f,scrimEvents:C}}function et(e,t,o){let{activatorEl:a,activatorEvents:r}=o;B(()=>e.activator,(v,s)=>{if(s&&v!==s){const u=i(s);u&&l(u)}v&&G(()=>n())},{immediate:!0}),B(()=>e.activatorProps,()=>{n()}),M(()=>{l()});function n(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&(Object.entries(r.value).forEach(u=>{let[g,h]=u;v.addEventListener(g,h)}),Object.keys(s).forEach(u=>{s[u]==null?v.removeAttribute(u):v.setAttribute(u,s[u])}))}function l(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&(Object.entries(r.value).forEach(u=>{let[g,h]=u;v.removeEventListener(g,h)}),Object.keys(s).forEach(u=>{v.removeAttribute(u)}))}function i(){var v;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(s)if(s==="parent"){var g,h;let d=t==null||(g=t.proxy)==null||(h=g.$el)==null?void 0:h.parentNode;for(;d.hasAttribute("data-no-activator");)d=d.parentNode;u=d}else typeof s=="string"?u=document.querySelector(s):"$el"in s?u=s.$el:u=s;return a.value=((v=u)==null?void 0:v.nodeType)===Node.ELEMENT_NODE?u:null,a.value}}const tt=q({eager:Boolean},"lazy");function ot(e,t){const o=P(!1),a=k(()=>o.value||e.eager||t.value);B(t,()=>o.value=!0);function r(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:a,onAfterLeave:r}}function oe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function at(e,t){return{x:e.x-t.x,y:e.y-t.y}}function be(e,t){if(e.side==="top"||e.side==="bottom"){const{side:o,align:a}=e,r=a==="left"?0:a==="center"?t.width/2:a==="right"?t.width:a,n=o==="top"?0:o==="bottom"?t.height:o;return oe({x:r,y:n},t)}else if(e.side==="left"||e.side==="right"){const{side:o,align:a}=e,r=o==="left"?0:o==="right"?t.width:o,n=a==="top"?0:a==="center"?t.height/2:a==="bottom"?t.height:a;return oe({x:r,y:n},t)}return oe({x:t.width/2,y:t.height/2},t)}const Se={static:rt,connected:st},nt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Se},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function lt(e,t){const o=P({}),a=P();j&&(ce(()=>!!(t.isActive.value&&e.locationStrategy),n=>{if(B(()=>e.locationStrategy,n),M(()=>{a.value=void 0}),typeof e.locationStrategy=="function"){var l;a.value=(l=e.locationStrategy(t,e,o))==null?void 0:l.updateLocation}else{var i;a.value=(i=Se[e.locationStrategy](t,e,o))==null?void 0:i.updateLocation}}),window.addEventListener("resize",r,{passive:!0}),M(()=>{window.removeEventListener("resize",r),a.value=void 0}));function r(n){var l;(l=a.value)==null||l.call(a,n)}return{contentStyles:o,updateLocation:a}}function rt(){}function it(e){const t=Dt(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function st(e,t,o){Ke(e.activatorEl.value)&&Object.assign(o.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:r}=_t(()=>{const d=je(t.location,e.isRtl.value),f=t.origin==="overlap"?d:t.origin==="auto"?ve(d):je(t.origin,e.isRtl.value);return d.side===f.side&&d.align===de(f).align?{preferredAnchor:De(d),preferredOrigin:De(f)}:{preferredAnchor:d,preferredOrigin:f}}),[n,l,i,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const f=parseFloat(t[d]);return isNaN(f)?1/0:f})),s=k(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let u=!1;const g=new ResizeObserver(()=>{u&&h()});B([e.activatorEl,e.contentEl],(d,f)=>{let[C,S]=d,[w,E]=f;w&&g.unobserve(w),C&&g.observe(C),E&&g.unobserve(E),S&&g.observe(S)},{immediate:!0}),M(()=>{g.disconnect()});function h(){if(u=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>u=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),f=it(e.contentEl.value),C=Y(e.contentEl.value),S=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=C.reduce((m,O)=>{const p=O.getBoundingClientRect(),x=new fe({x:O===document.documentElement?0:p.x,y:O===document.documentElement?0:p.y,width:O.clientWidth,height:O.clientHeight});return m?new fe({x:Math.max(m.left,x.left),y:Math.max(m.top,x.top),width:Math.min(m.right,x.right)-Math.max(m.left,x.left),height:Math.min(m.bottom,x.bottom)-Math.max(m.top,x.top)}):x},void 0);w.x+=S,w.y+=S,w.width-=S*2,w.height-=S*2;let E={anchor:a.value,origin:r.value};function c(m){const O=new fe(f),p=be(m.anchor,d),x=be(m.origin,O);let{x:N,y:R}=at(p,x);switch(m.anchor.side){case"top":R-=s.value[0];break;case"bottom":R+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(m.anchor.align){case"top":R-=s.value[1];break;case"bottom":R+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return O.x+=N,O.y+=R,O.width=Math.min(O.width,i.value),O.height=Math.min(O.height,v.value),{overflows:$e(O,w),x:N,y:R}}let F=0,I=0;const V={x:0,y:0},W={x:!1,y:!1};let b=-1;for(;;){if(b++>10){At("Infinite loop detected in connectedLocationStrategy");break}const{x:m,y:O,overflows:p}=c(E);F+=m,I+=O,f.x+=m,f.y+=O;{const x=qe(E.anchor),N=p.x.before||p.x.after,R=p.y.before||p.y.after;let X=!1;if(["x","y"].forEach(T=>{if(T==="x"&&N&&!W.x||T==="y"&&R&&!W.y){const z={anchor:{...E.anchor},origin:{...E.origin}},A=T==="x"?x==="y"?de:ve:x==="y"?ve:de;z.anchor=A(z.anchor),z.origin=A(z.origin);const{overflows:L}=c(z);(L[T].before<=p[T].before&&L[T].after<=p[T].after||L[T].before+L[T].after<(p[T].before+p[T].after)/2)&&(E=z,X=W[T]=!0)}}),X)continue}p.x.before&&(F+=p.x.before,f.x+=p.x.before),p.x.after&&(F-=p.x.after,f.x-=p.x.after),p.y.before&&(I+=p.y.before,f.y+=p.y.before),p.y.after&&(I-=p.y.after,f.y-=p.y.after);{const x=$e(f,w);V.x=w.width-x.x.before-x.x.after,V.y=w.height-x.y.before-x.y.after,F+=x.x.before,f.x+=x.x.before,I+=x.y.before,f.y+=x.y.before}break}const _=qe(E.anchor);return Object.assign(o.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:H(Ee(I)),left:H(Ee(F)),minWidth:H(_==="y"?Math.min(n.value,d.width):n.value),maxWidth:H(xe(Le(V.x,n.value===1/0?0:n.value,i.value))),maxHeight:H(xe(Le(V.y,l.value===1/0?0:l.value,v.value)))}),{available:V,contentBox:f}}return B(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>h()),G(()=>{const d=h();if(!d)return;const{available:f,contentBox:C}=d;C.height>f.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function Ee(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ae=!0;const K=[];function ct(e){!ae||K.length?(K.push(e),ne()):(ae=!1,e(),ne())}let ke=-1;function ne(){cancelAnimationFrame(ke),ke=requestAnimationFrame(()=>{const e=K.shift();e&&e(),K.length?ne():ae=!0})}const le={none:null,close:dt,block:ft,reposition:mt},ut=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in le}},"v-overlay-scroll-strategies");function vt(e,t){if(!j)return;let o;ie(async()=>{var a;(a=o)==null||a.stop(),t.isActive.value&&e.scrollStrategy&&(o=ze(),await G(),o.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e,o);else{var r;(r=le[e.scrollStrategy])==null||r.call(le,t,e,o)}}))}),M(()=>{var a;(a=o)==null||a.stop()})}function dt(e){function t(o){e.isActive.value=!1}we(e.activatorEl.value??e.contentEl.value,t)}function ft(e,t){var o;const a=(o=e.root.value)==null?void 0:o.offsetParent,r=[...new Set([...Y(e.activatorEl.value,t.contained?a:void 0),...Y(e.contentEl.value,t.contained?a:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),n=window.innerWidth-document.documentElement.offsetWidth,l=(i=>te(i)&&i)(a||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),r.forEach((i,v)=>{i.style.setProperty("--v-body-scroll-x",H(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",H(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",H(n)),i.classList.add("v-overlay-scroll-blocked")}),M(()=>{r.forEach((i,v)=>{const s=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-s,i.scrollTop=-u}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function mt(e,t,o){let a=!1,r=-1,n=-1;function l(i){ct(()=>{var v,s;const u=performance.now();(v=(s=e.updateLocation).value)==null||v.call(s,i),a=(performance.now()-u)/(1e3/60)>2})}n=requestIdleCallback(()=>{o.run(()=>{we(e.activatorEl.value??e.contentEl.value,i=>{a?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),M(()=>{cancelIdleCallback(n),cancelAnimationFrame(r)})}function we(e,t){const o=[document,...Y(e)];o.forEach(a=>{a.addEventListener("scroll",t,{passive:!0})}),M(()=>{o.forEach(a=>{a.removeEventListener("scroll",t)})})}function pt(){if(!j)return P(!1);const{ssr:e}=Pt();if(e){const t=P(!1);return Ct(()=>{t.value=!0}),t}else return P(!0)}ee=function(){const t=se("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}};const Oe=Symbol.for("vuetify:stack"),$=Ne([]);function gt(e,t,o){const a=se("useStack"),r=!o,n=Re(Oe,void 0),l=Ne({activeChildren:new Set});Tt(Oe,l);const i=P(+t.value);ce(e,()=>{var u;const g=(u=$.at(-1))==null?void 0:u[1];i.value=g?g+10:+t.value,r&&$.push([a.uid,i.value]),n==null||n.activeChildren.add(a.uid),M(()=>{if(r){const h=$.findIndex(d=>d[0]===a.uid);$.splice(h,1)}n==null||n.activeChildren.delete(a.uid)})});const v=P(!0);r&&ie(()=>{var u;const g=((u=$.at(-1))==null?void 0:u[0])===a.uid;setTimeout(()=>v.value=g)});const s=k(()=>!l.activeChildren.size);return{globalTop:Bt(v),localTop:s,stackStyles:k(()=>({zIndex:i.value}))}}function yt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!j)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(".v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function ht(){return!0}function _e(e,t,o){if(!e||Ae(e,o)===!1)return!1;const a=ge(t);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const r=(typeof o.value=="object"&&o.value.include||(()=>[]))();return r.push(t),!r.some(n=>n==null?void 0:n.contains(e.target))}function Ae(e,t){return(typeof t.value=="object"&&t.value.closeConditional||ht)(e)}function bt(e,t,o){const a=typeof o.value=="function"?o.value:o.value.handler;t._clickOutside.lastMousedownWasOutside&&_e(e,t,o)&&setTimeout(()=>{Ae(e,o)&&a&&a(e)},0)}function Pe(e,t){const o=ge(e);t(document),typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&t(o)}const St={mounted(e,t){const o=r=>bt(r,e,t),a=r=>{e._clickOutside.lastMousedownWasOutside=_e(r,e,t)};Pe(e,r=>{r.addEventListener("click",o,!0),r.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:o,onMousedown:a}},unmounted(e,t){e._clickOutside&&(Pe(e,o=>{var a;if(!o||!((a=e._clickOutside)!=null&&a[t.instance.$.uid]))return;const{onClick:r,onMousedown:n}=e._clickOutside[t.instance.$.uid];o.removeEventListener("click",r,!0),o.removeEventListener("mousedown",n,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Et(e){const{modelValue:t,color:o,...a}=e;return y(Mt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&y("div",D({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}Q=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...he(),...Ie(),...tt(),...nt(),...ut(),...Ft(),...We()},"v-overlay"),J=He()({name:"VOverlay",directives:{ClickOutside:St},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Q()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:o,attrs:a,emit:r}=t;const n=Me(e,"modelValue"),l=k({get:()=>n.value,set:A=>{A&&e.disabled||(n.value=A)}}),{teleportTarget:i}=yt(k(()=>e.attach||e.contained)),{themeClasses:v}=Rt(e),{rtlClasses:s,isRtl:u}=zt(),{hasContent:g,onAfterLeave:h}=ot(e,l),d=qt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:f,localTop:C,stackStyles:S}=gt(l,Lt(e,"zIndex"),e._disableGlobalStack),{activatorEl:w,activatorRef:E,activatorEvents:c,contentEvents:F,scrimEvents:I}=Qe(e,{isActive:l,isTop:C}),{dimensionStyles:V}=Ve(e),W=pt(),{scopeId:b}=ee();B(()=>e.disabled,A=>{A&&(l.value=!1)});const _=P(),m=P(),{contentStyles:O,updateLocation:p}=lt(e,{isRtl:u,contentEl:m,activatorEl:w,isActive:l});vt(e,{root:_,contentEl:m,activatorEl:w,isActive:l,updateLocation:p});function x(A){r("click:outside",A),e.persistent?z():l.value=!1}function N(){return l.value&&f.value}j&&B(l,A=>{A?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0});function R(A){A.key==="Escape"&&f.value&&(e.persistent?z():l.value=!1)}const X=$t();ce(()=>e.closeOnBack,()=>{Yt(X,A=>{f.value&&l.value?(A(!1),e.persistent?z():l.value=!1):A()})});const T=P();B(()=>l.value&&(e.absolute||e.contained)&&i.value==null,A=>{if(A){const L=Ye(_.value);L&&L!==document.scrollingElement&&(T.value=L.scrollTop)}});function z(){e.noClickAnimation||m.value&&Gt(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ut})}return Z(()=>{var A,L;return y(Be,null,[(A=o.activator)==null?void 0:A.call(o,{isActive:l.value,props:D({ref:E},ue(c.value),e.activatorProps)}),W.value&&y(Nt,{disabled:!i.value,to:i.value},{default:()=>[g.value&&y("div",D({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},v.value,s.value],style:[S.value,{top:H(T.value)}],ref:_},b,a),[y(Et,D({color:d,modelValue:l.value&&!!e.scrim},ue(I.value)),null),y(U,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>[re(y("div",D({ref:m,class:["v-overlay__content",e.contentClass],style:[V.value,O.value]},ue(F.value),e.contentProps),[(L=o.default)==null?void 0:L.call(o,{isActive:l})]),[[Fe,l.value],[Te("click-outside"),{handler:x,closeConditional:N,include:()=>[w.value]}]])]})])]})])}),{activatorEl:w,animateClick:z,contentEl:m,globalTop:f,localTop:C,updateLocation:p}}}),pe=function(t){return Ht(t,Object.keys(J.props))},Ue=He()({name:"VTooltip",props:{id:String,text:String,...It(Q({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const a=Me(e,"modelValue"),{scopeId:r}=ee(),n=Vt(),l=k(()=>e.id||`v-tooltip-${n}`),i=P(),v=k(()=>e.location.split(" ").length>1?e.location:e.location+" center"),s=k(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),u=k(()=>e.transition?e.transition:a.value?"scale-transition":"fade-transition"),g=k(()=>D({"aria-describedby":l.value},e.activatorProps));return Z(()=>{const[h]=pe(e);return y(J,D({ref:i,class:["v-tooltip"],id:l.value},h,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,transition:u.value,absolute:!0,location:v.value,origin:s.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:g.value,_disableGlobalStack:!0},r),{activator:o.activator,default:function(){for(var d,f=arguments.length,C=new Array(f),S=0;S<f;S++)C[S]=arguments[S];return((d=o.default)==null?void 0:d.call(o,...C))??e.text}})}),Kt({},i)}})});export{Ge as V,Zt as __tla,Ue as a,J as b,me as c,pe as f,Q as m,ee as u};
