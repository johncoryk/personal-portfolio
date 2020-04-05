import React from "react"

import projectStyles from "../components/modules/projects.module.scss"

const Projects = () => {
  return (
    <section>
      <h3>
        <span className={projectStyles.things}>Things</span> I've made
      </h3>
      <hr />
      <div className={projectStyles.projectsFlex}>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
        <h1>THIS IS ONE</h1>
      </div>
    </section>
  )
}

export default Projects
