import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function WhyWe() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: items, loading: itemsLoading } = useFetchData("why-we-items", language);
  const { data: text, loading: textLoading } = useFetchData("why-we-text", language, true);
  const loading = itemsLoading || textLoading;
  
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 maxOpen-whyWe">
        <div className="container">
          {/* <div className='bg-abstract'></div> */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <BlogTitle 
                textOnBg={text.teaser}
                title={text.title}
                descr={text.descr}
              />
              <div className="row mt-90">
                {items.length > 0 ? (
                  items.map((item) => (
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
            </>
          )}
        </div>
    </section>
  );
}
