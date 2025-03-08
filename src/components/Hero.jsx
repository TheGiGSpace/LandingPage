import React from 'react';
import { Squares } from './ui/squares-background';

const Hero = () => {
  return (
    <section className="relative bg-[#060606] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Squares background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="max-w-[90vw] mx-auto text-center px-3">
          <h2 
            className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-center mb-12 bebas-neue-regular" 
            style={{
              color: "#4ECCA3",
              letterSpacing: "0.3rem",
              textShadow: "0 0 10px rgba(78, 204, 163, 0.6), 0 0 20px rgba(78, 204, 163, 0.3)",
              animation: "pulse 4s ease-in-out infinite"
            }}
          >
            THEGIGSPACE
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 glow-text slide-up tracking-wide leading-relaxed">
            The Future of Local On‑Demand Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 slide-up delay-200 font-normal tracking-wider leading-relaxed">
            Instant connections to local talent and services, right at your doorstep.
          </p>
          
          <div className="flex justify-center space-x-4 slide-up delay-300">
            <a
              href="#how-it-works"
              className="px-6 py-3 bg-gradient-to-r from-[#4ECCA3] to-[#64E0B8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#4ECCA3]/30 transition-all duration-300 glow-border"
            >
              How It Works
            </a>
            <a
              href="#download"
              className="px-6 py-3 border border-[#4ECCA3] text-[#4ECCA3] rounded-lg font-medium hover:bg-[#4ECCA3]/10 transition-all duration-300"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
