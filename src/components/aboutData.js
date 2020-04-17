import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import aboutStyles from "../components/modules/about.module.scss"

const AboutData = ({ email }) => {
  const coryEmily = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "em_cory.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className={aboutStyles.aboutFlexContainer}>
        <p className={aboutStyles.aboutBody}>
          Hi there! My name is Cory and I'm a graphic designer turned front end
          web developer. I've always had a creative itch to scratch and design
          and development is the perfect 'peanut butter and jelly' sorta combo
          I've been searching for my entire life. I use things like React, Sass,
          Tailwind CSS, Node, Gatsby, and a few other things to build fun and
          nice looking websites for myself and others! If you'd like to get to
          know more about me or think we'd make a great fit working together,
          give me a<a href={`mailto:${email}`}> hollar!</a> (oh yeah, I'm a
          southerner)
        </p>
        <div className={aboutStyles.aboutImgDiv}>
          <Img
            className={aboutStyles.aboutImage}
            fluid={coryEmily.image.sharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutData
