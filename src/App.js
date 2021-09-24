import React from 'react'
import { Center, Container, VStack } from '@chakra-ui/react'
import './app.css'

import Board from './components/Board'
import ControlPanel from './components/ControlPanel'

function App() {
  return (
    <Container className='main'>
      <Center h='100vh'>
        <VStack>
          <Board />
          <ControlPanel />
        </VStack>
      </Center>
    </Container>
  )
}

export default App
