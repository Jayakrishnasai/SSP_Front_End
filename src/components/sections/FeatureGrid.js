import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import Card from '../shared/Card';

const FeatureGrid = () => {
  const features = [
    { title: 'Industry Curriculum', description: 'Stay ahead with modern tools and workflows used by top-tier global tech companies.', icon: '🎯' },
    { title: 'Live Mentorship', description: 'Direct access to experts through interactive live sessions and personalized office hours.', icon: '👨‍💻' },
    { title: 'Project-Based', description: 'Build a robust professional portfolio through end-to-end real-world development projects.', icon: '🚀' },
    { title: 'Placement Support', description: 'Advanced resume building, mock interviews, and direct access to global hiring partners.', icon: '💼' },
    { title: 'Flexible Learning', description: 'Balance your education with work through advanced part-time and online learning options.', icon: '🕒' },
    { title: 'Global Network', description: 'Join a massive community of thousands of alumni working across the globe.', icon: '🌐' },
  ];

  return (
    <section className="py-40 bg-gray-50 dark:bg-navy-900 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/5 z-0 transition-all pointer-events-none skew-x-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Why Perseverance?"
          subtitle="We don't just teach code; we build world-class professional careers through a comprehensive ecosystem."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, idx) => (
            <Card key={idx} className="!p-16 border-none !bg-white dark:!bg-navy-800 shadow-2xl group hover:shadow-blue-500/10 hover:-translate-y-4 transition-all duration-700 rounded-[3rem] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-50 dark:bg-navy-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="text-6xl mb-12 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 relative z-10">
                {feature.icon}
              </div>
              <h4 className="text-3xl font-black mb-8 text-navy-900 dark:text-white tracking-tighter leading-tight relative z-10 group-hover:text-blue-600 dark:group-hover:text-accent transition-colors">{feature.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-lg relative z-10 group-hover:opacity-100 opacity-80 transition-opacity">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
