'use client';
import React, { useState, useEffect } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/cases', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const language = navigator.language || navigator.userLanguage;
        const lang = (language.startsWith('uk') || language.startsWith('ru')) ? 'uk' : 'en';
        const filteredProjects = data.filter(project => project.locale === lang);
        if (Array.isArray(filteredProjects)) {
          setProjects(filteredProjects);
        } else {
          console.error('Дані не є масивом:', filteredProjects);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <div className="maxOpen-projects" id="projects">
      <div className="container">
        <BlogTitle 
          textOnBg="Our Portfolio"
          title="Explore our projects to witness our expertise in action"
          descr="Our portfolio showcases successful solutions crafted for businesses of all sizes. We help clients grow, enhance efficiency, and reach new heights. Review our work and see what we can do for you."
        />
        <div className="row mt-65">
          {Array.isArray(projects) && projects.length > 0 ? (
            visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                img={project['image-of-project'].thumb}
                title={project['name-of-project']}
                descr={project['short-description']}
                link={project['link-to-project']}
              />
            ))
          ) : (
            <p>Немає доступних проектів</p>
          )}
        </div>
        {projects.length > 6 && (
          <button 
            className="btn btn-brand-4-medium hover-up mt-4" 
            onClick={toggleProjectsView}
          >
            <span>{showAllProjects ? 'Show less' : 'Load more'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
