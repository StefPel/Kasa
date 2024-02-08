import React from 'react';
import Nav from '../components/Navbar';
import Banner from '../components/Banner';
import imgBanner2 from '../assets/mountains.png';
import Collapse from '../components/Collapse';
import aboutData from '../datas/aboutData.json';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
      <Nav />
      <Banner imageUrl={imgBanner2} isMobile={true} />
      <main className='main_about'>
        {aboutData.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.description} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;