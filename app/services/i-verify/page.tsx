"use client"

import {motion} from 'framer-motion'


export default function IVerify() {
  return <motion.div className="text-red-500"
  initial={{opacity: 0, y: 100}}
  animate={{opacity: 1, y: 0}}
  transition={{duration: 0.5}}
  >IVerify</motion.div>;
}