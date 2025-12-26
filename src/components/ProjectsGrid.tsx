import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectDetail, { Project } from "./ProjectDetail";
import { highlightedProjects } from "@/data/projects";

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = highlightedProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % highlightedProjects.length;
    setSelectedProject(highlightedProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = highlightedProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + highlightedProjects.length) % highlightedProjects.length;
    setSelectedProject(highlightedProjects[prevIndex]);
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-2">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Projects that<br />
              <span className="text-muted-foreground">defy categories</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-display text-sm uppercase tracking-wider"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {highlightedProjects.map((project, index) => (
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

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-display text-sm uppercase tracking-wider"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ProjectDetail
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default ProjectsGrid;
