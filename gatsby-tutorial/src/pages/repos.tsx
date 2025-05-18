import React from 'react';
import Layout from '../components/layout';

const RepoPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="relative mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Repositories
            </h1>
            <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* GitHub Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://github.com/steveleecode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  alt="steveleecode" 
                  src="https://github-readme-stats.vercel.app/api/?username=steveleecode&theme=dark&show_icons=true&card_width=945px" 
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </a>
              <a 
                href="https://github.com/s-stleeCSA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  alt="s-stleeCSA" 
                  src="https://github-readme-stats.vercel.app/api/?username=s-stleeCSA&theme=dark&show_icons=true&card_width=945px" 
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Featured Repositories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Repositories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/steveleecode.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/steveleecode.github.io" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=steveleecode.github.io&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/TOFSensor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/TOFSensor" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=TOFSensor&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/Price-Tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/Price-Tracker" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=Price-Tracker&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/shakespeareGPT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/shakespeareGPT" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=shakespeareGPT&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/Lease-Tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/Lease-Tracker" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=Lease-Tracker&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
                <a 
                  className="transform hover:scale-[1.02] transition-transform duration-300" 
                  href="https://github.com/steveleecode/interest-calculator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    alt="steveleecode/interest-calculator" 
                    src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&repo=interest-calculator&theme=dark&show_owner=false&card_width=900px" 
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="flex justify-center mt-8">
              <a
                href="https://github.com/steveleecode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RepoPage;

export const Head = () => <title>Steve Lee - Repositories</title>; 