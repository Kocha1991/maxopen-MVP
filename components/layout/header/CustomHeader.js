'use client';
import LanguageDropdown from '@/components/elements/LanguageDropdown';
import { useModal } from '@/components/customHooks/useModal';
import { Nav } from '@/components/elements/Nav';
import Logo from '@/components/elements/Logo';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function CustomHeader({ scroll, handleMobileMenu, topBar, headerCls, isBlack }) {
  const { openModal } = useModal();
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { data: btnsText} = useFetchData("buttons-text", language, true);
  

  if (!openModal) {
    console.error('openModal is not available. Make sure CustomHeader is wrapped in ModalProvider.');
  }

  const handleCalendarOpen = (e) => {
    e.preventDefault();
    openModal('calendar');
  };

  return (
    <header className={`header ${headerCls || ''} sticky-bar ${scroll ? 'stick' : ''} ${isBlack ? 'header-black' : ''}`}>
      <div className="container">
        <div className="custom-header">
          <div className='custom-header__logos-block'>
            <Logo />
            <Link href="/" className='logo-phone'>
              <img src="/assets/imgs/template/Logo-phone.png" alt="MaxOpen" />
            </Link>
          </div>
          <Nav />
          <div className="header-right">
            <div className="header-right__block">
              <LanguageDropdown />
              <button
                className="btn btn-brand-4-medium hover-up"
                onClick={handleCalendarOpen}
              >
                <span>{btnsText["get-started"]}</span>
              </button>
            </div>
            <div className="burger-icon burger-icon-white burger-icon-custom" onClick={handleMobileMenu}>
              <img src="/assets/imgs/template/icons/burger.svg" alt="burger-menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
