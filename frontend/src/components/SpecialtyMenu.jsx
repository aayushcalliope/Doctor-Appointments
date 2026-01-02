import React from 'react'
import Header from './Header';
import { specialtyData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <div className="sm:px-20 sm:pt-16 max-sm:px-4 pt-4 ">
      <div className="flex flex-col items-center space-y-3" id="specialty">
        <h1 className="text-3xl font-medium">Find by Specialty</h1>
        <p className="sm:w-1/3 text-sm text-center">
          Simply through our extensive list of trusted doctors,schedule your
          appointment hassle-free
        </p>
        <div className="flex sm:justify-center pt-5 w-full overflow-scroll">
          <div className="space-x-20 flex-row flex ">
            {specialtyData.map((item, idx) => (
              <Link
                onClick={() => scrollTo()}
                className=" text-xs cursor-pointer hover:-translate-y-2 transition-all duration-500"
                key={idx}
                to={`/doctors/${item.specialty.replace(' ', '-')}`}
              >
                <div className="w-16 sm:w-20 flex flex-col justify-center items-center ">
                  <img className="w-full mb-2" src={item.image} alt="" />
                  <p className="text-center w-full truncate">
                    {item.specialty}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialtyMenu
