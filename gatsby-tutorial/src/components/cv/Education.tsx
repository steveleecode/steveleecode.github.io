import React from 'react';

interface EducationExperience {
  period: string;
  degree: string;
  school: string;
  schoolUrl: string;
  location: string;
  coursework: string[];
}

interface EducationProps {
  experiences: EducationExperience[];
}

const Education = ({ experiences }: EducationProps) => {
  return (
    <div className="card">
      <h2 className="card-header">Education</h2>
      <div className="space-y-8">
        {experiences.map((exp: EducationExperience, index: number) => (
          <div key={index} className="timeline-item group">
            <div className="timeline-dot" />
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 transform transition-transform duration-300 group-hover:translate-x-2">
                {exp.period}
              </div>
              <h3 className="text-xl font-semibold transform transition-transform duration-300 group-hover:translate-x-2">
                <a
                  href={exp.schoolUrl}
                  className="link inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.degree}
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
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
              </h3>
              <div className="text-gray-700 dark:text-gray-300 transform transition-transform duration-300 group-hover:translate-x-2">
                {exp.school}, {exp.location}
              </div>
              <div className="mt-4 transform transition-transform duration-300 group-hover:translate-x-2">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.coursework.map((course: string, courseIndex: number) => (
                    <span key={courseIndex} className="skill-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 