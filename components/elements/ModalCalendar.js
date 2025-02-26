'use client';
import React, { useEffect, useState } from 'react';
import { useCalendly } from '../customHooks/useCalendly';
import { useTranslation } from 'react-i18next';

// https://calendly.com/maxopenstudio/30min?embed_domain=maxopen.com.ua&embed_type=Inline
// https://calendly.com/maxopenstudio
export default function ModalCalendar({ isOpen, onClose }) {
  useCalendly('.calendly-inline-widget', 'https://calendly.com/maxopenstudio');
  const [contacts, setContacts] = useState([]);
  const { t } = useTranslation();
  

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/modal-contacts',
          {
            headers: {
              Authorization: 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-calendar">
        <button className="modal-content__close" onClick={onClose}>
          <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
        </button>
        <div className="calendar__wrapper">
          <div className="calendly-inline-widget" style={{ width: '100%', height: 'auto'}}></div>
          <div className="calendar-page__footer">
            <div className="calendar-page__text">
              <h2 className="calendar-page__footer-title">{t("CalendarHeader")}</h2>
              <h3 className="calendar-page__footer-descr">
                {t("CalendarSubheader")}
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
