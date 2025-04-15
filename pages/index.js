import Link from "next/link";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to MPF Uptown 🎉</h1>

      <p>
        Mahesh Professional Forum (MPF) is a vibrant community of Maheshwari
        professionals — fostering connection, growth, and contribution to
        society.
      </p>

      <p style={{ marginTop: "1rem" }}>
        📽️{" "}
        <a href="https://youtu.be/KEAfesKjtAk" target="_blank" rel="noreferrer">
          Watch our Documentary
        </a>
      </p>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/about">About Us</Link> |{" "}
        <Link href="/events">Annual Events</Link> |{" "}
        <Link href="/team">Core Committee</Link>
      </p>
    </Layout>
  );
}
