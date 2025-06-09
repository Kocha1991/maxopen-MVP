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
import { ServicesCard } from '@/components/elements/ServicesCard';

export default function Services() {
  return (
    <ModalProvider>
      <ServicesContent />
    </ModalProvider>
  );
}
function ServicesContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: services, loading: servicesLoading } = useFetchData('services-card', language);
  const { data: text, loading: textLoading } = useFetchData('services-page-text', language, true);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("btns-text", language, true);
  
  const loading = servicesLoading || textLoading || btnsTextLoading;

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
              SolutionsBannerTitle={text.title}
              SolutionsBannerDescr={text.descr}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className='blog-maxOpen__wrapper'>
                <h2 className='blog-title mb-20'>{text.teaser}</h2>
                <div className='row'>
                  {services.map((service, index) => {
                    const isFullWidth =
                      (index + 1) % 3 !== 0 && index === services.length - 1;

                    return (
                      <ServicesCard
                        key={service.id}
                        icon={service.icon}
                        iconHover={service['icon-black']}
                        title={service.title}
                        descr={service.descr}
                        btnText={btnsText["learn-more"]}
                        isFullWidth={isFullWidth}
                        link={service.slug ? `/services/${service.slug}` : null}
                      />
                    );
                  })}
                </div>
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
