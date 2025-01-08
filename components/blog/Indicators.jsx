import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useFetchData } from "@/components/customHooks/useFetchData";
import Loading from "@/components/elements/Loading";
import { useTranslation } from "react-i18next";

const Indicators = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: indicators, loading, error } = useFetchData("indicators", language);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <section className="indicators">
      <div className="container">
        <BlogTitle
          textOnBg={t("IndicatorsTextOnBg")}
          title={t("IndicatorsTitle")}
          textColor="text-white"
        />
        {indicators.map((indicator) => (
          <div key={indicator.id} className="indicators-content">
            <h2 className="text-60-semibold text-white">
              {indicator["main-text"]}
            </h2>
            <h3 className="maxOpen-services__descr">
              {indicator.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Indicators;
