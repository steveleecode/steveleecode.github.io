import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <div className="max-w-2xl w-full space-y-8 text-center animate-fade-in">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400 mb-4 animate-bounce">
              404
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Page not found
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
            Sorry 😔, we couldn't find what you were looking for.
            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200">
                  Try creating a page in <code className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-sm">src/pages/</code>
                </p>
              </div>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Go home
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found - Steve Lee</title> 