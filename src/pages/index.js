import * as React from "react"
import {Container} from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBlock from '../components/AboutBlock'
import Services from '../components/blocks/Services'

// Custom Bootswatch css
import '../css/bootstrap.min.css'


const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  const {title} = data.site.siteMetadata.title
  const {subtitle} = data.site.siteMetadata.subtitle
  
  return (
  <Layout title={title} subtitle={subtitle}>
    <Seo title={title} />
    <AboutBlock />
    <Services />
  </Layout>
)}

export default IndexPage
