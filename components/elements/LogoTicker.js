'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { useFetchData } from '../customHooks/useFetchData';
import Loading from "@/components/elements/Loading";

export default function LogoTicker() {
  const { data, loading, error } = useFetchData('logo-techonologies');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const logos = Array.isArray(data) && data.length > 0 && data[0]?.logo ? data[0].logo : [];

  if (!logos.length) {
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
