export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  stars?: number;
  forks?: number;
  complexity: number; // 1-5 scale
  impact: number; // 1-5 scale
  completion: number; // 1-5 scale
  documentation: number; // 1-5 scale
  lastUpdated: Date;
  category: 'web' | 'ai' | 'hardware' | 'data' | 'other';
}

export interface ProjectScore {
  project: Project;
  score: number;
  breakdown: {
    technicalScore: number;
    impactScore: number;
    maintenanceScore: number;
    diversityScore: number;
  };
}

const calculateTechnicalScore = (project: Project): number => {
  const techStackScore = project.technologies.length * 0.5;
  const complexityScore = project.complexity * 2;
  const completionScore = project.completion * 1.5;
  const documentationScore = project.documentation * 1.5;

  return techStackScore + complexityScore + completionScore + documentationScore;
};

const calculateImpactScore = (project: Project): number => {
  const githubScore = ((project.stars || 0) * 0.5) + ((project.forks || 0) * 0.3);
  const impactScore = project.impact * 2;
  const demoScore = project.demoUrl ? 2 : 0;

  return githubScore + impactScore + demoScore;
};

const calculateMaintenanceScore = (project: Project): number => {
  const now = new Date();
  const monthsSinceUpdate = (now.getTime() - project.lastUpdated.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const recencyScore = Math.max(0, 5 - monthsSinceUpdate);
  
  return recencyScore;
};

const calculateDiversityScore = (projects: Project[], currentProject: Project): number => {
  const categoryCount = projects.filter(p => p.category === currentProject.category).length;
  const totalProjects = projects.length;
  
  // Higher score for projects in underrepresented categories
  return (totalProjects - categoryCount) * 0.5;
};

export const scoreProjects = (projects: Project[]): ProjectScore[] => {
  return projects.map(project => {
    const technicalScore = calculateTechnicalScore(project);
    const impactScore = calculateImpactScore(project);
    const maintenanceScore = calculateMaintenanceScore(project);
    const diversityScore = calculateDiversityScore(projects, project);

    const totalScore = (
      technicalScore * 0.35 + // Technical aspects are most important
      impactScore * 0.30 +    // Impact and popularity
      maintenanceScore * 0.20 + // Recent activity
      diversityScore * 0.15    // Category diversity
    );

    return {
      project,
      score: totalScore,
      breakdown: {
        technicalScore,
        impactScore,
        maintenanceScore,
        diversityScore
      }
    };
  });
};

export const getTopProjects = (projects: Project[], count: number = 3): ProjectScore[] => {
  const scoredProjects = scoreProjects(projects);
  
  return scoredProjects
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
};

// Example usage:
/*
const projects: Project[] = [
  {
    title: "TOF Sensor Project",
    description: "Developed a Time-of-Flight sensor system for precise distance measurements",
    technologies: ["Python", "Arduino", "Data Visualization"],
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
  // ... more projects
];

const topProjects = getTopProjects(projects, 3);
*/ 