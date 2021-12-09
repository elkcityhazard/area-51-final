import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Offcanvas, Nav, NavDropdown, FormControl, Button, Navbar, Form } from 'react-bootstrap'
import { FaRegCreditCard } from 'react-icons/fa'

import data from '../constants/menu'
import TopBar from './TopBar'

const alienGreen = {
  color: "#d5df9f"
}

const logoContainer = {
  borderBottom: '1px solid #d5df9f'
}

const NavBar = ({title}) => {
    return (
      <>
          <TopBar className="ms-auto" />
        <Navbar bg="dark" variant="dark" expand={false} className="pe-3">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className="mx-auto p-1" style={logoContainer}>
      <span>Area</span> <span style={alienGreen}>51</span> <span>Paintball</span>
      </Navbar.Brand>
    <Nav className="flex-row">
    {data.map((item) => {
            return <Button size='sm' variant='dark' bg='dark' as={Link} key={item.id} to={item.url} title={item.title} className="d-none d-lg-inline-block" >{item.title}</Button>
          })}
          </Nav>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          {data.map((item) => {
            return <Nav.Link as={Link} key={item.id} to={item.url} title={item.title}>{item.title}</Nav.Link>
          })}
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</>
    )
}

export default NavBar


