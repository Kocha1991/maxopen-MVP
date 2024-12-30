import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const { t } = useTranslation();


  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        <li className="has-children"><Link className="active" href="/">{t("Home")}</Link></li>
        <li className="has-children"><Link href="#services">{t("Services")}</Link></li>
        <li className="has-children"><Link href="/complete-solutions">{t("Solutions")}</Link></li>
        <li className="has-children"><Link href="#projects">{t("Portfolio")}</Link>
        </li>
        <li className="has-children"><Link href="#contact">{t("Contact")}</Link></li>
      </ul>
    </nav>
  );
};
