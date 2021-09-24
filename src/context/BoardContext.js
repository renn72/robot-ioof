import { useState, createContext } from 'react'

export const BoardContext = createContext()

export const BoardProvider = ({ children }) => {
  const [boardShape, setBoardShape] = useState([5, 5])

  const resizeBoard = (size) => {
    setBoardShape(size)
  }

  return (
    <BoardContext.Provider value={{ boardShape, resizeBoard }}>
      {children}
    </BoardContext.Provider>
  )
}
