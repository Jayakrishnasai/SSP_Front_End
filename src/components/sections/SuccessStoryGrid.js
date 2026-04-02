import React from 'react';

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5-1 4-2 5"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-2c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c1 0 1 0 1 1v1c0 2.5-1 4-2 5"/></svg>
);

const SuccessStoryGrid = ({ stories = [
    { title: 'Non-IT to Cloud Architect', student: 'Rajesh M.', details: 'Transitioned from a retail background to a top Cloud Architect role. Now managing multi-region AWS deployments for a major fintech company.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600' },
    { title: 'AI Developer Success', student: 'Priya K.', details: 'Mastered Machine Learning and now leading AI projects at a healthcare startup. From basic Python to complex neural networks in just 6 months.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600' },
  ] }) => {

  return (
    <section className="py-40 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-100 dark:via-navy-800/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-block h-1.5 w-16 bg-blue-600 dark:bg-accent rounded-full mb-8"></div>
          <h2 className="text-5xl md:text-8xl font-black text-navy-900 dark:text-white mb-8 tracking-tighter leading-none">Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Impact.</span></h2>
          <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto text-gray-500 dark:text-gray-400">Success stories from students who launched careers.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {stories.map((story, idx) => (
            <div key={idx} className="group relative bg-gray-50 dark:bg-navy-800 rounded-[3rem] shadow-2xl overflow-hidden hover:-translate-y-4 transition-all duration-700">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-[45%] relative">
                  <img src={story.image} alt={story.student} className="h-full w-full object-cover min-h-[400px] grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute top-10 left-10 transform -rotate-12 group-hover:rotate-0 transition-transform">
                    <QuoteIcon />
                  </div>
                </div>
                <div className="p-16 md:w-[55%] flex flex-col justify-center">
                  <h4 className="text-4xl font-black mb-6 text-navy-900 dark:text-white leading-tight tracking-tighter group-hover:text-accent transition-colors">{story.title}</h4>
                  <p className="text-blue-600 dark:text-accent font-black mb-8 uppercase text-xs tracking-[0.3em]">{story.student}</p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-lg">{story.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryGrid;
