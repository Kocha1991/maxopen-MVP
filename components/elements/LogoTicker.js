import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

export default function LogoTicker({ data }) {
  const { t } = useTranslation();

  if (!data || !data.length) {
    return <p>{t("notification.InformationMissing")}</p>;
  }

  return (
    <Marquee pauseOnHover={true} direction="left" className="carouselTicker__list list-logos">
      {data.map((item) => (
        <li key={item.id} className="carouselTicker__item">
          <div className="item-logo">
            <img src={item.full_url} alt={item.file_name} />
          </div>
        </li>
      ))}
    </Marquee>
  );
}