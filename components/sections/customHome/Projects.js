'use client';
import React, { useState } from "react";
import { ProjectCard } from '@/components/elements/ProjectCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [showAllProjects, setShowAllProjects] = useState(false);

  const { data: projectsCard, loading: projectsCardLoading } = useFetchData("projects-card", language);
  const { data: projectsText, loading: projectsTextLoading } = useFetchData("projects-text", language, true);
  const loading= projectsCardLoading || projectsTextLoading;

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = Array.isArray(projectsCard) ? (showAllProjects ? projectsCard : projectsCard.slice(0, 6)) : [];

  return (
    <div className="maxOpen-projects" id="projects">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <BlogTitle 
              textOnBg={projectsText.teaser}
              title={projectsText.title}
              descr={projectsText.descr}
            />
            <div className="row mt-65">
              {visibleProjects.length > 0 ? (
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
                <p>{t("notification.InformationMissing")}</p>
              )}
            </div>

            {Array.isArray(projectsCard) && projectsCard.length > 6 && (
              <button 
                className="btn btn-brand-4-medium hover-up mt-4" 
                onClick={toggleProjectsView}
              >
                <span>{showAllProjects ? t("buttons.ShowLess") : t("buttons.LoadMore")}</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
