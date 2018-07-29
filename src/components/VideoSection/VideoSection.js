import React from "react";
import style from "./video-section.scss";

const VideoSection = () => (
  <div className={style.main}>
    <div className={style.video}>
      <iframe
        title="iOcari promotional video"
        src="https://www.youtube.com/embed/x7cQ3mrcKaY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />
    </div>
  </div>
);

export default VideoSection;
