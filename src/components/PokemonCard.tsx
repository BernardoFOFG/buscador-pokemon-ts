import { PokeData } from '@/types'
import { Card, CardHeader, Text, CardBody, Flex, Box, useBreakpointValue, Image, CardFooter } from '@chakra-ui/react'
import React from 'react'
import PokemonType from './PokemonType'
import PokemonDetails from './PokemonDetails';

interface PokemonCardType {
    poke: PokeData;
}


const PokemonCard = ({ poke }: PokemonCardType) => {

    return (
        <Card flexDirection="column" textColor="white" bg="black">
            <CardHeader display="flex" flexDirection="column" gap={1} justifyContent="center" padding={0}>
                <Text textAlign="end" paddingEnd={2} paddingTop={1}>
                    #{poke.id}
                </Text>
                <Text fontSize="xl" textTransform="capitalize" fontWeight="bold" textAlign="center">
                    {poke.name}
                </Text>
                <Flex direction="row" gap={4} justifyContent="center">
                <PokemonType poke={poke} />
            </Flex>
            </CardHeader>
            {!!poke.stats && (
                <CardBody
                    borderRadius={16} maxH={300} paddingY={0}
                >
                    {!!poke.sprites && (
                        <Image src={poke.sprites.front_default} alt="Pokemon front" width={150} height={150} />
                    )}
                </CardBody>
            )}
            <CardFooter
                alignItems="center"
                justifyContent="center"
                padding={0}
            >
                <PokemonDetails poke={poke} />
            </CardFooter>
        </Card>

    )
}

export default PokemonCard