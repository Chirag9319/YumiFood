import React from 'react'

const Signin = () => {
  return (
    <>
    <div className='border-2 mt-8 w-[40%] mx-auto rounded'>
    <form className='bg-gray-300'>
      <div >
        <h1 className='text-center text-2xl'>Sign In</h1>
        <div className='flex gap-6 flex-col w-[60%] mx-auto mt-8 '>
          <input className='h-10 rounded outline-none' type='text' placeholder='enter your name'  />
          <input  className='h-10 rounded outline-none' type='email' placeholder='enter your mail'  />
          <input className='h-10 rounded outline-none' type='text' placeholder='mobile number'/>
          <div className='text-center'>
          <button className='bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-800 mb-8'>Sign in</button>
          </div>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}

export default Signin
