import React from "react";
import Link from 'next/link';

export const ServicesCard = ({
  icon,
  iconHover,
  title,
  descr,
}) => {
  return (
    <div className="col-lg-4 mb-20">
      <div className="card-features-maxOpen">
        <div className="card-image"> 
          <img 
            src={icon}
            alt="icon" 
            className='card-image__icon'
          />
          <img 
            src={iconHover} 
            alt="icon" 
            className='card-image__icon-hover'
          />
        </div>
        <div className="card-info">
          <h5 className="mb-12">{title}</h5>
          <p className="mb-12 text-md neutral-300">
            {descr}
          </p>
          <Link className="btn btn-info-card" href="#">
            Learn more
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#2AFAF8"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
