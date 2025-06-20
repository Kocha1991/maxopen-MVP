import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { PriceItem } from '@/components/elements/PriceItem';

const Faq = ({
  onOpenModal,
  teaser,
  title,
  leftBlockTitle,
  leftBlockDescr,
  textBtn,
  questions
}) => {

  return (
    <div className='faq__wrapper'>
      <div className='faq__left-block'>
        <h3 className='faq__left-block-title price-item__title'>
          {leftBlockTitle}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {leftBlockDescr}
        </h4>
        <button
          className="btn banner-btn hover-up mr-5"
          onClick={() => onOpenModal('calendar')}
        >
          <span>
            <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
            {textBtn}
          </span>
        </button>
      </div>
      <div className='faq__right-block'>
        {questions?.map((question, index) => (
          <PriceItem
            key={index}
            title={question.question}
            descr={question.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
