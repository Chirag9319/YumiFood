import React from 'react'
// import image from "../assets/foodpic"

const Deli = () => {
  return (
    <>
    <div className='mt-9  '>
      <h1 className='text-center text-yellow-500 font-bold text-[20px]'>Quick Delivery App</h1>
        <div className='px-7 mt-16  flex justify-between gap-8'>
            <img className='rounded-2xl ml-[70px]' src='https://www.touchbistro.com/wp-content/uploads/2020/03/restaurant-delivery-service.png' alt='hello'></img>
        
        <div className=' px-7 mt-4'>
          <p className='text-[green] font-bold text-[30px]'>Get the App</p>
          <h1 className='text-5xl font-bold py-2'>The Fastest Food Delivery In India</h1>
          <button className='bg-black text-white px-8 py-4 rounded-md mt-5 hover:text-yellow-500'>Get Started</button>
        </div>
        </div>
        </div>     
    </>
  )
}

export default Deli
