'use client';
import React from 'react';
import HeaderLayout from '@/components/layout/header/Layout';
import PageBanner from '@/components/elements/PageBanner';
import { useTranslation } from 'react-i18next';
import BlogCardCustom from '@/components/blog/BlogCardCustom';
import Loading from '@/components/elements/Loading';
import { useFetchData } from '@/components/customHooks/useFetchData';

export default function Article({ params }) {
  const { i18n } = useTranslation();
  const { language } = i18n;

  // Дані самої статті
  const { data: articles, loading: articleLoading } = useFetchData('article');
  // Дані для карток блогу
  const { data: blogPosts, loading: blogPostsLoading } = useFetchData('blog-card', language);
  // Текст кнопок
  const { data: btnsText, loading: btnsLoading } = useFetchData('buttons-text', language, true);
  const btnText = btnsText?.['learn-more'] || 'Learn more';

  // Знаходимо поточну статтю за slug
  const article = Array.isArray(articles)
    ? articles.find(item => item.slug === params.slug)
    : null;

  if (articleLoading || blogPostsLoading || btnsLoading) {
    return <Loading />;
  }

  if (!article) {
    return <p>Article not found.</p>;
  }

  // Рандомізатор для вибірки двох елементів
  const getRandom = (arr, count) => {
    const copy = [...arr].sort(() => 0.5 - Math.random());
    return copy.slice(0, count);
  };

  // Відфільтровуємо всі крім поточної статті
  const filtered = Array.isArray(blogPosts)
    ? blogPosts.filter(post => post.slug !== article.slug)
    : [];

  // Беремо не більше двох рандомних
  const relatedArticles = getRandom(filtered, 2);

  const articleHtml = article[`article-${language}`] || article['article-en'];

  return (
    <div className='article'>
      <HeaderLayout useCustomHeader footerStyle='customFooter' logoWhite>
        <PageBanner bunnerBg={article['banner-img']?.full_url || ''} />

        <div className='container'>
          <div className='article__wrapper'>

            {/* Ліва колонка — вміст статті */}
            <div className='article__left'>
              <div className='article__header'>
                <div className='article__categorie'>{article.categorie}</div>
                <span>{new Date(article.data).toLocaleDateString()}</span>
              </div>
              <div className='article__content'>
                <h2 className='text-48-semibold mb-20'>{article.title}</h2>
                <p className='text-lg mb-40'>{article.description}</p>
                <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
                {article.image && <img src={article.image} alt={article.title} />}
              </div>
            </div>

            {/* Права колонка — максимум 2 картки, крім поточної */}
            <div className='article__right'>
              <h2 className='text-30-bold mb-40'>Related Articles</h2>
              <div className='article__cards'>
                {relatedArticles.length > 0 ? (
                  relatedArticles.map(item => (
                    <div className="" key={item.id}>
                      <BlogCardCustom item={item} btnText={btnText} />
                    </div>
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
}
