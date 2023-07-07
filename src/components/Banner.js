import { Container, Row, Col, Stack } from "react-bootstrap";
import banner from "../assets/img/banner.png";
import me from "../assets/img/me.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Typewriter from "react-typewriter-effect";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const Banner = () => {
  const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
  };
  
  return (
    <section className="banner">
      <motion.div>
        <Container>
          <Row>
            <Col>
              <img className="mainbannerimg" src={banner} alt="banneralt" />
            </Col>
          </Row>
          <Row>
            <Col className="nameandlastname" md={4}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typewriter text="Sameh" delay={100} />
                <br></br>
                <Typewriter text="Ben Amor," delay={100} />
              </motion.div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col sm={4} className="introduction">
              <Typewriter
                text="Based in Nabeul, Tunisia, I am a full stack web developer with a passion for creating beautiful and functional websites and applications."
                delay={10}
              />

              <br></br>
              <button className="Diffbutt">
                <span>Let's talk</span>
              </button>
            </Col>
            <Col md={4}>
              <motion.img
                src={me}
                alt="Image"
                className="myphoto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
                whileHover={{ filter: "blur(3px)", opacity: 0.8 }}
                whileTap={{ scale: 0.9 }}
              />
              <img hidden className="myphoto" src={me} alt="me" />
            </Col>
          </Row>

          <Stack className="currently" /* gap is space between items*/>
            <div className="p-2 ">
              I am currently a fourth-year student at{" "}
              <Popup
                trigger={(open) => (
                    <span class="underscore-word">Esprit</span>
                )}
                position="top center"
                on={['hover', 'focus']}
              >
                <span className="shouldbegood"> Ecole Sup Privée d'Ingénierie et de Technologies. </span>
              </Popup>
              
              <span className="theamountofdetail">*</span>.
            </div>
            <div className="p-2">
              I have +8 years of experience working with Photoshop.
            </div>
            <div className="p-2">
              I have +6 years of experience making music.
            </div>
          </Stack>
        </Container>
      </motion.div>
    </section>
  );
};
