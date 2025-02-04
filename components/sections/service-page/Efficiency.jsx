'use client';
import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';

const Efficiency = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: info, loading, error } = useFetchData("efficiency-chatbot", language);
  
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className='efficiency'>
      <div className="container">
        <div className='efficiency__wrapper'>
          <BlogTitle 
            textOnBg={t("EfficiencyChatbotTextOnBg")}
            title={t("EfficiencyChatbotTitle")}
            descr={t("EfficiencyChatbotDescr")}
          />
          <div className='efficiency__block'>
            {info?.map((item, index) => (
              <div 
                key={index} 
                className='efficiency__info'
                dangerouslySetInnerHTML={{ __html: item["text-info"] }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
