'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialNetworks } from '@/components/elements/SocialNetworks';
import { Nav } from '@/components/elements/Nav';
import Logo from '@/components/elements/Logo';

export const CustomFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer custom-footer">
      <div className="container">
        <div className="custom-footer__wrapper">
          <Logo />
          <Nav />
          <div className="custom-footer__social">
            <p className="text-lg title-follow neutral-0 mt-0">{t('Follow')}</p>
            <SocialNetworks />
          </div>

          <div className="footer-bottom text-center">
            <p className="text-sm neutral-600">Copyright © 2025 MAXOPEN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
