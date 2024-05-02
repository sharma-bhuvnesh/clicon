import React from "react";
import Carousel from "../../Components/carousel";

let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

function Home() {
  return (
    <div>
      {/* Sale banner */}
      <div className="bg-gray-900 text-white py-5">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              <div className="bg-warning-300 text-gray-900 px-3 py-1.5 font-semibold text-xl -rotate-3">
                Black
              </div>
              <div className="text-white pl-3 text-white font-semibold text-2xl">
                Friday
              </div>
            </div>
            <div className="text-white text-white font-medium text-sm">
              Up to{" "}
              <span className=" font-bold text-warning-500 text-4xl align-middle">
                59%
              </span>{" "}
              OFF
            </div>
            <div className="flex bg-warning-500 px-6 py-3.5 text-gray-900 text-sm font-bold">
              Shop Now
              <img
                alt=""
                className="ml-2"
                src={require("../../assets/icons/ArrowRight.svg").default}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top Nav */}
      <div className="py-4 bg-secondary-700">
        <div className="container flex mx-auto justify-between">
          <div className="text-white text-sm">
            Welcome to Clicon online eCommerce store.{" "}
          </div>
          <div className="flex">
            <div className="flex pr-3 mr-3 border-r border-white/20 ">
              <div className="text-white text-sm">Follow us:</div>
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Twitter.svg").default}
              />
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Facebook.svg").default}
              />
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Pinterest.svg").default}
              />
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Reddit.svg").default}
              />
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Youtube.svg").default}
              />
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/Instagram.svg").default}
              />
            </div>
            <select
              value="english"
              className="ml-2 bg-transparent border-0 text-white mr-2 pr-1"
            >
              <option value="english">Eng</option>
              <option value="option2">op2</option>
              <option value="option3">op3</option>
            </select>
            <select
              value="usd"
              className="bg-transparent border-0 text-white pr-1"
            >
              <option value="usd">USD</option>
              <option value="option2">op2</option>
              <option value="option3">op3</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle Nav */}
      <div className="py-4 bg-secondary-700 border-t border-white/20">
        <div className="container flex mx-auto items-center justify-between">
          <img alt="" src={require("../../assets/icons/Logo.svg").default} />
          <div className="relative w-1/2">
            <input
              type="text"
              id="voice-search"
              className="bg-white text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5"
              placeholder="Search anything..."
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <img
                alt=""
                src={require("../../assets/icons/SearchIcon.svg").default}
              />
            </button>
          </div>
          <div className="flex">
            <div className="relative">
              <img
                className="mr-3"
                alt=""
                src={require("../../assets/icons/ShoppingCart.svg").default}
              />
              <div className="-top-1.5 right-1 absolute min-w-6 min-h-5 font-bold text-gray-700 rounded-full text-sm text-secondary-700 bg-white flex items-center justify-center border-2 border-secondary-700">
                2
              </div>
            </div>
            <img
              className="mr-3"
              alt=""
              src={require("../../assets/icons/Heart.svg").default}
            />
            <img alt="" src={require("../../assets/icons/User.svg").default} />
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-b py-4 border-gray-50">
        <div className="flex container mx-auto justify-between">
          <div className="flex items-center">
            <select
              value="all"
              className="text-sm text-gray-900 font-medium px-4 py-5"
            >
              <option value="all">All Category</option>
            </select>
            <button className="flex ml-6 text-gray-600 text-sm items-center">
              <img
                alt=""
                className="mr-1"
                src={require("../../assets/icons/MapPinLine.svg").default}
              />
              Track Order
            </button>
            <button className="flex ml-6 text-gray-600 text-sm items-center">
              <img
                alt=""
                className="mr-2"
                src={
                  require("../../assets/icons/ArrowsCounterClockwise.svg")
                    .default
                }
              />
              Compare
            </button>
            <button className="flex ml-6 text-gray-600 text-sm items-center">
              <img
                alt=""
                className="mr-2"
                src={require("../../assets/icons/Headphones.svg").default}
              />
              Customer Support
            </button>
            <button className="flex ml-6 text-gray-600 text-sm items-center">
              <img
                alt=""
                className="mr-2"
                src={require("../../assets/icons/Info.svg").default}
              />
              Need Help
            </button>
          </div>
          <div className="flex items-center text-gray-900 text-lg">
            <img
              alt=""
              className="mr-2"
              src={require("../../assets/icons/PhoneCall.svg").default}
            />
            +1-202-555-0104
          </div>
        </div>
      </div>

      {/* Banner */}
      <div>
        <div className="container mx-auto flex">
          <div className="w-[60%]">
          <Carousel />

          </div>
          <div className="bg-black py-12 px-10">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
