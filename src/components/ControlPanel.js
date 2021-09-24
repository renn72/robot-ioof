import React, { useContext, useState, useEffect } from 'react'

import {
  Radio,
  RadioGroup,
  Stack,
  Container,
  Button,
  Center,
  Text,
} from '@chakra-ui/react'

import { RobotContext } from '../context/RobotContext'

export default function ControlPanel() {
  const [currentRobot, setCurrentRobot] = useState(0)
  const [report, setReport] = useState('')

  const { robots, turnRobot, moveRobot, addRobot, robotDirection } =
    useContext(RobotContext)

  const checkOrigin = () => {
    let isOccupied = false

    robots.forEach((robot) => {
      if (robot.x === 0 && robot.y === 0) {
        isOccupied = true
      }
    })
    return isOccupied
  }

  const generateReport = () => {
    setReport(
      <Container>
        {robots.map((robot, i) => (
          <Text key={i}>
            Robot {i + 1}, x: {robot.x} y: {robot.y} direction:{' '}
            {robotDirection(i)}
          </Text>
        ))}
      </Container>
    )
  }

  useEffect(() => {
    setReport('')
  }, [robots])

  return (
    <Container>
      <Center>
        <Stack direction='column'>
          <Button my='5' isDisabled={checkOrigin()} onClick={addRobot}>
            Add Robot
          </Button>
          <RadioGroup
            onChange={(e) => setCurrentRobot(+e)}
            value={+currentRobot}
            my='4'
          >
            <Stack direction='row'>
              {robots.map((robot, i) => (
                <Radio key={i} value={i}>
                  {i + 1}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Stack direction='row' my='5'>
            <Button onClick={() => turnRobot(+currentRobot, 'left')}>
              Left
            </Button>
            <Button onClick={() => turnRobot(+currentRobot, 'right')}>
              Right
            </Button>
          </Stack>
          <Button my='5' onClick={() => moveRobot(+currentRobot)}>
            Move
          </Button>
          <Button mt='5' onClick={generateReport}>
            Report
          </Button>
        </Stack>
      </Center>
      <Container my='5'>{report}</Container>
    </Container>
  )
}
