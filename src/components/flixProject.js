import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import projectStyles from "./modules/projects.module.scss"

const FlixProject = () => {
  const vinoPic = useStaticQuery(graphql`
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
    <div className={projectStyles.imageDiv}>
      <Img className={projectStyles.image} fluid={vinoPic.image.sharp.fluid} />
      <div className={projectStyles.projectDesc}>
        <h2 className={projectStyles.projectTitle}>Flix</h2>
        <div className={projectStyles.projectLinks}>
          <a href="https://github.com/johncoryk/flix-app">
            <p>/ code</p>
          </a>
          <a href="https://flix-movie-app.netlify.com/?_ga=2.87307293.465753357.1586879206-2062776928.1584703844">
            <p>+ demo</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FlixProject
