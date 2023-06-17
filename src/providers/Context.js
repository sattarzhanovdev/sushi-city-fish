import React from "react";

export const StateContext = React.createContext({})

export const Providers = ({children}) => {
  const [activeCart, setActiveCart] = React.useState(false)


  const value = React.useMemo(() => {
    return {
      activeCart,
      setActiveCart,
    }
  }, [activeCart])
  
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}