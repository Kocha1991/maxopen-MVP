import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '../customHooks/useFetchData';

export const Nav = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: navigations} = useFetchData("navigation", language);

  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        {Array.isArray(navigations) && navigations.map((item) => (
          <li key={item.id} className="has-children">
            <Link href={item.slug.toLowerCase()}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
