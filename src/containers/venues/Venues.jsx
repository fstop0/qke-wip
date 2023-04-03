import React from 'react';
import Venue from '../../components/venue/Venue';
import './venues.css';

const venuesData = [
  {
    title: "Aquae Nguvu",
    text: "Queer owned gallery in the Historic Third Ward",
  },
  {
    title: "Charles Allis Art Museum",
    text: "An institution making important changes to their building and collection.",
  },
  {
    title: "Green Gallery",
    text: "East side gallery with a focus on connecting established contemporary artists with the Midwest.",
  },
  {
    title: "gener8tor x Sherman Phoenix",
    text: "New studio and exhibition space on Milwaukee's west side.",
  },
  {
    title: "Hawthorn Contemporary",
    text: "Located in the historic Walker’s Point neighborhood, dedicated to presenting experimental and exploratory contemporary art.",
  },
  {
    title: "MKE LGBT Community Center",
    text: "Serving the LGBT community with health, wellness, advocacy & community-building programs.",
  },
  {
    title: "Milwaukee Art Museum",
    text: "Home to one of the largest collections in the United States with nearly 25,000 works of art.",
  },
  {
    title: "Milwaukee Artist Resource Network x Moody Zine",
    text: "Supports equitable and inclusive access to the arts. MARN serves as a center of creativity, innovation and collaboration.",
  },
  {
    title: "Milwaukee Institute of Art and Design",
    text: "Wisconsin’s only four-year, private college of visual art and design. Where passion finds purpose.",
  },
  {
    title: "Microlights Cinema",
    text: "Artist-run microcinema presenting artist-made film & video.",
  },
  {
    title: "Museum of Wisconsin Art - Downtown",
    text: "Believes that where we live is important and we are passionate about Wisconsin. Everything MOWA exhibits and talks about has been made by an artist with deep connections to the state.",
  },
  {
    title: "Portrait Society Gallery",
    text: "Contemporary art gallery with a broad roster of emerging and established artists. Established in 2008, the gallery showcases predominantly regional artists who cross boundaries of economics, gender, and race.",
  },
  {
    title: "Real Tinsel",
    text: "Presents the fetishes, subcultures, concepts, contexts, geekouts, demi-mondes, tribes, cults, gangs, grand narratives, and unified theories, that color the kaleidoscopically diverse contemporary art world.",
  },
  {
    title: "The Alice Wilds",
    text: "The Alice Wilds is a contemporary art gallery located in the neighborhood of Walker’s Point.",
  },
  {
    title: "Tory Folliard",
    text: "Focusing on traditional media and content, the Gallery presents in-depth exhibitions in its large warehouse space located in the Historic Third Ward of downtown Milwaukee.",
  },
  {
    title: "Underscore",
    text: "Artist-run project space and screening room emphasizing risk-taking and experimentation in queer visual, cinematic, performance, and installation art.",
  },
  {
    title: "Var Gallery",
    text: "Supports emerging, and established artists of all mediums. The gallery exhibits two and three-dimensional work on a monthly basis.",
  },
  {
    title: "Woodland Pattern Book Center",
    text: "Milwaukee nonprofit dedicated to the discovery, cultivation, and presentation of poetry, independent literature, and the arts.",
  },
];

const Venues = () => {
  return (
    <div className="qke__venues section__padding" id="exhibitions">
      <div className="qke__venues-heading">
        <h1 className="gradient__text">
          Venues
        </h1>
        <p>Each QKE collaborator is dedicated to maintaining a supportive space for LGBTQ+ communities and recognizes the impact and importance of queer art.</p>
      </div>
      <div className="qke__venues-container">
        {venuesData.map((item, index) => (
          <Venue title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Venues;