import React from 'react';
import "../../styles/snl.css";

const SNL = () => {
  // Example list of videos referencing Marcello Hernandez
  const snlVideos = [
    {
      id: 1,
      title: 'Marco Ramcharan Audition Highlight',
      embedId: 'VWAhbaQFzRw', // Example video ID from YouTube. Replace with actual ID
    },
    {
      id: 2,
      title: 'Marco Ramcharan SNL Sketch',
      embedId: 'VWAhbaQFzRw', // Example video ID from YouTube. Replace with actual ID
    }
  ];

  return (
    <div className="snl-container">
      <h1>SNL</h1>
      <p className="snl-intro">
        I am on SNL! This page will show my journey on SNL, from audition to where I am now.
      </p>

      <section className="snl-journey">
        <h2>My Journey</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus augue at 
          ipsum tincidunt aliquet. Donec porttitor at neque et pharetra. Suspendisse potenti. 
          Fusce consectetur elit risus, sit amet facilisis lorem auctor sit amet. 
          {/* Replace this text with your actual journey details */}
        </p>
      </section>

      <section className="snl-videos">
        <h2>My YouTube Videos</h2>
        <div className="video-list">
          {snlVideos.map((video) => (
            <div key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <div className="video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SNL;
