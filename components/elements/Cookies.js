import React, { useState, useEffect } from "react";
import ModalCookies from "./ModalCookies";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Cookies = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const [showCookiesBar, setShowCookiesBar] = useState(false);
  const [modalSettings, setModalSettings] = useState(null); // null = модалка закрита

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

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
    console.log("document.cookie at start:", document.cookie);
    const accepted = getCookie("cookiesAccepted");
    console.log("accepted cookie value:", accepted);
    if (!accepted) {
      setShowCookiesBar(true);
    }
  }, []);

  // Accept all cookies з Cookies
  const handleAcceptAllFromCookies = () => {
    setCookie("cookiesAccepted", JSON.stringify({ necessary: true, targeting: true }), 365);
    setShowCookiesBar(false);
    setModalSettings(null);
  };

  // Перехід до ModalCookies з актуальними налаштуваннями
  const handleOpenCustomize = () => {
    const saved = getCookie("cookiesAccepted");
    let settings = { necessary: true, targeting: false };

    if (saved) {
      try {
        settings = JSON.parse(saved);
      } catch (e) {
        console.error("Invalid cookie JSON", e);
      }
    }

    setShowCookiesBar(false);
    setModalSettings(settings);
  };

  // Accept all cookies з ModalCookies
  const handleAcceptAllFromModal = () => {
    setCookie("cookiesAccepted", JSON.stringify({ necessary: true, targeting: true }), 365);
    setModalSettings(null);
    setShowCookiesBar(false);
  };

  // Save changes з ModalCookies → повернення до Cookies
  const handleSaveChanges = (settings) => {
    setCookie("cookiesAccepted", JSON.stringify(settings), 365);
    setModalSettings(null);
    setShowCookiesBar(true);
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
              onClick={handleAcceptAllFromCookies}
            >
              Accept all cookies
            </button>
            <button
              className="cookies__btns--settings"
              onClick={handleOpenCustomize}
            >
              Customize settings
            </button>
          </div>
        </div>
      )}

      {modalSettings && (
        <ModalCookies
          btnsText={{
            "show-more": "Show more",
            "show-less": "Show less",
          }}
          defaultSettings={modalSettings}
          onAcceptAll={handleAcceptAllFromModal}
          onSave={handleSaveChanges}
        />
      )}
    </>
  );
};

export default Cookies;
