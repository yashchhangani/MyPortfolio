/**
 * Edit this file with your personal details — the whole site reads from here.
 */
export const site = {
  meta: {
    title: "Yash Chhangani — Java Full Stack Developer",
    description:
      "I design and ship fast, accessible web apps. Open to freelance and full-time roles.",
    ogImage: "/og-image.png",
    url: "https://your-domain.com",
    keywords: ["developer", "portfolio", "react", "typescript"],
  },

  person: {
    name: "Yash Chhangani",
    /** Short label under your name */
    role: "Java Full Stack Developer",
    /** One-line pitch for hero */
    tagline:
      "I turn complex ideas into calm, polished products — from prototype to production.",
    email: "yashchhangani00@gmail.com",
    location: "Pune",
    /** Optional path under public/, e.g. "/avatar.jpg" — omit or leave empty to hide */
    avatarUrl: "",
    resumeUrl: "https://drive.google.com/file/d/1XbOqBevW8d4kq58-M9-uSRP1CVqcIH5_/view?usp=drive_link",
  },

  social: [
    { label: "GitHub", href: "https://github.com/yashchhangani", icon: "github" as const },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yashchhangani/",
      icon: "linkedin" as const,
    },
    { label: "Email", href: "mailto:yashchhangani00@gmail.com", icon: "mail" as const },
  ],

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    paragraphs: [
      "I'm a Java Full Stack Developer focused on building reliable backend systems and clean, user-friendly web interfaces. I enjoy turning complex requirements into simple, maintainable products.",
      "I've built projects using Java, Spring Boot, React, and SQL, including authentication systems, dashboards, and CRUD platforms. I'm currently looking for opportunities where I can contribute to real-world product development and keep growing as an engineer.",
    ],
    /** Highlight stats — optional */
    stats: [
      { label: "Projects built", value: "3" },
      { label: "Tech stack", value: "Java + React" },
      { label: "Open to", value: "Full-time roles" },
    ],
  },

  skills: {
    groups: [
      {
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      },
      {
        title: "Backend",
        items: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
      },
      {
        title: "Database & Tools",
        items: ["MySQL", "Git", "GitHub", "Postman", "Vite"],
      },
    ],
  },

  achievements: [
    {
      context: "Exam",
      title: "Qualified GATE 2026 in CS & IT",
      detail:
        "Cleared GATE 2026 in Computer Science & Information Technology, demonstrating strong core CS fundamentals.",
    },
    {
      context: "Projects",
      title: "Built 3 full-stack applications",
      detail:
        "Developed portfolio-ready projects using Java, Spring Boot, React, and SQL with end-to-end workflows.",
    },
  ],
  projects: [
    {
      title: "College Attendance System",
      description:
        "Full-stack web application for efficient student attendance management with role-based access and automated attendance workflows.",
      tags: ["React.js", "Node.js", "MySQL", "Role-based Authentication", "REST API"],
      links: {
        live: "",
        repo: "https://github.com/yashchhangani/College-Attendance-Management-System.git",
      },
      image: "/thumbnails/college-attendance.svg",
      featured: true,
    },
    {
      title: "Study time estimator",
      description:
        "Full-stack study planner with authentication and dynamic time estimation based on subject complexity, built with a responsive UI and efficient data handling.",
      tags: ["React.js", "Node.js", "Vite", "Tailwind CSS", "Authentication"],
      links: {
        live: "",
        repo: "https://github.com/yashchhangani/Study-Time-Estimator.git",
      },
      image: "/thumbnails/study-time-estimator.svg",
      featured: true,
    },
    {
      title: "SafarDrop",
      description:
        "Built a travel-based parcel delivery platform that matches senders with verified travelers on the same route, enabling faster intercity delivery while creating an earning opportunity for travelers.",
      tags: ["HTML", "CSS", "React", "SQL", "Spring", "Java"],
      links: {
        live: "",
        repo: "https://github.com/yashchhangani/safardrop.git",
      },
      image: "/thumbnails/safardrop.svg",
      imagePosition: "center",
      featured: true,
    },
  ],

  contact: {
    headline: "Let's work together",
    subtext:
      "I'm open to Java Full Stack Developer roles, internships, and freelance projects. You can also reach me directly at yashchhangani00@gmail.com.",
    /** Form posts nowhere by default — wire to Formspree, Resend, etc. */
    formAction: "",
  },
} as const;

export type SiteData = typeof site;



