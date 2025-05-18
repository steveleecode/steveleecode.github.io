import React from 'react';
import { Link } from 'gatsby';
import { ProjectScore } from '../utils/projectScorer';

interface ProjectCardProps {
  projectScore: ProjectScore;
  index: number;
}

const ProjectCard = ({ projectScore, index }: ProjectCardProps) => {
  const { project, score, breakdown } = projectScore;
  
  // Calculate percentage for each score component
  const getScorePercentage = (score: number, maxScore: number): number => {
    return Math.min(100, (score / maxScore) * 100);
  };

  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Score:
          </span>
          <span className="text-sm font-bold text-primary-500">
            {score.toFixed(1)}
          </span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      {/* Score Breakdown */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Technical</span>
          <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 rounded-full"
              style={{ width: `${getScorePercentage(breakdown.technicalScore, 20)}%` }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Impact</span>
          <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${getScorePercentage(breakdown.impactScore, 20)}%` }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Maintenance</span>
          <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${getScorePercentage(breakdown.maintenanceScore, 5)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 