import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion, useViewportScroll  } from "framer-motion";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/logo2.svg';
export const NavBar = () => {
    const { scrollY } = useViewportScroll();
    const [activeLink, setActiveLink] = useState('home'); // home, skills, projects, contact
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll); 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {

        setActiveLink(value);

    }

  return (
    
    <Navbar fixed="top"  expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <div className="image-stack">
            <img src={logo} className="img1"/>
            <img src={logo2} className="img2"/>

            </div>
        </Navbar.Brand>
        <Navbar.Text className="whoami col">
            samehbenamor<span className="blinking-cursor"></span>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'>

        </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col ">
          
            <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link ' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link ' : 'navbar-link '} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>
            <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link ' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>Service</Nav.Link>
           
          </Nav>
          <span className="navbar-text ">
          <motion.button
      style={{
        opacity: scrollY.get() > 50 ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}
    >
          <span>Contact me</span>
            </motion.button>
        </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
