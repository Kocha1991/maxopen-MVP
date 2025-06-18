'use client';
import React from 'react';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import BlogCardCustom from '@/components/blog/BlogCardCustom';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';

const Article = ({ params }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { data: articles, loading: articleLoading } = useFetchData(`article`);

  const article = Array.isArray(articles)
    ? articles.find((item) => item.slug === params.slug)
    : null;

  if (articleLoading) {
    return <Loading />;
  }

  if (!article || Object.keys(article).length === 0) {
    return <p>Article not found.</p>;
  }

  const articleHtml = article[`article-${language}`] || article['article-en'];

  console.log(article["banner-img"])

  return (
    <div className='article'>
      <HeaderLayout useCustomHeader={true} footerStyle='customFooter' logoWhite>
        <PageBanner bunnerBg={article?.["banner-img"]?.full_url || ''} />
        <div className='container'>
          <div className='article__wrapper'>
            <div className='article__left'>
              <div className='article__header'>
                <div className='article__categorie'>{article.categorie}</div>
                <span>{new Date(article.data).toLocaleDateString()}</span>
              </div>
              <div className='article__content'>
                <h2 className='text-48-semibold mb-20'>{article.title}</h2>
                <p className='text-lg mb-40'>{article.description}</p>
                <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
                {article.image && (
                  <img src={article.image} alt={article.title} />
                )}
              </div>
            </div>
            <div className='article__right'>
              <h2 className='text-30-bold mb-40'>Related Articles</h2>
              <div className='article__cards'>
                {article.relatedArticles &&
                article.relatedArticles.length > 0 ? (
                  article.relatedArticles.map((related, index) => (
                    <BlogCardCustom key={index} article={related} />
                  ))
                ) : (
                  <p>No related articles found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </HeaderLayout>
    </div>
  );
};

export default Article;
