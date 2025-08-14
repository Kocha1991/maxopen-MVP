'use client';
import React from "react";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import HeaderLayout from '@/components/layout/header/Layout';
import Loading from '@/components/elements/Loading';
import PageBanner from '@/components/elements/PageBanner';

export default function PrivacyPolicy() {
  return <AboutUsContentContent />;
}

function AboutUsContentContent() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: bannersData, loading: bannersDataLoading} = useFetchData("banners", language, true);
  const { data: privacyPolicyData, loading: privacyPolicyDataLoading } = useFetchData('privacy-policy', language);
  

  const isLoading = 
  privacyPolicyDataLoading ||
  bannersDataLoading;

  return (
    <div className='privacy-policy'>
      {isLoading ? (
        <div className='page-loading'>
          <Loading /> 
        </div>
      ) : (
        <div className='privacy-policy'>
          <HeaderLayout
            useCustomHeader={true}
            footerStyle='customFooter'
            logoWhite
          >
            <PageBanner
              SolutionsBannerTitle={bannersData['privacy-policy']}
            />
            <div className='container'>
              <div className='privacy-policy__wrapper'>
                {Array.isArray(privacyPolicyData) && privacyPolicyData.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className='privacy-policy__content'>
                      <div className="maxOpen-bg-text">{item.teaser1}</div>
                      <div dangerouslySetInnerHTML={{ __html: item.content1 }} />
                    </div>
                    <div className='privacy-policy__content'>
                      <div className="maxOpen-bg-text">{item.teaser2}</div>
                      <div dangerouslySetInnerHTML={{ __html: item.content2 }} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </HeaderLayout>
        </div>
      )}
    </div>
  );
}