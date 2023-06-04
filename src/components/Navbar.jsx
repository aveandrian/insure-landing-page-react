import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav className={isOpen ? "opened" : ""}>
            <img className="logo" src="/images/logo.svg" alt='Logo'/>
            <img 
                className="menu-btn" 
                src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`}
                onClick={toggleIsOpen}
                alt='Menu Button'
            />
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <a>How we work</a>
                <a>Blog</a>
                <a>Account</a>
                <button className='nav-btn'>View plans</button>
            </div>
        </nav>
    )
}