import React from 'react'
import './Header.css'
import jdmLogo from '../assets/header/jdm-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className="header">
        <div className="logoContainer">
            <img src={jdmLogo} alt='jdm-logo' className='jdm-logo'/>
        </div>
        <div className="searchBar" >
            <div className="searchIconContainer" >
                <img src={searchIcon} alt='search-icon' />
            </div>
            <input type="text" className="searchInput" placeholder="Collection, item or user ..."/>
        </div>
        <div className="headerItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className="headerActions">
            <div className="themeSwitchContainer">
                <img src={themeSwitchIcon} alt='theme-icon' />
            </div>
        </div>
        <div className="loginButton">GET IN</div>
    </div>
  )
}

export default Header