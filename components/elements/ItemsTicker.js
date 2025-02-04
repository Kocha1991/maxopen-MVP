import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export default function ItemsTicker({ items }) {
  if (!items || !items.length) {
    return <p>No items available</p>;
  }

  return (
    <Marquee pauseOnHover={true} direction="left" className="carouselTicker__list list-logos">
      {items.map((item) => (
        <div key={item.id} className='animation-item'>
            {item["social-icon"] && item["social-icon"].full_url && (
              <Link className='animation-item__icon' href={item["social-link"] || "#"} passHref>
                <img src={item["social-icon"].full_url} alt={item["text-alt"]} />
              </Link>
            )}
          <h2 className='text-18-semibold'>{item["name-service"]}</h2>
        </div>
      ))}
    </Marquee>
  );
}
