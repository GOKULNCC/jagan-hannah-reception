(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65894,e=>{"use strict";var i=e.i(43476),t=e.i(75056),o=e.i(79877),n=e.i(87652),a=e.i(71645),s=e.i(39213);e.s(["FxCanvas",0,function({children:e,className:l="",camera:u,bloom:r=!0,bloomIntensity:d=.8}){let m=(0,a.useRef)(null),c=(0,n.useInView)(m,{margin:"0px 0px -5% 0px"}),{dpr:v,tier:f}=(0,s.useCapability)();return(0,i.jsx)("div",{ref:m,className:`pointer-events-none absolute inset-0 ${l}`,"aria-hidden":!0,children:(0,i.jsx)(t.Canvas,{dpr:v,gl:{alpha:!0,antialias:!0,powerPreference:"high-performance"},camera:{position:u?.position??[0,0,16],fov:u?.fov??45},frameloop:c?"always":"never",children:(0,i.jsxs)(a.Suspense,{fallback:null,children:[e,r&&"high"===f?(0,i.jsx)(o.EffectComposer,{multisampling:0,children:(0,i.jsx)(o.Bloom,{intensity:d,luminanceThreshold:.3,luminanceSmoothing:.4,mipmapBlur:!0})}):null]})})})}])},81430,e=>{"use strict";var i=e.i(43476),t=e.i(90072),o=e.i(71645),n=e.i(25234),a=e.i(90222);let s=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,l=`
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uSeed;
  uniform float uFade;

  void main() {
    vec2 uv = vUv;
    float sway = sin(uTime * 7.0 + uSeed * 6.28) * 0.03
               + sin(uTime * 11.0 + uSeed * 3.0) * 0.02;
    uv.x += sway * smoothstep(0.0, 1.0, uv.y);

    vec2 d = uv - vec2(0.5, 0.30);
    d.x *= 2.3;
    float taper = mix(1.0, 0.25, smoothstep(0.2, 1.0, uv.y));
    d.x /= taper;
    float dist = length(d);

    float core = smoothstep(0.45, 0.0, dist);
    float flick = 0.75 + 0.25 * sin(uTime * 12.0 + uSeed * 8.0)
                + 0.12 * sin(uTime * 27.0 + uSeed);
    vec3 col = mix(vec3(1.0, 0.25, 0.05), vec3(1.0, 0.9, 0.5),
                   smoothstep(0.1, 0.7, uv.y));
    float intensity = core * flick;
    gl_FragColor = vec4(col * intensity, intensity * uFade);
  }
`,u=`
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uSeed;
  uniform float uFade;

  void main() {
    vec2 d = (vUv - 0.5) * vec2(1.0, 1.7);
    float dist = length(d);
    float g = smoothstep(0.5, 0.0, dist);
    float flick = 0.8 + 0.2 * sin(uTime * 9.0 + uSeed * 5.0);
    vec3 col = vec3(1.0, 0.55, 0.18);
    gl_FragColor = vec4(col * g * flick, g * flick * uFade * 0.8);
  }
`;function r(e,i){return new t.ShaderMaterial({vertexShader:s,fragmentShader:e,uniforms:{uTime:{value:10*Math.random()},uSeed:{value:i},uFade:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:t.AdditiveBlending,toneMapped:!1})}function d({position:e,seed:t,fixedFade:s}){let m=(0,o.useMemo)(()=>r(l,t),[t]),c=(0,o.useMemo)(()=>r(u,t),[t]);return(0,n.useFrame)((e,i)=>{let t=Math.min(i,.05),o=s??(0,a.heroFade)();m.uniforms.uTime.value+=t,c.uniforms.uTime.value+=t,m.uniforms.uFade.value=o,c.uniforms.uFade.value=o}),(0,i.jsxs)("group",{position:e,children:[(0,i.jsx)("mesh",{material:c,position:[0,-.15,-.01],frustumCulled:!1,children:(0,i.jsx)("planeGeometry",{args:[2.6,1.5]})}),(0,i.jsx)("mesh",{material:m,position:[0,.45,0],frustumCulled:!1,children:(0,i.jsx)("planeGeometry",{args:[1,1.7]})})]})}e.s(["Diyas",0,function({count:e=9,baseY:t=-4,fixedFade:n}){let a=(0,o.useMemo)(()=>{let i=[];for(let o=0;o<e;o++){let n=1===e?.5:o/(e-1),a=(n-.5)*18,s=t-.6*Math.pow((n-.5)*2,2),l=-1+2*Math.random();i.push({position:[a,s,l],seed:1.37*o+.2})}return i},[e,t]);return(0,i.jsx)("group",{children:a.map((e,t)=>(0,i.jsx)(d,{position:e.position,seed:e.seed,fixedFade:n},t))})}])},17729,e=>{"use strict";var i=e.i(43476),t=e.i(65894),o=e.i(82541),n=e.i(81430);e.s(["default",0,function(){return(0,i.jsxs)(t.FxCanvas,{bloom:!0,bloomIntensity:.8,children:[(0,i.jsx)(o.Petals,{count:200,palette:o.MARIGOLD_PALETTE,speed:.55}),(0,i.jsx)(n.Diyas,{count:7,baseY:-6.5,fixedFade:.9})]})}])},83940,e=>{e.n(e.i(17729))}]);