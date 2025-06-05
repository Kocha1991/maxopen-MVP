'use client';
import React from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from 'react-i18next';

export const Services = ({
  text,
  items,
  btnText
}) => {
  const { t } = useTranslation();

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        <>
          <BlogTitle 
            textOnBg={text.teaser}
            title={text.title}
            descr={text.descr}
          />
          <div className="row">
              {Array.isArray(items) && items.length > 0 ? (
                items.map((service, index) => {
                  const isLastSingle = (items.length % 3 === 1) && (index === items.length - 1);

                  return (
                    <ServicesCard
                      key={service.id}
                      icon={service.icon}
                      iconHover={service["icon-black"]}
                      title={service.title}
                      descr={service.description}
                      isFullWidth={isLastSingle}
                      link={service.slug ? `/services/${service.slug}` : null}
                      btnText={btnText}
                    />
                  );
                })
              ) : (
                <p>{t("notification.InformationMissing")}</p>
              )}
          </div>
        </>
      </div>
    </div>
  );
};
