'use client';
import React from 'react';
import HeaderLayout from '@/components/layout/header/Layout';
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
import Loading from '@/components/elements/Loading';

export default function Page() {
  return <HomeContent />;
}

function HomeContent() {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { isOpen, modalType, modalData, closeModal, openModal } = useModal();

  const { data: banner, loading: bannerLoading } = useFetchData("home-banner", language, true);
  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  const { data: servicesCard, loading: servicesCardLoading } = useFetchData("services-card", language);
  const { data: servicesText, loading: servicesTextLoading } = useFetchData("services-text", language, true);
  const { data: projectsCard, loading: projectsCardLoading } = useFetchData("projects-card", language);
  const { data: projectsText, loading: projectsTextLoading } = useFetchData("projects-text", language, true);
  const { data: itemsWhyWe, loading: itemsWhyWeLoading } = useFetchData("why-we-items", language);
  const { data: textWhyWe, loading: textWhyWeLoading } = useFetchData("why-we-text", language, true);
  const { data: videos, loading: videosLoading } = useFetchData("video-games");
  const { data: textVideo, loading: textVideoLoading } = useFetchData("games-title", language, true);
  const { data: processItems, loading: processItemsLoading } = useFetchData("process-items", language);
  const { data: processText, loading: processTextLoading } = useFetchData("process-text", language, true);
  const { data: formText, loading: formTextLoading } = useFetchData("form-2", language, true);
  const { data: pricesData, loading: pricesLoading } = useFetchData("price-of-services", language);
  const { data: pricesText, loading: pricesTextLoading } = useFetchData("prices-text", language, true);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("btns-text", language, true);


  const isLoading = 
    bannerLoading || 
    logosLoading || 
    servicesCardLoading || 
    servicesTextLoading || 
    projectsCardLoading || 
    projectsTextLoading ||
    itemsWhyWeLoading ||
    textWhyWeLoading ||
    videosLoading ||
    textVideoLoading ||
    processItemsLoading ||
    processTextLoading ||
    formTextLoading ||
    pricesLoading ||
    pricesTextLoading ||
    btnsTextLoading;
  
  return (
    <>
      {isLoading ? (
        <div className='page-loading'>
          <Loading /> 
        </div>
      ) : (
        <HeaderLayout useCustomHeader={true} footerStyle={'customFooter'}>
          <Banner banner={banner} btnText={btnsText["book-meeting"]}/>
          <GoodsAnimation data={logos}/>
          <Services 
            text={servicesText}
            items={servicesCard}
            btnText={btnsText["learn-more"]}
          />
          <Projects 
            text={projectsText}
            items={projectsCard}
            btnsText={btnsText}
          />
          <WhyWe 
            text={textWhyWe}
            items={itemsWhyWe}
          />
          <Games 
            text={textVideo}
            items={videos}
          />
          <Process 
            formText={formText}
            items={processItems}
            text={processText}
            btnsText={btnsText}
          />
          <Prices 
            items={pricesData}
            text={pricesText}
            btnsText={btnsText}
          />
          <ContactUs />
    
          <ModalManager
            isOpen={isOpen}
            modalType={modalType}
            modalData={modalData}
            onClose={closeModal}
          />
        </HeaderLayout>
      )}
    </>
  );
}
