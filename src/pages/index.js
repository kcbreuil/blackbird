import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="wrapper">
      <div className="neon-wrapper">
        <span className="txt">New Site Coming Soon</span>
        <span class="gradient"></span>
        <span class="dodge"></span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
