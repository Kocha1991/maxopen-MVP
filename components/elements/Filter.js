import React from "react";

const Filter = () => {
  return (
    <div className='filter mb-20'>
      <div className='filter-categories'>
        <button className='blog-change-option__categories-btn blog-change-option-active'>
          All
        </button>
        <button className='blog-change-option__categories-btn'>Websites</button>
        <button className='blog-change-option__categories-btn'>Applications</button>
        <button className='blog-change-option__categories-btn'>SEO promotion</button>
        <button className='blog-change-option__categories-btn'>Design</button>
      </div>
      <div className='filter-by'>
        <h3>Sort by:</h3>
      </div>
    </div>
  );
};

export default Filter;