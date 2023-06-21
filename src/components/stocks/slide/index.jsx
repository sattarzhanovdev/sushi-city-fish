import React from 'react'
import c from './slide.module.scss'

const Slide = ({img, title, backgroundColor, color}) => {
  return (
    <div
      className={c.slide}
      style={{backgroundColor: backgroundColor, color: color }}
    >
      <div className={c.slide_text}>
        <h2>{title}</h2>
        <button style={{backgroundColor: color}}>
          Узнайте о наших продуктах
        </button>
      </div>
      <div className={c.slider_img}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Slide