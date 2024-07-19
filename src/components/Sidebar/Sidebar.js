import React, { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import './sidebar.css'
// import './mediaQueries.css'
import Menus from '../Menus/Menus'

const Sidebar = () => {
    const [toggle, setToggle] = useState(true);

    const toggleOnClick = () => {
        setToggle(!toggle);
        console.log(toggle);
    }
    return (
        <div className="sidebar-section">
            <Menus toggle={toggle} />
        </div>
    )
}

export default Sidebar