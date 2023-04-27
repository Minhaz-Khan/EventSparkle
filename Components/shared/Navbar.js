'use client';
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
// import { GoThreeBars } from "react-icons/go";
// import { GrFormClose } from "react-icons/gr";
// import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <header className="">
      <nav
        x-data="{ isOpen: false }"
        className="relative bg-white shadow dark:bg-gray-800"
      >
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
              <img className="w-auto md:h-10 mr-2 h-7" src="" alt="" />
              <h4 className="text-3xl text-text_Primary font-DM_Serif font-bold">
                EventSparkle
              </h4>
            </Link>
            <div className="flex  lg:hidden">
              <label
                htmlFor="dashboard-drawer"
                className="text-gray-500 btn btn-ghost dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </label>{" "}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-95 "
                : "opacity-0 -translate-x-full "
            }absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div className="flex flex-col md:flex-row justify-items-center md:mx-6">
              {/* <Link className={router.pathname === "/" ? 'text-text_Secondry md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-800 transition-colors duration-300 transform  hover:text-text_Primary dark:hover:text-[#EEA800] md:mx-4 md:my-0"} href={'/'} >Home</Link> */}
              <Link
                className="my-2 text-lg font-medium text-text_Primary transition-colors duration-300 transform  hover:text-text_Secondry  md:mx-4 md:my-0"
                href={"/"}
              >
                Home
              </Link>
              {/* THIS IS LOGIN */}
              <Link
                className="my-2 text-lg font-medium text-text_Primary transition-colors duration-300 transform  hover:text-text_Secondry  md:mx-4 md:my-0"
                href="/SignUp"
              >
                Sign Up
              </Link>

            
            </div>

         
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;