import React from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import courses from "../courses";
import "../App.css";


function prevSlide() {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= slider.offsetWidth;
}

function nextSlide() {
    const slider = document.getElementById("slider");
    slider.scrollLeft += slider.offsetWidth;
}

class Home extends courses {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <>
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
            </>
        );
    }
}

export default Home;
