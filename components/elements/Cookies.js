import React from "react";

const Cookies = () => {
  return (
    <div className='cookies'>
      <div className='cookies__top'>
        <img 
          src="/assets/imgs/template/icons/3d-rendering-cookie-with-chocolate 1.png" 
          alt="" 
          className='cookies__icon'
        />
        <h2 className='cookies__title'>
          Cookies
        </h2>
      </div>
      <div className='cookies__text'>
        This website uses cookies to ensure you get the best experience on our website. For more information read our <a href="#">privacy policy.</a>
      </div>
      <div className='cookies__btns'>
        <button className='btn btn-brand-4-medium hover-up'>Accept all cookies</button>
        <button className='cookies__btns--settings'>Customize settings</button>
      </div>
    </div>
  );
};

export default Cookies;
