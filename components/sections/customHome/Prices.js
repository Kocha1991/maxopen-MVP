import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { PriceItem } from './PriceItem';

const Prices = () => {
  return (
    <section className='maxOpen__prices'>
      <div className="container">
        <BlogTitle 
          textOnBg='Solutions for You'
          title='Your Goal — Our Solutions'
          descr="Browse our services and find the perfect match for your project. We offer tailored solutions for every need, whether it's website development, mobile app creation, or business process optimization. Together, we'll achieve results that exceed your expectations"
        />
        <div className='maxOpen__prices-items'>
          <PriceItem 
            title="Website design - From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
          />
          <PriceItem 
            title="Mobile applications- From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
          />
          <PriceItem 
            title="ERP-system - From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
