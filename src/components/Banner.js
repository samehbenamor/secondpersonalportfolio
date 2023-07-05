import { Container, Row, Col, Stack } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import banner from '../assets/img/banner.png';
import me from '../assets/img/me.png';
import { useState, useEffect } from "react";

export const Banner = () => {
return (
    <section className="banner">
        <Container>
            <Row>
                <Col>
                    <img className="mainbannerimg" src={banner} alt="banneralt" />
                </Col>
            </Row>
            <Row>
                <Col className="nameandlastname" md={4}>
                    Sameh<br></br>Ben Amor,
                </Col>
                <Col >
                
                </Col>
                <Col>
                
                
                </Col>
            </Row>
            <Row>
                <Col sm={4}  className="introduction">
                Based in Nabeul, Tunisia, I am a full stack web developer with a passion for creating beautiful and functional websites and applications.
                <br></br>
                <button>
                   
                </button>
                </Col>
                <Col md={4}>
                <img className="myphoto" src={me} alt="me" />
                </Col>
                
            </Row>
           
            <Stack className="currently"/* gap is space between items*/>
                    <div className="p-2 ">
                    I am currently a fourth-year student at Esprit.
                    </div>
                    <div className="p-2">
                    I have +8 years of experience working with Photoshop.
                    </div>
                    <div className="p-2">
                    I have +6 years of experience making music.
                    </div>
                </Stack>
           
        </Container>
    </section>
)
}