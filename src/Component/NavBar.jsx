import React from 'react'
import { NavLink } from 'react-router-dom'
import DLT from '../assets/dlt-logo.png'

const NavBar = () => {
    // const MapLink = [];
    // const NavLinks = MapLink.map(link => {
    //     return link.linkClass
    //     console.log(NavLinks);
    // }) ;

    const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' :
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'> 
        <div className="mx-auto max-w-7xl px-2 sm:px-6 py-2">
           <div className='flex h-20 items-center justify-between'>
           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <NavLink className='flex white flex-shrink-0 items-center mr-4' to='/'>
                    <img className='h-10 w-auto' src={DLT} alt="" />
                </NavLink>
                    
                    <div className='md:ml-auto'>
                        <div className='flex space-x-8'>
                        <NavLink to='/' className={linkClass}>Home</NavLink>
                        <NavLink to='/jobs' className={linkClass}>Jobs</NavLink>
                        <NavLink to='/add-jobs' className={linkClass}>Add Jobs</NavLink>
                        </div>
                    </div>
            </div>
           </div>
        </div>
    </nav>
  )
}

export default NavBar