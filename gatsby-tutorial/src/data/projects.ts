import { Project } from '../utils/projectScorer';

export const projects: Project[] = [
  {
    title: "TOF Sensor Project",
    description: "Developed a Time-of-Flight sensor system for precise distance measurements, implementing real-time data processing and visualization.",
    technologies: ["Python", "Arduino", "Data Visualization", "Hardware Integration"],
    githubUrl: "https://github.com/steveleecode/TOFSensor",
    complexity: 4,
    impact: 4,
    completion: 5,
    documentation: 4,
    lastUpdated: new Date("2024-02-15"),
    category: "hardware",
    stars: 15,
    forks: 5
  },
  {
    title: "Price Tracker",
    description: "Built a web application that monitors and tracks product prices across multiple e-commerce platforms, helping users find the best deals.",
    technologies: ["Python", "Web Scraping", "Data Analysis", "API Integration"],
    githubUrl: "https://github.com/steveleecode/Price-Tracker",
    complexity: 3,
    impact: 4,
    completion: 4,
    documentation: 3,
    lastUpdated: new Date("2024-01-20"),
    category: "data",
    stars: 12,
    forks: 3,
    demoUrl: "https://price-tracker-demo.com"
  },
  {
    title: "ShakespeareGPT",
    description: "Created an AI-powered text generation system that mimics Shakespeare's writing style, demonstrating natural language processing capabilities.",
    technologies: ["Python", "Machine Learning", "NLP", "GPT"],
    githubUrl: "https://github.com/steveleecode/shakespeareGPT",
    complexity: 5,
    impact: 5,
    completion: 4,
    documentation: 4,
    lastUpdated: new Date("2024-02-01"),
    category: "ai",
    stars: 25,
    forks: 8,
    demoUrl: "https://shakespeare-gpt-demo.com"
  },
  {
    title: "Lease Tracker",
    description: "Developed a comprehensive lease management system to help users track and manage their rental agreements and payments.",
    technologies: ["Python", "Database Management", "User Interface", "Data Processing"],
    githubUrl: "https://github.com/steveleecode/Lease-Tracker",
    complexity: 3,
    impact: 3,
    completion: 4,
    documentation: 3,
    lastUpdated: new Date("2023-12-15"),
    category: "web",
    stars: 8,
    forks: 2
  },
  {
    title: "Interest Calculator",
    description: "Built a financial tool that calculates compound interest and helps users plan their investments and savings.",
    technologies: ["Python", "Financial Calculations", "User Interface", "Data Visualization"],
    githubUrl: "https://github.com/steveleecode/interest-calculator",
    complexity: 2,
    impact: 3,
    completion: 5,
    documentation: 4,
    lastUpdated: new Date("2024-01-10"),
    category: "web",
    stars: 10,
    forks: 4,
    demoUrl: "https://interest-calculator-demo.com"
  }
]; 