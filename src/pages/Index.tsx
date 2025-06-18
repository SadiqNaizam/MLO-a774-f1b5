import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';

/**
 * IndexPage serves as the main landing page for the SynergyFlow application.
 * It composes the Header and HeroSection components to create the primary view.
 * This page structure aligns with the 'LandingLayout' template requirements,
 * ensuring the header is followed vertically by the hero content.
 * The overall layout (e.g., content centering, max-width) is managed by the
 * individual Header and HeroSection components as per their specifications,
 * reflecting the project's layout requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main role="main">
        {/* HeroSection constitutes the main content for the landing page */}
        <HeroSection />
      </main>
      {/* A Footer component could be added here in a typical application structure, 
          but is not specified in the current requirements. */}
    </React.Fragment>
  );
};

export default IndexPage;
