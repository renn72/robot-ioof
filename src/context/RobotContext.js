import { useState, createContext, useContext } from 'react'
import { BoardContext } from './BoardContext'
export const RobotContext = createContext()

export const RobotProvider = ({ children }) => {
  const [robots, setRobots] = useState([{ x: 0, y: 0, f: 'n' }])

  const { boardShape } = useContext(BoardContext)

  const cardinalDirections = ['n', 'e', 's', 'w']

  const addRobot = () => {
    setRobots((robots) => [...robots, { x: 0, y: 0, f: 'n' }])
  }

  const turnRobot = (robotIndex, direction) => {
    const _robots = [...robots]

    let index =
      cardinalDirections.indexOf(robots[robotIndex].f) +
      (direction === 'right' ? 1 : -1)

    if (index > 3) {
      index -= 4
    } else if (index < 0) {
      index += 4
    }

    _robots[robotIndex].f = cardinalDirections[index]

    setRobots([..._robots])
  }

  const isRobot = (x, y) => {
    for (const robot of robots) {
      if (robot.x === x && robot.y === y) {
        return true
      }
    }
    return false
  }

  const moveRobot = (robotIndex) => {
    const _robots = [...robots]
    let { x, y, f } = _robots[robotIndex]

    if (f === 'n' && y + 1 < boardShape[1]) {
      if (!isRobot(x, y + 1)) {
        y += 1
      }
    } else if (f === 'e' && x + 1 < boardShape[0]) {
      if (!isRobot(x + 1, y)) {
        x += 1
      }
    } else if (f === 's' && y > 0) {
      if (!isRobot(x, y - 1)) {
        y -= 1
      }
    } else if (f === 'w' && x > 0) {
      if (!isRobot(x - 1, y)) {
        x -= 1
      }
    }

    _robots[robotIndex] = { x, y, f }

    setRobots([..._robots])
  }

  const robotDirection = (robotIndex) => {
    const { f } = robots[robotIndex]

    if (f === 'n') {
      return 'North'
    }
    if (f === 'e') {
      return 'East'
    }
    if (f === 's') {
      return 'South'
    }
    if (f === 'w') {
      return 'West'
    }
  }

  return (
    <RobotContext.Provider
      value={{ robots, addRobot, turnRobot, moveRobot, robotDirection }}
    >
      {children}
    </RobotContext.Provider>
  )
}
