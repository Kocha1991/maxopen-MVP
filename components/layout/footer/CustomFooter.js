'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { useFetchData } from '@/components/customHooks/useFetchData';
import { SocialNetworks } from '@/components/elements/SocialNetworks';
import { Nav } from '@/components/elements/Nav';
import Loading from '@/components/elements/Loading';

export const CustomFooter = () => {
  const { t } = useTranslation();

  const { data: logoData, loading: logoLoading } = useFetchData('main-logo');

  const logoItem = Array.isArray(logoData) && logoData.length > 0 ? logoData[0] : null;
  const logoImage = logoItem?.['logo-web']?.full_url;
  const logoHref = logoItem?.href || '/';

  return (
    <footer className="footer custom-footer">
      <div className="container">
        <div className="custom-footer__wrapper">
          <Link href={logoHref} className="maxOpen-logo">
            <img
              alt="MaxOpen"
              src={logoImage}
              width={logoItem?.['logo-web']?.width || 206}
              height={logoItem?.['logo-web']?.height || 44}
            />
          </Link>
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
