import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section className="content-container">
      <Header
        className="header-nav"
        siteTitle={data.site.siteMetadata?.title}
      />
      <main style={{ marginBottom: "2rem" }} className="content-container">
        {children}
      </main>
      <Footer className="footer" />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
