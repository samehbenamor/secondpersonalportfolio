import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ggaming from "../assets/img/ggaming.PNG";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
export const Work = () => {
  const tdVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Increase the duration for slower animation
        duration: 1.5,
        delay: 0.2, // Delay before the transition starts for each td element
        ease: "easeInOut", // Easing function for the transition
        type: "spring", // Animation type (tween, spring, keyframes, etc.)
        stiffness: 25, // Damping effect for spring animations
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when entering viewport
    threshold: 0.1, // Adjust threshold as needed
  });

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
              ? {
                  WebkitMaskImage: visibleMask,
                  maskImage: visibleMask,
                  ease: "easeIn",
                }
              : {
                  WebkitMaskImage: hiddenMask,
                  maskImage: hiddenMask,
                  ease: "easeIn",
                }
          }
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img
            src={hoveredImage}
            alt="Cursor Image"
            onLoad={() => setIsLoaded(true)}
          />
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
              <motion.div>
                <h2 className="past">Past Projects</h2>
              </motion.div>

              <Table className="projectsTable">
                <thead>
                  <motion.tr
                    className="hoverable-tr"
                    onMouseEnter={() => handleMouseEnter(ggaming)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={rowVariants}
                  >
                    <motion.td variants={tdVariants}>2023</motion.td>
                    <motion.td variants={tdVariants}>Ggaming</motion.td>
                    <motion.td variants={tdVariants}>Studies project</motion.td>
                    <motion.td variants={tdVariants}>Symfony, Javafx</motion.td>
                    <motion.td variants={tdVariants}>
                      Website, desktop app
                    </motion.td>
                  </motion.tr>
                  <motion.tr
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={rowVariants}
                  >
                    <motion.td variants={tdVariants}>2022</motion.td>
                    <motion.td variants={tdVariants}>GreenT</motion.td>
                    <motion.td variants={tdVariants}>Studies project</motion.td>
                    <motion.td variants={tdVariants}>Php</motion.td>
                    <motion.td variants={tdVariants}>Website</motion.td>
                  </motion.tr>
                  <motion.tr
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={rowVariants}
                  >
                    <motion.td variants={tdVariants}>2022</motion.td>
                    <motion.td variants={tdVariants}>Smart TechStore</motion.td>
                    <motion.td variants={tdVariants}></motion.td>
                    <motion.td variants={tdVariants}>Qt, c++</motion.td>
                    <motion.td variants={tdVariants}>Desktop app</motion.td>
                  </motion.tr>
                </thead>
                {renderCursorImage()}
              </Table>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
