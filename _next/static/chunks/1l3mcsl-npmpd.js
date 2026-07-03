(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65894,e=>{"use strict";var o=e.i(43476),r=e.i(75056),t=e.i(79877),a=e.i(87652),i=e.i(71645),n=e.i(39213);e.s(["FxCanvas",0,function({children:e,className:l="",camera:s,bloom:u=!0,bloomIntensity:v=.8}){let m=(0,i.useRef)(null),c=(0,a.useInView)(m,{margin:"0px 0px -5% 0px"}),{dpr:f,tier:p}=(0,n.useCapability)();return(0,o.jsx)("div",{ref:m,className:`pointer-events-none absolute inset-0 ${l}`,"aria-hidden":!0,children:(0,o.jsx)(r.Canvas,{dpr:f,gl:{alpha:!0,antialias:!0,powerPreference:"high-performance"},camera:{position:s?.position??[0,0,16],fov:s?.fov??45},frameloop:c?"always":"never",children:(0,o.jsxs)(i.Suspense,{fallback:null,children:[e,u&&"high"===p?(0,o.jsx)(t.EffectComposer,{multisampling:0,children:(0,o.jsx)(t.Bloom,{intensity:v,luminanceThreshold:.3,luminanceSmoothing:.4,mipmapBlur:!0})}):null]})})})}])},4337,e=>{"use strict";var o=e.i(43476),r=e.i(65894),t=e.i(90072),a=e.i(71645),i=e.i(25234);let n=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,l=`
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uReveal;
  uniform float uFade;
  uniform vec3 uColInner;
  uniform vec3 uColMid;
  uniform vec3 uColOuter;

  float ring(float r, float freq, float t) {
    return 0.5 + 0.5 * sin(r * freq - t);
  }

  void main() {
    vec2 p = (vUv - 0.5) * 2.0; // -1..1
    float r = length(p);
    float a = atan(p.y, p.x);
    float t = uTime;

    float v = 0.0;
    // 12-fold outer petals
    v += smoothstep(0.72, 1.0, abs(cos(a * 12.0)) * ring(r, 14.0, t * 0.6));
    // 24-fold fine lace
    v += 0.55 * smoothstep(0.8, 1.0, abs(cos(a * 24.0 + 0.3)) * ring(r, 28.0, -t * 0.4));
    // 6-fold inner bloom
    v += 0.8 * smoothstep(0.68, 1.0, abs(cos(a * 6.0)) * ring(r, 8.0, t * 0.5));
    // concentric outline rings
    float rr = abs(sin(r * 22.0 - t * 0.5));
    v += smoothstep(0.94, 1.0, rr) * 0.4 * smoothstep(1.0, 0.2, r);
    // bright centre
    v += smoothstep(0.10, 0.0, r) * 1.3;

    // draw-in from centre outward
    v *= smoothstep(uReveal + 0.06, uReveal - 0.06, r);
    // circular edge fade
    v *= smoothstep(1.0, 0.62, r);

    vec3 col = mix(uColInner, uColMid, smoothstep(0.0, 0.5, r));
    col = mix(col, uColOuter, smoothstep(0.5, 1.0, r));

    float alpha = clamp(v, 0.0, 1.0) * uFade;
    gl_FragColor = vec4(col * (0.7 + v * 0.6), alpha);
  }
`;var s=e.i(90222);function u({fixedFade:e}={}){let r=(0,a.useRef)(null),v=(0,a.useRef)(0),m=(0,a.useMemo)(()=>new t.ShaderMaterial({vertexShader:n,fragmentShader:l,uniforms:{uTime:{value:0},uReveal:{value:0},uFade:{value:1},uColInner:{value:new t.Color("#f0d27a")},uColMid:{value:new t.Color("#f4a52e")},uColOuter:{value:new t.Color("#c2186b")}},transparent:!0,depthWrite:!1,depthTest:!1,blending:t.AdditiveBlending,toneMapped:!1}),[]);return(0,i.useFrame)((o,t)=>{let a=Math.min(t,.05);m.uniforms.uTime.value+=a,v.current=Math.min(1.1,v.current+.5*a),m.uniforms.uReveal.value=v.current,m.uniforms.uFade.value=e??(0,s.heroFade)(),r.current&&(r.current.rotation.z+=.025*a)}),(0,o.jsx)("mesh",{ref:r,material:m,position:[0,.5,-4],frustumCulled:!1,children:(0,o.jsx)("planeGeometry",{args:[18,18]})})}var v=e.i(82541);e.s(["default",0,function(){return(0,o.jsxs)(r.FxCanvas,{bloom:!0,bloomIntensity:.7,children:[(0,o.jsx)(u,{fixedFade:1}),(0,o.jsx)(v.Petals,{count:240,palette:v.JASMINE_PALETTE,speed:.7})]})}],4337)},39598,e=>{e.n(e.i(4337))}]);