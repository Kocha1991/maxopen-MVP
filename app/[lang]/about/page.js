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
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: options, loading: optionsLoading } = useFetchData('our-mission', language);
  const { data: indicators, loading: indicatorsLoading } = useFetchData('indicators', language);
  const { data: categories, loading: categoriesLoading } = useFetchData('development-delivers', language);
  const { data: textPage, loading: textPageLoading } = useFetchData('about-us-page-text', language, true);
  const { data: ourCultureItems, loading: ourCultureItemsLoading } = useFetchData('our-culture', language, true);

  const isLoading =
    optionsLoading || indicatorsLoading || categoriesLoading || textPageLoading || ourCultureItemsLoading;

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
              SolutionsBannerTitle={textPage['banner-title']}
              SolutionsBannerDescr={textPage['banner-descr']}
              textBnt={textPage['btn-text']}
              onOpenModal={openModal}
            />
            <BlogCardLinks
              textOnBg={textPage['who-we-teaser']}
              title={textPage['who-we-title']}
              descr={textPage['who-we-descr']}
            />
            <TextInfo
              title={textPage['info-title']}
              descr={textPage['info-descr']}
              textOnBg={textPage['info-text']}
            />
            <section className='our-culture'>
              <div className='container'>
                <BlogTitle
                  textOnBg={textPage['our-culture-teaser']}
                  title={textPage['our-culture-title']}
                  descr={textPage['our-culture-descr']}
                />
                <InfoWithCircle 
                  items={ourCultureItems}
                />
              </div>
            </section>
            <section className='our-mission'>
              <div className='container'>
                <BlogTitle
                  textOnBg={textPage['our-mission-teaser']}
                  title={textPage['our-mission-title']}
                  descr={textPage['our-mission-descr']}
                />
                <BlogChangeOption data={options} />
              </div>
            </section>
            <Indicators 
              teaser={textPage['achievements-teaser']}
              title={textPage['achievements-title']}
              data={indicators} 
            />
            <section className='development-delivers'>
              <div className='container'>
                <BlogTitle
                  textOnBg={t('DevelopmentDeliversTextOnBg')}
                  title={t('DevelopmentDeliversTitle')}
                  descr={t('DevelopmentDeliversSubtitle')}
                />
                <DevelopmentDelivers
                  data={categories}
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
