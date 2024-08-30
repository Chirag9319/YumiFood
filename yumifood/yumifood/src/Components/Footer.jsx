import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-black text-white flex justify-between px-48 py-8 mt-5 h-[400px]'>
        <div className='gap-4'>
            <h1 className='font-bold font-serif text-xl text-white'>Yumi<span className='text-yellow-500'>Food</span></h1>
            <p className='text-gray-500'>© 2024 Bundl <span className='flex flex-col'>Technologies Pvt. Ltd</span></p>
            </div>
        <div className='flex flex-col gap-4 text-gray-500'>
           <h1 className='font-bold font-serif text-xl text-white' >Company</h1>
           <p>About</p>
           <p>Careers</p>
           <p>Team</p>
           <p>Swiggy One</p>
           <p>Swiggy Instamart</p>
           <p>Swiggy Genie</p>
        </div>
     
        <div className='flex flex-col gap-4 text-gray-500'>
           <h1 className='font-bold font-serif text-xl text-white'>Contact us</h1>
           <p>Help & Support</p>
           <p>Partner with us</p>
           <p>Ride with us </p>
        </div>

        <div className='flex flex-col gap-4 text-gray-500'>
          <h1 className='font-bold font-serif text-xl text-white'>We deliver to:</h1>
          <p>Bangalore</p>
          <p>Gurgaon</p> 
          <p>Hyderabad</p> 
          <p>Delhi</p> 
          <p>Mumbai</p> 
          <p>Pune</p> 
        </div>
    </div>      
    </>
  )
}

export default Footer
