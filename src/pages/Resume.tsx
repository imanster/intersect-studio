import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

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
      
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-2 animate-fade-in">
                Resume
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold animate-slide-up">
                Background &<br />
                <span className="text-muted-foreground">Experience</span>
              </h1>
            </div>
            <button className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full font-display text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300 animate-fade-in">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Experience */}
              <section>
                <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Experience
                </h2>
                <div className="space-y-12">
                  {experience.map((item, index) => (
                    <div
                      key={item.company}
                      className="group animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.role}
                        </h3>
                        <span className="text-sm text-muted-foreground font-display">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-secondary font-display text-sm uppercase tracking-wider mb-2">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Education
                </h2>
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div
                      key={item.school}
                      className="group animate-slide-up"
                      style={{ animationDelay: `${(experience.length + index) * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <span className="text-sm text-muted-foreground font-display">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.school}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Skills */}
            <aside className="lg:border-l lg:border-border lg:pl-12">
              <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                Skills & Tools
              </h2>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-3">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-muted text-sm text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
