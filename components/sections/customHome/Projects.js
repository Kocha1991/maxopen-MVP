'use client';
import React, { useState } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useTranslation } from 'react-i18next';

export const Projects = ({ data, isLoading }) => {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const projects = Array.isArray(data) ? data : [];
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <div className="maxOpen-projects" id="projects">
      <div className="container">
        <BlogTitle 
          textOnBg={t("ProjectsTextOnBg")}
          title={t("ProjectsTitle")}
          descr={t("ProjectsSubtitle")}
        />
        <div className="row mt-65">
          {projects.length > 0 ? (
            visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                img={project['image-of-project']?.thumb}
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
            <span>{showAllProjects ? t("buttons.ShowLess") : t("buttons.LoadMore")}</span>
          </button>
        )}
      </div>
    </div>
  );
};
