// pages/events/[slug].js

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/Layout";

const eventDetails = {
  "aashirwad-samaroh": {
    title: "Aashirwad Samaroh",
    date: "30th March",
    director: "Pooja ji Nawandar",
    image: "pooja_navandar.jpeg",
    description:
      "Installation of the new leadership team with spiritual blessings and discourse.",
  },
  "battle-of-professionals": {
    title: "Battle of Professionals (BOP)",
    date: "May & December",
    director: "Sumit ji Dammani",
    image: "sumit_dammani.jpeg",
    description:
      "Flagship sports event including Box Cricket, chess, table tennis, etc.",
  },
  "joy-of-life": {
    title: "Joy of Life",
    date: "June",
    director: "Pritish ji Asawa",
    image: "pritish_asawa.jpeg",
    description:
      "Social/health awareness events and outreach to underprivileged groups.",
  },
  "referral-and-business": {
    title: "Referral & Business Connect Meet",
    date: "July",
    director: "Kailash ji Baheti",
    image: "kailash_baheti.jpeg",
    description:
      "Zonal networking event to share referrals and business leads.",
  },
  "mahesh-gaurav": {
    title: "Mahesh Gaurav",
    date: "August",
    director: "Ruchita ji Kabra",
    image: "ruchita_kabra.jpeg",
    description:
      "Leadership and academic excellence awards to Senior Person in Community",
  },
  samvid: {
    title: "Samvid",
    date: "September",
    director: "Piyush ji Biyani",
    image: "piyush_biyani.jpeg",
    description:
      "Zonal national networking event with talks, panel discussions, directions for Better Professional & Family life and more.",
  },
  "diwali-milan": {
    title: "Diwali Milan",
    date: "October",
    director: "Vinod ji Kasat",
    image: "vinod_kasat.jpeg",
    description:
      "A grand Diwali celebration with family and cultural performances.",
  },
  "gift-of-education": {
    title: "Gift of Education",
    date: "November",
    director: "Pawan ji Lahoti",
    image: "vinod_kasat.jpeg",
    description:
      "Zonal fundraiser to support the education of deserving students.",
  },
  "annual-picnic": {
    title: "Annual Picnic",
    date: "January",
    director: "Pavan ji Kabra",
    image: "pavan_kabra.jpeg",
    description: "A fun-filled family outing for bonding and relaxation.",
  },
  "annual-general-meeting": {
    title: "Annual General Meeting (AGM)",
    date: "January",
    director: "Nikhil Chandak",
    image: "nikhil_chandak.jpeg",
    description:
      "Accounts presentation, nomination committee selection, and entertainment.",
  },
  "mahesh-idol": {
    title: "Mahesh Idol",
    date: "February",
    director: "Sagar ji Baheti",
    image: "sagar_baheti.jpeg",
    description:
      "A prestigious competition recognizing emerging leaders across Maharashtra showcase their success in professional as well as social life.",
  },
  "presidents-choice": {
    title: "President’s Choice",
    date: "March",
    director: "Deepti ji Maheshwari",
    image: "deepti_maheshwari.jpeg",
    description:
      "A special event curated by the President with preference to social causes.",
  },
};

export default function EventDetail() {
  const { query } = useRouter();
  const event = eventDetails[query.slug];

  if (!event) {
    return (
      <Layout>
        <h1>Event not found</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{event.title} – MPF Uptown</title>
        <meta name="description" content={event.description} />
      </Head>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        <h1
          style={{ fontSize: "2rem", marginBottom: "1rem", color: "#1d4ed8" }}
        >
          {event.title}
        </h1>

        {event.date && (
          <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            {event.date.match(/\d+/) ? "Date" : "Month"}:{" "}
            <span style={{ fontWeight: "normal" }}>{event.date}</span>
          </p>
        )}

        <div className="event-detail-wrapper">
          <div className="event-description">{event.description}</div>

          <div className="event-director">
            <Image
              src={`/images/${event.image}`}
              alt={event.director}
              width={130}
              height={130}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p style={{ marginTop: "0.5rem", textAlign: "center" }}>
              <strong>Director:</strong>
              <br />
              {event.director}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .event-detail-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .event-description {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .event-director {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .event-detail-wrapper {
            flex-direction: row;
            align-items: flex-start;
          }

          .event-description {
            flex: 2;
          }

          .event-director {
            flex: 1;
          }
        }
      `}</style>
    </Layout>
  );
}
