import React from 'react'
import {NavLink} from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () => (
    <nav className="menu">
        <NavLink to="/" activeClassName="selected"><HomeIcon/> </NavLink>
        <NavLink to="/add-day" activeClassName="selected"><AddDayIcon/> </NavLink>
        <NavLink to="/list-days" activeClassName="selected"><ListDaysIcon/> </NavLink>
    </nav>
)
