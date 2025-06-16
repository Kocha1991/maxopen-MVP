'use client';
import React from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useTranslation } from 'react-i18next';

export const Services = ({
  teaser,
  title,
  subtitle,
  items,
  btnText
}) => {
  const { t } = useTranslation();

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        <>
          <BlogTitle
            textOnBg={teaser}
            title={title}
            descr={subtitle}
          />
          <div className="row">
            {Array.isArray(items) && items.length > 0 ? (
              items.map((service, index) => {
                const totalItems = items.length;
                const remainingItemsInLastRow = totalItems % 3; // Кількість карток в останньому ряду
                const isLastRow = Math.floor(index / 3) === Math.floor((totalItems - 1) / 3); // Чи знаходиться поточна картка в останньому ряду

                let colSize = 4; // За замовчуванням кожна картка займає 1/3 ширини (наприклад, col-lg-4)
                let shouldAddLongClass = false; // Новий прапорець для класу card-features-maxOpen-long

                // Логіка для останнього ряду
                if (isLastRow) {
                  if (remainingItemsInLastRow === 1 && totalItems > 0) {
                    // Якщо в останньому ряду одна картка, вона займає всю ширину
                    colSize = 12; // Відповідає 3 "блокам"
                    shouldAddLongClass = true; // Додаємо клас, бо це одна картка
                  } else if (remainingItemsInLastRow === 2) {
                    // Якщо в останньому ряду дві картки
                    if (index % 3 === 0) { // Перша картка в цьому ряду (тобто перша з двох)
                      colSize = 4; // Займає 1 блок
                      // Для першої з двох карток клас card-features-maxOpen-long не додається
                    } else { // Друга картка в цьому ряду (тобто друга з двох)
                      colSize = 8; // Займає 2 блоки
                      shouldAddLongClass = true; // Додаємо клас, бо це друга з двох (розширена)
                    }
                  }
                  // Якщо remainingItemsInLastRow === 0, значить, останній ряд повний (3 картки),
                  // тому colSize залишається 4 за замовчуванням, і shouldAddLongClass false.
                }

                return (
                  <ServicesCard
                    key={service.id}
                    icon={service["icon-green"]}
                    iconHover={service["icon-black"]}
                    title={service.title}
                    descr={service.descr}
                    colSize={colSize} // Передаємо colSize для CSS-класу колонки
                    addLongClass={shouldAddLongClass} // Передаємо новий прапорець для внутрішнього класу
                    link={service.slug ? `/services/${service.slug}` : null}
                    btnText={btnText}
                  />
                );
              })
            ) : (
              <p>{t("notification.InformationMissing")}</p>
            )}
          </div>
        </>
      </div>
    </div>
  );
};