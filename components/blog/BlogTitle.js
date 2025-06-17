import React from "react";

export const BlogTitle = ({
  teaser,
  title,
  subtitle,
  textColor
}) => {
  return (
    <div className='blog-title'>
      <div className="maxOpen-bg-text">
        {teaser}
      </div>
      <h2 className={`maxOpen-services__title ${textColor}`}>
        {title}
      </h2>
      <h3 className={`maxOpen-services__descr`}>
        {subtitle}
      </h3>
    </div>
  );
};
