import React, { useEffect, useRef } from 'react';
import AnimatedLogo from './AnimatedLogo';
// Component for product details section

const ProductBrief = () => {
  const sectionRef = useRef(null);

  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-primary-dark text-white relative overflow-hidden"
      id="product-brief"
    >
      {/* Trippy background animation */}
      <div className="absolute inset-0 trippy-dots opacity-10"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Logo showcase at the top with Swiggy-style layout */}
        <div className="flex justify-center mb-12">
          <div className="logo-display-container p-6 rounded-xl bg-primary-dark/40 backdrop-blur-md inline-flex flex-col items-center shadow-lg border border-[#4ECCA3]/20">
            <AnimatedLogo size="xl" />
            <div className="mt-3 text-center text-white text-2xl logo-text-glow bebas-neue-regular tracking-wider">
              THEGIGSPACE
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 glow-text reveal">
              Connect With Local Excellence
            </h2>
            <p className="text-lg text-gray-300 mb-10 reveal">
              Discover a platform designed to connect you with the best local services or showcase your skills. 
              With real‑time geolocation and transparent details, THEGIGSPACE ensures you get what you need—fast.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="dark-card reveal transition-all duration-500 hover:translate-y-[-5px] hover:shadow-primary/30">
                <div className="text-primary-light text-xl font-bold mb-1">Real-time</div>
                <div className="text-gray-300">Location-based matching</div>
              </div>
              <div className="dark-card reveal transition-all duration-500 hover:translate-y-[-5px] hover:shadow-primary/30 delay-100">
                <div className="text-primary-light text-xl font-bold mb-1">Transparent</div>
                <div className="text-gray-300">Clear pricing & reviews</div>
              </div>
              <div className="dark-card reveal transition-all duration-500 hover:translate-y-[-5px] hover:shadow-primary/30 delay-200">
                <div className="text-primary-light text-xl font-bold mb-1">Efficient</div>
                <div className="text-gray-300">Quick service connections</div>
              </div>
            </div>
          </div>
          
          {/* Visual element with 3D effect */}
          <div className="card-3d-container reveal px-4 md:px-0">
            <div className="card-3d h-[450px] rounded-lg overflow-hidden shadow-xl">
              <div className="card-3d-inner">
                <div className="card-3d-front">
                  {/* Animated backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-light/80 backdrop-blur-sm">
                    {/* Floating icons */}
                    <div className="absolute top-10 left-10 text-3xl float">🔍</div>
                    <div className="absolute top-1/3 right-10 text-3xl float-delay-1">👨‍🔧</div>
                    <div className="absolute bottom-20 left-1/4 text-3xl float-delay-2">👩‍🏫</div>
                    <div className="absolute top-2/3 right-1/4 text-3xl float">🧰</div>
                    <div className="absolute bottom-12 right-12 text-3xl float-delay-1">📱</div>
                    
                    {/* Animated connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M100,100 C150,150 250,150 300,100" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                      <path 
                        d="M300,100 C250,150 150,250 100,300" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse delay-300"
                      />
                      <path 
                        d="M100,300 C150,250 250,250 300,300" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse delay-500"
                      />
                    </svg>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8 backdrop-blur-sm bg-primary/20 rounded-xl">
                        <div className="text-5xl mb-6 glow-text">🏙️</div>
                        <p className="text-2xl font-bold mb-4 glow-text">
                          Find skilled professionals in your neighborhood
                        </p>
                        <p className="mt-4 text-gray-200">
                          From home repairs to personal training - all your local service needs in one place
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBrief;
