import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/about" style={styles.link}>
          About
        </Link>
        <Link href="/events" style={styles.link}>
          Events
        </Link>
        <Link href="/team" style={styles.link}>
          Team
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#1d4ed8",
    padding: "1rem 0",
    marginBottom: "2rem",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
};
