'use client';
import React from 'react';
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock2 from '@/components/elements/InfoBlock2';
import BoxNewsletter from '@/components/elements/BoxNewsletter';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';

const Process = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: processSteps, loading: processStepsLoading } = useFetchData("work-process", language);
  
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
      <div className="container">
        <BlogTitle 
          textOnBg={t("ProcesTextOnBg")}
          title={t("ProcesTitle")}
          descr={t("ProcesSubtitle")}
        />
        {processStepsLoading ? (
          <Loading />
        ) : Array.isArray(processSteps) ? (
          <div className="row">
            {processSteps.map((step) => (
              <InfoBlock2 
                key={step.id}
                number={step.number}
                title={step['name process']}
                descr={step.description}
              />
            ))}
          </div>
        ) : (
          <p>{t("errors.NoDataAvailable")}</p>
        )}
      </div>
      <div className="container mt-25">
        <BoxNewsletter 
          title={t("NewsLetterTitle")}
          descr={t("NewsLetterDescr")}
          buttonText={t("buttons.Get in Touch")}
          placeholder={t('NewsLetterPlaceholder')}
          newsLetterText={t("NewsLetterText")}
        />
      </div>
    </section>
  );
};

export default Process;
