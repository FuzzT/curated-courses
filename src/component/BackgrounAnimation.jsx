// BackgroundAnimation.js
import React, { useEffect } from "react";
import * as THREE from "three";

const BackgroundAnimation = () => {
  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add some particles or shapes to the scene
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the object to create a smooth background movement
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // Set camera position
    camera.position.z = 5;

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default BackgroundAnimation;
