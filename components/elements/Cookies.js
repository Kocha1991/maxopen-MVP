import React, { useState, useEffect } from "react";
import ModalCookies from "./ModalCookies";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Cookies = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  
  const [showModal, setShowModal] = useState(false);
  const [showCookiesBar, setShowCookiesBar] = useState(true);

  // Функція для отримання cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  // Функція для встановлення cookies
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  };

  useEffect(() => {
    const accepted = getCookie("cookiesAccepted");
    if (!accepted) {
      setShowCookiesBar(true);
    }
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
    setShowCookiesBar(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowCookiesBar(true);
  };

  const handleAcceptCookies = () => {
    setCookie("cookiesAccepted", "true", 365);
    setShowCookiesBar(false);
    setShowModal(false);
  };

  return (
    <>
      {showCookiesBar && (
        <div className="cookies">
          <div className="cookies__top">
            <img
              src="/assets/imgs/template/icons/3d-rendering-cookie-with-chocolate 1.png"
              alt=""
              className="cookies__icon"
            />
            <h2 className="cookies__title">Cookies</h2>
          </div>
          <div className="cookies__text">
            This website uses cookies to ensure you get the best experience on
            our website. For more information read our{" "}
            <Link href={`/${language}/privacy-policy`}>privacy policy.</Link>
          </div>
          <div className="cookies__btns">
            <button
              className="btn btn-brand-4-medium hover-up"
              onClick={handleAcceptCookies}
            >
              Accept all cookies
            </button>
            <button
              className="cookies__btns--settings"
              onClick={handleOpenModal}
            >
              Customize settings
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <ModalCookies
          btnsText={{
            "show-more": "Show more",
            "show-less": "Show less",
          }}
          onClose={handleCloseModal}
          onAccept={handleAcceptCookies}
        />
      )}
    </>
  );
};

export default Cookies;
