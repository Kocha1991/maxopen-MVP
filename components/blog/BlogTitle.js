import React from "react";

export const BlogTitle = ({
  textOnBg,
  title,
  descr,
  textColor
}) => {
  return (
    <div className='blog-title'>
      <div className="maxOpen-bg-text">
        {textOnBg}
      </div>
      <h2 className={`maxOpen-services__title ${textColor}`}>
        {title}
      </h2>
      <h3 className={`maxOpen-services__descr`}>
        {descr}
      </h3>
    </div>
  );
};
