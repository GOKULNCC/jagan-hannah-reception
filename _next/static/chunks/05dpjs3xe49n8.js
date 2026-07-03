(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81430,e=>{"use strict";var i=e.i(43476),o=e.i(90072),t=e.i(71645),u=e.i(25234),a=e.i(90222);let n=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,s=`
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
`,r=`
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
`;function l(e,i){return new o.ShaderMaterial({vertexShader:n,fragmentShader:e,uniforms:{uTime:{value:10*Math.random()},uSeed:{value:i},uFade:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:o.AdditiveBlending,toneMapped:!1})}function d({position:e,seed:o,fixedFade:n}){let m=(0,t.useMemo)(()=>l(s,o),[o]),v=(0,t.useMemo)(()=>l(r,o),[o]);return(0,u.useFrame)((e,i)=>{let o=Math.min(i,.05),t=n??(0,a.heroFade)();m.uniforms.uTime.value+=o,v.uniforms.uTime.value+=o,m.uniforms.uFade.value=t,v.uniforms.uFade.value=t}),(0,i.jsxs)("group",{position:e,children:[(0,i.jsx)("mesh",{material:v,position:[0,-.15,-.01],frustumCulled:!1,children:(0,i.jsx)("planeGeometry",{args:[2.6,1.5]})}),(0,i.jsx)("mesh",{material:m,position:[0,.45,0],frustumCulled:!1,children:(0,i.jsx)("planeGeometry",{args:[1,1.7]})})]})}e.s(["Diyas",0,function({count:e=9,baseY:o=-4,fixedFade:u}){let a=(0,t.useMemo)(()=>{let i=[];for(let t=0;t<e;t++){let u=1===e?.5:t/(e-1),a=(u-.5)*18,n=o-.6*Math.pow((u-.5)*2,2),s=-1+2*Math.random();i.push({position:[a,n,s],seed:1.37*t+.2})}return i},[e,o]);return(0,i.jsx)("group",{children:a.map((e,o)=>(0,i.jsx)(d,{position:e.position,seed:e.seed,fixedFade:u},o))})}])}]);