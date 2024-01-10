import { useState, createContext } from "react"

export const OverflowContext = createContext()

const OverflowProvider = ({ children }) => {
  const [hidden, setHidden] = useState(false)

  const hiddenTrueWidth = ('calc(100vw + (100vw - 100%))')
  const hiddenFalseWidth = ('calc(100vw - (100vw - 100%))')
  const width = hidden ? hiddenTrueWidth : hiddenFalseWidth

  const contextValues = {
    hidden,
    setHidden,
    width,
  }

  return (
    <OverflowContext.Provider
      value={contextValues}
    >
      {children}
    </OverflowContext.Provider>
  )
}

export default OverflowProvider