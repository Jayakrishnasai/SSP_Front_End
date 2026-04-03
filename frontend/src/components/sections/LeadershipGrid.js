import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import AvatarCard from '../shared/AvatarCard';

const LeadershipGrid = () => {
  const leaders = [
    { name: 'Praveen Kumar G', role: 'Founder', image: '/images/fou.png', description: 'SSP was built to create ethical, skilled engineers who are ready for the real world. Integrity and perseverance are at the core of everything we do.' },
    { name: 'Manoj Kumar G', role: 'Director', image: '/images/dir.png', description: 'We don’t train students for exams — we prepare them for real industry challenges. Quality education is about empowerment, not just certification.' },
    { name: 'Sai Charan V P', role: 'CEO', image: '/images/ceo.png', description: 'Our mission is to turn skills into confidence and confidence into careers. We are here to bridge the gap between academic learning and industry demands.' },
  ];

  return (
    <section id="about" className="py-12 bg-white dark:bg-navy-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Meet Our Leadership"
          subtitle="Guided by industry veterans committed to your professional growth and technical mastery."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => (
            <AvatarCard key={idx} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipGrid;
