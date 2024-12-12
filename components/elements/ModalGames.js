import React from 'react';

export default function ModalGames({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-content__close" onClick={onClose}>
          <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
        </button>
        <video
          className="modal-video"
          src={videoSrc}
          controls
          autoPlay
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
