import { PokeData } from '@/types'
import { Box, Text } from '@chakra-ui/react';
import React from 'react'

interface PokemonStatusType {
    poke: PokeData;
}

const PokemonStatus = ({ poke }: PokemonStatusType) => {
    return (
        <>
            {!!poke.stats && (
                poke.stats.map((value, index) => (
                    <Box key={index} display="flex" justifyContent="space-between">
                        <Text textTransform="capitalize">{value.stat.name}:</Text>
                        <Text color='red' fontWeight="bold">{value.base_stat}</Text>
                    </Box>
                )
                ))}

        </>
    )
}

export default PokemonStatus