'use client';
import React from 'react';
import HeaderLayout from '@/components/layout/header/Layout';
import Banner from '@/components/sections/customHome/Banner';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import { Services } from '@/components/sections/customHome/Services';
import { Projects } from '@/components/sections/customHome/Projects';
import { Games } from '@/components/sections/customHome/Games';
import Prices from '@/components/sections/customHome/Prices';
import ContactUs from '@/components/sections/customHome/ContactUs';
import WhyWe from '@/components/sections/customHome/WhyWe';
import Process from '@/components/sections/customHome/Process';
import ModalManager from '@/components/elements/ModalManager';
import { useModal } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { BlogTitle } from '@/components/blog/BlogTitle';
import Loading from '@/components/elements/Loading';
import PortfolioSlider from '@/components/slider/PortfolioSlider';

export default function Page() {
  return <HomeContent />;
}

function HomeContent() {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { isOpen, modalType, modalData, closeModal, openModal } = useModal();

  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  const { data: servicesCard, loading: servicesCardLoading } = useFetchData("services-card", language);
  const { data: projectsCard, loading: projectsCardLoading } = useFetchData("portfolio-card", language);
  const { data: itemsWhyWe, loading: itemsWhyWeLoading } = useFetchData("why-we-items", language);
  const { data: videos, loading: videosLoading } = useFetchData("video-games");
  const { data: processItems, loading: processItemsLoading } = useFetchData("process-items", language);
  const { data: formText, loading: formTextLoading } = useFetchData("form-1", language, true);
  const { data: pricesData, loading: pricesLoading } = useFetchData("price-of-services", language);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("buttons-text", language, true);
  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: sectionTitles, loading: sectionTitlesLoading} = useFetchData("section-titles", language, true);
  const { data: portfolioSlide, loading: portfolioSlideLoading} = useFetchData("portfolio-slider", language);


  const isLoading =
    logosLoading ||
    servicesCardLoading ||
    projectsCardLoading ||
    itemsWhyWeLoading ||
    videosLoading ||
    processItemsLoading ||
    formTextLoading ||
    pricesLoading ||
    btnsTextLoading ||
    bannersDataLoading ||
    sectionTitlesLoading ||
    portfolioSlideLoading;

  return (
    <>
      {isLoading ? (
        <div className='page-loading'>
          <Loading /> 
        </div>
      ) : (
        <HeaderLayout useCustomHeader={true} footerStyle={'customFooter'}>
          <Banner btnText={btnsText["book-meeting"]} bannersData={bannersData}/>
          <GoodsAnimation data={logos}/>
          <section className="maxOpen-services ptb-50" id="services">
            <div className="container">
              <BlogTitle
                teaser={sectionTitles["services-teaser"]}
                title={sectionTitles["services-title"]}
                subtitle={sectionTitles["services-subtitle"]}
              />
              <Services 
                items={servicesCard}
                btnText={btnsText["learn-more"]}
              />
            </div>
          </section>
          <section className="maxOpen-projects" id="projects">
            <PortfolioSlider 
              items={portfolioSlide}
              btnsText={btnsText}
            />
          </section>
          <WhyWe 
            teaser={sectionTitles["why-we-teaser"]}
            title={sectionTitles["why-we-title"]}
            subtitle={sectionTitles["why-we-subtitle"]}
            items={itemsWhyWe}
          />
          <Games 
            title={sectionTitles["games-title"]}
            items={videos}
          />
          <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
            <div className="container">
              <BlogTitle 
                teaser={sectionTitles["how-works-teaser"]}
                title={sectionTitles["how-works-title"]}
                subtitle={sectionTitles["how-works-subtitle"]}
              />
              <Process
                formText={formText}
                items={processItems}
                btnsText={btnsText}
              />
            </div>
          </section>
          <section className="maxOpen__prices">
              <div className="container">
                <BlogTitle
                  teaser={sectionTitles["solutions-teaser"]}
                  title={sectionTitles["solutions-title"]}
                  subtitle={sectionTitles["solutions-subtitle"]}
                />
                <Prices
                  items={pricesData}
                  btnsText={btnsText["lets-discuss"]}
                />
              </div>
          </section>
          <ContactUs />
    
          <ModalManager
            isOpen={isOpen}
            modalType={modalType}
            modalData={modalData}
            onClose={closeModal}
          />
        </HeaderLayout>
      )}
    </>
  );
}
