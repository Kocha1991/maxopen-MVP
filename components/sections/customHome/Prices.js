import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useTranslation } from 'react-i18next';

const Prices = ({
    items, 
    teaser, 
    title,
    subtitle,
    btnsText
  }) => {
  const { t } = useTranslation();
  
  const prices = Array.isArray(items) ? items : items?.services || [];

  return (
    <section className="maxOpen__prices">
      <div className="container">
        <>
          <BlogTitle
            teaser={teaser}
            title={title}
            subtitle={subtitle}
          />
          {Array.isArray(prices) && prices.length > 0 ? (
            <div className="maxOpen__prices-items">
              {prices.map((price) => (
                <PriceItem
                  key={price.id}
                  title={`${price.title} ${price.price}`}
                  descr={price.descr}
                  btnText={btnsText}
                />
              ))}
            </div>
          ) : (
            <p>{t("No prices available")}</p>
          )}
        </>
      </div>
    </section>
  );
};

export default Prices;
