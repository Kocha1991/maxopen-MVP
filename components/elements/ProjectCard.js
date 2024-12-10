import React from "react";
import Link from 'next/link';

export const ProjectCard = ({ img, title, descr, link }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-20 maxOpen_project-card">
      <div className="card-we-know">
        <Link className="card-image" href={link}>
          <img src={img} alt={title} />
        </Link>
        <div className="card-info">
          <Link className="card-title" href={link}>
            <h4>{title}</h4>
            <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={38} height={38} rx={19} fill="true" />
              <g clipPath="url(#clip0_517_2603)">
                <path d="M23.6537 16.8149L14.718 25.7506L13.25 24.2826L22.1847 15.3469H14.31V13.2705H25.7301V24.6906H23.6537V16.8149Z" fill="#12FDA3" />
              </g>
              <defs>
                <clipPath id="clip0_517_2603">
                  <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className="card-desc">
            <p className="text-md">{descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
