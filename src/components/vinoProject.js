import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import projectStyles from "./modules/projects.module.scss"

const VinoProject = () => {
  const vinoPic = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "vino_img.jpg" }) {
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
      <a href="https://hello-vino.netlify.com/">
        <Img
          className={projectStyles.image}
          fluid={vinoPic.image.sharp.fluid}
        />
      </a>
      <div className={projectStyles.projectDesc}>
        <h2 className={projectStyles.projectTitle}>Hello Vino!</h2>
        <div className={projectStyles.projectLinks}>
          <a href="https://github.com/johncoryk/hello-vino">
            <p>/ code</p>
          </a>
          <a href="https://hello-vino.netlify.com/">
            <p>+ demo</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VinoProject
