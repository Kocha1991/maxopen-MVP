import React from "react";
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';

const KeyBenefits = ({data}) => {
  const { t } = useTranslation();

  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((item) => (
          <InfoBlock 
            key={item.id}
            icon={item.icon?.full_url}
            title={item.title}
            descr={item.descr}
            bgWight
          />
        ))
      ) : (
        <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
      )}
    </div>
  );
};

export default KeyBenefits;
