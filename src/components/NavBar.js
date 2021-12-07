import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Offcanvas, Nav, NavDropdown, FormControl, Button, Navbar, Form } from 'react-bootstrap'

import data from '../constants/menu'

const NavBar = ({title}) => {
    return (
        <Navbar bg="dark" variant="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
    {data.map((item) => {
            return <Button size='sm' variant='dark' bg='dark' as={Link} key={item.id} to={item.url} title={item.title} className="d-none d-lg-inline-block">{item.title}</Button>
          })}
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
    )
}

export default NavBar


