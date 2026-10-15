import{$ as e,A as t,C as n,F as r,G as i,H as a,I as o,J as s,K as c,L as l,M as u,N as d,P as f,Q as p,U as m,V as h,W as g,X as _,Y as v,Z as y,_ as b,b as x,d as S,et as C,f as w,g as T,h as E,i as ee,j as D,k as O,l as k,n as te,nt as A,o as j,p as M,q as N,r as P,rt as F,s as ne,t as re,tt as I,u as L,w as R,x as z}from"./index-BFobFpWS.js";function B(){let e=[];return{entries:e,push(t){return e.push(t),t},pop:()=>e.pop(),get last(){return e[e.length-1]},get size(){return e.length},clear(){e.length=0},stepsBackTo(t){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return e.length-n;return 0}}}function V(e,{start:t=0,step:n=.08}={}){let r=new Map;for(let i of e)i.forEach((e,i)=>{let a=t+i*n;(!r.has(e)||a<r.get(e))&&r.set(e,a)});return r}function ie(e,{targets:t,cellAt:n,onHover:r,onPick:i}){let{input:a}=e,o=null,s=NaN,c=NaN,l={enabled:!0,get hovered(){return o},refresh(){s=NaN}},u=()=>{let e=a.pick(t);return e?n(e)??null:null},d=e=>{if(e===o)return;let t=o;o=e,r?.(e,t)};return e.onUpdate(()=>{if(!l.enabled)return d(null);(a.pointer.x!==s||a.pointer.y!==c)&&(s=a.pointer.x,c=a.pointer.y,d(u()))}),a.onClick(e=>{if(!l.enabled||e.button!==0)return;let r=a.pick(t,e),o=r?n(r)??null:null;o!==null&&i?.(o)}),l}function ae(e,t,n,r){let{THREE:i,scene:a}=e,o=new i.InstancedMesh(t,n,r);o.frustumCulled=!1;let s=Array.from({length:r},()=>Object.assign(new i.Object3D,{visible:!1})),c=new i.Matrix4().makeScale(0,0,0),l=()=>{s.forEach((e,t)=>{e.visible?(e.updateMatrix(),o.setMatrixAt(t,e.matrix)):o.setMatrixAt(t,c)}),o.instanceMatrix.needsUpdate=!0};return l(),a.add(o),e.onUpdate(l),{mesh:o,proxies:s,at:e=>s[e],sync:l}}var H=e=>e.userData.pieceAnim??={t:0};function oe(e,t){t.userData.pieceAnim&&e.fx.cancelTweens(t.userData.pieceAnim),delete t.userData.pieceAnim}function se(e,t,{up:n,drop:r=.8,duration:i=.32,delay:a=0}={}){let{THREE:o,fx:s}=e;oe(e,t);let c=t.position.clone(),l=t.scale.clone(),u=n??new o.Vector3(0,1,0),d=H(t);return d.t=0,t.visible=a<=0,t.position.copy(c).addScaledVector(u,r),s.tween(d,{t:1},{duration:i,delay:a,ease:`linear`,onUpdate:()=>{t.visible=!0;let e=d.t;t.position.copy(c).addScaledVector(u,r*(1-e*e));let n=e>.8?Math.sin((e-.8)/.2*Math.PI)*.35:0;t.scale.set(l.x*(1+n*.5),l.y*(1-n),l.z*(1+n*.5))}}).then(()=>{t.userData.pieceAnim===d&&(t.position.copy(c),t.scale.copy(l))})}function ce(e,t,{axis:n,up:r,height:i=.6,duration:a=.42,delay:o=0,onFlip:s}={}){let{THREE:c,fx:l}=e;oe(e,t);let u=t.position.clone(),d=t.quaternion.clone(),f=r??new c.Vector3(0,1,0),p=new c.Quaternion,m=H(t);m.t=0;let h=!1;return l.tween(m,{t:1},{duration:a,delay:o,ease:`inOutSine`,onUpdate:()=>{let e=m.t;t.position.copy(u).addScaledVector(f,Math.sin(e*Math.PI)*i),t.quaternion.copy(p.setFromAxisAngle(n,e*Math.PI)).multiply(d),!h&&e>=.5&&(h=!0,s?.())}}).then(()=>{t.userData.pieceAnim===m&&(t.position.copy(u),t.quaternion.copy(p.setFromAxisAngle(n,Math.PI)).multiply(d))})}var le=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]],ue=[`tectonic`,`holes`,`nova`,`night`],U=e=>3-e,W=(e,t,n=16)=>e*n+(t%n+n)%n,G=(e,t=16)=>Math.floor(e/t),K=(e,t=16)=>e%t;function de(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function q(e=8,t=16){let n=e/2-1,r=t/2-1;return[[n,r,2],[n,r+1,1],[n+1,r,1],[n+1,r+1,2]]}function fe(e,t,n){let{rows:r,cols:i,cells:a}=e,o=[],s=(e,t)=>{let n=Math.abs(G(e,i)-G(t,i)),r=Math.abs(K(e,i)-K(t,i));return n<=1&&Math.min(r,i-r)<=1},c=t=>a[t]!==0||e.stars[t]||o.some(e=>s(t,e))||[...a].some((e,n)=>e!==0&&s(t,n)),l=[];for(let e=0;l.length<t*2&&e<500;e++){let e=1+Math.floor(n()*(r-2)),t=Math.floor(n()*i),a=W(e,t,i),u=W(r-1-e,t+i/2,i);a===u||c(a)||c(u)||s(a,u)||(o.push(a,u),l.push(a,u))}return l}function pe({rows:e=8,cols:t=16,start:n=q(e,t),first:r=1,rules:i={},seed:a=1}={}){let o={rows:e,cols:t,cells:new Int8Array(e*t),stars:new Uint8Array(e*t),current:r,history:B(),ply:0,seed:a>>>0,rules:Object.fromEntries(ue.map(e=>[e,!!i[e]]))};for(let[e,r,i]of n)o.cells[W(e,r,t)]=i;let s=de(o.seed);if(o.rules.holes)for(let e of fe(o,3,s))o.cells[e]=3;if(o.rules.nova)for(let e of fe(o,2,s))o.stars[e]=1;return o.nightOffset=Math.floor(s()*t),o}function J(e){return{...e,cells:e.cells.slice(),stars:e.stars.slice(),rules:{...e.rules},history:B(),_night:null,_moves:null}}var me=(e,t=e.ply)=>(((e.nightOffset??0)+t)%e.cols+e.cols)%e.cols;function he(e,t=e.ply){if(!e.rules?.night)return[];let n=me(e,t);return Array.from({length:5},(t,r)=>(n+r)%e.cols)}function ge(e){if(!e.rules?.night)return null;if(e._night?.ply===e.ply)return e._night.mask;let t=new Uint8Array(e.cols);for(let n of he(e))t[n]=1;return e._night={ply:e.ply,mask:t},t}var _e=(e,t)=>!!ge(e)?.[K(t,e.cols)];function ve(e,t){let n=de((e.seed^Math.imul(t,2654435761))>>>0);return n(),{row:1+Math.floor(n()*(e.rows-2)),k:(n()<.5?-1:1)*(n()<.6?1:2)}}function ye(e){if(!e.rules?.tectonic)return null;let t=Math.floor(e.ply/6)+1;return{...ve(e,t),in:t*6-e.ply,n:t}}function be(e,t,n){let{cols:r}=e,i=t*r,a=e.cells.slice(i,i+r),o=e.stars.slice(i,i+r);for(let t=0;t<r;t++){let s=i+((t+n)%r+r)%r;e.cells[s]=a[t],e.stars[s]=o[t]}}function xe(e,t,n=e.current){let{rows:r,cols:i,cells:a}=e;if(a[t]!==0)return[];let o=ge(e),s=G(t,i),c=K(t,i),l=U(n),u=[];for(let[e,d]of le){let f=[],p=!1,m=s+e,h=c+d;for(;m>=0&&m<r;){let r=W(m,h,i);if(r===t){f.length&&u.push(f);break}let s=a[r];if(s===l)f.push(r),o&&o[K(r,i)]&&(p=!0);else{s===n&&f.length&&!p&&u.push(f);break}m+=e,h+=d}}if(u.length>1){let e=new Set;return u.filter(t=>{let n=[...t].sort((e,t)=>e-t).join(`,`);return!e.has(n)&&e.add(n)})}return u}function Se(e,t,n=e.current){let{rows:r,cols:i,cells:a}=e;if(a[t]!==0)return!1;let o=ge(e),s=G(t,i),c=K(t,i),l=U(n);for(let[e,u]of le){let d=s+e,f=c+u,p=0,m=!1;for(;d>=0&&d<r;){let r=W(d,f,i);if(r===t){if(p>0)return!0;break}let s=a[r];if(s===l)p++,o&&o[K(r,i)]&&(m=!0);else{if(s===n&&p>0&&!m)return!0;break}d+=e,f+=u}}return!1}function Y(e,t=e.current){let n=[];for(let r=0;r<e.cells.length;r++)e.cells[r]===0&&Se(e,r,t)&&n.push(r);return n}function Ce(e,t,n=e.current){let{rows:r,cols:i,cells:a}=e,o=U(n),s=[],c=G(t,i);for(let[n,l]of le){let u=c+n;if(u<0||u>=r)continue;let d=W(u,K(t,i)+l,i);a[d]===o&&!_e(e,d)&&s.push(d)}return s}function we(e){if(e.ply++,!e.rules.tectonic||e.ply%6)return null;let t=ve(e,e.ply/6);return be(e,t.row,t.k),t}function Te(e,t){let n=e.current;if(t===-1){if(Y(e,n).length)return null;e.current=U(n);let t=we(e);return e.history.push({player:n,move:-1,lines:[],flipped:[],nova:[],shift:t})}let r=xe(e,t,n);if(!r.length)return null;let i=[...new Set(r.flat())],a=[],o=!!e.stars[t];o&&(a=Ce(e,t,n).filter(e=>!i.includes(e)),i.push(...a),e.stars[t]=0),e.cells[t]=n;for(let t of i)e.cells[t]=n;e.current=U(n);let s=we(e);return e.history.push({player:n,move:t,lines:r,flipped:i,nova:a,star:o,shift:s})}function X(e){let t=e.history.pop();if(t){if(t.shift&&be(e,t.shift.row,-t.shift.k),e.ply--,t.move!==-1){e.cells[t.move]=0;for(let n of t.flipped)e.cells[n]=U(t.player);t.star&&(e.stars[t.move]=1)}return e.current=t.player,t}}function Ee(e){let t={1:0,2:0};for(let n of e.cells)(n===1||n===2)&&t[n]++;return t}function De(e,t){let n=e.rules.night;e.rules.night=!1;let r=Y(e,t).length;return e.rules.night=n,r}function Oe(e){if(Y(e,1).length||Y(e,2).length)return!1;if(!e.rules.night||!De(e,1)&&!De(e,2))return!0;let t=e.history.entries;return t.length>=e.cols&&t.slice(-e.cols).every(e=>e.move===-1)}function ke(e){let t=Ee(e),n=Oe(e);return{over:n,scores:t,winner:n?t[1]===t[2]?0:t[1]>t[2]?1:2:null}}var Ae=e=>!Y(e).length&&!Oe(e);function*je(e,{moves:t,play:n,undo:r,evaluate:i,isOver:a=()=>!1,depth:o=3,order:s},c){let l=(e,t)=>{let i=n(e,t);return r?e:i};function*u(e,n,o,d){if(c.due()&&(yield),n===0||c.out()||a(e))return i(e);let f=t(e);if(!f.length)return i(e);s&&(f=s(e,f));let p=-1/0;for(let t of f){let i=-(yield*u(l(e,t),n-1,-d,-o));if(r&&r(e,t),i>p&&(p=i),p>o&&(o=p),o>=d)break}return p}let d=t(e);s&&(d=s(e,d));let f=d[0];for(let t=1;t<=o;t++){let n=-1/0,i=d[0];for(let a of d){let o=-(yield*u(l(e,a),t-1,-1/0,1/0));if(r&&r(e,a),c.out())break;o>n&&([n,i]=[o,a])}if(c.out())break;f=i,d=[i,...d.filter(e=>e!==i)]}return f}var Me=()=>new Promise(e=>{if(typeof MessageChannel>`u`)return setTimeout(e,0);let t=new MessageChannel;t.port1.onmessage=()=>(t.port1.close(),e()),t.port2.postMessage(0)});async function Ne(e,{timeLimitMs:t=1e3,sliceMs:n=8,cancelled:r,pause:i=Me,...a}={}){let o=0,s=performance.now(),c=!1,l=je(e,a,{due:()=>performance.now()-s>n,out:()=>c||=o+performance.now()-s>t});for(;;){let e=l.next();if(e.done)return e.value;if(o+=performance.now()-s,await i(),r?.())return;s=performance.now()}}var Pe={easy:{label:`Easy`},medium:{label:`Medium`,depth:2,timeLimitMs:200},hard:{label:`Hard`,depth:12,timeLimitMs:350}},Fe=6,Ie=-3,Le=4,Re=3,ze=1,Be=14,Ve=4,He=1;function Ue(e){return e._moves||={mine:Y(e,e.current),theirs:Y(e,U(e.current))},e._moves}var We=e=>{let t=Ue(e);return t.mine.length||t.theirs.length?!1:(t.over===void 0&&(t.over=Oe(e)),t.over)};function Ge(e,t){let{rows:n,cols:r,cells:i}=e,a=G(t,r);if(a===0||a===n-1)return Fe;let o=1;if(e.rules?.holes){let e=K(t,r);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)i[W(a+t,e+n,r)]===3&&(o+=He)}if(a===1||a===n-2){let e=a===1?0:n-1,s=K(t,r);return i[W(e,s-1,r)]===0||i[W(e,s,r)]===0||i[W(e,s+1,r)]===0?Ie:o}return o}function Ke(e,{mobility:t=!0}={}){let{rows:n,cols:r,cells:i}=e,a=e.current,o=0,s=0,c=0,l=0;for(let u=0;u<i.length;u++){let d=i[u];if(d===0){s++;continue}if(d===3)continue;let f=d===a?1:-1;if(o+=f,c+=f*Ge(e,u),t){let e=G(u,r),t=K(u,r);for(let a=-1;a<=1;a++){let o=e+a;if(!(o<0||o>=n)&&(i[W(o,t-1,r)]===0||i[W(o,t,r)]===0||i[W(o,t+1,r)]===0)){l+=f;break}}}}if(We(e))return o>0?1e4+o:o<0?-1e4+o:0;for(let e of[0,n-1]){let t=!0,n=0;for(let o=0;o<r&&t;o++){let s=i[W(e,o,r)];s===0?t=!1:n+=s===a?1:-1}t&&(c+=n*Le)}let u=c;if(t){let t=Ue(e);if(u+=Re*(t.mine.length-t.theirs.length)-ze*l,e.rules?.nova){for(let n of t.mine)e.stars[n]&&(u+=Ve);for(let n of t.theirs)e.stars[n]&&(u-=Ve)}}return s<=Be&&(u+=o*(15-s)),u}var qe=e=>{let t=Ue(e);return t.mine.length?t.mine:We(e)?[]:[-1]},Je=(e,t)=>{Te(e,t),e._moves=null},Ye=e=>{X(e),e._moves=null};function Xe(e,t,n){if(n()<.35)return t[Math.floor(n()*t.length)];let r=t[0],i=-1/0;for(let a of t){let t=Te(e,a).flipped.length+.3*Ge(e,a)+n()*3;X(e),t>i&&([r,i]=[a,t])}return r}function Ze(e,t,{random:n=Math.random,...r}){let i=J(e),a=Y(i);if(!a.length)return{now:-1};if(a.length===1)return{now:a[0]};if(t===`easy`)return{now:Xe(i,a,n)};let o={...Pe[t]??Pe.hard,...r},s=t!==`medium`,c=(e,t)=>Ge(e,t)+(e.stars[t]?8:0);return{g:i,search:{moves:qe,play:Je,undo:Ye,evaluate:e=>Ke(e,{mobility:s}),isOver:We,order:(e,t)=>t.length<2?t:t.map(t=>[t,c(e,t)]).sort((e,t)=>t[1]-e[1]).map(([e])=>e),depth:o.depth,timeLimitMs:o.timeLimitMs}}}async function Qe(e,t=`hard`,{cancelled:n,sliceMs:r=8,pause:i,...a}={}){let{now:o,g:s,search:c}=Ze(e,t,a);return o===void 0?Ne(s,{...c,cancelled:n,sliceMs:r,...i&&{pause:i}}):o}var $e=`
  uniform vec3 uBase, uNebA, uNebB, uNebC, uGiantDir, uGiantA, uGiantB, uGiantLight;
  uniform float uNebula, uStars, uGiantSize, uSeed;
  varying vec3 vDir;
  
  float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  const mat3 ROT = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64); // rotate octaves: no grid artefacts
  float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 6; i++) { s += a * noise(p); p = ROT * p * 2.03 + 0.7; a *= 0.5; } return s; }

  void main() {
    vec3 d = normalize(vDir);
    vec3 col = uBase;
    vec3 q = d * 2.2 + uSeed;
    // nebula: domain-warped clouds in three colours, brightest along a tilted galactic band
    vec3 w = vec3(fbm(q + 3.1), fbm(q + 7.7), fbm(q + 1.3));
    float n = fbm(q * 1.4 + w * 1.6);
    float bd = dot(d, normalize(vec3(0.25, 1.0, -0.35))) * 2.4;
    float band = exp(-bd * bd); // (pow() of a negative number is NaN in GLSL, and bloom smears NaN everywhere)
    float dust = smoothstep(0.42, 0.9, n) * (0.25 + 0.75 * band);
    vec3 neb = mix(uNebA, uNebB, smoothstep(0.3, 0.7, w.x));
    neb = mix(neb, uNebC, smoothstep(0.55, 0.85, w.y) * 0.8);
    col += neb * dust * uNebula;
    col *= 1.0 - smoothstep(0.55, 0.75, fbm(q * 3.0 + 9.0)) * band * 0.6; // dark dust lanes
    // stars at three scales (hash cells on the sphere); brighter and denser inside the band
    for (int k = 0; k < 3; k++) {
      float sc = 90.0 + float(k) * 140.0;
      vec3 c = d * sc;
      vec3 id = floor(c);
      float h = hash(id + float(k) * 13.0);
      vec3 pos = id + 0.5 + (vec3(hash(id + 1.1), hash(id + 2.2), hash(id + 3.3)) - 0.5) * 0.7;
      float dist = length(c - pos);
      float on = step(1.0 - (0.06 + 0.1 * band) * uStars, h);
      float size = 0.05 + 0.1 * hash(id + 4.4) * (k == 0 ? 2.0 : 1.0);
      vec3 tint = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.85, 0.65), hash(id + 5.5));
      col += tint * on * smoothstep(size, 0.0, dist) * (k == 0 ? 2.2 : 1.1);
    }
    // a distant banded gas giant, lit from one side
    float gd = dot(d, uGiantDir);
    float ang = acos(clamp(gd, -1.0, 1.0));
    if (uGiantSize > 0.0 && ang < uGiantSize * 1.25) {
      vec3 up = normalize(cross(uGiantDir, vec3(0.2, 1.0, 0.1)));
      vec3 rt = cross(up, uGiantDir);
      vec2 p = vec2(dot(d, rt), dot(d, up)) / sin(uGiantSize);
      float r2 = dot(p, p);
      if (r2 < 1.0) {
        vec3 sn = normalize(p.x * rt + p.y * up - sqrt(1.0 - r2) * uGiantDir);
        float lat = p.y * 0.9 + 0.12 * p.x;
        float bands = fbm(vec3(lat * 9.0, lat * 2.0, p.x * 0.6 + uSeed));
        vec3 gc = mix(uGiantA, uGiantB, bands);
        float lit = smoothstep(-0.15, 0.6, dot(sn, uGiantLight));
        float limb = pow(1.0 - sqrt(1.0 - r2), 3.0);
        col = mix(col, gc * (0.03 + lit * 0.9) + uGiantB * limb * lit * 0.6, smoothstep(1.0, 0.985, r2));
      }
      float halo = smoothstep(uGiantSize * 1.25, uGiantSize, ang) * smoothstep(uGiantSize * 0.98, uGiantSize * 1.02, ang);
      col += uGiantB * halo * 0.25 * smoothstep(-0.2, 0.5, dot(normalize(d - uGiantDir), uGiantLight));
    }
    gl_FragColor = vec4(col, 1.0);
  }`;function et(e,{size:t=1024,seed:n=1,base:r=`#020208`,nebula:i=[`#3a1a6a`,`#0f4a6e`,`#8a3a5a`],nebulaStrength:a=.55,stars:o=1,giant:c={dir:[-.6,.18,-.78],size:.16,colors:[`#5a3a6e`,`#d9a07a`],light:[.8,.3,.5]}}={}){let l=e=>new I(...e).normalize(),d={uBase:{value:new M(r)},uNebA:{value:new M(i[0])},uNebB:{value:new M(i[1])},uNebC:{value:new M(i[2])},uNebula:{value:a},uStars:{value:o},uSeed:{value:n*7.31},uGiantDir:{value:l(c?c.dir:[0,1,0])},uGiantSize:{value:c?c.size:0},uGiantA:{value:new M(c?c.colors[0]:`#000`)},uGiantB:{value:new M(c?c.colors[1]:`#000`)},uGiantLight:{value:l(c?c.light:[1,0,0])}},f=new N,p=new s({uniforms:d,side:1,depthWrite:!1,vertexShader:`varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:$e}),m=new u(new j(10,10,10),p);f.add(m);let h=new ee(t,{type:z,generateMipmaps:!0,minFilter:O});return new E(.1,100,h).update(e,f),m.geometry.dispose(),p.dispose(),h.texture}function tt(e,{thickness:t=.12,day:n=`#5fb4ff`,sunset:r=`#ff8a5c`,night:i=`#3a2a7a`,strength:a=1}={}){let o=1+t,c={uDay:{value:new M(n)},uSunset:{value:new M(r)},uNight:{value:new M(i)},uLight:{value:new I(0,1,0)},uLimb:{value:Math.sqrt(1-1/(o*o))},uStrength:{value:a}},l=new u(new v(e*o,96,48),new s({uniforms:c,vertexShader:`
        varying vec3 vNormalV, vViewV, vNormalW;
        void main() {
          vNormalV = normalize(normalMatrix * normal);
          vNormalW = normalize(mat3(modelMatrix) * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vViewV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform vec3 uDay, uSunset, uNight, uLight;
        uniform float uLimb, uStrength;
        varying vec3 vNormalV, vViewV, vNormalW;
        void main() {
          // back faces: 0 at the outer edge of the shell, uLimb where it meets the planet's silhouette
          float t = clamp(-dot(vNormalV, vViewV) / uLimb, 0.0, 1.0);
          float a = pow(t, 2.6);
          float l = dot(vNormalW, uLight);
          vec3 c = mix(uNight * 0.6, uSunset * 0.7, smoothstep(-0.3, -0.02, l));
          c = mix(c, uDay, smoothstep(-0.06, 0.3, l));
          float lit = 0.25 + 0.75 * smoothstep(-0.4, 0.3, l);
          gl_FragColor = vec4(c * a * lit * uStrength, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,side:1,transparent:!0,blending:2,depthWrite:!1}));return l.raycast=()=>{},{mesh:l,uniforms:c,setLight:e=>c.uLight.value.copy(e).normalize(),setColors({day:e,sunset:t,night:n}={}){e&&c.uDay.value.set(e),t&&c.uSunset.value.set(t),n&&c.uNight.value.set(n)}}}function nt(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);if(e===`glow`){let e=n.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(.08,`rgba(255,255,255,0.9)`),e.addColorStop(.25,`rgba(255,255,255,0.25)`),e.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=e,n.fillRect(0,0,256,256)}else if(e===`rays`){n.translate(128,128);for(let e=0;e<14;e++){n.rotate(Math.PI*2/14+e%3*.07);let t=128*(e%2?.55:.95),r=n.createLinearGradient(0,0,t,0);r.addColorStop(0,`rgba(255,255,255,0.7)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.moveTo(0,-2.5),n.lineTo(t,0),n.lineTo(0,2.5),n.fill()}}else if(e===`streak`){let e=n.createLinearGradient(0,0,256,0);e.addColorStop(0,`rgba(255,255,255,0)`),e.addColorStop(.5,`rgba(255,255,255,1)`),e.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=e,n.fillRect(0,125,256,6),n.globalCompositeOperation=`destination-in`;let t=n.createLinearGradient(0,125,0,131);t.addColorStop(0,`rgba(0,0,0,0)`),t.addColorStop(.5,`rgba(0,0,0,1)`),t.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=t,n.fillRect(0,0,256,256)}else{let e=n.createRadialGradient(128,128,70.4,128,128,128);e.addColorStop(0,`rgba(255,255,255,0.05)`),e.addColorStop(.75,`rgba(255,255,255,0.35)`),e.addColorStop(.85,`rgba(255,255,255,0.08)`),e.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=e,n.fillRect(0,0,256,256)}let r=new L(t);return r.colorSpace=c,r}function rt({color:e=`#bcd8ff`,size:n=1,ghosts:r=4}={}){let i=new x;i.renderOrder=10;let a=(e,t,n)=>{let r=new y({map:e,color:t,transparent:!0,opacity:n,depthWrite:!1,depthTest:!1,blending:2,sizeAttenuation:!1,toneMapped:!1}),a=new _(r);return a.userData.opacity=n,a.raycast=()=>{},i.add(a),a},o=a(nt(`glow`),e,1),s=a(nt(`glow`),`#ffffff`,1),c=a(nt(`rays`),e,.55),l=a(nt(`streak`),e,.6),u=nt(`ring`),d=Array.from({length:r},(t,n)=>{let r=a(n%2?u:nt(`glow`),new M(e).offsetHSL(.08*n,0,-.1),.07);return r.userData.t=[.45,.8,1.25,1.7][n%4],r.userData.size=[.05,.12,.035,.09][n%4],r}),f=new I,p=new I,h=new m,g=1;return{group:i,strength:1,update(e,r,{occluder:a,distance:u=80}={}){let m=p.copy(r).normalize().multiplyScalar(u).add(e.position);f.copy(m).project(e);let _=+(f.z<1&&Math.abs(f.x)<1.3&&Math.abs(f.y)<1.3);if(a&&_){h.origin.copy(e.position),h.direction.copy(r).normalize();let n=h.distanceToPoint(a.center);_*=t.smoothstep(n,a.radius*.98,a.radius*1.12)}g+=(_-g)*.15;let v=g*this.strength;if(i.visible=v>.01,!i.visible)return;let y=(t,n,r)=>{p.set(n,r,.5).unproject(e),t.position.copy(p)};for(let e of[o,s,c,l])y(e,f.x,f.y);o.scale.setScalar(.2*n),s.scale.setScalar(.05*n),c.scale.setScalar(.45*n),l.scale.set(1.2*n,.06*n,1);let b=1-Math.min(1,Math.hypot(f.x,f.y)*.6);for(let e of[o,s,c,l])e.material.opacity=e.userData.opacity*v;c.material.rotation=f.x*.6;for(let e of d)y(e,f.x*(1-e.userData.t),f.y*(1-e.userData.t)),e.scale.setScalar(e.userData.size*n),e.material.opacity=e.userData.opacity*v*(.5+b)}}}var it=`
  uniform float uMode, uLatMax, uSeed;
  varying vec2 vUv;
  
  float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  // each octave is rotated, so the noise lattice never lines up into blocky, axis-aligned coastlines
  const mat3 ROT = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);
  // 5 octaves: finer noise than the texture can hold would only alias into blocky pixels
  float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p = ROT * p * 2.02 + 0.37; a *= 0.5; } return s / 0.97; }

  void main() {
    float phi = vUv.x * 6.2831853, theta = (1.0 - vUv.y) * 3.1415927; // same mapping as THREE.SphereGeometry
    vec3 n = vec3(-cos(phi) * sin(theta), cos(theta), sin(phi) * sin(theta));
    float lat = (vUv.y - 0.5) * 3.1415927;
    vec3 p = n * 1.7 + uSeed;
    vec3 w = vec3(fbm(p * 1.2 + 1.7), fbm(p * 1.2 + 9.2), fbm(p * 1.2 + 4.4));
    float h = fbm(p + w * 1.1);
    float ridge = 1.0 - abs(fbm(p * 3.3 + 2.0) * 2.0 - 1.0);
    float sea = 0.5;
    float land = smoothstep(sea - 0.004, sea + 0.012, h); // soft: a hard edge stair-steps when the texture is magnified
    float alt = clamp((h - sea) / 0.2, 0.0, 1.0);
    alt = clamp(alt + ridge * ridge * ridge * 0.45 * smoothstep(0.08, 0.5, alt), 0.0, 1.0);
    float detail = fbm(n * 7.0 + uSeed);
    // the ice cap starts just past the board's edge, with a ragged rim, and never reaches into the board
    float iceLine = uLatMax + 0.035 + 0.06 * fbm(n * 5.0 + 3.0);
    float ice = smoothstep(iceLine, iceLine + 0.02, abs(lat));
    if (uMode < 0.5) {
      float depth = clamp((sea - h) / 0.12, 0.0, 1.0);
      vec3 water = mix(vec3(0.016, 0.085, 0.13), vec3(0.003, 0.016, 0.05), pow(depth, 0.6));
      water = mix(water, vec3(0.035, 0.19, 0.2), smoothstep(0.08, 0.0, depth) * 0.8); // shallow shelves glow teal
      float arid = smoothstep(0.55, 0.05, abs(lat)) * smoothstep(0.45, 0.65, fbm(p * 2.0 + 5.0));
      vec3 low = mix(vec3(0.05, 0.1, 0.045), vec3(0.24, 0.15, 0.07), arid);
      low = mix(low, vec3(0.12, 0.14, 0.11), smoothstep(0.5, 0.95, abs(lat) / uLatMax)); // tundra near the caps
      vec3 col = mix(vec3(0.3, 0.25, 0.16), low, smoothstep(0.0, 0.06, alt)); // beaches
      col = mix(col, vec3(0.13, 0.09, 0.065), smoothstep(0.3, 0.6, alt));
      col = mix(col, vec3(0.2, 0.19, 0.2), smoothstep(0.6, 0.85, alt));
      col = mix(col, vec3(0.55, 0.6, 0.66), smoothstep(0.92, 1.1, alt + detail * 0.08) * 0.5); // snowy peaks
      col *= 0.8 + 0.4 * detail;
      col = mix(water, col, land);
      // polar ice: bright, blue in the cracks
      float crack = smoothstep(0.04, 0.0, abs(fbm(n * 9.0 + 1.0) - 0.5));
      vec3 iceCol = mix(vec3(0.32, 0.42, 0.55), vec3(0.5, 0.6, 0.72), detail) - crack * vec3(0.2, 0.12, 0.04);
      col = mix(col, iceCol, ice);
      gl_FragColor = vec4(col, (1.0 - land) * (1.0 - ice));
    } else {
      // city lights: clusters on habitable lowland, joined by faint roads along coasts
      float lowland = land * smoothstep(0.55, 0.05, alt) * (1.0 - ice);
      float clusters = smoothstep(0.55, 0.8, fbm(n * 7.0 + 11.0));
      float dots = smoothstep(0.6, 0.9, noise(n * 140.0)) + 0.4 * smoothstep(0.7, 0.95, noise(n * 60.0));
      float coast = exp(-abs(h - sea) * 140.0) * 0.5;
      float city = lowland * clusters * dots + land * coast * clusters * dots * 0.6;
      // clouds: long streaks along the latitudes, a few swirls
      vec3 cq = vec3(n.x * 2.4, n.y * 5.5, n.z * 2.4) + uSeed + 20.0;
      vec3 cw = vec3(fbm(cq * 0.7), fbm(cq * 0.7 + 3.0), fbm(cq * 0.7 + 6.0));
      float cl = fbm(cq + cw * 2.2);
      float cloud = smoothstep(0.5, 0.78, cl) * (0.65 + 0.35 * smoothstep(0.2, 0.7, abs(lat)));
      gl_FragColor = vec4(alt * land, min(city, 1.0), cloud, 1.0);
    }
  }`;function at(e,{size:t=2048,latMax:n,seed:r=3}){let i=new s({uniforms:{uMode:{value:0},uLatMax:{value:n},uSeed:{value:r}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:it,depthTest:!1}),a=new u(new l(2,2),i);a.frustumCulled=!1;let o=new N().add(a),c=new k,d=n=>{let r=new F(t,t/2,{generateMipmaps:!0,minFilter:O,wrapS:g,anisotropy:4});i.uniforms.uMode.value=n;let a=e.getRenderTarget();return e.setRenderTarget(r),e.render(o,c),e.setRenderTarget(a),r.texture},f=d(0),p=d(1);return i.dispose(),a.geometry.dispose(),{albedo:f,data:p}}var ot=`
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 p = modelMatrix * vec4(position, 1.0);
    vPosW = p.xyz;
    gl_Position = projectionMatrix * viewMatrix * p;
  }`,st=`
  uniform sampler2D uAlbedo, uData, uCells, uMarks;
  uniform float uRows, uCols, uLatMax, uTime, uHintPulse, uBump;
  uniform vec3 uLight, uRimDir, uRimCol, uColA, uColB, uTurn, uGrid, uNightGrid, uAtmo, uSunset;
  uniform vec4 uRipples[4];
  uniform vec3 uRippleCol[4];
  uniform vec4 uFlood;    // xyz origin, w start time (< 0: off)
  uniform vec3 uFloodCol;
  uniform vec4 uBand;     // x row, y direction (±1), z strength 0..1
  uniform vec3 uBandCol;
  uniform vec4 uRowFlash; // x row, y start time, z: 1 = a whole band, 0 = off
  uniform vec3 uRowFlashCol;
  uniform vec3 uNight;    // x first night column (float: it glides), y width, z on
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    vec3 v = normalize(cameraPosition - vPosW);
    float lat = (vUv.y - 0.5) * 3.14159265;
    vec4 alb = texture2D(uAlbedo, vUv);
    vec4 dat = texture2D(uData, vUv);
    float water = alb.a;
    vec3 albedo = alb.rgb;

    // relief: bend the normal along the height map's screen-space slope (land only)
    vec3 dpdx = dFdx(vPosW), dpdy = dFdy(vPosW);
    vec3 r1 = cross(dpdy, n), r2 = cross(n, dpdx);
    float det = dot(dpdx, r1);
    vec3 grad = sign(det) * (dFdx(dat.r) * r1 + dFdy(dat.r) * r2);
    vec3 nb = abs(det) > 1e-12 ? normalize(abs(det) * n - grad * uBump) : n;

    // night rule: the night columns are dark from pole to pole (they glide as the night moves)
    float nightAmt = 0.0;
    if (uNight.z > 0.5) {
      float x = mod(vUv.x * uCols - uNight.x, uCols);
      nightAmt = smoothstep(-0.05, 0.35, x) * smoothstep(uNight.y + 0.05, uNight.y - 0.35, x);
    }
    vec3 glow = vec3(0.0);
    float shade = 1.0;   // contact shadows / craters darken the lit surface
    float gridBoost = 1.0;

    // ripples: rings of light racing across the surface from each placed disc
    vec3 wave = vec3(0.0);
    float waveAmt = 0.0;
    for (int k = 0; k < 4; k++) {
      vec4 r = uRipples[k];
      float age = uTime - r.w;
      if (age < 0.0 || age > 1.8) continue;
      float ang = acos(clamp(dot(n, r.xyz), -1.0, 1.0));
      float x = (ang - age * 1.6) * 10.0;
      float a = exp(-x * x) * (1.0 - age / 1.8);
      wave += uRippleCol[k] * a;
      waveAmt += a;
    }

    if (abs(lat) < uLatMax) {
      float cu = vUv.x * uCols;
      float cv = (uLatMax - lat) / (2.0 * uLatMax) * uRows;
      vec2 f = fract(vec2(cu, cv));
      ivec2 cell = ivec2(int(min(floor(cu), uCols - 1.0)), int(min(floor(cv), uRows - 1.0)));
      vec4 s = texelFetch(uCells, cell, 0);
      vec4 mk = texelFetch(uMarks, cell, 0);
      float row = float(cell.y);
      // distance to the cell edge, in pixels (crisp lines) and in cell units (soft glow)
      vec2 fw = max(vec2(fwidth(cu), fwidth(cv)), vec2(1e-5));
      vec2 e = min(f, 1.0 - f);
      float edgePx = min(e.x / fw.x, e.y / fw.y);
      float edge = min(e.x * cos(lat) * 1.4, e.y);
      float line = 1.0 - smoothstep(0.35, 1.25, edgePx);
      // physical offset from the cell centre (so round things stay round near the caps)
      vec2 d = (f - 0.5) * vec2(cos(lat) * 6.2832 / uCols, 2.0 * uLatMax / uRows);
      float rr = length(d) / (2.0 * uLatMax / uRows);

      vec3 gridCol = mix(uGrid, uNightGrid, nightAmt);

      float owner = s.r; // 0 empty, ~0.33 Ember, ~0.66 Frost, 1 hole
      if (owner > 0.9) {
        // black hole: a crater falling into darkness, with a violet event-horizon rim
        shade *= smoothstep(0.08, 0.42, rr);
        glow += vec3(0.5, 0.25, 1.0) * exp(-abs(rr - 0.36) * 28.0) * 0.55;
      } else if (owner > 0.15) {
        vec3 oc = owner > 0.5 ? uColB : uColA;
        albedo = mix(albedo, oc * 0.2, 0.18);       // territory
        glow += oc * 0.025 * (1.0 - nightAmt * 0.5);
        shade *= 1.0 - 0.6 * smoothstep(0.46, 0.22, rr); // contact shadow under the disc
      }
      // supernova star cell: a warm halo with a slow pulse
      if (mk.r > 0.5) {
        float pulse = 0.6 + 0.4 * sin(uTime * 3.0 + row);
        glow += vec3(1.0, 0.78, 0.45) * (smoothstep(0.5, 0.0, rr) * 0.18 + exp(-abs(rr - 0.33) * 40.0) * 0.6) * pulse;
      }
      // the grid: thin holographic lines, brighter where a ripple passes
      glow += gridCol * (line * 0.36 + exp(-edge * 28.0) * 0.06) * (1.0 + waveAmt * 6.0);
      // move hints (rings), flip preview, hover
      float hint = s.g * smoothstep(0.045, 0.0, abs(rr - 0.2)) * (0.55 + 0.45 * uHintPulse);
      glow += uTurn * hint * 1.7 + uTurn * s.g * smoothstep(0.2, 0.0, rr) * 0.07;
      glow += uTurn * s.b * (0.45 + 0.35 * uHintPulse) * smoothstep(0.5, 0.2, rr);
      glow += uTurn * s.a * (0.1 + 0.9 * smoothstep(0.06, 0.0, edge));
      // tectonic warning: chevrons racing round the band that is about to slide
      if (uBand.z > 0.0 && abs(row - uBand.x) < 0.5) {
        float chev = fract(cu * 1.0 - (abs(f.y - 0.5) * 0.9) * uBand.y - uTime * 0.9 * uBand.y);
        float arrow = smoothstep(0.12, 0.0, abs(chev - 0.5)) ;
        float rim = smoothstep(0.1, 0.0, min(f.y, 1.0 - f.y));
        glow += uBandCol * uBand.z * (arrow * 0.45 + rim * 0.8 + 0.06) * (0.7 + 0.3 * uHintPulse);
      }
      if (uRowFlash.z > 0.0 && abs(row - uRowFlash.x) < 0.5) {
        // two bright fronts race round the band from the move, both ways, and meet on the far side
        float age = max(uTime - uRowFlash.y, 0.0);
        float x = mod(cu - uRowFlash.w, uCols) / uCols;
        float d = min(x, 1.0 - x);
        float front = exp(-pow(abs(d - age * 0.55) * 14.0, 2.0));
        float edges = smoothstep(0.14, 0.0, min(f.y, 1.0 - f.y));
        glow += uRowFlashCol * exp(-age * 1.6) * (0.12 + 1.2 * front * (0.4 + 0.6 * edges) + 0.35 * edges);
      }
      glow += wave * 0.35;
    } else {
      // the board's edge: a fine glowing seam where the ice begins
      float rim = abs(lat) - uLatMax;
      glow += uGrid * exp(-rim * 90.0) * 0.9 * (1.0 + waveAmt * 3.0);
      glow += wave * 0.2;
    }

    // ---------- light: warm key sun, cool rim star, city lights at night ----------
    float ndl = dot(nb, uLight);
    float day = smoothstep(-0.15, 0.2, dot(n, uLight)) * (1.0 - nightAmt * 0.92);
    vec3 col = albedo * (max(ndl, 0.0) * 1.25 * (1.0 - nightAmt * 0.92) + 0.035 + 0.04 * day) * shade;
    col += albedo * vec3(0.12, 0.1, 0.3) * nightAmt * 0.35; // moonlit, so the night side isn't a hole
    vec3 hv = normalize(uLight + v);
    float nh = max(dot(n, hv), 0.0);
    col += water * (pow(nh, 1500.0) * 0.35 + pow(nh, 60.0) * 0.035) * vec3(1.0, 0.86, 0.66) * day * shade; // sun glint on the sea
    col += vec3(1.0, 0.62, 0.3) * dat.g * (1.0 - day) * 1.4; // cities on the night side
    float nv = max(dot(n, v), 0.0);
    float fres = pow(1.0 - nv, 3.0);
    col += uRimCol * pow(1.0 - nv, 2.2) * max(dot(n, uRimDir), 0.0) * 1.1;
    vec3 haze = mix(uSunset, uAtmo, smoothstep(0.0, 0.4, dot(n, uLight)));
    col = mix(col, haze * (0.15 + 0.85 * day), fres * 0.6 * smoothstep(-0.1, 0.25, dot(n, uLight)) * (1.0 - nightAmt * 0.7));

    // end of game: the winner's colour floods out across the planet
    if (uFlood.w > 0.0) {
      float ang = acos(clamp(dot(n, uFlood.xyz), -1.0, 1.0));
      float front = (uTime - uFlood.w) * 1.3;
      float inside = smoothstep(front, front - 0.35, ang);
      col = mix(col, col * 0.5 + uFloodCol * 0.12, inside * 0.7);
      glow = mix(glow, glow * 0.6 + uFloodCol * (glow.r + glow.g + glow.b) * 0.5, inside);
      float fd = (ang - front) * 7.0;
      glow += uFloodCol * exp(-fd * fd) * 1.3;
    }
    gl_FragColor = vec4(col + glow, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,ct=`
  uniform sampler2D uData;
  uniform float uTime, uLatMax, uBoard, uCols;
  uniform vec3 uLight, uNight;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec3 n = normalize(vNormalW);
    vec3 v = normalize(cameraPosition - vPosW);
    float c = texture2D(uData, vUv + vec2(uTime * 0.0035, 0.0)).b;
    float lat = (vUv.y - 0.5) * 3.14159265;
    float l = dot(n, uLight);
    float day = smoothstep(-0.2, 0.25, l);
    if (uNight.z > 0.5) {
      float x = mod(vUv.x * uCols - uNight.x, uCols);
      day *= 1.0 - 0.9 * smoothstep(-0.05, 0.35, x) * smoothstep(uNight.y + 0.05, uNight.y - 0.35, x);
    }
    float fres = pow(1.0 - max(dot(n, v), 0.0), 2.0);
    // thin over the board (discs and hints must read), fuller over the caps and at the limb
    float a = c * mix(uBoard, 0.85, max(smoothstep(uLatMax - 0.05, uLatMax + 0.1, abs(lat)), fres));
    vec3 col = mix(vec3(0.05, 0.06, 0.12), vec3(1.0, 0.97, 0.93), day) * (0.35 + 0.75 * max(l, 0.0));
    col = mix(col, vec3(1.0, 0.6, 0.4), smoothstep(0.25, 0.0, abs(l)) * 0.35); // pink at the terminator
    gl_FragColor = vec4(col, a * (0.25 + 0.75 * day));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;function lt(e,t){let{scene:n,renderer:r}=e,{radius:i,rows:c,cols:l,latMax:d,colors:f}=t,p=at(r,{size:t.quality===`low`?1024:2048,latMax:d,seed:t.seed??3.7}),m=()=>{let e=new b(new Uint8Array(c*l*4),l,c,a);return e.magFilter=e.minFilter=o,e.needsUpdate=!0,e},h=m(),g=m(),_=h.image.data,y=e=>new M(e),x={uAlbedo:{value:p.albedo},uData:{value:p.data},uCells:{value:h},uMarks:{value:g},uRows:{value:c},uCols:{value:l},uLatMax:{value:d},uTime:{value:0},uHintPulse:{value:0},uBump:{value:.22},uLight:{value:new I(.4,.6,.7).normalize()},uRimDir:{value:new I(-1,.3,0).normalize()},uRimCol:{value:y(f.companion)},uColA:{value:y(f.a)},uColB:{value:y(f.b)},uTurn:{value:y(f.a)},uGrid:{value:y(f.grid)},uNightGrid:{value:y(f.nightGrid)},uAtmo:{value:y(f.atmo)},uSunset:{value:y(f.sunset)},uRipples:{value:Array.from({length:4},()=>new A(0,1,0,-99))},uRippleCol:{value:Array.from({length:4},()=>y(f.grid))},uFlood:{value:new A(0,1,0,-1)},uFloodCol:{value:y(f.a)},uBand:{value:new A(0,1,0,0)},uBandCol:{value:y(f.band)},uRowFlash:{value:new A(0,-99,0,0)},uRowFlashCol:{value:y(f.a)},uNight:{value:new I(0,5,0)}},S=new u(new v(i,160,96),new s({uniforms:x,vertexShader:ot,fragmentShader:st}));S.name=`planet`,n.add(S);let C={uData:x.uData,uTime:x.uTime,uLatMax:x.uLatMax,uLight:x.uLight,uNight:x.uNight,uCols:x.uCols,uBoard:{value:.28}},w=new u(new v(i*1.014,128,64),new s({uniforms:C,vertexShader:ot,fragmentShader:ct,transparent:!0,depthWrite:!1}));w.raycast=()=>{},w.renderOrder=1,n.add(w);let T=tt(i,{thickness:.1,day:f.atmo,sunset:f.sunset,night:`#2a1f66`,strength:1.15});n.add(T.mesh);let E=0;return{mesh:S,clouds:w,atmosphere:T,uniforms:x,setCells(e,{legal:t=[],preview:n=[],hover:r=null}={}){_.fill(0);for(let t=0;t<e.length;t++)_[t*4]=[0,85,170,255][e[t]];for(let e of t)_[e*4+1]=255;for(let e of n)_[e*4+2]=255;r!==null&&(_[r*4+3]=255),h.needsUpdate=!0},setMarks(e){let t=g.image.data;t.fill(0);for(let n=0;n<e.length;n++)t[n*4]=e[n]?255:0;g.needsUpdate=!0},setTurn(e){x.uTurn.value.set(e)},ripple(e,t=f.grid){let n=E++%4;x.uRipples.value[n].set(e.x,e.y,e.z,x.uTime.value),x.uRippleCol.value[n].set(t)},rowFlash(e,t,n=0){x.uRowFlash.value.set(e,x.uTime.value,1,n+.5),x.uRowFlashCol.value.set(t)},setBand(e,t,n){x.uBand.value.set(e,Math.sign(t)||1,n,0)},setNight(e,t,n=!0){x.uNight.value.set(e,t,+!!n)},flood(e,t){if(!e)return x.uFlood.value.set(0,1,0,-1);x.uFlood.value.set(e.x,e.y,e.z,x.uTime.value),x.uFloodCol.value.set(t)},setLight(e){x.uLight.value.copy(e),T.setLight(e)},setRim(e){x.uRimDir.value.copy(e)},update(e){x.uTime.value=e,x.uHintPulse.value=.5+.5*Math.sin(e*4)}}}var ut=e=>(e.raycast=()=>{},e);function dt(){let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#8f8aa3`,t.fillRect(0,0,512,256);let n=3,r=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<260;e++){let e=r()*512,n=20+r()*216,i=2+r()**3*26,a=t.createRadialGradient(e-i*.2,n-i*.2,i*.2,e,n,i);a.addColorStop(0,`rgba(60,55,75,0.55)`),a.addColorStop(.8,`rgba(70,65,85,0.25)`),a.addColorStop(.92,`rgba(210,205,225,0.35)`),a.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=a,t.beginPath(),t.ellipse(e,n,i,i*.8,0,0,Math.PI*2),t.fill()}let i=new L(e);return i.colorSpace=c,i}var ft={vertexShader:`
    varying vec2 vUv;
    varying vec3 vPos;
    void main() { vUv = uv; vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform float uTime, uStrength;
    uniform vec3 uColA, uColB;
    varying vec2 vUv;
    varying vec3 vPos;
    void main() {
      float a = atan(vPos.z, vPos.x);
      // hanging curtains: folds that drift round the pole, bright at the foot, fading upward
      float folds = 0.5 + 0.5 * sin(a * 7.0 + uTime * 0.35 + 2.0 * sin(a * 3.0 - uTime * 0.2));
      float rays = 0.6 + 0.4 * sin(a * 61.0 + sin(a * 13.0 + uTime) * 3.0);
      // clamp: with MSAA, varyings can land a hair outside 0..1, and pow() of a negative is NaN (bloom turns that black)
      float y = clamp(vUv.y, 0.0, 1.0);
      float foot = smoothstep(0.0, 0.08, y) * pow(1.0 - y, 1.6);
      vec3 col = mix(uColA, uColB, smoothstep(0.1, 0.8, y));
      gl_FragColor = vec4(col * folds * rays * foot * uStrength, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`},pt={vertexShader:`
    varying vec3 vLocal;
    varying vec3 vWorld;
    void main() {
      vLocal = position;
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,fragmentShader:`
    uniform vec3 uLight, uColA, uColB, uNormal;
    uniform float uInner, uOuter, uPlanetR, uOpacity;
    varying vec3 vLocal;
    varying vec3 vWorld;
    float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
    float n1(float x) { float i = floor(x), f = fract(x); return mix(h1(i), h1(i + 1.0), f * f * (3.0 - 2.0 * f)); }
    void main() {
      float r = length(vLocal.xy);
      float t = (r - uInner) / (uOuter - uInner);
      // many thin ringlets of different density, a clear gap (like Cassini's) two thirds out
      float dens = 0.35 + 0.65 * n1(t * 38.0) * n1(t * 9.0 + 3.0);
      dens *= smoothstep(0.0, 0.15, t) * smoothstep(1.0, 0.85, t);
      dens *= 1.0 - 0.6 * smoothstep(0.03, 0.0, abs(t - 0.66));
      vec3 col = mix(uColA, uColB, n1(t * 6.0));
      float lit = 0.35 + 0.65 * abs(dot(uNormal, uLight));
      // the planet's shadow falls across the rings behind it
      vec3 p = vWorld;
      float along = dot(p, uLight);
      float off = length(p - uLight * along);
      float shadow = along < 0.0 ? smoothstep(uPlanetR * 0.92, uPlanetR * 1.05, off) : 1.0;
      // see-through where the rings pass in front of the planet, so they never hide the board
      vec3 dir = normalize(vWorld - cameraPosition);
      float closest = length(cross(-cameraPosition, dir));
      float inFront = dot(vWorld - cameraPosition, dir) < dot(-cameraPosition, dir) ? 1.0 : 0.0;
      float veil = 1.0 - inFront * smoothstep(uPlanetR * 1.3, uPlanetR * 0.98, closest) * 0.93;
      gl_FragColor = vec4(col * lit * (0.25 + 0.75 * shadow), dens * uOpacity * veil);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`};function mt(e,a){let{scene:o,renderer:c}=e,{radius:l,latMax:d,colors:f}=a,p=a.quality===`low`;o.background=et(c,{size:p?512:1024,seed:4,base:`#010106`,nebula:[`#40206e`,`#0d4a6a`,`#7a2c4a`],nebulaStrength:.5,stars:1.1,giant:!1});let m=new R([new C(0,-.3),new C(.26,-.3),new C(.3,.85),new C(.21,1.15),new C(0,1.65)],6);{let e=m.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++)n.fill(.35+.65*t.smoothstep(e.getY(r),-.3,1.65),r*3,r*3+3);m.setAttribute(`color`,new ne(n,3))}let g=new r({color:f.crystal,vertexColors:!0,emissive:f.crystalGlow,emissiveIntensity:.3,roughness:.3,metalness:.1,flatShading:!0,envMap:a.env??null,envMapIntensity:.55}),b=ut(new n(m,g,108)),S=11,w=()=>(S=S*16807%2147483647)/2147483647,E=new D,ee=new h,O=new h,k=new I(0,1,0),te=new M,A=0;for(let e of[1,-1])for(let t=0;t<54;t++){let n=t<30,r=n?d+.11+w()*.06:d+.2+Math.sqrt(w())*(Math.PI/2-d-.2),i=n?t/30*Math.PI*2+w()*.12:w()*Math.PI*2,a=new I(Math.cos(r)*Math.cos(i),Math.sin(r)*e,Math.cos(r)*Math.sin(i));ee.setFromUnitVectors(k,a);let o=new I(0,e,0).sub(a.clone().multiplyScalar(a.y*e)).normalize(),s=new I().crossVectors(a,o).normalize();O.setFromAxisAngle(s,n?.35+w()*.2:(w()-.5)*.5);let c=n?.22+w()*w()*.36:.18+w()*w()*.55;E.compose(a.clone().multiplyScalar(l-.04),O.clone().multiply(ee).multiply(new h().setFromAxisAngle(k,w()*6.28)),new I(c,c*(.8+w()*.5),c)),b.setMatrixAt(A,E),b.setColorAt(A++,te.set(f.crystal).offsetHSL((w()-.5)*.06,0,(w()-.5)*.2))}o.add(b);for(let e of[1,-1]){let t=ut(new u(m,g));t.position.set(0,e*(l-.1),0),t.scale.set(.7,1.05,.7),e<0&&(t.rotation.x=Math.PI),o.add(t)}let N={uTime:{value:0},uStrength:{value:.75},uColA:{value:new M(f.auroraA)},uColB:{value:new M(f.auroraB)}},P=[1,-1].map(e=>{let t=d+.18,n=l*Math.cos(t)*1.02,r=new T(n*1.45,n,1.6,96,1,!0);r.translate(0,.8,0);let i=ut(new u(r,new s({...ft,uniforms:N,transparent:!0,blending:2,depthWrite:!1,side:2})));return i.position.y=e*l*Math.sin(t)*1,e<0&&(i.rotation.x=Math.PI),i.renderOrder=2,o.add(i),i}),F=l*1.6,re=l*2.3,L={uLight:{value:new I(0,1,0)},uNormal:{value:new I(0,0,1)},uColA:{value:new M(f.ringA)},uColB:{value:new M(f.ringB)},uInner:{value:F},uOuter:{value:re},uPlanetR:{value:l},uOpacity:{value:.62}},z=ut(new u(new i(F,re,192,1),new s({...pt,uniforms:L,transparent:!0,depthWrite:!1,side:2})));z.rotation.set(-Math.PI/2+.38,0,.22),z.renderOrder=3,o.add(z),z.updateMatrixWorld(),L.uNormal.value.set(0,0,1).transformDirection(z.matrixWorld);let B=new r({map:dt(),roughness:.95,metalness:0}),V=ut(new u(new v(1.6,48,24),B)),ie=new x;ie.rotation.set(.32,0,.18),V.position.set(36,0,0),ie.add(V),o.add(ie);let ae=new j(.1,.1,.16),H=new j(.62,.01,.12),oe=new r({color:`#c9c2a8`,metalness:.8,roughness:.35,envMap:a.env??null}),se=new r({color:`#1b2a6a`,metalness:.6,roughness:.25,emissive:`#0a1640`,emissiveIntensity:.6}),ce=new y({color:`#ff5a4a`,transparent:!0,blending:2,depthWrite:!1}),le=[[7,.5,0,.11],[7.6,-.35,2.1,-.08],[6.7,1.1,4,.09]].map(([e,t,n,r])=>{let i=new x;i.rotation.set(t,n,t*.5);let a=new x;a.add(ut(new u(ae,oe)),ut(new u(H,se)));let s=ut(new _(ce));return s.scale.setScalar(.12),a.add(s),a.position.set(e,0,0),i.add(a),o.add(i),{pivot:i,sat:a,beacon:s,speed:r,phase:n}}),ue=rt({color:f.companion,size:p?.8:1});o.add(ue.group);let U={center:new I,radius:l*1.05};return{crystals:b,ring:z,auroras:P,flare:ue,moon:V,setAurora(e,t,n=.75){N.uColA.value.set(e),N.uColB.value.set(t),N.uStrength.value=n},update(e,t,n,r){N.uTime.value=e,L.uLight.value.copy(n),g.emissiveIntensity=.25+.1*Math.sin(e*1.1),ie.rotation.y=e*.03,V.rotation.y=e*.05;for(let t of le)t.pivot.rotation.y=t.phase+e*t.speed,t.sat.rotation.y=e*.3,t.beacon.visible=(e*1.2+t.phase)%1.6<.12;ue.update(t,r,{occluder:U})}}}var ht=new I(0,1,0),gt=new I(0,0,1),_t=new h().setFromAxisAngle(new I(1,0,0),Math.PI),vt=.17,yt=.82;function bt(e,t,n=!0){let r=document.createElement(`canvas`);r.width=r.height=e,t(r.getContext(`2d`),e);let i=new L(r);return n&&(i.colorSpace=c),i.anisotropy=4,i}function xt(e){return bt(256,(t,n)=>{let r=n/2;if(t.fillStyle=`#000`,t.fillRect(0,0,n,n),t.translate(r,r),t.strokeStyle=`#ffffff`,t.lineCap=`round`,t.shadowColor=`#ffffff`,t.shadowBlur=10,t.lineWidth=4,t.beginPath(),t.arc(0,0,r*.86,0,Math.PI*2),t.stroke(),e===`sun`){t.lineWidth=10,t.beginPath(),t.arc(0,0,26,0,Math.PI*2),t.stroke();for(let e=0;e<12;e++)t.rotate(Math.PI/6),t.lineWidth=e%2?6:9,t.beginPath(),t.moveTo(0,42),t.lineTo(0,e%2?62:80),t.stroke()}else{t.lineWidth=8;for(let e=0;e<6;e++)t.rotate(Math.PI/3),t.beginPath(),t.moveTo(0,8),t.lineTo(0,80),t.moveTo(0,44),t.lineTo(-17,62),t.moveTo(0,44),t.lineTo(17,62),t.moveTo(0,22),t.lineTo(-10,32),t.moveTo(0,22),t.lineTo(10,32),t.stroke()}})}var St=()=>bt(256,(e,t)=>{let n=t/2;for(let t=n;t>0;t-=2){let r=200+Math.round(40*(.5+.5*Math.sin(t*.9)));e.fillStyle=`rgb(${r},${r},${r})`,e.beginPath(),e.arc(n,n,t,0,Math.PI*2),e.fill()}});function Ct(){let e=vt/2,t=(e,t)=>new C(e,t),n=new R([t(yt,-.085*.55),t(.9,-.085),t(.975,-.085),t(1,-.085*.55),t(1,e*.55),t(.975,e),t(.9,e),t(yt,e*.55)],56),r=new w(yt,56).rotateX(-Math.PI/2).translate(0,e*.55,0),i=new w(yt,56).rotateX(Math.PI/2).translate(0,-.085*.55,0);return te([n,r,i],!0)}function wt(n,a){let{fx:o,camera:c,scene:l}=n,{radius:m,rows:g,cols:v,latMax:b,colors:C}=a,T=2*b/g,E=Math.PI*2/v,ee=g*v,D=(e,t=new I)=>{let n=b-(G(e,v)+.5)*T,r=(K(e,v)+.5)*E;return t.set(-Math.cos(r)*Math.cos(n),Math.sin(n),Math.sin(r)*Math.cos(n))},O=e=>{let n=e.clone().normalize(),r=Math.asin(t.clamp(n.y,-1,1));if(Math.abs(r)>=b)return null;let i=Math.atan2(n.z,-n.x);i<0&&(i+=Math.PI*2);let a=Math.min(v-1,Math.floor(i/E));return Math.min(g-1,Math.floor((b-r)/T))*v+a},k=e=>{let t=b-(G(e,v)+.5)*T;return .4*Math.min(m*Math.cos(t)*E,m*T)},te=(e,t,n=new h)=>(n.setFromUnitVectors(ht,D(e)),t===2?n.multiply(_t):n),A=Ct(),j=St(),N=(e,t,n,r,i)=>new f({color:e,map:j,metalness:r,roughness:r>.5?.26:.2,clearcoat:1,clearcoatRoughness:.12,emissive:t,emissiveIntensity:i,emissiveMap:n,envMap:a.env??null,envMapIntensity:1.3}),P=ae(n,A,[new r({color:C.rim,metalness:1,roughness:.22,envMap:a.env??null,envMapIntensity:1.5}),N(C.a,C.aGlow,xt(`sun`),.85,1.9),N(C.bFace,C.bGlow,xt(`flake`),.5,1.25)],ee),F=new M(1,1,1),ne=new M(C.asleep);for(let e=0;e<ee;e++)P.mesh.setColorAt(e,F);let re=.10500000000000001,L=(e,t=new I)=>D(e,t).multiplyScalar(m+re),R=(e,t)=>{let r=P.at(e);oe(n,r),r.visible=t===1||t===2,r.userData.owner=t,L(e,r.position),te(e,t,r.quaternion);let i=k(e);r.scale.set(i,1,i)},z=new d({color:C.a,transparent:!0,opacity:.45,depthWrite:!1}),B=new u(A,[z,z,z]);B.visible=!1,l.add(B);let ie=new d({color:new M(1.3,1.25,1.5),transparent:!0,opacity:.85,toneMapped:!1}),H=new u(new p(1,.03,8,64),ie);H.visible=!1,l.add(H);let le=null,ue=null,U=[],W=new h,de=new i(.86,1,64),q=Array.from({length:6},()=>{let e=new u(de,new d({transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}));return e.visible=!1,e.raycast=()=>{},l.add(e),e}),fe=0,pe=e=>new s({uniforms:{uHead:{value:0},uColor:{value:new M(e).multiplyScalar(2.2)},uLen:{value:1}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uHead, uLen; uniform vec3 uColor; varying vec2 vUv;
        void main() {
          float x = vUv.x;
          float behind = uHead - x;
          float a = behind < 0.0 ? 0.0 : exp(-behind * 6.0 / uLen) ;
          a *= smoothstep(0.0, 0.03, x);
          float core = 1.0 - abs(vUv.y - 0.5) * 2.0;
          gl_FragColor = vec4(uColor * a * (0.5 + core), a);
        }`,transparent:!0,blending:2,depthWrite:!1,toneMapped:!1}),J=new x;l.add(J);let me={uTime:{value:0}},he=new s({uniforms:me,vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime; varying vec2 vUv;
      void main() {
        vec2 p = vUv - 0.5;
        float r = length(p) * 2.0;
        float a = atan(p.y, p.x + 1e-5);
        float swirl = 0.55 + 0.45 * sin(a * 3.0 + 5.0 / (r + 0.2) - uTime * 2.6);
        float disk = smoothstep(1.0, 0.6, r) * smoothstep(0.28, 0.42, r);
        float core = smoothstep(0.34, 0.26, r);
        float lens = exp(-abs(r - 0.36) * 40.0);
        vec3 hot = mix(vec3(1.0, 0.55, 0.2), vec3(0.55, 0.3, 1.0), smoothstep(0.35, 0.9, r));
        vec3 col = hot * swirl * disk * 1.8 + vec3(1.0, 0.85, 1.0) * lens * 1.2;
        float alpha = max(core, max(disk * swirl * 0.85, lens));
        gl_FragColor = vec4(col * (1.0 - core), alpha);
      }`,transparent:!0,depthWrite:!1,toneMapped:!1}),ge=new w(1,48),_e=bt(128,(e,t)=>{let n=t/2,r=e.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.15,`rgba(255,240,200,0.8)`),r.addColorStop(.4,`rgba(255,200,120,0.15)`),r.addColorStop(1,`rgba(255,200,120,0)`),e.fillStyle=r,e.fillRect(0,0,t,t),e.translate(n,n),e.fillStyle=`rgba(255,250,235,0.95)`;for(let t=0;t<4;t++)e.rotate(Math.PI/2),e.beginPath(),e.moveTo(0,-4),e.quadraticCurveTo(2,-n*.2,0,-n*.98),e.quadraticCurveTo(-2,-n*.2,0,-4),e.fill()}),ve=new y({map:_e,color:C.star,transparent:!0,blending:2,depthWrite:!1,toneMapped:!1}),ye=new Map;function be(e){for(let e of[...J.children])J.remove(e);ye.clear();for(let t=0;t<ee;t++)if(e.cells[t]===3){let e=new u(ge,he);e.quaternion.setFromUnitVectors(gt,D(t)),e.position.copy(D(t)).multiplyScalar(m+.012),e.scale.setScalar(k(t)*1.25),e.userData={cell:t,kind:`hole`},e.raycast=()=>{},J.add(e),ye.set(t,e)}else if(e.stars?.[t]&&e.cells[t]===0){let e=new _(ve);e.userData={cell:t,kind:`star`,base:k(t)*2.1},e.position.copy(D(t)).multiplyScalar(m+.32),e.raycast=()=>{},J.add(e),ye.set(t,e)}}let xe=new I,Se=0,Y=0,Ce=0,we=``,Te=()=>{let e=innerWidth,t=innerHeight,n=`${e}x${t}:${Y.toFixed(4)}:${Ce.toFixed(4)}`;n!==we&&(we=n,Math.abs(Y)<1e-4&&Math.abs(Ce)<1e-4?c.clearViewOffset():c.setViewOffset(e,t,-Y*e,-Ce*t,e,t))},X={pieces:P,normalOf:D,cellAtPoint:O,restPos:L,discRadius:k,sync(e){U=[];for(let t=0;t<ee;t++)R(t,e.cells[t]);be(e),X.setLastMove(e.history.entries.findLast(e=>e.move>=0)?.move??null)},setAsleep(e){let t=new Set(e);for(let e=0;e<ee;e++)P.mesh.setColorAt(e,t.has(K(e,v))?ne:F);P.mesh.instanceColor.needsUpdate=!0},async animateMove(e,{onLand:t,onFlip:r,onNova:i,step:a=.085}={}){let o=e.move;R(o,e.player);let s=D(o);X.setGhost(null);let c=ye.get(o);await se(n,P.at(o),{up:s,drop:1.8,duration:.32}),t?.(),X.setLastMove(o),c&&(J.remove(c),ye.delete(o));let l=e.player===1?C.a:C.b;for(let t of e.lines)X.beam([o,...t],l,{duration:.25+t.length*a,closed:t.length>=v-1});let u=L(o),d=new Set(e.nova??[]),f=V(e.lines,{start:.04,step:a});d.size&&i?.();for(let e of d)f.set(e,.12);let p=0,m=[...f].map(([t,i])=>{let a=P.at(t);a.userData.owner=e.player;let o=D(t),s=xe.copy(a.position).sub(u),c=new I().crossVectors(o,s).normalize();return c.lengthSq()<.5&&c.set(1,0,0).applyQuaternion(a.quaternion),ce(n,a,{axis:c,up:o,height:d.has(t)?.9:.55,duration:.4,delay:i,onFlip:()=>r?.(t,p++)})});await Promise.all(m)},async animateShift(e,t,r,{duration:i=1.1}={}){let a=[];for(let t=0;t<v;t++){let r=e*v+t,i=P.at(r);oe(n,i),i.visible&&a.push({obj:i,pos:i.position.clone(),quat:i.quaternion.clone()});let o=ye.get(r);o&&a.push({obj:o,pos:o.position.clone(),quat:o.quaternion.clone()})}let s={t:0},c=new h;await o.tween(s,{t:1},{duration:i,ease:`inOutSine`,onUpdate:()=>{let e=t*E*(s.t+Math.sin(s.t*Math.PI)*.06);c.setFromAxisAngle(ht,e);for(let e of a)e.obj.position.copy(e.pos).applyQuaternion(c),e.obj.quaternion.copy(e.quat).premultiply(c)}}),X.sync(r)},beam(t,n,{duration:r=.5,closed:i=!1}={}){let a=t.map((e,n)=>D(e).multiplyScalar(m+.28+.12*Math.sin(n/Math.max(1,t.length-1)*Math.PI)));if(i&&a.push(a[0].clone()),a.length<2)return;let s=new S(a,!1,`centripetal`),c=new e(s,Math.max(12,a.length*10),.035,6,!1),d=pe(n);d.uniforms.uLen.value=Math.min(1,3/a.length);let f=new u(c,d);f.raycast=()=>{},f.renderOrder=5,l.add(f);let p=d.uniforms.uHead;o.tween(p,{value:1.6},{duration:r*1.6,ease:`linear`}).then(()=>{l.remove(f),c.dispose(),d.dispose()})},shockwave(e,t,{size:n=2.4,duration:r=.6}={}){let i=q[fe++%q.length],a=D(e);i.visible=!0,i.material.color.set(t).multiplyScalar(1.6),i.material.opacity=1,i.quaternion.setFromUnitVectors(gt,a),i.position.copy(a).multiplyScalar(m+.03);let s=k(e),c={k:0};o.tween(c,{k:1},{duration:r,ease:`outQuad`,onUpdate:()=>{i.scale.setScalar(s*(.6+n*c.k)),i.material.opacity=(1-c.k)*(1-c.k)}}).then(()=>i.visible=!1)},setGhost(e,t){if(le=e,B.visible=e!==null,e===null)return;z.color.set(t),te(e,1,B.quaternion);let n=k(e);B.scale.set(n,1,n)},setPreview(e){for(let t of U){if(e.includes(t))continue;let n=P.at(t);L(t,n.position),te(t,n.userData.owner,n.quaternion)}U=e},setLastMove(e){ue=e,H.visible=e!==null,e!==null&&(H.quaternion.setFromUnitVectors(gt,D(e)),H.userData.r=k(e)*1.3)},faceCell(e,{duration:n=.75,minAngle:r=.55}={}){let i=c.position.clone(),a=i.length(),o=D(e).multiplyScalar(a);return o.y=t.lerp(o.y,i.y,.35),o.setLength(a),i.angleTo(o)<r?Promise.resolve():X.flyTo(o,{duration:n})},flyTo(e,{duration:n=1,ease:r=`inOutSine`}={}){let i=c.position.clone(),a=new h().setFromUnitVectors(i.clone().normalize(),e.clone().normalize()),s=i.length(),l=e.length(),u=++Se,d={t:0},f=new h;return o.tween(d,{t:1},{duration:n,ease:r,onUpdate:()=>{u===Se&&(f.identity().slerp(a,d.t),c.position.copy(i).normalize().applyQuaternion(f).multiplyScalar(t.lerp(s,l,d.t)))}})},intro(e,{duration:t=2.6}={}){let n=e.clone().normalize().applyAxisAngle(ht,-1.5).add(new I(0,.8,0)).normalize().multiplyScalar(48);return c.position.copy(n),X.flyTo(e,{duration:t,ease:e=>1-(1-e)**3})},frame(e,t=.9,n=0){let r={x:Y,y:Ce};return o.tween(r,{x:e,y:n},{duration:t,ease:`inOutSine`,onUpdate:()=>(Y=r.x,Ce=r.y)})},nudge(e=.35){let t={k:0},n=0,r=()=>{c.position.addScaledVector(xe.copy(c.position).normalize(),-(t.k-n)*e),n=t.k};o.tween(t,{k:1},{duration:.07,ease:`outQuad`,onUpdate:r}).then(()=>o.tween(t,{k:0},{duration:.35,ease:`outQuad`,onUpdate:r}))},update(e){if(Te(),me.uTime.value=e,B.visible){let t=D(le);B.position.copy(t).multiplyScalar(m+re+.35+Math.sin(e*4)*.08),z.opacity=.35+.15*Math.sin(e*4)}if(U.forEach((t,n)=>{let r=P.at(t),i=D(t);L(t,r.position).addScaledVector(i,.12+.07*Math.sin(e*9+n)),te(t,r.userData.owner,r.quaternion).premultiply(W.setFromAxisAngle(xe.set(1,0,0).applyQuaternion(r.quaternion),.18*Math.sin(e*9+n)))}),H.visible){let t=H.userData.r*(1+.06*Math.sin(e*3));H.scale.set(t,t,t),D(ue,H.position).multiplyScalar(m+.03)}for(let t of J.children){if(t.userData.kind!==`star`)continue;let n=1+.18*Math.sin(e*3+t.userData.cell);t.scale.setScalar(t.userData.base*n),t.material.rotation=e*.4}}};return X}var Z=(e,t,n)=>Object.assign(document.createElement(e),{className:t??``,innerHTML:n??``}),Tt={tectonic:`<svg viewBox="0 0 24 24"><path d="M3 8h13l-3-3M21 16H8l3 3"/></svg>`,holes:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9M19 6a9 9 0 0 1-1 12M5 18A9 9 0 0 1 6 6"/></svg>`,nova:`<svg viewBox="0 0 24 24"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/></svg>`,night:`<svg viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>`},Et={tectonic:{name:`Tectonic shift`,line:`Every 3 turns a band of the planet slides round, carrying its discs. The band with racing arrows moves next.`},holes:{name:`Black holes`,line:`Six voids swallow cells. Nobody can play there, and lines stop at them, so some rings can never close.`},nova:{name:`Supernova stars`,line:`Play on a star (it must still be a legal move) and it bursts: every enemy disc touching it flips too.`},night:{name:`Night side`,line:`Night sweeps round the planet. Discs in the dark are asleep: lines through them capture nothing, unless you close a whole ring.`}};function Dt(e,t,n){let r=Z(`div`,`orb-seg`),i={el:r,value:t};for(let[a,o,s]of e){let e=Z(`button`,s??``,o);e.type=`button`,e.classList.toggle(`on`,a===t),e.addEventListener(`click`,()=>{i.value=a,r.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`on`,t===e)),n?.(a)}),r.append(e)}return i}var Ot=(e,t)=>{let n=Z(`div`,`orb-field`);return n.append(Z(`div`,`orb-label`,e),t.el??t),n};function kt(e,t){let n=Number(e.dataset.value??e.textContent)||0;if(e.dataset.value=t,n===t)return e.textContent=t;let r=performance.now(),i=Math.min(450,90+Math.abs(t-n)*40);cancelAnimationFrame(e._roll);let a=o=>{let s=Math.min(1,(o-r)/i);e.textContent=Math.round(n+(t-n)*(1-(1-s)**3)),s<1&&(e._roll=requestAnimationFrame(a))};e._roll=requestAnimationFrame(a)}function At(e,{names:t,actions:n,cells:r=128}){let i=Z(`div`,`orb`);i.style.pointerEvents=`none`,e.ui.root.append(i),i.append(Z(`div`,`orb-vignette`));let a=Z(`div`,`orb-score`),o=(e,n)=>{let r=Z(`div`,`orb-side ${e}`),i=Z(`div`,`orb-info`,`<div class="orb-name">${t[n]}</div><div class="orb-who"></div>`),a=Z(`div`,`orb-chip`),o=Z(`div`,`orb-count`,`2`);return e===`ember`?r.append(i,o,a):r.append(a,o,i),{s:r,count:o,who:i.querySelector(`.orb-who`)}},s={1:o(`ember`,1),2:o(`frost`,2)},c=Z(`div`,`orb-bar`,`<i class="e"></i><i class="f"></i><b></b>`),l=Z(`div`,`orb-score-row`);l.append(s[1].s,s[2].s),a.append(l,c);let u=Z(`div`,`orb-turn`);i.append(a,u);let d=Z(`div`,`orb-chips`),f=Z(`div`,`orb-tip`);i.append(d,f);let p={},m=(e,t)=>{f.innerHTML=t;let n=e.getBoundingClientRect();f.style.left=`${n.left}px`,f.style.top=`${n.bottom+8}px`,f.classList.add(`on`)},h=()=>f.classList.remove(`on`),g=Z(`div`,`orb-ticker`);i.append(g);let _=Z(`div`,`orb-tools`),v=(e,t,r,i)=>{let a=Z(`button`,`orb-tool`,`<span>${e}</span><kbd>${t}</kbd>`);return a.title=i??e,a.addEventListener(`click`,e=>{e.stopPropagation(),n.click?.(),r()}),a.addEventListener(`pointerenter`,()=>n.hover?.()),_.append(a),a};v(`New`,`N`,n.newGame,`New game`),v(`Undo`,`U`,n.undo,`Take back your last move`);let y=v(`Hints`,`H`,n.hints,`Show the moves you can make`),b=v(`Music`,`M`,n.music,`Music on/off`),x=Z(`input`,`orb-vol`);Object.assign(x,{type:`range`,min:0,max:1,step:.05,value:.7,title:`Volume`}),x.addEventListener(`input`,()=>n.volume?.(Number(x.value))),x.addEventListener(`pointerdown`,e=>e.stopPropagation()),_.append(x),v(`Menu`,`Esc`,n.menu,`Back to the menu`);let S=Z(`div`,`orb-help`,`Drag to spin the planet · scroll to zoom · click a glowing ring to play`);i.append(_,S);let C=[a,u,_,S,d,g],w={setScores(e){for(let t of[1,2])kt(s[t].count,e[t]);let t=Math.max(1,e[1]+e[2]);c.querySelector(`.e`).style.width=`${e[1]/r*100}%`,c.querySelector(`.f`).style.width=`${e[2]/r*100}%`,c.querySelector(`b`).style.left=`${e[1]/t*100}%`},bump(e){let t=s[e].count;t.classList.remove(`bump`),t.offsetWidth,t.classList.add(`bump`)},setPlayers(e){for(let t of[1,2])s[t].who.textContent=e[t]},setTurn(e,t){for(let t of[1,2])s[t].s.classList.toggle(`active`,t===e);u.innerHTML!==t&&(u.innerHTML=t,u.classList.remove(`swap`),u.offsetWidth,u.classList.add(`swap`)),u.dataset.p=e??0},setToggles({hints:e,music:t,volume:n}){y.classList.toggle(`off`,!e),b.classList.toggle(`off`,!t),n!==void 0&&(x.value=n)},setRules(e){for(let[t,n]of Object.entries(e)){let e=p[t];e||(e=p[t]=Z(`div`,`orb-rchip ${t}`,`<span class="ic">${Tt[t]}</span><span class="nm">${Et[t].name}</span><span class="st"></span>`),e.addEventListener(`pointerenter`,()=>m(e,`<b>${Et[t].name}</b>${Et[t].line}`)),e.addEventListener(`pointerleave`,h),d.append(e));let r=e.querySelector(`.st`);r.innerHTML!==(n??``)&&(r.innerHTML=n??``),e.classList.toggle(`alert`,/now|next/i.test(n??``))}for(let t of Object.keys(p))t in e||(p[t].remove(),delete p[t])},log({player:e,text:t,detail:n=``}){let r=Z(`div`,`orb-tick p${e}`,`<i></i><span>${t}</span><em>${n}</em>`);for(g.prepend(r);g.children.length>6;)g.lastChild.remove()},clearLog(){g.innerHTML=``},hideHelp(){S.style.opacity=`0`},showPlayUi(e){for(let t of C)t.classList.toggle(`orb-hidden`,!e);e||h()},banner(e,t=`var(--ink)`,n=``){i.querySelector(`.orb-banner`)?.remove();let r=Z(`div`,`orb-banner ${n}`,e);r.style.color=t,i.append(r),setTimeout(()=>r.remove(),n===`big`?2400:1900)},menu(e){return w.showPlayUi(!1),new Promise(r=>{let a=Z(`div`,`orb-overlay orb-menu`),o=Z(`div`,`orb-card`);o.append(Z(`div`,`orb-kicker`,`A strategy game in orbit`),Z(`h1`,`orb-title`,`ORB<br>OTHELLO`),Z(`p`,`orb-tag`,`<b>Flank</b> your rival’s discs to flip them. Rows run <b>all the way round</b> the world, and if your disc closes a <b>ring</b>, the whole ring is yours.`));let s=structuredClone(e),c=Ot(`Computer`,Dt([[`easy`,`Easy`],[`medium`,`Medium`],[`hard`,`Hard`]],s.level,e=>(s.level=e,n.click?.()))),l=Ot(`You play`,Dt([[1,`${t[1]} · first`,`ember`],[2,t[2],`frost`]],s.human,e=>(s.human=e,n.click?.()))),u=()=>[c,l].forEach(e=>e.classList.toggle(`hidden`,s.mode!==`ai`)),d=Z(`div`,`orb-rules`);for(let e of Object.keys(Et)){let t=Z(`button`,`orb-rule ${e}`,`<span class="ic">${Tt[e]}</span><span class="tx"><b>${Et[e].name}</b><small>${Et[e].line}</small></span><span class="sw"></span>`);t.type=`button`,t.classList.toggle(`on`,!!s.rules[e]),t.addEventListener(`click`,()=>{s.rules[e]=!s.rules[e],t.classList.toggle(`on`,s.rules[e]),n.click?.()}),t.addEventListener(`pointerenter`,()=>n.hover?.()),d.append(t)}let f=Z(`div`,`orb-label`,`Cosmic rules <span class="dimmer">· none = classic</span>`),p=Z(`div`,`orb-col`),m=Z(`div`,`orb-col`);p.append(Ot(`Mode`,Dt([[`ai`,`vs Computer`],[`hotseat`,`2 Players`]],s.mode,e=>(s.mode=e,u(),n.click?.()))),c,l,Ot(`Move hints`,Dt([[!0,`On`],[!1,`Off`]],s.hints,e=>(s.hints=e,n.click?.()))),Ot(`Graphics`,Dt([[`auto`,`Auto`],[`low`,`Low`],[`medium`,`Medium`],[`high`,`High`]],s.quality,e=>(s.quality=e,n.click?.(),n.quality?.(e))))),m.append(f,d);let h=Z(`div`,`orb-cols`);h.append(p,m),o.append(h),u();let g=Z(`button`,`orb-go`,`Launch`);g.addEventListener(`click`,()=>{a.classList.add(`leaving`),setTimeout(()=>a.remove(),380),r(s)}),g.addEventListener(`pointerenter`,()=>n.hover?.()),o.append(g,Z(`div`,`orb-foot`,`Drag to spin · scroll to zoom · U undo · H hints · M music · Esc menu`)),a.append(o),i.append(a),g.focus()})},end({title:e,color:t,scores:n,text:r,stats:a=[]}){return new Promise(o=>{let s=Z(`div`,`orb-overlay orb-end`),c=Z(`div`,`orb-card`),l=Z(`h1`,`orb-title`,e);t&&(l.style.background=`linear-gradient(90deg, ${t}, #fff 50%, ${t})`,l.style.webkitBackgroundClip=l.style.backgroundClip=`text`),c.append(l,Z(`div`,`orb-final`,`<span class="e">${n[1]}</span><i>vs</i><span class="f">${n[2]}</span>`),Z(`p`,`orb-tag`,r),Z(`div`,`orb-stats`,a.map(([e,t])=>`<div><b>${t}</b><span>${e}</span></div>`).join(``)));let u=Z(`button`,`orb-go`,`Play again`),d=Z(`button`,`orb-ghost`,`Change mode`);u.addEventListener(`click`,()=>(s.remove(),o(`again`))),d.addEventListener(`click`,()=>(s.remove(),o(`menu`))),c.append(u,d),s.append(c),i.append(s)})},closeOverlays(){i.querySelectorAll(`.orb-overlay`).forEach(e=>e.remove())}};return w}var Q={radius:5,latMax:60*Math.PI/180,camera:{distance:16,min:8.5,max:26},aiPauseMs:320,passPauseMs:1500,flipStep:.085,musicVolume:.5,names:{1:`Ember`,2:`Frost`},colors:{a:`#ffb43a`,aGlow:`#ff6a00`,b:`#5fd8ff`,bFace:`#3fb6ea`,bGlow:`#18b8ff`,rim:`#3a3550`,asleep:`#5a6390`,grid:`#a99bff`,nightGrid:`#6a4bd8`,atmo:`#5fa8ff`,sunset:`#c0607a`,companion:`#9cc4ff`,crystal:`#4f86c4`,crystalGlow:`#1d3fae`,auroraA:`#3dffc4`,auroraB:`#7a4dff`,ringA:`#9a8a76`,ringB:`#5a5672`,band:`#ff8a4c`,star:`#fff1cf`}},$={ember:[`/assets/sounds/kenney-impact/impactMetal_light_000.ogg`,`/assets/sounds/kenney-impact/impactMetal_light_001.ogg`,`/assets/sounds/kenney-impact/impactMetal_light_002.ogg`],frost:[`/assets/sounds/kenney-impact/impactGlass_light_000.ogg`,`/assets/sounds/kenney-impact/impactGlass_light_001.ogg`,`/assets/sounds/kenney-impact/impactGlass_light_002.ogg`],flip:`/assets/sounds/kenney-interface/glass_002.ogg`,hover:`/assets/sounds/kenney-interface/tick_002.ogg`,invalid:`/assets/sounds/kenney-interface/error_004.ogg`,pass:`/assets/sounds/kenney-interface/question_001.ogg`,undo:`/assets/sounds/kenney-interface/back_001.ogg`,click:`/assets/sounds/kenney-interface/click_001.ogg`,start:`/assets/sounds/kenney-interface/maximize_001.ogg`,ring:`/assets/sounds/kenney-scifi/forceField_000.ogg`,boom:`/assets/sounds/kenney-scifi/lowFrequency_explosion_000.ogg`,nova:`/assets/sounds/kenney-scifi/forceField_002.ogg`,rumble:`/assets/sounds/kenney-scifi/lowFrequency_explosion_001.ogg`,whoosh:`/assets/sounds/kenney-scifi/spaceEngineLarge_000.ogg`,win:`/assets/music/space-victory.ogg`,lose:`/assets/music/space-defeat.ogg`},jt={calm:`/assets/music/space-ambient.ogg`,intense:`/assets/music/space-urgent-loop.ogg`},Mt=`ABCDEFGHIJKLMNOP`,Nt=.06,Pt=e=>`${Mt[K(e)]}${G(e)+1}`,Ft={low:{bloom:!1,grade:!1},medium:{bloom:{strength:.55,radius:.45,threshold:.92},grade:!1},high:{bloom:{strength:.72,radius:.55,threshold:.86},grade:{saturation:1.08,contrast:1.06,shadows:`#0d0628`}}},It={async setup(e){let{look:t,audio:n,fx:r,input:i,camera:a,renderer:o}=e,s=Q.colors,c=e=>e===1?s.a:s.b,l=e=>e===1?`var(--ember)`:`var(--frost)`;t.preset(`space`,{sky:`#010106`,env:!1,vignette:0,fog:!1,sun:{color:`#fff0d8`,intensity:2.6},rim:{color:s.companion,intensity:1.4},hemi:{sky:`#3a3070`,ground:`#05030f`,intensity:.25}}),t.sun.castShadow=!1;let u=``,d=()=>{u!==t.quality&&(u=t.quality,t.set(Ft[t.quality]??Ft.medium))},f=new P(o).fromScene(new re,.04).texture,p={radius:Q.radius,rows:8,cols:16,latMax:Q.latMax,colors:s,env:f,quality:t.quality},m=lt(e,p),h=mt(e,p),g=wt(e,p);d();let _=e.cameraRig.orbit({target:[0,0,0],distance:Q.camera.distance,minDistance:Q.camera.min,maxDistance:Q.camera.max,maxPolarAngle:Math.PI-.25}),v=()=>g.normalOf(55).add(g.normalOf(72)).normalize().add(new I(0,.22,0)).setLength(Q.camera.distance);a.position.copy(v()).multiplyScalar(1.45),Object.assign(_,{minPolarAngle:.25,enablePan:!1,rotateSpeed:.55,zoomSpeed:.8,dampingFactor:.07,autoRotateSpeed:.35});let y=new I(.4,.6,.7).normalize(),b=new I,x=new I(-1,.4,0).normalize(),S=new I,C=new I,w=new I,T=new I,E=0,ee=e=>{if(T.copy(a.position).normalize(),C.crossVectors(a.up,T).normalize(),w.crossVectors(T,C),D.rules.night){let t=((he(D)[0]-E)%16+24)%16-8;E=(E+t*Math.min(1,e*2.5)+16)%16,m.setNight(E,5,!0)}else m.setNight(0,0,!1);b.copy(T).multiplyScalar(.75).addScaledVector(w,.55).addScaledVector(C,-.45).normalize(),y.lerp(b,Math.min(1,e*6)).normalize(),S.copy(T).multiplyScalar(-.85).addScaledVector(C,.42).addScaledVector(w,.3).normalize(),x.lerp(S,Math.min(1,e*3)).normalize(),m.setLight(y),m.setRim(x),t.sun.position.copy(y).multiplyScalar(50),t.sun.target.position.set(0,0,0),t.rim.position.copy(x).multiplyScalar(50),t.rim.target.position.set(0,0,0)},D=pe(),O={mode:`ai`,level:`medium`,human:1,hints:!0,rules:Object.fromEntries(ue.map(e=>[e,!1])),quality:t.qualityMode??`auto`},k=!0,te=.8,A=0,j=!1,M=!1,N=!1,F=null,ne=[],L=null,R=null,z=e=>O.mode===`ai`&&e!==O.human,B=()=>!j&&!M&&!N&&!z(D.current),V=(e,t)=>n.play(e,t).catch(e=>console.warn(e.message)),ae=e=>e[Math.floor(Math.random()*e.length)],H=null,oe=null,se=!1;function ce(){!k||H||oe||(oe=n.musicLayers(jt,{volume:Q.musicVolume,xfade:4,fadeIn:3}).then(e=>{if(oe=null,!k)return e.stop(.1);H=e,N&&e.muffle(900,.01),e.setIntensity(+!!se,.01)}).catch(e=>(oe=null,console.warn(e.message))))}function le(){k=!k,k?ce():(n.stopMusic(),H=null),q()}function U(){let e=Ee(D),t=(e[1]+e[2])/128,n=Math.abs(e[1]-e[2]);!se&&(t>.5&&n<=14||t>.72)?se=!0:se&&t<.4&&(se=!1),H?.setIntensity(+!!se,6)}window.addEventListener(`pointerdown`,ce),window.addEventListener(`keydown`,ce);let W=At(e,{names:Q.names,cells:128,actions:{newGame:()=>we(),undo:()=>De(),hints:()=>{O.hints=!O.hints,q()},music:()=>le(),volume:e=>{te=e,n.setVolume(`master`,e)},quality:e=>t.quality=e,menu:()=>Oe(),click:()=>(ce(),V($.click,{volume:.35})),hover:()=>V($.hover,{volume:.12,rate:1.3})}});n.setVolume(`master`,te);let de=()=>{let e={};if(D.rules.tectonic){let t=ye(D);e.tectonic=t.in===1?`after this move`:`in ${t.in} moves`}if(D.rules.holes&&(e.holes=`${[...D.cells].filter(e=>e===3).length} voids`),D.rules.nova){let t=D.stars.reduce((e,t)=>e+t,0);e.nova=t?`${t} star${t>1?`s`:``} left`:`all used`}if(D.rules.night){let t=new Set(he(D));e.night=`${[...D.cells].filter((e,n)=>(e===1||e===2)&&t.has(K(n))).length} asleep`}return e},q=()=>{W.setToggles({hints:O.hints,music:k});let e=O.hints&&B()?Y(D):[],t=B()&&F!==null&&xe(D,F).length>0;ne=t?xe(D,F).flat():[],m.setCells(D.cells,{legal:e,preview:ne,hover:t?F:null}),m.setMarks(D.stars),m.setTurn(c(D.current)),g.setGhost(t?F:null,c(D.current)),g.setPreview(ne),g.setAsleep(he(D));let n=ye(D);if(n&&n.in<=2&&!M?m.setBand(n.row,n.k,n.in===1?1:.5):m.setBand(0,1,0),W.setRules(de()),M)return;if(L)return W.setTurn(...L);let r=Q.names[D.current];z(D.current)?W.setTurn(D.current,`${r} is thinking<span class="dots"></span>`):O.mode===`ai`?W.setTurn(D.current,`Your move`):W.setTurn(D.current,`${r} to move`)},fe=()=>W.setPlayers(O.mode===`ai`?{[O.human]:`You`,[3-O.human]:`Computer · ${Pe[O.level].label}`}:{1:`Player 1`,2:`Player 2`}),J=e=>new Promise(t=>setTimeout(t,e));async function me(){let e=A,t=ke(D);if(t.over)return Se(t);if(Ae(D)){j=!0,L=[D.current,`${Q.names[D.current]} passes`],q();let t=D.rules.night?`nothing to flank in daylight`:`no move flanks anything`;if(W.banner(`${Q.names[D.current]} passes<small>${t}</small>`,l(D.current)),V($.pass,{volume:.6}),await J(Q.passPauseMs),L=null,e!==A)return;let n=Te(D,-1);return W.log({player:n.player,text:`Pass`,detail:``}),n.shift&&await ve(n.shift),e===A?(j=!1,me()):void 0}q(),je.refresh(),z(D.current)&&ge()}async function ge(){let e=A;j=!0,q();let t=performance.now(),n=await Qe(D,O.level,{cancelled:()=>e!==A,sliceMs:5,pause:()=>new Promise(requestAnimationFrame)});e===A&&n!==void 0&&(await J(Math.max(0,Q.aiPauseMs-(performance.now()-t))),e===A&&(n!==-1&&await g.faceCell(n),e===A&&await be(n)))}function _e({color:e,slow:n=.3,hold:i=.55,shake:a=.16}){if(r.slowMo(n,i),r.flash(e,.45),r.shake(a,.5),H?.duck(.3,1.2),t.quality!==`low`){let e={a:1};r.tween(e,{a:0},{duration:.9,onUpdate:()=>t.set({aberration:e.a*.9})}).then(()=>t.set({aberration:0}))}}async function ve({row:e,k:t}){let n=A;W.banner(`Tectonic shift<small>band ${e+1} slides ${Math.abs(t)} ${t>0?`east`:`west`}</small>`,`#ffb08a`),V($.rumble,{volume:.7,rate:.7}),r.shake(.05,1.1),m.rowFlash(e,s.band),m.setBand(0,1,0),H?.duck(.5,.8),R.shifts++,await g.animateShift(e,t,D),n===A&&q()}async function be(e){let t=A;j=!0,F=null;let n=Te(D,e);if(!n)return j=!1;if(n.move===-1)return j=!1,me();z(n.player)||W.hideHelp();let i=D.cells.slice();if(n.shift){let{row:e,k:t}=n.shift;for(let n=0;n<16;n++)i[e*16+n]=D.cells[e*16+((n+t)%16+16)%16]}m.setCells(i),g.setGhost(null),g.setPreview([]);let a=Ee(D),o={1:a[1],2:a[2]};o[n.player]-=n.flipped.length,o[3-n.player]+=n.flipped.length,W.setScores(o);let u=n.lines.find(e=>e.length>=15),d=!!u,f=c(n.player);L=[n.player,`${Q.names[n.player]} captures ${n.flipped.length}`],W.setTurn(...L);let p=n.flipped.length>=6||d;R.best[n.player]=Math.max(R.best[n.player],n.flipped.length);let h=[d&&`ring`,n.nova?.length&&`nova`].filter(Boolean).join(` · `);W.log({player:n.player,text:Pt(e),detail:`+${n.flipped.length}${h?` · ${h}`:``}`}),await g.animateMove(n,{step:Q.flipStep,onLand:()=>{let t=g.normalOf(e);V(ae(n.player===1?$.ember:$.frost),{volume:.8,rate:.95+Math.random()*.1}),m.ripple(t,f),g.shockwave(e,f,{size:p?3.4:2.2}),r.burst(g.restPos(e),{color:f,count:p?40:24,speed:2.8,life:.6,size:.16,gravity:0,spread:0}),g.nudge(p?.6:.3),d?(R.rings[n.player]++,W.banner(`Ring closed!<small>${u.length} discs round the world</small>`,l(n.player),`big`),V($.ring,{volume:.75}),V($.boom,{volume:.5,rate:.8}),m.rowFlash(G(e),f,K(e)),_e({color:f})):p&&r.shake(.07,.25)},onNova:()=>{R.novas[n.player]++,W.banner(`Supernova!<small>${n.nova.length} touching disc${n.nova.length===1?``:`s`} flip</small>`,`#fff1cf`,`big`),V($.boom,{volume:.7}),V($.nova,{volume:.6}),g.shockwave(e,s.star,{size:6,duration:.9}),r.burst(g.restPos(e).multiplyScalar(1.02),{color:s.star,count:70,speed:4.5,life:.9,size:.2,gravity:0,spread:0}),m.ripple(g.normalOf(e),s.star),_e({color:`#fff1cf`,slow:.35,hold:.4,shake:.2})},onFlip:(e,t)=>{V($.flip,{volume:.3,rate:Math.min(2.4,.85+t*.07)}),r.burst(g.restPos(e),{color:f,count:8,speed:1.6,life:.4,size:.12,gravity:0,spread:0}),o[n.player]++,o[3-n.player]--,W.bump(n.player),W.setScores(o)}}),L=null,t===A&&(n.shift&&await ve(n.shift),t===A&&(j=!1,W.setScores(Ee(D)),U(),me()))}function Se(e){M=!0,j=!1,q();let{winner:t,scores:n}=e,i=A,o=Q.names[t],s=t?`${o} wins`:`Draw`,l=t?`${o} holds ${n[t]} of ${128-[...D.cells].filter(e=>e===3).length} cells.`:`The planet is split exactly in two.`,u=O.mode===`ai`&&t===O.human;O.mode===`ai`&&t&&(s=u?`Victory`:`Defeat`,l=u?`You beat the ${Pe[O.level].label.toLowerCase()} computer. ${l}`:`The ${Pe[O.level].label.toLowerCase()} computer wins this one. ${l}`),W.setTurn(t||null,t?`${o} wins`:`Draw`);let d=O.mode===`ai`&&t&&!u;if(H?.duck(.15,d?5:6,{release:3}),V(d?$.lose:$.win,{volume:.9}),t){let e=D.history.entries.findLast(e=>e.move>=0),n=e?g.normalOf(e.move):a.position.clone().normalize(),o=c(t);m.flood(n,o),m.ripple(n,o),h.setAurora(o,t===1?`#ff3d6e`:`#7a4dff`,1.1);let s=[...D.cells].map((e,n)=>e===t?n:-1).filter(e=>e>=0);for(let e=0;e<12;e++)setTimeout(()=>{if(i!==A||!s.length)return;let t=ae(s);r.burst(g.restPos(t).multiplyScalar(1.15),{color:e%3?o:`#ffffff`,count:46,speed:3.2,life:1.1,size:.18,gravity:0,spread:0}),g.shockwave(t,o,{size:4,duration:.9})},300+e*220);r.flash(o,.6)}_.autoRotate=!0,g.flyTo(a.position.clone().setLength(21),{duration:2.4}),setTimeout(async()=>{if(i!==A)return;let e=[[`Biggest capture`,Math.max(R.best[1],R.best[2])],[`Rings closed`,R.rings[1]+R.rings[2]],...D.rules.nova?[[`Supernovas`,R.novas[1]+R.novas[2]]]:[],...D.rules.tectonic?[[`Shifts`,R.shifts]]:[],[`Moves`,D.history.entries.filter(e=>e.move>=0).length]],r=await W.end({title:s,color:t?c(t):null,scores:n,text:l,stats:e});i===A&&(_.autoRotate=!1,r===`again`?we():Oe())},2600)}function Ce(){m.flood(null),h.setAurora(s.auroraA,s.auroraB,.75),e.timeScale=1}async function we({intro:e=!1}={}){A++;let t=A;if(L=null,D=pe({rules:O.rules,seed:Math.random()*2**31>>>0}),E=he(D)[0]??0,R={best:{1:0,2:0},rings:{1:0,2:0},novas:{1:0,2:0},shifts:0},M=!1,j=!0,F=null,se=!1,H?.setIntensity(0,3),_.autoRotate=!1,Ce(),W.closeOverlays(),W.clearLog(),g.sync(D),fe(),W.setScores(Ee(D)),q(),e){if(W.showPlayUi(!1),V($.whoosh,{volume:.45,rate:.75}),_.enabled=!1,await g.intro(v()),_.enabled=!0,t!==A)return;let e=ue.filter(e=>D.rules[e]).map(e=>Et[e].name);W.banner(`${e.length?`Cosmic match`:`Classic match`}<small>${e.length?e.join(` · `):`flank · wrap · close rings`}</small>`,`var(--ink)`)}else g.faceCell(55,{minAngle:.3});W.showPlayUi(!0),V($.start,{volume:.45}),m.ripple(g.normalOf(55),s.grid),j=!1,me()}function De(){if(N||!D.history.size)return;let e=D.history.stepsBackTo(e=>e.move!==-1&&!z(e.player));if(e){A++,L=null;for(let t=0;t<e;t++)X(D);M=!1,j=!1,F=null,_.autoRotate=!1,Ce(),W.closeOverlays(),W.showPlayUi(!0),g.sync(D),W.setScores(Ee(D)),W.log({player:D.current,text:`Undo`,detail:`${e} move${e>1?`s`:``}`}),V($.undo,{volume:.7}),r.flash(`#6f5bff`,.25),U(),me()}}async function Oe(){A++,j=!0,N=!0,W.closeOverlays(),Ce(),_.autoRotate=!0,g.frame(.2),g.flyTo(a.position.clone().setLength(Q.camera.distance*1.3),{duration:1.2}),H?.muffle(900,1.2),H?.setIntensity(0,2),q(),O=await W.menu(O),N=!1,t.quality=O.quality,H?.muffle(null,2),g.frame(0,1.2,Nt),ce(),we({intro:!0})}let je=ie(e,{targets:[m.mesh],cellAt:e=>g.cellAtPoint(e.point),onHover:e=>{F=e,B()&&e!==null&&xe(D,e).length&&V($.hover,{volume:.2}),q()},onPick:e=>{B()&&(xe(D,e).length?be(e):V($.invalid,{volume:.4}))}}),Me=0;e.onUpdate((e,t)=>{d(),ee(Math.max(.001,t-Me)),Me=t,m.update(t),g.update(t),h.update(t,a,y,x),!N&&(i.wasPressed(`KeyU`)&&De(),i.wasPressed(`KeyN`)&&we(),i.wasPressed(`KeyH`)&&(O.hints=!O.hints,q()),i.wasPressed(`KeyM`)&&le(),i.wasPressed(`Escape`)&&Oe())}),await n.preload(...$.ember,...$.frost,$.flip,$.hover,$.click).catch(e=>console.warn(e.message)),g.sync(D),q(),g.beam([0,1,2],s.a,{duration:.02}),g.shockwave(0,s.a,{duration:.02}),r.burst(new I,{count:1,life:.02}),o.compile(e.scene,a),Oe()}};export{It as default};