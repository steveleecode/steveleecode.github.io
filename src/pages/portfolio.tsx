import * as React from "react"
import Layout from "../components/layout"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "TOF Sensor Project",
    description: "Developed a Time-of-Flight (TOF) sensor system for precise distance measurements, implementing real-time data processing and visualization.",
    technologies: ["Python", "Arduino", "Data Visualization", "Hardware Integration"],
    githubUrl: "https://github.com/steveleecode/TOFSensor",
    featured: true
  },
  {
    title: "Price Tracker",
    description: "Built a web application that monitors and tracks product prices across multiple e-commerce platforms, helping users find the best deals.",
    technologies: ["Python", "Web Scraping", "Data Analysis", "API Integration"],
    githubUrl: "https://github.com/steveleecode/Price-Tracker",
    featured: true
  },
  {
    title: "ShakespeareGPT",
    description: "Created an AI-powered text generation system that mimics Shakespeare's writing style, demonstrating natural language processing capabilities.",
    technologies: ["Python", "Machine Learning", "NLP", "GPT"],
    githubUrl: "https://github.com/steveleecode/shakespeareGPT",
    featured: true
  },
  {
    title: "Lease Tracker",
    description: "Developed a comprehensive lease management system to help users track and manage their rental agreements and payments.",
    technologies: ["Python", "Database Management", "User Interface", "Data Processing"],
    githubUrl: "https://github.com/steveleecode/Lease-Tracker",
    featured: true
  },
  {
    title: "Interest Calculator",
    description: "Built a financial tool that calculates compound interest and helps users plan their investments and savings.",
    technologies: ["Python", "Financial Calculations", "User Interface", "Data Visualization"],
    githubUrl: "https://github.com/steveleecode/interest-calculator",
    featured: true
  }
];

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A collection of my software development projects, showcasing my skills in various technologies and problem-solving abilities.
          </p>
          
          {/* Featured Projects */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {project.imageUrl && (
                    <div className="md:w-1/3">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                          Live Demo
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Projects Button */}
          <div className="flex justify-center mb-16">
            <a
              href="https://github.com/steveleecode?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              See All Projects on GitHub
            </a>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h3>
                <p className="text-gray-600 dark:text-gray-300">Python, Java, JavaScript, TypeScript</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Gatsby, HTML, CSS, Tailwind</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Technologies</h3>
                <p className="text-gray-600 dark:text-gray-300">Git, GitHub, VS Code, Arduino</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head = () => <title>Projects - Steve Lee</title> 