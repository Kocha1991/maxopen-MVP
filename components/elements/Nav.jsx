import React from "react";
import { useLanguage } from '../customHooks/LanguageContext';
import Link from 'next/link';

export const Nav = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      home:"Home",
      services:"Services",
      solutions:"Solutions",
      portfolio:"Portfolio",
      contact:"Contact",
    },
    uk: {
      home:"Головна",
      services:"Послуги",
      solutions:"Рішення",
      portfolio:"Портфоліо",
      contact:"Контакт",
    },
    ru_UA: {
      home: "Главная",
      services: "Услуги",
      solutions: "Решения",
      portfolio: "Портфолио",
      contact: "Контакты",
    },
  };
  const { home, services, solutions, portfolio, contact } = translations[language] || translations.en;

  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        <li className="has-children"><Link className="active" href="/">{home}</Link></li>
        <li className="has-children"><Link href="#services">{services}</Link></li>
        <li className="has-children"><Link href="/complete-solutions">{solutions}</Link></li>
        <li className="has-children"><Link href="#projects">{portfolio}</Link>
        </li>
        <li className="has-children"><Link href="#contact">{contact}</Link></li>
      </ul>
    </nav>
  );
};
