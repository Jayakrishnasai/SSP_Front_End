import React from "react";
import courses from "./courses";
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

class App extends courses {
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
