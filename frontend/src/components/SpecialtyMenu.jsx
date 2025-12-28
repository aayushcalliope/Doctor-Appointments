import React from 'react'
import Header from './Header';
import { specialtyData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <div className='px-20 py-16 '>
      <div className='flex flex-col items-center space-y-3' id="specialty">
        <h1 className='text-3xl font-medium'>Find by Specialty</h1>
        <p className='sm:w-1/3 text-sm text-center'>
          Simply through our extensive list of trusted doctors,schedule your
          appointment hassle-free
        </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
          {specialtyData.map((item, idx) => (
            <Link className='flex flex-col items-center  text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={idx} to={`/doctors/${(item.specialty).replace(' ','-')}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
              <p className='text-center'>{item.specialty}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialtyMenu
