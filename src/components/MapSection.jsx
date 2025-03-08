import React, { useEffect, useRef } from 'react';

const MapSection = () => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  
  // Create mock data for map markers
  const locations = [
    { x: 25, y: 30, id: 'loc1' },
    { x: 70, y: 40, id: 'loc2' },
    { x: 35, y: 70, id: 'loc3' },
    { x: 60, y: 65, id: 'loc4' },
    { x: 45, y: 20, id: 'loc5' },
  ];

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mapRef.current) return;
      
      const { left, top, width, height } = mapRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply transform to map element
      mapRef.current.style.transform = `
        rotateY(${x * 10}deg) 
        rotateX(${-y * 10}deg)
        translateZ(20px)
      `;
      
      // Animated map markers with slightly different movement
      markersRef.current.forEach((marker, index) => {
        if (marker) {
          const factor = 1 - (index * 0.1);
          marker.style.transform = `
            translate(
              ${x * 15 * factor}px, 
              ${y * 15 * factor}px
            )
          `;
        }
      });
    };
    
    const handleMouseLeave = () => {
      if (mapRef.current) {
        mapRef.current.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
        
        markersRef.current.forEach(marker => {
          if (marker) {
            marker.style.transform = 'translate(0, 0)';
          }
        });
      }
    };

    const mapElement = mapRef.current;
    if (mapElement) {
      mapElement.addEventListener('mousemove', handleMouseMove);
      mapElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (mapElement) {
        mapElement.removeEventListener('mousemove', handleMouseMove);
        mapElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="map-section" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slide-up">
            Connect With Local Talent
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto slide-up delay-100">
            Discover skilled professionals in your neighborhood ready to help right now
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="card slide-right delay-200">
              <h3 className="text-xl font-bold mb-2">Hyperlocal Connections</h3>
              <p className="text-gray-300">
                TheGIGSpace uses advanced geolocation technology to match you with skilled professionals in your immediate vicinity.
              </p>
            </div>
            
            <div className="card slide-right delay-300">
              <h3 className="text-xl font-bold mb-2">Real-Time Availability</h3>
              <p className="text-gray-300">
                See who's online and ready to work in your area right now, ensuring you get help exactly when you need it.
              </p>
            </div>
            
            <div className="card slide-right delay-400">
              <h3 className="text-xl font-bold mb-2">Community Trust</h3>
              <p className="text-gray-300">
                Our platform builds local communities of trusted professionals with verified reviews from your neighbors.
              </p>
            </div>
          </div>
          
          {/* Interactive Map */}
          <div 
            className="map-container h-96 fade-in-scale delay-200"
            ref={mapRef}
          >
            {/* Map background with grid lines */}
            <div className="map-parallax bg-gradient-to-br from-primary to-primary-light p-4">
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`col-${i}`} className="border-r border-primary-light/20"></div>
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`row-${i}`} className="border-b border-primary-light/20"></div>
                ))}
              </div>
              
              {/* City names */}
              <div className="absolute top-1/4 left-1/4 text-white/50 text-xs">Downtown</div>
              <div className="absolute top-1/3 right-1/4 text-white/50 text-xs">Uptown</div>
              <div className="absolute bottom-1/4 left-1/3 text-white/50 text-xs">Riverside</div>
              <div className="absolute bottom-1/3 right-1/3 text-white/50 text-xs">Hillside</div>
              
              {/* Map markers */}
              {locations.map((loc, index) => (
                <div
                  key={loc.id}
                  ref={el => markersRef.current[index] = el}
                  className="map-marker flex items-center justify-center"
                  style={{
                    left: `${loc.x}%`,
                    top: `${loc.y}%`,
                    animation: `pulse 2s infinite ${index * 0.3}s`
                  }}
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/40"></span>
                </div>
              ))}
              
              {/* User location */}
              <div className="absolute left-1/2 top-1/2 w-8 h-8 -ml-4 -mt-4">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute inset-2 bg-blue-300 rounded-full flex items-center justify-center">
                  <span className="text-xs">You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
