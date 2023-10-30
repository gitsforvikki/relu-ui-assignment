import React from "react";
import card1 from "../assets/img/card-img/card-1-2x.png";
import card2 from "../assets/img/card-img/card-2-2x.png";
import card3 from "../assets/img/card-img/card-3-2x.png";
import card4 from "../assets/img/card-img/card-4-2x.png";
import card5 from "../assets/img/card-img/card-5-2x.png";
import profile1 from "../assets/img/card-img/card-profile/profile-1.png";
import profile2 from "../assets/img/card-img/card-profile/profile-2.png";
import profile3 from "../assets/img/card-img/card-profile/profile-3.png";
import profile4 from "../assets/img/card-img/card-profile/profile-4.png";

let Photographer = () => {
  return (
    <React.Fragment>
      <div className=" min-h-screen">
        <div className="md:w-70  min-h-screen">
          {/* seller section */}
          <div className="sellerClass text-white px-4 py-6 mx-3 mb-6  rounded-md text-center">
            <span>Become a Seller</span>
          </div>
          {/* Artist section */}
          <div className="flex gap-x-3  pb-4 mx-3">
            <span>Artists</span>
            <span className="text-sm text-gray-500">Photographer</span>
          </div>
          {/* photo-card section */}
          <div className="flex flex-col gap-y-6">
            {/* card-1 */}
            <div className="relative mx-3 ">
              <img src={card1} alt="" className="w-full" />
              <div className="absolute bottom-4 left-6 md:bottom-2 md:left-3">
                <div className="flex flex-row gap-x-1">
                  <div>
                    <img src={profile1} alt="" />
                  </div>
                  <div className="flex flex-col text-white ">
                    <span>Thomas Edward</span>
                    <span className="text-sm ">@thewildwithyou</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="relative mx-3 ">
              <img src={card2} alt="" className="w-full" />
              <div className="absolute bottom-4 left-6 md:bottom-2 md:left-3">
                <div className="flex flex-row gap-x-1">
                  <div>
                    <img src={profile2} alt="" />
                  </div>
                  <div className="flex flex-col text-white ">
                    <span className="text-sm">Chris Doe</span>
                    <span className="text-xs ">@thewildwithyou</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="relative mx-3 ">
              <img src={card3} alt="" className="w-full" />
              <div className="absolute bottom-2 left-3">
                <div className="flex flex-row gap-x-1">
                  <div>
                    <img src={profile3} alt="" />
                  </div>
                  <div className="flex flex-col text-white ">
                    <span>Emilie Jones</span>
                    <span className="text-sm ">@thewildwithyou</span>
                  </div>
                </div>
              </div>
            </div>

            {/* card-4 */}
            <div className="relative mx-3">
              <img src={card4} alt="" className="w-full" />
              <div className="absolute bottom-2 left-3">
                <div className="flex flex-row gap-x-1">
                  <div>
                    <img src={profile4} alt="" />
                  </div>
                  <div className="flex flex-col text-white ">
                    <span>Jessica Williams</span>
                    <span className="text-sm ">@thewildwithyou</span>
                  </div>
                </div>
              </div>
            </div>

            {/* card-4 */}
            <div className="relative mx-3">
              <img src={card5} alt="" className="w-full" />
              <div className="absolute bottom-2 left-3">
                <div className="flex flex-row gap-x-1">
                  <div>
                    <img src={profile4} alt="" />
                  </div>
                  <div className="flex flex-col text-white ">
                    <span>Jessica Williams</span>
                    <span className="text-sm ">@thewildwithyou</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly  text-gray-500">
              <span style={{ fontSize: "12px" }}>2022©logo name</span>
              <span style={{ fontSize: "12px" }}>
                Developed by ivan Infotech
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Photographer;
