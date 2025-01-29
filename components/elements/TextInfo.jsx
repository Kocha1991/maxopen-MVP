import React from "react";

const TextInfo = ({
  title,
  descr,
  textOnBg
}) => {
  return (
    <section className='about-us__reality'>
      <div className="container">
        <h2 className='maxOpen-services__title'>
          {title}
        </h2>
        <h3 className='maxOpen-services__descr'>
          {descr}
        </h3>
        {textOnBg && (
          <div className='about-us__reality_text'>
            {textOnBg}
          </div>
        )}
      </div>
    </section>
  );
};

export default TextInfo;
