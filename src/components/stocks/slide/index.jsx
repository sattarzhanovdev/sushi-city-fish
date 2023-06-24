import React from 'react'
import c from './slide.module.scss'

const Slide = ({img, title, backgroundColor, color}) => {
  
  return (
    <div
      className={c.slide}
      style={{backgroundImage: `url(${img})` }}
    >
      <div className={c.slide_text}>
        <div className={c.text}>
          <h2>{title}</h2>
        </div>
      </div>
      {/* <div className={c.slider_img}>
        <img src={img} alt="" />
      </div> */}
    </div>
  )
}

export default Slide