'use client';
import Link from 'next/link';
import LanguageDropdown from '@/components/elements/LanguageDropdown';
import { useModal } from '@/components/customHooks/useModal';
import { Nav } from '@/components/elements/Nav';
import { useTranslation } from 'react-i18next';

export default function CustomHeader({ scroll, handleMobileMenu, topBar, headerCls, isBlack}) {
  const { openModal } = useModal();
  const { t } = useTranslation();
  

  if (!openModal) {
    console.error('openModal is not available. Make sure CustomHeader is wrapped in ModalProvider.');
  }

  const handleCalendarOpen = (e) => {
    e.preventDefault();
    openModal('calendar');
  };

  return (
    <>
        <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""} ${isBlack ? "header-black" : ""}`}>
            <div className="container">
              <div className="custom-header">
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
                <Nav />
                <div className="header-right ">
                  <div className='header-right__block'>
                    <LanguageDropdown />
                    <button 
                        className="btn btn-brand-4-medium hover-up"
                        onClick={handleCalendarOpen}
                    >
                        <span>{t("buttons.Get started")}</span>
                    </button>
                  </div>
                  <div className="burger-icon burger-icon-white burger-icon-custom" onClick={handleMobileMenu}>
                      <img src="/assets/imgs/template/icons/burger.svg" alt="burger-menu" />
                  </div>
                </div>
              </div>
            </div>
        </header>
    </>
  )
}
