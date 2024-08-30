import React from 'react'
import {slider} from "../Data/Data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Foodslider = ({handleAdd}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='w-[90%] mx-auto mt-20 '>
      <h1 className='font-bold text-3xl ml-5 mb-10'>What's on your mind?</h1>
    <div className=' mb-16'>
    <Slider {...settings}>
        {
            slider.map((item)=>(
                <div className=' rounded-md flex flex-col mt-5' key={item.id}>
                    <div className=' flex justify-center'>
                    <img className=' h-40 w-40 rounded-full object-cover ' src={item.img}></img>
                    </div>
                    <div className='text-center mt-2 '>
                    <p className=' font-semibold text-xl'>{item.tittle}</p>
                    <p className=' text-xl'>{item.price}</p>
                    <button className='bg-black text-white px-2 py-2 mt-6 rounded-md hover:text-yellow-500 mb-5 ' onClick={handleAdd}>Add to Cart</button>                    
                </div>
                </div>
            ))
        }
        </Slider>
    </div>
    </div>
    </>
  )
}

export default Foodslider
