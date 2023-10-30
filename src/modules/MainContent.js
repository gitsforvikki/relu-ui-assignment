import React from "react";
import search from "../assets/icons/other-icons/search.svg";
import filter from "../assets/icons/other-icons/filter.svg";
import lara from "../assets/profile-img/lara-liones.png";
import laraImage from "../assets/img/lara.jpg";
import thomas from "../assets/profile-img/thomas.png";
import thomasImage from "../assets/img/thomas.jpg";
import heart from "../assets/icons/other-icons/heart.svg";
import comments from "../assets/icons/other-icons/comment.svg";
import share from "../assets/icons/other-icons/share.svg";
import image2 from "../assets/img/card-img/image-2.png";
import image3 from "../assets/img/card-img/image-3.png";
import star from "../assets/icons/other-icons/star.svg";



let MainContent = () => {
  return (
    <React.Fragment>
      <div>
        {/* search section */}
        <div className="bg-white px-3  mx-3 py-6 mb-6 rounded-md">
          <div className="flex justify-between">
            <div className="flex gap-x-1 items-center text-gray-400 text-sm">
              <span>
                <img src={search} />
              </span>
              <span>Search here....</span>
            </div>
            <div className="flex gap-x-1 items-center text-sm">
              <span>
                <img src={filter} />
              </span>
              <span>Filters</span>
            </div>
          </div>
        </div>
        {/* search section end. */}

        {/* First section */}
        <div className="bg-white mx-3 rounded-md">
          {/* profile section */}
          <div className="flex justify-between rounded-md  px-3  m-3 py-4  ">
            <div className="flex gap-x-3 items-center">
              <span>
                <img src={lara} className="w-15 h-15" />
              </span>
              <span className="flex flex-col">
                <small className="text-xl ">Lara Leones</small>
                <small className="text-sm text-gray-500">@thewallart</small>
              </span>
            </div>
            <div className="flex gap-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* paragraph section */}
          <div className="px-3  m-3 py-4 ">
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span className="text-red-600"> Read More</span>
            </p>
          </div>
          {/* image section */}
          <div className="px-3  m-3 py-4 relative">
            <img src={laraImage} alt="" className="w-full " />
            <img src={heart} alt="" className="absolute top-10 right-10"/>
          </div>

          {/* border */}
          <div className="border-gray-300 border-t"></div>

          {/* Social icons */}
          <div className="flex gap-x-4 px-3  m-3 py-4 ">
            <div className="flex gap-x-2 items-center ">
              <img src={heart} alt="" />
              <p className="text-lg">9.8k</p>
            </div>
            <div className="flex gap-x-2 items-center ">
              <img src={comments} alt="" />
              <p className="text-lg">6.8k</p>
            </div>
            <div className="flex gap-x-2 items-center ">
              <img src={share} alt="" />
              <p className="text-lg">7.2k</p>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="bg-white mx-3 rounded-md">
          {/* profile section */}
          <div className="flex justify-between rounded-md  px-3  m-3 py-4  ">
            <div className="flex gap-x-3 items-center">
              <span>
                <img src={thomas} className="w-15 h-15" />
              </span>
              <span className="flex flex-col">
                <small className="text-xl ">Thomas J.</small>
                <small className="text-sm text-gray-500">
                  @thecustomcreater
                </small>
              </span>
            </div>
            <div className="flex gap-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* paragraph section */}
          <div className="px-3  m-3 py-4">
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span className="text-red-600"> Read More</span>
            </p>
          </div>
          {/* image section */}
          <div className="px-3  m-3 py-4 relative">
            <img src={thomasImage} alt="" className="w-full" />
            <img src={heart} alt="" className=" absolute top-10 right-10"/>
          </div>

          {/* border */}
          <div className="border-gray-300 border-t"></div>

          {/* Social icons */}
          <div className="flex gap-x-4 px-3  m-3 py-4 ">
            <div className="flex gap-x-2 items-center ">
              <img src={heart} alt="" />
              <p className="text-lg">9.8k</p>
            </div>
            <div className="flex gap-x-2 items-center ">
              <img src={comments} alt="" />
              <p className="text-lg">6.8k</p>
            </div>
            <div className="flex gap-x-2 items-center ">
              <img src={share} alt="" />
              <p className="text-lg">7.2k</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="mx-3 flex flex-col gap-y-4">
            <img src={image2} alt="" className="" />
            <span>Modern Wall Decor Framed Painting</span>
            <span className="flex justify-between">
              <span>$199.99</span>
              <span className="flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </span>
            </span>
          </div>

          <div className="mx-3 flex flex-col gap-y-4">
            <img src={image3} alt="" className="" />
            <span>Modern Wall Decor Framed Painting</span>
            <span className="flex justify-between">
              <span>$199.99</span>
              <span className="flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </span>
            </span>
          </div>
        </div>
        <div className="my-20"></div>
      </div>
    </React.Fragment>
  );
};

export default MainContent;
