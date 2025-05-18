import React from 'react';

interface VolunteerExperience {
  period: string;
  title: string;
  organization: string;
  organizationUrl: string;
  description: string;
  skills: string[];
}

interface VolunteerProps {
  experiences: VolunteerExperience[];
}

const Volunteer = ({ experiences }: VolunteerProps) => {
  return (
    <div className="card">
      <h2 className="card-header">Volunteer Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp: VolunteerExperience, index: number) => (
          <div key={index} className="timeline-item group">
            <div className="timeline-dot" />
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 transform transition-transform duration-300 group-hover:translate-x-2">
                {exp.period}
              </div>
              <h3 className="text-xl font-semibold transform transition-transform duration-300 group-hover:translate-x-2">
                <a
                  href={exp.organizationUrl}
                  className="link inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.title}
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
                {exp.organization}
              </div>
              <p className="text-gray-600 dark:text-gray-400 transform transition-transform duration-300 group-hover:translate-x-2">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill: string, skillIndex: number) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer; 