export const portfolioData = {
  name: "Your Name",
  title: "Web Developer",
  description: "Passionate web developer specializing in modern technologies like Astro, React, and TypeScript.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  skills: [
    "JavaScript",
    "TypeScript", 
    "React",
    "Astro",
    "Node.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3"
  ],
  projects: [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/project-one",
      liveUrl: "https://project-one.com",
      imageUrl: "/images/project-1.jpg"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "A brief description of your second project",
      technologies: ["Astro", "React", "ShadCN UI"],
      githubUrl: "https://github.com/yourusername/project-two",
      liveUrl: "https://project-two.com",
      imageUrl: "/images/project-2.jpg"
    }
  ]
}

export type Project = typeof portfolioData.projects[0];