'use client';
import React from 'react';
import { ModalProvider } from '@/components/customHooks/useModal';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';
import ModalManager from '@/components/elements/ModalManager';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { ServicesCard } from '@/components/elements/ServicesCard';

export default function Services() {
  return (
    <ModalProvider>
      <ServicesContent />
    </ModalProvider>
  );
}
function ServicesContent() {
  const { openModal, isOpen, modalType, modalData, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: services, loading: servicesLoading } = useFetchData('services-card', language);
  const { data: text, loading: textLoading } = useFetchData('services-page-text', language, true);
  const { data: btnsText, loading: btnsTextLoading} = useFetchData("btns-text", language, true);
  
  const loading = servicesLoading || textLoading || btnsTextLoading;

  return (
    <div className='services'>
      <HeaderLayout useCustomHeader={true} footerStyle='customFooter' logoWhite>
        {loading ? (
          <div className='page-loading'>
            <Loading /> 
          </div>
        ) : (
          <>
            <PageBanner
              SolutionsBannerTitle={text.title}
              SolutionsBannerDescr={text.descr}
              textBnt={btnsText["book-meeting"]}
              onOpenModal={openModal}
            />
            <div className='container'>
              <div className='blog-maxOpen__wrapper'>
                <h2 className='blog-title mb-20'>{text.teaser}</h2>
                <div className="row">
                  {Array.isArray(services) && services.length > 0 ? (
                    services.map((service, index) => {
                      const totalItems = services.length;
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
                          btnText={""}
                        />
                      );
                    })
                  ) : (
                    <p>{t("notification.InformationMissing")}</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </HeaderLayout>
      <ModalManager
        isOpen={isOpen}
        modalType={modalType}
        modalData={modalData}
        onClose={closeModal}
      />
    </div>
  );
}
