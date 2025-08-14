import React, { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Footer() {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className='min-w-screen relative flex items-center justify-center'>
    
        <div className={` rounded-full  p-1 m-1 invisible`}>
          <MdOutlineKeyboardArrowDown size={24}/>
        </div>
      <motion.div
        className={`absolute w-full bg-black/3 backdrop-blur-md bottom-0 flex flex-col items-center transition ${(expanded)?'bg-black/70':''}`}
        initial={ false } 
        animate={{ height: expanded ? "25vh" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={`top-0 flex afacad-light pl-3 pr-1.5 items-center justify-center
         hover:bg-gray-400/40 rounded-full text-white p-1 m-1 cursor-pointer`}
        onClick={()=>{setExpanded((prev)=>{return !prev})}}
        >
          Footer
          <div className={`transition ${(expanded)?'rotate-180 ':''}`}>
            <MdOutlineKeyboardArrowDown size={24}/>
          </div>
        </div>

        <motion.div 
        initial = {{ opacity: 0, height: 0 }}
        animate = {{ opacity: expanded?1:0, height: expanded?100:0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1 w-[98%] mb-5 flex items-center justify-center afacad-bold text-[#cb493e]/80 text-[550%]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(203, 73, 62, 0.15) 0px,      
            rgba(23, 73, 62, 0.15) 3px,   
            transparent 3px,                  
            transparent 6px                    
          )`
        }}>
          {(expanded) && <>
            Work In Progress
          </>}
        </motion.div>
        
      </motion.div>

    </div>
  )
}

export default Footer