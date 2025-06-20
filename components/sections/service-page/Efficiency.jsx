'use client';
import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';

const Efficiency = ({teaser, title, subtitle, data}) => {
  
  return (
    <div className='efficiency'>
      <div className="container">
        <div className='efficiency__wrapper'>
          <BlogTitle 
            teaser={teaser}
            title={title}
            subtitle={subtitle}
          />
          <div className='efficiency__block'>
            {data?.map((item, index) => (
              <div 
                key={index} 
                className='efficiency__info'
                dangerouslySetInnerHTML={{ __html: item["text-info"] }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
