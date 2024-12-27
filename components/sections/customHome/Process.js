'use client';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock2 from '@/components/elements/InfoBlock2';
import BoxNewsletter from '@/components/elements/BoxNewsletter';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import Loading from '@/components/elements/Loading';

const Process = () => {
  const { language } = useLanguage(); // Поточна мова з контексту
  const { data: processSteps, loading, error } = useFetchData("work-process", language);

  const translations = {
    en: {
      textOnBg: "How We Work",
      title: "From idea to finished product: how we work on your project",
      descr: "We follow a consistent approach to the implementation of each project, which guarantees high quality execution and transparency at all stages of work - from planning to final implementation.",
      newsLetterTitle: "Let's discuss your project!",
      newsLetterDescr: "Enter your email, and we'll get in touch with you as soon as possible to discuss your ideas in detail and help bring your project to life",
      newsLetterPlaceholder: "Your email address",
      newsLetterText: "Your email is safe with us – just for project updates.",
      btnText: "Get in Touch"
    },
    uk: {
      textOnBg: "Как мы работаем",
      title: "От идеи до готового продукта: как мы работаем над вашим проектом",
      descr: "Мы придерживаемся последовательного подхода к реализации каждого проекта, что гарантирует высокое качество выполнения и прозрачность на всех этапах работы - от планирования до финальной реализации.",
      newsLetterTitle: "Давайте обсудим ваш проект!",
      newsLetterDescr: "Введите свой e-mail, и мы свяжемся с вами в ближайшее время, чтобы детально обсудить ваши идеи и помочь воплотить ваш проект в жизнь.",
      newsLetterPlaceholder: "Ваш электронный адрес",
      newsLetterText: "Ваш e-mail в безопасности – только для обновлений в проекте.",
      btnText: "Связаться"
    },
    ru_UA: {
      textOnBg: "Як ми працюємо",
      title: "Від ідеї до готового продукту: як ми працюємо над вашим проектом",
      descr: "Ми дотримуємось послідовного підходу до реалізації кожного проекту, що гарантує високу якість виконання та прозорість на всіх етапах роботи - від планування до фінальної реалізації.",
      newsLetterTitle: "Давайте обговоримо ваш проект!",
      newsLetterDescr: "Введіть свій e-mail, і ми зв’яжемося з вами найближчим часом, щоб детально обговорити ваші ідеї та допомогти втілити ваш проект у життя.",
      newsLetterPlaceholder: "Ваша електронна адреса",
      newsLetterText: "Ваш e-mail у безпеці – лише для оновлень проекту.",
      btnText: "Зв'язатися"
    },
  };

  const { textOnBg, title, descr, btnText, newsLetterTitle, newsLetterDescr, newsLetterPlaceholder, newsLetterText } = translations[language] || translations.en;

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
      <div className="container">
        <BlogTitle 
          textOnBg={textOnBg}
          title={title}
          descr={descr}
        />
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
      </div>
      <div className="container mt-25">
        <BoxNewsletter 
          title={newsLetterTitle}
          descr={newsLetterDescr}
          buttonText={btnText}
          placeholder={newsLetterPlaceholder}
          newsLetterText={newsLetterText}
        />
      </div>
    </section>
  );
};

export default Process;
