export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>© {new Date().getFullYear()} MPF Uptown. All rights reserved.</p>
        <p>
          For questions or participation:{" "}
          <a href="mailto:mpf.uptown@gmail.com" style={styles.link}>
            mpf.uptown@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "4rem",
    backgroundColor: "#1d4ed8",
    color: "white",
    padding: "2rem 1rem",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: 1.6,
    fontSize: "0.95rem",
  },
  link: {
    color: "#e0f2fe",
    textDecoration: "underline",
  },
};
