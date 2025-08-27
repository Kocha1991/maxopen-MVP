'use client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '../customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function ModalCalendar({ isOpen, onClose }) {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [calendarUrl, setCalendarUrl] = useState('');  // Спочатку пустий URL календаря
  const [isLoading, setIsLoading] = useState(true);  // Стан для контролю лоадера

  // Отримуємо дані про календар з API
  useEffect(() => {
    const fetchCalendarData = async () => {
      if (!isOpen) return; // Не робимо запит, якщо модалка не відкрита

      try {
        const response = await fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/calendar', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP',
          },
        });
        const data = await response.json();
        if (data && data.length > 0) {
          setCalendarUrl(data[0]['calendar-link']);  // Зберігаємо URL календаря
        }
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      } finally {
        setIsLoading(false);  // Коли запит завершиться, приховуємо лоадер
      }
    };

    fetchCalendarData();
  }, [isOpen]); // Викликаємо тільки при відкритті модалки

  // Ініціалізуємо Calendly iframe, тільки коли URL існує
  useEffect(() => {
    if (calendarUrl && isOpen) {
      const calendlyWidget = document.querySelector('.calendly-inline-widget');
      if (calendlyWidget && calendarUrl) {
        // Створюємо Calendly iframe за допомогою отриманого URL
        calendlyWidget.innerHTML = `<iframe src="${calendarUrl}" width="100%" height="100%" frameborder="0"></iframe>`;
      }
    }
  }, [calendarUrl, isOpen]);

  const { data: contacts } = useFetchData('modal-contacts');
  const { data: text } = useFetchData('calendar', language, true);

  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.querySelector('.calendly-inline-widget iframe');
      if (iframe) {
        if (window.innerWidth >= 720) {
          iframe.style.marginTop = '-60px';
        } else {
          iframe.style.marginTop = '0px';
        }
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-calendar">
        <button className="modal-content__close" onClick={onClose}>
          <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
        </button>
        <div className="calendar__wrapper">
          {/* Показуємо лоадер, поки дані для календаря не завантажені */}
          {isLoading ? (
            <Loading />
          ) : (
            <div className="calendly-inline-widget"></div>
          )}
          <div className="calendar-page__footer">
            <div className="calendar-page__text">
              <h2 className="calendar-page__footer-title">{""}</h2>
              <h3 className="calendar-page__footer-descr">
                {""}
              </h3>
            </div>
            <div className="calendar-page__contacts">
              {contacts.map((item) => (
                <div key={item.id} className="calendar-page__contact-item">
                  <img src={item.icon.full_url} alt="icon" width="20" height="20" />
                  <span>{item.contact || item['e-mail']}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
