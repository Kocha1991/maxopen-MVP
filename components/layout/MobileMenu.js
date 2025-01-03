'use client';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Nav } from '../elements/Nav';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const { t, i18n } = useTranslation();  // Використовуємо i18n для зміни мови
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');  // Ініціалізуємо з поточною мовою

    // Додано хук для роботи з модалкою
    const { openModal } = useModal();  // Викликаємо openModal для відкриття модалки

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    };

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);  // Зміна мови за допомогою i18n
        localStorage.setItem('language', language);  // Збереження вибраної мови в localStorage
        setSelectedLanguage(language);  // Оновлюємо поточний вибір мови
    };

    // Обробка для відкриття календаря через модалку
    const handleCalendarOpen = () => {
        openModal('calendar');  // Відкриваємо модалку з календарем
        handleMobileMenu();  // Закриваємо мобільне меню після відкриття модалки
    };

    // Обробка кліку по елементу навігації
    const handleNavLinkClick = () => {
        handleMobileMenu();  // Закриваємо мобільне меню при натисканні на елемент навігації
    };

    useEffect(() => {
      if (isMobileMenu) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "";
      }
      return () => {
          document.body.style.overflow = "";
      }
    }, [isMobileMenu]);

    return (
      <>
          <div className={`mobile-header-active mobile-header-wrapper-style custom-mobile-inner ${isMobileMenu ? "sidebar-visible" : ""}`}>
              <div className="mobile-header-wrapper-inner">
                  <div className="mobile-header-top">
                      <img src="/assets/imgs/template/logo.png" alt="MaxOpen" />
                      <div className={`${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                          <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
                      </div>
                  </div>
                  <div className="custom-menu-body">
                    <Nav onLinkClick={handleNavLinkClick} /> {/* Додано обробник кліків на посилання */}
                    <button 
                        className="btn btn-brand-4-medium hover-up"
                        onClick={handleCalendarOpen}  // Відкриваємо модалку при натисканні
                    >
                        <span>{t("buttons.Get started")}</span>
                    </button>
                  </div>
                  <div className="custom-menu-footer">
                    <div className='custom-menu-lang'>
                      <button
                        className={`custom-menu-lang__lang ${selectedLanguage === "en" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("en")}
                      >
                        English
                      </button>
                      <button
                        className={`custom-menu-lang__lang ${selectedLanguage === "uk" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("uk")}
                      >
                        Ukrainian
                      </button>
                      <button
                        className={`custom-menu-lang__lang ${selectedLanguage === "ru_UA" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("ru_UA")}
                      >
                        Russian
                      </button>
                    </div>
                  </div>
              </div>
          </div>
      </>
    )
}
