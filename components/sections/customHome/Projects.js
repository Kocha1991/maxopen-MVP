'use client';
import React, { useState, useEffect } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import Link from 'next/link';

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Отримання даних з API з авторизацією
  useEffect(() => {
    fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/cases', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Отримуємо мову браузера
        const language = navigator.language || navigator.userLanguage;
        const lang = (language.startsWith('uk') || language.startsWith('ru')) ? 'uk' : 'en';
        // Фільтруємо проекти по мові
        const filteredProjects = data.filter(project => project.locale === lang);
        // Перевірка, чи є дані масивом
        if (Array.isArray(filteredProjects)) {
          setProjects(filteredProjects);
        } else {
          console.error('Дані не є масивом:', filteredProjects);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="maxOpen-projects" id="projects">
      <div className="container">
        <BlogTitle 
          textOnBg="Our Portfolio"
          title="Explore our projects to witness our expertise in action"
          descr="Our portfolio showcases successful solutions crafted for businesses of all sizes. We help clients grow, enhance efficiency, and reach new heights. Review our work and see what we can do for you."
        />
        <div className="row mt-65">
          {/* Перевірка наявності проектів та чи це масив */}
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
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
        <Link className="btn btn-brand-4-medium hover-up" href="#">
          <span>Load more</span>
        </Link>
      </div>
    </div>
  );
};
