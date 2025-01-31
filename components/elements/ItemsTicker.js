import React from 'react';
import Marquee from 'react-fast-marquee';

export default function ItemsTicker({ items }) {
  if (!items || !items.length) {
    return <p>No items available</p>;
  }

  return (
    <Marquee pauseOnHover={true} direction="left" className="carouselTicker__list list-logos">
      {items.map((item) => (
        <div key={item.id} className='animation-item '>
          <h2 className='text-18-semibold'>{item["name-service"]}</h2>
        </div>
      ))}
    </Marquee>
  );
}
