import { PokeData } from '@/types'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { getTypeImageAndAlt } from '../utils/PokeType'
const PokemonType = ({ types }: PokeData) => {
    return (
        <>
            {!!types && types.map((type, key) => {
                const { typeImage, altImage } = getTypeImageAndAlt(type.type.name);
                return (
                    <Image
                        src={typeImage}
                        alt={altImage}
                        title={altImage}
                        width="20px"
                        height="20px"
                        key={key}
                    />
                );
            })}
        </>

    )
}

export default PokemonType