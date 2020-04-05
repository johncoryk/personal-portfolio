import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaCodepen, FaTwitter, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import headerStyles from "../components/modules/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          codepenUrl
          githubUrl
          twitterUrl
          emailAddress
        }
      }
    }
  `)

  return (
    <header>
      <div className={headerStyles.headerFlex}>
        <h1>
          {/* <Link to="/" className={headerStyles.titleLink}>
            {window.location.href !== "localhost:8000/about"
              ? "Home"
              : data.site.siteMetadata.title}
          </Link> */}
          <Link to="/" className={headerStyles.titleLink}>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.nav}>
            <li>
              <Link
                to="/about"
                className={headerStyles.navLinks}
                activeClassName={headerStyles.active}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={headerStyles.navLinks}
                activeClassName={headerStyles.active}
              >
                Thoughts
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={headerStyles.navLinks}
                activeClassName={headerStyles.active}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={headerStyles.icons}>
        <a href={`${data.site.siteMetadata.twitterUrl}`}>
          <FaTwitter className={headerStyles.icon} />
        </a>
        <a href={`${data.site.siteMetadata.githubUrl}`}>
          <FaGithub className={headerStyles.icon} />
        </a>
        <a href={`${data.site.siteMetadata.codepenUrl}`}>
          <FaCodepen className={headerStyles.icon} />
        </a>
        <a href={`mailto:${data.site.siteMetadata.emailAddress}`}>
          <MdEmail className={headerStyles.icon} />
        </a>
      </nav>
    </header>
  )
}

export default Header
