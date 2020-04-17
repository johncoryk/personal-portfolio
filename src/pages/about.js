import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
import AboutData from "../components/aboutData"
import aboutStyles from "../components/modules/about.module.scss"

const AboutPage = () => {
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
    <Layout>
      <Head title="About" />
      <p className={aboutStyles.aboutHeader}>About Me</p>
      <AboutData email={data.site.siteMetadata.emailAddress} />
    </Layout>
  )
}

export default AboutPage
