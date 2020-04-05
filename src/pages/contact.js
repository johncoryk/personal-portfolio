import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>This is a page where you can find out how to contact me!</p>
      <p>
        Email me here <a href="mailto:coryk0789@gmail.com">johncoryk</a>
      </p>
    </Layout>
  )
}

export default ContactPage
