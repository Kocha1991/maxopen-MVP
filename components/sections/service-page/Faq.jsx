import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useTranslation } from 'react-i18next';
import { PriceItem } from '@/components/elements/PriceItem';

const Faq = ({
  onOpenModal,
}) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  
  return (
    <div className='faq'>
      <div className="container">
        <BlogTitle
          textOnBg="FAQ"
          title={t("FAQTitle")}
          textColor="wight-text"
        />
        <div className='faq__wrapper'>
          <div className='faq__left-block'>
            <h3 className='faq__left-block-title price-item__title'>
              Still have questions?
            </h3>
            <h4 className='maxOpen-services__descr'>
              Contact us to get a comprehensive consultation and clarify all the details.
            </h4>
            <button
              className="btn banner-btn hover-up mr-5"
              onClick={() => onOpenModal('calendar')}
            >
              <span>
                <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                {t("buttons.BookMeeting")}
              </span>
            </button>
          </div>
          <div className='faq__right-block'>
            <PriceItem
              title="How is data security ensured in chatbots?"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <PriceItem
              title="Can a chatbot be customized for the specific needs of my company?"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <PriceItem
              title="How quickly can a chatbot be integrated into my business?"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <PriceItem
              title="How do chatbots help reduce costs?"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <PriceItem
              title="What are the advantages of using chatbots for business?"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
