import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
