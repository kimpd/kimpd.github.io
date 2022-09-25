import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function ProjectCard({ project }) {
  const icon = getImage(project.frontmatter.icon)

  return (
    <article class="post post-card" key={project.id}>
      <div class="post-inside">
        <div class="project-icon">
          <GatsbyImage image={icon} />
          <div class="project-date">
            {project.frontmatter.date}
          </div>
        </div>
        <div class="project-info">
          <div className="project-header">
            <div class="project-title">
              <Link to={`/project/${project.slug}`}>
                {project.frontmatter.title}
              </Link>
            </div>
            <div className="project-subject">
              {project.frontmatter.subject}
            </div>
          </div>
          <div class="project-tech">
            <p>적용기술 : {project.frontmatter.dev_tech}</p>
          </div>
          <div class="project-os">
            <p>운영환경 : {project.frontmatter.dev_os}</p>
          </div>
          <div class="project-period">
            <p>개발기간 : {project.frontmatter.dev_period}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;
