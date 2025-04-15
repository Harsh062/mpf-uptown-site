const team = [
  { name: "Abhijeet Jaju", role: "President" },
  { name: "Nikhil Chandak", role: "Secretary" },
  { name: "Amol Lahoti", role: "Treasurer" },
];

export default function Team() {
  return (
    <main>
      <h1>MPF Core Committee</h1>
      <ul>
        {team.map((member, idx) => (
          <li key={idx} className="card">
            <strong>{member.name}</strong>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
