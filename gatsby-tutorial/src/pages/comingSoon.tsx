import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const ComingSoonPage = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          {/* Spaceship Animation */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            {/* Spaceship */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24">
              <div className="relative w-full h-full">
                {/* Main body */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 rounded-t-full transform -rotate-45 shadow-lg"></div>
                {/* Cockpit */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-300 dark:bg-blue-400 rounded-full shadow-inner"></div>
                {/* Wings */}
                <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-r from-primary-400 to-blue-400 transform -rotate-45"></div>
                {/* Engine glow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full blur-md animate-pulse"></div>
              </div>
            </div>

            {/* Orbiting elements */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  animation: `orbit ${3 + i}s linear infinite`,
                  transformOrigin: '100px 100px',
                  transform: `rotate(${i * 120}deg) translateX(100px) rotate(-${i * 120}deg)`
                }}
              />
            ))}

            {/* Stars background */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`
                }}
              />
            ))}
          </div>

          <div className="relative">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're working on something exciting! 🚀
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              In the meantime, check out:
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/repositories"
                className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Repositories
              </Link>
              <Link
                to="/cv"
                className="group inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(100px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(100px) rotate(-360deg);
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
  )
}

export default ComingSoonPage

export const Head = () => <title>Coming Soon - Steve Lee</title> 