'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export const ServicesCard = ({
  icon,
  iconHover,
  title,
  descr,
  btnText,
  colSize,
  addLongClass,
  link,
}) => {
  // Визначаємо клас колонки на основі colSize
  const columnClass = `col-12 col-lg-${colSize}`; // Використовуйте col-lg- або col-md- в залежності від вашого брейкпоінту

  // Визначаємо додатковий клас для card-features-maxOpen
  const cardLongClass = addLongClass ? 'card-features-maxOpen-long' : '';

  return (
    // Замість isFullWidth в класі mb-20, використовуємо colSize
    <div className={`mb-20 ${columnClass} ${addLongClass ? 'card-features-maxOpen-long' : ''}`}>
      {/* Клас card-features-maxOpen-long додаємо і сюди */}
      <div className={`card-features-maxOpen ${cardLongClass}`}>
        <div className="card-wrapper">
          <div className='card-wrapper__top'>
            <div className="card-image">
              {icon && (
                <Image
                  src={icon.full_url}
                  alt={title}
                  width={icon.width}
                  height={icon.height}
                  className='card-image__icon'
                />
              )}
              {iconHover && (
                <Image
                  src={iconHover.full_url}
                  alt={`${title} (hover)`}
                  width={iconHover.width}
                  height={iconHover.height}
                  className='card-image__icon-hover'
                />
              )}
            </div>
            <h5 className="mb-12">{title}</h5>
          </div>
          <div className="card-info">
            <div
              className="mb-12 text-md neutral-300"
              dangerouslySetInnerHTML={{ __html: descr }}
            />
          </div>
        </div>

        {link && (
          <Link className="btn btn-info-card animation-btn-svg" href={link}>
            {btnText}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};