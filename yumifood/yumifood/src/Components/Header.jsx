import React,{useState} from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({count}) => {
    const [cross, setCross] = useState(false)
    


    const handleCross =()=>{
        setCross(!cross)
        // console.log(cross)
    }
  return (
    <>
       <div className='flex justify-between font-semibold sticky top-0 z-20 py-4 px-5 border-b relative  bg-white'>
        <Link to='/'>
           <div>Yumi<span className='text-yellow-500'>Food</span></div>
           </Link>
           <div>
            <ul className='sm:flex gap-8 hidden cursor-pointer '>
                <Link to='/'>
                <li className='hover:text-yellow-500'>Home</li>
                </Link>
                <Link to='/us'>
                <li className='hover:text-yellow-500'>About Us</li>
                </Link>
                <Link to='/ourfood'>
                <li className='hover:text-yellow-500'>Our Food</li>
                </Link>
                <Link to='/in'>
                <li className='hover:text-yellow-500'>Sign in</li>
                </Link>
            </ul>

           </div>
           {
              cross ?  <div className='right-0 w-[200px] bg-slate-200 top-0 h-[100vh] flex justify-center items-center absolute '>
              <p className='absolute top-5 right-5 cursor-pointer' onClick={handleCross}><RxCross1 /></p>
               <ul className='flex gap-12 cursor-pointer flex-col '>
               <Link to='/'>
                <li className='hover:text-yellow-500'>Home</li>
                </Link>
                <Link to='/us'>
                <li className='hover:text-yellow-500'>About Us</li>
                </Link>
                <Link to='/ourfood'>
                <li className='hover:text-yellow-500'>Our Food</li>
                </Link>
                <Link to='/in'>
                <li className='hover:text-yellow-500'>Sign in</li>
                </Link>
               </ul>
              
              </div> : ""
           }
           <div className='flex gap-5 '><p className="sm:hidden cursor-pointer" onClick={handleCross}><GiHamburgerMenu size={30}/></p>
           {count}
           <p><  FaCartShopping  size={30}/></p></div>
        </div>      
    </>
  )
}

export default Header





