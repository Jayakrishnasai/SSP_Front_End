import React from 'react';

const StatsStrip = () => {
  const stats = [
    { value: '500+', label: 'Students Trained', description: 'Expertly trained and placed in top global firms.' },
    { value: '15+', label: 'Industry Experts', description: 'Directly mentoring your personalized career path.' },
    { value: '95%', label: 'Success Rate', description: 'Exceptional placement and certification rate.' },
    { value: '25+', label: 'Tech Programs', description: 'Cutting-edge courses designed for modern tech.' },
  ];

  return (
    <section className="bg-navy-900 dark:bg-navy-900/50 py-16 border-b border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-full h-full bg-accent/5 skew-x-12 translate-x-1/2 blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group hover:scale-105 transition-transform duration-700"
            >
              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4 border border-accent/20 shadow-xl shadow-accent/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-accent text-[7px] font-black uppercase tracking-[0.3em]">Verified</span>
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none group-hover:text-accent transition-colors drop-shadow-2xl">{stat.value}</p>
              <p className="text-blue-400 dark:text-accent font-black uppercase text-[10px] tracking-[0.2em] mb-4">{stat.label}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-[180px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
