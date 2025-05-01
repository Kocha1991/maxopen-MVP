import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const BoxNewsletter = ({ title, descr, buttonText, placeholder, newsLetterText }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(false);

    try {
      const response = await fetch("/api/customer-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log("Response:", response);
      console.log("Result:", result);
      if (!response.ok) {
        throw new Error(result.message || t("notification.SentSuccessfully"));
      }

      setMessage(t("notification.SentSuccessfully"));
      setEmail("");
    } catch (err) {
      setError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box-newsletter box-newsletter--maxOpen">
      <div className="newsletter-left">
        <h2>{title}</h2>
        <p className="text-md neutral-600">{descr}</p>
      </div>
      <div className="newsletter-right">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-subscribe" type="submit" disabled={isSubmitting}>
            {buttonText}
          </button>
        </form>
        {message && <p className={error ? "text-danger" : "text-success"}>{message}</p>}
        <p className="newsletter-input-lable">{newsLetterText}</p>
      </div>
    </div>
  );
};

export default BoxNewsletter;
