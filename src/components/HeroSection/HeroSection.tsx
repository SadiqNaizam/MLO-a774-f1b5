import React from 'react';
import CTAButtons from './CTAButtons';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "px-8 py-6", // As per Layout Requirements: mainContent.container padding
        "bg-background",
        className
      )}
    >
      <div className="w-full max-w-screen-md">
        <h1 
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          <span className="text-foreground">Unify Your Team,</span>
          <br />
          <span className="text-primary">Amplify Your Impact.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
          SynergyFlow is the all-in-one platform designed to streamline your projects, 
          enhance collaboration, and boost productivity. Stop juggling tools, start 
          achieving goals.
        </p>
        {/* CTAButtons are rendered below the description, as per requirements */}
        <CTAButtons className="mt-10 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
