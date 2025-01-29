'use client';
import React from "react";
import Link from 'next/link';

export const ServicesCard = ({
  icon,
  iconHover,
  title,
  descr,
  btnText,
  isFullWidth,
  link = "/services"
}) => {

  return (
    <div className={`mb-20 ${isFullWidth ? 'col-12 card-features-maxOpen-long' : 'col-lg-4'}`}>
      <div className={`card-features-maxOpen ${isFullWidth ? 'card-features-maxOpen-long' : ''}`}>
        <div className="card-wrapper">
          <div className="card-image"> 
            <div 
              className='card-image__icon'
              dangerouslySetInnerHTML={{ __html: icon }}
            />
            <div 
              className='card-image__icon-hover'
              dangerouslySetInnerHTML={{ __html: iconHover }}
            />
          </div>
          <div className="card-info">
              <h5 className="mb-12">{title}</h5>
              <p className="mb-12 text-md neutral-300">
                {descr}
              </p>
          </div>
        </div>
        <Link className="btn btn-info-card animation-btn-svg" href={link}>
          {btnText}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};
