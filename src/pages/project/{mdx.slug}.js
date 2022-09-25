import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

function ProjectPost({ data }) {
  const image = getImage(data.mdx.frontmatter.image)

  return (
    <Layout pageTitle="Project">
      <Seo title="Project" />
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.title}
        class="post-image"
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

// 이미 각 mdx 파일에 대한 id와 같은 속성들은 만들어져 있다.
// http://localhost:8000/project/first <- sulg를 이용한 요청시,
// first mdx 파일의 id를 현재 템플릿 페이지에 객체값으로 제공하는 방식.
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        category
        title
        subject
        date(formatString: "YYYY년 MM월")
        dev_period
        dev_os
        dev_tech
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default ProjectPost;
