"use client";

import { ChakraProvider } from "@chakra-ui/react";
import PokemonSearch from "../components/PokemonSearch";
import { theme } from '../theme.js'


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <PokemonSearch />
    </ChakraProvider>
  )
}
