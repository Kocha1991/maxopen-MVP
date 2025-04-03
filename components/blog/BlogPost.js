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

  const { data: blogPosts, loading: blogPostsLoading } = useFetchData("our-blog", language);
  let [currentPage, setCurrentPage] = useState(1);
  let showLimit = showItem;
  let paginationItem = 4;

  let [pagination, setPagination] = useState([]);
  let [limit, setLimit] = useState(showLimit);
  let [pages, setPages] = useState(0);

  useEffect(() => {
    if (Array.isArray(blogPosts)) {
      setPages(Math.ceil(blogPosts.length / limit));
      createPagination(blogPosts.length);
    }
  }, [limit, blogPosts]);

  const createPagination = (length) => {
    let arr = new Array(Math.ceil(length / limit)).fill().map((_, idx) => idx + 1);
    setPagination(arr);
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedPosts = Array.isArray(blogPosts) ? blogPosts.slice(startIndex, endIndex) : [];

  let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  let end = start + paginationItem;
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
              next={() => setCurrentPage(prev => prev + 1)}
              prev={() => setCurrentPage(prev => prev - 1)}
              handleActive={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}
