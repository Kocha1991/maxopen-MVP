import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';
import InfoBlock from '@/components/elements/InfoBlock';

const KeyBenefits = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: benefitsItems, loading, error } = useFetchData("key-benefits", language);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;


  return (
    <div className='key-benefits'>
      <div className='container'>
        <BlogTitle 
          textOnBg={t("KeyBenefitsTextOnBg")}
          title={t("KeyBenefitsTitle")}
        />
        <div className="row mt-90">
          {benefitsItems.length > 0 ? (
            benefitsItems.map((item) => (
              <InfoBlock 
                key={item.id}
                icon={<span dangerouslySetInnerHTML={{ __html: item['icon-svg'] }} />}
                title={item.title}
                descr={item.description}
                bgWight
              />
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
