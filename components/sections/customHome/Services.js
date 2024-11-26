import React from "react";
import Link from 'next/link';
import { InfoCard } from '@/components/elements/InfoCard';

import Icon1 from '@/public/assets/imgs/template/icons/Website-development-green.svg';

export const Services = () => {
  return (
    <div className='maxOpen-services'>
      <div className="container">
        <div className='maxOpen-bg-text'>
          Your solution is here
        </div>
        <h2 className='maxOpen-services__title'>Choose services based on your needs</h2>
        <h3 className='maxOpen-services__descr'>Looking to increase sales, enhance brand recognition, or streamline customer interactions? We offer a wide range of web design and mobile app development services tailored to your specific needs.</h3>
        <div className="row">
          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Website-development-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Website-development-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Website development</h5>
                <p className="mb-12 text-md neutral-300">
                  We develop custom web solutions to achieve your business goals
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/CHATBOTS-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/CHATBOTS-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">CHATBOTS</h5>
                <p className="mb-12 text-md neutral-300">
                  Chatbots provide a cost-effective solution by automating routine tasks and reducing labor costs
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Android-App-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Android-App-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">iOS/Android App</h5>
                <p className="mb-12 text-md neutral-300">
                  Eu morbi orci ultricies vel congue sagittis lgula urna viverra vestibulum.
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Online-stores-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Online-stores-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Online stores</h5>
                <p className="mb-12 text-md neutral-300">
                  We build robust, conversion-driven e-commerce solutions that drive sales.
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/CRM-systems-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/CRM-systems-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">CRM systems</h5>
                <p className="mb-12 text-md neutral-300">
                  Your business deserves a tailored CRM. Let's build it together.
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/IT-OUTSOURCING-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/IT-OUTSOURCING-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">IT OUTSOURCING</h5>
                <p className="mb-12 text-md neutral-300">
                  Maximize efficiency and cut costs with top-tier IT outsourcing services tailored to your needs."
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Crypto-projects-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Crypto-projects-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Crypto projects</h5>
                <p className="mb-12 text-md neutral-300">
                  Unlock the potential of blockchain with custom crypto solutions that offer security and scalability.
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Game-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Game-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Games</h5>
                <p className="mb-12 text-md neutral-300">
                  From concept to launch, we design immersive games that captivate players and drive excitement.
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

          <div className="col-lg-4 mb-20">
            <div className="card-features-maxOpen">
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Telegram-web-app-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Telegram-web-app-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Telegram web app</h5>
                <p className="mb-12 text-md neutral-300">
                  We create seamless Telegram web apps that enhance user engagement and streamline communication.
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
          
          <div className='col-lg-12 '>
            <div className="card-features-maxOpen card-features-maxOpen-long">
              <div></div>
              <div className="card-image"> 
                <img 
                  src="/assets/imgs/template/icons/Cybersecurity-green.svg" 
                  alt="icon" 
                  className='card-image__icon'
                />
                <img 
                  src="/assets/imgs/template/icons/Cybersecurity-black.svg" 
                  alt="icon" 
                  className='card-image__icon-hover'
                />
              </div>
              <div className="card-info">
                <h5 className="mb-12">Cybersecurity</h5>
                <p className="mb-12 text-md neutral-300">
                  Technical support and maintenance for companies worldwide
                </p>
              </div>
              <Link className="btn btn-info-card" href="#">
                Learn more
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#2AFAF8"/>
                </svg>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};
