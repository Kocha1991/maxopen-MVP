'use client';
import React from "react";
import Layout from '@/components/layout/Layout';
import { ModalProvider } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/elements/PageBanner';
import ContactUs from '@/components/sections/customHome/ContactUs';
import ModalManager from '@/components/elements/ModalManager';
import { useModal } from '@/components/customHooks/useModal';
import { BlogTitle } from '@/components/blog/BlogTitle';
import BlogChangeOption from '@/components/blog/BlogChangeOption';
import Indicators from '@/components/blog/Indicators';
import BlogCardLinks from '@/components/blog/BlogCardLinks';
import DevelopmentDelivers from '@/components/blog/DevelopmentDelivers';

export default function AboutUs() {
  return (
    <ModalProvider>
      <AboutUsContent />
    </ModalProvider>
  );
};

function AboutUsContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  
  return (
    <div className='about-us'>
      <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
        <PageBanner 
          SolutionsBannerTitle={t("AboutUsTitle")}
          SolutionsBannerDescr={t("AboutUsSubtitle")}
          textBnt={t("buttons.BookMeeting")}
          onOpenModal={openModal}
        />
        <BlogCardLinks />
        <section className='about-us__reality'>
          <div className="container">
            <h2 className='maxOpen-services__title'>
              {t("RealityTitle")}
            </h2>
            <h3 className='maxOpen-services__descr'>
              {t("RealityDescr")}
            </h3>
            <div className='about-us__reality_text'>
              {t("RealityText")}
            </div>
          </div>
        </section>
        <section className='our-culture'>
          <div className="container">
            <BlogTitle
              textOnBg={t("OurCultureTextOnBg")} 
              title={t("OurCultureTitle")} 
              descr={t("OurCultureDescr")} 
            />
            <div className="our-culture__grid">
              <div className='our-culture__circle'>
                <h3 className='maxOpen-services__title'>{t("Our Culture")}</h3>
                <h4 className='maxOpen-services__descr'>{t("OurCultureCircleText")}</h4>
              </div>
              <div  className='our-culture__bloc bloc-1'>
                <h3 className='maxOpen__subtitle'>{t("OurCultureBloc1Title")}</h3>
                <h4 className='maxOpen-services__descr'>
                  {t("OurCultureBloc1Descr")}
                </h4>
              </div>
              <div  className='our-culture__bloc bloc-2'>
                <h3 className='maxOpen__subtitle'>{t("OurCultureBloc2Title")}</h3>
                <h4 className='maxOpen-services__descr'>
                  {t("OurCultureBloc2Descr")}
                </h4>
              </div>
              <div  className='our-culture__bloc bloc-3'>
                <h3 className='maxOpen__subtitle'>{t("OurCultureBloc3Title")}</h3>
                <h4 className='maxOpen-services__descr'>
                  {t("OurCultureBloc3Descr")}
                </h4>
              </div>
              <div  className='our-culture__bloc bloc-4'>
                <h3 className='maxOpen__subtitle'>{t("OurCultureBloc4Title")}</h3>
                <h4 className='maxOpen-services__descr'>
                  {t("OurCultureBloc4Descr")}
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className='our-mission'>
          <div className="container">
            <BlogTitle
              textOnBg={t("OurMissionTextOnBg")}
              title={t("OurMissionTitle")}
              descr={t("TextOnBgDescr")}
            />
            <BlogChangeOption />
          </div>
        </section>
        <Indicators />
        <section className='development-delivers'>
          <div className="container">
            <BlogTitle
              textOnBg={t("OurMissionTextOnBg")}
              title={t("OurMissionTitle")}
              descr={t("TextOnBgDescr")}
            />
            <DevelopmentDelivers />
          </div>
        </section>
        <ContactUs />
      </Layout>
      <ModalManager 
        isOpen={isOpen} 
        modalType={modalType} 
        modalData={modalData} 
        onClose={closeModal} 
      />
    </div>
  );
}

