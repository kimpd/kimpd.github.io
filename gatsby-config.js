module.exports = {
  siteMetadata: {
    title: `KimPD's Workshop`,
    description: `KimPD's Projects, DevLog.`,
    author: `KimPD`,
    siteUrl: `https://kimpd.net/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/content/Project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devlog`,
        path: `${__dirname}/src/content/DevLog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kimpd-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-modal-routing`,
    // module.exports = {
    //   plugins: [
    //     {
    //       resolve: `gatsby-plugin-modal-routing`,
    //       options: {
    //         // A selector to set react-modal's app root to, default is `#___gatsby`
    //         // See http://reactcommunity.org/react-modal/accessibility/#app-element
    //         appElement: '#___gatsby',
    
    //         // Object of props that will be passed to the react-modal container
    //         // See http://reactcommunity.org/react-modal/#usage
    //         modalProps: { },
    //       }
    //     }
    //   ]
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
