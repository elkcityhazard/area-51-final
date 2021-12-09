import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'

import {Container, Row, Col, Button} from 'react-bootstrap'


const Header = ({ siteTitle, siteSubTitle }) => (
  <Container fluid className="hero px-0 mx-auto">
    <StaticImage
        className="hero-bg"
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt="background image"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../images/paintball-in-the-woods.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
    <Row className="hero-container">
      <Col md={6} className="col mx-auto text-center">
        <h1 id="title" className="display-1">{siteTitle}</h1>
        <h2 id="subtitle" className="display-4">{siteSubTitle}</h2>
        <p className="lead fs-4">Where humans play the game, but the experience is out of this world.  Paintball center serving Mancelona, Michigan and surrounding areas.  Area 51 Paintball is Northern Michigan's premier outdoor paintball center.</p>
        <Button as={Link} className="btn btn-danger btn-large text-uppercase fw-bolder rounded-pill" to='/contact'>Call Us (231) 577 6252</Button>
      </Col>
    </Row>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
