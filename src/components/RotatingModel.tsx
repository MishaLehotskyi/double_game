"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import { Suspense } from "react";

function Model({ fileName }: { fileName: string }) {
  const { scene } = useGLTF(`/models/${fileName}`);
  return <primitive object={scene} position={[0, -0.8, 0]} />;
}

export default function RotatingModel({ fileName }: { fileName: string }) {
  return (
    <div className="w-full h-full">
      <Canvas
        orthographic
        camera={{position: [0, 0, 100], zoom: 60}}
        onCreated={({gl}) => {
          gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            console.warn("WebGL context lost");
          });
        }}
      >
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false}/>
        <ambientLight intensity={1}/>

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
        />

        <directionalLight
          position={[-5, -5, 5]}
          intensity={0.5}
        />

        <Suspense fallback={null}>
          <Model fileName={fileName} />
        </Suspense>
      </Canvas>
    </div>
  );
}

