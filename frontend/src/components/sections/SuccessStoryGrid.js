import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5-1 4-2 5"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-2c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c1 0 1 0 1 1v1c0 2.5-1 4-2 5"/></svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const SuccessStoryGrid = ({ stories = [
    { title: 'Cloud Architect Success', student: 'E. SaiTeja', details: 'Transitioned to a Cloud Architect role, managing complex AWS deployments for a major tech firm.', image: '/images/SaiTeja.jpg' },
    { title: 'DevOps Mastery', student: 'Jaya Krishna Sai', details: 'Mastered modern DevOps practices, transitioning from system admin to complex CI/CD pipelines.', image: "/images/jaya_krishna.jpg" },
    { title: 'Full Stack Excellence', student: 'Jaswanth', details: 'Built a solid foundation in web tech and now leading development at a software house.', image: '/images/jaswanth.jpg' },
  ] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stories.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-100 dark:via-navy-800/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block h-1.5 w-12 bg-blue-600 dark:bg-accent rounded-full mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 dark:text-white mb-4 tracking-tighter leading-none">Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Impact.</span></h2>
          <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-500 dark:text-gray-400">Personal success stories from students who transformed their careers at SSP.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Buttons */}
          <div className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-4">
             <button 
              onClick={handlePrev}
              className="w-12 h-12 bg-white dark:bg-navy-800 rounded-2xl shadow-xl flex items-center justify-center text-navy-900 dark:text-white hover:bg-accent hover:text-navy-900 transition-all border border-gray-100 dark:border-white/5 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Previous Slide"
             >
                <ArrowLeft />
             </button>
             <button 
              onClick={handleNext}
              className="w-12 h-12 bg-navy-900 dark:bg-accent rounded-2xl shadow-xl flex items-center justify-center text-white dark:text-navy-900 hover:scale-110 transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Next Slide"
             >
                <ArrowRight />
             </button>
          </div>

          {/* Main Carousel Track */}
          <div className="overflow-visible">
            <div 
              className="flex transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stories.map((story, idx) => (
                <div key={story.student} className="w-full flex-shrink-0 px-4">
                  <div className={`group relative bg-gray-50 dark:bg-navy-800 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-700 p-10 md:p-16 text-center ${activeIndex === idx ? 'scale-100 opacity-100' : 'scale-95 opacity-40 blur-[2px]'}`}>
                    
                    {/* Centered Avatar UI Unified with rest of site */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-10">
                        {/* Gradient Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-blue-600 rounded-full opacity-10 blur-md group-hover:opacity-20 transition-opacity"></div>
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative z-10 border-4 border-white dark:border-navy-900 shadow-2xl">
                          <img 
                            src={story.image} 
                            alt={story.student} 
                            className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-110" 
                          />
                        </div>
                        {/* Decorative Quote Mark */}
                        <div className="absolute -bottom-2 -right-2 bg-accent text-navy-900 p-3 rounded-2xl shadow-xl z-20 transform -rotate-12 group-hover:rotate-0 transition-transform">
                          <QuoteIcon />
                        </div>
                      </div>

                      <div className="max-w-2xl">
                        <h4 className="text-3xl md:text-4xl font-black mb-4 text-navy-900 dark:text-white leading-tight tracking-tighter group-hover:text-accent transition-colors">
                          {story.title}
                        </h4>
                        
                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <div className="h-0.5 w-8 bg-accent/30"></div>
                          <p className="text-blue-600 dark:text-accent font-black uppercase text-xs tracking-[0.3em]">
                            {story.student}
                          </p>
                          <div className="h-0.5 w-8 bg-accent/30"></div>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-semibold text-lg md:text-xl italic">
                          "{story.details}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {stories.map((story, i) => (
              <button
                key={story.student}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeIndex === i ? 'w-10 h-1.5 bg-accent' : 'w-2 h-1.5 bg-gray-200 dark:bg-navy-800 hover:bg-accent/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

SuccessStoryGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      student: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default SuccessStoryGrid;
