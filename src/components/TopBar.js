import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col} from 'react-bootstrap'
import {FaRegCreditCard, FaMoneyBill, FaCcPaypal, FaApplePay, FaGoogleWallet, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'

const TopBar = () => {
    return (
        <Container fluid>
            <Row className="flex-column flex-md-row align-items-center justify-content-between">
                <Col sm={12} md={6} className="text-center">
                <address className="d-inline-block m-1">
                <a href="https://www.google.com/maps/dir//area+51+paintball/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x881fe32c1c982593:0xf8bb784fd02c9001?sa=X&ved=2ahUKEwiZ-OfX2dD0AhW0lYkEHXRAA7oQ9Rd6BAhREAU" className="btn btn-small btn-outline-warning text-decoration-none m-3" target="_blank" rel="nofollow noreferrer" aria-label="address" title="area 51 paintball address">
                <FaMapMarkerAlt className="m-1 text-info" size={18} /> 3005 Westwood Rd NE, Mancelona, MI 49659
                </a>
                </address>
                </Col>
                <Col sm={12} md={6} className="text-center">
                <a href="tel:+12315776252" aria-label="phone number" className="btn btn-small btn-outline-warning m-3" title="Call Us Now"><FaPhoneAlt className="m-1 text-info" size={18} />(231) 577 6252</a>
                <FaRegCreditCard className="m-1 text-info" size={18} />
                <FaMoneyBill className="m-1 text-info" size={18} />
                <FaCcPaypal className="m-1 text-info" size={18}  />
                <FaApplePay className="m-1 text-info" size={18} />
                <FaGoogleWallet className="m-1 text-info" size={18} />
                </Col>
            </Row>
        </Container>
    )
}

export default TopBar
