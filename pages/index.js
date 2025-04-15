import Layout from "../components/Layout";
import CountdownTimer from "../components/Countdown";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div
        style={{
          background: "#e0f2fe",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            color: "#1d4ed8",
            marginBottom: "0.5rem",
          }}
        >
          Welcome to MPF Uptown 🎉
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#374151" }}>
          A vibrant community of Maheshwari professionals to connect, grow, and
          celebrate together.
        </p>
      </div>

      <CountdownTimer eventName="Joy Of Life" eventDate="2025-06-12T10:00:00" />

      {/* MPF Documentary Embed */}
      <section>
        <h2>📽️ Watch Our Story</h2>
        <p>
          Here’s a quick glimpse into the spirit of MPF — our vision, our
          people, and our journey.
        </p>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/KEAfesKjtAk"
          title="MPF Documentary"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px", marginTop: "1rem" }}
        ></iframe>
      </section>

      {/* Signature Events */}
      <section style={{ marginTop: "3rem" }}>
        <h2>🎯 Signature MPF Events</h2>
        <ul>
          <li>
            🪔 <strong>Diwali Milan</strong> – Family celebration with cultural
            performances
          </li>
          <li>
            🥇 <strong>Mahesh Idol</strong> – Recognizing leaders across
            Maharashtra
          </li>
          <li>
            🤝 <strong>Business Connect Meet</strong> – Networking with
            referrals
          </li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/events">View all events →</Link>
        </p>
      </section>

      {/* Quick Links */}
      <section style={{ marginTop: "3rem" }}>
        <h2>🌐 Explore More</h2>
        <ul>
          <li>
            <Link href="/about">📖 About MPF</Link>
          </li>
          <li>
            <Link href="/team">👥 Core Committee</Link>
          </li>
          <li>
            <Link href="/gallery">📸 Photo Gallery</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
