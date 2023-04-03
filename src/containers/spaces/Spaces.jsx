import React from 'react';
import { motion, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './spaces.css';

import spacesimages from '../../assets/spacesimages/spacesimages';

const textInfo = [
  "Aquae Nguvu",
  "Sarah Ball Allis Art Museum",
  "Gener8tor x Sherman Phoenix",
  "Green Gallery",
  // Add more text information for each image as needed
];

const Spaces = () => {

  const [width, setWidth] = useState(0);
  const qke__spaces_carousel = useRef();

  useEffect(() => {
    setWidth(qke__spaces_carousel.current.scrollWidth - qke__spaces_carousel.current.offsetWidth);
    const firstImage = qke__spaces_carousel.current.firstChild.firstChild;
    const lastImage = qke__spaces_carousel.current.lastChild.firstChild;
    qke__spaces_carousel.current.addEventListener('transitionend', () => {
      if (qke__spaces_carousel.current.scrollLeft === width) {
        animate(qke__spaces_carousel.current, {scrollLeft: 0});
      } else if (qke__spaces_carousel.current.scrollLeft === 0) {
        animate(qke__spaces_carousel.current, {scrollLeft: width});
      }
    });
  }, [width]);

  return (
    <div className="qke__spaces_container" id="spaces">
      <div className="qke__spaces_header">
        <span className="spaces-span"><h2 className="gradient__text">Spaces</h2></span>
        <p>Each QKE collaborator is dedicated to maintaining a supportive space for LGBTQ+ communities and recognizes the impact and importance of queer art.</p>
      </div>
      <motion.div 
        ref={qke__spaces_carousel} 
        whileTap={{cursor: "grabbing"}} 
        className="qke__spaces_carousel section__pading"
      >
          <motion.div 
            drag="x" 
            dragConstraints={{right: 0, left: -width }}
            className="qke__spaces_innercarousel"
          >
              {spacesimages.map((image, index) => {
                return(
                   <motion.div
                    whileHover={{scale: 1.1}} 
                    className="qke__space_card" 
                    key={image}
                  >
                    <div className="qke__space_card_overlay">
                      <h2>{textInfo[index]}</h2>
                    </div>
                    <img src={image} className="" alt="QKE space" title={textInfo[index]} />
                    </motion.div>
                  );
                })}
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Spaces