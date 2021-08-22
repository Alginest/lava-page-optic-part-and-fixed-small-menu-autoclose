import React, { useEffect, useState } from 'react'
import navData from '../data/navData'
import { FaArrowDown } from 'react-icons/fa'
import { useGlobalContext, useWindowSize } from '../context'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useGlobalContext()
  const [value, setValue] = useState(0)
  const size = useWindowSize()
  const toggleTab = (index) => {
    setValue(index)
  }
  const closeWidth = () => {
    let screenWidth = size.width
    console.log(screenWidth)
    if (screenWidth >= 976) {
      closeMenu()
    }
  }
  useEffect(() => {
    closeWidth()
  }, [size.width])
  return (
    <header>
      <div className='container'>
        <nav>
          <div
            className={`${
              isMenuOpen ? 'small-links-cont active' : 'small-links-cont'
            }`}
          >
            <ul>
              {navData.map((link, index) => {
                const { text, url, id } = link
                return (
                  <li key={id} onClick={closeMenu}>
                    <a
                      href={url}
                      className={`${value === index ? 'selected' : ''}`}
                      onClick={() => toggleTab(index)}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
              <li className='more-info'>
                <p>DROP DOWN</p>
                <FaArrowDown className='drop-icon' />
                <ul className='submenu'>
                  <li>
                    <a href=''>About Us</a>
                  </li>
                  <li>
                    <a href=''>Features</a>
                  </li>
                  <li>
                    <a href=''>Faq's</a>
                  </li>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='logo-cont'>
            <a href=''>LAVA</a>
          </div>
          <div className='drop-btn'>
            <div
              className={`${isMenuOpen ? 'menu-btn open' : 'menu-btn'}`}
              onClick={toggleMenu}
            >
              <div className='menu-btn_burger'></div>
            </div>
          </div>
          <div className='links-cont'>
            <ul>
              {navData.map((link, index) => {
                const { text, url, id } = link
                return (
                  <li key={id}>
                    <a
                      href={url}
                      className={`${value === index ? 'selected' : ''}`}
                      onClick={() => toggleTab(index)}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
              <li className='more-info'>
                <p>
                  DROP DOWN <FaArrowDown className='drop-icon' />
                </p>
                <ul className='submenu'>
                  <li>
                    <a href=''>About Us</a>
                  </li>
                  <li>
                    <a href=''>Features</a>
                  </li>
                  <li>
                    <a href=''>Faq's</a>
                  </li>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className='hero-content' onClick={closeMenu}>
          <div className='hero-position'>
            <h1>Simple App that we</h1>
            <h2>Create</h2>
            <p>
              Lava HTML landing page template is provided by TemplateMo. You can
              modify and use it for your commercial websites for free of charge.
              This template is last updated on 29 Oct 2019.
            </p>
            <a href='#' className='btn-primary'>
              Know us better
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
