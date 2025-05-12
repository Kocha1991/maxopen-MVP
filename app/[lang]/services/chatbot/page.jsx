'use client';
import React from 'react';
import { ModalProvider } from '@/components/customHooks/useModal';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import ContactUs from '@/components/sections/customHome/ContactUs';
import CardLinks from '@/components/blog/CardLinks';
import TextInfo from '@/components/elements/TextInfo';
import KeyBenefits from '@/components/sections/service-page/KeyBenefits';
import ChatbotSlider from '@/components/slider/ChatbotSlider';
import { BlogTitle } from '@/components/blog/BlogTitle';
import ItemsTicker from '@/components/elements/ItemsTicker';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Efficiency from '@/components/sections/service-page/Efficiency';
import Faq from '@/components/sections/service-page/Faq';

export default function Chatbot() {
  return (
    <ModalProvider>
      <ServiceContent />
    </ModalProvider>
  );
}

function ServiceContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: services, loading: loadingServices } = useFetchData('animation-services', language);
  const { data: networks, loading: loadingNetworks } = useFetchData('social-networks');
  const { data: benefitsItems, loading: benefitsItemsLoading } = useFetchData('chatbot-key-benefits', language);
  const { data: cards, loading: cardsLoading } = useFetchData('chatbot-tasks-card', language);
  const { data: textPage, loading: textPageLoading } = useFetchData('chatbot-page-text', language, true);
  const { data: info, loading: infoLoading } = useFetchData('efficiency-chatbot', language);
  const { data: questions, loading: questionsLoading } = useFetchData('faq-question', language);
  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  

  const isLoading =
    loadingServices ||
    loadingNetworks ||
    benefitsItemsLoading ||
    cardsLoading ||
    textPageLoading ||
    infoLoading ||
    questionsLoading ||
    logosLoading;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='service'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            <PageBanner
              SolutionsBannerTitle={textPage['banner-title']}
              SolutionsBannerDescr={textPage['banner-text']}
              textBnt={textPage['banner-btn']}
              onOpenModal={openModal}
            />
            <GoodsAnimation
              text={textPage['text-technologies-animation']}
              data={logos}
              isLoading={logosLoading}
            />
            <CardLinks
              textOnBg={t('ChatbotSolutionsTextOnBg')}
              title={t('ChatbotSolutionsTitle')}
              descr={t('ChatbotSolutionsDescr')}
            />
            <TextInfo
              title={textPage['blok-info-title']}
              descr={textPage['blok-info-text']}
            />
            <KeyBenefits
              teaser={textPage['key-benefits-teaser']}
              title={textPage['key-benefits-title']}
              data={benefitsItems}
              isLoading={benefitsItemsLoading}
            />
            <ChatbotSlider
              data={cards}
              title={textPage['slider-title']}
              teaser={textPage['slider-teaser']}
            />
            <div className='who-needs'>
              <BlogTitle
                textOnBg={textPage['who-need-teser']}
                title={textPage['who-need-title']}
                textColor='wight-text'
              />
              <ItemsTicker items={services} />
            </div>
            <Efficiency
              teaser={textPage['teaser-info']}
              title={textPage['title-info']}
              descr={textPage['descr-info']}
              data={info}
            />
            <div className='container'>
              <BlogTitle
                textOnBg={textPage['platform-teaser']}
                title={textPage['platform-title']}
                descr={textPage['platform-descr']}
              />
            </div>
            <ItemsTicker items={networks} />
            <Faq
              onOpenModal={openModal}
              teaser={textPage['faq-teaser']}
              title={textPage['faq-title']}
              leftBlockTitle={textPage['faq-left-title']}
              leftBlockDescr={textPage['faq-left-descr']}
              textBtn={textPage['faq-btn']}
              questions={questions}
            />
            <ContactUs />
          </HeaderLayout>
          <ModalManager
            isOpen={isOpen}
            modalType={modalType}
            modalData={modalData}
            onClose={closeModal}
          />
        </div>
      )}
    </>
  );
}
