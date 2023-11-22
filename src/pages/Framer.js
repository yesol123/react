import React from 'react'
import {motion} from 'framer-motion';
import {txt,txt2} from './animation';

function Framer() {
  return (
    <article>
      <h2>Framer-Motion</h2>
      <motion.div 
      variants={txt}
      initial="init" 
      animate="play"
      >
      가나다라마바사 아자차카타파하<br/>
      ㄴ대한민국 만세입니다
      </motion.div>
    </article>
  )
}

export default Framer