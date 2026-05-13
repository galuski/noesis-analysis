'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './../../app/styles/components/layout/Globe.module.css';

const fragmentShaderMap = `
    uniform sampler2D u_map_tex;
    varying float vOpacity;
    varying vec2 vUv;

    void main() {
        vec3 color = texture2D(u_map_tex, vUv).rgb;
        color -= .2 * length(gl_PointCoord.xy - vec2(.5));
        float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
        if (dot < 0.5) discard;
        gl_FragColor = vec4(color, dot * vOpacity);
    }
`;

const vertexShaderMap = `
    uniform sampler2D u_map_tex;
    uniform float u_dot_size;

    varying float vOpacity;
    varying vec2 vUv;

    void main() {
        vUv = uv;

        // mask with world map
        float visibility = step(.2, texture2D(u_map_tex, uv).r);
        gl_PointSize = visibility * u_dot_size;

        // make back dots semi-transparent
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vOpacity = (1. / length(mvPosition.xyz) - .7);
        vOpacity = clamp(vOpacity, .03, 1.);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
`;

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const containerEl = containerRef.current;
    const canvas3D = canvasRef.current;

    // הגדרות סצנה בסיסיות
    const renderer = new THREE.WebGLRenderer({ canvas: canvas3D, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
    camera.position.z = 1.1;

    let mapMaterial: THREE.ShaderMaterial;
    let globe: THREE.Points;
    let globeMesh: THREE.Mesh;
    let animationFrameId: number;

    // פונקציית עדכון גודל
    const updateSize = () => {
      const minSide = 0.65 * Math.min(window.innerWidth, window.innerHeight);
      containerEl.style.width = `${minSide}px`;
      containerEl.style.height = `${minSide}px`;
      renderer.setSize(minSide, minSide);
      
      if (mapMaterial) {
        mapMaterial.uniforms.u_dot_size.value = 0.04 * minSide;
      }
    };

    // יצירת הגלובוס
    const createGlobe = (earthTexture: THREE.Texture) => {
      const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
      
      mapMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShaderMap,
        fragmentShader: fragmentShaderMap,
        uniforms: {
          u_map_tex: { value: earthTexture },
          u_dot_size: { value: 0 },
        },
        transparent: true,
      });

      globe = new THREE.Points(globeGeometry, mapMaterial);
      scene.add(globe);

      globeMesh = new THREE.Mesh(
        globeGeometry,
        new THREE.MeshBasicMaterial({
          color: 0x222222,
          transparent: true,
          opacity: 0.05,
        })
      );
      scene.add(globeMesh);
    };

    // טעינת הטקסטורה והתחלת הרינדור
    new THREE.TextureLoader().load(
      'https://ksenia-k.com/img/earth-map-colored.png',
      (mapTex) => {
        mapTex.repeat.set(1, 1);
        createGlobe(mapTex);
        updateSize();
        render();
      }
    );

    // לולאת רינדור
    const render = () => {
      // סיבוב אוטומטי של הגלובוס
      if (globe) globe.rotation.y += 0.002;
      if (globeMesh) globeMesh.rotation.y += 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    // מאזין לשינוי גודל חלון
    window.addEventListener('resize', updateSize);

    // ניקוי הקומפוננטה ביציאה
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
      
      if (globe) {
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
      }
      if (globeMesh) {
        globeMesh.geometry.dispose();
        (globeMesh.material as THREE.Material).dispose();
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.globeWrapper} ref={containerRef}>
        <canvas className={styles.globeCanvas} id="globe-3d" ref={canvasRef} />
      </div>
    </div>
  );
}