import React, { useState, useEffect, useRef } from 'react';

const ScreenshotGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Sample app screenshot data with more detailed descriptions
  const screenshots = [
    {
      id: 'client-dashboard',
      title: 'Client Dashboard',
      description: 'Browse nearby professionals and track your service requests in real-time, all with a clean, intuitive interface.',
      icon: '🏠',
      color: 'from-blue-500/40 to-teal-500/40'
    },
    {
      id: 'worker-dashboard',
      title: 'Worker Dashboard',
      description: 'Manage your availability, respond to requests, and track earnings with our streamlined worker interface.',
      icon: '📊',
      color: 'from-green-500/40 to-emerald-500/40'
    },
    {
      id: 'role-selection',
      title: 'Role Selection',
      description: "Start your journey by choosing your path—whether you're seeking services or offering your skills.",
      icon: '🔄',
      color: 'from-purple-500/40 to-indigo-500/40'
    },
    {
      id: 'chat-interface',
      title: 'Chat Interface',
      description: "Connect and communicate seamlessly with clients and service providers through our encrypted messaging system.",
      icon: '💬',
      color: 'from-rose-500/40 to-pink-500/40'
    },
    {
      id: 'map-view',
      title: 'Location Finder',
      description: 'Discover professionals around you with our interactive map view that shows real-time availability.',
      icon: '🗺️',
      color: 'from-amber-500/40 to-orange-500/40'
    },
  ];

  // Auto-rotate screenshots
  useEffect(() => {
    const startTimer = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (!isHovering) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }
      }, 5000);
    };

    startTimer();
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, isHovering, screenshots.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slide-up">
            Experience TheGIGSpace App
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto slide-up delay-100">
            Explore our intuitive interface designed for both service providers and clients.
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div 
          className="relative max-w-5xl mx-auto"
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 3D Rotating Card Gallery */}
          <div className="relative h-[500px] mb-12 perspective-1000">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;
              const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === screenshots.length - 1);
              const isNext = (index === activeIndex + 1) || (activeIndex === screenshots.length - 1 && index === 0);
              
              let position = '';
              let zIndex = 0;
              let scale = 0;
              let opacity = 0;
              let rotateY = 0;
              let translateZ = 0;
              
              if (isActive) {
                position = 'center';
                zIndex = 30;
                scale = 1;
                opacity = 1;
                rotateY = 0;
                translateZ = 150;
              } else if (isPrev) {
                position = 'left';
                zIndex = 20;
                scale = 0.8;
                opacity = 0.7;
                rotateY = 15;
                translateZ = 50;
              } else if (isNext) {
                position = 'right';
                zIndex = 20;
                scale = 0.8;
                opacity = 0.7;
                rotateY = -15;
                translateZ = 50;
              } else {
                position = 'hidden';
                zIndex = 10;
                scale = 0.6;
                opacity = 0;
                rotateY = index < activeIndex ? 40 : -40;
                translateZ = 0;
              }
              
              return (
                <div
                  key={screenshot.id}
                  className={`screenshot-card absolute inset-0 w-full h-full transition-all duration-700 ease-in-out`}
                  style={{
                    zIndex: zIndex,
                    opacity: opacity,
                    transform: `
                      translateX(${position === 'left' ? '-25%' : position === 'right' ? '25%' : '0'})
                      scale(${scale})
                      rotateY(${rotateY}deg)
                      translateZ(${translateZ}px)
                    `
                  }}
                >
                  <div className={`w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-primary-light/20 flex items-center justify-center bg-gradient-to-br ${screenshot.color}`}>
                    <div className="relative w-full h-full p-6">
                      {/* Phone frame */}
                      <div className="absolute inset-0 m-auto w-[280px] h-[560px] bg-black rounded-[36px] border-8 border-gray-800 overflow-hidden shadow-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        {/* App screen */}
                        <div className="w-full h-full bg-gradient-to-br from-primary-dark to-primary p-3 flex flex-col">
                          {/* Status bar */}
                          <div className="flex justify-between text-[10px] text-white/80 mb-2">
                            <span>9:41</span>
                            <div className="flex space-x-1">
                              <span>5G</span>
                              <span>100%</span>
                            </div>
                          </div>
                          
                          {/* App header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-xl font-bold text-white">TheGIGSpace</div>
                            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
                              <span className="text-white text-xs">👤</span>
                            </div>
                          </div>
                          
                          {/* Screen content */}
                          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                            <div className="text-3xl mb-4 animate-bounce">{screenshot.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">
                              {screenshot.title}
                            </h3>
                            <p className="text-xs text-gray-300 mb-4">
                              {screenshot.description}
                            </p>
                            
                            {/* Mock app content based on screenshot type */}
                            {screenshot.id === 'client-dashboard' && (
                              <div className="w-full space-y-2">
                                <div className="h-4 bg-white/10 rounded-full w-3/4 mx-auto"></div>
                                <div className="h-4 bg-white/10 rounded-full w-5/6 mx-auto"></div>
                                <div className="h-4 bg-white/10 rounded-full w-4/5 mx-auto"></div>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                  <div className="h-16 bg-white/10 rounded-lg"></div>
                                  <div className="h-16 bg-white/10 rounded-lg"></div>
                                </div>
                              </div>
                            )}
                            
                            {screenshot.id === 'worker-dashboard' && (
                              <div className="w-full space-y-2">
                                <div className="flex justify-between mb-2">
                                  <div className="h-6 w-20 bg-white/10 rounded-md"></div>
                                  <div className="h-6 w-16 bg-green-500/20 rounded-md"></div>
                                </div>
                                <div className="h-20 bg-white/10 rounded-lg"></div>
                                <div className="h-20 bg-white/10 rounded-lg"></div>
                                <div className="flex justify-center mt-2">
                                  <div className="h-8 w-32 bg-primary-light rounded-full"></div>
                                </div>
                              </div>
                            )}
                            
                            {screenshot.id === 'role-selection' && (
                              <div className="w-full space-y-4">
                                <div className="h-24 bg-white/10 rounded-xl flex items-center justify-center">
                                  <div className="text-white/70">👔 Service Provider</div>
                                </div>
                                <div className="h-24 bg-white/10 rounded-xl flex items-center justify-center">
                                  <div className="text-white/70">👤 Client</div>
                                </div>
                              </div>
                            )}
                            
                            {screenshot.id === 'chat-interface' && (
                              <div className="w-full space-y-2">
                                <div className="h-8 bg-white/10 rounded-r-xl rounded-tl-xl self-start w-4/5"></div>
                                <div className="h-12 bg-primary-light/30 rounded-l-xl rounded-tr-xl self-end w-4/5 ml-auto"></div>
                                <div className="h-8 bg-white/10 rounded-r-xl rounded-tl-xl self-start w-3/5"></div>
                                <div className="h-10 bg-primary-light/30 rounded-l-xl rounded-tr-xl self-end w-4/6 ml-auto"></div>
                                <div className="flex mt-4">
                                  <div className="h-8 flex-1 bg-white/10 rounded-full"></div>
                                  <div className="h-8 w-8 bg-primary-light rounded-full ml-2 flex items-center justify-center">
                                    <span className="text-white text-xs">➤</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {screenshot.id === 'map-view' && (
                              <div className="w-full h-32 bg-primary-light/20 rounded-lg overflow-hidden">
                                <div className="w-full h-full relative">
                                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/3 left-1/4"></div>
                                  <div className="absolute w-3 h-3 bg-green-500 rounded-full top-1/2 left-2/3"></div>
                                  <div className="absolute w-3 h-3 bg-orange-500 rounded-full bottom-1/4 right-1/5"></div>
                                  <div className="absolute w-4 h-4 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* App nav bar */}
                          <div className="flex justify-around py-2 border-t border-white/10">
                            <div className="w-10 h-1 bg-white/70 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated floating elements */}
                      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
                      <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-light transition-colors shadow-lg transform hover:scale-105"
              aria-label="Previous screenshot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex space-x-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-white scale-125 shadow-lg shadow-white/20' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-light transition-colors shadow-lg transform hover:scale-105"
              aria-label="Next screenshot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="card slide-up delay-200 group">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-lg"></div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="mr-2">🚀</span>
                <span>Intuitive Design</span>
              </h3>
              <p className="text-gray-300">
                Navigate through our app effortlessly with our clean, user-friendly interface that puts everything you need at your fingertips.
              </p>
            </div>
            
            <div className="card slide-up delay-300 group">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-lg"></div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="mr-2">⚡</span>
                <span>Lightning Fast</span>
              </h3>
              <p className="text-gray-300">
                Experience real-time updates and seamless interactions with our performance-optimized mobile application.
              </p>
            </div>
            
            <div className="card slide-up delay-400 group">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-lg"></div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="mr-2">🔒</span>
                <span>Secure & Private</span>
              </h3>
              <p className="text-gray-300">
                Your data is protected with industry-leading encryption and privacy measures, ensuring your information stays secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;
