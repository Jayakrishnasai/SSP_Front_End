import React from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import courses from "./courses";
import "./App.css";


function prevSlide() {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= slider.offsetWidth;
}

function nextSlide() {
    const slider = document.getElementById("slider");
    slider.scrollLeft += slider.offsetWidth;
}

class App extends courses {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <header className="header-container">
                        <h1>Shiva Sai's</h1>
                        <h1>Perseverance Software Training Institute</h1>
                    </header>
                    <div className="social-buttons" style={{ display: "flex", gap: "10px", position: "absolute", top: "5px", right: "10px" }}>
                        <a href="https://www.facebook.com/profile.php?id=61550316355738" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
                        <a href="https://www.instagram.com/perseverance_institute/" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
                        <a href="https://www.youtube.com/@persevcareers6577" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="YouTube" /></a>
                    </div>
                </header>
                <nav>
                    <a href="#">Home</a>
                    <a href="#featured-courses-section">Courses</a>
                    <div className="dropdown">
                        <a href="#" id="contact-dropdown-btn">Contact</a>
                        <div className="dropdown-content">
                            <a href="#">7075505229</a>
                            <a href="#">7075506229</a>
                            <a href="mailto:persevcareers@gmail.com">Email us</a>
                        </div>
                    </div>
                    <a href="#about-section1">About us</a>
                </nav>
                <div id="slider-container">
                    <button id="prevBtn" onClick={prevSlide}>❮</button>
                    <div id="slider">
                        <div className="slide">
                            <h3>Wanna become a DevOps Engineer ?</h3>
                            <p>Join us on the journey to becoming a skilled DevOps Engineer</p>
                        </div>
                        {/* Add more slides here */}
                    </div>
                    <button id="nextBtn" onClick={nextSlide}>❯</button>
                </div>
                <section id="why-it-field">
                    <h2 style={{ color: "#000", fontSize: "35px" }}>Why Enter the IT Field</h2>
                    <p>
                        The IT field offers exciting opportunities for innovation, problem-solving, and continuous learning.
                        Embrace cutting-edge technologies, contribute to digital transformation, and shape the future of technology.
                    </p>
                    <p>
                        The IT field encompasses a wide range of roles and specializations, including software development, cybersecurity, data analysis, network administration, cloud computing, and more. This diversity allows individuals to find a niche that aligns with their interests and skills.
                    </p>
                    <p>
                        There is a consistent and growing demand for skilled IT professionals across various industries. Organizations rely on technology, creating a need for individuals with expertise in IT.
                    </p>
                    <p>
                        IT professionals often receive competitive salaries due to the specialized skills and knowledge required for their roles. As technology becomes more integral to business operations, the value of skilled IT professionals continues to rise.
                    </p>
                </section>
                <div className="main-content">
                    <Paper elevation={3} className="perseverance-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Add Your Interested Courses" />
                            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                                Add Course
                            </Button>
                        </form>
                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary" />
                                    <div className={task.completed ? "task-text completed" : "task-text"}>
                                        {task.task}
                                    </div>
                                    <Button onClick={() => this.handleDelete(task._id)} color="secondary" className="delete-task-btn">
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>
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
                {/* About Us Section */}
                <section id="about-section">
                    <div id="about-section1">
                        <h3 style={{ color: "#333", fontSize: "35px" }}>About Us</h3>
                        <p>
                            Welcome to Perseverance Software Training Institute, located in the vibrant city of Tirupati. Our institute is committed to providing top-notch education in the field of software development and IT.
                        </p>
                        <p>
                            At Perseverance, we believe in fostering a learning environment that encourages creativity, critical thinking, and hands-on experience. Our dedicated team of instructors brings industry expertise to the classroom, ensuring that our students are well-prepared for the challenges of the IT field.
                        </p>
                        <p>
                            Whether you're looking to start a career in DevOps, Cloud Computing, Programming, or other IT domains, Perseverance is here to guide you on your journey. Join us and become a part of a community that values perseverance, dedication, and continuous learning.
                        </p>
                        <p>
                            Join us on a journey of knowledge and skill development. Whether you are a beginner looking to start your career in IT or a professional seeking to enhance your skills, Perseverance is the place for you.
                        </p>
                        <p>
                            Come, be a part of our community, and let's build a successful future together.
                        </p>
                    </div>
                </section>
                {/* Enroll Now and Follow Us Sections */}
                <div className="enroll-follow">
                    {/* Enroll Now Section */}
                    <div className="enroll-now">
                        <h3 style={{ color: "#fff", fontSize: "35px" }}>Ready to start your Journey ?</h3>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHmHRFGU4ZkpsoFYM-gNKrPB4cXeDfpmxNvyE2iY-lZ9PcYg/viewform" className="enroll-btn" target="_blank">Enroll Now</a>
                    </div>
                    {/* Follow Us Section */}
                    <div id="follow-us-section">
                        <h3>Follow Us</h3>
                        <div className="social-buttons">
                            <a href="https://www.facebook.com/profile.php?id=61550316355738" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
                            <a href="https://www.instagram.com/perseverance_institute/" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
                            <a href="https://www.youtube.com/@persevcareers6577" target="_blank" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="YouTube" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
