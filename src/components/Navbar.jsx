import { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAccDropdownOpen, setAccDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }
  function toggleAccDropdown() {
    setAccDropdownOpen(!isAccDropdownOpen);
  }

  return (
    <nav class="bg-white border-white dark:bg-white">
      <div class="max-w-screen-xl flex flex-wrap items-left justify-between text-left mx-auto pt-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/icon.png"
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
        </a>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:white dark:hover:bg-white dark:focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
        <div class="hidden  w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-300 bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
                aria-current="page"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent"
              >
                Integration
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleDropdown}
                className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent relative"
              >
                Help
                <span className="absolute inset-y-0 left-9 flex items-center pr-2 pointer-events-none">
                  {isDropdownOpen ? "▲" : "▼"}
                </span>
              </a>
              {isDropdownOpen && (
                <div className="absolute mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 3
                  </a>
                </div>
              )}
            </li>
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 bg-blue-700 rounded-md hover:bg-blue-600 md:bg-transparent md:p-0 dark:text-white md:dark:text-gray-500"
                aria-current="page"
              >
                <img src="/logo192.png" alt="Logo" className=" h-6 w-6" />
              </a>
            </li> */}
            <li > 
            {/* <a
                href="#"
                className="block py-2  bg-blue-700 rounded-md hover:bg-blue-600 md:bg-transparent md:p-0 dark:text-white md:dark:text-gray-500"
                aria-current="page"
              >
                <img src="/logo192.png" alt="Logo" className=" h-6 w-6" />
              </a> */}
              <a
                href="#"
                onClick={toggleAccDropdown}
                className=" py-2 text-gray-500 text-left flex items-center space-x-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent relative"
              >
                 <img src="/logo192.png" alt="Logo" className=" h-6 w-6 " />
                <p className="m-0">Account</p>
                <span className="absolute inset-y-0 left-20 flex items-center pl-2 pointer-events-none">
                  {isAccDropdownOpen ? "▲" : "▼"}
                </span>
              </a>
              {isAccDropdownOpen && (
                <div className="absolute mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Item 3
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
