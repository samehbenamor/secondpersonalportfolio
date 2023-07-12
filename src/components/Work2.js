import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ggaming from "../assets/img/ggaming.PNG";
import hand from "../assets/img/hand2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export const Work2 = () => {
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
    
     
  return (
    <section className="skill" id="work">
       <img src={hand} alt="hand" className="hand" />
      <div className="container">
      
        <div className="row">
          <div className="col-12">
          
          <h2 className="past">Past Projects</h2>
          
          <Table className="projectsTable">
                <thead>
                  <motion.tr
                    className="hoverable-tr"
                  
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
                
              </Table>
          </div>
        </div>
      </div>
    </section>
  );
};
