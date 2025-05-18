import React from 'react';
import Layout from '../components/layout';
import Basics from '../components/cv/Basics';
import Volunteer from '../components/cv/Volunteer';
import Education from '../components/cv/Education';

const CVPage = () => {
  const basicsData = {
    name: 'Stephen Lee',
    role: 'Student at Eastlake High School - C/O 2026',
    email: 'stevelee_2008@outlook.com',
    phone: '(425) 652-3781',
    summary: 'A Seattle-born student seeking to apply his problem-solving skills in a technologically advanced environment'
  };

  const volunteerData = [{
    period: '2023.07 - Present',
    title: 'Youth Coding Volunteer',
    organization: 'Mighty Coders',
    organizationUrl: 'https://mightycoders.io/',
    description: 'Led coding bootcamps to teach in-need youth coding skills such as',
    skills: [
      'Scratch',
      'Roblox Studio',
      'Python Game Development',
      'Java Programming'
    ]
  }];

  const educationData = [{
    period: '2022.09 - Present',
    degree: 'High School Diploma',
    school: 'Eastlake High School',
    schoolUrl: 'https://ehs.lwsd.org/',
    location: 'Sammamish, Washington',
    coursework: [
      'AP Computer Science A',
      'AP Physics 1',
      'University of Washington Math 120 (Precalculus)',
      'AP Calculus AB',
      'AP Physics 2',
      'Python Data Structures'
    ]
  }];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="relative mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Curriculum Vitae
            </h1>
            <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <Basics {...basicsData} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <Education experiences={educationData} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Volunteer Experience
              </h2>
              <Volunteer experiences={volunteerData} />
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;

export const Head = () => <title>Steve Lee - CV</title>; 