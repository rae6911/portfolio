export const profile = {
  name: "Joshua Elijah B. Berdin",
  email: "josh.berdin.6911@gmail.com",
  phone: "+63 992 302 2167",
  phoneHref: "tel:+639923022167",
  github: "https://github.com/rae6911",
  linkedin: "https://linkedin.com/in/joshua-berdin-010062378",
  location: "San Agustin, Victoria, Tarlac City, Philippines",
  cv: "/berdin-cv.pdf",
};

export const projects = [
  {
    name: "Tech Flow",
    kind: "Full-stack web app",
    description:
      "A full-stack web application with a React and Tailwind CSS frontend, a Node.js and Express backend, and data stored in PostgreSQL. Docker keeps development and deployment environments consistent.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
  },
  {
    name: "V-Access",
    kind: "Mobile app",
    description:
      "A mobile app built with Flutter and Dart. I built the screens and interface, then connected them to backend services through REST API endpoints to show live data.",
    stack: ["Flutter", "Dart", "REST API"],
  },
  {
    name: "AdvnCity Website",
    kind: "Company website",
    description:
      "The company’s working website, taken from design to a responsive site. WordPress is the CMS, so content can be updated without touching code, and the frontend reads it through REST API endpoints.",
    stack: ["React.js", "Tailwind CSS", "WordPress", "REST API"],
  },
  {
    name: "Maunlad na Victoria Website",
    kind: "Government website",
    description:
      "A complete responsive frontend that turns the design into user-friendly pages. WordPress manages the content and delivers it to the site through REST API endpoints.",
    stack: ["HTML5/CSS3", "JavaScript", "WordPress", "REST API"],
  },
  {
    name: "Barangay Healthcare Web App",
    kind: "Web app",
    description:
      "A barangay healthcare web application with responsive, reusable interface components, styled with Tailwind CSS so screens look and behave the same across devices.",
    stack: ["React.js", "Tailwind CSS"],
  },
];

export const experience = [
  {
    org: "Local Government of Victoria",
    note: "In-house systems team",
    dates: "Sept 2025 – Dec 2026",
    points: [
      "Build and maintain the team’s in-house systems so they stay functional, up to date and reliable for daily use.",
      "Develop and maintain system frontends and integrations with React.js, HTML5/CSS3, Flutter and C# WPF, connected through REST APIs.",
      "Provide technical support and troubleshooting for hardware, software and systems concerns.",
    ],
  },
  {
    org: "AdvnCity Corp.",
    note: "Frontend development",
    dates: "Jun 2026 – Aug 2026",
    points: [
      "Built the company’s working website, handling frontend development from design to a functional, responsive site.",
      "Developed the site with React.js and Tailwind CSS.",
    ],
  },
  {
    org: "Tarlac State University",
    note: "BS Computer Science, Cum Laude",
    dates: "2021 – 2025",
    points: [],
  },
];

export const skills = [
  ["Frontend", ["React.js", "HTML5/CSS3", "Tailwind CSS", "Flutter", "C# WPF", ".NET MAUI"]],
  ["Backend and integration", ["Node.js", "Express.js", "REST API integration", "WordPress (CMS)"]],
  ["Languages", ["JavaScript", "C#", "Dart", "Python"]],
  ["Databases and DevOps", ["PostgreSQL", "MySQL", "Docker", "PGAdmin"]],
  ["Tools", ["Git", "GitHub", "Figma", "Adobe Photoshop"]],
  ["AI-assisted development", ["Claude", "ChatGPT", "Gemini"]],
  ["IT support", ["Hardware diagnostics", "PC maintenance", "Software installation and configuration"]],
];
