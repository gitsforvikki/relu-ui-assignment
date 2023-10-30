import React, { useState } from "react";

import { Link } from "react-router-dom";
import home from "../assets/icons/nav-icons/home.svg";
import heart from "../assets/icons/nav-icons/heart (1).svg";
import message from "../assets/icons/nav-icons/message.svg";
import favorite from "../assets/icons/nav-icons/favorite.svg";
import profile from "../assets/icons/nav-icons/profile.svg";
import setting from "../assets/icons/nav-icons/setting.svg";
import notification from "../assets/icons/nav-icons/notification.svg";
import logout from "../assets/icons/nav-icons/logout.svg";

let Navbar = () => {
  let [flag, setFlag] = useState({
    proprt: "hidden",
  });

  let clickNavToggle = () => {
    setFlag({
      proprt: flag.proprt === "hidden" ? "block" : "hidden",
    });
  };

  return (
    <div>
      <div className="    lg:w-56  lg:min-h-screen mx-3">
        <div className=" flex items-center pl-10 py-4 rounded-md bg-white mb-6 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
              onClick={clickNavToggle}
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div
          className={`relative sm: ${flag.proprt}  lg:block  flex flex-col  bg-white  rounded-md min-h-screen`}
        >
          <div>
            <ul className="  py-4 pr-0 flex flex-col gap-y-5">
              {/*......................... Home.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={home} />
                  <span>Home</span>
                </Link>
              </li>

              {/*......................... Notifications.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={notification} />
                  <span>Notifications</span>
                </Link>
              </li>

              {/*......................... Shop.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={heart} />
                  <span>Shop</span>
                </Link>
              </li>

              {/*......................... Conversation.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={message} />
                  <span>Conversation</span>
                </Link>
              </li>

              {/*......................... Wallets.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mx-4  w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                    />
                  </svg>

                  <span>Wallet</span>
                </Link>
              </li>

              {/*......................... Subscriptions.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={favorite} />

                  <span>Subscription</span>
                </Link>
              </li>

              {/*......................... My profile.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={profile} />

                  <span>My Profile</span>
                </Link>
              </li>

              {/*......................... Setting.............................. */}
              <li>
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={setting} />

                  <span>Setting</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-7">
            <ul>
              <li className="pb-4">
                <Link
                  to="/"
                  className="mx-1 pl-4 flex items-center justify-start text-gray-500 hover:text-gray-800 hover:border-green-500 hover:border-l-4 "
                >
                  <img className="mx-4  w-4 h-4" src={logout} />
                  <span className="text-green-400 text-sm">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
