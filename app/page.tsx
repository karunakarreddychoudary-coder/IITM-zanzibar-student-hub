"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import {
  ArrowUpRight,
  Backpack,
  BookOpen,
  FileText,
  Map,
  Users,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Academics",
    description: "Courses, notes and papers.",
    href: "/academics",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Resources",
    description: "The shared student archive.",
    href: "/resources",
    icon: FileText,
  },
  {
    number: "03",
    title: "Zanzibar",
    description: "The things worth knowing.",
    href: "/zanzibar-guide",
    icon: Map,
  },
  {
    number: "04",
    title: "Student Life",
    description: "Everything beyond class.",
    href: "/student-life",
    icon: Users,
  },
  {
    number: "05",
    title: "Preparation",
    description: "What to bring. What to know.",
    href: "/things-to-carry",
    icon: Backpack,
  },
];

function FloatingRing({
  position,
  scale,
  speed,
  rotation,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotation: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    ref.current.rotation.x = rotation[0] + t * speed * 0.35;
    ref.current.rotation.y = rotation[1] + t * speed;
    ref.current.rotation.z = rotation[2] + Math.sin(t * speed) * 0.2;

    ref.current.position.y =
      position[1] + Math.sin(t * speed) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1.35, 0.035, 32, 160]} />
      <meshStandardMaterial
        color="#e8e4d9"
        metalness={0.9}
        roughness={0.18}
      />
    </mesh>
  );
}

function FloatingOrb({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  return (
    <Float
      speed={speed}
      rotationIntensity={1.2}
      floatIntensity={1}
    >
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[0.45, 1]} />
        <meshStandardMaterial
          color="#bcb7aa"
          metalness={0.85}
          roughness={0.22}
        />
      </mesh>
    </Float>
  );
}

function HeroText() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y =
      Math.sin(t * 0.35) * 0.08;

    group.current.rotation.x =
      Math.sin(t * 0.22) * 0.025;
  });

  return (
    <group ref={group}>

      <Text
        position={[0, 1.05, 0]}
        fontSize={0.58}
        letterSpacing={-0.04}
        color="#8f8a7c"
        anchorX="center"
        anchorY="middle"
      >
        IIT MADRAS
      </Text>

      <Text
        position={[0, 0.25, 0]}
        fontSize={0.82}
        letterSpacing={-0.05}
        color="#f4f0e6"
        anchorX="center"
        anchorY="middle"
      >
        ZANZIBAR
      </Text>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.48}
        letterSpacing={0.12}
        color="#777265"
        anchorX="center"
        anchorY="middle"
      >
        2026
      </Text>

    </group>
  );
}

