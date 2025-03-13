import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

const Prices = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  
  const { data: prices, loading: pricesLoading  } = useFetchData("price-of-services", language);
  
  return (
    <section className="maxOpen__prices">
      <div className="container">
        <BlogTitle textOnBg={t("PricesTextOnBg")} title={t("PricesTitle")} descr={t("PricesDescr")} />
        {pricesLoading ? (
          <Loading />
        ) : (
          <div className="maxOpen__prices-items">
            {prices.map((service) => (
              <PriceItem
                key={service.id}
                title={`${service.title} ${service.price}`}
                descr={service.description}
                btnText={t("buttons.Let's discuss")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Prices;
