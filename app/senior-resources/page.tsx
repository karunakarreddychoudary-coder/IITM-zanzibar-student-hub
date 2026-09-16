"use client";

import Link from "next/link";
import { ArrowUpRight, Upload, Library } from "lucide-react";

export default function SeniorResourcesPage() {
  return (
    <main className="senior-page">
      <section className="senior-header">
        <div>
          <p className="eyebrow">SENIOR COMMUNITY</p>

          <h1>
            Senior
            <br />
            <span>Resources.</span>
          </h1>

          <p className="intro">
            A shared archive of notes, documents and useful material
            contributed by students and seniors.
          </p>
        </div>

        <div className="senior-actions">
          <Link href="/resources" className="action-secondary">
            <Library size={17} />
            Browse resources
          </Link>

          <Link href="/senior-resources/upload" className="action-primary">
            <Upload size={17} />
            Upload resource
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="portal-tabs">
        <Link
          href="/senior-resources"
          className="portal-tab active"
        >
          Resource Archive
        </Link>

        <Link
          href="/senior-resources/upload"
          className="portal-tab"
        >
          Upload Resource
          <ArrowUpRight size={14} />
        </Link>
      </section>

      <section className="empty-state">
        <p className="small-label">SHARED KNOWLEDGE</p>

        <h2>
          Upload once.
          <br />
          Help many.
        </h2>

        <p>
          Contribute useful academic notes, guides and documents
          to the student archive.
        </p>

        <Link
          href="/senior-resources/upload"
          className="big-upload-button"
        >
          <Upload size={18} />
          Upload your first resource
          <ArrowUpRight size={16} />
        </Link>
      </section>

      <style jsx>{`
        .senior-page {
          min-height: 100vh;
          background: #f4f1e9;
          color: #080a0d;
        }

        .senior-header {
          padding: 120px 7vw 85px;
          display: flex;
          justify-content: space-between;
          gap: 50px;
          align-items: end;
        }

        .eyebrow,
        .small-label {
          margin: 0 0 20px;
          font-size: 9px;
          letter-spacing: 0.35em;
          color: rgba(8, 10, 13, 0.42);
        }

        h1 {
          margin: 0;
          font-size: clamp(70px, 10vw, 145px);
          line-height: 0.82;
          font-weight: 500;
          letter-spacing: -0.085em;
        }

        h1 span {
          color: transparent;
          -webkit-text-stroke: 1px #080a0d;
        }

        .intro {
          max-width: 460px;
          margin: 38px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(8, 10, 13, 0.52);
        }

        .senior-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 205px;
        }

        .action-primary,
        .action-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 15px 18px;
          font-size: 12px;
        }

        .action-primary {
          background: #080a0d;
          color: white;
        }

        .action-secondary {
          border: 1px solid rgba(8, 10, 13, 0.15);
        }

        .portal-tabs {
          padding: 0 7vw;
          border-top: 1px solid rgba(8, 10, 13, 0.1);
          border-bottom: 1px solid rgba(8, 10, 13, 0.1);
          display: flex;
        }

        .portal-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 20px 25px 20px 0;
          margin-right: 28px;
          color: rgba(8, 10, 13, 0.45);
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .portal-tab.active {
          color: #080a0d;
          font-weight: 600;
        }

        .empty-state {
          margin: 75px 7vw 120px;
          padding: 75px;
          background: #080a0d;
          color: #f4f1e9;
        }

        .empty-state .small-label {
          color: rgba(244, 241, 233, 0.38);
        }

        .empty-state h2 {
          margin: 0;
          font-size: clamp(45px, 6vw, 80px);
          line-height: 0.93;
          font-weight: 400;
          letter-spacing: -0.07em;
        }

        .empty-state > p:not(.small-label) {
          max-width: 420px;
          margin: 28px 0 0;
          color: rgba(244, 241, 233, 0.5);
          line-height: 1.65;
          font-size: 14px;
        }

        .big-upload-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 34px;
          padding: 15px 19px;
          background: #f4f1e9;
          color: #080a0d;
          font-size: 11px;
        }

        @media (max-width: 800px) {
          .senior-header {
            padding: 90px 22px 55px;
            flex-direction: column;
            align-items: flex-start;
          }

          .portal-tabs {
            padding: 0 22px;
          }

          .portal-tab {
            padding-right: 14px;
            margin-right: 16px;
          }

          .empty-state {
            margin: 50px 22px 80px;
            padding: 35px 25px;
          }
        }
      `}</style>
    </main>
  );
}
