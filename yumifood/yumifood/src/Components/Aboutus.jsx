import React from 'react'

const Aboutus = () => {
  return (
    <>
    <div className='w-[90%] mx-auto'>
      <div >
        <h1 className='font-semibold text-4xl'>Driving the force of <span className='text-yellow-400 '>assortment</span></h1>
        <p className='mt-4 text-gray-400'>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
      </div>
      <div className='mt-[100px] flex gap-[50px] '>
        <div className=''>
          <h1 className='font-lg text-6xl'><span className='border-red-500 border-b-4 rounded'>Who</span> are we?</h1>
          <p className='mt-12 text-gray-400'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>
        <div className=''>
          <img className='rounded-xl w-[5800px] h-[350px]' src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus
