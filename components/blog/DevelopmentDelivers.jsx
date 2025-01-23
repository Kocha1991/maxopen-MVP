'use client';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetchData } from "@/components/customHooks/useFetchData";
import Loading from "@/components/elements/Loading";

const DevelopmentDelivers = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [activeCategory, setActiveCategory] = useState(null);
  const { data: categories, loading, error } = useFetchData("development-delivers", language);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  }, [categories]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const renderActiveCategory = () => {
    if (!activeCategory) return null;

    const activeData = categories.find((cat) => cat.id === activeCategory);

    console.log(activeData);

    if (!activeData) {
      return <div>{t("errors.noDataForCategory")}</div>;
    }

    return (
      <div className="development-delivers__block">
        <div className="development-delivers__img">
          <img src={activeData.image.full_url} alt={activeData["text-button"]} />
        </div>
        <h2 className="development-delivers__title">{activeData["name-project"]}</h2>
        <div
          className="blog-change-option__text"
          dangerouslySetInnerHTML={{ __html: activeData.description }}
        />
        <button className="btn btn-brand-4-medium hover-up">
          {t("buttons.Go to website")}
        </button>
      </div>
    );
  };

  return (
    <div className="development-delivers__wrapper">
      <div className="development-delivers__btns">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`blog-change-option__categories-btn ${
              activeCategory === category.id ? "blog-change-option-active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category["text-button"]}
          </button>
        ))}
      </div>
      {renderActiveCategory()}
    </div>
  );
};

export default DevelopmentDelivers;
