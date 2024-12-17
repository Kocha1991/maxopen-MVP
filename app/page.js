'use client';
import React from 'react';
import Layout from "@/components/layout/Layout";
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
import { ModalProvider, useModal } from '@/components/customHooks/useModal';

export default function Home() {
  return (
    <ModalProvider>
      <HomeContent />
    </ModalProvider>
  );
}

// Окремий компонент HomeContent для логіки модалок
function HomeContent() {
  const { isOpen, modalType, modalData, closeModal } = useModal();

  return (
    <Layout useCustomHeader={true} footerStyle={'customFooter'}>
      <Banner />
      <GoodsAnimation />
      <Services />
      <Projects />
      <WhyWe />
      <Games />
      <Process />
      <Prices />
      <ContactUs />

      {/* ModalManager для відображення модалок */}
      <ModalManager 
        isOpen={isOpen} 
        modalType={modalType} 
        modalData={modalData} 
        onClose={closeModal} 
      />
    </Layout>
  );
}
