'use client';
import React from 'react';
import { ModalProvider } from '@/components/customHooks/useModal';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import BlogPost from '@/components/blog/BlogPost';
import ModalManager from '@/components/elements/ModalManager';
import Filter from '@/components/elements/Filter';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function Blog() {
  return (
    <ModalProvider>
      <BlogMaxOpenContent />
    </ModalProvider>
  );
}

function BlogMaxOpenContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: text, loading: projectsTextLoading } = useFetchData(
    'blog-page-text',
    language,
    true
  );
  const { data: blogPosts, loading: blogPostsLoading } = useFetchData(
    'blog-cards',
    language
  );

  const loading = projectsTextLoading || blogPostsLoading;

  return (
    <div className='blog-maxOpen'>
      <HeaderLayout useCustomHeader={true} footerStyle='customFooter' logoWhite>
        {loading ? (
          <Loading />
        ) : (
          <>
            <PageBanner
              SolutionsBannerTitle={text['banner-title']}
              SolutionsBannerDescr={text['banner-descr']}
              textBnt={text['banner-btn-text']}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className='blog-maxOpen__wrapper'>
                <h2 className='blog-title mb-20'>{text['cards-title']}</h2>
                <div className='row'>
                  {/* <Filter /> */}
                  <BlogPost
                    showItem={8}
                    style={1}
                    showPagination
                    items={blogPosts}
                  />
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
