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
  const { data: projectsCard, loading: projectsCardLoading } = useFetchData("portfolio-card", language);
  const { data: itemsWhyWe, loading: itemsWhyWeLoading } = useFetchData("why-we-items", language);
  const { data: videos, loading: videosLoading } = useFetchData("video-games");
  const { data: processItems, loading: processItemsLoading } = useFetchData("process-items", language);
  const { data: formText, loading: formTextLoading } = useFetchData("form-1", language, true);
  const { data: pricesData, loading: pricesLoading } = useFetchData("price-of-services", language);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: sectionTitles, loading: sectionTitlesLoading} = useFetchData("section-titles", language, true);


  const isLoading = 
    bannerLoading || 
    logosLoading || 
    servicesCardLoading || 
    projectsCardLoading || 
    itemsWhyWeLoading ||
    videosLoading ||
    processItemsLoading ||
    formTextLoading ||
    pricesLoading ||
    btnsTextLoading ||
    bannersDataLoading ||
    sectionTitlesLoading;

  return (
    <>
      {isLoading ? (
        <div className='page-loading'>
          <Loading /> 
        </div>
      ) : (
        <HeaderLayout useCustomHeader={true} footerStyle={'customFooter'}>
          <Banner banner={banner} btnText={btnsText["book-meeting"]} bannersData={bannersData}/>
          <GoodsAnimation data={logos}/>
          <Services 
            teaser={sectionTitles["services-teaser"]}
            title={sectionTitles["services-title"]}
            subtitle={sectionTitles["services-subtitle"]}
            items={servicesCard}
            btnText={btnsText["learn-more"]}
          />
          <Projects 
            teaser={sectionTitles["portfolio-teaser"]}
            title={sectionTitles["portfolio-title"]}
            subtitle={sectionTitles["portfolio-descr"]}
            items={projectsCard}
            btnsText={btnsText}
          />
          <WhyWe 
            teaser={sectionTitles["why-we-teaser"]}
            title={sectionTitles["why-we-title"]}
            subtitle={sectionTitles["why-we-subtitle"]}
            items={itemsWhyWe}
          />
          <Games 
            title={sectionTitles["games-title"]}
            items={videos}
          />
          <Process
            teaser={sectionTitles["how-works-teaser"]}
            title={sectionTitles["how-works-title"]}
            subtitle={sectionTitles["how-works-subtitle"]}
            formText={formText}
            items={processItems}
            btnsText={btnsText}
          />
          <Prices 
            items={pricesData}
            teaser={sectionTitles["solutions-teaser"]}
            title={sectionTitles["solutions-title"]}
            subtitle={sectionTitles["solutions-subtitle"]}
            btnsText={btnsText["lets-discuss"]}
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
