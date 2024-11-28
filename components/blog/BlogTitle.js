import React from "react";

export const BlogTitle = ({
  textOnBg,
  title,
  descr,
}) => {
  return (
    <>
      <div className='maxOpen-bg-text'>
        {textOnBg}
      </div>
      <h2 className='maxOpen-services__title'>
        {title}
      </h2>
      <h3 className='maxOpen-services__descr'>
        {descr}
      </h3>
    </>
  );
};
