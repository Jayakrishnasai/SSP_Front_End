import React from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    { name: 'Anil Kumar', company: 'GlobalTech Solutions', image: 'https://i.pravatar.cc/150?u=anil', quote: 'The DevOps training at Perseverance was a game-changer. I secured a 100% hike within 3 months of graduation.' },
    { name: 'Sarah Patel', company: 'Innovation Hub', image: 'https://i.pravatar.cc/150?u=sarah', quote: 'Mentor-led approach is what sets them apart. Real projects, real feedback, and tangible career growth.' },
    { name: 'Ravi Teja', company: 'Soft Systems', image: 'https://i.pravatar.cc/150?u=ravi', quote: 'Highly recommend the Cloud Computing course for anyone looking to enter the high-growth IT field.' },
  ];

  return (
    <section className="py-40 bg-gray-50 dark:bg-navy-900/50 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-block h-1.5 w-16 bg-blue-600 dark:bg-accent rounded-full mb-8"></div>
          <h2 className="text-5xl md:text-8xl font-black text-navy-900 dark:text-white mb-8 tracking-tighter leading-none">Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Voices.</span></h2>
          <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto text-gray-500 dark:text-gray-400">Real results from our global alumni community.</p>
        </div>

        <div className="flex flex-wrap -mx-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full md:w-1/3 px-8 mb-16">
              <div className="h-full !p-16 border-none bg-white dark:bg-navy-800 shadow-2xl flex flex-col justify-between hover:-translate-y-4 transition-all duration-700 rounded-[3rem] relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
                <div className="mb-12 relative z-10">
                  <div className="flex text-accent mb-10 space-x-1.5">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-2xl drop-shadow-md">★</span>)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-10 text-2xl font-medium leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity">"{t.quote}"</p>
                </div>

                <div className="flex items-center space-x-6 border-t border-gray-100 dark:border-navy-900/50 pt-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-xl transform group-hover:rotate-6 transition-transform">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-black text-2xl text-navy-900 dark:text-white tracking-tighter leading-none mb-2">{t.name}</h5>
                    <p className="text-blue-600 dark:text-accent text-[10px] font-black uppercase tracking-[0.2em]">{t.company}</p>
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
