'use client';
import React from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export const Services = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: servicesCard, loading: servicesCardLoading } = useFetchData("services-card", language);
  const { data: servicesText, loading: servicesTextLoading } = useFetchData("services-text", language, true);
  const loading = servicesTextLoading || servicesCardLoading;

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <BlogTitle 
              textOnBg={servicesText.teaser}
              title={servicesText.title} 
              descr={servicesText.description} 
            />
            <div className="row">
                {Array.isArray(servicesCard) && servicesCard.length > 0 ? (
                  servicesCard.map((service, index) => {
                    const isLastSingle = (servicesCard.length % 3 === 1) && (index === servicesCard.length - 1);

                    return (
                      <ServicesCard
                        key={service.id}
                        icon={service.icon}
                        iconHover={service["icon-black"]}
                        title={service.title}
                        descr={service.description}
                        btnText={t("buttons.Learn more")}
                        isFullWidth={isLastSingle}
                        link={service.slug ? `/services/${service.slug}` : null}
                      />
                    );
                  })
                ) : (
                  <p>{t("notification.InformationMissing")}</p>
                )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
