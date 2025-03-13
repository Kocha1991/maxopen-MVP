import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from "react-i18next";

const Indicators = ({data, isLoading}) => {
  const { t } = useTranslation();

  return (
    <section className="indicators">
      <div className="container">
        <BlogTitle
          textOnBg={t("IndicatorsTextOnBg")}
          title={t("IndicatorsTitle")}
          textColor="text-white"
        />
        {data.length > 0 ? (
          data.map((indicator) => (
            <div key={indicator.id} className="indicators-content">
              <h2 className="text-60-semibold text-white">
                {indicator["main-text"]}
              </h2>
              <h3 className="maxOpen-services__descr">
                {indicator.description}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-white">Дані відсутні</p>
        )}
      </div>
    </section>
  );
};

export default Indicators;
