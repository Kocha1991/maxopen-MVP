'use client';
import React, { useState } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import { useFetchData } from '@/components/customHooks/useFetchData';

export const Projects = () => {
  const { language } = useLanguage();
  const { data: projects, loading, error } = useFetchData("cases", language);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  const translations = {
    en: {
      textOnBg:'Our Portfolio',
      title:'Explore our projects to witness our expertise in action',
      descr:"Our portfolio showcases successful solutions crafted for businesses of all sizes. We help clients grow, enhance efficiency, and reach new heights. Review our work and see what we can do for you.",
      showLess:"Show less",
      loadMore:"Load more"
    },
    uk: {
      textOnBg: 'Наше портфоліо',
      title: 'Ознайомтеся з нашими проектами, щоб побачити нашу експертизу в дії',
      descr: 'Наше портфоліо демонструє успішні рішення, створені для бізнесу будь-якого розміру. Ми допомагаємо клієнтам зростати, підвищувати ефективність та досягати нових висот. Ознайомтеся з нашою роботою та переконайтеся, що ми можемо зробити для вас.',
      showLess: "Показати менше",
      loadMore: "Завантажити більше"
    },
    ru_UA: {
      textOnBg: 'Наше портфолио',
      title: 'Ознакомьтесь с нашими проектами, чтобы увидеть нашу экспертизу в действии',
      descr: 'Наше портфолио демонстрирует успешные решения, созданные для бизнеса любого размера. Мы помогаем клиентам расти, повышать эффективность и достигать новых высот. Ознакомьтесь с нашей работой и убедитесь, что мы можем сделать для вас.',
      showLess: "Показать меньше",
      loadMore: "Загрузить больше"
    },
  };
  const { textOnBg, title, descr, loadMore, showLess } = translations[language] || translations.en;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div className="maxOpen-projects" id="projects">
      <div className="container">
        <BlogTitle 
          textOnBg={textOnBg}
          title={title}
          descr={descr}
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
            <p>No available projects.</p>
          )}
        </div>
        {projects.length > 6 && (
          <button 
            className="btn btn-brand-4-medium hover-up mt-4" 
            onClick={toggleProjectsView}
          >
            <span>{showAllProjects ? showLess : loadMore}</span>
          </button>
        )}
      </div>
    </div>
  );
};
