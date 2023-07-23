import './Header.css'
import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Header({mode,setMode}) {
  return (
      <div className='row'>
          <div style={mode==="light"?{backgroundColor:"white"}:{backgroundColor:"#2B3844"}} className='col-12 d-flex  justify-content-between align-items-center p-md-4 p-3 '>
              <div style={mode==="light"?{color:"black"}:{color:"white"}} className='fw-bold'>Where in the World?</div>
              <div style={mode==="light"?{cursor:"pointer",color:"black"}:{cursor:"pointer",color:"white"}} onClick={()=>setMode(mode==="light"?"dark":"light")}>

          {mode === "light" ? <DarkModeOutlinedIcon className='me-1' />:<DarkModeIcon className='me-1' fontSize='small'/>}
          Dark Mode
              </div>

        </div>
    </div>
  )
}

export default Header