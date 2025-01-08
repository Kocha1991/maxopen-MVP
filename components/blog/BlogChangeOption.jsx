import React from "react";

const BlogChangeOption = () => {
  return (
    <div className='blog-change-option__wrapper'>
      <div className='blog-change-option__categories'>
        <button className='blog-change-option__categories-btn blog-change-option-active'>Empowering Businesses</button>
        <button className='blog-change-option__categories-btn'>Driving Innovation</button>
        <button className='blog-change-option__categories-btn'>Sustainable Solutions</button>
        <button className='blog-change-option__categories-btn'>Long-Term Partnerships</button>
        <button className='blog-change-option__categories-btn'>Achieving Excellence</button>
      </div>
      <div className='blog-change-option__bloc'>
        <img src="/assets/imgs/template/blog-option-1.png" alt="" />
        <div className='blog-change-option__text'>
          <h2 className='maxOpen__subtitle'>Empowering Growth and Success</h2>
          <h3 className='maxOpen-services__descr'>
            We help businesses unlock their potential with tailored, high-quality solutions. By addressing challenges and providing effective strategies, we enable companies to thrive, grow sustainably, and build a strong foundation for long-term success.
          </h3>
          <h2 className='text-18-bold'>Key Results:</h2>
          <ul>
            <li className='maxOpen-services__descr'>
              85% of businesses see significant growth within the first year
            </li>
            <li className='maxOpen-services__descr'>
              70% report a stronger competitive edge after implementing our solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
);
};

export default BlogChangeOption;
