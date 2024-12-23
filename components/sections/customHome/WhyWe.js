import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function WhyWe() {
    const { language } = useLanguage();
    const { data: whyWeItems, loading, error } = useFetchData("why-we-items", language);

    const translations = {
      en: {
        textOnBg: 'Why we?',
        title: 'What Makes Us Unique?',
        descr: 'These benefits are just the beginning. We are ready to offer many more solutions for your business, focusing on your individual needs and requirements.',
      },
      uk: {
        textOnBg: 'Чому ми?',
        title: 'Що Робить Нас Унікальними?',
        descr: 'Ці переваги – лише початок. Ми готові запропонувати набагато більше рішень для вашого бізнесу, зосередившись на ваших індивідуальних потребах і вимогах.'
      },
      ru_UA: {
        textOnBg: 'Почему мы?',
        title: 'Что Делает Нас Уникальными?',
        descr: 'Эти преимущества – лишь начало. Мы готовы предложить гораздо больше решений для вашего бизнеса, сосредоточившись на ваших индивидуальных потребностях и требованиях.'
      },
    };

    const { textOnBg, title, descr } = translations[language] || translations.en;

    if (loading) return <Loading />;
    if (error) return <div>{error}</div>;

    return (
      <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 maxOpen-whyWe">
          <div className="container">
            <div className='bg-abstract'></div>
            <BlogTitle 
              textOnBg={textOnBg}
              title={title}
              descr={descr}
            />
              <div className="row mt-90">
                {whyWeItems.length > 0 ? (
                  whyWeItems.map((item) => (
                    <InfoBlock 
                      key={item.id}
                      icon={<span dangerouslySetInnerHTML={{ __html: item['icon-svg'] }} />}
                      title={item.title}
                      descr={item.description}
                    />
                  ))
                ) : (
                  <p>No items available</p>
                )}
              </div>
          </div>
      </section>
    );
}