function CameraMotion() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    state.camera.position.z =
      6.5 - Math.min(t * 0.08, 1.0);

    state.camera.position.x =
      Math.sin(t * 0.18) * 0.15;

    state.camera.position.y =
      Math.cos(t * 0.12) * 0.08;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function ThreeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.5],
        fov: 42,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
      }}
    >
      <color attach="background" args={["#05070b"]} />

      <fog
        attach="fog"
        args={["#05070b", 5, 12]}
      />

      <ambientLight intensity={0.35} />

      <directionalLight
        position={[2, 4, 5]}
        intensity={2}
      />

      <pointLight
        position={[-3, -1, 4]}
        intensity={20}
        distance={10}
        color="#9b978b"
      />

      <pointLight
        position={[4, 2, 1]}
        intensity={12}
        distance={8}
        color="#ffffff"
      />

      <HeroText />

      <FloatingRing
        position={[-2.25, 1.4, -1.3]}
        scale={1.35}
        speed={0.5}
        rotation={[0.6, 0.3, 0.2]}
      />

      <FloatingRing
        position={[2.4, -1.25, -1.8]}
        scale={0.9}
        speed={0.7}
        rotation={[1.1, 0.2, 0.5]}
      />

      <FloatingRing
        position={[1.7, 1.75, -2.2]}
        scale={0.65}
        speed={1}
        rotation={[0.4, 0.8, 0.1]}
      />

      <FloatingOrb
        position={[-2.7, -1.2, -1]}
        scale={0.8}
        speed={1.2}
      />

      <FloatingOrb
        position={[2.8, 0.8, -1.4]}
        scale={0.55}
        speed={0.8}
      />

      <FloatingOrb
        position={[-1.9, 2.15, -2.2]}
        scale={0.35}
        speed={1.5}
      />

      <CameraMotion />
    </Canvas>
  );
}

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [skipVisible, setSkipVisible] = useState(false);

  useEffect(() => {
    const skip = window.setTimeout(() => {
      setSkipVisible(true);
    }, 900);

    const done = window.setTimeout(() => {
      setIntroDone(true);
    }, 7200);

    return () => {
      window.clearTimeout(skip);
      window.clearTimeout(done);
    };
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#f3f0e9] text-[#090c12]">

      {/* 3D INTRO */}

      {!introDone && (
        <div className="fixed inset-0 z-[999] bg-[#05070b]">

          <div className="absolute inset-0">
            <ThreeScene />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,7,11,0.2)_55%,rgba(5,7,11,0.88)_100%)]" />

          <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35 md:left-10 md:right-10">

            <span>
              IIT MADRAS
            </span>

            <span>
              ZANZIBAR · 2026
            </span>

          </div>

          <div className="absolute bottom-12 left-6 right-6 z-10 flex items-end justify-between md:left-10 md:right-10">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                Welcome
              </p>

              <p className="mt-2 text-xl font-medium tracking-tight text-white md:text-3xl">
                2026 Freshers.
              </p>

            </div>

            <div className="text-right text-[10px] uppercase tracking-[0.25em] text-white/25">
              Entering
            </div>

          </div>

          {skipVisible && (
            <button
              onClick={() => setIntroDone(true)}
              className="absolute bottom-20 right-6 z-20 text-[10px] uppercase tracking-[0.25em] text-white/25 transition hover:text-white md:right-10"
            >
              Skip
            </button>
          )}

          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10">
            <div className="h-full w-0 animate-[loading_7.1s_linear_forwards] bg-white/70" />
          </div>

          <style jsx>{`
            @keyframes loading {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }
          `}</style>

        </div>
      )}

      {/* MAIN WEBSITE */}

      <div
        className={
          introDone
            ? "opacity-100 transition-opacity duration-1000"
            : "pointer-events-none h-screen overflow-hidden opacity-0"
        }
      >

        <section className="min-h-[calc(100vh-5rem)] border-b border-black/10">

          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-14">

            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-black/35 md:text-[11px]">

              <span>
                Unofficial Student Archive
              </span>

              <span>
                2026
              </span>

            </div>

            <div className="py-20 md:py-24">

              <p className="mb-6 font-serif text-2xl italic text-black/45 md:text-3xl">
                Welcome, freshers.
              </p>

              <h1 className="text-[18vw] font-medium leading-[0.72] tracking-[-0.075em] md:text-[14vw] lg:text-[12vw]">

                <span className="block">
                  IIT MADRAS
                </span>

                <span className="block pl-[7vw] md:pl-[5vw] lg:pl-[4vw]">
                  ZANZIBAR
                </span>

              </h1>

              <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                <p className="max-w-md text-sm leading-7 text-black/45 md:text-base">
                  Courses, resources, student life and the
                  practical knowledge that makes a new place familiar.
                </p>

                <Link
                  href="/resources"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Enter the archive

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight size={18} strokeWidth={1.4} />
                  </span>

                </Link>

              </div>

            </div>

            <div className="grid border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-black/30 md:grid-cols-3 md:text-[11px]">

              <div>IIT Madras Zanzibar</div>

              <div className="mt-2 md:mt-0 md:text-center">
                Student maintained
              </div>

              <div className="mt-2 md:mt-0 md:text-right">
                Batch 2026
              </div>

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
                Navigate
              </p>

              <h2 className="mt-3 font-serif text-5xl font-medium tracking-[-0.04em] md:text-6xl">
                The archive.
              </h2>

            </div>

            <div className="hidden text-xs text-black/30 md:block">
              05 sections
            </div>

          </div>

          <div className="border-t border-black/10">

            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Link
                  key={section.number}
                  href={section.href}
                  className="group grid items-center border-b border-black/10 py-8 transition-colors hover:bg-white md:grid-cols-[90px_1fr_1fr_auto] md:gap-8 md:py-10"
                >

                  <span className="text-[11px] font-semibold tracking-[0.22em] text-black/25">
                    {section.number}
                  </span>

                  <h3 className="mt-4 font-serif text-4xl font-medium tracking-[-0.04em] md:mt-0 md:text-6xl">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/40 md:mt-0 md:text-base">
                    {section.description}
                  </p>

                  <Icon
                    size={20}
                    strokeWidth={1.4}
                    className="mt-5 text-black/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:mt-0"
                  />

                </Link>
              );
            })}

          </div>

        </section>

      </div>

    </main>
  );
}
