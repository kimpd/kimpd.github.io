import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function ProjectItem({ project }) {
  const image = getImage(project.frontmatter.hero_image)

  return (
    <article class="post post-card" key={project.id}>
      <div class="post-inside">
        <Link to={`/project/${project.slug}`}>
          <GatsbyImage
            image={image}
            alt={project.frontmatter.title}
          />
        </Link>
        <header class="post-header">
          <h2 class="post-title"><Link to={`/project/${project.slug}`}>{project.frontmatter.title}</Link></h2>
        </header>
        <div class="post-content">
          <p>{project.excerpt}</p>
        </div>
        <footer class="post-meta">
          <time class="published" datetime="2019-03-27 00:00">{project.frontmatter.date}</time>
        </footer>
      </div>
    </article>
  )
}

export default ProjectItem;
