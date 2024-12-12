
import { useState, useEffect } from 'react';

export default function ModalCalendar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Ініціалізація віджета Calendly, коли модалка відкривається
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/maxopenstudio',
            parentElement: document.querySelector('.calendly-inline-widget'),
            styles: { minWidth: '320px', height: '700px' },
          });
        }
      };

      // Очищаємо скрипт при закритті модалки
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null; // Якщо модалка не відкрита, не рендеримо її

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div
          className="calendly-inline-widget"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
}
