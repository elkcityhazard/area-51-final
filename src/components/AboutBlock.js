import React from 'react'
import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image';

import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const AboutBlock = () => {
    return (
        <section className="about-section bg-dark">
            <StaticImage
            src="../images/scattered-blobs.svg"
            className="about-section__waves d-none"
            loading="lazy"
            placeholder="dominantColor"
            />
            <Container fluid>
           <Row>
               <Col md={9} lg={6} className=" mx-auto p-4">
               <h3>The Best <strong>Paintball Center</strong> Serving  Antrim & Grand Traverse County</h3>
               <p className="fs-6">
               Area 51 Paintball Center is a <strong>paintball center</strong> serving the Northwest Lower Michigan area. We offer a wide variety of paintball packages, equipment and services. 
               </p>
               <p className="fs-6">
               We take pride in making our paintball center as inclusive as possible.  Whether you are a seasoned pro, or just getting started with paintball, you will find our staff and facilities to be friendly and professional.  
               </p>
               <p className="fs-6">
               We are located in the beautiful town of Mancelona, Michigan. Stop by for a visit and see why we are one of the fastest growing paintball facilities in the upper midwest. Located in the heart of the northwest lower Michigan and close to some of the best outdoor activities in the world. Come play paintball today!
               </p>
               <Button as={Link} className="btn btn-danger btn-large text-uppercase fw-bolder rounded-pill" to='/contact'>Call Us (231) 577 6252</Button>

               </Col>
               <Col md={6}>
               <StaticImage
               src="../images/paintball-woman-500x500.png"
               alt="A Woman Paintball Player"
               className="about-img d-none d-lg-block"
               loading="lazy"
               placeholder="blurred"
               layout="constrained"
               width="500"
               height="500"

               />
               </Col>
           </Row>
       </Container>
       
        </section>
    )
}

export default AboutBlock
