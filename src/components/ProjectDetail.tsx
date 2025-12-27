import { X, ExternalLink, ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface ProjectLink {
  label: string;
  url: string;
  type?: "external" | "download";
}

export interface Project {
  id: string;
  title: string;
  disciplines: string[];
  description: string;
  image: string;
  fullDescription?: string;
  detailedSections?: {
    title: string;
    content: string;
  }[];
  year?: string;
  client?: string;
  role?: string;
  gallery?: string[];
  link?: string;
  links?: ProjectLink[];
}

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose, onNext, onPrev }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent hideCloseButton className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-card border-border gap-0">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center gap-4">
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Disciplines */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="px-3 py-1 text-xs font-display uppercase tracking-wider bg-primary/20 text-primary rounded-full"
                >
                  {discipline}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h2>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border mb-8">
              {project.year && (
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
                    Year
                  </p>
                  <p className="font-display font-semibold">{project.year}</p>
                </div>
              )}
              {project.client && (
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
                    Client
                  </p>
                  <p className="font-display font-semibold">{project.client}</p>
                </div>
              )}
              {project.role && (
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
                    Role
                  </p>
                  <p className="font-display font-semibold">{project.role}</p>
                </div>
              )}
              {project.link && (
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
                    Link
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-display font-semibold text-primary hover:underline"
                  >
                    View Live <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-8 mb-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Detailed Sections */}
              {project.detailedSections && project.detailedSections.length > 0 && (
                <div className="space-y-8 pt-4">
                  {project.detailedSections.map((section, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links & Downloads */}
            {project.links && project.links.length > 0 && (
              <div className="mb-12 p-6 rounded-xl bg-muted/50 border border-border">
                <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Links & Resources
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      asChild
                      className="gap-2"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.type === "download" ? true : undefined}
                      >
                        {link.type === "download" ? (
                          <Download className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-lg bg-muted"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
