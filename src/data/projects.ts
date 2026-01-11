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
    id: "homing",
    title: "Homing",
    disciplines: ["Design Thinking", "Interaction Design", "Design Process", "Computer Science"],
    description: "Homing is an anti-addiction social media platform concept focused on enabling meaningful human connection without encouraging compulsive usage.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format",
    fullDescription: "As social media platforms increasingly prioritise engagement and retention, the line between connection and addiction has become blurred. Homing is a concept social media platform developed as part of a design thinking and process course, exploring how intentional constraints and metaphor-led design can encourage healthier, more reciprocal forms of digital connection.",

    detailedSections: [
      {
        title: "Design Problem",
        content: "The core problem identified was not a loss of emotional closeness between people, but a breakdown in the regularity and symmetry of communication. Existing social media platforms often frame infrequent interaction as disengagement, resulting in pressure to stay constantly active in order to maintain relationships."
      },
      {
        title: "Core Insight: Circles of Closeness",
        content: "The project was grounded in the idea of circles of closeness. Through reflection and discussion, we realised that relationships can remain emotionally close even when communication becomes infrequent. The issue lies in how platforms handle these gaps, often overwhelming users with irregular, mass updates rather than supporting slow, meaningful exchanges."
      },
      {
        title: "Design Concept: The Homing Pigeon",
        content: "Homing uses the metaphor of homing pigeons to shape its interaction model. All updates are sent to a central 'post office' rather than being pushed directly to users. Information is received only when a user chooses to send their own pigeon, reinforcing intentionality, reciprocity, and mutual awareness within relationships."
      },
      {
        title: "Information Flow and Feed Logic",
        content: "Instead of algorithmic or novelty-driven feeds, Homing follows an oldest-first model. The oldest unread updates are prioritised, ensuring that delayed communication is treated as natural rather than penalised. This design choice reduces anxiety, avoids performative posting, and encourages thoughtful engagement over habitual checking."
      },
      {
        title: "Reflection",
        content: "Homing remained a conceptual exploration, but it served as a critical investigation into slow technology and ethical interaction design. The project highlighted how reframing metaphors, information flow, and interaction triggers can fundamentally alter user behaviour and emotional response."
      }
    ],

    year: "2024",
    client: "Design Thinking & Process Course",
    role: "Problem Framing, User Research, Concept Development",

    links: [
      { label: "Prototype", url: "#", type: "download" },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format"
    ],
  },
  {
    id: "ai-course-recommendation",
    title: "AI-Driven Course Registration & Elective Recommendation",
    disciplines: ["AI Strategy", "Business Process Design", "Education"],
    description: "An AI-enhanced system concept to transform course registration from a rule-based process into a proactive, personalised advisory experience.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format",
    fullDescription: "This project was developed as part of the AI in Business course and focuses on reimagining the course registration and elective recommendation process within higher education. The project explores how AI can shift academic planning from a bureaucratic, rule-enforcing system to a proactive, personalised advisory experience that improves student outcomes while reducing administrative strain.",

    detailedSections: [
      {
        title: "Industry Context",
        content: "The chosen domain for this project was Higher Education Administration, a space characterised by large student populations, complex degree requirements, and high administrative overhead. Traditional systems struggle to scale personalised guidance, relying heavily on manual advising and legacy platforms that increase friction for both students and staff."
      },
      {
        title: "Problem Definition",
        content: "The existing course registration process primarily acts as a rule validator, confirming eligibility and prerequisites without offering goal-oriented guidance. Students are required to manually plan multi-semester pathways, resolve scheduling conflicts, and make high-impact academic decisions during high-stress periods, often resulting in sub-optimal course choices and delayed degree completion."
      },
      {
        title: "AI-Led Design Opportunity",
        content: "The core opportunity identified was to reposition the system as an intelligent advisory partner. By leveraging AI-driven personalisation, predictive analytics, and conversational interfaces, the process could shift from reactive error correction to proactive planning, helping students make informed decisions aligned with their academic goals and career aspirations."
      },
      {
        title: "Proposed AI-Enhanced Process",
        content: "The proposed solution integrates a Conversational AI and Course Recommendation System (CRS) that supports students throughout academic planning. Using natural language input, the system interprets goals, analyses historical success pathways, predicts course performance, resolves scheduling conflicts, and dynamically optimises degree paths while escalating only high-friction exceptions to human advisors."
      },
      {
        title: "Business Impact",
        content: "From a business perspective, the AI-enhanced process reduces advisor workload, improves student satisfaction and retention, and enables proactive resource planning. Predictive demand forecasting allows institutions to allocate faculty and classroom capacity more effectively, while continuous learning loops ensure the system improves over time."
      }
    ],

    year: "2025",
    client: "AI in Business Course",
    role: "Everything",

    links: [
      { label: "Final Report", url: "#", type: "download" }
    ],

    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&auto=format"
    ],
  },
  {
    id: "spotify-trapped",
    title: "Spotify Trapped",
    disciplines: ["Immersive Design", "Augmented Reality", "Experience Design"],
    description: "An AR extension concept for Spotify that transforms music listening into an immersive, concert-like experience.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format",
    fullDescription: "Spotify Trapped is an augmented reality extension concept developed as part of an immersive design course. The project explores how music streaming platforms can move beyond passive listening by creating spatial, performative experiences. The concept reimagines songs as immersive AR concerts that users can experience within their own physical environments.",

    detailedSections: [
      {
        title: "Context and Motivation",
        content: "Music streaming platforms have largely remained screen-based, focusing on playlists, discovery, and background listening. While concerts offer deeply emotional and immersive experiences, they are limited by geography, cost, and availability. This project explored how augmented reality could bridge this gap by bringing performance into the listener’s personal space."
      },
      {
        title: "Concept Overview",
        content: "Spotify Trapped is imagined as an extension to Spotify that allows users to experience songs as AR performances. When a user plays a track, the system generates an augmented reality concert featuring the artist performing the selected song, allowing users to experience music as a spatial, visual, and emotional event rather than purely audio content."
      },
      {
        title: "Experience Design Approach",
        content: "The experience is designed to feel intimate and controlled, rather than overwhelming. Users can place the performance within their environment, choose their viewing distance, and experience the concert from multiple perspectives. The focus was on presence and emotional immersion, treating AR as a storytelling medium rather than a visual novelty."
      },
      {
        title: "Example Use Case",
        content: "For example, if a user adds a Taylor Swift song to their playlist, Spotify Trapped generates an AR model of Taylor Swift performing that song. The performance unfolds in the user’s physical space, creating the feeling of a private concert that exists at the intersection of the digital and physical worlds."
      },
      {
        title: "Reflection",
        content: "Spotify Trapped is a conceptual prototype that investigates the future of music consumption through immersive technologies. The project highlights the potential of AR to deepen emotional engagement, reframe digital content as lived experience, and expand how users relate to artists beyond traditional screens."
      }
    ],

    year: "2024",
    client: "Immersive Design Course Project",
    role: "Concept Development, Experience Design, AR Ideation",

    links: [
      { label: "Prototype", url: "#", type: "external" }
    ],

    gallery: [
      "https://images.unsplash.com/photo-1549921296-3cce38b6a8d3?w=800&auto=format",
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&auto=format"
    ],
  },
  {
    id: "ug-research-day-interdisciplinary-design",
    title: "Navigating Wicked Problems: The Power of Interdisciplinarity Within Design",
    disciplines: ["Design Research", "Design Thinking", "Interdisciplinary Studies"],
    description: "A research study presented at UG Research Day 2025 exploring how design thinking bridges disciplinary boundaries to address complex problems.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format",
    fullDescription: "This project is a collaborative research study presented at Undergraduate Research Day 2025 at FLAME University. The research investigates how design thinking functions as an interdisciplinary framework, enabling students from diverse academic backgrounds to collaboratively address complex and ‘wicked’ problems through human-centered, exploratory, and iterative processes.",

    detailedSections: [
      {
        title: "Research Context",
        content: "The modern world is increasingly characterised by volatility, uncertainty, complexity, and ambiguity (VUCA), giving rise to wicked problems such as sustainability challenges, social inequity, and paradoxes of digital connectivity. These problems cannot be solved through linear methods or single-disciplinary expertise, creating the need for collaborative and integrative approaches to problem-solving."
      },
      {
        title: "Research Objective",
        content: "The objective of this study was to demonstrate how design education and design thinking methodologies seamlessly integrate multiple disciplines to produce disruptive, innovative, and socially impactful outcomes. The study aimed to position design not merely as a discipline, but as a mode of thinking that enables collaboration across traditionally siloed fields."
      },
      {
        title: "Methodology",
        content: "The study employed a qualitative research approach based on reflections from six undergraduate students enrolled in interdisciplinary programs at FLAME University. Their experiences across multiple design-focused courses were analysed, alongside project outcomes spanning a wide range of sectors. The analysis focused on the application of design processes, diversity of problem domains, and the innovativeness of proposed solutions."
      },
      {
        title: "Key Findings",
        content: "Over three semesters, students worked on seventeen projects across thirteen sectors, generating more than 1500 ideas through structured ideation and prototyping. The findings indicate that design thinking enabled students to dissolve disciplinary boundaries, frame problems more effectively, and develop solutions that balanced desirability, feasibility, and viability while addressing complex real-world challenges."
      },
      {
        title: "Conclusion and Reflection",
        content: "The research highlights the role of design thinking as a powerful pedagogical and problem-solving framework within undergraduate education. By prioritising human-centered inquiry and interdisciplinary collaboration, design education equips students with the mindset and tools necessary to navigate wicked problems and produce meaningful, innovative outcomes across domains."
      }
    ],

    year: "2025",
    client: "Undergraduate Research Day, FLAME University",
    role: "Co-Author, Research Synthesis, Design Thinking Analysis",

    links: [
      { label: "Research Abstract", url: "#", type: "download" }
    ],

    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format"
    ],
  },
];

// Highlighted projects for the homepage
export const highlightedProjects = projects.slice(0, 6);
