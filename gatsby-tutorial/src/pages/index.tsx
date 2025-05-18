import React, { useState } from 'react';
import { Link } from 'gatsby';
import { projects } from '../data/projects';
import { getTopProjects } from '../utils/projectScorer';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/layout';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL']
  },
  {
    category: 'Web Development',
    items: ['React', 'Node.js', 'HTML/CSS', 'GraphQL', 'REST APIs', 'Gatsby']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'MongoDB', 'PostgreSQL']
  }
];

type ScrollState = {
  position: number;
  direction: number;
  velocity: number;
};

const useScroll = () => {
  const [scrollState, setScrollState] = useState({
    position: 0,
    direction: 0,
    velocity: 0
  });

  React.useEffect(() => {
    let lastPosition = 0;
    let lastTime = Date.now();
    let ticking = false;

    const updateScroll = () => {
      const currentPosition = window.scrollY;
      const currentTime = Date.now();
      const timeElapsed = currentTime - lastTime;
      
      setScrollState({
        position: currentPosition,
        direction: currentPosition > lastPosition ? 1 : -1,
        velocity: Math.abs(currentPosition - lastPosition) / timeElapsed
      });

      lastPosition = currentPosition;
      lastTime = currentTime;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollState;
};

const IndexPage = () => {
  const featuredProjects = getTopProjects(projects, 3);
  const { position, direction, velocity } = useScroll();

  const getScrollTransform = () => {
    // Subtle vertical slide for the main container
    const translateY = Math.min(position * 0.1, 20);
    
    return {
      transform: `translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Animated Logo */}
              <div className="relative w-48 h-48 mx-auto mb-8" style={getScrollTransform()}>
                {/* Main Logo Circle */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
                
                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    {/* Hexagon Core */}
                    <div className="absolute inset-0">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                        style={{ transform: `rotate(${position * 0.05}deg)` }}
                      ></div>
                      <div 
                        className="absolute inset-2 bg-gradient-to-r from-blue-500 to-primary-500 rounded-full animate-pulse"
                        style={{ 
                          animationDelay: '0.5s',
                          transform: `rotate(${-position * 0.03}deg)`
                        }}
                      ></div>
                      <div 
                        className="absolute inset-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-pulse"
                        style={{ 
                          animationDelay: '1s',
                          transform: `rotate(${position * 0.02}deg)`
                        }}
                      ></div>
                    </div>

                    {/* Orbiting elements with scroll-based movement */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        style={{
                          animation: `orbit ${4 + i * 0.5}s linear infinite`,
                          transformOrigin: '60px 60px',
                          transform: `rotate(${i * 72 + position * 0.02}deg) translateX(${60 + Math.sin(position * 0.01) * 5}px) rotate(-${i * 72}deg)`
                        }}
                      />
                    ))}

                    {/* Inner Orbiting Elements with scroll-based movement */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`inner-${i}`}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-primary-400 rounded-full"
                        style={{
                          animation: `orbit ${2 + i * 0.5}s linear infinite reverse`,
                          transformOrigin: '60px 60px',
                          transform: `rotate(${i * 120 - position * 0.02}deg) translateX(${30 + Math.cos(position * 0.01) * 3}px) rotate(-${i * 120}deg)`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Glowing Rings with scroll-based rotation */}
                <div 
                  className="absolute inset-0 rounded-full border-4 border-primary-400/30 animate-spin-slow"
                  style={{ transform: `rotate(${position * 0.02}deg)` }}
                ></div>
                <div 
                  className="absolute inset-2 rounded-full border-2 border-blue-400/20 animate-spin-slow"
                  style={{ 
                    animationDirection: 'reverse', 
                    animationDuration: '8s',
                    transform: `rotate(${-position * 0.01}deg)`
                  }}
                ></div>

                {/* Energy Particles with scroll-based movement */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `particle ${2 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                      transform: `translate(${Math.sin(position * 0.005 + i) * 3}px, ${Math.cos(position * 0.005 + i) * 3}px)`
                    }}
                  />
                ))}

                {/* Energy Beams with scroll-based movement */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`beam-${i}`}
                    className="absolute w-0.5 h-12 bg-gradient-to-b from-primary-400/0 via-primary-400/50 to-primary-400/0"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45 + position * 0.01}deg) translateY(${-24 + Math.sin(position * 0.005) * 3}px)`,
                      animation: `beam ${3 + i * 0.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Steve Lee
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & Problem Solver
              </p>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                I build innovative solutions to complex problems, focusing on clean code, 
                user experience, and scalable architecture. Currently exploring the intersection 
                of web development and artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((projectScore, index) => (
                <ProjectCard
                  key={projectScore.project.title}
                  projectScore={projectScore}
                  index={index}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/repositories"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
              >
                View All Projects
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:stevelee@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://github.com/stevelee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(60px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(60px) rotate(-360deg);
            }
          }

          @keyframes particle {
            0%, 100% {
              opacity: 0;
              transform: scale(0) translate(0, 0);
            }
            50% {
              opacity: 1;
              transform: scale(1) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
            }
          }

          @keyframes beam {
            0%, 100% {
              opacity: 0;
              transform: rotate(var(--rotation)) translateY(-24px) scaleY(0);
            }
            50% {
              opacity: 1;
              transform: rotate(var(--rotation)) translateY(-24px) scaleY(1);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Steve Lee - Portfolio</title>; 