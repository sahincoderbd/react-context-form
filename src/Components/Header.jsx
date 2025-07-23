import Link from 'daisyui/components/link';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { LiaTimesSolid } from 'react-icons/lia';
import { NavLink } from 'react-router-dom';
const Header = () => {

    const [isShowMobileNav,setIsShowMobileNav]=useState(false);
    const mobileMenu=()=>{

    }

    const navLinksMobile=<>
    <li className='w-full text-center hover:bg-gray-600 active:bg-gray-600 rounded-sm focus:bg-gray-600 py-2 '><NavLink className='' to='/'>Home</NavLink></li>
    <li className='w-full text-center hover:bg-gray-600 active:bg-gray-600 rounded-sm focus:bg-gray-600 py-2'><NavLink className='' to='/login'>Login</NavLink></li>
    <li className='w-full text-center hover:bg-gray-600 active:bg-gray-600 rounded-sm focus:bg-gray-600 py-2'><NavLink className='' to='/register'>Register</NavLink></li>

    </>
    const navLinks=<>
    <li className=' '><NavLink className='' to='/'>Home</NavLink></li>
    <li className=''><NavLink className='' to='/login'>Login</NavLink></li>
    <li className=''><NavLink className='' to='/register'>Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-transparent shadow-sm">
        <div className="flex-1 lg:flex-1/3">
          <NavLink className=" text-2xl font-bold">React Auth Context</NavLink>
        </div>
        <div className="flex-1 flex flex-row-reverse md:flex-row justify-start md:justify-between items-center lg:flex-2/3 gap-2">
        <div className=' relative transition duration-3000'>
            <ul className='hidden md:flex gap-5 justify-baseline items-center'>{
                
                navLinks

            }</ul>

            <button onClick={()=>mobileMenu(setIsShowMobileNav(!isShowMobileNav))} className=' inline-flex md:hidden btn bg-transparent shadow-none border-none text-2xl'>
                {isShowMobileNav?<LiaTimesSolid></LiaTimesSolid>:<FiMenu></FiMenu>}
            </button>
            {
                isShowMobileNav && <ul className='absolute w-40 flex flex-col md:hidden justify-baseline items-center bg-gray-900 md:bg-transparent p-3 rounded-lg right-0 top-12'>{
                  navLinksMobile
                }</ul>
    
            }
        </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              <li>
                <NavLink to='/profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;