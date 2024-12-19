import React, { useEffect, useState } from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock from '@/components/elements/InfoBlock';
import { useLanguage } from '@/components/customHooks/LanguageContext';

export default function WhyWe() {
    const { language } = useLanguage();
    const [whyWeItems, setWhyWeItems] = useState([]);

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

    useEffect(() => {
        fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/why-we-items', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const filteredItems = data.filter(item => item.locale === language);
            setWhyWeItems(filteredItems.length > 0 ? filteredItems : data.filter(item => item.locale === 'en'));
        })
        .catch((error) => console.error('Error fetching Why We items:', error));
    }, [language]);

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
                      icon={<img src={item.icon.full_url} alt={item.title} />}
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
