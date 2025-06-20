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
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: services, loading: loadingServices } = useFetchData('animation-services', language);
  const { data: networks, loading: loadingNetworks } = useFetchData('social-networks');
  const { data: benefitsItems, loading: benefitsItemsLoading } = useFetchData('chatbot-key-benefits', language);
  const { data: cards, loading: cardsLoading } = useFetchData('chatbot-tasks-card', language);
  const { data: textPage, loading: textPageLoading } = useFetchData('chatbot-info', language, true);
  const { data: info, loading: infoLoading } = useFetchData('efficiency-chatbot', language);
  const { data: questions, loading: questionsLoading } = useFetchData('faq-question', language);
  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: sectionTitles, loading: sectionTitlesLoading} = useFetchData("section-titles", language, true);
  const { data: chatbotInfo, loading: chatbotInfoLoading } = useFetchData('chatbot-info', language, true);

  
  const isLoading =
    loadingServices ||
    loadingNetworks ||
    benefitsItemsLoading ||
    cardsLoading ||
    textPageLoading ||
    infoLoading ||
    questionsLoading ||
    logosLoading ||
    btnsTextLoading ||
    bannersDataLoading ||
    sectionTitlesLoading ||
    chatbotInfoLoading;

  return (
    <>
      {isLoading ? (
        <div className='page-loading'>
          <Loading />
        </div>
      ) : (
        <div className='service'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            <PageBanner
              SolutionsBannerTitle={bannersData["services-title"]}
              SolutionsBannerDescr={bannersData["services-descr"]}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            />
            <GoodsAnimation
              text={textPage["logos-animation-text"]}
              data={logos}
              isLoading={logosLoading}
            />
            <CardLinks
              teaser={sectionTitles["chatbot-solutions-teaser"]}
              title={sectionTitles["chatbot-solutions-title"]}
              subtitle={sectionTitles["chatbot-solutions-subtitle"]}
            />
            <TextInfo
              title={chatbotInfo["chatbot-info-title"]}
              descr={chatbotInfo["chatbot-info-descr"]}
            />
            <div className='key-benefits'>
              <div className='container'>
                <BlogTitle 
                  teaser={sectionTitles["key-benefits-teaser"]}
                  title={sectionTitles["key-benefits-title"]}
                />
                <KeyBenefits
                  data={benefitsItems}
                />
              </div>
            </div>
            <ChatbotSlider
              data={cards}
              teaser={sectionTitles["chatbot-tasks-teaser"]}
              title={sectionTitles["chatbot-tasks-title"]}
            />
            <div className='who-needs'>
              <BlogTitle
                teaser={sectionTitles["chatbot-who-teaser"]}
                title={sectionTitles["chatbot-who-title"]}
                textColor='wight-text'
              />
              <ItemsTicker items={services} />
            </div>
            <Efficiency
              teaser={sectionTitles["chatbot-efficiency-teaser"]}
              title={sectionTitles["chatbot-efficiency-title"]}
              subtitle={sectionTitles["chatbot-efficiency-subtitle"]}
              data={info}
            />
            <div className='container'>
              <BlogTitle
                teaser={sectionTitles["chatbot-platforms-teaser"]}
                title={sectionTitles["chatbot-platforms-title"]}
                subtitle={sectionTitles["chatbot-platforms-subtitle"]}
              />
            </div>
            <ItemsTicker items={networks} />
            <div className='faq'>
              <div className="container">
                <BlogTitle
                  teaser={sectionTitles["chatbot-faq-teaser"]}
                  title={sectionTitles["chatbot-faq-title"]}
                  textColor="wight-text"
                />
                <Faq
                  onOpenModal={openModal}
                  leftBlockTitle={textPage['faq-left-title']}
                  leftBlockDescr={textPage['faq-left-descr']}
                  textBtn={btnsText["book-meeting"]}
                  questions={questions}
                />
              </div>
            </div>
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
