import React from 'react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-white dark:bg-navy-900 overflow-hidden pt-24 pb-16 transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 dark:bg-accent/10 skew-x-12 translate-x-24 blur-[120px]"></div>
        <div className="absolute -bottom-48 -left-48 w-[50rem] h-[50rem] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/3 left-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20 mb-8 shadow-xl shadow-accent/5">
            <Badge className="!bg-accent !text-navy-900 border-none !px-2.5 !py-0.5 !text-[8px] font-black tracking-widest uppercase">Latest</Badge>
            <span className="text-accent text-[9px] font-black uppercase tracking-[0.2em] opacity-80">Next Batch: April 15, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-navy-900 dark:text-white mb-8 leading-tight tracking-tighter">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-blue-600 drop-shadow-2xl">Digital Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed font-medium">
            Professional training in <span className="text-navy-900 dark:text-white border-b-2 border-accent/30 pb-1">Cloud, AI, and DevOps</span> with direct industry mentorship.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center">
            <Button variant="accent" className="w-full sm:w-auto px-10 py-4 text-lg shadow-[0_15px_40px_rgba(100,255,218,0.2)] hover:scale-105 rounded-xl group transition-all">
              Explore Programs <span className="ml-3 group-hover:translate-x-2 transition-transform"><ArrowRightIcon /></span>
            </Button>
            <button className="flex items-center space-x-3 text-navy-900 dark:text-white font-black group hover:text-accent transition-all text-base uppercase tracking-widest">
              <div className="w-12 h-12 rounded-full border-2 border-navy-900/10 dark:border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all shadow-xl">
                <PlayIcon />
              </div>
              <span className="border-b-2 border-navy-900/10 dark:border-white/20 group-hover:border-accent">Talk to Mentor</span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 dark:border-white/5 pt-10">
            <div>
              <p className="text-2xl font-black text-navy-900 dark:text-white mb-1 tracking-tighter">500+</p>
              <p className="text-accent text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Alumni Placed</p>
            </div>
            <div>
              <p className="text-2xl font-black text-navy-900 dark:text-white mb-1 tracking-tighter">15+</p>
              <p className="text-blue-500 text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Experts</p>
            </div>
            <div>
              <p className="text-2xl font-black text-navy-900 dark:text-white mb-1 tracking-tighter">100%</p>
              <p className="text-accent text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Practical</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/10 aspect-square group">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Learning" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="absolute -top-8 -right-8 bg-white dark:bg-navy-800 p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] z-20 border border-gray-100 dark:border-navy-700/50 max-w-[200px] transform hover:rotate-3 transition-transform">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <p className="text-navy-900 dark:text-white font-black text-xs leading-tight">Career Placement Support Included</p>
          </div>

          <div className="absolute -bottom-6 -left-8 bg-blue-600 p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] z-20 max-w-[200px] transform hover:-rotate-3 transition-transform">
             <p className="text-white font-black text-lg mb-1 tracking-tighter leading-none">High-Growth Careers</p>
             <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Join the Top 1% Engineers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
