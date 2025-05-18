import React from 'react';

interface BasicsProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  summary: string;
}

const Basics = ({ name, role, email, phone, summary }: BasicsProps) => {
  return (
    <div className="card group">
      <h2 className="card-header">Basics</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 transform transition-transform duration-300 hover:translate-x-2">
          <div className="font-semibold text-gray-700 dark:text-gray-300">Name</div>
          <div className="col-span-2 text-gray-900 dark:text-gray-100">{name}</div>
        </div>
        <div className="grid grid-cols-3 gap-4 transform transition-transform duration-300 hover:translate-x-2">
          <div className="font-semibold text-gray-700 dark:text-gray-300">Role</div>
          <div className="col-span-2 text-gray-900 dark:text-gray-100">{role}</div>
        </div>
        <div className="grid grid-cols-3 gap-4 transform transition-transform duration-300 hover:translate-x-2">
          <div className="font-semibold text-gray-700 dark:text-gray-300">Email</div>
          <div className="col-span-2">
            <a
              href={`mailto:${email}`}
              className="link inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
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
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 transform transition-transform duration-300 hover:translate-x-2">
          <div className="font-semibold text-gray-700 dark:text-gray-300">Phone</div>
          <div className="col-span-2">
            <a href={`tel:${phone}`} className="link">
              {phone}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 transform transition-transform duration-300 hover:translate-x-2">
          <div className="font-semibold text-gray-700 dark:text-gray-300">Summary</div>
          <div className="col-span-2 text-gray-900 dark:text-gray-100">{summary}</div>
        </div>
      </div>
    </div>
  );
};

export default Basics; 