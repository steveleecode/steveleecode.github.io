import React, { useState } from 'react';
import Header from './header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  const [isScoringModalOpen, setIsScoringModalOpen] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <footer className="mt-auto py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Stephen Lee. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/steveleecode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="mailto:stevelee_2008@outlook.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </a>
              <button
                onClick={() => setIsScoringModalOpen(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Project Scoring
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scoring System Modal */}
      {isScoringModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Scoring System</h2>
                <button
                  onClick={() => setIsScoringModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  Projects are scored based on several key factors to determine their complexity, impact, and technical depth.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Complexity (40%)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Use of advanced programming concepts</li>
                      <li>Implementation of complex algorithms</li>
                      <li>Integration of multiple technologies</li>
                      <li>Architecture and design patterns</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project Impact (30%)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Real-world applications</li>
                      <li>User engagement and adoption</li>
                      <li>Problem-solving effectiveness</li>
                      <li>Potential for scalability</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Code Quality (20%)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Code organization and structure</li>
                      <li>Documentation and comments</li>
                      <li>Testing coverage</li>
                      <li>Best practices implementation</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation (10%)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Unique solutions</li>
                      <li>Creative approaches</li>
                      <li>Use of cutting-edge technologies</li>
                      <li>Originality of implementation</li>
                    </ul>
                  </div>
                </div>

                {/* Technical Details Toggle */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    {showTechnicalDetails ? 'Hide Technical Details' : 'Show Technical Details'}
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
                        showTechnicalDetails ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Technical Details Section */}
                {showTechnicalDetails && (
                  <div className="mt-6 space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Scoring Algorithm</h4>
                          <p className="text-sm">
                            The scoring system implements a weighted scoring algorithm using TypeScript, with the following key components:
                          </p>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2 font-mono text-sm overflow-x-auto">
                            <pre>{`interface ProjectScore {
  technicalComplexity: number;  // 0-1
  projectImpact: number;       // 0-1
  codeQuality: number;         // 0-1
  innovation: number;          // 0-1
  lastUpdated: Date;
}

const calculateFinalScore = (score: ProjectScore): number => {
  const weights = {
    technicalComplexity: 0.4,
    projectImpact: 0.3,
    codeQuality: 0.2,
    innovation: 0.1
  };

  // Apply time decay factor
  const timeDecay = Math.exp(-0.1 * getMonthsSinceUpdate(score.lastUpdated));
  
  return Object.entries(weights).reduce((total, [key, weight]) => {
    return total + (score[key as keyof ProjectScore] * weight * timeDecay);
  }, 0);
};`}</pre>
                          </div>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Normalized scoring (0-1) for each category</li>
                            <li>Weighted aggregation using category percentages</li>
                            <li>Exponential decay for time-based factors</li>
                            <li>Complexity analysis for technical depth assessment</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Technical Complexity Analysis</h4>
                          <p className="text-sm">
                            Technical complexity is evaluated using multiple metrics:
                          </p>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2 font-mono text-sm overflow-x-auto">
                            <pre>{`// Cyclomatic Complexity Calculation
const calculateCyclomaticComplexity = (code: string): number => {
  const decisionPoints = [
    /if\\s*\\(/g,
    /else\\s*{/g,
    /for\\s*\\(/g,
    /while\\s*\\(/g,
    /case\\s+\\w+:/g,
    /catch\\s*\\(/g,
    /\\?/g,
    /&&/g,
    /\\|\\|/g
  ];
  
  return decisionPoints.reduce((total, pattern) => {
    return total + (code.match(pattern) || []).length;
  }, 1); // Base complexity of 1
};`}</pre>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2">
                            <p className="text-sm font-mono">
                              Complexity Score = ∑(wᵢ × mᵢ) × (1 + log(n))
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              where wᵢ = weight of metric i, mᵢ = normalized metric value, n = number of components
                            </p>
                          </div>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Cyclomatic complexity of codebase</li>
                            <li>Dependency graph analysis</li>
                            <li>Architecture pattern implementation</li>
                            <li>Algorithm efficiency and optimization</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Code Quality Metrics</h4>
                          <p className="text-sm">
                            Code quality assessment includes:
                          </p>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2 font-mono text-sm overflow-x-auto">
                            <pre>{`// Code Quality Score Calculation
const calculateCodeQuality = (metrics: CodeMetrics): number => {
  const {
    testCoverage,      // 0-1
    documentationScore, // 0-1
    lintingScore,      // 0-1
    complexityScore    // 0-1
  } = metrics;

  const weights = {
    testCoverage: 0.3,
    documentationScore: 0.2,
    lintingScore: 0.3,
    complexityScore: 0.2
  };

  return Object.entries(weights).reduce((total, [key, weight]) => {
    return total + (metrics[key as keyof CodeMetrics] * weight);
  }, 0);
};`}</pre>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2">
                            <p className="text-sm font-mono">
                              Quality Score = αT + βD + γL + δC
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              where T = test coverage, D = documentation score, L = linting score, C = complexity score
                              and α, β, γ, δ are their respective weights
                            </p>
                          </div>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Static code analysis results</li>
                            <li>Test coverage percentage</li>
                            <li>Documentation completeness</li>
                            <li>Code style consistency</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Impact Assessment</h4>
                          <p className="text-sm">
                            Project impact is measured through:
                          </p>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2">
                            <p className="text-sm font-mono">
                              Impact Score = (U × wᵤ) + (P × wₚ) + (S × wₛ) + (M × wₘ)
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              where U = user engagement, P = performance, S = scalability, M = market relevance
                              and wᵤ, wₚ, wₛ, wₘ are their respective weights
                            </p>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-2 font-mono text-sm overflow-x-auto">
                            <pre>{`// Performance Benchmark Calculation
const calculatePerformanceScore = (benchmarks: PerformanceMetrics): number => {
  const {
    loadTime,          // in milliseconds
    responseTime,      // in milliseconds
    throughput,        // requests per second
    resourceUsage     // percentage
  } = benchmarks;

  const normalizedMetrics = {
    loadTime: 1 - (loadTime / 3000), // normalize to 3s max
    responseTime: 1 - (responseTime / 1000), // normalize to 1s max
    throughput: throughput / 1000, // normalize to 1000 rps
    resourceUsage: 1 - (resourceUsage / 100) // normalize to percentage
  };

  return Object.values(normalizedMetrics).reduce((a, b) => a + b) / 4;
};`}</pre>
                          </div>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>User engagement metrics</li>
                            <li>Performance benchmarks</li>
                            <li>Scalability analysis</li>
                            <li>Market relevance assessment</li>
                          </ul>
                        </div>

                        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 mt-4">
                          <p className="text-sm text-primary-800 dark:text-primary-200">
                            The scoring system is implemented using TypeScript and follows SOLID principles, with a modular design that allows for easy updates and modifications to the scoring criteria.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 mt-6">
                  <p className="text-sm text-primary-800 dark:text-primary-200">
                    Note: The scoring system is regularly updated to reflect evolving technology trends and project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 