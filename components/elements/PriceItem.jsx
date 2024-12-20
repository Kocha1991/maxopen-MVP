"use client";
import React from "react";

export const PriceItem = ({ title, descr, btnText }) => {
  return (
    <div className="price-item">
      <div className="price-item__text">
        <h2 className="price-item__title">{title}</h2>
        <p className="price-item__descr">{descr}</p>
      </div>
      <button className="btn btn-brand-4-medium hover-up">
        <span>
          {btnText}
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_833)">
              <path
                d="M9.01605 3.72762L1.45505 11.2886L0.212891 10.0465L7.77301 2.48546H1.10981V0.728516H10.773V10.3917H9.01605V3.72762Z"
                fill="#191919"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_833">
                <rect
                  width="11"
                  height="11"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </div>
  );
};
