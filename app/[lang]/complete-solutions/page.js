'use client';
import React from 'react';
import { SolutionCard } from '@/components/elements/SolutionCard';
import { SolutionCard2 } from '@/components/elements/SolutionCard2';
import Layout from '@/components/layout/Layout';
import { ModalProvider } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function CompleteSolutions() {
  return (
    <ModalProvider>
      <CompleteSolutionsContent />
    </ModalProvider>
  );
}

function CompleteSolutionsContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  // Дані для SolutionCard
  const { data: cards, loading: cardsLoading, error: cardsError } = useFetchData('packege-card', language);

  // Дані для SolutionCard2
  const { data: fullPackage, loading: fullPackageLoading, error: fullPackageError } = useFetchData('full-package', language);

  if (cardsLoading || fullPackageLoading) return <Loading />;
  if (cardsError || fullPackageError) return <div>{cardsError || fullPackageError}</div>;

  return (
    <div className="complete-solutions">
      <Layout useCustomHeader={true} footerStyle="customFooter" logoWhite>
        <div className="complete-solutions__banner">
          <div className="container">
            <div className="complete-solutions__wrapper">
              <h2 className="display-2 mb-30 mt-25 neutral-0 complete-solutions__title">
                {t("SolutionsBannerTitle")}
              </h2>
              <h3 className="text-lg neutral-500 mb-55 complete-solutions__descr">
                {t("SolutionsBannerDescr")}
              </h3>
              <button
                className="btn banner-btn hover-up mr-5"
                onClick={() => openModal('calendar')}
              >
                <span>
                  <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                  {t("buttons.BookMeeting")}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="complete-solutions__items">
          <div className="container">
            {cards.map((card) => (
              <SolutionCard
                key={card.id}
                name={card.name}
                descr={card.description}
                icon={card.icon}
                price={card.price}
                options={[
                  { title: card.options1, description: card.optionsDescr1 },
                  { title: card.options2, description: card.optionsDescr2 },
                  { title: card.options3, description: card.optionsDescr3 },
                  { title: card.options4, description: card.optionsDescr4 },
                ]}
              />
            ))}
            {fullPackage.map((pkg) => (
              <SolutionCard2
                key={pkg.id}
                title={pkg.title}
                description={pkg.description}
                icon={pkg.icon}
                price={pkg.price}
                options={[
                  { title: pkg['title-option1'], description: pkg['description-option1'], icon: pkg['icon-option1'] },
                  { title: pkg['title-option2'], description: pkg['description-option2'], icon: pkg['icon-option2'] },
                  { title: pkg['title-option3'], description: pkg['description-option3'], icon: pkg['icon-option3'] },
                ]}
              />
            ))}
          </div>
        </div>
        <div className="add-top-footer">
          <div className="container">
            <div className="add-top-footer__wrapper">
              <div className="add-top-footer__text-block">
                <div className="solution-card__title text-white">
                  {t("SolutionsNeedHelp")}
                </div>
                <div className="solution-card__descr">
                  {t("SolutionsHalpDescr")}
                </div>
                <a
                  className="btn btn-brand-4-medium hover-up"
                  onClick={() => openModal('calendar')}
                >
                  <span>
                    {t("buttons.Book a call")}
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
                </a>
              </div>
              <img src="/assets/imgs/template/top-footer-img.png" alt="image" />
            </div>
          </div>
        </div>
        <ModalManager 
          isOpen={isOpen} 
          modalType={modalType} 
          modalData={modalData} 
          onClose={closeModal} 
        />
      </Layout>
    </div>
  );
}
