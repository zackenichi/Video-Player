import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1> No results Found...</h1>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment vid-description">
        <h4 className="ui header">
          <span
            dangerouslySetInnerHTML={{ __html: video.snippet.title }}
          ></span>
        </h4>
        <p>
          <span
            dangerouslySetInnerHTML={{ __html: video.snippet.description }}
          ></span>
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
