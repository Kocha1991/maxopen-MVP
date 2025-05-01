import React from "react";
import Link from 'next/link';
import { BlogTitle } from '@/components/blog/BlogTitle';

const CardLinks = ({
  textOnBg,
  title,
  descr,
}) => {
  
  return (
    <section className='blog-card-links'>
      <div className="container">
        <div className='blog-card-links__wrapper'>
          <div className='blog-card-links__brand-bloc'>
            <Link href="#">
              <img src="/assets/imgs/template/Link-google.jpg" alt="google" className='blog-card-links__img'/>
            </Link>
            <Link href="#">
              <img src="/assets/imgs/template/Link-meta.jpg" alt="meta" className='blog-card-links__img'/>
            </Link>
            <Link href="#">
              <img src="/assets/imgs/template/Link-amazon.jpg" alt="amazon" className='blog-card-links__img'/>
            </Link>
            <Link href="#">
              <img src="/assets/imgs/template/Link-effie.jpg" alt="" className='blog-card-links__img'/>
            </Link>
            <Link href="#">
              <img src="/assets/imgs/template/Link-iab.jpg" alt="" className='blog-card-links__img'/>
            </Link>
            <Link href="#">
              <img src="/assets/imgs/template/Link-google-mark.jpg" alt="" className='blog-card-links__img'/>
            </Link>
          </div>
          <div className='blog-card-links__info-bloc'>
            <BlogTitle 
              textOnBg={textOnBg}
              title={title}
              descr={descr}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLinks;
