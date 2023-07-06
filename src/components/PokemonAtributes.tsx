import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import PokemonStatus from './PokemonStatus'
import { PokeData } from '@/types'
import PokemonAttacks from './PokemonAttacks'

interface PokemonAtributesType {
    poke: PokeData
}

const PokemonAtributes = ({ poke }: PokemonAtributesType) => {
    return (
        <Tabs w="100%">
            <TabList>
                <Tab>Stats</Tab>
                <Tab>Attacks</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <PokemonStatus poke={poke} />
                </TabPanel>
                <TabPanel>
                    <PokemonAttacks poke={poke}/>
                </TabPanel>

            </TabPanels>
        </Tabs>
    )
}

export default PokemonAtributes