'use client';
import React from 'react';
import Layout from "@/components/layout/Layout";
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
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useTranslation } from 'react-i18next';


export default function Page() {
  return <HomeContent />;
}
function HomeContent() {
  const { isOpen, modalType, modalData, closeModal } = useModal();
  const { i18n } = useTranslation();
  const { language } = i18n;
  
  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  const { data: services, loading: servicesLoading } = useFetchData("services", language);
  const { data: projects, loading: projectsLoading } = useFetchData("cases", language);
  const { data: whyWeItems, loading: whyWeLoading } = useFetchData("why-we-items", language);
  const { data: games, loading: gamesLoading } = useFetchData("video-games");
  const { data: processSteps, loading: processStepsLoading } = useFetchData("work-process", language);
  const { data: prices, loading: pricesLoading  } = useFetchData("price-of-services", language);

  return (
    <Layout useCustomHeader={true} footerStyle={'customFooter'}>
      <Banner />
      <GoodsAnimation data={logos} isLoading={logosLoading}/>
      <Services data={services} isLoading={servicesLoading} />
      <Projects data={projects} isLoading={projectsLoading}/>
      <WhyWe data={whyWeItems} isLoading={whyWeLoading}/>
      <Games data={games} isLoading={gamesLoading}/>
      <Process data={processSteps} isLoading={processStepsLoading}/>
      <Prices data={prices} isLoading={pricesLoading}/>
      <ContactUs />

      <ModalManager 
        isOpen={isOpen} 
        modalType={modalType} 
        modalData={modalData} 
        onClose={closeModal} 
      />
    </Layout>
  );
}

