import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../context/ContextProvider';
import { links } from '../data/dummy'

export default function SideBar() {

  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  const activeLink = "flex top items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = `flex top items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray dark:hover:bg-[currentColor] m-2 `;

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  return (
    <div className="pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 dark:bg-main-dark-bg">
      {activeMenu && (<>
        <div className='flex justify-between items-center '>
          <Link to='/' onClick={() =>{}} className='items-center justify-between w-full gap-3 mb-2 ml-3 mt-7 flex text-xl 
          font-extrabold tracking-tight dark:text-white text-slate-900'>
            <div className='items-center flex'>
              <SiShopware/> <span>Shoppy</span>
            </div>
          </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
        </div>
        <div className='mt-10 '>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
              {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`} 
                key={link.name}
                 onClick={handleCloseSidebar} 
                 style={({isActive}) => ({
                  backgroundColor: isActive ? currentColor : ""
                 })}
                 className={({isActive}) => isActive ? activeLink : normalLink}>
                  <div className='text-black dark:text-white'>
                    {link.icon}
                  </div>
                  <span className='capitalize text-black dark:text-white'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        </>)}
    </div>
  )
}
