"use client";

import { Suspense, useCallback, useEffect, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import type { PerspectiveCamera } from "three";

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

// Pulls the camera back on narrow (portrait) screens so the model isn't cropped.
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const cam = camera as PerspectiveCamera;
    const aspect = size.width / size.height;
    // Portrait phones: aspect < 0.75 → pull back more; landscape/desktop → default z=3
    if (aspect < 0.6) {
      cam.position.z = 5.5;
    } else if (aspect < 0.85) {
      cam.position.z = 4.2;
    } else {
      cam.position.z = 3;
    }
    cam.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

function AsciiOverlay() {
  const { gl, scene, camera, size } = useThree();

  const effect = useMemo(
    () => new AsciiEffect(gl, " .:-=+*#%@", { invert: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gl]
  );

  // Shared helper: call setSize then immediately force 100% fills on both
  // the outer div and inner table that AsciiEffect writes px dimensions to.
  const applySize = useCallback(
    (w: number, h: number) => {
      effect.setSize(w, h);
      effect.domElement.style.width = "100%";
      effect.domElement.style.height = "100%";
      const table = effect.domElement.querySelector<HTMLElement>("table");
      if (table) {
        table.style.width = "100%";
        table.style.height = "100%";
        table.style.tableLayout = "fixed";
      }
    },
    [effect]
  );

  // Mount the AsciiEffect DOM node once and hide the WebGL canvas behind it.
  useEffect(() => {
    const parent = gl.domElement.parentNode as HTMLElement | null;
    if (!parent) return;

    Object.assign(effect.domElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      color: "#2563eb",
      backgroundColor: "transparent",
    });

    parent.insertBefore(effect.domElement, gl.domElement);
    gl.domElement.style.display = "none";

    return () => {
      gl.domElement.style.display = "";
      effect.domElement.parentNode?.removeChild(effect.domElement);
    };
  }, [effect, gl]);

  // Respond to r3f's ResizeObserver-driven size updates (covers desktop resize).
  useEffect(() => {
    applySize(size.width, size.height);
  }, [applySize, size]);

  // Safety net for mobile: orientation changes and browser-chrome show/hide
  // don't always fire window.resize — listen to visualViewport when available.
  useEffect(() => {
    const parent = gl.domElement.parentNode as HTMLElement | null;

    const handleResize = () => {
      if (!parent) return;
      applySize(parent.clientWidth, parent.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // visualViewport fires when the mobile browser toolbar shows/hides
    const vv = window.visualViewport;
    if (vv) vv.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (vv) vv.removeEventListener("resize", handleResize);
    };
  }, [applySize, gl]);

  useFrame(() => {
    effect.render(scene, camera);
  }, 1);

  return null;
}

export function AsciiBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
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
        <ResponsiveCamera />
        <AsciiOverlay />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
