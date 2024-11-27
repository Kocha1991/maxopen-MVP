import React from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';

export const Projects = () => {
  return (
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
    </div>
  );
};
