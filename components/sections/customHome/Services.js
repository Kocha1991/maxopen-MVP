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
  const { data: services, loading } = useFetchData("services", language);

  if (loading) return <Loading />;

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        {/* Локалізовані статичні тексти */}
        <BlogTitle 
          textOnBg={t("ServicesTextOnBg")} 
          title={t("ServicesTitle")} 
          descr={t("ServicesSubtitle")} 
        />
        <div className="row">
          {/* Динамічні локалізовані дані з API */}
          {services.map((service, index) => {
            const isFullWidth = (index + 1) % 3 !== 0 && index === services.length - 1;

            return (
              <ServicesCard
                key={service.id}
                icon={service.icon}
                iconHover={service["icon-black"]}
                title={service.title}
                descr={service.description}
                btnText={t("buttons.Learn more")}
                isFullWidth={isFullWidth}
                link="/services/service"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
