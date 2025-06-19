'use client';
import React from 'react';
import HeaderLayout from '@/components/layout/header/Layout';
import { ModalProvider } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/elements/PageBanner';
import ContactUs from '@/components/sections/customHome/ContactUs';
import ModalManager from '@/components/elements/ModalManager';
import { useModal } from '@/components/customHooks/useModal';
import { BlogTitle } from '@/components/blog/BlogTitle';
import BlogChangeOption from '@/components/blog/BlogChangeOption';
import Indicators from '@/components/blog/Indicators';
import BlogCardLinks from '@/components/blog/CardLinks';
import DevelopmentDelivers from '@/components/blog/DevelopmentDelivers';
import TextInfo from '@/components/elements/TextInfo';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';
import InfoWithCircle from '@/components/blog/InfoWithCircle';

export default function AboutUs() {
  return (
    <ModalProvider>
      <AboutUsContent />
    </ModalProvider>
  );
}

function AboutUsContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: options, loading: optionsLoading } = useFetchData('our-mission', language);
  const { data: indicators, loading: indicatorsLoading } = useFetchData('indicators', language);
  const { data: webs, loading: websLoading } = useFetchData('development-delivers', language);
  const { data: textPage, loading: textPageLoading } = useFetchData('about-page-text', language, true);
  const { data: ourCultureItems, loading: ourCultureItemsLoading } = useFetchData('our-culture', language, true);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: sectionTitles, loading: sectionTitlesLoading} = useFetchData("section-titles", language, true);
  

  const isLoading =
    optionsLoading || 
    indicatorsLoading || 
    websLoading || 
    textPageLoading || 
    ourCultureItemsLoading || 
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
        <div className='about-us'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            <PageBanner
              SolutionsBannerTitle={bannersData['about-title']}
              SolutionsBannerDescr={bannersData['about-descr']}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            />
            <BlogCardLinks
              teaser={sectionTitles["who-we-are-teaser"]}
              title={sectionTitles["who-we-are-title"]}
              subtitle={sectionTitles["who-we-are-subtitle"]}
            />
            <TextInfo
              title={textPage['text-info-title']}
              descr={textPage['text-info-subtitle']}
              textOnBg={textPage['text-info-text']}
            />
            <section className='our-culture'>
              <div className='container'>
                <BlogTitle
                  teaser={sectionTitles["our-culture-teaser"]}
                  title={sectionTitles["our-culture-title"]}
                  subtitle={sectionTitles["our-culture-subtitle"]}
                />
                <InfoWithCircle 
                  items={ourCultureItems}
                />
              </div>
            </section>
            <section className='our-mission'>
              <div className='container'>
                <BlogTitle
                  teaser={sectionTitles["our-mission-teaser"]}
                  title={sectionTitles["our-mission-title"]}
                  subtitle={sectionTitles["our-mission-subtitle"]}
                />
                <BlogChangeOption data={options} />
              </div>
            </section>
            <Indicators 
              teaser={sectionTitles["our-numbers-teaser"]}
              title={sectionTitles["our-numbers-title"]}
              data={indicators} 
            />
            <section className='development-delivers'>
              <div className='container'>
                <BlogTitle
                  teaser={sectionTitles["development-that-delivers-teaser"]}
                  title={sectionTitles["development-that-delivers-title"]}
                  subtitle={sectionTitles["development-that-delivers-subtitle"]}
                />
                <DevelopmentDelivers
                  data={webs}
                  btnText={btnsText["go-to-website"]}
                />
              </div>
            </section>
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
