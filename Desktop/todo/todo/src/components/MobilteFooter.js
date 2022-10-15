import React,{useEffect, useState} from 'react'

const MobilteFooter = ({color, filterHandler}) => {
  
  return (
    <div className={color === 'light' ? 'mobilefooter' : 'mobilefooter1'}>
     <h6 onClick={()=>filterHandler('all')}>All</h6>
     <h6 onClick={()=>filterHandler('completed')}>Completed</h6>
     <h6 onClick={()=>filterHandler('active')}>Active</h6>
    </div>
  ) 
}

export default MobilteFooter