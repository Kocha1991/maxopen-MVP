import React from "react";

const BoxNewsletter = ({
  title,
  descr,
  buttonText
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
              <input className="form-control" type="text" placeholder="Email address..." />
              <button className="btn btn-subscribe" type="submit">
                  {buttonText}
                  {/* <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                  </svg> */}
              </button>
          </form>
          <p className='newsletter-input-lable'>Your email is safe with us – just for project updates.</p>
      </div>
    </div>
  );
};

export default BoxNewsletter;
