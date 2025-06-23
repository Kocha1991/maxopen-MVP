"use client";
import React from "react";
import { useModal } from '@/components/customHooks/useModal';


export const PriceItem = ({ title, descr, btnText }) => {
  const { openModal } = useModal();

  return (
    <>
      <div className="price-item">
        <div className="price-item__text">
          <h2 className="price-item__title">{title}</h2>
          <p className="price-item__descr" dangerouslySetInnerHTML={{ __html: descr }} />
        </div>

        {btnText ? (
          <button 
            className="btn btn-brand-4-medium hover-up"
            onClick={() => openModal('calendar')}

          >
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
        ) : (
          <svg 
            className='price-item-plus'
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 8.81982C10.52 8.81982 10.08 8.93982 9.68 9.13982C9.88 8.73982 10 8.29982 10 7.81982V0.819824H8V7.81982C8 8.36982 7.55 8.81982 7 8.81982H0V10.8198H7C7.48 10.8198 7.92 10.6998 8.32 10.4998C8.12 10.8998 8 11.3398 8 11.8198V18.8198H10V11.8198C10 11.2698 10.45 10.8198 11 10.8198H18V8.81982H11Z" fill="white"/>
          </svg>
        )}
      </div>
    </>
  );
};
