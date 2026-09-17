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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="cinematic-intro">
          <div className="intro-noise" />

          <div className="intro-light intro-light-one" />
          <div className="intro-light intro-light-two" />

          <div className="intro-grid" />

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

          <div className="intro-university">
            <span>IIT MADRAS</span>
            <span>ZANZIBAR</span>
          </div>

          <div className="welcome-message">
            <div className="welcome-small">
              STUDENT COMMUNITY · 2026
            </div>

            <div className="welcome-title">
              WELCOME
            </div>

            <div className="welcome-year">
              <span>20</span>
              <strong>26</strong>
            </div>

            <div className="welcome-freshers">
              FRESHERS
            </div>
          </div>

          <div className="intro-bottom">
            <span />
            <p>IIT MADRAS ZANZIBAR</p>
            <span />
          </div>

          <button
            className="intro-enter"
            onClick={() => setShowIntro(false)}
          >
            ENTER
            <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      <main className="site-home">
        <section className="hero">
          <div className="hero-orbit" />
          <div className="hero-glow" />

          <div className="hero-inner">
            <p className="hero-label">
              IIT MADRAS ZANZIBAR · STUDENT HUB · 2026
            </p>

            
<h1>
  YOUR JOURNEY
  <br />
  STARTS
  <br />
  <span>HERE.</span>
</h1>

<p className="hero-description">
  Your student hub for life at IIT Madras Zanzibar —
  academics, resources, student life and practical guides,
  all brought together in one place.
</p>

            <div className="hero-buttons">
              <a href="/academics" className="hero-primary">
                Explore academics
                <ArrowUpRight size={17} />
              </a>

              <a href="/resources" className="hero-secondary">
                Browse resources
              </a>
            </div>
          </div>

          <div className="coordinates">
            <span>06°10′S</span>
            <span>39°12′E</span>
          </div>
        </section>

        <section className="hub-section">
          <div className="hub-header">
            <p>THE STUDENT HUB</p>

            <h2>
              Everything
              <br />
              <span>in one place.</span>
            </h2>
          </div>

          <div className="hub-grid">
            <FeatureCard
              icon={<GraduationCap size={21} />}
              title="Academics"
              text="Courses, academic information and everything around your degree."
              href="/academics"
            />

            <FeatureCard
              icon={<Library size={21} />}
              title="Resources"
              text="Notes, documents and materials shared by students and seniors."
              href="/resources"
            />

            <FeatureCard
              icon={<Compass size={21} />}
              title="Zanzibar Guide"
              text="Useful information for settling into life in Zanzibar."
              href="/zanzibar-guide"
            />

            <FeatureCard
              icon={<Users size={21} />}
              title="Student Life"
              text="Explore the people, activities and experiences beyond class."
              href="/student-life"
            />

            <FeatureCard
              icon={<MapPin size={21} />}
              title="Things to Carry"
              text="A practical checklist before you leave for campus."
              href="/things-to-carry"
            />

            <FeatureCard
              icon={<BookOpen size={21} />}
              title="Senior Portal"
              text="Access the growing collection of senior-contributed resources."
              href="/senior-resources"
            />
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a href={href} className="hub-card">
      <div className="hub-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="hub-open">
        OPEN <ArrowUpRight size={14} />
      </div>
    </a>
  );
}
