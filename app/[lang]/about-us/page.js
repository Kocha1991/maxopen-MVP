'use client';
import React from "react";
import Layout from '../layout';
import { ModalProvider } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/elements/PageBanner';

export default function AboutUs() {
  return (
    <ModalProvider>
      <AboutUsContent />
    </ModalProvider>
  );
};

function AboutUsContent() {
  const { t } = useTranslation();
  
  return (
    <div className='about-us'>
      <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
        <PageBanner />
      </Layout>
    </div>
  );
}

