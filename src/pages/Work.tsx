import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Search, X, Filter, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail, { Project } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
        <meta name="description" content="Explore my complete collection of inter-disciplinary projects spanning UX design, education, game design, and more." />
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
              from UX design and game design to education and beyond.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search Bar and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar - Full Width */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects, disciplines, clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-6 text-base bg-transparent border-2 border-border/30 rounded-none focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60 font-display tracking-wide"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Discipline Filter Dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-border/30 bg-transparent hover:border-primary hover:text-primary transition-all duration-300 font-display text-sm uppercase tracking-wider group">
                    <Filter className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    <span>Disciplines</span>
                    {selectedDisciplines.length > 0 && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-sans">
                        {selectedDisciplines.length}
                      </span>
                    )}
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-72 p-4 bg-background border-2 border-border/50 rounded-none shadow-2xl z-50" 
                  align="end"
                  sideOffset={8}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/30 pb-3">
                      <p className="font-display text-sm uppercase tracking-wider">Filter by Discipline</p>
                      {selectedDisciplines.length > 0 && (
                        <button
                          onClick={() => setSelectedDisciplines([])}
                          className="text-xs text-primary hover:text-primary/80 uppercase tracking-wider font-display"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                    <div className="max-h-64 overflow-y-auto space-y-1">
                      {allDisciplines.map((discipline) => (
                        <label
                          key={discipline}
                          className="flex items-center gap-3 cursor-pointer hover:bg-primary/5 p-2 transition-colors group"
                        >
                          <Checkbox
                            checked={selectedDisciplines.includes(discipline)}
                            onCheckedChange={() => toggleDiscipline(discipline)}
                            className="border-2 border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">{discipline}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
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
