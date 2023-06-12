import React from 'react'
import c from './title.module.scss'

const Title = ({text}) => {
  return (
    <div className={c.container}>
      <div className={c.title}>
        <span></span>
        <h1>{text}</h1>
        <span></span>
      </div>
    </div>
  )
}

export default Title