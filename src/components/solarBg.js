// src/components/SolarSystem.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function NeonRing({ radius, thickness, color, speed }) {
  const ringRef = useRef();

  useFrame(() => {
    ringRef.current.rotation.y += speed;
  });

  return (
    <mesh ref={ringRef} rotation-x={Math.PI / 2}>
      <torusGeometry args={[radius, thickness, 64, 128]} />
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={2}
        color="black"
        roughness={0.2}
        metalness={1}
      />
    </mesh>
  );
}

function NeonRingsScene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#00ffff" />

      <NeonRing radius={11} thickness={0.08} color="#dddddd" speed={0.01} />
      

      <NeonRing radius={10} thickness={0.08} color="#0cffff" speed={0.002} />
      <NeonRing radius={7} thickness={0.05} color="#ff00ff" speed={-0.0015} />
      <NeonRing radius={9} thickness={0.07} color="#00ff99" speed={0.001} />
    </>
  );
}

function SolarSystem() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
      camera={{ position: [0, 0, 15], fov: 60 }}
    >
      <NeonRingsScene />
    </Canvas>
  );
}

export default SolarSystem;
