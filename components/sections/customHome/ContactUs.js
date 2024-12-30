import React from "react";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section-box box-get-touch-section box-get-touch-section--maxOpen" id="contact">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-6 ">
                    <div className="box-image-get-touch"> 
                      <h2 className='box-image-get-touch__title'>
                        {t("ContactUsBannerTitle")}
                      </h2>
                      <h3 className='box-image-get-touch__descr'>
                        {t("ContactUsBannerDescr")}
                      </h3>
                    </div>
                </div>
                <div className="col-lg-6">
                  <h2>{t("ContactUsTitle")}</h2>
                  <p className="text-md neutral-700">{t("ContactUsdescr")}</p>
                  <div className="block-form-contact mt-20">
                      <form action="#">
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {t("YourName")}</label>
                              <input className="form-control" type="text" placeholder={t("TypeName")} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {t("YourEmail")}</label>
                              <input className="form-control" type="text" placeholder={t("TypeEmail")} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {t("ContactUsMessage")}</label>
                              <textarea 
                                className="form-control" 
                                rows={3} 
                                placeholder={t("ContactUsHelp")} 
                                style={{ resize: 'none' }}
                              />
                          </div>
                          <div className="form-group">
                            <button className="btn btn-brand-4-medium hover-up animation-btn-svg" type="submit">
                                <span>
                                  {t("buttons.Send Message")}
                                  <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                  </svg>
                                </span>
                            </button>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;
