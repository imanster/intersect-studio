import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Briefcase, GraduationCap, Sparkles, ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  details?: {
    overview?: string;
    projects?: { name: string; description: string }[];
    achievements?: string[];
    technologies?: string[];
  };
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details?: {
    overview?: string;
    courses?: string[];
    projects?: { name: string; description: string }[];
    achievements?: string[];
  };
}

const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  const experience: ExperienceItem[] = [
    {
      role: "Management Trainee - Content Strategy + Community Building ",
      company: "Telosa",
      period: "May 2025 — Sept 2025",
      description: "Worked on shaping content strategy and building early-stage community engagement across digital platforms.",
      details: {
        overview: "As a Management Trainee, I supported content planning, community initiatives, and exploratory research for an early-stage organization. My role involved translating abstract goals into structured content systems and experimenting with ways to build and sustain an engaged community.",
        projects: [
          { name: "Build Mode by Telosa", description: "Created content for the Build Mode by Telosa YouTube Channel." },
        ],
        achievements: [
          "Scripted, shot and edited 13 short form videos and 4 long form videos.",
          "Built the pre-development proof of concept for the platform dashboard",
        ],
        technologies: ["DaVinci Resolve", "Lovable", "Canva"],
      },
    },
    {
      role: "Software Development Intern",
      company: "Willwali",
      period: "May 2024 — Aug 2024",
      description: "Contributed to improving the usability and reliability of a complex digital platform by working in quality assurance in a cross-functional, remote team.",
      details: {
        overview: "Worked at the intersection of product, design, and development to improve usability and stability of a complex platform. Contributed to the behind-the-scenes quality assurance.",
        technologies: ["Figma", "Visual Studio Code", "Python"],
      },
    },
    {
      role: "Research Intern",
      company: "KEM Hospital Research Centre",
      period: "May 2023 — June 2023",
      description: "Worked on healthcare-focused research and systems improvement projects, combining field research, data workflows, and community-oriented design to support medical teams and outreach initiatives.",
      details: {
        overview: "Supported research and healthcare delivery through systems improvement, field research, and community-focused design work in medical and rural contexts.",
        projects: [
          { name: "Patient Data Storage System Rework", description: "Rebuilt the patient data storage and file tracking system. Used non-technical tools for usage ease." },
        ],
        achievements: [
          "Assisted on health camp visits to Raigadh 10+ times",
        ],
        technologies: ["Excel", "Powerpoint"],
      },
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "MBA in Marketing",
      school: "FLAME University",
      period: "2025 — Present",
      details: {
        overview: "Majoring in Marketing while keeping an open minor.",
        courses: [
          "Marketing Management",
          "AI in Business",
          "Organizational Behaviour",
        ],
        projects: [
          { name: "Course Recommendation System", description: "Created a blueprint for a course recommendation system for students to use." },
          { name: "Karnani ke Notes", description: "Built a community where I share notes of all classes to my entire batch (Free of Cost)." },
        ],
        achievements: [
          "Research assistant",
        ],
      },
    },
    {
      degree: "BSc. in Computer Science and Design",
      school: "FLAME University",
      period: "2012 — 2025",
      details: {
        overview: "Comprehensive foundation in inter-disciplinary design, with special focus on technologicy oriented design subjects.",
        courses: [
          "Business Design",
          "Information Design and Data Visualization",
          "Data Driven Design",
          "Interaction Design",
          "Immersive Design",
        ],
        projects: [
          { name: "The Spark", description: "Study tool for people with ADHD and low attention spans to use in a classroom setting." },
          { name: "Kuberos", description: "Designed a financial education platform for children." },
          { name: "Spotify Trapped", description: "Working mockup of a new AR Spotify Feature." },
          { name: "Navigating Wicked Problems", description: "Abstract writeup submitted for UG Research Day 2025" },
        ],
        achievements: [
          "Organizing committee for the HCIPAI Symposium 2025",
          "Presented my project during the HCIPAI Symposium 2025",
          "Presented abstract during UG Research Day 2025",
        ],
      },
    },
  ];

  const skills = [
    { category: "Design", items: ["UX/UI Design", "Interaction Design", "Service Design", "Product Design", "Business Design", "Immersive Design"] },
    { category: "Tools", items: ["Figma", "Blender", "DaVinci Resolve", "Canva", "Unity", "Prompt Engineering"] },
    { category: "Code", items: ["HTML/CSS", "Python", "C++"] },
    { category: "Methods", items: ["Research", "Prototyping", "Systems Thinking"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.08),transparent_50%)]" />
        <div className="absolute top-20 right-[20%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-primary mb-4 animate-fade-in">
                Resume
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Background &
                <br />
                <span className="text-gradient">Experience</span>
              </h1>
            </div>
            <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-display text-sm uppercase tracking-wider hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      <main className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Experience */}
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Experience
                  </h2>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent hidden md:block" />
                  
                  <div className="space-y-8">
                    {experience.map((item, index) => (
                      <div
                        key={item.company}
                        className="group relative md:pl-8 animate-fade-in cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => setSelectedExperience(item)}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px] hidden md:block group-hover:scale-150 transition-transform duration-300" />
                        
                        <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-500">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                {item.role}
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h3>
                              <p className="text-primary font-display text-sm uppercase tracking-wider">
                                {item.company}
                              </p>
                            </div>
                            <span className="text-xs text-muted-foreground font-display px-3 py-1 bg-muted rounded-full whitespace-nowrap">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Education
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.map((item, index) => (
                    <div
                      key={item.school}
                      className="group p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 hover:bg-card transition-all duration-500 animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${(experience.length + index) * 0.1}s` }}
                      onClick={() => setSelectedEducation(item)}
                    >
                      <span className="text-xs text-muted-foreground font-display px-3 py-1 bg-muted rounded-full">
                        {item.period}
                      </span>
                      <h3 className="font-display text-lg font-semibold mt-4 mb-2 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                        {item.degree}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.school}</p>
                      <p className="text-xs text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Skills */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 p-8 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Skills & Tools
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.category}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-4">
                        {skill.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 bg-background/80 border border-border text-sm text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Experience Dialog */}
      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-primary font-display text-sm uppercase tracking-wider mb-1">
                  <Briefcase className="w-4 h-4" />
                  {selectedExperience.company}
                </div>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold">
                  {selectedExperience.role}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedExperience.period}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {selectedExperience.details?.overview && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-2">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedExperience.details.overview}</p>
                  </div>
                )}
                
                {selectedExperience.details?.projects && selectedExperience.details.projects.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-3">Key Projects</h4>
                    <div className="space-y-3">
                      {selectedExperience.details.projects.map((project) => (
                        <div key={project.name} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <h5 className="font-semibold mb-1">{project.name}</h5>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedExperience.details?.achievements && selectedExperience.details.achievements.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.details.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedExperience.details?.technologies && selectedExperience.details.technologies.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.details.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Education Dialog */}
      <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedEducation && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-accent font-display text-sm uppercase tracking-wider mb-1">
                  <GraduationCap className="w-4 h-4" />
                  {selectedEducation.school}
                </div>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold">
                  {selectedEducation.degree}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedEducation.period}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {selectedEducation.details?.overview && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-accent mb-2">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedEducation.details.overview}</p>
                  </div>
                )}
                
                {selectedEducation.details?.courses && selectedEducation.details.courses.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-accent mb-3">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.details.courses.map((course) => (
                        <span key={course} className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedEducation.details?.projects && selectedEducation.details.projects.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-accent mb-3">Projects</h4>
                    <div className="space-y-3">
                      {selectedEducation.details.projects.map((project) => (
                        <div key={project.name} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <h5 className="font-semibold mb-1">{project.name}</h5>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedEducation.details?.achievements && selectedEducation.details.achievements.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-accent mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {selectedEducation.details.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Resume;
