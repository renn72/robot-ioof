import React, { useContext, useState, useEffect } from 'react'

import {
  Radio,
  RadioGroup,
  Stack,
  Container,
  Button,
  Center,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from '@chakra-ui/react'

import { RobotContext } from '../context/RobotContext'

export default function ControlPanel() {
  const [currentRobot, setCurrentRobot] = useState(0)
  const [report, setReport] = useState('')
  const [newRobotX, setNewRobotX] = useState(0)
  const [newRobotY, setNewRobotY] = useState(0)
  const [newRobotF, setNewRobotF] = useState('n')

  const { robots, turnRobot, moveRobot, addRobot, robotDirection } =
    useContext(RobotContext)

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

  const addNewRobot = () => {
    addRobot(newRobotX, newRobotY, newRobotF)
  }

  useEffect(() => {
    setReport('')
  }, [robots])

  return (
    <Container>
      <Center>
        <Stack direction='column'>
          <Stack direction='row'>
            <InputGroup>
              <InputLeftAddon children='X:' />
              <Input
                value={newRobotX + 1}
                onChange={(e) => setNewRobotX(e.target.value - 1)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Y:' />
              <Input
                value={newRobotY + 1}
                onChange={(e) => setNewRobotY(e.target.value - 1)}
              />
            </InputGroup>
            <Select
              value={newRobotF}
              onChange={(e) => setNewRobotF(e.target.value)}
            >
              <option value='n'>North</option>
              <option value='e'>East</option>
              <option value='s'>South</option>
              <option value='w'>West</option>
            </Select>
          </Stack>
          <Button my='5' onClick={addNewRobot}>
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
