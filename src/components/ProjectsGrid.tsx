import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sensory Interfaces",
    disciplines: ["UX Design", "Haptics", "Research"],
    description: "Exploring tactile feedback systems that bridge digital and physical interactions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
  },
  {
    title: "Urban Rhythms",
    disciplines: ["Data Viz", "Architecture", "Sound"],
    description: "Translating city movement patterns into generative audio-visual experiences.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
  },
  {
    title: "Material Memories",
    disciplines: ["Product", "Sustainability", "Craft"],
    description: "Furniture collection crafted from reclaimed materials with embedded stories.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format",
  },
  {
    title: "Code as Canvas",
    disciplines: ["Creative Coding", "Art", "Installation"],
    description: "Interactive digital installations responding to human presence and emotion.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format",
  },
  {
    title: "Narrative Spaces",
    disciplines: ["Spatial", "Storytelling", "XR"],
    description: "Immersive environments that unfold stories through exploration.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format",
  },
  {
    title: "Fluid Identities",
    disciplines: ["Branding", "Motion", "Typography"],
    description: "Dynamic visual systems that evolve and adapt across touchpoints.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
  },
];

const ProjectsGrid = () => {
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
          <p className="hidden md:block text-muted-foreground max-w-xs text-right">
            Each project lives at the intersection of multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
