import React from 'react';
import ModalCalendar from './ModalCalendar';
import ModalGames from './ModalGames';

export default function ModalManager({ isOpen, modalType, modalData, onClose }) {
  if (!isOpen) return null;

  switch (modalType) {
    case 'calendar':
      return <ModalCalendar isOpen={isOpen} onClose={onClose} />;
    case 'game':
      return <ModalGames isOpen={isOpen} onClose={onClose} videoSrc={modalData} />;
    default:
      return null;
  }
}
