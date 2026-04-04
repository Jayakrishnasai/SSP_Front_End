import React from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    { name: 'E. SaiTeja', company: 'GlobalTech Solutions', image: '/images/SaiTeja.jpg', quote: 'The DevOps training at Perseverance was a game-changer. I secured a 100% hike within 3 months of graduation.' },
    { name: 'Jaswanth', company: 'Innovation Hub', image: '/images/jaswanth.jpg', quote: 'Mentor-led approach is what sets them apart. Real projects, real feedback, and tangible career growth.' },
    { name: 'Jaya Krishna Sai', company: 'Soft Systems', image: '/images/jaya_krishna.jpg', quote: 'Highly recommend the Cloud Computing course for anyone looking to enter the high-growth IT field.' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-900/50 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block h-1.5 w-12 bg-blue-600 dark:bg-accent rounded-full mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 dark:text-white mb-4 tracking-tighter leading-none">Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Voices.</span></h2>
          <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-500 dark:text-gray-400">Real results from our global alumni community.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((t) => (
            <div key={t.name} className="w-full md:w-1/3 px-4 mb-8">
              <div className="h-full !p-8 border-none bg-white dark:bg-navy-800 shadow-2xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-700 rounded-3xl relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
                <div className="mb-8 relative z-10">
                  <div className="flex text-accent mb-6 space-x-1">
                    {[1,2,3,4,5].map(star => <span key={star} className="text-lg drop-shadow-md">★</span>)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-base font-medium leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity">"{t.quote}"</p>
                </div>

                <div className="flex items-center space-x-4 border-t border-gray-100 dark:border-navy-900/50 pt-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-accent/20 shadow-xl transform group-hover:rotate-6 transition-transform">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-black text-lg text-navy-900 dark:text-white tracking-tighter leading-none mb-1">{t.name}</h5>
                    <p className="text-blue-600 dark:text-accent text-[8px] font-black uppercase tracking-[0.2em]">{t.company}</p>
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

export default TestimonialCarousel;
