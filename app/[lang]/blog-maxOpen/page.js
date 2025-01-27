"use client";
import React from "react";
import { ModalProvider } from '@/components/customHooks/useModal';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import BlogPost from '@/components/blog/BlogPost';


export default function AboutUs() {
  return (
    <ModalProvider>
      <BlogMaxOpen />
    </ModalProvider>
  );
};

function BlogMaxOpen() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  // const { language } = i18n;
    
  return (
    <div className='blog-maxOpen'>
      <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
        <PageBanner 
          SolutionsBannerTitle={t("OurblogBannerTitle")}
          SolutionsBannerDescr={t("OurblogBannerDescription")}
          textBnt={t("buttons.BookMeeting")}
          onOpenModal={openModal}
        />
        <div className='container'>
          <div className="blog-maxOpen__wrapper">
            <h2 className='blog-title mb-20'>{t("Ourblog")}</h2>
            <div className="row">
              <BlogPost showItem={9} style={1} showPagination />

            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}