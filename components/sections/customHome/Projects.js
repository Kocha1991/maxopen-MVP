'use client';
import React, { useState } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { useTranslation } from 'react-i18next';

export const Projects = ({
  items,
  btnsText
}) => {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);


  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = Array.isArray(items) ? (showAllProjects ? items : items.slice(0, 6)) : [];

  return (
    <>
      <div className="row">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              img={project['img']?.thumb}
              title={project['name-project']}
              descr={project['description']}
              link={project['link-project']}
            />
          ))
        ) : (
          <p>{t("notification.InformationMissing")}</p>
        )}
      </div>

      {Array.isArray(items) && items.length > 6 && (
        <button 
          className="btn btn-brand-4-medium hover-up mt-4" 
          onClick={toggleProjectsView}
        >
          <span>{showAllProjects ? btnsText["show-less"] : btnsText["show-more"]}</span>
        </button>
      )}
    </>
  );
};
