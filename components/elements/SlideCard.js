import React from "react";
import Link from 'next/link';

export const SlideCard = ({
  video,
}) => {
  return (
    <div className="card-team-2 slide-card">
      <div className="card-image">
        <video
          className="card-video"
          src={video}
          controls
          muted
          autoPlay
          loop
          poster="/assets/imgs/template/video-thumbnail.jpg"
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="card-info">
        <Link href="#">
          <img src="/assets/imgs/template/icons/play-btn.png" alt="play button" className='play-btn'/>
        </Link>
      </div>
    </div>
  );
};
