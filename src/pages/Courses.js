import React from 'react';
import '../App.css';

const Courses = () => {
    return (
        <>
            {/* Advertisements Sections */}
            <section id="advertisement-sections">
                {/* Advertisement Section 1 */}
                <div id="advertisement-section1" className="advertisement-section">
                    <h2>Discover Our Courses</h2>
                    <p>Explore a variety of courses designed to enhance your skills and career opportunities.</p>
                </div>
                {/* Advertisement Section 2 */}
                <div id="advertisement-section2" className="advertisement-section">
                    <h2>Expert Instructors</h2>
                    <p>Learn from industry experts with real-world experience in their respective fields.</p>
                </div>
            </section>
            {/* Featured Courses Section */}
            <section id="featured-courses-section">
                <div className="featured-courses">
                    <h2 style={{ color: "#333", fontSize: "45px" }}>Featured Courses</h2>
                    <div className="course-card">
                        <h3>DevOps</h3>
                    </div>
                    <div className="course-card">
                        <h3>Cloud Computing</h3>
                    </div>
                    <div className="course-card">
                        <h3>Python Programming</h3>
                    </div>
                    <div className="course-card">
                        <h3>Java Programming</h3>
                    </div>
                    <div className="course-card">
                        <h3>Linux Administration</h3>
                    </div>
                    <div className="course-card">
                        <h3>Databases</h3>
                    </div>
                    <div className="course-card">
                        <h3>Tableau </h3>
                    </div>
                    <div className="course-card">
                        <h3>C & C++</h3>
                    </div>
                    <div className="course-card">
                        <h3>Networking</h3>
                    </div>
                    <div className="course-card">
                        <h3>Windows Administration</h3>
                    </div>
                    <div className="course-card">
                        <h3>PowerBI </h3>
                    </div>
                    <div className="course-card">
                        <h3>Artificial Intelligence</h3>
                    </div>
                    <div className="course-card">
                        <h3>Bash Scripting</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
