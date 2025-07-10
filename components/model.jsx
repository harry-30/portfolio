'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader }    from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ThreeScene() {
  const mountRef = useRef();

  useEffect(() => {
    const container = mountRef.current;

    // 1) Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // 2) Scene & Camera
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 1.5, 3);

    // 3) Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2.0));
    const dir = new THREE.DirectionalLight(0xffffff, 1.5);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    // 4) Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping   = true;
    controls.dampingFactor   = 0.1;
    controls.autoRotate      = true;
    controls.autoRotateSpeed = -2.0;

    // 5) Animation mixer
    const clock = new THREE.Clock();
    let mixer = null;

    // 6) Load your model
    new GLTFLoader().load(
      '/models/snake.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        model.rotation.y = -Math.PI / 2;
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        const clip = THREE.AnimationClip.findByName(gltf.animations, 'crawl');
        if (clip) mixer.clipAction(clip).play();
      },
      undefined,
      console.error
    );

    // 7) ResizeObserver instead of window.resize
    const resize = () => {
      const w  = container.clientWidth;
      const h  = container.clientHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize(); // initial sizing

    // 8) Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 9) Cleanup
    return () => {
      ro.disconnect();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
