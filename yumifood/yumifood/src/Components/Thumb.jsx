import React, { useEffect, useState } from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const Thumb = () => {
    const [img, setImage] = useState(0)
    useEffect(()=>{
      const id =   setInterval(()=>{
             handleRight();
        },2000)
        return () => clearInterval(id)
    },[img])

    const handleRight =()=>{
        setImage(img === image.length-1?0:img+1)
    }

    const handleLeft =()=>{
        setImage(img === 0?image.length-1:img-1)
    }


    const image = [{
        url : "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/black_and_blue_burger_95881_16x9.jpg"
    },
    {
    url : "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873870.jpg?t=st=1723206400~exp=1723210000~hmac=9a4a1360e0b9939dbb96b600deeac39f1e2bb274b21a0df21cfc02b8a9fe1e6e&w=1060"
     },
     {
    url : "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/vegetable_biryani_50072_16x9.jpg"
   }];
  return (
    <>
      <div className=' w-full  '>
        <div className='md:bg-blue-300 h-[480px] w-[1000px] mt-5 mx-auto rounded-2xl overflow-hidden relative'>
            {
                image.map((item,i)=>(
                    <div key={i} className={`${img === i?"block":"hidden"}`}>
                        <img src={item.url} alt='' className='object-cover  w-[full] rounded-2xl'/>
                    </div>
                ))
            }
            {/* <img src={image[img].url} alt='' className='object-cover  w-[full] rounded-2xl'/>  */}
            <div className='bg-black h-[480px] w-[1000px] mt-5 mx-auto rounded-2xl absolute top-[-20px] opacity-30 left-0'> </div>        

        <div className='absolute z-10 text-white flex justify-center w-full px-5 top-[40%] '>
        <h1 className='font-bold text-3xl text-center'>Welcome<span className='flex flex-col '> To the World of </span>Tasty & Fresh Food</h1>
        </div>
        <div className='flex justify-between w-full px-5 top-[50%] h-full text-white absolute z-10'>
        <p className='cursor-pointer'onClick={handleLeft}><FaAngleLeft size={35}/></p>

        <p className='cursor-pointer ' onClick={handleRight}><FaAngleRight size={35}/></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Thumb
