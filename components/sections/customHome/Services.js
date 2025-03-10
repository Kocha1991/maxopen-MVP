'use client';
import React from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from 'react-i18next';

export const Services = ({ data, isLoading }) => {
  const { t } = useTranslation();

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        <BlogTitle 
          textOnBg={t("ServicesTextOnBg")} 
          title={t("ServicesTitle")} 
          descr={t("ServicesSubtitle")} 
        />
        <div className="row">
          {data.map((service, index) => {
            const isLastSingle = (data.length % 3 === 1) && (index === data.length - 1);

            return (
              <ServicesCard
                key={service.id}
                icon={service.icon}
                iconHover={service["icon-black"]}
                title={service.title}
                descr={service.description}
                btnText={t("buttons.Learn more")}
                isFullWidth={isLastSingle}
                link="/services/service"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
