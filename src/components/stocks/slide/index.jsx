import React from 'react'
import c from './slide.module.scss'

const Slide = ({img}) => {
  return (
    <div className={c.slide}>
      <img 
        src={img} 
        alt="banner"
      />
    </div>
  )
}

export default Slide