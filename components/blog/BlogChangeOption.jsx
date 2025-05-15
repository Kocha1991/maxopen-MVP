'use client';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const BlogChangeOption = ({data}) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setActiveCategory(data[0]["text-button"]);
    }
  }, [data]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderCategoryContent = () => {
    if (!activeCategory) return null;

    const categoryData = data.find(item => item["text-button"] === activeCategory);
    return (
      <div className='blog-change-option__bloc'>
        {categoryData ? (
          <>
            <img src={categoryData.images.full_url} alt={categoryData["text-button"]} />
            <div className='blog-change-option__text' dangerouslySetInnerHTML={{ __html: categoryData.description }} />
          </>
        ) : (
          <div>{t("No content available for this category.")}</div>
        )}
      </div>
    );
  };

  return (
    <div className='blog-change-option__wrapper'>
      <div className='blog-change-option__categories'>
        {/* Вибір категорій */}
        {data.map((option) => (
          <button
            key={option.id}
            className={`blog-change-option__categories-btn ${activeCategory === option["text-button"] ? "blog-change-option-active" : ""}`}
            onClick={() => handleCategoryChange(option["text-button"])}
          >
            {t(option["text-button"])}
          </button>
        ))}
      </div>
      {renderCategoryContent()}
    </div>
  );
};

export default BlogChangeOption;
