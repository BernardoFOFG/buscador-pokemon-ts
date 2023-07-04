import { PokeData } from '@/types'
import { Card, CardHeader, Text, CardBody, Flex, Box, useBreakpointValue, Image, CardFooter } from '@chakra-ui/react'
import React from 'react'
import PokemonType from './PokemonType'


const PokemonCard = ({ name, stats, sprites, types }: PokeData) => {

    return (
        <Card flexDirection="column" textColor="white" bg="black">
            <CardHeader display="flex" flexDirection="column" gap={2} justifyContent="center" padding={0}>
                <Text fontSize="4xl" textTransform="capitalize" fontWeight="bold" textAlign="center">
                    {name}
                </Text>
                <Flex direction="row" gap={4} justifyContent="center">
                    <PokemonType types={types} />
                </Flex>
            </CardHeader>
            {!!stats && (
                <CardBody
                    flexDirection="column" borderRadius={16} maxH={300} marginBottom={16}
                >
                    <Box
                        display="flex"
                        justifyContent="between"
                        textAlign="center"
                        alignItems="center"
                    >
                        {stats.map((value, index) => (
                            <Box key={index} display="flex" flexDirection="column"
                            >
                                <Text
                                    textTransform="capitalize"
                                    fontWeight='bold'>{value.stat.name}</Text>
                                <Text
                                    color='red.500'>
                                    {value.base_stat}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                </CardBody>
            )}
            {!!sprites && (
                <CardFooter
                    gap={4}
                    bg="gray"
                    borderRadius={16}
                    alignItems="center"
                    justifyContent="center"
                    paddingX={4}
                    borderColor="white"
                >
                    <Image src={sprites.front_default} alt="Pokemon front" w={150} h={150} />
                    <Box as="div" border="1px" h={40} display={`${!sprites.back_default ? "none" : ""}`} />
                    <Image
                        src={sprites.back_default}
                        display={`${!sprites.back_default ? "none" : ""}`}
                        alt="Pokemon back"
                        w={150} h={150} />
                </CardFooter>
            )}

        </Card>
    )
}

export default PokemonCard