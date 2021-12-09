import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'
const block = {
    background: 'dark'
}

const Services = (block) => {
    return (
        <section className={
            block.background 
            ?
            `bg-${block.background}`
            : null
        }>
            <Container fluid>
                <h3 className="h3">Paintball Center Services</h3>
                <Row>
                    <Col>
                    <Card className="border-warning mb-3" style={{maxWidth: `20rem`}}>
                            <Card.header>
                                Header
                            </Card.header>
                            <Card.Body>
                            <h3 className="card-title">Warning card title</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Services
