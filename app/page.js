'use client';
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Banner from '@/components/sections/customHome/Banner';
import { Services } from '@/components/sections/customHome/Services';
import { Projects } from '@/components/sections/customHome/Projects';
import WhyWe from '@/components/sections/customHome/WhyWe';
import Process from '@/components/sections/customHome/Process';
import ContactUs from '@/components/sections/customHome/ContactUs';
import Prices from '@/components/sections/customHome/Prices';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import { Games } from '@/components/sections/customHome/Games';
import ModalCalendar from '@/components/elements/ModalCalendar';
import ModalGames from '@/components/elements/ModalGames'; // Імпортуємо ModalGames

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalGames, setmodalGames] = useState(''); // Додано для відео

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isModalOpen]);

  // Функція для відкриття модалки
  const openModal = (type, videoSrc = '') => {
    setModalType(type); // Встановлюємо тип модалки (game або calendar)
    setmodalGames(videoSrc); // Встановлюємо відео
    setIsModalOpen(true); // Відкриваємо модалку
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закриваємо модалку
    setModalType(''); // Скидаємо тип модалки
    setmodalGames(''); // Скидаємо відео
  };

  return (
    <Layout useCustomHeader={true} footerStyle={'customFooter'}>
      <Banner openModal={openModal} />
      <GoodsAnimation />
      <Services />
      <Projects />
      <WhyWe />
      <Games openModal={openModal} />
      <Process />
      <Prices />
      <ContactUs />
      
      {/* modals */}
      {modalType === 'calendar' && (
        <ModalCalendar isOpen={isModalOpen} onClose={closeModal} />
      )}
      {modalType === 'game' && (
        <ModalGames isOpen={isModalOpen} onClose={closeModal} videoSrc={modalGames} />
      )}
    </Layout>
  );
}
