import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';
import { useTranslation } from 'react-i18next';


const Prices = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: services, loading, error } = useFetchData("price-of-services", language);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  
  return (
    <section className="maxOpen__prices">
      <div className="container">
        <BlogTitle textOnBg={t("PricesTextOnBg")} title={t("PricesTitle")} descr={t("PricesDescr")} />
        <div className="maxOpen__prices-items">
          {services.map((service) => (
            <PriceItem
              key={service.id}
              title={`${service.title} ${service.price}`}
              descr={service.description}
              btnText={t("buttons.Let's discuss")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
