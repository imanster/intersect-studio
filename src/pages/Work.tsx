import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail, { Project } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Work | Portfolio</title>
        <meta name="description" content="Explore my complete collection of inter-disciplinary projects spanning UX design, creative coding, spatial design, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in">
              Complete Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              All Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              A comprehensive collection of projects spanning multiple disciplines, 
              from UX design and creative coding to spatial installations and beyond.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  disciplines={project.disciplines}
                  description={project.description}
                  image={project.image}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />

        <ProjectDetail
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </>
  );
};

export default Work;
