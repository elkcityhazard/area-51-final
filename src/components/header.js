import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {Container, Row, Col} from 'react-bootstrap'

import styles from '../css/header.module.scss'

const Header = ({ siteTitle, siteSubTitle }) => (
  <Container fluid className={styles.hero}>
    <Row>
      <Col md={6}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <h2 className={styles.subtitle}>{siteSubTitle}</h2>
      </Col>
      <Col md={6}></Col>
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
