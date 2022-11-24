import React, { useState } from 'react'
import { motion } from 'framer-motion'

import '../styles/Title.scss'

import { topTitleVariant, topSpanVariant, bottomTitleVariant, bottomSpanVariant } from './Animation'

const App = () => {
  const [titleHovered, setTitleHovered] = useState(false)

  const handleTitleHover = () => setTitleHovered((prevState) => !prevState)

  return (
    <main className="Title_main">
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} onMouseEnter={handleTitleHover} onMouseLeave={handleTitleHover} className="title-container">
        <motion.h1 initial="notHovered" animate={titleHovered ? 'hovered' : 'notHovered'} variants={topTitleVariant} className="shown">
          <motion.span variants={topSpanVariant}>J</motion.span>
          <motion.span variants={topSpanVariant}>I</motion.span>
          <motion.span variants={topSpanVariant}>H</motion.span>
          <motion.span variants={topSpanVariant}>A</motion.span>
          <motion.span variants={topSpanVariant}>E</motion.span>
        </motion.h1>

        <motion.h1 initial="notHovered" animate={titleHovered ? 'hovered' : 'notHovered'} variants={bottomTitleVariant} className="shown">
          <motion.span variants={bottomSpanVariant}>J</motion.span>
          <motion.span variants={bottomSpanVariant}>I</motion.span>
          <motion.span variants={bottomSpanVariant}>H</motion.span>
          <motion.span variants={bottomSpanVariant}>A</motion.span>
          <motion.span variants={bottomSpanVariant}>E</motion.span>
        </motion.h1>

        <h1 className="hidden">
          <span>J</span>
          <span>I</span>
          <span>H</span>
          <span>A</span>
          <span>E</span>
        </h1>
      </motion.div>
    </main>
  )
}

export default App
