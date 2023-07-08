import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, GitHub, Instagram} from "@mui/icons-material";
export const Footer = () => {
    return (
<section className="Footer">
 <Container>
    <Row>
        <Col>
        <h1>
            Let's collaborate
        </h1>
        </Col>
    </Row>
    <Row>
        <Col>
        <button>
            <span>Get in touch</span>
        </button>
        </Col>
    </Row>
    <Row>
        <Col className="social-icons">
        <Facebook className="icon" fontSize="large" />
        <GitHub className="icon" fontSize="large" />
        <Instagram className="icon" fontSize="large" />
        </Col>
    </Row>
</Container>
</section>
    )
}