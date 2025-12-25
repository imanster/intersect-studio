import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail, { Project } from "./ProjectDetail";

const projects: Project[] = [
  {
    id: "sensory-interfaces",
    title: "Sensory Interfaces",
    disciplines: ["UX Design", "Haptics", "Research"],
    description: "Exploring tactile feedback systems that bridge digital and physical interactions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
    fullDescription: "This project explores how tactile feedback can create more meaningful connections between users and digital interfaces. Through extensive research and prototyping, we developed a series of haptic patterns that communicate information through touch, making digital experiences more accessible and intuitive. The work spans from initial ethnographic research to functional prototypes tested with diverse user groups.",
    year: "2023",
    client: "Research Lab",
    role: "Lead Designer & Researcher",
    gallery: [
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
    ],
  },
  {
    id: "urban-rhythms",
    title: "Urban Rhythms",
    disciplines: ["Data Viz", "Architecture", "Sound"],
    description: "Translating city movement patterns into generative audio-visual experiences.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
    fullDescription: "Urban Rhythms captures the pulse of city life by transforming pedestrian movement data into immersive audiovisual compositions. Using custom sensors placed throughout a metropolitan area, we collected months of movement patterns and translated them into generative art that reflects the unique character of each neighborhood. The installation invites viewers to experience their city in an entirely new way.",
    year: "2023",
    client: "City Arts Council",
    role: "Creative Director",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format",
    ],
  },
  {
    id: "material-memories",
    title: "Material Memories",
    disciplines: ["Product", "Sustainability", "Craft"],
    description: "Furniture collection crafted from reclaimed materials with embedded stories.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format",
    fullDescription: "Each piece in the Material Memories collection tells a story. Sourced from decommissioned buildings, retired boats, and abandoned workshops, these materials carry decades of history. Working with local craftspeople, we've transformed these fragments into functional furniture that honors their past while serving new purposes. QR codes embedded in each piece link to documented histories of the original materials.",
    year: "2022",
    client: "Self-initiated",
    role: "Designer & Maker",
    gallery: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format",
    ],
  },
  {
    id: "code-as-canvas",
    title: "Code as Canvas",
    disciplines: ["Creative Coding", "Art", "Installation"],
    description: "Interactive digital installations responding to human presence and emotion.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format",
    fullDescription: "Code as Canvas blurs the line between artist and algorithm. These installations use machine learning to interpret visitors' movements, facial expressions, and even heartbeats, generating unique visual responses that evolve throughout the exhibition. No two experiences are identical—each visitor becomes a collaborator in an ongoing conversation between human and machine creativity.",
    year: "2022",
    client: "Digital Arts Museum",
    role: "Artist & Developer",
    link: "https://example.com",
    gallery: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format",
    ],
  },
  {
    id: "narrative-spaces",
    title: "Narrative Spaces",
    disciplines: ["Spatial", "Storytelling", "XR"],
    description: "Immersive environments that unfold stories through exploration.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format",
    fullDescription: "Narrative Spaces reimagines storytelling as a spatial experience. Using mixed reality technologies, we created environments where stories aren't told linearly but discovered through exploration. Visitors navigate physical spaces enhanced with digital layers, uncovering narrative fragments that piece together based on their unique journey. The project challenges traditional authorship, giving each visitor agency in constructing meaning.",
    year: "2021",
    client: "Theater Company",
    role: "Experience Designer",
    gallery: [
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&auto=format",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
    ],
  },
  {
    id: "fluid-identities",
    title: "Fluid Identities",
    disciplines: ["Branding", "Motion", "Typography"],
    description: "Dynamic visual systems that evolve and adapt across touchpoints.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
    fullDescription: "Traditional brand identities are static, but organizations are living entities. Fluid Identities developed a generative visual system that responds to real-time data—social sentiment, environmental conditions, user interactions—creating a brand that breathes and evolves. The core identity remains recognizable while its expressions shift, reflecting the dynamic nature of contemporary culture.",
    year: "2021",
    client: "Tech Startup",
    role: "Brand Designer",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format",
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&auto=format",
    ],
  },
];

const ProjectsGrid = () => {
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
