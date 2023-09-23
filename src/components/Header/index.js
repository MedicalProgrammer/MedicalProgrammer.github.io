import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { BsMenuUp } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
const Header = () => {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState(false);
  const [rules, setRules] = useState();

  var headers = {
    origin: 'http://localhost:3000',     
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
  useEffect(() => {
    fetch("https://api.v2rayreseller.com/api/v1/portal_user", {
      credentials: "include", // Include credentials (cookies) in the request
    })
      .then((response) => {
        if (response.status === 200) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLogin(false);
      });
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    
  }, [theme]);



  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSignout = () => {
    const urlll="https://api.v2rayreseller.com/api/v1/signout";

    const res =  axios.get(urlll, {
            
      withCredentials: true,

// az in bebad in kire klharo bezar hameja ham to get ham topost
// va menallahe siktr

    },headers)
  .then(function (response) {
          if(response.data.status=="success"){
            
             
      window.location.replace("/");



              





             

              
          }
  })
  
  .catch((err) => {
    })        

  ;  };

 





  const handleRegister = () => {
    window.location.replace("/register");
  };

  return (
    <div className="pb-20">
      <Navbar
        fluid={true}
        rounded={false}
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-b border-gray-200 dark:border-gray-600 "
      >
        <Navbar.Brand className="container flex flex-wrap items-center justify-between  mx-auto pb-1">
          <Link to="/" className="flex items-center">
            <img
              src="https://drhannanehazimi.com/wp-content/uploads/2019/12/dr.azimi_.png"
              className="h-8 mx-1 sm:h-9"
              alt="Dr Hannaneh Azimi"
            />
            <span className="self-center md:text-xl hidden md:block font-semibold whitespace-nowrap dark:text-white">
              کلینیک دکتر حنانه عظیمی
            </span>
          </Link>
          <div className="hidden lg:block">
            <Link
              className="self-center md:text-xl text-lg  whitespace-nowrap dark:text-white  p-5"
              to="/"
            >
              خانه{" "}
            </Link>
            {login ? (
              <>
                <Link
                  className="self-center md:text-xl text-lg  whitespace-nowrap dark:text-white  p-5"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link className="dark:text-white p-5" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="dark:text-white p-5" to="/wallet">
                  Wallet
                </Link>
                <Link className="dark:text-white p-5" to="/traffic">
                  Traffic
                </Link>
              </>
            ) : (
              <Link
                className="self-center md:text-xl text-lg  whitespace-nowrap dark:text-white  p-5"
                to="/services"
              >
                خدمات کلینیک
              </Link>
            )}
          </div>
          <div className="flex items-center justify-center md:order-2 ">
            {login ? (
              <>
                <Link to="#" className="">
                  <button
                    type="button"
                    onClick={handleSignout}
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Sign Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/services" className="">
                  <button
                    type="button"
                    class="text-purple-700 hover:text-white border flex items-center justify-center border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center mr-2  dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
                  >
                    ۰۲۱۲۲۳۰۲۲۴۱
                  </button>
                </Link>
                <Link to="/services" className="">
                  <button
                    type="button"
                    class="text-purple-700 hover:text-white border flex items-center justify-center border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center mr-2  dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
                  >
                    مشاوره رایگان
                  </button>
                </Link>
              </>
            )}

            {theme === "dark" ? (
              <button
                onClick={handleThemeSwitch}
                type="button"
                className="text-gray-500 dark:text-gray-400  dark:hover:bg-gray-700 focus:outline-none  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm w-10 h-10 mr-2 inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleThemeSwitch}
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm w-10 h-10 mr-2 inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            )}

            <div className="lg:hidden flex align-middle justify-center p-1 text-gray-800 dark:text-white">
              <svg
                class="w-5 "
                onClick={(e) => setToggle(!toggle)}
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
            </div>
          </div>
        </Navbar.Brand>
        {toggle ? (
          <div className="  dark:bg-gray-600 rounded-lg  dark:text-white w-full">
            <div>
              <ul class="font-medium flex flex-col p-4 md:p-0 py-1 px-2 border  border-gray-200 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                <Navbar.Link
                  as={Link}
                  onClick={(e) => setToggle(!toggle)}
                  to="/"
                  className=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  خانه
                </Navbar.Link>

                {login ? (
                  <></>
                ) : (
                  <Navbar.Link
                    as={Link}
                    onClick={(e) => setToggle(!toggle)}
                    to="/services"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    خدمات کلینیک
                  </Navbar.Link>
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </Navbar>
      
    </div>
  );
};

export default Header;
