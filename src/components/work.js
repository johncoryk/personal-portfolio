import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import workStyles from "./modules/work.module.scss"

const Work = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "flix_img.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className={workStyles.workSection}>
      <h2 className={workStyles.workHeader}>My Work</h2>
      <div className={workStyles.rule}></div>
      <div className={workStyles.imageDiv}>
        <Img className={workStyles.image} fluid={image.sharp.fluid} />
        <div className={workStyles.workDesc}>
          <h2 className={workStyles.workTitle}>Flix</h2>
          <div className={workStyles.workLinks}>
            <a href="https://github.com/johncoryk/flix-app">
              <h3>/ code</h3>
            </a>
            <a href="https://flix-movie-app.netlify.com/?_ga=2.87307293.465753357.1586879206-2062776928.1584703844">
              <h3>+ demo</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
