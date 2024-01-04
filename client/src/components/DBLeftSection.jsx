import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../assets'
import { isActiveStylesDash, isNotActiveStyles, isNotActiveStylesDash } from '../utils/styles'

const DBLeftSection = () => {
  return (
    <div className='h-full py-12 flex flex-col bg-[#191414] backdrop-blur-md rounded-sm shadow-md min-w-210 w-300 gap-3'>

        <NavLink to={'/'} className='flex items-center justify-start px-6 gap-4'>
            <img src={Logo} className='w-12' alt='' />
            <p className='font-semibold text-xl'>NerdsNexus</p>
        </NavLink>

        <hr className='text-[#d8fc6f]' />

        <ul className='flex flex-col gap-4'>
            <NavLink
                to={'/dashboard/home'}
                className={({isActive}) => 
                    isActive 
                        ? `${isActiveStylesDash} px-4 py-2 text-white border-l-8 border-[#d8fc6f]`
                        : isNotActiveStylesDash
                }> Home
            </NavLink>
            {/* <NavLink
                to={'/dashboard/orders'}
                className={({isActive}) => 
                    isActive 
                        ? `${isActiveStylesDash} px-4 py-2 text-white border-l-8 border-[#d8fc6f]`
                        : isNotActiveStylesDash
                }> Orders
            </NavLink> */}
            <NavLink
                to={'/dashboard/items'}
                className={({isActive}) => 
                    isActive 
                        ? `${isActiveStylesDash} px-4 py-2 text-white border-l-8 border-[#d8fc6f]`
                        : isNotActiveStylesDash
                }> Items
            </NavLink>
            <NavLink
                to={'/dashboard/newItem'}
                className={({isActive}) => 
                    isActive 
                        ? `${isActiveStylesDash} px-4 py-2 text-white border-l-8 border-[#d8fc6f]`
                        : isNotActiveStylesDash
                }> Add New Item
            </NavLink>
            <NavLink
                to={'/dashboard/users'}
                className={({isActive}) => 
                    isActive 
                        ? `${isActiveStylesDash} px-4 py-2 text-white border-l-8 border-[#d8fc6f]`
                        : isNotActiveStylesDash
                }> Users
            </NavLink>
        </ul>
        <div className='w-full items-center justify-center flex h-225 mt-auto px-2'>
            <div className='w-full h-full rounded-md bg-[#d8fc6f] flex items-center justify-center flex-col gap-3 px-3'>
                <div className='w-12 h-12 border bg-[#191414] rounded-full flex items-center justify-center'>
                    <p className='text-2xl font-bold text-[#d8fc6f]'>?</p>
                </div>
                <p className='text-xl text-[#191414]font-semibold'>Help Center</p>
                <p className='text-base text-[#191414] text-center'>Having trouble plz contact us here</p>
                <p className='px-4 py-2 mt-3 rounded-full bg-[#191414] text-[#d8fc6f] cursor-pointer'>
                    Get in touch
                </p>
            </div>
        </div>
    </div>
  )
}

export default DBLeftSection