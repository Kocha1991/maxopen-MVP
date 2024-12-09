import React from "react";

export const SolutionCard = () => {
  return (
    <div className='solution-card'>
      <div className='solution-card__left'>
        <div className='solution-card__header'>
          <img src="/assets/imgs/template/icons/solution-card1.png" alt="icon" />
          <div className="solution-card__title">
            Discovery: Strategic planning and goal setting
          </div>
        </div>
        <div className='solution-card__descr'>
          We build a strong technical foundation for the product, including servers, databases, and a secure infrastructure that can withstand the load and ensure stable operation. Each stage of technical development is aimed at optimizing the product's performance, ensuring high speed and security. This guarantees not only uninterrupted operation today, but also the ability to scale the product for future growth, allowing you to develop your business without restrictions.
        </div>
        <div className='solution-card__left-bottom'>
          <button className="btn btn-brand-4-medium hover-up animation-btn-svg" type="submit">
            <span>
              Order package
              <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
              </svg>
            </span>
          </button>
          <div className='solution-card__left-price'>
            <h3 className='solution-card__subheader'>
              Package price
            </h3>
            <p>
              $3000
            </p>
          </div>
        </div>
      </div>
      <div className='solution-card__right'>
        <div className="solution-card__title">
          What's included?
        </div>
        <div className="solution-card__right-grid">
          <div className='solution-card__right-item'>
            <h3 className='solution-card__subheader'>
              UI Design
            </h3>
            <div className='solution-card__descr'>
              We design a user-friendly interface focusing on layout, colors, and typography, ensuring usability and alignment with your brand identity.
            </div>
          </div>
          <div className='solution-card__right-item'>
            <h3 className='solution-card__subheader'>
              Interactive Prototypes
            </h3>
            <div className='solution-card__descr'>
              Interactive prototypes are created to showcase user interactions and transitions, ensuring the design aligns with goals and user needs.
            </div>
          </div>
          <div className='solution-card__right-item'>
            <h3 className='solution-card__subheader'>
              Responsive Design
            </h3>
            <div className='solution-card__descr'>
              The design is optimized for all devices, ensuring a seamless, responsive experience across desktop, tablet, and mobile.
            </div>
          </div>
          <div className='solution-card__right-item'>
            <h3 className='solution-card__subheader'>
              Testing & Quality Assurance
            </h3>
            <div className='solution-card__descr'>
              Testing is conducted to ensure functionality, performance, and security, providing a seamless, error-free experience across all platforms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
