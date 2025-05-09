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
import { ProjectCard } from '@/components/elements/ProjectCard';

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

  const { data: projects, loading: projectsLoading } = useFetchData(
    'projects-card',
    language
  );
  const { data: projectsText, loading: projectsTextLoading } = useFetchData(
    'projects-text',
    language,
    true
  );

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);
  const isLoading = projectsLoading || projectsTextLoading;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='portfolio'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            <PageBanner
              SolutionsBannerTitle={projectsText['banner-title']}
              SolutionsBannerDescr={projectsText['banner-text']}
              textBnt={projectsText['banner-btn-text']}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className='blog-maxOpen__wrapper'>
                <h2 className='blog-title mb-20'>{t('Ourportfolio')}</h2>
                {/* <Filter /> */}
                <div className='row mt-65'>
                  {Array.isArray(projects) && projects.length > 0 ? (
                    visibleProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        img={project['image-of-project'].thumb}
                        title={project['name-of-project']}
                        descr={project['short-description']}
                        link={project['link-to-project']}
                      />
                    ))
                  ) : (
                    <p className='no-data text-lg neutral-500'>
                      {t('notification.noDataAvailable')}
                    </p>
                  )}
                </div>
                {projects.length > 6 && (
                  <button
                    className='btn btn-brand-4-medium hover-up mt-4'
                    onClick={toggleProjectsView}
                  >
                    <span>
                      {showAllProjects
                        ? t('buttons.ShowLess')
                        : t('buttons.LoadMore')}
                    </span>
                  </button>
                )}
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
