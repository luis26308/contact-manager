import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <div>
                <nav>
                    <NavLink to='/'>
                        List
                    </NavLink>
                    <NavLink to='/add'>
                        Add
                    </NavLink>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar

