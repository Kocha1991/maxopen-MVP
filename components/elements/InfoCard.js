import React from "react";
import Link from 'next/link';

export const InfoCard = ({
  icon,
  title,
  descr,
}) => {
  return  (
    <div className="col-lg-4">
      <div className="card-features-maxOpen">
        <div className="card-image"> 
          <img src={icon} alt="icon" />
        </div>
        <div className="card-info">
          <h5 className="mb-12">{title}</h5>
          <p className="mb-12 text-md neutral-300">
            {descr}
          </p>
          <Link className="btn btn-link-white" href="#">
              <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={38} height={38} rx={19} fill="true" />
                  <g clipPath="url(#clip0_5_2504)">
                      <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                  </g>
                  <defs>
                      <clipPath id="clip0_5_2504">
                          <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                      </clipPath>
                  </defs>
              </svg>
                Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};
