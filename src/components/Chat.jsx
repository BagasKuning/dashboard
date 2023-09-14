import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


export default function Chat() {

  const { closedNav, currentColor } = useStateContext();

  return (
    <div className='px-6 mr-9 absolute dark:bg-slate-800 bg-main-dark-bg text-white rounded-md 
    max-[340px]:w-full max-[340px]:mr-0'
    >
      <div className='flex justify-between my-5 items-center'>
        <span className='font-medium'>Messages</span>
    
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

      {chatData?.map((item, index) => (
        <div key={index} className='flex border-b-1 py-2 items-center relative' >
          <img src={item.image} alt="#" className='rounded-full w-16 h-16' />

          <div className='ml-2 leading-6'>
            <p className='font-medium text-sm'>{item.message}</p>
            <p className='text-xs text-gray-400'>{item.desc}</p>
          </div>

          <span className='text-[10px] absolute right-0 bottom-0 text-gray-500 mb-1 max-[300px]:hidden'>{item.time}</span>
        </div>
      ))}

      <button type='button' className='flex justify-center w-full py-2 mb-5 mt-3 rounded-md' style={{background: currentColor}}>
        See All Messages
      </button>

    </div>
  )
}
