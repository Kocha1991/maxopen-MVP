import React from "react";

const BoxNewsletter = ({
  title,
  descr,
  buttonText,
  placeholder,
  newsLetterText
}) => {
  return (
    <div className="box-newsletter box-newsletter--maxOpen">
      <div className="newsletter-left">
          <h2>{title}</h2>
          <p className="text-md neutral-600">
            {descr}
          </p>
      </div>
      <div className="newsletter-right">
          <form action="#">
              <input className="form-control" type="text" placeholder={placeholder} />
              <button className="btn btn-subscribe" type="submit">
                  {buttonText}
              </button>
          </form>
          <p className='newsletter-input-lable'>{newsLetterText}</p>
      </div>
    </div>
  );
};

export default BoxNewsletter;
