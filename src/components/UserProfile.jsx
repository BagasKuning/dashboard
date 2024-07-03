import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import avatar3 from '../data/avatar3.png';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


export default function UserProfile() {

  const { closedNav, currentColor } = useStateContext();

  return (
    <div className='px-6 mr-9 absolute dark:bg-slate-800 bg-main-bg shadow-lg rounded-md 
    w-full max-w-sm max-sm:mr-0 z-50' 
    >
      <div className='flex justify-between my-5 items-center'>
        <span className='font-semibold'>Profile</span>
    
        <TooltipComponent content="Close" position="LeftCenter">
          <button
            type="button"
            onClick={() => closedNav("userProfile")}
            className="text-xl rounded-full p-1 hover:bg-light-gray block right-0"
          >
            <MdOutlineCancel />
            </button>
        </TooltipComponent>
      </div>
      <div className='flex items-center w-full border-b-1 pb-6'>
        <img src={avatar3} className='rounded-full w-20 h-20' alt='' />
        <div className='ml-3 flex-col leading-tight'>
          <span className='text-xl font-semibold'>Andy Dufresne</span>
          <p className=' text-sm text-gray-400'>Administrator</p>
          <p className=' text-sm text-gray-400'>andy55@gmail.com</p>
        </div>
      </div>

      {userProfileData.map((item, index) => (
        <div key={index} className='flex border-b-1 py-4' >
          <button
          type='button'
          style={{ backgroundColor: item.iconBg, color: item.iconColor }}
          className='p-2 text-xl rounded-md'
          >
            {item.icon}
          </button>

          <div className='ml-2'>
            <p className='font-medium leading-5'>{item.title}</p>
            <p className='text-xs text-gray-400'>{item.desc}</p>
          </div>
        </div>
      ))}

      <button type='button' className='flex justify-center w-full py-2 mb-5 mt-4 rounded-md' style={{background: currentColor}}>
        Logout
      </button>

    </div>
  )
}
