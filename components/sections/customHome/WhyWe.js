import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';
import { useTranslation } from 'react-i18next';


export default function WhyWe() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: whyWeItems, loading, error } = useFetchData("why-we-items", language);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

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
                <p>No items available</p>
              )}
            </div>
        </div>
    </section>
  );
}
