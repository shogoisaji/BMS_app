import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed h-36 -mt-12 bg-emerald-500 border-gray-200 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className="flex items-center flex-shrink-0 pl-2">
          {/* Lottie animation and title here */}
          <span className="-ml-8 self-center lg:text-3xl text-xl font-semibold whitespace-nowrap text-gray-100">
            Book Mamagement System
          </span>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pr-6 mt-4"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lgs md:flex-row md:space-x-6 md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/book-list"
                className="block py-2 pl-3 pr-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rentals"
                className="block py-2 pl-3 pr-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0"
              >
                Rental
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="block py-2 pl-3 pr-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0"
              >
                Account
              </Link>
            </li>
            <li>
              <Link to="/account" className="">
                {/* User avatar here */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
