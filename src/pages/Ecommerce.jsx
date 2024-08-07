import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Stacked, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


export default function ECommerce() {

  const { currentColor } = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='shadow bg-white dark:bg-secondary-dark-bg rounded-xl w-full lg:w-72 h-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-600'>Earnings</p>
              <p className='text-2xl font-bold' style={{color: currentColor}}>$36,271.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size={'md'}
            />
          </div>
        </div>

        <div className='flex justify-center gap-1 items-center m-3 flex-wrap lg:flex-nowrap'>
          {earningData.map((item) => (
            <div key={item.title} className=' shadow flex flex-col items-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg px-10 lg:px-5 xl:px-12 py-7 rounded-2xl'>
              <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <div className='text-lg font-semibold'>
                  {item.amount}
                </div>
                <div className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </div>
              </p>
              <p className='text-sm text-gray-400 mt-1 '>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className='flex gap-10 flex-wrap justify-center'>
              <div className=' shadow bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl p-3 w-full'>
                <div className='flex justify-between mx-10 mt-10'>
                  <p className='font-semibold text-xl'>Revenue Updates</p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                      <span><GoDotFill /></span>
                      <span>Expense</span>
                    </p>
                    <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                      <span><GoDotFill /></span>
                      <span>Budget</span>
                    </p>
                  </div>
                </div>
                <div className='mt-4 flex gap flex-wrap justify-center'>
                  <div className='border-r-1 border-color m-4 p-10'>
                    <div>
                      <p>
                        <span className='text-3xl font-semibold'>$85,845</span>
                        <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-xs ml-3 text-white'>26%</span>
                      </p>
                      <p className='text-gray-500 mt-1 '>Budget</p>
                    </div>
                    <div className='mt-8'>
                      <p>
                        <span className='text-3xl font-semibold'>$38,845</span>
                      </p>
                      <p className='text-gray-500 mt-1 '>Expense</p>
                    </div>

                    <div className='mt-5'>
                      <SparkLine
                        currentColor={currentColor}
                        id='line-sparkline'
                        type='Line'
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color='blue'
                      />
                    </div>
                    <div className='mt-10'>
                      <Button
                        color={"white"}
                        bgColor={currentColor}
                        text={"Download Report"}
                        borderRadius={"10px"}
                      />
                    </div>

                  </div>

                  <div className='flex items-center'>
                    <Stacked 
                      width="320px"
                      height="360px"
                    />
                  </div>

                </div>
              </div>
      </div>


    </div>
  )
}
