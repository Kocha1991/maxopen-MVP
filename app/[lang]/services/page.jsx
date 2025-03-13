"use client";
import React from "react";
import { ModalProvider } from '@/components/customHooks/useModal';
import Layout from '@/components/layout/Layout';
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
};
function ServicesContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: services, loading: servicesLoading } = useFetchData("services", language);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='services'>
          <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
            <PageBanner 
              SolutionsBannerTitle={t("OurservicesBannerTitle")}
              SolutionsBannerDescr={t("OurservicesBannerDescr")}
              textBnt={t("buttons.BookMeeting")}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className="blog-maxOpen__wrapper">
                <h2 className='blog-title mb-20'>{t("Ourservices")}</h2>
                <div className="row">
                  {services.map((service, index) => {
                    const isFullWidth = (index + 1) % 3 !== 0 && index === services.length - 1;
        
                    return (
                      <ServicesCard
                        key={service.id}
                        icon={service.icon}
                        iconHover={service["icon-black"]}
                        title={service.title}
                        descr={service.description}
                        btnText={t("buttons.Learn more")}
                        isFullWidth={isFullWidth}
                        link="/services/service"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Layout>
          <ModalManager 
            isOpen={isOpen} 
            modalType={modalType} 
            modalData={modalData} 
            onClose={closeModal} 
          />
        </div>
      )}
    </>
  )
};

