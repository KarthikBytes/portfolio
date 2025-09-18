import React from 'react';
import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/Parallaxbackground';

const Hero = () => {
  return (
    <section
      className="flex items-start justify-center md:items-start md:justify-start 
                 min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure className='absoulte inst-0'
        style={{width:'100%',height:'100%'}}
      />
    </section>
  );
};

export default Hero;
