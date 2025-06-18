import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '../customHooks/useFetchData';

export const Nav = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: navigations } = useFetchData("navigation", language);

  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        {Array.isArray(navigations) && navigations.map((item) => {
          const localizedSlug = item.slug
            ? `/${language}/${item.slug.toLowerCase().replace(/^\/+/, '')}`
            : '#';

          return (
            <li key={item.id} className="has-children">
              <Link href={localizedSlug}>
                {item.name || 'Без назви'}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
