"use client";
import React from "react";
import { ModalProvider } from '@/components/customHooks/useModal';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import ContactUs from '@/components/sections/customHome/ContactUs';
import BlogCardLinks from '@/components/blog/BlogCardLinks';
import TextInfo from '@/components/elements/TextInfo';
import KeyBenefits from '@/components/sections/service-page/KeyBenefits';
import ChatbotSlider from '@/components/slider/ChatbotSlider';
import { BlogTitle } from '@/components/blog/BlogTitle';
import ItemsTicker from '@/components/elements/ItemsTicker';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Efficiency from '@/components/sections/service-page/Efficiency';
import Faq from '@/components/sections/service-page/Faq';

export default function Service() {
  return (
    <ModalProvider>
      <ServiceContent />
    </ModalProvider>
  );
};

function ServiceContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: services, loading: loadingServices, error: errorServices } = useFetchData("animation-services", language);
  const { data: networks, loading: loadingNetworks, error: errorNetworks } = useFetchData("social-networks", language);


  if (loadingServices || loadingNetworks) return <Loading />;
  if (errorServices || errorNetworks) return <div>{errorServices || errorNetworks}</div>;

  return (
    <div className='service'>
      <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
        <PageBanner 
          SolutionsBannerTitle={t("ServicesBannerTitle")}
          SolutionsBannerDescr={t("ServicesBannerDescr")}
          textBnt={t("buttons.BookMeeting")}
          onOpenModal={openModal}
        />
        <GoodsAnimation 
          text={t("ServicesAnimationText")}
        />
        <BlogCardLinks />
        <TextInfo 
          title={t("ServiceTextInfoTitle")}
          descr={t("ServiceTextInfoDescr")}
        />
        <KeyBenefits />
        <ChatbotSlider />
        <div className='who-needs'>
          <BlogTitle 
            textOnBg={t("WhoNeedsTextOnBg")}
            title={t("WhoNeedsTitle")}
            textColor="wight-text"
          />
          <ItemsTicker 
            items={services}
          /> 
        </div>
        <Efficiency />
        <div className='container'>
          <BlogTitle 
            textOnBg={t("PlatformsChatbotTextOnBg")}
            title={t("PlatformsChatbotTitle")}
            descr={t("PlatformsChatbotDescr")}
          />
        </div>
        <ItemsTicker 
          items={networks}
        /> 
        <Faq 
          onOpenModal={openModal}
        />
        <ContactUs />
      </Layout>
      <ModalManager 
        isOpen={isOpen} 
        modalType={modalType} 
        modalData={modalData} 
        onClose={closeModal} 
      />
    </div>
  )
};
