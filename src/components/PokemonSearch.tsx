import React, { useEffect, useState } from 'react';
import { Input, FormControl, Button, Text, Box, CardFooter, Image, CardBody, Card, CardHeader, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormData, PokeData } from '@/types';
import PokemonCard from './PokemonCard';



const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [error, setError] = useState(" ");
    const [data, setData] = useState<PokeData>({
        name: "", stats: [{ base_stat: "", stat: { name: "" } }],
        sprites: {
            front_default: "",
            back_default: ""
        },
        types: [{
            type: {
                name: ""
            }
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
                );
                setData(response.data);
                setError("");
            } catch (error) {
                let errorMessage = "Pokemon não encontrado";
                if (error instanceof Error) {
                    setError(errorMessage)
                }
            }
        };
        if (pokemonName) {
            fetchData();
        }
    }, [pokemonName]);

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        setPokemonName(data.pokeName);
    };

    return (
        <>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)} maxW={400}>
                <Input
                    type="text"
                    {...register('pokeName')}
                    placeholder="Insira o nome do Pokemon"
                />

                <Button type="submit">Enviar</Button>
            </FormControl>

            <PokemonCard name={data.name} stats={data.stats} sprites={data.sprites} types={data.types} />
            {error}
        </>
    );
};

export default PokemonSearch;
