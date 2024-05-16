import React, { useState } from 'react'
import NavBar from './NavBar'
import logo from '../assets/shared/logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleManu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <header className="primary-header flex">
      <div className="logo">
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <button onClick={handleToggleManu} className='mobile-nav-toggle' aria-controls="primary-navigation" aria-expanded={`${isOpen ? "true" : "false"}`}>
        <span className="sr-only hamburger">Menu</span>
      </button>
      <NavBar isOpen={isOpen} />
    </header>
  )
}

export default Header