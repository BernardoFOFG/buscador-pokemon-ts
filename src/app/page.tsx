"use client";

import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import PokemonSearch from "../components/PokemonSearch";
import { theme } from '../theme.js'


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Flex as="main" justifyContent="center" alignItems="center" flexDirection="column">
        <Text>Busque o Pokemon</Text>
        <PokemonSearch />
      </Flex>
    </ChakraProvider>
  )
}
