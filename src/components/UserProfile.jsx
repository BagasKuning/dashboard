import React from 'react'
import avatar3 from '../data/avatar3.png'

export default function UserProfile() {
  return (
    <div className='p-6 absolute dark:bg-slate-800 bg-main-dark-bg text-white rounded-md'>
      <div className='flex items-center w-full'>
        <img src={avatar3} className='rounded-full w-20 h-20' />
        <div className='ml-3 flex-col leading-tight'>
          <span className='text-xl'>Andy Dufresne</span>
          <p className='text-[10.5px] text-gray-400'>Administrator</p>
          <p className='text-[10.5px] text-gray-400'>andy55@gmail.com</p>
        </div>
      </div>

    </div>
  )
}
