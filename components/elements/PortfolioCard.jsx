import React from "react";
import Link from 'next/link';

const PortfolioCard = ({item, btnsText}) => {
  console.log(item)
  return (
    <div className='portfolio-card'>
      <img
        src={item['bg-img']?.full_url}
        alt="background desktop"
        className="portfolio-slider__bg portfolio-slider__bg-web"
      />
      <img
        src={item['bg-slide-phone']?.full_url}
        alt="background mobile"
        className="portfolio-slider__bg portfolio-slider__bg-phone"
      />
      <div className='container'>
        <div className='blog-title'>
          <h2 className="maxOpen-services__title wight-text">{item.title}</h2>

          <h3 className="maxOpen-services__descr wight-text">
            {item.descr}
          </h3>

          <div className='portfolio-slide__tegs-info'>
            <div className='portfolio-slide__tegs'>
              {item.teg.map((tag, i) => (
                <span key={i} className='maxOpen-services__descr wight-text'>{tag}</span>
              ))}
            </div>
            <div className='portfolio-slide__availabla maxOpen-services__descr wight-text'>
              {item.available}
              <img src={item["icon-wight"]?.full_url} alt="icon" />
            </div>
          </div>
        </div>

        <img src={item["slide-web-img"].full_url} alt="Project preview" className='portfolio-slide__web-img'/>
        <img src={item["slide-phone-img"].full_url} alt="Project preview" className='portfolio-slide__phone-img'/>

        <div className='portfolio-slider__bot-info'>
          <div className='portfolio-slider__bot-info--wrepper'>
            {item['option-title'].map((title, i) => (
              <div className='portfolio-slider__bot-item' key={i}>
                <h3 className='text-lg wight-text'>{title}</h3>
                <h2 className='text-18-bold wight-text'>{item['option-descr'][i]}</h2>
              </div>
            ))}
          </div>

          <a
            href="https://www.behance.net/baa4cc2f"
            className="btn btn-info-card animation-btn-svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnsText.behance}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                fill="#191919"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
};

export default PortfolioCard;
