import { useEffect, useState } from "react";

export default function CountdownTimer({ eventName, eventDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const target = new Date(eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    // Fix hydration mismatch for date string
    setFormattedDate(
      new Date(eventDate).toLocaleDateString(undefined, {
        dateStyle: "long",
      })
    );

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  if (timeLeft === null) {
    return <p>{eventName} has started 🎉</p>;
  }

  return (
    <div
      style={{
        background: "#fffbe6",
        border: "2px dashed #facc15",
        padding: "1.5rem",
        borderRadius: "12px",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>⏳ Countdown to {eventName}</h2>
      <div
        style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#ca8a04" }}
      >
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </div>
      {formattedDate && (
        <p
          style={{ fontStyle: "italic", color: "#92400e", marginTop: "0.5rem" }}
        >
          See you on {formattedDate}!
        </p>
      )}
    </div>
  );
}
