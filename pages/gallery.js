import Slider from "react-slick";
import { useState } from "react";
import Layout from "../components/Layout";

const galleryData = {
  2022: [],
  2023: [],
  2024: [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/6.jpeg",
  ],
};

export default function Gallery() {
  const [year, setYear] = useState("2024");
  const images = galleryData[year] || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <Layout>
      <h1>MPF Photo Gallery 📸</h1>
      <p>Select a year to view event highlights</p>

      {/* Year Filters */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {Object.keys(galleryData).map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            style={{
              padding: "0.5rem 1rem",
              background: y === year ? "#1d4ed8" : "#e0e7ff",
              color: y === year ? "white" : "#1e3a8a",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Image Grid or Fallback */}
      <div style={{ marginTop: "2rem" }}>
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`MPF ${year} image ${i + 1}`}
                  style={{
                    width: "90%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    margin: "0 auto",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              background: "#f3f4f6",
              borderRadius: "8px",
              fontStyle: "italic",
              color: "#6b7280",
            }}
          >
            📭 No images found for {year}. Please check back later.
          </div>
        )}
      </div>
    </Layout>
  );
}
