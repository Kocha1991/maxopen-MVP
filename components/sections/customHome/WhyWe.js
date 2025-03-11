import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';


export default function WhyWe({data, isLoading}) {
  const { t } = useTranslation();

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 maxOpen-whyWe">
        <div className="container">
          <div className='bg-abstract'></div>
          <BlogTitle 
            textOnBg={t("WhyTextOnBg")}
            title={t("WhyTitle")}
            descr={t("WhySubtitle")}
          />
          <div className="row mt-90">
            {data.length > 0 ? (
              data.map((item) => (
                <InfoBlock 
                  key={item.id}
                  icon={<span dangerouslySetInnerHTML={{ __html: item['icon-svg'] }} />}
                  title={item.title}
                  descr={item.description}
                />
              ))
            ) : (
              <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
            )}
          </div>
        </div>
    </section>
  );
}
