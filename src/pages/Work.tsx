import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Search, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail, { Project } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);

  // Get all unique disciplines from projects
  const allDisciplines = useMemo(() => {
    const disciplines = new Set<string>();
    projects.forEach((project) => {
      project.disciplines.forEach((d) => disciplines.add(d));
    });
    return Array.from(disciplines).sort();
  }, []);

  // Filter projects based on search query and selected disciplines
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.disciplines.some((d) => d.toLowerCase().includes(searchLower)) ||
        project.fullDescription?.toLowerCase().includes(searchLower) ||
        project.client?.toLowerCase().includes(searchLower) ||
        project.role?.toLowerCase().includes(searchLower);

      const matchesDisciplines =
        selectedDisciplines.length === 0 ||
        selectedDisciplines.some((selected) =>
          project.disciplines.includes(selected)
        );

      return matchesSearch && matchesDisciplines;
    });
  }, [searchQuery, selectedDisciplines]);

  const toggleDiscipline = (discipline: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(discipline)
        ? prev.filter((d) => d !== discipline)
        : [...prev, discipline]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDisciplines([]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  const hasActiveFilters = searchQuery !== "" || selectedDisciplines.length > 0;

  return (
    <>
      <Helmet>
        <title>Work | Portfolio</title>
        <meta name="description" content="Explore my complete collection of inter-disciplinary projects spanning UX design, creative coding, spatial design, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-8 px-6 md:px-12">
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

        {/* Search and Filter Section */}
        <section className="py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects, disciplines, clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-secondary/50 border-border/50 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Discipline Filters */}
            <div className="flex flex-wrap gap-2">
              {allDisciplines.map((discipline) => (
                <Badge
                  key={discipline}
                  variant={selectedDisciplines.includes(discipline) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedDisciplines.includes(discipline)
                      ? "bg-primary text-primary-foreground hover:bg-primary/80"
                      : "hover:bg-secondary hover:text-foreground"
                  }`}
                  onClick={() => toggleDiscipline(discipline)}
                >
                  {discipline}
                </Badge>
              ))}
            </div>

            {/* Active Filters & Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  <X className="h-3 w-3" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
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
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No projects found matching your criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Clear filters and show all projects
                </button>
              </div>
            )}
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
