import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

class Sidebar extends React.Component{
    render(){
        return(
            <idv>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 m-0 p-0'>
                            <div className='sidebar'>
                                <div className='sidebar_top'>
                                    <h4 className='text-center text-white'>ShoppyMall <i class="fas fa-bars"></i> </h4>
                                </div>
                                <div id='sidebar_bottom'>
                                    <nav>
                                        <NavLink to='/' className='nav' id="active" style={{marginLeft: '-0px'}}><i class="fas fa-tachometer-alt-slowest"></i> Dashboard </NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-user"></i> Student <i id='drop1' className='fas fa-angle-right'></i> </NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-user"></i> Teacher <i id='drop2' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-user"></i> Staff <i id='drop3' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-bus"></i> Transport <i id='drop4' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-book"></i> Library <i id='drop5' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-calendar-alt"></i> Attendance <i id='drop6' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-rupee-sign"></i> Fees <i id='drop7' className='fas fa-angle-right'></i></NavLink>
                                        <NavLink to='/' className='nav'><i class="fas fa-user"></i> User <i id='drop8' className='fas fa-angle-right'></i></NavLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </idv>
        )
    }
}

export default Sidebar