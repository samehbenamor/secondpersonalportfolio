import Carousel from 'react-multi-carousel';
import meter1 from "../assets/img/meter1.svg";
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import React from 'react';
export const Work = () => {
    const [backgroundColor, setBackgroundColor] = useState("#151515"); // Initial background color

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
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
<section className="skill" id="skills" style={{ backgroundColor, transition: "background-color 1s ease-in-out" }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div  className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={""} alt="Image" />
    </section>
      );
}