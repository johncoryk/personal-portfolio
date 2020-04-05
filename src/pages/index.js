import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Stack from "../components/stack"
import Projects from "../components/projects"
import homeStyles from "../components/modules/home.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h2 className={homeStyles.homeParagraph}>
        Hi friends, my name is Cory. I'm a front-end developer and graphic
        designer. I create websites with different tools to make people happy!
      </h2>
      <Projects />
      <Stack />
    </Layout>
  )
}

export default IndexPage
