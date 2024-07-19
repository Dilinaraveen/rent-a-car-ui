import React, { useState } from 'react'
import SideNav from '../components/Dashboard/SideNav'
import TopHeader from '../components/Dashboard/TopHeader'
import Cars from '../components/Cars/Cars'

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  
  return (
  
    <div>
      
      <div className=' h-full w-64 flex-col 
        fixed inset-y-0 z-30 md:flex hidden bg-white'>
        <SideNav closeSideBar={()=>setToggle(false)}/>
      </div>
   
      {toggle ? <div className=' h-full w-64 flex-col 
        fixed inset-y-0 z-30 bg-white flex'>
        <SideNav closeSideBar={()=>setToggle(false)}/>
      </div> : null}

      <div className='md:ml-64'>
        <TopHeader setToggleBar={() => 
          setToggle(true)} />
          <Cars />
      </div>

    </div>
  )
}

export default Dashboard