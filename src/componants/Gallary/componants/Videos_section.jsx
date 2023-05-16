import React, { useState } from "react";
import "../Style/videos_section.css";
import videos_section from "../content/videos_section";

const Videos_section = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const playVideo = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div className="Videos_section_video-gallery">
      <h2 className="Videos_section_video-gallery-heading">Video Gallery</h2>
      <div className="Videos_section_video-gallery-container">
        {videos_section.videos.map((video) => (
          <div key={video.id} className="Videos_section_video-card">
            {playingVideo === video.id ? (
              <div className="Videos_section_video-player">
                <iframe
                  title={video.title}
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${video.url
                    .split("/")
                    .pop()}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  controls
                ></iframe>
              </div>
            ) : (
              <div
                className="Videos_section_video-card-thumbnail"
                onClick={() => playVideo(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.url
                    .split("/")
                    .pop()}/0.jpg`}
                  alt={video.title}
                />
                <div className="Videos_section_play-button">
                  <i className="fa fa-play video_icon"></i>
                </div>
              </div>
            )}
            <div className="Videos_section_video-card-info">
              <h3 className="Videos_section_video-card-title">{video.title}</h3>
              {/* <p className="Videos_section_video-card-description"> */}
                {/* {video.description} */}
              {/* </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos_section;
