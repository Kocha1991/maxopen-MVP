import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

const Prices = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  
  const { data: pricesData, loading: pricesLoading } = useFetchData("price-of-services", language);
  const { data: pricesText, loading: pricesTextLoading } = useFetchData("prices-text", language, true);
  const loading = pricesLoading || pricesTextLoading;

  // Якщо дані приходять у вигляді об'єкта, який містить масив
  const prices = Array.isArray(pricesData)
    ? pricesData
    : pricesData?.services || [];

  return (
    <section className="maxOpen__prices">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <BlogTitle
              textOnBg={pricesText.teaser}
              title={pricesText.title}
              descr={pricesText.descr}
            />
            {Array.isArray(prices) && prices.length > 0 ? (
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
            ) : (
              <p>{t("No prices available")}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Prices;
