import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      role: "Senior Designer",
      company: "Creative Studio",
      period: "2022 — Present",
      description: "Leading cross-functional design projects spanning digital products, physical installations, and brand systems.",
    },
    {
      role: "Design Lead",
      company: "Innovation Lab",
      period: "2020 — 2022",
      description: "Directed experimental design initiatives exploring emerging technologies and human-centered experiences.",
    },
    {
      role: "Designer",
      company: "Design Agency",
      period: "2018 — 2020",
      description: "Collaborated on diverse client projects from UX design to environmental graphics and motion design.",
    },
  ];

  const education = [
    {
      degree: "MFA Design & Technology",
      school: "Parsons School of Design",
      period: "2016 — 2018",
    },
    {
      degree: "BFA Graphic Design",
      school: "Rhode Island School of Design",
      period: "2012 — 2016",
    },
  ];

  const skills = [
    { category: "Design", items: ["UX/UI", "Visual Design", "Motion", "3D", "Spatial"] },
    { category: "Tools", items: ["Figma", "Blender", "After Effects", "TouchDesigner", "Unity"] },
    { category: "Code", items: ["HTML/CSS", "JavaScript", "React", "Processing", "Arduino"] },
    { category: "Methods", items: ["Research", "Prototyping", "Systems Thinking", "Facilitation"] },
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
                        className="group relative md:pl-8 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px] hidden md:block group-hover:scale-150 transition-transform duration-300" />
                        
                        <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-500">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                                {item.role}
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
                      className="group p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 hover:bg-card transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${(experience.length + index) * 0.1}s` }}
                    >
                      <span className="text-xs text-muted-foreground font-display px-3 py-1 bg-muted rounded-full">
                        {item.period}
                      </span>
                      <h3 className="font-display text-lg font-semibold mt-4 mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.school}</p>
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

      <Footer />
    </div>
  );
};

export default Resume;
