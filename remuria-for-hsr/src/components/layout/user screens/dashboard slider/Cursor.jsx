import React from 'react'
import { motion } from 'framer-motion'

function Cursor({position, selectedTab}) {
  return (
    <motion.div className={`absolute z-0 rounded-full bg-white h-[87%] ${(selectedTab === "")?'':'bg-white/85'}`}
        animate={position}
    ></motion.div>
  )
}

export default Cursor