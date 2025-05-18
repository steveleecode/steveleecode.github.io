import React from 'react';
import Layout from '../components/layout';
import { projects } from '../data/projects';
import { getTopProjects } from '../utils/projectScorer';

// Spaceship Animation Component
const SpaceshipAnimation = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      // Hide spaceship when scrolling down, show when at top
      setIsVisible(currentPosition < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-24 right-8 w-24 h-24 pointer-events-none z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
      style={{
        transform: `translateY(${Math.min(scrollPosition * 0.1, 20)}px)`
      }}
    >
      <div className="relative w-full h-full">
        {/* Main body */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
          <div className="relative w-full h-full">
            {/* Spaceship body */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-blue-500/30 rounded-t-full transform -rotate-45 shadow-lg backdrop-blur-sm"></div>
            {/* Cockpit */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-300/20 dark:bg-blue-400/20 rounded-full shadow-inner"></div>
            {/* Wings */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-primary-400/30 to-blue-400/30 transform -rotate-45"></div>
            {/* Engine glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400/30 rounded-full blur-md animate-pulse"></div>
          </div>
        </div>

        {/* Orbiting elements */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
            style={{
              animation: `orbit ${3 + i}s linear infinite`,
              transformOrigin: '50px 50px',
              transform: `rotate(${i * 120}deg) translateX(50px) rotate(-${i * 120}deg)`
            }}
          />
        ))}

        {/* Stars background */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const CVPage = () => {
  const personalInfo = {
    name: 'Stephen Lee',
    title: 'Full Stack Developer',
    email: 'stevelee_2008@outlook.com',
    phone: '(425) 652-3781',
    location: 'Seattle, WA',
    linkedin: 'https://www.linkedin.com/in/stephen-lee-code/',
    github: 'https://github.com/steveleecode',
    summary: 'A passionate developer with a strong foundation in both frontend and backend technologies. Currently exploring the intersection of software development, artificial intelligence, and hardware integration. Seeking opportunities to apply and expand my skills in a challenging environment.'
  };

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
    frontend: ['React', 'Next.js', 'Gatsby', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Arduino', 'Computer Vision'],
    softSkills: ['Problem Solving', 'Team Collaboration', 'Technical Communication', 'Project Management', 'Adaptability']
  };

  const experience = [
    {
      role: 'Web Developer',
      organization: 'NextGen Consulting Group LLC',
      period: 'Feb 2025 - Present',
      location: 'Kirkland, WA',
      type: 'Internship',
      description: 'Designed and developed a professional, responsive business website for an IT consulting firm.',
      achievements: [
        'Implemented App Router architecture for scalable routing and clean project structure',
        'Integrated Framer Motion for smooth UI animations and improved user experience',
        'Ensured mobile-first design, dark mode support, and WCAG accessibility compliance',
        'Optimized performance and SEO for fast load times and high search visibility',
        'Followed modern development best practices including Git, type checking, and linting',
        'Collaborated with stakeholders to define business goals and create conversion-focused UI'
      ],
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://next-gen-consulting-group.vercel.app/'
    },
    {
      role: 'Lead Coding Mentor',
      organization: 'Mighty Coders',
      period: 'Jan 2025 - Present',
      location: 'Sammamish, WA',
      type: 'Part-time',
      description: 'Lead coding instructor for elementary and middle school students.',
      achievements: [
        'Taught Python, Java, and JavaScript to students of varying skill levels',
        'Developed curriculum covering basic syntax to advanced data structures',
        'Introduced class progress system that increased student retention',
        'Mentored assistant instructors and improved teaching methodologies'
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'Teaching Methodologies']
    },
    {
      role: 'Assistant Coding Mentor',
      organization: 'Mighty Coders',
      period: 'Aug 2024 - Jan 2025',
      location: 'Sammamish, WA',
      type: 'Part-time',
      description: 'Assisted in teaching coding to young students.',
      achievements: [
        'Supported lead instructors in teaching Python, Java, and JavaScript',
        'Helped students understand programming concepts and problem-solving',
        'Contributed to curriculum development and student assessment'
      ],
      technologies: ['Python', 'Java', 'JavaScript']
    },
    {
      role: 'Programming Sub-Team Member',
      organization: 'FRC Team #1294 Pack of Parts',
      period: 'Sep 2023 - Present',
      location: 'Sammamish, WA',
      type: 'Volunteer',
      description: 'Member of the programming team for FIRST Robotics Competition.',
      achievements: [
        'Developed and implemented robot control systems',
        'Worked on computer vision and autonomous navigation',
        'Collaborated with mechanical and electrical teams'
      ],
      technologies: ['Java', 'Computer Vision', 'Robotics']
    }
  ];

  const education = [
    {
      school: 'Bellevue College',
      degree: 'Computer Science',
      period: 'Dec 2024 - Jun 2026',
      location: 'Bellevue, WA',
      type: 'Running Start Student',
      gpa: '4.0',
      coursework: ['C++ Programming']
    },
    {
      school: 'Eastlake High School',
      degree: 'High School Diploma',
      period: 'Sep 2021 - Jun 2026',
      location: 'Sammamish, WA',
      type: 'Junior',
      gpa: '4.0 (Unweighted, All Honors and AP Classes)',
      activities: [
        'FRC 1294 Pack of Parts (Robotics)',
        'Computer Science Honor Society',
        'Black Student Union',
        'DECA Marketing and Operations Research',
        'National Science Honor Society',
        'National Honor Society',
        'CS Council',
        'Technology Student Association'
      ],
      achievements: [
        'Member of University of Washington in HS Program',
        'Member of Bellevue College in HS Program',
        'AP Scores: Computer Science A (5), Physics 1 (4), World History (5), European History (4)'
      ]
    }
  ];

  const awards = [
    {
      title: 'USACO Silver',
      issuer: 'USA Computing Olympiad',
      date: 'Mar 2025',
      description: 'Awarded Silver Division for demonstrating strong algorithmic problem-solving skills'
    },
    {
      title: 'DECA ICDC Finalist and Washington State Medalist',
      issuer: 'DECA',
      date: 'Dec 2024',
      description: 'Placed 4/143 teams in WA State Deca Conference in Sports and Entertainment Marketing. Competed at ICDC, placed top 20 competitors in the world.'
    },
    {
      title: 'Best Technical Implementation',
      issuer: 'Pratham AI Hackathon',
      date: 'Aug 2024',
      description: 'Earned individual award for best technical implementation during the 2024 Pratham AI Hackathon'
    },
    {
      title: 'Finalist Award',
      issuer: 'Pratham AI Hackathon',
      date: 'Aug 2024',
      description: 'Earned finalist award for CareerQuest, an innovative solution to help prepare underserved youth in India for the workforce'
    },
    {
      title: 'National African American Recognition Program',
      issuer: 'CollegeBoard',
      date: 'Aug 2024'
    },
    {
      title: 'AP Scholar with Honor',
      issuer: 'CollegeBoard',
      date: 'Jul 2024',
      description: 'Attained an average score of at least 3.25 on all AP Exams taken, and scores of 3 or higher on four or more exams'
    }
  ];

  // Get top 3 projects using projectScorer
  const featuredProjects = getTopProjects(projects, 3);

  return (
    <Layout>
      <SpaceshipAnimation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-primary-500 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center hover:text-primary-500 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {personalInfo.phone}
              </a>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">{personalInfo.summary}</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience Section */}
              <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary-500">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <span className="text-sm text-primary-400">{exp.type}</span>
                      </div>
                      <div className="flex items-center text-gray-300 mb-2">
                        <span className="font-medium">{exp.organization}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      {exp.achievements && (
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
                <div className="grid gap-6">
                  {featuredProjects.map((projectScore, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">{projectScore.project.title}</h3>
                      <p className="text-gray-300 mb-4">{projectScore.project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projectScore.project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={projectScore.project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Skills Section */}
              <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                      <div className="text-gray-300 mb-2">
                        <span className="font-medium">{edu.degree}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-300 mb-2">{edu.location}</p>
                      <p className="text-primary-400 mb-2">{edu.type}</p>
                      {edu.gpa && (
                        <p className="text-gray-300 mb-2">GPA: {edu.gpa}</p>
                      )}
                      {edu.activities && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-300 mb-2">Activities & Societies</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {edu.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.achievements && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-300 mb-2">Achievements</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards Section */}
              <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Awards & Recognition</h2>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                        <span className="text-sm text-primary-400">{award.date}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-1">{award.issuer}</p>
                      {award.description && (
                        <p className="text-gray-300 text-sm">{award.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/cv.pdf"
              download
              className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(50px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(50px) rotate(-360deg);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default CVPage;

export const Head = () => <title>Steve Lee - CV</title>; 