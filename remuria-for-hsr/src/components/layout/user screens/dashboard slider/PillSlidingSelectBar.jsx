import React, { useEffect, useState } from 'react'
import Cursor from './Cursor'
import Tab from './Tab'

function PillSlidingSelectBar({uid, rightDisplaySelector, setRightDisplaySelector}) {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    const [selectedTab, setSelectedTab] = useState(rightDisplaySelector)

    useEffect(()=>{
      if(selectedTab !== ""){
        setRightDisplaySelector(selectedTab);
      }
    }, [selectedTab])

  return (
    <div 
    onMouseLeave={()=>{
      if(selectedTab === ""){
        setPosition((prev)=>({
          ...prev,
          opacity: 0,
        }))
      }
    }}
    className="relative py-1 px-1 w-fit border border-[#B2B2B2]/40 bg-gray-800/40 backdrop-blur-md rounded-full flex items-center">
       <Tab setPosition={setPosition} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>relics</Tab>
       <Tab setPosition={setPosition} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>builds</Tab>
       <Tab setPosition={setPosition} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>validate</Tab>
       <Cursor position={position} selectedTab={selectedTab}/>
    </div>
  )
}

export default PillSlidingSelectBar