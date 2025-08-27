'use client';
import { useEffect, useState } from 'react';
import AddClassBody from '../../elements/AddClassBody';
import BackToTop from '../../elements/BackToTop';
import Breadcrumb from '../Breadcrumb';
import MobileMenu from '../MobileMenu';
import Footer1 from '../footer/Footer1';
import Footer2 from '../footer/Footer2';
import Footer3 from '../footer/Footer3';
import Footer4 from '../footer/Footer4';
import Header1 from './Header1';
import CustomHeader from './CustomHeader';
import { CustomFooter } from '../footer/CustomFooter';

export default function HeaderLayout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  topBar,
  headerCls,
  logoWhite,
  useCustomHeader,
  isBlack,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add('mobile-menu-active')
      : document.body.classList.remove('mobile-menu-active');
  };

  useEffect(() => {
    const WOW = require('wowjs');
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <AddClassBody />
      <div className='body-overlay-1' onClick={handleMobileMenu} />

      <CustomHeader
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isBlack={isBlack}
      />
    
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main className='main'>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      <CustomFooter />

      <BackToTop />
    </>
  );
}
