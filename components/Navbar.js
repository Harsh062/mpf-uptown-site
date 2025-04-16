import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.wrapper}>
        {/* Logo on Left */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image src="/logo.jpg" alt="MPF Logo" width={40} height={40} />
        </Link>

        {/* Links on Right */}
        <div style={styles.links}>
          <Link href="/about" style={styles.link}>
            About
          </Link>
          <Link href="/events" style={styles.link}>
            Events
          </Link>
          <Link href="/team" style={styles.link}>
            Team
          </Link>
          <Link href="/gallery" style={styles.link}>
            Gallery
          </Link>
        </div>
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
  wrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    marginLeft: "0.5rem",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
};
