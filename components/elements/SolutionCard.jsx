import React from "react";

export const SolutionCard = ({ name, descr, icon, price, options = [], priceText, btnText, title }) => {

  return (
    <div className="solution-card">
      <div className="solution-card__left">
        <div className="solution-card__header">
          <span
            className="solution-card__icon"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></span>
          <div className="solution-card__title">{name}</div>
        </div>
        <div className="solution-card__descr">{descr}</div>
        <div className="solution-card__left-bottom">
          <button
            className="btn btn-brand-4-medium hover-up animation-btn-svg"
            type="button"
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
            <h3 className="solution-card__subheader">{priceText}</h3>
            <p>${price}</p>
          </div>
        </div>
      </div>
      <div className="solution-card__right">
        <div className="solution-card__title">{title}</div>
        <div className="solution-card__right-grid">
          {options.map((option, index) => (
            <div key={index} className="solution-card__right-item">
              <h3 className="solution-card__subheader">{option.title}</h3>
              <div className="solution-card__descr">{option.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
