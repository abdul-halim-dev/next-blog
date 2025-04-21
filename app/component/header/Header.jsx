
'use client'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
 

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className='w-full flex items-center justify-between shadow h-[90px] p-[20px] fixed top-0 left-0 right-0 z-50 bg-white '>
        <Link href={"/"} className='flex items-center justify-center' > <span className=' text-red-400 text-4xl font-bold circle'> AH </span> Travel  </Link>
        <div className='w-[220px] bg-red-300 relative '>
          <input type="search" name="search" id="search" placeholder='Search' />
         
         </div>

        <nav>
          <ul className='flex items-center justify-center gap-2.5 '>
            <li>
              <Link href="/"> Home  </Link>
            </li>
            <li>
              <Link href="/about">  About  </Link>
            </li>
            <li>
              <Link href="/blog"> Blog  </Link>
            </li>
          </ul>
        </nav>
        
        <div className=' px-4 py-1 bg-indigo-200'>
       

        <SignedIn> 
          <UserButton>
         
            </UserButton>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in"> 
      login
        </Link>
          </SignedOut>
   
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ?<FaSun/>:<FaMoon/>} </button>
    </header>
  )
}

export default Header