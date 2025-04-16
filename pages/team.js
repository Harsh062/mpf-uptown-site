import Head from "next/head";

import Layout from "../components/Layout";

const team = [
  { name: "Abhijeet Jaju", role: "President" },
  { name: "Nikhil Chandak", role: "Secretary" },
  { name: "Amol Lahoti", role: "Treasurer" },
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
      <h1>MPF Core Committee</h1>
      <ul>
        {team.map((member, idx) => (
          <li key={idx} className="card">
            <strong>{member.name}</strong>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
