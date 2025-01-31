import React from "react";

export const SlideCard2 = ({ previewImage, title, text }) => {
  return (
    <div className="slide-card2">
      <img src={previewImage} alt={title} />
      <div className='slide-card2__wrapper'>
        <h2 className='text-30-bold '>{title}</h2>
        <h3 className='maxOpen-services__descr'>
          {text}
        </h3>
      </div>
    </div>
  );
};
