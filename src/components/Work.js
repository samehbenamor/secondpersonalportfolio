import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ggaming from "../assets/img/ggaming.PNG";
import { motion } from "framer-motion";
import React from "react";
export const Work = () => {

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


  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const [backgroundColor, setBackgroundColor] = useState("#151515"); // Initial background color
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update the background color based on the scroll position
      if (scrollPosition > 450) {
        setBackgroundColor("#79a9d1"); // Change to a different color
      } else {
        setBackgroundColor("#151515"); // Reset to the initial color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [hoveredImage, setHoveredImage] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage("");
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    let cursorUpdateTimeout;

    const handleDelayedMouseMove = (event) => {
      clearTimeout(cursorUpdateTimeout);
      cursorUpdateTimeout = setTimeout(() => {
        handleMouseMove(event);
      }, 10000); // Adjust the delay (in milliseconds) as needed
    };

    window.addEventListener("mousemove", handleDelayedMouseMove);

    return () => {
      clearTimeout(cursorUpdateTimeout);
      window.removeEventListener("mousemove", handleDelayedMouseMove);
    };
  }, []);

  const renderCursorImage = () => {
    if (hoveredImage) {
      const cursorImageSize = { width: 500, height: 222 }; // Example image size
      const cursorImageOffsetX = -(cursorImageSize.width / 2);
      const cursorImageOffsetY = -(cursorImageSize.height / 2);

      const cursorImageStyle = {
        left: cursorPosition.x + cursorImageOffsetX,
        top: cursorPosition.y + cursorImageOffsetY,
      };
      return (
        <motion.div
        className="cursor-image"
        style={cursorImageStyle}
        initial={false}
        animate={
          isLoaded 
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask, ease: "easeIn"}
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask, ease: "easeIn" }
        }
        transition={{ duration: 0.5, delay: 0 }}
       
        
      >
      
        <img src={hoveredImage} alt="Cursor Image" onLoad={() => setIsLoaded(true)}/>
      </motion.div>
       
      );
    }
    return null;
  };

  return (
    <section
      className="skill"
      id="work"
      style={{ backgroundColor, transition: "background-color 1s ease-in-out" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <motion.div
              
              
              >
              <h2 className="past">Past Projects</h2>
              </motion.div>
              
              
              <Table className="projectsTable">
                <thead>
                  <tr
                    className="hoverable-tr"
                    onMouseEnter={() => handleMouseEnter(ggaming)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                  >
                    <td>2023</td>
                    <td>Ggaming</td>
                    <td>Studies project</td>
                    <td>Symfony, Javafx</td>
                    <td>Website, desktop app</td>
                  </tr>
                  <tr className="hoverable-tr">
                    <td>2022</td>
                    <td>GreenT</td>
                    <td>Studies project</td>
                    <td>Php</td>
                    <td>Website</td>
                  </tr>
                  <tr className="hoverable-tr">
                    <td>2022</td>
                    <td>Smart TechStore</td>
                    <td>Studies project</td>
                    <td>Qt, c++</td>
                    <td>Desktop app</td>
                  </tr>
                </thead>
                {renderCursorImage()}
              </Table>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={""} alt="Image" />
    </section>
  );
}

