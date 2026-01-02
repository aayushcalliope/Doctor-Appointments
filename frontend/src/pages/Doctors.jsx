import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const Doctors = () => {
  const navigate = useNavigate();
  const { specialty } = useParams()  
  const [filterDoc,setFilterDoc]=useState([])
  // console.log(specialty)
  const { doctors } = useContext(AppContext)

  useEffect(() => {
    const applyFilter = () => {
      if (specialty) {
        setFilterDoc(doctors.filter((doc) => doc.specialty.replace(' ','-') === specialty));
      } else {
        setFilterDoc(doctors)
      }
    }
    applyFilter()
  },[doctors,specialty])
  return (
    <div className="sm:px-20  max-sm:px-4">
      {/* <h1>Doctor</h1> */}
      <p className="text-gray-600">Browser through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              specialty === 'General-physician'
                ? navigate('/doctors')
                : navigate('/doctors/General-physician')
            }
            className={`w-[94%] whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'General-physician' ? 'bg-indigo-50 text-black' : ''
            }`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              specialty === 'Gynecologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gynecologist')
            }
            className={`w-[94%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'Gynecologist' ? 'bg-indigo-50 text-black' : ''
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specialty === 'Dermatologist'
                ? navigate('/doctors')
                : navigate('/doctors/Dermatologist')
            }
            className={`w-[94%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'Dermatologist' ? 'bg-indigo-50 text-black' : ''
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specialty === 'Pediatricians'
                ? navigate('/doctors')
                : navigate('/doctors/Pediatricians')
            }
            className={`w-[94%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'Pediatricians' ? 'bg-indigo-50 text-black' : ''
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              specialty === 'Neurologist'
                ? navigate('/doctors')
                : navigate('/doctors/Neurologist')
            }
            className={`w-[94%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'Neurologist' ? 'bg-indigo-50 text-black' : ''
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              specialty === 'Gastroenterologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gastroenterologist')
            }
            className={`w-[94%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300] rounded transition-all cursor-pointer ${
              specialty === 'Gastroenterologist'
                ? 'bg-indigo-50 text-black'
                : ''
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border-blur-200 rounded-xl cursor-pointer overflow-hidden  border border-blue-200 hover:-translate-y-2 transition-all duration-500"
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
      </div>
    </div>
  );
}

export default Doctors
