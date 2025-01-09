import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { BlogTitle } from '@/components/blog/BlogTitle';

const BlogCardLinks = () => {
  const { t, i18n } = useTranslation();
  
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
              textOnBg={t("AboutUsTextOnBg")} 
              title={t("AboutUsWhoWeTitle")} 
              descr={t("AboutUsWhoWeDescr")} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCardLinks;
