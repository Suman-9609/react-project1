import React from 'react';
import Sidebar from './Sidebar';
import '../css/Body.css';
import Body from './Body';

const Main = () => {
  return (
    <>
       <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-2 m-0 p-0'>
                    <Sidebar />
                </div>  
                <div className='col-12 col-md-10 m-0 p-0'>
                  <div className='top__header'>
                    <i className='far fa-user'></i>
                    <i className='far fa-bell'></i>
                    <i className='far fa-envelope'></i>
                  </div>

                  <Body />
                </div>
            </div>
       </div>
    </>
  )
}

export default Main