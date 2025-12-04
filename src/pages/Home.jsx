import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import LatestProjects from '../components/LatestProjects.jsx';
import TeamSection from '../components/TeamSection.jsx';

const Home = () => {
  return (
    <section className='min-h-screen'>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <FeaturedProjects />
        <LatestProjects />
        <TeamSection />
    </section>
  )
}

export default Home;
