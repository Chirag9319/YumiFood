import React from 'react'
import { mealData } from '../Data/Data'
const OurFood = () => {
  return (
    <div className='w-[90%] mx-auto '>
        <h1  className='font-bold text-3xl ml-5 mb-10 text-center text-yellow-400'>Our Food</h1>
       <div className='flex gap-[45px] flex-wrap '>
        {
            mealData.map((item)=>(
              <div className=''>
                <div className=''>
                    <img className='w-[250px] h-[200px] rounded-xl object-cover' src={item.img} alt=""></img>
                </div>
                <div className='text-center'>
                <p>{item.tittle}</p>
                </div>
              </div>
            ))
        }
       </div>
    </div>
  )
}

export default OurFood
