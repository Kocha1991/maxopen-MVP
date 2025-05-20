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
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("btns-text", language, true);
  

  const loading = projectsTextLoading || blogPostsLoading || btnsTextLoading;

  return (
    <div className='blog-maxOpen'>
      <HeaderLayout useCustomHeader={true} footerStyle='customFooter' logoWhite>
        {loading ? (
          <div className='page-loading'>
            <Loading /> 
          </div>
        ) : (
          <>
            <PageBanner
              SolutionsBannerTitle={text['banner-title']}
              SolutionsBannerDescr={text['banner-descr']}
              textBnt={btnsText["book-meeting"]}
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
                    btnText={btnsText["learn-more"]}
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
