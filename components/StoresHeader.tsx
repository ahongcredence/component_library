import React from 'react'
import { CircleUser, Home, InfoIcon, User } from 'lucide-react'

export default function StoresHeader() {
  return (
    <header className='bg-primary text-white'>
      <nav className='flex flex-row mx-12 justify-between items-center p-4'>
        <div className='flex flex-col items-center text-sm'>
          <span>NEW STORES</span>
          <span>LOGO HERE</span>
        </div>
        
        <h1 className="sr-only">Stores Header</h1>
        
        <div>
          <h5 className='text-white font-bold'>CUI</h5>
        </div>
        
        <ul className="header-icon-container">
          <li className="icon-choice">
            <button type="button" aria-label="Get help">
              <Home />
              <span>DLA Home</span>
            </button>
          </li>
          <li className="icon-choice">
            <button type="button" aria-label="Get help">
              <InfoIcon />
              <span>Help</span>
            </button>
          </li>
          <li className="icon-choice">
            <button type="button" aria-label="Get help">
              <CircleUser />
              <span>John Smith</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}