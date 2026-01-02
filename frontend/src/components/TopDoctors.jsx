import React from 'react'
import { useContext } from 'react';
// import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors}=useContext(AppContext)
  return (
    <div className="sm:px-20 sm:pt-16 max-sm:px-4 pt-4">
      <div className="flex flex-col items-center text-gray-900">
        <h1 className="mb-3 text-3xl font-medium text-center">
          Top Doctors To Book
        </h1>
        <p className="text-sm text-center sm:w-1/3">
          simply Browse through our extensive list of trusted doctors
        </p>
        <div className="pt-8 w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 px-3 sm:px-0">
          {doctors.slice(0, 10).map((item, idx) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border-blur-200 rounded-xl cursor-pointer overflow-hidden  border border-blue-200 hover:-translate-y-2 transition-all duration-500"
              key={idx}
            >
              <img className="bg-blue-50 " src={item.image} alt="" />
              <div className="p-4">
                <div className="flex flex-row items-center space-x-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <span>Available</span>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate('/doctors');
            scrollTo(0, 0);
          }}
          className="bg-blue-100 text-gray-600 px-12 py-3 rounded-full cursor-pointer mt-10"
        >
          More
        </button>
      </div>
    </div>
  );
}

export default TopDoctors
