"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Library,
  Compass,
  Users,
  MapPin,
  BookOpen,
  Upload,
} from "lucide-react";

/* Main component: shows intro animation then main site */
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro after ~6 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Cinematic Intro Overlay */}
      {showIntro && (
        <div className="cinematic-intro">
          {/* Subtle noise texture */}
          <div className="intro-noise" />
          {/* Glowing lights */}
          <div className="intro-light intro-light-one" />
          <div className="intro-light intro-light-two" />
          {/* 3D grid floor */}
          <div className="intro-grid" />

          {/* 3D Orbital Scene (rings + planet + cubes) */}
          <div className="orbital-scene">
            <div className="orbital-ring ring-a" />
            <div className="orbital-ring ring-b" />
            <div className="orbital-ring ring-c" />
            <div className="planet">
              <div className="planet-shine" />
              <div className="planet-core" />
            </div>
            <div className="floating-cube cube-one" />
            <div className="floating-cube cube-two" />
            <div className="floating-cube cube-three" />
          </div>

          {/* Top text (institution name) */}
          <div className="intro-university">
            <span>IIT MADRAS</span>
            <span>ZANZIBAR</span>
          </div>

          {/* Title animation: Welcome, 2026, Freshers */}
          <div className="welcome-message">
            <div className="welcome-small">
              STUDENT COMMUNITY · 2026
            </div>
            <div className="welcome-title">WELCOME</div>
            <div className="welcome-year">
              <span>20</span><strong>26</strong>
            </div>
            <div className="welcome-freshers">FRESHERS</div>
          </div>

          {/* Bottom line and skip button */}
          <div className="intro-bottom">
            <span /><p>IIT MADRAS ZANZIBAR</p><span />
          </div>
          <button
            className="intro-enter"
            onClick={() => setShowIntro(false)}
          >
            ENTER <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      {/* Main Page Content (visible after intro) */}
      <main className={`site-home ${showIntro ? "" : "visible"}`}>
        <section className="hero">
          <div className="hero-orbit" />
          <div className="hero-glow" />

          <div className="hero-inner">
            <p className="hero-label">
              IIT MADRAS ZANZIBAR · STUDENT HUB · 2026
            </p>

            <h1>
              YOUR FIRST<br />
              YEAR STARTS<br />
              <span>HERE.</span>
            </h1>

            <p className="hero-description">
              Everything you need for your first year at IIT Madras Zanzibar —
              academics, resources, student life, and practical guides —
              all in one place.
            </p>

            <div className="hero-buttons">
              <Link href="/academics" className="hero-primary">
                Explore academics <ArrowUpRight size={16} />
              </Link>
              <Link href="/resources" className="hero-secondary">
                Browse resources
              </Link>
            </div>
          </div>

          <div className="coordinates">
            <span>06°10′S</span>
            <span>39°12′E</span>
          </div>
        </section>

        {/* Feature Grid (unchanged content) */}
        <section className="hub-section">
          <div className="hub-header">
            <p>THE STUDENT HUB</p>
            <h2>
              Everything<br /><span>in one place.</span>
            </h2>
          </div>
          <div className="hub-grid">
            <FeatureCard
              icon={<GraduationCap size={22} />}
              title="Academics"
              text="Courses, academic information and everything around your degree."
              href="/academics"
            />
            <FeatureCard
              icon={<Library size={22} />}
              title="Resources"
              text="Notes, documents and materials shared by students and seniors."
              href="/resources"
            />
            <FeatureCard
              icon={<Compass size={22} />}
              title="Zanzibar Guide"
              text="Useful information for settling into life in Zanzibar."
              href="/zanzibar-guide"
            />
            <FeatureCard
              icon={<Users size={22} />}
              title="Student Life"
              text="Explore the community and experiences beyond class."
              href="/student-life"
            />
            <FeatureCard
              icon={<MapPin size={22} />}
              title="Things to Carry"
              text="A practical checklist of essentials before you arrive."
              href="/things-to-carry"
            />
            <FeatureCard
              icon={<BookOpen size={22} />}
              title="Senior Portal"
              text="Access the growing archive of senior-contributed resources."
              href="/senior-resources"
            />
          </div>
        </section>
      </main>
    </>
  );
}

/* Reusable card component */
function FeatureCard({
  icon, title, text, href
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="hub-card">
      <div className="hub-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="hub-open">
        OPEN <ArrowUpRight size={14} />
      </div>
    </Link>
  );
}
