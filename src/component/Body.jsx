import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Body.css';
import { PureComponent } from 'react';
import {ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Scatter,ResponsiveContainer,} from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

const Body = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-12 col-md-3 mt-3'>
            <div className='card1'>
                <div className='card1__top'>
                    <div className='card1__left'>
                        <div className='card1__title'>
                            Total Student
                        </div>
                        <div className='card1__num'>
                            5000
                        </div>
                    </div>
                    <div className='card1__right'>
                        <i className='far fa-user'></i>
                    </div>
                </div>
                <div className='card1__bottom'>
                    <NavLink to='/' className='body__nav'>Click to Show All <i className='fas fa-arrow-right'></i></NavLink>
                </div>
            </div>
        </div>
        {/* col end */}
        <div className='col-12 col-md-3 mt-3'>
            <div className='card1'>
                <div className='card1__top'>
                    <div className='card1__left'>
                        <div className='card1__title' style={{color :'#F55050'}}>
                            Total Student
                        </div>
                        <div className='card1__num'>
                            5000
                        </div>
                    </div>
                    <div className='card1__right'>
                        <i className='far fa-user' style={{color:'#F55050'}}></i>
                    </div>
                </div>
                <div className='card1__bottom' style={{backgroundColor:'#F55050'}}>
                    <NavLink to='/' className='body__nav'>Click to Show All <i className='fas fa-arrow-right'></i></NavLink>
                </div>
            </div>
        </div>
        {/* col end */}
        <div className='col-12 col-md-3 mt-3'>
            <div className='card1'>
                <div className='card1__top'>
                    <div className='card1__left'>
                        <div className='card1__title' style={{color:'#54b453'}}>
                            Total Student
                        </div>
                        <div className='card1__num'>
                            5000
                        </div>
                    </div>
                    <div className='card1__right'>
                        <i className='far fa-user' style={{color:'#54b453'}}></i>
                    </div>
                </div>
                <div className='card1__bottom' style={{backgroundColor:'#54b453'}}>
                    <NavLink to='/' className='body__nav'>Click to Show All <i className='fas fa-arrow-right'></i></NavLink>
                </div>
            </div>
        </div>
        {/* col end */}
        <div className='col-12 col-md-3 mt-3'>
            <div className='card1'>
                <div className='card1__top'>
                    <div className='card1__left'>
                        <div className='card1__title' style={{color:'#0e3eda'}}>
                            Total Student
                        </div>
                        <div className='card1__num'>
                            5000
                        </div>
                    </div>
                    <div className='card1__right'>
                        <i className='far fa-user' style={{color:'#0e3eda'}}></i>
                    </div>
                </div>
                <div className='card1__bottom' style={{backgroundColor:'#0e3eda'}}>
                    <NavLink to='/' className='body__nav'>Click to Show All <i className='fas fa-arrow-right'></i></NavLink>
                </div>
            </div>
        </div>
        {/* col end */}
        </div>

        <div className='row mt-4'>
            <div className='col-12 col-md-7'>
                <div className='chart__area'>
                    <h5>Monthly Improvement</h5>
                    <ResponsiveContainer width="100%" height="90%">
                    <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    <Scatter dataKey="cnt" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body