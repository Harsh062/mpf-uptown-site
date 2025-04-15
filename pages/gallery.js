import Layout from "../components/Layout";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/6.jpeg",
];

export default function Gallery() {
  return (
    <Layout>
      <h1>MPF Photo Gallery 📸</h1>
      <p>Some memorable snapshots from our recent events and celebrations.</p>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </Layout>
  );
}
