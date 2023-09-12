import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import avatar3 from '../data/avatar3.png';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


export default function UserProfile() {

  const { closedNav } = useStateContext();

  return (
    <div className='p-6 pt-0 absolute dark:bg-slate-800 bg-main-dark-bg text-white rounded-md'>
      <div className='flex justify-between my-6 items-center'>
        <span className='font-medium'>Profile</span>
    
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
      <div className='flex items-center w-full'>
        <img src={avatar3} className='rounded-full w-20 h-20' alt='' />
        <div className='ml-3 flex-col leading-tight'>
          <span className='text-xl'>Andy Dufresne</span>
          <p className='text-[10.5px] text-gray-400'>Administrator</p>
          <p className='text-[10.5px] text-gray-400'>andy55@gmail.com</p>
        </div>
      </div>

    </div>
  )
}
