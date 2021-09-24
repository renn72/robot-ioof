import React, { useContext } from 'react'

import { VStack, HStack, Center } from '@chakra-ui/react'

import { BoardContext } from '../context/BoardContext'
import { RobotContext } from '../context/RobotContext'

import Robot from './Robot'

const boardSpacing = 3
const squareSize = 6

export default function Board() {
  const { boardShape } = useContext(BoardContext)
  const { robots } = useContext(RobotContext)

  const isRobot = (x, y) => {
    for (const [index, value] of robots.entries()) {
      if (value.x === x && value.y === boardShape[1] - y - 1) {
        return <Robot x={x} y={y} f={value.f} index={index} />
      }
    }
  }

  return (
    <VStack spacing={`${boardSpacing}vh`}>
      {[...Array(boardShape[0])].map((row, i) => (
        <HStack key={i} spacing={`${boardSpacing}vw`}>
          {[...Array(boardShape[1])].map((column, j) => (
            <Center
              key={j}
              w={`${squareSize}vw`}
              h={`${squareSize}vw`}
              bg='mistyrose'
            >
              {isRobot(j, i)}
            </Center>
          ))}
        </HStack>
      ))}
    </VStack>
  )
}
