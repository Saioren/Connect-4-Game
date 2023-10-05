import { Connect4 } from 'D:/Code/Reactpractice/connect4secondtry/src/components/Connect4.js'
import { Heading, VStack } from '@chakra-ui/react'
export default function Home() {
  return (
    <VStack spacing="3rem">
      <Heading>Connect 4</Heading>
      <Connect4 />
    </VStack>
  )
}