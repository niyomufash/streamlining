import React from 'react'
import './admin.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'


function Admin() {
  return (
    <div className='containn'>

    <div className='flex w-[100%]'>
      <div className='sidemenu w-[18%] '>
      
      <div className='px-4 py-4 mb-[2rem] text-green-800'><h1>E-HOLDINGS BUSINESS</h1></div>
      
      <div className='px-4 mb-[2rem]'>
        <hr/>
      <p className='mt-[6px] mb-[20px]'>ADMIN LAYOUT PAGE</p>
         
       <NavLink to="dash"> <p className='mb-[15px]'>DASHBOARD</p></NavLink>
          <p className='text-gray-500'>SETTINGS</p>
          </div>
      <div className='px-4'>
      <hr/>
      <p className='mt-[6px] mb-[20px]'>DEVICE MANAGEMENT</p>
      <p className='mb-[15px] text-gray-500'>DEVICES</p>
      <p className='mb-[15px] text-gray-500'>INVOICES</p>
      <p className='mb-[15px] text-gray-500'>ADD DEVICE</p>

      </div>

      <div className='px-4 mb-[2rem]'>
        <hr/>
      <p className='mt-[6px] mb-[20px]'>BUSINESS</p>
         
      <p className='mb-[15px] text-gray-500'>ASSIGN NEW DEVICE</p>
      <p className='text-gray-500'>PUBLISH DEVICE</p>
          </div>
      
          
    
      </div>
       
      <Routes>
      <Route path='dash' element={<Dashboard/>}></Route>
     </Routes>

      <div className=' w-[82%] p-[4rem]'>Main</div>

     
     

    </div>


  


    </div>
  )
}

export default Admin