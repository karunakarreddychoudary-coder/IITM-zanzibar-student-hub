"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  Library,
  MapPin,
  Users,
} from "lucide-react";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
      setTimeout(() => setEntered(true), 80);
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  if (intro) {
    return (
      <>
        <main className="intro-screen">
          {/* Ambient background */}
          <div className="noise" />
          <div className="glow glow-one" />
          <div className="glow glow-two" />

          {/* Grid floor */}
          <div className="grid-floor" />

          {/* Central 3D object */}
          <div className="scene">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="core">
              <div className="core-inner" />
              <div className="core-highlight" />
            </div>

            <div className="satellite satellite-one" />
            <div className="satellite satellite-two" />
            <div className="satellite satellite-three" />
          </div>

          {/* Top label */}
          <div className="intro-top">
            <span>IIT MADRAS</span>
            <span>ZANZIBAR</span>
          </div>

          {/* Main title */}
          <section className="intro-copy">
            <p className="eyebrow">OFFICIAL STUDENT COMMUNITY</p>

            <h1>
              <span>IIT</span>
              <span>MADRAS</span>
              <span>ZANZIBAR</span>
            </h1>

            <div className="year">
              <span>20</span>
              <strong>26</strong>
            </div>
          </section>

          {/* Bottom */}
          <div className="intro-bottom">
            <div className="line" />
            <p>WELCOME, FRESHERS</p>
            <div className="line" />
          </div>

          <button
            className="skip"
            onClick={() => {
              setIntro(false);
              setTimeout(() => setEntered(true), 80);
            }}
          >
            ENTER →
          </button>
        </main>
      </>
    );
  }

  return (
    <main
      className={`home-page ${
        entered ? "home-page-visible" : ""
      }`}
    >
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-glow" />

        <div className="hero-content">
          <p className="hero-kicker">IIT MADRAS ZANZIBAR · 2026</p>

          <h2>
            YOUR FIRST
            <br />
            YEAR STARTS
            <br />
            <span>HERE.</span>
          </h2>

          <p className="hero-description">
            A student-built space for academics, resources, campus life,
            Zanzibar guides and everything you need to navigate IIT Madras
            Zanzibar.
          </p>

          <div className="hero-actions">
            <a href="/academics" className="primary-button">
              Explore academics
              <ArrowUpRight size={17} />
            </a>

            <a href="/resources" className="secondary-button">
              Student resources
            </a>
          </div>
        </div>

        <div className="hero-side-text">
          <span>06°10′S</span>
          <span>39°12′E</span>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p>THE HUB</p>
          <h3>Everything in one place.</h3>
        </div>

        <div className="feature-grid">
          <FeatureCard
            icon={<GraduationCap size={22} />}
            title="Academics"
            description="Courses, schedules and academic information."
            href="/academics"
          />

          <FeatureCard
            icon={<Library size={22} />}
            title="Resources"
            description="Notes, documents and senior-contributed material."
            href="/resources"
          />

          <FeatureCard
            icon={<Compass size={22} />}
            title="Zanzibar"
            description="Useful guides for living, moving and exploring."
            href="/zanzibar-guide"
          />

          <FeatureCard
            icon={<Users size={22} />}
            title="Student Life"
            description="Discover the community beyond classrooms."
            href="/student-life"
          />

          <FeatureCard
            icon={<MapPin size={22} />}
            title="Things to Carry"
            description="A practical checklist before you arrive."
            href="/things-to-carry"
          />

          <FeatureCard
            icon={<BookOpen size={22} />}
            title="Senior Portal"
            description="Access and contribute to the growing archive."
            href="/senior-resources"
          />
        </div>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #08090b;
        }

        a {
          text-decoration: none;
        }

        /* =========================
           INTRO
        ========================= */

        .intro-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(198, 216, 204, 0.1),
              transparent 23%
            ),
            radial-gradient(
              circle at 50% 85%,
              rgba(198, 216, 204, 0.05),
              transparent 30%
            ),
            #08090b;
          color: #f5f2ea;
          perspective: 1400px;
          animation: introFade 0.8s ease forwards 5.5s;
        }

        .noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.055;
          background-image:
            radial-gradient(
              rgba(255, 255, 255, 0.7) 0.5px,
              transparent 0.5px
            );
          background-size: 4px 4px;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(70px);
        }

        .glow-one {
          width: 380px;
          height: 380px;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          background: rgba(205, 220, 208, 0.1);
          animation: breathe 4s ease-in-out infinite;
        }

        .glow-two {
          width: 300px;
          height: 300px;
          right: -120px;
          bottom: -80px;
          background: rgba(184, 203, 190, 0.06);
        }

        .intro-top {
          position: absolute;
          top: 38px;
          left: 44px;
          right: 44px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 0.28em;
          color: rgba(245, 242, 234, 0.55);
          z-index: 20;
        }

        .intro-copy {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          width: min(900px, 90vw);
          transform: translate(-50%, -48%);
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 28px;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(245, 242, 234, 0.45);
          animation: fadeUp 1s ease both;
        }

        .intro-copy h1 {
          margin: 0;
          display: flex;
          flex-direction: column;
          font-size: clamp(58px, 10vw, 150px);
          line-height: 0.82;
          font-weight: 500;
          letter-spacing: -0.075em;
          text-transform: uppercase;
        }

        .intro-copy h1 span:nth-child(1) {
          animation: titleIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s
            both;
        }

        .intro-copy h1 span:nth-child(2) {
          animation: titleIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.42s
            both;
        }

        .intro-copy h1 span:nth-child(3) {
          color: transparent;
          -webkit-text-stroke: 1px rgba(245, 242, 234, 0.65);
          animation: titleIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.64s
            both;
        }

        .year {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 5px;
          margin-top: 34px;
          font-size: clamp(24px, 3vw, 42px);
          letter-spacing: -0.04em;
          animation: yearIn 1s ease 1.1s both;
        }

        .year strong {
          font-weight: 400;
          color: #d6e4da;
        }

        /* 3D object */

        .scene {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: sceneSpin 16s linear infinite;
          opacity: 0.95;
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(218, 230, 220, 0.2);
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        .orbit-one {
          width: 270px;
          height: 90px;
          transform: translate(-50%, -50%) rotateX(68deg) rotateZ(15deg);
        }

        .orbit-two {
          width: 285px;
          height: 110px;
          transform: translate(-50%, -50%) rotateY(67deg) rotateZ(-22deg);
        }

        .orbit-three {
          width: 250px;
          height: 250px;
          border-color: rgba(218, 230, 220, 0.08);
          transform: translate(-50%, -50%) rotateX(62deg)
            rotateY(35deg);
        }

        .core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 92px;
          height: 92px;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 35% 25%,
              rgba(255, 255, 255, 0.48),
              transparent 8%
            ),
            radial-gradient(
              circle,
              rgba(209, 227, 216, 0.28),
              rgba(209, 227, 216, 0.03) 60%,
              transparent 72%
            );
          box-shadow:
            0 0 50px rgba(213, 229, 218, 0.12),
            inset -15px -18px 30px rgba(0, 0, 0, 0.32);
          animation: coreFloat 3.5s ease-in-out infinite;
        }

        .core-inner {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          border: 1px solid rgba(242, 247, 243, 0.35);
        }

        .core-highlight {
          position: absolute;
          width: 15px;
          height: 15px;
          top: 16px;
          left: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          filter: blur(4px);
        }

        .satellite {
          position: absolute;
          width: 13px;
          height: 13px;
          border: 1px solid rgba(231, 240, 233, 0.5);
          background: rgba(231, 240, 233, 0.1);
          transform-style: preserve-3d;
        }

        .satellite-one {
          top: 22px;
          left: 144px;
          transform: rotate(45deg);
          animation: satelliteOne 5s linear infinite;
        }

        .satellite-two {
          bottom: 48px;
          left: 28px;
          transform: rotate(12deg);
          animation: satelliteTwo 6s linear infinite;
        }

        .satellite-three {
          right: 24px;
          bottom: 80px;
          transform: rotate(70deg);
          animation: satelliteThree 7s linear infinite;
        }

        .grid-floor {
          position: absolute;
          left: -15%;
          right: -15%;
          bottom: -39%;
          height: 64%;
          opacity: 0.22;
          transform: perspective(500px) rotateX(65deg);
          transform-origin: bottom;
          background-image:
            linear-gradient(
              rgba(220, 231, 224, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(220, 231, 224, 0.1) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to top,
            black,
            transparent 90%
          );
        }

        .intro-bottom {
          position: absolute;
          bottom: 42px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          width: min(700px, 78vw);
          gap: 18px;
          color: rgba(245, 242, 234, 0.42);
          font-size: 9px;
          letter-spacing: 0.36em;
        }

        .intro-bottom .line {
          flex: 1;
          height: 1px;
          background: rgba(245, 242, 234, 0.12);
        }

        .intro-bottom p {
          margin: 0;
          white-space: nowrap;
        }

        .skip {
          position: absolute;
          right: 42px;
          bottom: 38px;
          z-index: 30;
          border: 1px solid rgba(245, 242, 234, 0.18);
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(10px);
          color: rgba(245, 242, 234, 0.68);
          padding: 11px 16px;
          font-size: 9px;
          letter-spacing: 0.18em;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .skip:hover {
          border-color: rgba(245, 242, 234, 0.4);
          color: white;
          transform: translateY(-2px);
        }

        /* =========================
           HOME
        ========================= */

        .home-page {
          min-height: 100vh;
          background: #f5f2ea;
          color: #0b0d0f;
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 1s ease,
            transform 1s ease;
        }

        .home-page-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero {
          min-height: 92vh;
          position: relative;
          overflow: hidden;
          padding: 150px 7vw 100px;
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 930px;
          position: relative;
          z-index: 3;
        }

        .hero-kicker {
          margin: 0 0 28px;
          font-size: 10px;
          letter-spacing: 0.32em;
          color: rgba(11, 13, 15, 0.46);
        }

        .hero h2 {
          margin: 0;
          font-size: clamp(62px, 9.3vw, 145px);
          line-height: 0.86;
          letter-spacing: -0.085em;
          font-weight: 500;
        }

        .hero h2 span {
          color: transparent;
          -webkit-text-stroke: 1.5px #0b0d0f;
        }

        .hero-description {
          max-width: 500px;
          margin: 42px 0 0;
          color: rgba(11, 13, 15, 0.56);
          font-size: 16px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
          font-size: 12px;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .primary-button {
          background: #0b0d0f;
          color: white;
        }

        .secondary-button {
          border: 1px solid rgba(11, 13, 15, 0.15);
          color: #0b0d0f;
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-3px);
        }

        .hero-side-text {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(11, 13, 15, 0.34);
        }

        .hero-orb {
          position: absolute;
          width: 580px;
          height: 580px;
          right: -120px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          border: 1px solid rgba(11, 13, 15, 0.08);
          box-shadow:
            0 0 0 75px rgba(11, 13, 15, 0.025),
            0 0 0 150px rgba(11, 13, 15, 0.018);
        }

        .hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(205, 220, 208, 0.7),
            transparent 70%
          );
          filter: blur(15px);
        }

        .feature-section {
          padding: 110px 7vw 140px;
          background: #0b0d0f;
          color: #f5f2ea;
        }

        .section-heading p {
          margin: 0 0 14px;
          font-size: 9px;
          letter-spacing: 0.34em;
          color: rgba(245, 242, 234, 0.4);
        }

        .section-heading h3 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(38px, 6vw, 78px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.065em;
        }

        .feature-grid {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(245, 242, 234, 0.12);
          border-left: 1px solid rgba(245, 242, 234, 0.12);
        }

        .feature-card {
          min-height: 260px;
          padding: 32px;
          border-right: 1px solid rgba(245, 242, 234, 0.12);
          border-bottom: 1px solid rgba(245, 242, 234, 0.12);
          transition: background 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(245, 242, 234, 0.035);
        }

        .feature-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(245, 242, 234, 0.15);
        }

        .feature-card h4 {
          margin: 48px 0 12px;
          font-size: 25px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .feature-card p {
          margin: 0;
          max-width: 260px;
          color: rgba(245, 242, 234, 0.48);
          font-size: 13px;
          line-height: 1.6;
        }

        .feature-link {
          display: inline-flex;
          margin-top: 28px;
          color: rgba(245, 242, 234, 0.65);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @keyframes titleIn {
          from {
            opacity: 0;
            transform: translateY(80px) rotateX(45deg);
            filter: blur(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes yearIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sceneSpin {
          from {
            transform: translate(-50%, -50%) rotateZ(0deg)
              rotateY(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotateZ(360deg)
              rotateY(360deg);
          }
        }

        @keyframes coreFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes satelliteOne {
          0% {
            transform: translate3d(0, 0, 0) rotate(45deg);
          }

          50% {
            transform: translate3d(15px, -12px, 28px)
              rotate(130deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(405deg);
          }
        }

        @keyframes satelliteTwo {
          0% {
            transform: translate3d(0, 0, 0) rotate(12deg);
          }

          50% {
            transform: translate3d(-20px, 10px, 20px)
              rotate(140deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(372deg);
          }
        }

        @keyframes satelliteThree {
          0% {
            transform: translate3d(0, 0, 0) rotate(70deg);
          }

          50% {
            transform: translate3d(12px, -18px, 25px)
              rotate(180deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(430deg);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.95);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes introFade {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @media (max-width: 800px) {
          .intro-top {
            left: 20px;
            right: 20px;
          }

          .intro-bottom {
            bottom: 25px;
          }

          .skip {
            right: 20px;
            bottom: 72px;
          }

          .scene {
            transform: translate(-50%, -50%) scale(0.72);
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 130px 22px 80px;
          }

          .hero-side-text {
            display: none;
          }

          .hero-orb {
            right: -250px;
            opacity: 0.55;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="feature-card">
      <div className="feature-icon">{icon}</div>

      <h4>{title}</h4>

      <p>{description}</p>

      <span className="feature-link">Open →</span>
    </a>
  );
}
