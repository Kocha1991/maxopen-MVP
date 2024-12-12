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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState('');

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

  const openModal = (video) => {
    setModalVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideo('');
  };

  return (
    <Layout useCustomHeader={true} footerStyle={'customFooter'} logoWhite>
      <Banner />
      <GoodsAnimation />
      <Services />
      <Projects />
      <WhyWe />
      <Games openModal={openModal} />
      <Process />
      <Prices />
      <ContactUs />
      
      {/* modal-games */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-content__close" onClick={closeModal}>
              <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
            </button>
            <video
              className="modal-video"
              src={modalVideo}
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </Layout>
  );
}
