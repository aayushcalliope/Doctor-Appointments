import React, { useState } from 'react';
import {assets} from '../assets/assets.js';
import { NavLink, useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token,setToken]=useState(true)
  const link = [
    {
      list: 'Home',
      slug: '/'
    },
    {
      list: 'All Doctors',
      slug: '/doctors'
    },
    {
      list: 'About',
      slug: '/about'
    },
    {
      list: 'Contact',
      slug: '/contact'
    }
  ];
  return (
    <div className="px-20">
      <div className="w-full flex flex-row justify-between py-4 px-2 mb-5 border-b border-gray-400 items-center h-[8vh] ">
        <img className="w-44 h-full" src={assets.logo} alt="" />
        <ul className="space-x-10 hidden md:flex">
          {link.map((item) => (
            <NavLink
              className="font-semibold text-sm"
              to={item.slug}
              key={item.slug}
            >
              <li title={item.list}>{item.list.toUpperCase()}</li>
              <hr className="border-none h-0.5 outline-none w-3/4 mx-auto mt-0.5 bg-primary hidden" />
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {token ? (
            <div className='flex flex-row items-center space-x-2 cursor-pointer group relative'>
             <img className='w-10 h-10 object-contain rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5 h-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 
              z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='text-black text-sm cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appointment')} className='text-black text-sm cursor-pointer'>My Appointment</p>
                  <p onClick={()=>setToken(false)} className='text-black text-sm cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className=" text-white py-2 rounded-lg px-4 bg-primary cursor-pointer hidden md:block"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
