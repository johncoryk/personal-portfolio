import React from "react"

import toolStyles from "./modules/tools.module.scss"
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from "react-icons/Di"

const Tools = () => {
  return (
    <section className={toolStyles.toolsContainer}>
      <div className={toolStyles.toolTitleBg}>
        <h2 className={toolStyles.toolHeader}>Tools I Use:</h2>
      </div>
      <div className={toolStyles.iconsDiv}>
        <DiHtml5 className={toolStyles.toolIcons} />
        <DiJavascript1 className={toolStyles.toolIcons} />
        <DiReact className={toolStyles.toolIcons} />
        <DiSass className={toolStyles.toolIcons} />
        <DiNodejsSmall className={toolStyles.toolIcons} />
      </div>
    </section>
  )
}

export default Tools
