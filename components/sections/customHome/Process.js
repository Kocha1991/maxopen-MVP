'use client';
import React from 'react';
import InfoBlock2 from '@/components/elements/InfoBlock2';
import BoxNewsletter from '@/components/elements/BoxNewsletter';
import { useTranslation } from 'react-i18next';

const Process = ({
  items,
  formText,
  btnsText
}) => {
  const { t } = useTranslation();

  return (
    <>
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
      <div className="mt-25">
        <BoxNewsletter 
          title={formText.title}
          descr={formText.descr}
          btnsText={btnsText["get-in-touch"]}
          placeholder={formText.placeholder}
          newsLetterText={formText.text}
        />
      </div>
    </>
  );
};

export default Process;
