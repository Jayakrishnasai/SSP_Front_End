import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import AvatarCard from '../shared/AvatarCard';

const LeadershipGrid = () => {
  const leaders = [
    { name: 'Shiva Sai', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1519085185758-7697a3a5014b?auto=format&fit=crop&q=80&w=300&h=300', description: 'Visionary technologist with 15+ years of industry expertise leading global teams.' },
    { name: 'Dr. Sarah James', role: 'Director of Education', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300', description: 'Curating world-class curriculum for aspiring tech leaders and modern engineers.' },
    { name: 'John Peterson', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300', description: 'Ensuring seamless delivery and unparalleled student success support across India.' },
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-navy-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Meet Our Leadership"
          subtitle="Guided by industry veterans committed to your professional growth and technical mastery."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {leaders.map((leader, idx) => (
            <AvatarCard key={idx} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipGrid;
