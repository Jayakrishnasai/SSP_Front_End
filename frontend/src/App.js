import React, { Component } from "react";
import { addTask, getTasks, updateTask, deleteTask } from "./services/taskServices";
import PageShell from "./components/layout/PageShell";
import Hero from "./components/sections/Hero";
import StatsStrip from "./components/sections/StatsStrip";
import LeadershipGrid from "./components/sections/LeadershipGrid";
import FeatureGrid from "./components/sections/FeatureGrid";
import ProgramCard from "./components/sections/ProgramCard";
import TestimonialCarousel from "./components/sections/TestimonialCarousel";
import SuccessStoryGrid from "./components/sections/SuccessStoryGrid";
import ContactCTA from "./components/sections/ContactCTA";
import "./App.css";
import "./tailwind-output.css";

class App extends Component {
    state = { tasks: [], currentTask: "" };

    async componentDidMount() {
        try {
            const { data } = await getTasks();
            this.setState({ tasks: data });
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTask: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const { data } = await addTask({ task: this.state.currentTask });
            const tasks = [...originalTasks];
            tasks.push(data);
            this.setState({ tasks, currentTask: "" });
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    };

    handleUpdate = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;
            this.setState({ tasks });
            await updateTask(currentTask, {
                completed: tasks[index].completed,
            });
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.error("Failed to update task:", error);
        }
    };

    handleDelete = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            this.setState({ tasks });
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.error("Failed to delete task:", error);
        }
    };

    render() {
        const { tasks, currentTask } = this.state;

        return (
            <PageShell>
                <Hero />
                <ProgramCard />
                <StatsStrip />
                <FeatureGrid />
                <LeadershipGrid />
                <TestimonialCarousel />
                <SuccessStoryGrid />
                <ContactCTA
                    tasks={tasks}
                    currentTask={currentTask}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleUpdate={this.handleUpdate}
                    handleDelete={this.handleDelete}
                />
            </PageShell>
        );
    }
}
  
export default App;
