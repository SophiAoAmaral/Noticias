import React from 'react'
import { Navigation } from './Navigation'
import logoclaro from './assets/logoclaro.png'
import logodark from './assets/logodark.png'
import { Link } from 'react-router'
import { SearchBar } from './SearchBar'
import { useTheme } from '../../context/ThemeContext'
import { IoBookmarkOutline , IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className='border-b border-gray-300 bg-[var(--color-bg)]'>
        <div className='container'>
          <div className='flex justify-between items-center '>
              <Link to='/'><img src={theme == "light" ? logoclaro : logodark} alt="" className='w-70' /></Link>
              <div className='flex gap-10 items-center'>
                  <SearchBar/>
                  <div className='flex gap-5 **:cursor-pointer'>
                      <IoBookmarkOutline size={20} />
                     <button onClick={toggleTheme}>{theme == "light" ? <IoMoonOutline size={20}/> : <IoSunnyOutline size={20}/>}</button> 
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
