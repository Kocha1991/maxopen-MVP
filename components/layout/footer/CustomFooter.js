'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { SocialNetworks } from '@/components/elements/SocialNetworks';
import { Nav } from '@/components/elements/Nav';
import Logo from '@/components/elements/Logo';
import Loading from '@/components/elements/Loading';

export const CustomFooter = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: text, loading: textLoading } = useFetchData('footer-text', language, true);
  
  const loading = textLoading;

  return (
    <footer className="footer custom-footer">
      <div className="container">
        {loading ? (
          <div className='page-loading'>
            <Loading /> 
          </div>
        ) : (
          <div className="custom-footer__wrapper">
            <Logo />
            <Nav />
            <div className="custom-footer__social">
              <p className="text-lg title-follow neutral-0 mt-0">{text.follow}</p>
              <SocialNetworks />
            </div>

            <div className="footer-bottom text-center">
              <p className="text-sm neutral-600">{text.copyright}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
