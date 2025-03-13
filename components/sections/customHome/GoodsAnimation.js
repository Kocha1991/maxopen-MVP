import React from "react";
import LogoTicker from '@/components/elements/LogoTicker';
<<<<<<< HEAD
import { useFetchData } from '@/components/customHooks/useFetchData';
=======
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
import Loading from '@/components/elements/Loading';

const GoodsAnimation = ({ text }) => {

<<<<<<< HEAD
  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  

  const items = logos.length > 0 && logos[0].logo ? logos[0].logo : [];
=======
  const logos = Array.isArray(data) && data.length > 0 && data[0].logo ? data[0].logo : [];
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-logos-2 custom-logos">
      <div className='box-logos-custom'>
        <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
          {text && <div className='carouselTickerLogos2__text'>{text}</div>}
<<<<<<< HEAD
          {logosLoading ? (
            <Loading />
          ) : (
            <LogoTicker data={items} />
          )}
=======
          {isLoading ? <Loading/> : <LogoTicker items={logos} /> }
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
        </div>
      </div>
    </section>
  );
};

export default GoodsAnimation;