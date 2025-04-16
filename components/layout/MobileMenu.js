'use client';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Nav } from '../elements/Nav';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import { useFetchData } from '@/components/customHooks/useFetchData'; // імпорт хука

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({ status: false, key: "" });
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
  const { openModal } = useModal();

  // Отримання логотипу з API
  const { data: logoData, loading: logoLoading } = useFetchData('main-logo', i18n.language);
  const logoItem = Array.isArray(logoData) && logoData.length > 0 ? logoData[0] : null;
  const logoWeb = logoItem?.['logo-web']?.full_url;

  const handleToggle = (key) => {
    setIsActive(prev => prev.key === key ? { status: false } : { status: true, key });
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setSelectedLanguage(language);
  };

  const handleCalendarOpen = () => {
    openModal('calendar');
    handleMobileMenu();
  };

  const handleNavLinkClick = () => {
    handleMobileMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenu]);

  return (
    <div className={`mobile-header-active mobile-header-wrapper-style custom-mobile-inner ${isMobileMenu ? "sidebar-visible" : ""}`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <img src={logoWeb} alt="MaxOpen" />
          <div className={`${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
            <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
          </div>
        </div>
        <div className="custom-menu-body">
          <Nav onLinkClick={handleNavLinkClick} />
          <button className="btn btn-brand-4-medium hover-up" onClick={handleCalendarOpen}>
            <span>{t("buttons.Get started")}</span>
          </button>
        </div>
        <div className="custom-menu-footer">
          <div className='custom-menu-lang'>
            <button className={`custom-menu-lang__lang ${selectedLanguage === "en" ? "active" : ""}`} onClick={() => handleLanguageChange("en")}>English</button>
            <button className={`custom-menu-lang__lang ${selectedLanguage === "uk" ? "active" : ""}`} onClick={() => handleLanguageChange("uk")}>Ukrainian</button>
            <button className={`custom-menu-lang__lang ${selectedLanguage === "ru_UA" ? "active" : ""}`} onClick={() => handleLanguageChange("ru_UA")}>Russian</button>
          </div>
        </div>
      </div>
    </div>
  )
}
