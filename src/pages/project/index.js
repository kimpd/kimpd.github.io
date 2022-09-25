import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProjectCard from '../../components/ProjectCard';

function ProjectPage({ data }) {
  console.log("projects", data)

  return (
    <Layout pageTitle="Project">
      <Seo title="Project" />
      <header class="post-header inner-sm">
        <h1 class="post-title underline">🚀 Project</h1>
        <div class="post-subtitle inner-sm">핸드메이드 개인수공업 디지털 창작물.</div>
      </header>
      <div class="post-feed">
        <div class="post-feed-inside">
          {
            data.allMdx.nodes.map(node => (
              <ProjectCard project={node} />
            ))
          }
        </div>
      </div>
    </Layout>
  ) 
}

export const query = graphql`
  query ProjectQuery {
    allMdx(
      filter: {frontmatter: {category: {eq: "project"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          category
          title
          subject
          date(formatString: "YYYY년 MM월")
          dev_period
          dev_os
          dev_tech
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }  
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt(truncate: true)
      }
    }
  }
`



export default ProjectPage;
