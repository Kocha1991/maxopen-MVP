import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useTranslation } from 'react-i18next';

const KeyBenefits = ({data, title, teaser}) => {
  const { t } = useTranslation();

  return (
    <div className='key-benefits'>
      <div className='container'>
        <BlogTitle 
          textOnBg={teaser}
          title={title}
        />
        <div className="row mt-90">
          {data.length > 0 ? (
            data.map((item) => (
              <InfoBlock 
                key={item.id}
                icon={<span dangerouslySetInnerHTML={{ __html: item['icon-svg'] }} />}
                title={item.title}
                descr={item.description}
                bgWight
              />
            ))
          ) : (
            <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
