import React from "react";
import Link from 'next/link';
import Loading from '@/components/elements/Loading';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '../customHooks/useFetchData';

export const Nav = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: navigations, loading } = useFetchData("navigation", language);

  if (loading) return <Loading />;

  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        {navigations.map((item) => (
          <li key={item.id} className="has-children">
            <Link href={item.slug.toLowerCase()}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
