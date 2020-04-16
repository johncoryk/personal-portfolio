const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Cory Kelley",
    name: "Cory Kelley",
    nameTag: "johncoryk",
    twitterUrl: "http://twitter.com/johncoryk",
    githubUrl: "https://github.com/johncoryk",
    codepenUrl: "https://codepen.io/johncoryk",
    emailAddress: "coryk0789@gmail.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#333`,
        display: `standalone`,
        icon: `src/images/ck_fav.png`,
      },
    },
  ],
}
