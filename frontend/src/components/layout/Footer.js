import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-navy-900 text-navy-900 dark:text-white border-t border-gray-100 dark:border-navy-900/50 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black mb-8 flex items-center tracking-tighter">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-navy-900 mr-3 text-lg">P</div>
              Perseverance
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-10 leading-relaxed text-lg font-medium">
              Empowering the next generation of tech leaders through industry-driven education and mentor-led training in Tirupati and beyond.
            </p>
            <div className="flex space-x-5">
              {[
                { name: 'FB', url: 'https://www.facebook.com/ssptechedu' },
                { name: 'IG', url: 'https://www.instagram.com/ssptechedu/' },
                { name: 'LN', url: 'https://www.linkedin.com/company/ssp-tech-edu/' },
                { name: 'YT', url: 'https://www.youtube.com/@ssptechedu' }
              ].map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-navy-800 flex items-center justify-center hover:bg-accent hover:text-navy-900 dark:hover:bg-accent dark:hover:text-navy-900 transition-all transform hover:-translate-y-1 shadow-sm font-black text-xs"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 dark:text-accent mb-8">Quick Links</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li><a href="#home" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-accent transition-colors">Home</a></li>
              <li><a href="#programs" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 dark:text-accent mb-8">Contact Info</h4>
            <ul className="space-y-6">
              {[
                { label: 'Phone', text: '+91 70755 05229' },
                { label: 'Mail', text: 'persevcareers@gmail.com' },
                { label: 'Pin', text: 'Tirupati, AP, India' },
              ].map((item, i) => (
                <li key={item.label} className="flex flex-col space-y-1">
                  <span className="text-blue-600 dark:text-accent font-black text-[10px] uppercase tracking-widest">{item.label}</span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-navy-900/50 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Perseverance Software Training Institute. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-navy-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-navy-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
