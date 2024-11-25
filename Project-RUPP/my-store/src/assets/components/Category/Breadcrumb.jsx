
import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex z-20 sticky top-[120px] mb-1" aria-label="Breadcrumb">
      <ol className="inline-flex ml-6 pl-4 w-full items-center py-4 bg-white">
        {items.map((item, index) => (
          <li key={index} aria-current={index === items.length - 1 ? "page" : undefined}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.link}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
