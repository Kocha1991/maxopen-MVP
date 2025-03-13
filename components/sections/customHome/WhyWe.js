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
        </div>
    </section>
  );
}
