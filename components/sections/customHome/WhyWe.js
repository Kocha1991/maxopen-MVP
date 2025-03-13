import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function WhyWe() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: whyWeItems, loading: whyWeLoading } = useFetchData("why-we-items", language);
  
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 maxOpen-whyWe">
        <div className="container">
          <div className='bg-abstract'></div>
          <BlogTitle 
            textOnBg={t("WhyTextOnBg")}
            title={t("WhyTitle")}
            descr={t("WhySubtitle")}
          />
<<<<<<< HEAD
          {whyWeLoading ? (
            <Loading />
          ) : (
            <div className="row mt-90">
              {whyWeItems.length > 0 ? (
                whyWeItems.map((item) => (
                  <InfoBlock 
                    key={item.id}
                    icon={<span dangerouslySetInnerHTML={{ __html: item['icon-svg'] }} />}
                    title={item.title}
                    descr={item.description}
                  />
                ))
              ) : (
                <p>{t("notification.InformationMissing")}</p>
              )}
            </div>
          )}
=======
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
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
        </div>
    </section>
  );
}
