import React from "react";
import { PriceItem } from "../../elements/PriceItem";
import { useTranslation } from 'react-i18next';

const Prices = ({
    items, 
    btnsText
  }) => {
  const { t } = useTranslation();
  
  const prices = Array.isArray(items) ? items : items?.services || [];

  return (
    <>
      {Array.isArray(prices) && prices.length > 0 ? (
        <div className="maxOpen__prices-items">
          {prices.map((price) => (
            <PriceItem
              key={price.id}
              title={`${price.title}`}
              descr={price.descr}
              btnText={btnsText}
            />
          ))}
        </div>
      ) : (
        <p>{t("No prices available")}</p>
      )}
    </>
  );
};

export default Prices;
