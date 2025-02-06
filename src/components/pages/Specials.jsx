import React from "react";
import "../../styles/specials.css";

const specialsData = [
  {
    title: "Special #1",
    description: "A hilarious hour of stand-up about life, family, and more.",
    platform: "netflix",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #2",
    description: "Even more jokes, anecdotes, and comedic insight.",
    platform: "amazon",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #3",
    description: "Live from a big arena, featuring crowd work and stories.",
    platform: "hulu",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #1",
    description: "A hilarious hour of stand-up about life, family, and more.",
    platform: "netflix",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #2",
    description: "Even more jokes, anecdotes, and comedic insight.",
    platform: "amazon",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #3",
    description: "Live from a big arena, featuring crowd work and stories.",
    platform: "hulu",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #1",
    description: "A hilarious hour of stand-up about life, family, and more.",
    platform: "netflix",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #2",
    description: "Even more jokes, anecdotes, and comedic insight.",
    platform: "amazon",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #3",
    description: "Live from a big arena, featuring crowd work and stories.",
    platform: "hulu",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #1",
    description: "A hilarious hour of stand-up about life, family, and more.",
    platform: "netflix",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #2",
    description: "Even more jokes, anecdotes, and comedic insight.",
    platform: "amazon",
    videoId: "VWAhbaQFzRw",
  },
  {
    title: "Special #3",
    description: "Live from a big arena, featuring crowd work and stories.",
    platform: "hulu",
    videoId: "VWAhbaQFzRw",
  }
  // ... Add more specials as needed
];

const Specials = () => {
  return (
    <div className="specials-container">
      <h1 className="specials-title">My Comedy Specials</h1>

      {specialsData.map((special, idx) => (
        <div key={idx} className="special-card">
          <div className="video-container">
            {/* Embed YouTube iframe with the special’s videoId */}
            <iframe
              src={`https://www.youtube.com/embed/${special.videoId}`}
              title={special.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="special-title">{special.title}</h2>
          <p className="special-description">{special.description}</p>

          {/* Platform badge (Netflix, Amazon, Hulu, etc.) */}
          <span className={`platform-badge ${special.platform}`}>
            {special.platform}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Specials;
