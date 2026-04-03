import React from 'react';
import PropTypes from 'prop-types';

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const Trash2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);

const ContactCTA = ({ tasks, currentTask, handleChange, handleSubmit, handleUpdate, handleDelete }) => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy-900 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-navy-900 dark:bg-navy-800 rounded-[3rem] p-12 md:p-16 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] border border-white/5 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-accent/10 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform duration-700"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
              <div>
                <div className="inline-flex px-4 py-1.5 bg-accent/20 rounded-full mb-8 shadow-xl shadow-accent/5">
                  <span className="text-accent text-[9px] font-black uppercase tracking-[0.3em]">Ignite Your Career</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                  Take the <br /><span className="text-accent italic drop-shadow-xl">Next Step.</span>
                </h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg font-medium max-w-md">
                  Join hundreds of students already building their future with us.
                  Fill out the form or tell us which programs you're interested in.
                </p>

                <div className="pt-8 border-t border-white/5">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfHmHRFGU4ZkpsoFYM-gNKrPB4cXeDfpmxNvyE2iY-lZ9PcYg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center bg-accent text-navy-900 font-black px-10 py-4 rounded-xl hover:shadow-[0_15px_40px_-5px_rgba(100,255,218,0.4)] transform hover:-translate-y-2 transition-all text-sm uppercase tracking-widest"
                  >
                    Apply Now <span className="ml-3 group-hover:translate-x-2 transition-transform"><ExternalLinkIcon /></span>
                  </a>
                </div>
              </div>

              <div
                className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-1.5 h-full bg-accent/30"></div>
                <h4 id="interest-list-heading" className="text-xl font-black text-white mb-8 tracking-tighter flex items-center">
                   Enrollment Interest List
                </h4>

                <form onSubmit={handleSubmit} className="mb-10">
                  <div className="relative group">
                    <label htmlFor="interest-input" className="sr-only">Interest List</label>
                    <input
                      id="interest-input"
                      type="text"
                      value={currentTask}
                      onChange={handleChange}
                      placeholder="e.g. Cloud Architect, AI Expert"
                      className="w-full bg-navy-900/50 text-white px-6 py-4 rounded-2xl border-2 border-white/5 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-base font-bold placeholder-gray-600 shadow-inner"
                      required
                    />
                    <button
                      type="submit"
                      aria-label="Add Interest"
                      className="absolute right-2 top-2 w-10 h-10 bg-accent text-navy-900 rounded-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-xl shadow-accent/20"
                    >
                      <SendIcon />
                    </button>
                  </div>
                </form>

                <div className="space-y-6 max-h-[450px] overflow-y-auto pr-6 custom-scrollbar">
                    {tasks.length === 0 ? (
                      <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-[2.5rem] opacity-50">
                        <p className="text-gray-500 font-black uppercase text-[10px] tracking-[0.2em]">Add your first course interest above</p>
                      </div>
                    ) : (
                      tasks.map((task) => (
                        <div
                          key={task._id}
                          className={`flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/[0.08] hover:border-white/10 ${
                            task.completed ? 'opacity-40 grayscale blur-[0.5px]' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => handleUpdate(task._id)}
                              aria-label={task.completed ? "Mark as Incomplete" : "Mark as Complete"}
                              className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all transform hover:scale-110 ${
                                task.completed
                                  ? 'bg-accent border-accent text-navy-900'
                                  : 'border-white/10 hover:border-accent text-transparent hover:text-accent/30'
                              }`}
                            >
                              <CheckCircleIcon />
                            </button>
                            <span className={`text-base font-black tracking-tight leading-none ${
                              task.completed ? 'line-through text-gray-400' : 'text-white'
                            }`}>
                              {task.task}
                            </span>
                          </div>
                          <button
                            onClick={() => handleDelete(task._id)}
                            aria-label="Delete Interest"
                            className="text-white/10 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all hover:bg-red-500/10 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                          >
                            <Trash2Icon />
                          </button>
                        </div>
                      ))
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactCTA.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  currentTask: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactCTA;
