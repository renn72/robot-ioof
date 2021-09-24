import React from 'react'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'

export default function Robot({ x, y, f, index }) {
  const findDirection = (f) => {
    if (f === 'n') {
      return <ChevronUpIcon w={6} h={6} />
    }
    if (f === 'e') {
      return <ChevronRightIcon w={6} h={6} />
    }
    if (f === 's') {
      return <ChevronDownIcon w={6} h={6} />
    }
    if (f === 'w') {
      return <ChevronLeftIcon w={6} h={6} />
    }
  }

  return (
    <div>
      <Text fontSize='sm'>R {index + 1}</Text>
      {findDirection(f)}
    </div>
  )
}
