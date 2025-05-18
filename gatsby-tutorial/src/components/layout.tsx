import React from 'react';
import Header from './header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 