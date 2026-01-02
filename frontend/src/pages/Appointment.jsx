import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';


const Appointment = () => {
  const { docId } = useParams()
  const {doctors, currencySymbol} = useContext(AppContext);
  const [docInfo , setDocInfo]=useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [SlotTime, setSlotTime] = useState('')
    const getAvailableSlots = () => {
      setDocSlots([])
      // getting currentDate
      let today = new Date()
      for (let i = 0; i < 7; i++){
        //getting date with index
        let currentDate = new Date(today) 
        currentDate.setDate(today.getDate()+1)

        //setting end time of the date with index
        let endTime = new Date()
        endTime.setTime(today.getDate() + 1)
        endTime.sethours(21, 0, 0, 0)
        
        //setting Hours
        if (today.getDate() === currentDate.getDate()) {
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }

        while (currentDate < endTime) {
          let FormattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
          
        }

      }
    }
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

    useEffect(() => {
      getAvailableSlots()
    }, [docInfo])
  return (
    docInfo && (
      <div className="sm:px-20 max-sm:px-4 ">
        {/* doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 bg-white mx-2 sm:mx-0  sm:mt-0'>
            {/* doc info :name,degree and experience */}
            <p className="flex items-center text-2xl font-medium text-gray-900 gap-2">
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.specialty}
              </p>
              <button className="rounded-full border border-gray-300 px-2 py-0.5 text-xs">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctor About */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>
      </div>
    )
  );
}

export default Appointment
