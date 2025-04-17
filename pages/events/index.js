import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

const events = [
  {
    title: "Aashirwad Samaroh",
    slug: "aashirwad-samaroh",
    date: "30th March",
    director: "Pooja ji Nawandar",
    image: "pooja_navandar.jpeg",
  },
  {
    title: "Battle of Professionals (BOP)",
    slug: "battle-of-professionals",
    date: "May & December",
    director: "Sumit ji Dammani",
    image: "sumit_dammani.jpeg",
  },
  {
    title: "Joy of Life",
    slug: "joy-of-life",
    date: "June",
    director: "Pritish ji Asawa",
    image: "pritish_asawa.jpeg",
  },
  {
    title: "Referral & Business Connect Meet",
    slug: "referral-and-business",
    date: "July",
    director: "Kailash ji Baheti",
    image: "kailash_baheti.jpeg",
  },
  {
    title: "Mahesh Gaurav",
    slug: "mahesh-gaurav",
    date: "August",
    director: "Ruchita ji Kabra",
    image: "ruchita_kabra.jpeg",
  },
  {
    title: "Samvid",
    slug: "samvid",
    date: "September",
    director: "Piyush ji Biyani",
    image: "piyush_biyani.jpeg",
  },
  {
    title: "Diwali Milan",
    slug: "diwali-milan",
    date: "October",
    director: "Vinod ji Kasat",
    image: "vinod_kasat.jpeg",
  },
  {
    title: "Gift of Education",
    slug: "gift-of-education",
    date: "November",
    director: "Pawan ji Lahoti",
    image: "vinod_kasat.jpeg",
  },
  {
    title: "Annual Picnic",
    slug: "annual-picnic",
    date: "January",
    director: "Pavan ji Kabra",
    image: "pavan_kabra.jpeg",
  },
  {
    title: "Annual General Meeting (AGM)",
    slug: "annual-general-meeting",
    date: "January",
    director: "Nikhil Chandak",
    image: "nikhil_chandak.jpeg",
  },
  {
    title: "Mahesh Idol",
    slug: "mahesh-idol",
    date: "February",
    director: "Sagar ji Baheti",
    image: "sagar_baheti.jpeg",
  },
  {
    title: "President’s Choice",
    slug: "presidents-choice",
    date: "March",
    director: "Deepti ji Maheshwari",
    image: "deepti_maheshwari.jpeg",
  },
];

export default function Events() {
  return (
    <Layout>
      <Head>
        <title>MPF Uptown – Events Calendar</title>
        <meta
          name="description"
          content="Explore our annual calendar of MPF events including Diwali Milan, Business Connect, Mahesh Idol, AGM and more."
        />
      </Head>
      <h1>Annual MPF Events</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event, idx) => (
          <li key={idx} className="card">
            <Link
              href={`/events/${event.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>{event.title}</strong>
              <p>📅 {event.date}</p>
              <p>🎯 Event Director: {event.director}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
