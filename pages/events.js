import Layout from "../components/Layout";

const events = [
  {
    title: "Aashirwad Samaroh",
    date: "30th March",
    director: "Pooja ji Nawandar",
  },
  {
    title: "Battle of Professionals (BOP)",
    date: "May & December",
    director: "Sumit ji Dammani",
  },
  { title: "Joy of Life", date: "June", director: "Pritish ji Asawa" },
  {
    title: "Referral & Business Connect Meet",
    date: "July",
    director: "Kailash ji Baheti",
  },
  { title: "Mahesh Gaurav", date: "August", director: "Ruchita ji Kabra" },
  { title: "Samvid", date: "September", director: "Piyush ji Biyani" },
  { title: "Diwali Milan", date: "October", director: "Vinod ji Kasat" },
  { title: "Gift of Education", date: "November", director: "Pawan ji Lahoti" },
  { title: "Annual Picnic", date: "January", director: "Pavan ji Kabra" },
  {
    title: "Annual General Meeting (AGM)",
    date: "January",
    director: "Nikhil Chandak",
  },
  { title: "Mahesh Idol", date: "February", director: "Sagar ji Baheti" },
  {
    title: "President’s Choice",
    date: "March",
    director: "Deepti ji Maheshwari",
  },
];

export default function Events() {
  return (
    <Layout>
      <h1>Annual MPF Events</h1>
      <ul>
        {events.map((event, idx) => (
          <li key={idx} className="card">
            <strong>{event.title}</strong>
            <p>📅 {event.date}</p>
            <p>🎯 Event Director: {event.director}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
