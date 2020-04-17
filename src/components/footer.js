import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "../components/modules/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubUrl
          name
        }
      }
    }
  `)

  return (
    <footer>
      <p className={footerStyles.footerContent}>
        Made with{" "}
        <a className={footerStyles.gatsbyLink} href="http://gatsbyjs.org">
          Gatsby
        </a>{" "}
        & lots of coffee by
        <a
          className={footerStyles.coryLink}
          href={data.site.siteMetadata.githubUrl}
        >
          {" "}
          {data.site.siteMetadata.name}
        </a>
        , © 2020
      </p>
    </footer>
  )
}

export default Footer
