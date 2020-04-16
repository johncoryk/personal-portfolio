import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
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
      <section>
        <h1 className={aboutStyles.aboutTitle}>About Me</h1>
        <p className={aboutStyles.aboutBody}>
          Hi there! My name is Cory and I'm a graphic designer turned front end
          web developer. I've always had a creative itch to scratch and design
          and development is the perfect 'peanut butter and jelly' sorta combo
          I've been searching for my entire life. I use things like React, Sass,
          Tailwind CSS, Node, Gatsby, and a few other things to build fun and
          nice looking websites for myself and others! If you'd like to get to
          know more about me or think we'd make a great fit working together,
          give me a
          <a href={`mailto:${data.site.siteMetadata.emailAddress}`}> hollar!</a>{" "}
          (oh yeah, I'm a southerner)
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage
