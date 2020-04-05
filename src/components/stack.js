import React from "react"

import stackStyles from "./modules/stack.module.scss"
import {
  DiJsBadge,
  DiHtml5,
  DiSass,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
} from "react-icons/Di"
import { Icon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby"
import graphqlIcon from "@iconify/icons-simple-icons/graphql"
import tailwindcssIcon from "@iconify/icons-simple-icons/tailwindcss"

const Stack = () => {
  return (
    <section>
      <h3>
        <span className={stackStyles.tools}>Tools</span> I like to use
      </h3>
      <hr />
      <div className={stackStyles.languagesFlex}>
        <DiHtml5 className={stackStyles.langIcons} />
        <DiSass className={stackStyles.langIcons} />
        <DiBootstrap className={stackStyles.langIcons} />
        <Icon icon={tailwindcssIcon} className={stackStyles.langIcons} />
        <DiJsBadge className={stackStyles.langIcons} />
        <DiReact className={stackStyles.langIcons} />
        <Icon icon={gatsbyIcon} className={stackStyles.langIcons} />
        <Icon icon={graphqlIcon} className={stackStyles.langIcons} />
        <DiNodejsSmall className={stackStyles.langIcons} />
      </div>
    </section>
  )
}

export default Stack
