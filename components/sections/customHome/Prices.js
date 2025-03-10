import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useTranslation } from 'react-i18next';


const Prices = ({data, isLoading }) => {
  const { t } = useTranslation();

  return (
    <section className="maxOpen__prices">
      <div className="container">
        <BlogTitle textOnBg={t("PricesTextOnBg")} title={t("PricesTitle")} descr={t("PricesDescr")} />
        <div className="maxOpen__prices-items">
          {data.map((service) => (
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
