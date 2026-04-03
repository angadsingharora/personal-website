"use client";

import { Suspense, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, AsciiRenderer, useGLTF, Environment } from "@react-three/drei";

function Computer() {
  const { scene } = useGLTF(
    "https://danielcodepen.s3.us-east-1.amazonaws.com/apple_macintosh.glb"
  );
  return (
    <primitive
      object={scene}
      scale={0.05}
      rotation={[0, 0, 0]}
      position={[0, -0.3, 0]}
    />
  );
}

export function AsciiBackground() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [rotateSpeed, setRotateSpeed] = useState(2);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const firstTimeout = setTimeout(() => {
      setRotateSpeed((prev) => prev * -1);
      interval = setInterval(() => {
        setRotateSpeed((prev) => prev * -1);
      }, 10000);
    }, 5000);
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const fgColor = isLight ? "#ffffff" : "#2563eb";
  const bgColor = isLight ? "#3b82f6" : "transparent";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: -2,
        right: -2,
        bottom: 0,
        overflow: "hidden",
        opacity: 0.4,
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Computer />
          <Environment preset="studio" />
        </Suspense>
        <Suspense fallback={null}>
          <AsciiRenderer
            resolution={0.18}
            characters=" .:-=+*#%@"
            fgColor={fgColor}
            bgColor={bgColor}
            invert={false}
          />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={rotateSpeed}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
