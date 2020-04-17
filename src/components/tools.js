import React from "react"

import toolStyles from "./modules/tools.module.scss"
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from "react-icons/di"

const Tools = () => {
  return (
    <section>
      <p className={toolStyles.toolsHeader}>tools i use</p>
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
