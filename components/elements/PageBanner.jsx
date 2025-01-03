import React from "react";

const PageBanner = ({
  SolutionsBannerTitle,
  SolutionsBannerDescr,
  textBnt,
  onOpenModal,
}) => {
  return (
    <div className="page-banner__banner">
      <div className="container">
        <div className="page-banner__wrapper">
          <h2 className="display-2 mb-30 mt-25 neutral-0 page-banner__title">
            {SolutionsBannerTitle}
          </h2>
          <h3 className="text-lg neutral-500 mb-55 page-banner__descr">
            {SolutionsBannerDescr}
          </h3>
          <button
            className="btn banner-btn hover-up mr-5"
            onClick={() => onOpenModal('calendar')}
          >
            <span>
              <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
              {textBnt}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
