import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>MPF Uptown – About Us</title>
        <meta
          name="description"
          content="Learn about the vision, mission, and journey of Maheshwari Professional Forum Uptown – a platform built for connection, leadership, and community growth."
        />
      </Head>
      <h1>About MPF Uptown</h1>
      <p>
        Mahesh Professional Forum (MPF) is a dynamic platform for Maheshwari
        professionals — both ladies and gentlemen — to connect, share, support,
        and grow together.
      </p>
      <p>
        Our vision is to foster bonding among professionals, encourage personal
        and collective growth, and promote leadership within the Maheshwari
        community. MPF has multiple active chapters across Pune and a growing
        base of over 1,800 professionals.
      </p>
    </Layout>
  );
}
