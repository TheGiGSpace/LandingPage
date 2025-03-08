import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
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

  const steps = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Begin your journey with a friendly welcome that helps you choose your path—whether you\'re seeking top local talent or ready to offer your skills. We connect you with professionals in your neighborhood, ensuring quick and easy access from the very start.',
      icon: '👋',
      color: 'from-purple-500/20 to-indigo-500/20',
      iconBg: 'bg-purple-500/10',
      glowColor: 'purple',
    },
    {
      id: 'for-clients',
      title: 'For Clients',
      description: 'Find local freelancers and service providers in no time. Our platform uses smart geolocation to bring you nearby professionals with clear service details, transparent pricing, and honest reviews. Manage your requests effortlessly and get your job done quickly, every time.',
      icon: '🔍',
      color: 'from-cyan-500/20 to-blue-600/20',
      iconBg: 'bg-cyan-500/10',
      glowColor: 'cyan',
    },
    {
      id: 'for-workers',
      title: 'For Gig Workers',
      description: 'Access local opportunities instantly. Browse gigs available near you, track your earnings, and stay organized with real-time updates. Our platform is built to help you focus on your work while staying informed—empowering you to make the most of every opportunity.',
      icon: '💼',
      color: 'from-green-500/20 to-emerald-600/20',
      iconBg: 'bg-green-500/10',
      glowColor: 'green',
    },
    {
      id: 'connected',
      title: 'Staying Connected',
      description: 'Stay in the loop with seamless communication. Whether you\'re coordinating details, leaving feedback, or updating your profile, everything is accessible in one central spot. Real-time updates and straightforward interactions keep you connected and in control.',
      icon: '💬',
      color: 'from-pink-500/20 to-rose-600/20',
      iconBg: 'bg-pink-500/10',
      glowColor: 'pink',
    },
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="section-padding bg-primary-dark relative overflow-hidden"
    >
      {/* Trippy background animation */}
      <div className="absolute inset-0 trippy-dots opacity-10"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
            How TheGIGSpace Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our platform makes it simple to connect with the right people at the right time.
            Here's how it works for everyone involved.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`grid md:grid-cols-2 gap-12 items-center reveal ${
                index % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''
              }`}
            >
              {/* Text content */}
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <div className="flex items-center mb-6">
                  <span className={`text-4xl mr-5 p-3 rounded-full ${step.iconBg} flex items-center justify-center shadow-glow-sm shadow-${step.glowColor}`}>
                    {step.icon}
                  </span>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Animated interface display */}
              <div className="card-3d-wrapper">
                <div className="card-3d h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105">
                  <div className="card-3d-inner">
                    <div className="card-3d-front">
                      {/* Styled interface mockup */}
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${step.color} backdrop-blur-sm p-6 relative`}>
                        {/* Animated floating elements */}
                        <div className="absolute w-20 h-20 top-10 left-10 rounded-full bg-white/5 backdrop-blur-md float"></div>
                        <div className="absolute w-12 h-12 bottom-20 right-10 rounded-full bg-white/5 backdrop-blur-md float-delay-1"></div>
                        <div className="absolute w-16 h-16 bottom-10 left-1/4 rounded-full bg-white/5 backdrop-blur-md float-delay-2"></div>
                        
                        {/* Interface content */}
                        <div className="text-center dark-card transform transition-all">
                          <div className="text-5xl mb-6">{step.icon}</div>
                          <p className="text-white font-medium text-xl mb-3">
                            {step.title} Interface
                          </p>
                          <p className="text-sm text-gray-300 mt-2">
                            {index === 0 ? "Welcome screen and role selection" : 
                             index === 1 ? "Browse available services with details" :
                             index === 2 ? "Worker dashboard with gig listings" :
                             "Communication and profile management"}
                          </p>
                          
                          {/* Mock UI elements based on step */}
                          <div className="mt-6 flex flex-col gap-2">
                            {index === 0 && (
                              <>
                                <div className="w-full h-8 bg-white/10 rounded-lg"></div>
                                <div className="flex gap-2 justify-center mt-2">
                                  <div className="w-24 h-10 bg-white/20 rounded-lg"></div>
                                  <div className="w-24 h-10 bg-white/20 rounded-lg"></div>
                                </div>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <div className="w-full h-8 bg-white/10 rounded-lg"></div>
                                <div className="w-full h-16 bg-white/10 rounded-lg"></div>
                                <div className="w-full h-16 bg-white/10 rounded-lg"></div>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <div className="flex gap-2">
                                  <div className="w-1/2 h-10 bg-white/20 rounded-lg"></div>
                                  <div className="w-1/2 h-10 bg-white/10 rounded-lg"></div>
                                </div>
                                <div className="w-full h-12 bg-white/15 rounded-lg"></div>
                                <div className="w-full h-12 bg-white/15 rounded-lg"></div>
                              </>
                            )}
                            {index === 3 && (
                              <>
                                <div className="flex gap-2">
                                  <div className="w-10 h-10 rounded-full bg-white/20"></div>
                                  <div className="flex-1 h-10 bg-white/10 rounded-lg"></div>
                                </div>
                                <div className="w-full h-10 bg-white/10 rounded-lg"></div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
