'use client';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFetchData } from "@/components/customHooks/useFetchData";
import Loading from "@/components/elements/Loading";

const BlogChangeOption = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [activeCategory, setActiveCategory] = useState(null);
  const { data: options, loading, error } = useFetchData("our-mission", language);

  useEffect(() => {
    if (options && options.length > 0) {
      setActiveCategory(options[0]["text-button"]);
    }
  }, [options]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderCategoryContent = () => {
    if (!activeCategory) return null;

    const categoryData = options.find(item => item["text-button"] === activeCategory);
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
        {options.map((option) => (
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
