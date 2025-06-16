import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';

export default function WhyWe({
  teaser,
  title,
  subtitle,
  items
}) {
  const { t } = useTranslation();
  
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 maxOpen-whyWe">
        <div className="container">
          <>
            <BlogTitle 
              textOnBg={teaser}
              title={title} 
              descr={subtitle}
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
        </div>
    </section>
  );
}
