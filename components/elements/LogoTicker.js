import React from 'react';
import Marquee from 'react-fast-marquee';

export default function LogoTicker({ logos }) {
  if (!logos || !logos.length) {
    return <p>No logos available</p>;
  }

  return (
    <Marquee pauseOnHover={true} direction="left" className="carouselTicker__list list-logos">
      {logos.map((logo) => (
        <li key={logo.id} className="carouselTicker__item">
          <div className="item-logo">
            <img src={logo.full_url} alt={logo.file_name} />
          </div>
        </li>
      ))}
    </Marquee>
  );
}