'use client';
import Link from 'next/link';
import LanguageDropdown from '@/components/elements/LanguageDropdown';
import { useModal } from '@/components/customHooks/useModal';
import { useLanguage } from '@/components/customHooks/LanguageContext';

export default function CustomHeader({ scroll, handleMobileMenu, topBar, headerCls, isBlack}) {
  const { openModal } = useModal();
  const { language } = useLanguage();

  if (!openModal) {
    console.error('openModal is not available. Make sure CustomHeader is wrapped in ModalProvider.');
  }

  const handleCalendarOpen = (e) => {
    e.preventDefault();
    openModal('calendar');
  };

  const translations = {
    en: {
      home:"Home",
      services:"Services",
      solutions:"Solutions",
      portfolio:"Portfolio",
      contact:"Contact",
      buttonText:"Get started"
    },
    uk: {
      home:"Головна",
      services:"Послуги",
      solutions:"Рішення",
      portfolio:"Портфоліо",
      contact:"Контакт",
      buttonText:"Розпочати"
    },
    ru_UA: {
      home: "Главная",
      services: "Услуги",
      solutions: "Решения",
      portfolio: "Портфолио",
      contact: "Контакты",
      buttonText:"Начать"
    },
  };
  
  const { home, services, solutions, portfolio, contact, buttonText } = translations[language] || translations.en;

    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""} ${isBlack ? "header-black" : ""}`}>
                {/* {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left">
                                  <span className="address-icon text-md">
                                    9207 Lakeshore RdShreveport
                                  </span>
                                </div>
                                <div className="box-top-bar-right"><a className="phone-icon text-md" href="tel:(262) 555-0131">(262)
                                    555-0131</a><a className="email-icon text-md" href="mailto:contact@nivia.com">contact@nivia.com</a></div>
                            </div>
                        </div>
                    </div>
                } */}
                <div className="container">
                    <div className="main-header custom-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img 
                                      src="/assets/imgs/template/logo.png" 
                                      alt="MaxOpen"
                                      className='web-logo'
                                    />
                                    <img 
                                      src="/assets/imgs/template/mobile-logo.svg"
                                      alt="MaxOpen"
                                      className='mobile-logo'
                                    />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">{home}</Link>
                                        </li>
                                        <li className="has-children"><Link href="#services">{services}</Link></li>
                                        <li className="has-children"><Link href="/complete-solutions">{solutions}</Link></li>
                                        <li className="has-children"><Link href="#projects">{portfolio}</Link>
                                        </li>
                                        <li className="has-children"><Link href="#contact">{contact}</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right ">
                            <div className='header-right__block'>
                              <LanguageDropdown />
                              <button 
                                  className="btn btn-brand-4-medium hover-up"
                                  onClick={handleCalendarOpen}
                              >
                                  <span>{buttonText}</span>
                              </button>
                            </div>
                            <div className="burger-icon burger-icon-white burger-icon-custom" onClick={handleMobileMenu}>
                                <img src="/assets/imgs/template/icons/burger.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
