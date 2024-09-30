import React, { useState } from 'react'
import './index.css'
import vite from '../../../public/vite.svg'

export default function Navbar() {
  const [display, setDisplay] = useState(false)

  function toggleDisplay() {
    setDisplay(display => !display) 
  }

  return (
    // Heading And Switch
    <header className='flex primary-header'>
      <div>
        <h1>Wrestlers</h1>
      </div>
      <button className='toggle' onClick={toggleDisplay}>Light Switch</button>
      {/* Nav List */}
      <nav>
        <ul className={`primary-navigation underline-indicators flex ${
            display ? "visible" : "not-visible"
          }`}>
          <li>Stone Cold</li>
          <li>The Rock</li>
          <li>The Undertaker</li>
          <li>John Cena</li>
          <li>Randy Orton </li>
          <li>Batista </li>
        </ul>
      </nav>
    </header>
  )
}
