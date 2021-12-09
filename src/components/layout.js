/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from './NavBar'
import "./layout.css"
import "../css/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <>
      <NavBar title={data.site.siteMetadata.title} />
      <Header siteTitle={data.site.siteMetadata?.title || `Area 51 Paintball`} siteSubTitle={data.site.siteMetadata?.subtitle || `Say It With Paintball`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100vw',
          padding: `0 0`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
