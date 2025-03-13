'use client';
import React from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { useFetchData } from '@/components/customHooks/useFetchData';
=======
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
import Loading from '@/components/elements/Loading';

export const Services = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: services, loading: servicesLoading } = useFetchData("services", language);

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        <BlogTitle 
          textOnBg={t("ServicesTextOnBg")} 
          title={t("ServicesTitle")} 
          descr={t("ServicesSubtitle")} 
        />
        <div className="row">
<<<<<<< HEAD
          {servicesLoading ? (
            <Loading />
          ) : (
            Array.isArray(services) && services.length > 0 ? (
              services.map((service, index) => {
                const isLastSingle = (services.length % 3 === 1) && (index === services.length - 1);

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
              })
            ) : (
              <p>{t("notification.InformationMissing")}</p>
            )
          )}
=======
          {data.length > 0 ? (
            data.map((service, index) => {
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
            })
          ) : (<Loading />)}
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
        </div>
      </div>
    </div>
  );
};
