import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <>
      <nav className='max-w-6xl px-4 py-10 mx-auto md:py-20'>
        <div className='flex items-center justify-between md:flex-row'>

            <div className="flex flex-col">
                <a href='/'>
                    <h1 className='text-xl font-semibold dark:text-gray-100"'>Tom Patterson</h1>
                    <p className='text-base font-light text-gray-500 dark:text-gray-300'>Full Stack Developer</p>
                </a>
            </div>

            <div className='hidden space-x-8 md:block'>
                <Link classname='text-base font-normal text-gray-600 dark:text-gray-300' href="/">
                    About
                </Link>
                <Link classname='text-base font-normal text-gray-600 dark:text-gray-300' href="/">
                    Projects
                </Link>
                <Link classname='text-base font-normal text-gray-600 dark:text-gray-300' href="/">
                    Experience
                </Link>
                <Link classname='text-base font-normal text-gray-600 dark:text-gray-300' href="/">
                    Contact me 
                </Link>
            </div>
            
            <div className='flex flex-row items-center space-x-4'>
                <a href="https://www.linkedin.com/in/thomas-patterson-3b5716130/" target="_blank">
                    <svg 
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 bi bi-linkedin'
                    fill="currentColor"

                    >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                        </path>
                    </svg>
                </a>

                <a href="https://github.com/TomPatterson9" target="_blank">
                    <svg 
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 bi bi-linkedin'
                    fill="currentColor"

                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                        </path>
                    </svg>
                </a>

                <a href="https://github.com/TomPatterson9" target="_blank">
                    <svg 
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 bi bi-linkedin'
                    fill="currentColor"
                    >
                        <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z">
                        </path>
                    </svg>
                </a>

                <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
            </div>
        


        </div>
      </nav>
    </>
  );
};