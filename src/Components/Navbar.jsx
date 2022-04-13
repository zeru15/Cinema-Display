import React, { Component } from 'react'
import logo from '../Images/Gast-logo.jpg'
import '../Css/Header.css'
import {NavLink} from 'react-router-dom'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

class Navbar extends Component {
  render() {
    return (
        <>
        <div className = "home-navbar">
        <div className= 'nav-icon'>
                <img src= {logo} height= '50px' width= '100%' alt= 'Logo'/>
            </div>
                <ul className= 'head-navbar'>
                    <li>
                        <NavLink to= 'home'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>MOVIES</NavLink>
                    </li>
                    <li>
                        <NavLink to='/schedule'>SCHEDULE</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tickets'>TICKETS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/foodsanddrinks'>FOODS AND DRINKS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>CONTACT US</NavLink>
                    </li>
                </ul>
                <button className= 'icon-button'>
                    <MenuSharpIcon/>
                </button>
        </div>
        </>
    )
  }
}

export default Navbar