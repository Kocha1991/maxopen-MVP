'use client';
import React, { useState } from 'react';
import { ModalProvider } from '@/components/customHooks/useModal';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import Filter from '@/components/elements/Filter';
import ContactUs from '@/components/sections/customHome/ContactUs';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';
import PortfolioCard from '@/components/elements/PortfolioCard';


export default function Portfolio() {
  return (
    <ModalProvider>
      <PortfolioContent />
    </ModalProvider>
  );
}

function PortfolioContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [showAllProjects, setShowAllProjects] = useState(false);

  const { data: projects, loading: projectsLoading } = useFetchData('projects-card', language);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: projectsCard, loading: projectsCardLoading } = useFetchData("portfolio-card", language);
  const { data: portfolioSlide, loading: portfolioSlideLoading} = useFetchData("portfolio-slider", language);
  
  

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);
  const isLoading = projectsLoading || btnsTextLoading || bannersDataLoading || projectsCardLoading || portfolioSlideLoading;

  return (
    <>
      {isLoading ? (
        <div className='page-loading'>
          <Loading /> 
        </div>
      ) : (
        <div className='portfolio'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            {/* <PageBanner
              SolutionsBannerTitle={bannersData['portfolio-title']}
              SolutionsBannerDescr={bannersData['portfolio-descr']}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            /> */}
            <div className='blog-maxOpen__wrapper'>
              <h2 className='blog-title mb-20'>{t('Ourportfolio')}</h2>
              {/* <Filter /> */}
              {portfolioSlide?.map((item, index) => (
                <PortfolioCard key={item.id || index} item={item} btnsText={btnsText}/>
              ))}
            </div>
            {/* <ContactUs /> */}
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
