import React from "react";
import Carousel from "../../Components/carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      <div className="border-b py-4 border-gray-100">
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
      <div className="my-6">
        <div className="container mx-auto flex">
          <div className="w-[60%] mr-6">
            <Carousel />
          </div>
          <div>
            <div className="bg-black pt-8 px-10 flex rounded mb-6">
              <div>
                <div className="uppercase mb-2 text-warning-500 text-sm">
                  summer sales
                </div>
                <div className="uppercase mb-3.5 text-white text-2xl">
                  New Google Pixel 6 Pro
                </div>
                <button className="uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center">
                  {" "}
                  show now{" "}
                  <img
                    className="ml-3"
                    alt=""
                    src={
                      require("../../assets/icons/ArrowRight-white.svg").default
                    }
                  />
                </button>
              </div>
              <div className="relative">
                <div className="absolute py-2 px-4 bg-warning-400 rounded right-0 -top-4">
                  29% OFF
                </div>
                <img alt="" src={require("../../assets/images/phone.png")} />
              </div>
            </div>
            <div className="bg-gray-50 py-4 px-10 flex rounded">
              <div className="mr-5">
                <img alt="" src={require("../../assets/images/airpods.png")} />
              </div>
              <div>
                <div className=" mb-3 text-gray-900 text-2xl">
                  Xiaomi FlipBuds Pro
                </div>
                <div className=" mb-5 text-secondary-500 font-semibold text-lg">
                  $299 USD
                </div>
                <button className="uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center">
                  {" "}
                  show now{" "}
                  <img
                    className="ml-3"
                    alt=""
                    src={
                      require("../../assets/icons/ArrowRight-white.svg").default
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Feature Section */}
      <div className="container mx-auto border border-gray-100 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 mb-14">
        <div className="flex relative mr-7">
          <div>
            <img
              alt=""
              src={require("../../assets/icons/Package.svg").default}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-900 mb-1">Fastest DELIVERY</div>
            <div className="text-sm text-gray-600">Delivery in 24/H</div>
          </div>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="flex relative mr-7">
          <div>
            <img
              alt=""
              src={require("../../assets/icons/Trophy.svg").default}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-900 mb-1">24 Hours Return</div>
            <div className="text-sm text-gray-600">
              100% money-back guarantee
            </div>
          </div>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="flex relative mr-7">
          <div>
            <img
              alt=""
              src={require("../../assets/icons/CreditCard.svg").default}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-900 mb-1">Secure Payment</div>
            <div className="text-sm text-gray-600">Your money is safe</div>
          </div>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="flex">
          <div>
            <img
              alt=""
              src={require("../../assets/icons/feat-Headphones.svg").default}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-900 mb-1">Support 24/7</div>
            <div className="text-sm text-gray-600">Live contact/message</div>
          </div>
        </div>
      </div>

      {/* Best Deals */}
      <div className="container mx-auto">
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <div className=" text-2xl text-gray-900 mr-6">Best Deals</div>
            <div className=" text-sm text-gray-900 mr-3">Deals ends in</div>
            <div className=" text-sm text-gray-900 px-3 py-1.5 bg-warning-300">
              16d : 21h : 57m : 23s
            </div>
          </div>
          <div className="flex text-sm font-semibold text-secondary-500">
            <div>Browse All Product</div>
            <img
              alt=""
              src={require("../../assets/icons/ArrowRight-blue.svg").default}
            />
          </div>
        </div>

        <div className="grid grid-cols-[repeat(5,_1fr)]">
          <div className="border border-gray-100 p-6 col-span-1 row-span-2">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
                <div className="bg-danger-500 text-white px-2.5 py-1.5 rounded text-xs font-semibold w-[fit-content]">
                  HOT
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              <span className="text-gray-300 line-through font-normal">
                $865.99
              </span>
              $442.12
            </div>
            <div className="text-sm text-gray-600 mb-6">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </div>
            <div className="flex items-center">
              <div className="bg-primary-100 p-2.5 rounded mr-2">
                <img
                  alt=""
                  src={require("../../assets/icons/Heart-Black.svg").default}
                />
              </div>
              <div className="uppercase flex bg-primary-500 px-4 py-2.5 text-white text-sm font-semibold rounded items-center mr-2">
                <img
                  alt=""
                  className="w-5 mr-2"
                  src={require("../../assets/icons/ShoppingCart.svg").default}
                />
                Add to cart
              </div>
              <div className="bg-primary-100 p-2.5 rounded">
                <img
                  alt=""
                  src={require("../../assets/icons/Eye.svg").default}
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
          <div className="border border-gray-100 p-6">
            <div className="relative mb-6">
              <img alt="" src={require("../../assets/images/ps5.png")} />
              <div className="absolute top-0">
                <div className="bg-warning-400 px-2.5 py-1.5 rounded text-xs font-semibold mb-2">
                  32% OFF
                </div>
              </div>
            </div>
            <div className="text-gray-900 mb-3">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </div>
            <div className="text-secondary-500 text-lg font-semibold mb-3">
              $442.12
            </div>
          </div>
        </div>
      </div>

      {/* Shop by categories */}
      <div className="container mx-auto mt-16">
        <div className="text-center font-bold text-gray-900 text-3xl mb-10">
          Shop with Category
        </div>
        <Slider {...settings}>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 1
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 2
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 3
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 4
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 5
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 6
            </div>
          </div>
          <div>
            <div className="border border-gray-100 p-6 text-gray-900 text-center mr-4">
              <img alt="" src={require("../../assets/images/pc.png")} />
              Test 7
            </div>
          </div>
        </Slider>
      </div>

      {/* Feature Products */}
      {/* 
      <div className="container mx-auto mt-16">
        <div className="flex">
          <div>
            <div className="bg-warning-300 text-center pt-8 px-4 pb-4">
              <div className="text-sm font-semibold text-danger-600 uppercase mb-1.5">
                Computer & accessories
              </div>
              <div className="font-bold text-gray-900 text-3xl mb-2.5">
                32% Discount
              </div>
              <div className="text-gray-700 text-base mb-4">
                For all electronics products
              </div>
              <div className="text-sm text-gray-900 mb-8">
                Offers ends in:{" "}
                <span className="uppercase rounded bg-white font-semibold px-3 py-1.5">
                  Ends Of christmas
                </span>
              </div>
              <button className=" mx-auto uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center">
                {" "}
                show now{" "}
                <img
                  className="ml-3"
                  alt=""
                  src={
                    require("../../assets/icons/ArrowRight-white.svg").default
                  }
                />
              </button>
            </div>
            <img alt="" src={require("../../assets/images/sale.jpg")} />
          </div>
          <div></div>
        </div>
      </div>
      */}

      {/*   Updates Section   */}
      <div className="container mx-auto mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <div className="text-base text-gray-900 uppercase font-semibold mb-4">
              flash sale today
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-base text-gray-900 uppercase font-semibold mb-4">
              Best Sellers
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-base text-gray-900 uppercase font-semibold mb-4">
              Top rated
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-base text-gray-900 uppercase font-semibold mb-4">
              new arrival
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 mb-4">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="w-[80px] h-[80px] mr-3"
              />
              <div>
                <div className="text-sm text-gray-900 mb-1">
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                </div>
                <div className="text-base font-semibold text-secondary-500 ">
                  $1,500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   Latest News   */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="text-center text-gray-900 font-semibold text-2xl mb-10">
            Latest News
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded border border-gray-100 p-8">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="rounder w-full h-[250px] mb-6"
              />
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={require("../../assets/icons/UserCircle.svg").default}
                  />
                  <div className="text-gray-700 text-sm ml-1">Kristin</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/CalendarBlank.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">19 Dec, 2013</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/ChatCircleDots.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">453</div>
                </div>
              </div>
              <div className="text-lg text-gray-900 font-medium mb-3">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </div>
              <div className="text-base text-gray-500 mb-6">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="uppercase text-sm font-bold border border-primary-100 bg-white text-primary-500 rounded py-4 px-8 flex items-center">
                {" "}
                Read More{" "}
                <img
                  className="ml-3"
                  alt=""
                  src={
                    require("../../assets/icons/ArrowRight-primary.svg").default
                  }
                />
              </button>
            </div>
            <div className="bg-white rounded border border-gray-100 p-8">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="rounder w-full h-[250px] mb-6"
              />
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={require("../../assets/icons/UserCircle.svg").default}
                  />
                  <div className="text-gray-700 text-sm ml-1">Kristin</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/CalendarBlank.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">19 Dec, 2013</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/ChatCircleDots.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">453</div>
                </div>
              </div>
              <div className="text-lg text-gray-900 font-medium mb-3">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </div>
              <div className="text-base text-gray-500 mb-6">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="uppercase text-sm font-bold border border-primary-100 bg-white text-primary-500 rounded py-4 px-8 flex items-center">
                {" "}
                Read More{" "}
                <img
                  className="ml-3"
                  alt=""
                  src={
                    require("../../assets/icons/ArrowRight-primary.svg").default
                  }
                />
              </button>
            </div>
            <div className="bg-white rounded border border-gray-100 p-8">
              <img
                alt=""
                src={require("../../assets/images/ps5.png")}
                className="rounder w-full h-[250px] mb-6"
              />
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={require("../../assets/icons/UserCircle.svg").default}
                  />
                  <div className="text-gray-700 text-sm ml-1">Kristin</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/CalendarBlank.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">19 Dec, 2013</div>
                </div>
                <div className="flex items-center">
                  <img
                    alt=""
                    src={
                      require("../../assets/icons/ChatCircleDots.svg").default
                    }
                  />
                  <div className="text-gray-700 text-sm ml-1">453</div>
                </div>
              </div>
              <div className="text-lg text-gray-900 font-medium mb-3">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </div>
              <div className="text-base text-gray-500 mb-6">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="uppercase text-sm font-bold border border-primary-100 bg-white text-primary-500 rounded py-4 px-8 flex items-center">
                {" "}
                Read More{" "}
                <img
                  className="ml-3"
                  alt=""
                  src={
                    require("../../assets/icons/ArrowRight-primary.svg").default
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Subscribe to newsletter  */}
      <div className="bg-secondary-700 py-16">
        <div className="w-1/2 mx-auto text-center">
          <div className="text-white text-3xl font-semibold ">
            Subscribe to our newsletter
          </div>
          <div className="text-base text-[rgba(255,255,255,0.7)] mt-2 mb-8">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </div>
          <div className="bg-white rounded p-3 flex">
            <input
              className="w-full px-4 py-3 outline-none"
              placeholder="Enter email address"
            />
            <button className=" uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center">
              Subscribe
              <img
                className="ml-3"
                alt=""
                src={require("../../assets/icons/ArrowRight-white.svg").default}
              />
            </button>
          </div>
          <img
            alt=""
            className="mx-auto mt-8"
            src={require("../../assets/images/company-logo.png")}
          />
        </div>
      </div>

      {/*   Footer   */}
      <div className="bg-gray-900">
        <div className="container mx-auto py-16 flex">
          <div className="mr-6">
            <img alt="" className="pb-6" src={require("../../assets/images/Footer-Logo.png")} />
            <div className="text-sm text-gray-500">Customer Supports:</div>
            <div className="text-lg text-white font-medium pb-3">(629) 555-0129</div>
            <div className="text-gray-300 pb-3">4517 Washington Ave. Manchester, Kentucky 39495</div>
            <div className="text-white font-medium">info@kinbo.com</div>
          </div>
          <div className="mr-6">
            <div className="uppercase text-white font-medium pb-4">Top Category</div>
            <ul>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Computer & Laptop</li>
              <a href="/" className="flex text-warning-500 items-center">
                Browser All Product
                <img
                  alt=""
                  className="ml-2"
                  src={
                    require("../../assets/icons/ArrowRight-yellow.svg").default
                  }
                />
              </a>
            </ul>
          </div>
          <div className="mr-6">
            <div className="uppercase text-white font-medium pb-4">Quick Links</div>
            <ul>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
              <li className="text-gray-400 text-sm font-medium pb-1.5">Shop Product</li>
            </ul>
          </div>
          <div className="mr-6">
            <div className="uppercase text-white font-medium pb-4">Download App</div>
            <img alt="" className="mb-3" src={require("../../assets/images/google-play.png")} />
            <img alt="" src={require("../../assets/images/apple.png")} />
          </div>
          <div className="w-1/4">
            <div className="uppercase text-white font-medium pb-4">Popular tag</div>
            <div className="flex flex-wrap gap-2">
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Game</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">iPhone</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">TV</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Asus Laptop</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Macbook</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">SSD</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Graphic Card</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Game</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Game</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Game</div>
              <div className="text-white font-medium text-sm px-3 py-1.5 rounded border border-gray-800">Game</div>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-gray-300 text-sm border-t border-[#f2f4f51a]">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </div>
      </div>
    </div>
  );
}

export default Home;
