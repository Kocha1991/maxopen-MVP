import React from "react";
import { useTranslation } from 'react-i18next';

export const SolutionCard2 = ({ title, description, price, btnText, icon, options = [] }) => {
  const { t } = useTranslation();

  return (
    <div className="solution-card solution-card--2">
      <div className="solution-card__header">
        <span
          className="solution-card__icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        ></span>
        <div className="solution-card__title">{title}</div>
      </div>
      <div className="solution-card__descr" dangerouslySetInnerHTML={{ __html: description }}></div>
      <div className="solution-card--2__items">
        {options.map((option, index) => (
          <div key={index} className="solution-card--2__item">
            <span
              className="solution-card__icon"
              dangerouslySetInnerHTML={{ __html: option.icon }}
            ></span>
            <h3 className="solution-card__subheader">{option.title}</h3>
            <div className="solution-card__descr">{option.description}</div>
          </div>
        ))}
      </div>
      <div className="solution-card__left-bottom">
        <button
          className="btn btn-brand-4-medium hover-up animation-btn-svg"
          type="submit"
        >
          <span>
            {btnText}
            <svg
              width={22}
              height={8}
              viewBox="0 0 22 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
        <div className="solution-card__left-price">
          <h3 className="solution-card__subheader">{t("PackagePrice")}</h3>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};
