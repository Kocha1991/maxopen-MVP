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
          muted
          autoPlay
          loop
          playsInline
          poster="/assets/imgs/template/video-thumbnail.jpg"
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="card-info">
        <Link href="#">
          <div className='play-btn-block'>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="21" fill="#434445"/>
              <path d="M27.2859 20.2574L15.3234 13.1375C15.1773 13.0516 15.027 13 14.8551 13C14.3867 13 14.0043 13.3867 14.0043 13.8594H14V28.6406H14.0043C14.0043 29.1133 14.3867 29.5 14.8551 29.5C15.0313 29.5 15.1773 29.4398 15.3363 29.3539L27.2859 22.2426C27.5695 22.0063 27.75 21.6496 27.75 21.25C27.75 20.8504 27.5695 20.498 27.2859 20.2574Z" fill="white"/>
            </svg>
            <span>Play</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
