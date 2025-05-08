'use client';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DevelopmentDelivers = ({data, isLoading}) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setActiveCategory(data[0].id);
    }
  }, [data]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const renderActiveCategory = () => {
    if (!activeCategory) return null;

    const activeData = data.find((cat) => cat.id === activeCategory);

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
        {data.length > 0 ? (
          data.map((category) => (
            <button
              key={category.id}
              className={`blog-change-option__categories-btn ${
                activeCategory === category.id ? "blog-change-option-active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category["text-button"]}
            </button>
          ))
        ) : (
          <p className="text-white">Дані відсутні</p>
        )}
      </div>
      {renderActiveCategory()}
    </div>
  );
};

export default DevelopmentDelivers;
