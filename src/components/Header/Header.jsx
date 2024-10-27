import React from 'react'
import "./Header.scss"
import logo from "../../assets/samsung-logo.svg"
import { IoMdSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import {NAVBAR__ITEMS, NAVBAR__END} from "../../static"


const Header = () => {
  const navbar = NAVBAR__ITEMS?.map((element, inx)=>(
    <li className="navbar__item" key={inx}>
          <a href="#">
            <span>{element}</span>
          </a>
    </li>
  ))
  const navbarEnd = NAVBAR__END?.map((element, inx)=>(
    <li className="navbar__end__item" key={inx}>
                <a href="#">
                  <span>{element}</span>
                </a>
    </li>
  ))
  return (
    <header className='header'>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar__collection">
            {navbar}
          </ul>
          <div className="navbar__end">
            <ul className="navbar__end__collection">
              {navbarEnd}
            </ul>
            <div className="navbar__icons">
              <IoMdSearch/>
              <BsCart2/>
              <HiOutlineUser/>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header