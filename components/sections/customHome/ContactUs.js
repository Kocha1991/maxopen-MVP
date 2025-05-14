import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { data: textForm, loading: textFormLoading } = useFetchData('form-1', language, true);
  
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false });

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const validateForm = () => {
    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '' || !/\S+@\S+\.\S+/.test(email),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
  
    try {
      const response = await fetch('/api/customer-data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      if (!response.ok) {
        throw new Error(t("notification.FailedSend"));
      }
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err.message);
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
                {textForm["img-title"]}
              </h2>
              <h3 className='box-image-get-touch__descr'>
                {textForm["img-descr"]}
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>{textForm["form-title"]}</h2>
            <p className="text-md neutral-700">{textForm["form-subtitle"]}</p>
            <div className="block-form-contact mt-20">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">{textForm["name"]}</label>
                  <input
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder={textForm["name-placeholder"]}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="fullname"
                  />
                  {errors.name && <small className="text-danger">{textForm[""]}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{textForm["email"]}</label>
                  <input
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder={textForm["email-placeholder"]}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                  />
                  {errors.email && <small className="text-danger">{t("notification.validationRequired")}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">{textForm["message"]}</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder={textForm["message-placeholder"]}
                    style={{ resize: 'none' }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-brand-4-medium hover-up animation-btn-svg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>
                      {textForm["btn-text"]}
                      <img
                        src={
                          isSubmitting
                            ? textForm["btn-icon"]?.full_url
                            : success
                            ? textForm["btn-icon-done"]?.full_url
                            : textForm["btn-icon"]?.full_url
                        }
                        alt=""
                        style={{ marginLeft: 8 }}
                      />
                    </span>
                  </button>
                </div>
              </form>
              {error && <p className="text-danger">{textForm.error}</p>}
              {success && <p className="text-success">{textForm.success}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
