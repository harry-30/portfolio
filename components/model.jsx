// components/model.jsx
'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader }    from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ThreeScene() {
  const mountRef = useRef();

  useEffect(() => {
    const container = mountRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 1.5, 3);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2.0));
    const dir = new THREE.DirectionalLight(0xffffff, 1.5);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    // Controls with faster, clockwise auto-rotate
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping   = true;
    controls.dampingFactor   = 0.1;
    controls.autoRotate      = true;
    controls.autoRotateSpeed = -2.0;

    // Animation mixer (if you have animations)
    const clock = new THREE.Clock();
    let mixer = null;

    // Load model
    new GLTFLoader().load(
      '/models/snake.glb',
      (gltf) => {
        const model = gltf.scene;

        model.scale.set(1.5, 1.5, 1.5);

        model.rotation.y = -Math.PI/2;

        scene.add(model);

        // play animations if any
        mixer = new THREE.AnimationMixer(model);
        const clip = THREE.AnimationClip.findByName(gltf.animations, 'crawl');
        if (clip) mixer.clipAction(clip).play();
      },
      undefined,
      console.error
    );

    // Resize handler
    const resize = () => {
      const w  = container.clientWidth;
      const h  = container.clientHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);
    resize();

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
