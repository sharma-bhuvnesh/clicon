import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className="w-full feature-product-slider">
        <Slider {...settings}>
          <div className="p-14 bg-gray-50">
            <div className='flex items-center'>
            <div>
                <div className='text-secondary-600 text-sm font-semibold uppercase mb-1'>
                    <span className='b-1 bg-secondary-500'></span>The Best Place to play
                </div>
                <div className='text-5xl font-semibold text-gray-900 mb-4'>Xbox Consoles</div>
                <div className='text-sm text-gray-700 mb-6'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</div>
                <button className='uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center'> show now <img className='ml-3' alt='' src={require('../../assets/icons/ArrowRight-white.svg').default} /></button>
            </div>
            <div className='relative'>
                <div className='absolute w-[100px] h-[100px] bg-secondary-500 border-4 border-white rounded-full flex justify-center items-center right-0 font-semibold text-[22px] text-white'>$200</div>
                <img alt='' src={require('../../assets/images/xbox.png')} />
            </div>
            </div>
            {/* Slide 1 content */}
            {/* <img src="https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg" alt="Slide 1" className="w-full" /> */}
          </div>
          <div className="p-14 bg-gray-50">
            <div className='flex items-center'>
            <div>
                <div className='text-secondary-600 text-sm font-semibold uppercase mb-1'>
                    <span className='b-1 bg-secondary-500'></span>The Best Place to play
                </div>
                <div className='text-5xl font-semibold text-gray-900 mb-4'>Xbox Consoles</div>
                <div className='text-sm text-gray-700 mb-6'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</div>
                <button className='uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center'> show now <img className='ml-3' alt='' src={require('../../assets/icons/ArrowRight-white.svg').default} /></button>
            </div>
            <div className='relative'>
                <div className='absolute w-[100px] h-[100px] bg-secondary-500 border-4 border-white rounded-full flex justify-center items-center right-0 font-semibold text-[22px] text-white'>$200</div>
                <img alt='' src={require('../../assets/images/xbox.png')} />
            </div>
            </div>
            {/* Slide 1 content */}
            {/* <img src="https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg" alt="Slide 1" className="w-full" /> */}
          </div>
          <div className="p-14 bg-gray-50">
            <div className='flex items-center'>
            <div>
                <div className='text-secondary-600 text-sm font-semibold uppercase mb-1'>
                    <span className='b-1 bg-secondary-500'></span>The Best Place to play
                </div>
                <div className='text-5xl font-semibold text-gray-900 mb-4'>Xbox Consoles</div>
                <div className='text-sm text-gray-700 mb-6'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</div>
                <button className='uppercase text-base text-white bg-primary-500 rounded py-4 px-8 flex items-center'> show now <img className='ml-3' alt='' src={require('../../assets/icons/ArrowRight-white.svg').default} /></button>
            </div>
            <div className='relative'>
                <div className='absolute w-[100px] h-[100px] bg-secondary-500 border-4 border-white rounded-full flex justify-center items-center right-0 font-semibold text-[22px] text-white'>$200</div>
                <img alt='' src={require('../../assets/images/xbox.png')} />
            </div>
            </div>
            {/* Slide 1 content */}
            {/* <img src="https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg" alt="Slide 1" className="w-full" /> */}
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    );
  };
  
  export default Carousel;