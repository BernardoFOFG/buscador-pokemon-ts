import React, { useEffect, useState } from 'react';
import { Input, Button, Flex, Grid, Box, Text, Collapse, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { PokeData } from '@/types';

interface PokeNameType {
    id: number;
    name: string;
}

const PokemonSearch = () => {
    const [data, setData] = useState<PokeNameType[]>([]);
    const [filter, setFilter] = useState("");
    const [totalItems, setTotalItems] = useState(0);
    const [prevPage, setPrevPage] = useState("");
    const [nextPage, setNextPage] = useState("");
    const [poke, setPoke] = useState<PokeData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${totalItems}`
            );
            setData(response.data.results);
            setPrevPage(response.data.previous);
            setNextPage(response.data.next);
        };
        fetchData();
    }, [totalItems]);

    useEffect(() => {
        const fetchData = async () => {
            const newPokeData: PokeData[] = [];
            for (let i = 0; i < data.length; i++) {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${data[i].name}`
                );
                newPokeData.push(response.data);
            }
            setPoke(newPokeData);
        };
        fetchData();
    }, [data]);

    function onNextPage() {
        setTotalItems(totalItems + 20);
        setPoke([]);
    }

    function onPrevPage() {
        if (prevPage !== null) {
            setTotalItems(totalItems - 20);
            setPoke([]);
        }
    }

    const filteredData = poke.filter((item) => item.name && item.name.includes(filter.toLowerCase()) || item.id && item.id.toString().includes(filter));

    // Obtenha o valor responsivo para o número de colunas do Grid
    const gridColumns = useBreakpointValue({ base: 1, md: 3, lg: 5 });

    return (
        <>
            <Flex as="main" alignItems="center" flexDirection="column" bgColor="blackAlpha.900" minH="100vh">
                <Box maxWidth={400} minH="20%" h="20%" marginBottom={8}>
                    <Text
                        bgGradient='linear(to-l, #7980CC, #FF0000)'
                        bgClip='text'
                        fontSize='6xl'
                        fontWeight='extrabold'
                    >Pokedex</Text>
                    <Input
                        type="text"
                        placeholder="Insira o nome do Pokemon"
                        textColor="white"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </Box>

                <Flex gap={4} marginBottom={8}>
                    <Button onClick={onPrevPage} disabled={prevPage === null} colorScheme='red'>&#60;</Button>
                    <Button onClick={onNextPage} colorScheme='red'>&#62;</Button>
                </Flex>
                <Collapse in={data.length > 0}>
                    <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={4}>
                        {filteredData.map((item) => (
                            <PokemonCard key={item.name} poke={item} />
                        ))}
                    </Grid>
                </Collapse>


            </Flex>
        </>
    );
};

export default PokemonSearch;