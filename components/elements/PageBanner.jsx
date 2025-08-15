import React from "react";

const PageBanner = ({
  SolutionsBannerTitle,
  SolutionsBannerDescr,
  textBnt,
  onOpenModal,
  bunnerBg,
}) => {

  const bannerStyle = {
    background: bunnerBg
      ? `url(${bunnerBg.replace(/ /g, "%20")}) center/cover no-repeat`
      : "rgba(25, 25, 25, 1)",
  };

  return (
    <div className="page-banner__banner" style={bannerStyle}>
      <div className="container">
        <div className="page-banner__wrapper">
          {SolutionsBannerTitle && (
            <h2 className="display-2 mb-30 mt-25 neutral-0 page-banner__title">
              {SolutionsBannerTitle}
            </h2>
          )}
          {SolutionsBannerDescr && (
            <h3 className="text-lg neutral-500 mb-55 page-banner__descr">
              {SolutionsBannerDescr}
            </h3>
          )}
          {textBnt && (
            <button
              className="btn banner-btn hover-up mr-5"
              onClick={() => onOpenModal('calendar')}
            >
              <span>
                <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                {textBnt}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
