'use client';
import React from 'react';
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock2 from '@/components/elements/InfoBlock2';
import BoxNewsletter from '@/components/elements/BoxNewsletter';
import { useTranslation } from 'react-i18next';

const Process = ({
  teaser,
  title,
  subtitle,
  items,
  formText,
  btnsText
}) => {
  const { t } = useTranslation();

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
      <div className="container">
        <>
          <BlogTitle 
            textOnBg={teaser}
            title={title}
            descr={subtitle}
          />
          {Array.isArray(items) ? (
            <div className="row">
              {items.map((step) => (
                <InfoBlock2 
                  key={step.id}
                  number={step.number}
                  title={step['name-process']}
                  descr={step["process-descr"]}
                />
              ))}
            </div>
          ) : (
            <p>{t("errors.NoDataAvailable")}</p>
          )}
        </>
      </div>
      <div className="container mt-25">
        <BoxNewsletter 
          title={formText.title}
          descr={formText.descr}
          btnsText={btnsText["get-in-touch"]}
          placeholder={formText.placeholder}
          newsLetterText={formText.text}
        />
      </div>
    </section>
  );
};

export default Process;
