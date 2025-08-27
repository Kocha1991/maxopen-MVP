import React, { useEffect } from 'react';
// import ModalCalendar from './ModalCalendar';
import ModalGames from './ModalGames';
import CustomCalendar from './CustomCalendar';

export default function ModalManager({ isOpen, modalType, modalData, onClose }) {
  useEffect(() => {
    // Блокування/розблокування скролу при відкритті/закритті модалки
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Очищення стилів при демонтажі компонента
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  switch (modalType) {
    case 'calendar':
      return <CustomCalendar isOpen={isOpen} onClose={onClose} />;
    case 'game':
      return <ModalGames isOpen={isOpen} onClose={onClose} videoSrc={modalData} />;
    default:
      return null;
  }
}
