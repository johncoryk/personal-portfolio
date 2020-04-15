import React from "react"

import VinoProject from "../components/vinoProject"
import FlixProject from "../components/flixProject"
import workStyles from "./modules/work.module.scss"

const Work = () => {
  return (
    <section>
      <p className={workStyles.workHeader}>Some of my work</p>
      <FlixProject />
      <VinoProject />
    </section>
  )
}

export default Work
