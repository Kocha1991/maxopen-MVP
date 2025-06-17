'use client';
import React from 'react';
import { ModalProvider } from '@/components/customHooks/useModal';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { Services } from '@/components/sections/customHome/Services';

export default function ServicesPage() {
  return (
    <ModalProvider>
      <ServicesContent />
    </ModalProvider>
  );
}
function ServicesContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: servicesCard, loading: servicesCardLoading } = useFetchData("services-card", language);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: sectionTitles, loading: sectionTitlesLoading} = useFetchData("section-titles", language, true);
  
  const loading = btnsTextLoading || servicesCardLoading || bannersDataLoading || sectionTitlesLoading;

  return (
    <div className='services'>
      <HeaderLayout useCustomHeader={true} footerStyle='customFooter' logoWhite>
        {loading ? (
          <div className='page-loading'>
            <Loading /> 
          </div>
        ) : (
          <>
            <PageBanner
              SolutionsBannerTitle={bannersData["services-title"]}
              SolutionsBannerDescr={bannersData["services-descr"]}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className='blog-maxOpen__wrapper'>
                <h2 className='blog-title mb-25'>{sectionTitles["our-service"]}</h2>
                <Services 
                  items={servicesCard}
                  btnText={btnsText["learn-more"]}
                />
              </div>
            </div>
          </>
        )}
      </HeaderLayout>
      <ModalManager
        isOpen={isOpen}
        modalType={modalType}
        modalData={modalData}
        onClose={closeModal}
      />
    </div>
  );
}
