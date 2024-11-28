"use client";
import React, { useState } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import Link from 'next/link';

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Кількість видимих елементів
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className='maxOpen-projects'>
      <div className='container'>
        <BlogTitle 
          textOnBg='Our Portfolio'
          title='Explore our projects to witness our expertise in action'
          descr='Our portfolio showcases successful solutions crafted for businesses of all sizes. We help clients grow, enhance efficiency, and reach new heights. Review our work and see what we can do for you.'
        />
        <div className="row mt-65">
            <ProjectCard 
              img='/assets/imgs/template/project1.jpg'
              title="Med Expert"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
            <ProjectCard 
              img='/assets/imgs/template/project2.jpg'
              title="Impero barbers"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
            <ProjectCard 
              img='/assets/imgs/template/project3.jpg'
              title="Nova mobile"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
            <ProjectCard 
              img='/assets/imgs/template/project4.jpg'
              title="Expert"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
            <ProjectCard 
              img='/assets/imgs/template/project5.jpg'
              title="Carpaccio"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
            <ProjectCard 
              img='/assets/imgs/template/project6.jpg'
              title="Chromatelle"
              descr="Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa"
            />
        </div>
        <Link className="btn btn-brand-4-medium hover-up" href="#">
          Load more
        </Link>
      </div>
    </div>
  );
};
