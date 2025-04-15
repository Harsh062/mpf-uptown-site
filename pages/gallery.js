import Slider from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <h1>MPF Photo Gallery 📸</h1>
      <p>
        Glimpses of joy, connection, and celebration through the lens of MPF
        events.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                style={{
                  width: "90%", // reduced from 100% to create gap
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  margin: "0 auto", // center image
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
}
