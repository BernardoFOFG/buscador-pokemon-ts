import { PokeData } from '@/types'
import { Text } from '@chakra-ui/react'
import React from 'react'

interface PokemonAttacksType {
    poke: PokeData
}

const PokemonAttacks = ({ poke }: PokemonAttacksType) => {
    return (
        <>
            {!!poke.abilities && (
                poke.abilities.map((value, index) => (
                    <Text key={index} textTransform="capitalize">
                        {value.ability.name}
                    </Text>
                ))
            )}
        </>
    )
}

export default PokemonAttacks