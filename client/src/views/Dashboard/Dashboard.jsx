import React from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {MdSpaceDashboard} from 'react-icons/md'
import {VscGraph} from 'react-icons/vsc'
import {CgCloseR} from 'react-icons/cg'

const Dashboard = () => {
  return (
    <div>
      <HiOutlineMenuAlt2 style={{fontSize:'50px', cursor:'pointer', color:'black', marginLeft:'.2em', marginTop:'.2em'}}/>
      <CgCloseR style={{fontSize:'50px', cursor:'pointer', color:'black', marginLeft:'.2em', marginTop:'.2em'}}/>
      <div>
        <h2>Dashboard</h2>
        <ul>
          <li>General  <MdSpaceDashboard/></li>
          <li>Finanzas <VscGraph/></li>
        </ul>
      </div>

    </div>
  )
}

export default Dashboard