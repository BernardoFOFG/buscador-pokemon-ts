import React, { useEffect, useState } from 'react';
import { Input, Button, Flex, Grid, Box, Text, Collapse, useBreakpointValue, Spinner } from '@chakra-ui/react';
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${totalItems}`
            );
            setData(response.data.results);
            setPrevPage(response.data.previous);
            setNextPage(response.data.next);
            setLoading(false);
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
        setTotalItems(totalItems - 20);
        setPoke([]);
    }

    const filteredData = poke.filter((item) => item.name && item.name.includes(filter.toLowerCase()) || item.id && item.id.toString().includes(filter));
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
                <Collapse in={data.length > 0}>
                    <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={4}>
                        {loading ? (
                            <Spinner color='red' />
                        ) : (
                            filteredData.map((item) => (
                                <PokemonCard key={item.name} poke={item} />
                            ))
                        )}
                    </Grid>
                </Collapse>

                <Flex gap={4} marginBottom={8} width="100%" marginTop={4} justifyContent="end" marginRight={64}>
                    <Button onClick={onPrevPage} isDisabled={prevPage !== null ? false : true} colorScheme='red'>&#60;</Button>
                    <Button onClick={onNextPage} colorScheme='red'>&#62;</Button>
                </Flex>
            </Flex>
        </>
    );
};

export default PokemonSearch;
