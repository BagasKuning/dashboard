import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar3 from '../data/avatar3.png'
import { Cart, Chat, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
      <span style={{backgroundColor: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
    </button>
  </TooltipComponent>
)

export default function Navbar() {
  const { setActiveMenu,
          isClicked,
          handleClick,
          screenSize, setScreenSize, currentColor } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [setScreenSize])

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize, setActiveMenu])

 
  return (
    <div>
      <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title={'Menu'}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color={currentColor} 
        icon={<AiOutlineMenu/>} />

        <div className='flex'>
          <NavButton title={'Cart'}
          customFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart/>} /> 

          <NavButton title={'Chat'}
          dotColor={"#03C9D7"}
          customFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft/>} /> 

          <TooltipComponent
            content={'profile'}
            position='BottomCenter'
          >
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={() => handleClick('userProfile')}
            >
              <img src={avatar3} className='rounded-full w-8 h-8 ml-2' alt='' />
              <p>
                {/* <span className='text-gray-400 text-14'>Hi, </span> {' '} */}
                <span className='font-bold text-14 text-gray-400'>Andy</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'  />
            </div>
          </TooltipComponent>
        </div>
      </div>
      <div className='flex justify-end dark:text-white z-50'>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}
