'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export const SlidePortfolio = ({ item, btnsText }) => {
  const descrRef = useRef(null);
  const [isExpandable, setIsExpandable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = descrRef.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const height = el.scrollHeight;
      const lines = height / lineHeight;
      if (lines > 3) {
        setIsExpandable(true);
      }
    }
  }, []);

  const handleToggle = () => {
    if (isExpandable) {
      setExpanded(prev => !prev);
    }
  };

  return (
    <div className="portfolio-slide ptb-50">
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
          <div className="maxOpen-bg-text">{item.teaser}</div>

          <h2 className="maxOpen-services__title">{item.title}</h2>

          <h3
            ref={descrRef}
            className={`maxOpen-services__descr ${expanded ? 'expanded' : ''}`}
          >
            {item.descr}
          </h3>

          {isExpandable && (
            <button className="btn btn-info-card animation-btn-svg" onClick={handleToggle}>
              {expanded ? btnsText["show-less"] : btnsText["show-more"]}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919" />
              </svg>
            </button>
          )}

          <div className='portfolio-slide__tegs-info'>
            <div className='portfolio-slide__tegs'>
              {item.teg.map((tag, i) => (
                <span key={i} className='maxOpen-services__descr'>{tag}</span>
              ))}
            </div>
            <div className='portfolio-slide__availabla maxOpen-services__descr'>
              {item.available}
              <img src={item.icon?.full_url} alt="icon" />
            </div>
          </div>
        </div>

        <img src={item["slide-web-img"].full_url} alt="Project preview" className='portfolio-slide__web-img'/>
        <img src={item["slide-phone-img"].full_url} alt="Project preview" className='portfolio-slide__phone-img'/>

        <div className='portfolio-slider__bot-info portfolio-slider__bot-info-web'>
          <div className='portfolio-slider__bot-info--wrepper'>
            {item['option-title'].map((title, i) => (
              <div className='portfolio-slider__bot-item' key={i}>
                <h3 className='text-lg'>{title}</h3>
                <h2 className='text-18-bold'>{item['option-descr'][i]}</h2>
              </div>
            ))}
          </div>

          <Link className="btn btn-info-card animation-btn-svg" href="">
            {btnsText.behance}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
