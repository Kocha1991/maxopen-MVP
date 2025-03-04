import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
  
    try {
      const response = await fetch('/api/customer-data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({name, email, message}),
      });
      
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      setSuccess(true);
      setError('Failed to send the message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-box box-get-touch-section box-get-touch-section--maxOpen" id="contact">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-6">
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">{t("YourName")}</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder={t("TypeName")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("YourEmail")}</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder={t("TypeEmail")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t("ContactUsMessage")}</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder={t("ContactUsHelp")}
                    style={{ resize: 'none' }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-brand-4-medium hover-up animation-btn-svg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? t("Sending...") : t("buttons.Send Message")}
                      {isSubmitting && (
                        <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              </form>
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{t("Message sent successfully!")}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
