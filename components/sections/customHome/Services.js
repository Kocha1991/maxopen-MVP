import React from "react";
import Link from 'next/link';
import { ServicesCard } from '@/components/elements/ServicesCard';
import { BlogTitle } from '@/components/blog/BlogTitle';

export const Services = () => {
  return (
    <div className='maxOpen-services'>
      <div className="container">
        <BlogTitle 
          textOnBg='Your solution is here'
          title='Choose services based on your needs'
          descr='Looking to increase sales, enhance brand recognition, or streamline customer interactions? We offer a wide range of web design and mobile app development services tailored to your specific needs'
        />
        <div className="row">
          <ServicesCard 
            icon='/assets/imgs/template/icons/Website-development-green.svg'
            iconHover='/assets/imgs/template/icons/Website-development-black.svg'
            title='Website development'
            descr='We develop custom web solutions to achieve your business goals'
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/CHATBOTS-green.svg'
            iconHover='/assets/imgs/template/icons/CHATBOTS-black.svg'
            title='CHATBOTS'
            descr='Chatbots provide a cost-effective solution by automating routine tasks and reducing labor costs'
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Android-App-green.svg'
            iconHover='/assets/imgs/template/icons/Android-App-black.svg'
            title='iOS/Android App'
            descr='Eu morbi orci ultricies vel congue sagittis lgula urna viverra vestibulum.'
          />
          <ServicesCard 
            icon='assets/imgs/template/icons/Online-stores-green.svg'
            iconHover='/assets/imgs/template/icons/Online-stores-black.svg'
            title='Online stores'
            descr='We build robust, conversion-driven e-commerce solutions that drive sales.'
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/CRM-systems-green.svg'
            iconHover='/assets/imgs/template/icons/CRM-systems-black.svg'
            title='CRM systems'
            descr="Your business deserves a tailored CRM. Let's build it together."
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/IT-OUTSOURCING-green.svg'
            iconHover='/assets/imgs/template/icons/IT-OUTSOURCING-black.svg'
            title='IT OUTSOURCING'
            descr="Maximize efficiency and cut costs with top-tier IT outsourcing services tailored to your needs."
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Crypto-projects-green.svg'
            iconHover='/assets/imgs/template/icons/Crypto-projects-black.svg'
            title='Crypto projects'
            descr="Unlock the potential of blockchain with custom crypto solutions that offer security and scalability."
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Game-green.svg'
            iconHover='/assets/imgs/template/icons/Game-black.svg'
            title='Games'
            descr="From concept to launch, we design immersive games that captivate players and drive excitement."
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Telegram-web-app-green.svg'
            iconHover='/assets/imgs/template/icons/Telegram-web-app-black.svg'
            title='Telegram web app'
            descr="We create seamless Telegram web apps that enhance user engagement and streamline communication."
          />

          <div className='col-lg-12 '>
            <div className="card-features-maxOpen card-features-maxOpen-long">
              <div className='card-features-maxOpen-long__block'>
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
