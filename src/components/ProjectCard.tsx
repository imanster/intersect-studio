import { useState } from "react";

interface ProjectCardProps {
  title: string;
  disciplines: string[];
  description: string;
  image: string;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({ title, disciplines, description, image, index, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const rotations = [-2, 1, -1, 2, -1.5];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-lg transition-all duration-700 ease-out"
        style={{
          transform: isHovered ? `rotate(0deg) scale(1.02)` : `rotate(${rotation}deg)`,
        }}
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {disciplines.map((discipline) => (
              <span
                key={discipline}
                className="px-2 py-1 text-xs font-display uppercase tracking-wider bg-primary/20 text-primary rounded"
              >
                {discipline}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Decorative border */}
      <div
        className={`absolute -inset-px rounded-lg border-2 transition-all duration-500 pointer-events-none ${
          isHovered ? "border-primary opacity-100" : "border-transparent opacity-0"
        }`}
        style={{
          transform: isHovered ? `rotate(0deg)` : `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default ProjectCard;
