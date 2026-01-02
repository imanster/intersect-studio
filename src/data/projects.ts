import { Project } from "@/components/ProjectDetail";

export const projects: Project[] = [
  {
    id: "the-spark",
    title: "The Spark",
    disciplines: ["UI/UX Design", "Interaction Design", "Psychology"],
    description: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
    fullDescription: "This project was built with the objective of trying to make a meaningful impact in the daily life of ADHD patients. I built a study tool for people with ADHD and low attention spans to use in a classroom setting to help reduce distractions.",
    detailedSections: [
      {
        title: "Research Methodology",
        content: "My research process involved a lot of interactions with diagnosed ADHD patients, trying to understand what their triggers are, as well as what they use in order to reduce distractions. Through this, I identified their use of 'brain dead games', which are video games that do not require too much thinking, but keep them engaged enough for them to pay attention to lectures."
      },
      {
        title: "Concept Building",
        content: "The problem with existing 'brain dead games', is that they are either too engaging or not engaging enough. As such, my solution was to build a game which balances the two. Overly engaging games will completely absorb the player, while under-engaging games will get dropped soon."
      },
      {
        title: "Technical Implementation",
        content: "The final prototype is a desktop game, which is ideally meant to be played on a laptop in a classroom setting. It is meant to be used as a support tool with proper notetaking tools to be used alongside it. The UI of the game utilized colour and shape theory, and also took went through multiple iterations during the user testing phase."
      },
      {
        title: "Outcome",
        content: "Participants using the game showed a noticeable improvement in their concentration, and also reported a positive result in their concentration levels."
      }
    ],
    year: "2024",
    client: "Interaction Design Course",
    role: "Everything",
    links: [
      { label: "Download", url: "#", type: "download" },
      { label: "Design Logs", url: "#", type: "download" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
    ],
  },
  {
    id: "kuberos",
    title: "Kuberos",
    disciplines: ["UX Design", "Education"],
    description: "Financial literacy platform for children.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
    fullDescription: "Kuberos is a financial literacy platform designed to imbibe financial skills in children with the help of a mock economy. The platform's design focuses on creating a space for children to learn financial literacy by earning and spending money in the mock economy, resulting in a more practical learning environment.",
    detailedSections: [
      {
        title: "Research Methodology",
        content: "After completing secondary research, I started talking to parents to understand how they taught financial skills and knowledge to their children. This was also how I learned about their understanding of finances, their children's understanding of money, and other such information. I identified a gap in the current systems that these parents follow."
      },
      {
        title: "The Gap",
        content: "The gap was in what they wanted their children to learn versus what they were actually learning through workshops. Financial education workshops are a very common way to teach children about money. However, these follow templates, which means that the knowledge that children receive, may not make sense to their financial situation. Parents were frustrated that although their children would learn about the concept of money, they wouldnt really understand the value of money."
      },
      {
        title: "Design Solution",
        content: "To work around this, I designed a platform which aims to help children learn financial skills through practical experience. The would be achieved with the help of a mock virtual economy, where children can earn and learn at their own pace. This economy is controlled and regulated by parents or school administrators, who ensure that children are able to experience all of this in a safe and controlled environment. This also ensures that parents are more involved in this learning process."
      }
    ],
    year: "2025",
    client: "UX Design Project",
    role: "Everything",
    links: [
      { label: "Business Plan Document", url: "#", type: "download" },
      { label: "Design Document", url: "#", type: "download" }
    ],
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
    fullDescription: "Code as Canvas blurs the line between artist and algorithm. These installations use machine learning to interpret visitors' movements, facial expressions, and even heartbeats, generating unique visual responses that evolve throughout the exhibition.",
    detailedSections: [
      {
        title: "The Concept",
        content: "No two experiences are identical—each visitor becomes a collaborator in an ongoing conversation between human and machine creativity. The installation learns from collective interactions, developing its own artistic 'style' over time."
      },
      {
        title: "Technical Stack",
        content: "Built using Processing and p5.js for visuals, with TensorFlow for real-time emotion detection. Custom WebSocket infrastructure enables synchronized experiences across multiple display surfaces."
      }
    ],
    year: "2022",
    client: "Digital Arts Museum",
    role: "Artist & Developer",
    link: "https://example.com",
    links: [
      { label: "Live Installation", url: "#", type: "external" },
      { label: "Source Code", url: "#", type: "external" },
      { label: "Exhibition Catalog (PDF)", url: "#", type: "download" }
    ],
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
  // Additional projects for the full Work page
  {
    id: "sonic-landscapes",
    title: "Sonic Landscapes",
    disciplines: ["Sound Design", "Geography", "Installation"],
    description: "Audio installations mapping the acoustic signatures of disappearing ecosystems.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format",
    fullDescription: "Sonic Landscapes is an ongoing project documenting the acoustic fingerprints of threatened ecosystems around the world. Using specialized recording equipment, we capture the unique soundscapes of forests, wetlands, and coral reefs before they change forever. These recordings are transformed into immersive installations that transport visitors to distant environments, creating emotional connections that inspire conservation action.",
    year: "2023",
    client: "Environmental Foundation",
    role: "Sound Artist & Researcher",
    gallery: [
      "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=800&auto=format",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format",
    ],
  },
  {
    id: "wearable-narratives",
    title: "Wearable Narratives",
    disciplines: ["Fashion", "Technology", "Storytelling"],
    description: "Garments that change based on the wearer's environment and experiences.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&auto=format",
    fullDescription: "Wearable Narratives explores clothing as a medium for personal storytelling. Using thermochromic inks, conductive threads, and embedded sensors, these garments respond to temperature, movement, and location—gradually revealing patterns and colors that reflect the wearer's journey. Each piece becomes a living diary, accumulating visual memories of places visited and experiences shared.",
    year: "2022",
    client: "Fashion Lab",
    role: "Designer & Technologist",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format",
    ],
  },
  {
    id: "algorithmic-gardens",
    title: "Algorithmic Gardens",
    disciplines: ["Generative Art", "Botany", "Code"],
    description: "Digital ecosystems that grow and evolve following natural principles.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format",
    fullDescription: "Algorithmic Gardens brings together computational design and botanical research to create virtual ecosystems that follow the same rules as natural ones. Plants compete for light, pollinate, spread seeds, and adapt to their environment over generations. Visitors can introduce new species, change environmental conditions, and watch centuries of evolution unfold in minutes.",
    year: "2021",
    client: "Science Museum",
    role: "Creative Technologist",
    gallery: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&auto=format",
    ],
  },
  {
    id: "memory-architecture",
    title: "Memory Architecture",
    disciplines: ["Architecture", "Psychology", "VR"],
    description: "Virtual spaces designed to enhance memory formation and recall.",
    image: "https://images.unsplash.com/photo-1545552983-eb6aa09a2d1e?w=800&auto=format",
    fullDescription: "Memory Architecture applies principles of spatial memory to virtual environment design. Working with cognitive psychologists, we developed a series of VR spaces specifically designed to help users encode and retrieve information more effectively. The project has applications in education, therapy for memory disorders, and training programs requiring complex information retention.",
    year: "2020",
    client: "University Research Center",
    role: "VR Designer & Researcher",
    gallery: [
      "https://images.unsplash.com/photo-1558618047-f4e79e5093aa?w=800&auto=format",
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&auto=format",
    ],
  },
  {
    id: "tactile-typography",
    title: "Tactile Typography",
    disciplines: ["Typography", "Accessibility", "3D Printing"],
    description: "A typeface system designed for both visual and tactile reading experiences.",
    image: "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?w=800&auto=format",
    fullDescription: "Tactile Typography bridges the gap between visual and tactile reading experiences. This typeface system translates letterforms into three-dimensional textures that can be read by touch while maintaining visual beauty. The project includes a set of 3D-printable fonts and guidelines for creating accessible signage, books, and wayfinding systems.",
    year: "2020",
    client: "Accessibility Initiative",
    role: "Type Designer",
    gallery: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format",
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&auto=format",
    ],
  },
  {
    id: "collaborative-canvas",
    title: "Collaborative Canvas",
    disciplines: ["Web Design", "Social", "Real-time"],
    description: "A platform for synchronous creative collaboration across distances.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format",
    fullDescription: "Collaborative Canvas reimagines remote creative work. This platform enables teams to sketch, prototype, and iterate together in real-time, with tools designed specifically for the messy, non-linear nature of creative collaboration. Features include version branching, asynchronous annotation, and AI-assisted organization of scattered ideas into coherent directions.",
    year: "2021",
    client: "Creative Agency",
    role: "Product Designer",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format",
    ],
  },
];

// Highlighted projects for the homepage
export const highlightedProjects = projects.slice(0, 6);
