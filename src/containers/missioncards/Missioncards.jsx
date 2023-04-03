import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./missioncards.css";

const missionData = [
  {
    title: "About",
    text: "QKE is forming an undeniable presence that gives local and regional communities something to be proud of. QKE 2023 is organized by Andrew Whitver and Michael Lagerman.",
  },
  {
    title: "Strength in Difference",
    text: "The exhibitions and artists presented in QKE construct a timeline of artists from queer history through the contemporary present. As an objective whole, QKE constructs a network of queer spaces to challenge the status quo of what queer art is and amplifies the resounding power and resilience of queer artists.",
  },
  {
    title: "An Opportunity for Connection",
    text: "QKE is an activation of Milwaukee’s vibrant arts communities and a collaborative opportunity for artists, galleries, and arts organizations to proudly present queer art during the month of June. QKE invites Milwaukee and beyond to expand their minds and hearts by exploring and experiencing the broad spectrum of exhibitions in Milwaukee’s finest galleries and institutions",
  },
  {
    title: "What is Queer Art?",
    text: "QKE uses the term queer to signify the limitless range of identities represented in the Trans, Lesbian, Gay, Bi, and all other communities experiencing sexual marginalization. QKE intends for queer to be comprehensive and open, acknowledging the nuances of individual identity and experience within a larger, inclusive network.",
  },
]

const Missioncards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <div className="qke__missioncards gradient__bg" id="mission">
        <div className="qke__mission2 section__margin">
          <div className="qke__mission-feature2">
              <h1 className="gradient__text">Organizing the arts to show that Pride is more than just rainbows</h1>
              <div />
            </div>
        </div>
    <div className="">
      <div className="qke__missioncards-container">
      {/* <div className="qke__missioncards-header">
        <motion.h1 layout transition={{duration: 1, type: 'spring'}} className="gradient__text">Mission</motion.h1>
        </div> */}
        {missionData.map((card, index) => (
          <motion.div
            key={card.title}
            layout
            onClick={() => handleCardClick(index)}
            whileHover={{ scale: 1.1 }}
            // transition={{duration: 1}}
            className="qke__card"
            style={{
              borderRadius: '1rem',
              boxShadow: '5px 5px 5px rgba(255,255,255, 0.2)',
              visibility: selectedCardIndex === null || selectedCardIndex === index ? 'visible' : 'hidden',
              height: selectedCardIndex === null || selectedCardIndex === index ? 'auto' : 0,
              overflow: selectedCardIndex === null || selectedCardIndex === index ? 'visible' : 'hidden'
            }}
          >
            <motion.h2 layout="position" className="gradient__text">{card.title}</motion.h2>
            {selectedCardIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="expand"
              >
                <p>{card.text}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Missioncards;
