import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

class Sidebar extends React.Component{

    showMenu1 = () =>{
        if(document.getElementById('submenu1').style.display === 'block'){
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop1').className = 'fas fa-angle-down';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu2 = () =>{
        if(document.getElementById('submenu2').style.display === 'block'){
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right'
        }else{
            document.getElementById('submenu2').style.display = 'block';
            document.getElementById('drop2').className = 'fas fa-angle-down'
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu3 = () =>{
        if(document.getElementById('submenu3').style.display === 'block'){
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
        }else{
            document.getElementById('submenu3').style.display = 'block';
            document.getElementById('drop3').className = 'fas fa-angle-down'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu4 = () =>{
        if(document.getElementById('submenu4').style.display === 'block'){
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
        }else{
            document.getElementById('submenu4').style.display = 'block';
            document.getElementById('drop4').className = 'fas fa-angle-down'
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu5 = () =>{
        if(document.getElementById('submenu5').style.display === 'block'){
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu5').style.display = 'block';
            document.getElementById('drop5').className = 'fas fa-angle-down';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu6 = () =>{
        if(document.getElementById('submenu6').style.display === 'block'){
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu6').style.display ='block';
            document.getElementById('drop6').className = 'fas fa-angle-down';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu7 = () =>{
        if(document.getElementById('submenu7').style.display === 'block'){
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu7').style.display = 'block';
            document.getElementById('drop7').className = 'fas fa-angle-down';
            document.getElementById('submenu6').style.display ='none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }
    }

    showMenu8 =  () =>{
        if(document.getElementById('submenu8').style.display === 'block'){
            document.getElementById('submenu8').style.display = 'none';
            document.getElementById('drop8').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu8').style.display = 'block';
            document.getElementById('drop8').className = 'fas fa-angle-down';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display ='none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right'
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right'
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }
    }

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

                                        <NavLink to='' className='nav' onClick={this.showMenu1}><i class="fas fa-user"></i> Student <i id='drop1' className='fas fa-angle-right'></i> </NavLink>

                                        <div id='submenu1'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Student </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Student </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu2}><i class="fas fa-user"></i> Teacher <i id='drop2' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu2'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Teacher </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Teacher </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu3}><i class="fas fa-user"></i> Staff <i id='drop3' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu3'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Staff </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Staff </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu4}><i class="fas fa-bus"></i> Transport <i id='drop4' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu4'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Transport </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Transport </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu5}><i class="fas fa-book"></i> Library <i id='drop5' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu5'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Library </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Library </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu6}><i class="fas fa-calendar-alt"></i> Attendance <i id='drop6' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu6'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Attendance </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Attendance </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu7}><i class="fas fa-rupee-sign"></i> Fees <i id='drop7' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu7'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add Fee </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View Fee </NavLink>
                                        </div>

                                        <NavLink to='' className='nav' onClick={this.showMenu8}><i class="fas fa-user"></i> User <i id='drop8' className='fas fa-angle-right'></i></NavLink>

                                        <div id='submenu8'>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> Add User </NavLink>
                                            <NavLink to='/' className='nav'><i class="far fa-circle"></i> View User </NavLink>
                                        </div>

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