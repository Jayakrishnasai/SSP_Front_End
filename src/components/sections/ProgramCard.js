import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import Card from '../shared/Card';
import Badge from '../shared/Badge';
import Button from '../shared/Button';

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const ProgramCard = () => {
  const programs = [
    { name: 'Cloud & DevOps', duration: '12 Weeks', tag: 'Trending', description: 'Master AWS, Azure, Docker, Kubernetes and CI/CD pipelines with real-world infrastructure.', color: 'blue' },
    { name: 'AI & Data Science', duration: '16 Weeks', tag: 'High Growth', description: 'Comprehensive training in Machine Learning, Python, and Predictive Analytics for data-driven decisions.', color: 'purple' },
    { name: 'Python Engineering', duration: '8 Weeks', tag: 'Foundation', description: 'Advanced Python with Django, high-performance data structures and API development.', color: 'yellow' },
    { name: 'Linux Administration', duration: '6 Weeks', tag: 'Core', description: 'Robust foundation in system administration, Bash scripting, and enterprise-grade security.', color: 'green' },
    { name: 'Database Architecture', duration: '8 Weeks', tag: 'Advanced', description: 'SQL, NoSQL, and high-availability systems for distributed large-scale data storage.', color: 'red' },
    { name: 'Web Engineering', duration: '12 Weeks', tag: 'Popular', description: 'Modern full-stack development with React, Node.js, and TypeScript for the modern web.', color: 'cyan' },
  ];

  return (
    <section id="programs" className="py-40 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-100 dark:via-navy-800/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Premium Programs"
          subtitle="Selected from our top-rated industry certifications designed to launch your high-growth career."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {programs.map((program, idx) => (
            <Card key={idx} className="group !p-0 border border-gray-100/50 dark:border-navy-800 hover:border-accent/40 dark:hover:border-accent/40 relative overflow-hidden bg-white dark:bg-navy-800 shadow-2xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-4 transition-all duration-700">
              <div className="p-12">
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-navy-900 flex items-center justify-center transform group-hover:-rotate-12 transition-transform shadow-xl`}>
                    <div className="w-6 h-6 rounded-lg bg-accent/20 border-2 border-accent"></div>
                  </div>
                  <Badge className="!bg-blue-100 !text-blue-600 dark:!bg-accent/10 dark:!text-accent !border-none !px-5 !py-2 !text-[9px] font-black tracking-widest uppercase">{program.tag}</Badge>
                </div>

                <h4 className="text-3xl font-black mb-8 text-navy-900 dark:text-white leading-tight tracking-tighter group-hover:text-accent transition-colors">{program.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed font-medium text-lg min-h-[100px]">{program.description}</p>

                <div className="flex items-center justify-between pt-12 border-t border-gray-100 dark:border-navy-900/50">
                  <div className="flex items-center text-gray-400 dark:text-gray-500 font-black text-[10px] uppercase tracking-widest">
                    <span className="mr-3 text-accent"><ClockIcon /></span> {program.duration}
                  </div>
                  <Button variant="secondary" className="!bg-navy-900 !text-white dark:!bg-accent dark:!text-navy-900 !rounded-full !px-6 !py-4 !text-[11px] uppercase tracking-widest font-black flex items-center group/btn hover:shadow-2xl">
                    Details <span className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"><ArrowUpRightIcon /></span>
                  </Button>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCard;
