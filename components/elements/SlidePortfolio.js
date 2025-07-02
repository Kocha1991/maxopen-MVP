import React from "react";
import Link from 'next/link';

export const SlidePortfolio = ({ }) => {
  return (
    <div className="portfolio-slide">
      <div className='blog-title'>
        <div className="maxOpen-bg-text">
          Our Portfolio
        </div>
        <h2 className={`maxOpen-services__title`}>
          KloTop
        </h2>
        <h3 className={`maxOpen-services__descr`}>
          KloTop is a specialized web solution that combines a landing page and a CRM system for effective management of arbitration campaigns. The service provides convenient statistics tracking, traffic optimization, and protection against blocking. The platform is adapted for both experienced professionals and beginners.
        </h3>
        <button className="btn btn-info-card animation-btn-svg">
          Read more
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
          </svg>
        </button>
        <div className='portfolio-slide__tegs-info'>
          <div className='portfolio-slide__tegs'>
            <span className='maxOpen-services__descr'>#landing</span>
            <span className='maxOpen-services__descr'>#crm</span>
          </div>
          <div className='portfolio-slide__availabla maxOpen-services__descr'>
            Available on:
            <img src="/assets/imgs/template/icons/planet.svg" alt="" />
          </div>
        </div>
      </div>
      <img src="/assets/imgs/template/slide1.png" alt="" />
      <div className='portfolio-slide__bot-info'>
        <div className='portfolio-slide__bot-info--wrepper'>
          <div className='portfolio-slide__bot-item'>
            <h3 className='text-lg'>Services Provided</h3>
            <h2 className='text-18-bold '>Design & Development</h2>
          </div>
          <div className='portfolio-slide__bot-item'>
            <h3 className='text-lg'>Design</h3>
            <h2 className='text-18-bold '>60 hours</h2>
          </div>
        </div>
        <Link className="btn btn-info-card animation-btn-svg" href={""}>
          Check it out on Behance
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};
