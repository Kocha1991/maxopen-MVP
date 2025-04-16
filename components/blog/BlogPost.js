'use client';
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Pagination from "./Pagination";
import BlogCardCustom from './BlogCardCustom';
import Loading from '@/components/elements/Loading';

export default function BlogPost({ style, showItem, showPagination }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: blogPosts, loading: blogPostsLoading } = useFetchData("blog-cards", language);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(showItem);
  const [pagination, setPagination] = useState([]);
  const [pages, setPages] = useState(0);

  const paginationItem = 4;

  // 1. Оновлюємо limit тільки коли showItem змінюється
  useEffect(() => {
    setLimit(showItem);
  }, [showItem]);

  // 2. Формуємо сторінки тільки коли blogPosts або limit змінюється
  // useEffect(() => {
  //   if (Array.isArray(blogPosts)) {
  //     const totalPages = Math.ceil(blogPosts.length / limit);
  //     setPages(totalPages);

  //     const pagArray = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  //     setPagination(pagArray);

  //     // якщо поточна сторінка більша за кількість — скидуємо на 1
  //     if (currentPage > totalPages) {
  //       setCurrentPage(1);
  //     }
  //   }
  // }, [blogPosts, limit]);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const getPaginatedPosts = Array.isArray(blogPosts)
    ? blogPosts.slice(startIndex, endIndex)
    : [];

  const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  const end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  return (
    <>
      {blogPostsLoading ? (
        <Loading />
      ) : getPaginatedPosts.length === 0 ? (
        <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
      ) : (
        <>
          {getPaginatedPosts.map(item => (
            <div className="col-lg-3 col-md-4" key={item.id}>
              <BlogCardCustom item={item} />
            </div>
          ))}

          {showPagination && (
            <Pagination
              getPaginationGroup={getPaginationGroup}
              currentPage={currentPage}
              pages={pages}
              next={() => setCurrentPage(prev => Math.min(prev + 1, pages))}
              prev={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              handleActive={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}
