import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

const team = [
  { name: "Abhijeet Jaju", role: "President", image: "abhijeet_jaju.jpeg" },
  { name: "Nikhil Chandak", role: "Secretary", image: "nikhil_chandak.jpeg" },
  { name: "Amol Lahoti", role: "Treasurer", image: "amol_lahoti.jpeg" },
];

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>MPF Uptown – Core Committee</title>
        <meta
          name="description"
          content="Meet the core committee of MPF Uptown including the President, Secretary, Treasurer and key event directors who lead our community forward."
        />
      </Head>

      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        MPF Core Committee
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {team.map((member, idx) => (
          <div
            key={idx}
            style={{
              width: "220px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1.5rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                width: "120px",
                height: "120px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            >
              <Image
                src={`/images/${member.image}`}
                alt={member.name}
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3 style={{ marginTop: "1rem", marginBottom: "0.25rem" }}>
              {member.name}
            </h3>
            <p style={{ margin: 0, color: "#555" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
