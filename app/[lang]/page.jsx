'use client';
import React from 'react';
import Layout from '@/components/layout/header/Layout';
import Banner from '@/components/sections/customHome/Banner';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import { Services } from '@/components/sections/customHome/Services';
import { Projects } from '@/components/sections/customHome/Projects';
import { Games } from '@/components/sections/customHome/Games';
import Prices from '@/components/sections/customHome/Prices';
import ContactUs from '@/components/sections/customHome/ContactUs';
import WhyWe from '@/components/sections/customHome/WhyWe';
import Process from '@/components/sections/customHome/Process';
import ModalManager from '@/components/elements/ModalManager';
import { useModal } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';

export default function Page() {
  return <HomeContent />;
}

function HomeContent() {
  const { isOpen, modalType, modalData, closeModal } = useModal();
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: homeBanner, loading: homeBannerLoading } = useFetchData("services", language);

  // Беремо перший банер, який відповідає поточній мові
  const bannerData = Array.isArray(homeBanner)
    ? homeBanner.find(item => item.locale === language)
    : null;

  return (
    <Layout useCustomHeader={true} footerStyle={'customFooter'}>
      <Banner/>
      <GoodsAnimation />
      <Services />
      <Projects />
      <WhyWe />
      <Games />
      <Process />
      <Prices />
      <ContactUs />

      <ModalManager
        isOpen={isOpen}
        modalType={modalType}
        modalData={modalData}
        onClose={closeModal}
      />
    </Layout>
  );
}
