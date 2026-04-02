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
    <section id="home" className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-32 pb-24 transition-colors duration-300">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 skew-x-12 translate-x-24 blur-[120px]"></div>
        <div className="absolute -bottom-48 -left-48 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/3 left-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center space-x-3 px-5 py-2 bg-accent/10 rounded-full border border-accent/20 mb-12 shadow-xl shadow-accent/5">
            <Badge className="!bg-accent !text-navy-900 border-none !px-3 !py-1 !text-[9px] font-black tracking-widest uppercase">Latest</Badge>
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Next Batch: April 15, 2024</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-blue-500 drop-shadow-2xl">Digital Future.</span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-400 mb-16 max-w-xl leading-relaxed font-medium">
            Professional training in <span className="text-white border-b-2 border-accent/30 pb-1">Cloud, AI, and DevOps</span> with direct mentorship.
          </p>

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-center">
            <Button variant="accent" className="w-full sm:w-auto px-12 py-6 text-xl shadow-[0_20px_50px_rgba(100,255,218,0.3)] hover:scale-105 rounded-2xl group transition-all">
              Explore Programs <span className="ml-3 group-hover:translate-x-2 transition-transform"><ArrowRightIcon /></span>
            </Button>
            <button className="flex items-center space-x-4 text-white font-black group hover:text-accent transition-all text-lg uppercase tracking-widest">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all shadow-xl">
                <PlayIcon />
              </div>
              <span className="border-b-2 border-white/20 group-hover:border-accent">Talk to Mentor</span>
            </button>
          </div>

          <div className="mt-24 grid grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div>
              <p className="text-4xl font-black text-white mb-1 tracking-tighter">500+</p>
              <p className="text-accent text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Alumni Placed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-1 tracking-tighter">15+</p>
              <p className="text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Experts</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-1 tracking-tighter">100%</p>
              <p className="text-accent text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Practical</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10 aspect-square group">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Learning" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="absolute -top-12 -right-12 bg-white dark:bg-navy-800 p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-20 border border-gray-100 dark:border-navy-700/50 max-w-[240px] transform hover:rotate-3 transition-transform">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <p className="text-navy-900 dark:text-white font-black text-sm leading-tight">Career Placement Support Included</p>
          </div>

          <div className="absolute -bottom-8 -left-12 bg-blue-600 p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-20 max-w-[240px] transform hover:-rotate-3 transition-transform">
             <p className="text-white font-black text-xl mb-2 tracking-tighter leading-none">High-Growth Careers</p>
             <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Join the Top 1% Engineers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
