import React from "react"
import { StateContext } from "../providers/Context"


export const objToArray = (obj, setData) => {
  const base = Object.entries(obj).map(([id, item]) => {
    return {
      id,
      ...item
    }
  })
  setData(base.reverse())
}

export const scrollTop = () => {
  return window.scrollTo({
    top: 0
  })
}

export const useStateContext = () => {
  return React.useContext(StateContext)
}
