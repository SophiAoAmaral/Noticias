import React from 'react'
import { Navigation } from './Navigation'
import logo from './assets/logo.png'
import { Link } from 'react-router'
import { SearchBar } from './SearchBar'
import { IoBookmarkOutline , IoMoonOutline} from "react-icons/io5";
export const Header = () => {
  return (
    <header className='border-b border-gray-300'>
        <div className='container'>
          <div className='flex justify-between items-center '>
              <Link to='/'><img src={logo} alt="" className='w-70' /></Link>
              <div className='flex gap-10 items-center'>
                  <SearchBar/>
                  <div className='flex gap-5 **:cursor-pointer'>
                      <IoBookmarkOutline size={20} />
                      <IoMoonOutline size={20}/>
                  </div>
              </div>
          </div>
        </div>
        <div className='border-t border-gray-300'>
          <Navigation/>
          </div>
    </header>
  )
}
