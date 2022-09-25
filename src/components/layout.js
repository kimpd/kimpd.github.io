/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./Layout.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div id="page" class="site style-overflow palette-blue">
      <Header pageTitle={pageTitle} />
      <div id="content" class="site-content">
        <div class="inner">
          <main>{children}</main>
          <footer id="colophon" class="site-footer inner-sm">
            <p class="site-info">
              <span class="copyright">
                &copy; {new Date().getFullYear()}, KimPD. All rights reserved.
                Built with {`   `} <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
              </span>
            </p>
            <a id="to-top" class="to-top" href="#page">
              <span class="icon-arrow-up" aria-hidden="true"></span>
              <span class="screen-reader-text">Back to top</span>
            </a>
          </footer>
        </div>
      </div>
    </div>
    {/* <script src="../../js/toggle-menu.js"></script> */}
    {/* <img src="../../img/KimPD.jpg" /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
