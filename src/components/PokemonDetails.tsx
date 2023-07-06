import { PokeData } from '@/types';
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Text,
    Image
} from '@chakra-ui/react'
import PokemonAtributes from './PokemonAtributes';

interface PokemonDetailsType {
    poke: PokeData;
}

const PokemonDetails = ({ poke }: PokemonDetailsType) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} width="100%"
            borderTopRadius={0}>Detalhes</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minH={500}>
                    <ModalHeader><Text textTransform="capitalize">{poke.name}</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex" justifyContent="center">
                        <Flex width="100%">
                            <PokemonAtributes poke={poke} />
                        </Flex>
                    </ModalBody>
                    <ModalFooter display="flex" justifyContent="space-between" paddingTop={0}>
                        {!!poke.sprites && (
                            <>
                                <Image w={125} h={125} src={poke.sprites.front_default} alt="pokemon front" />
                                <Image w={125} h={125} src={poke.sprites.back_default} alt="pokemon back" /></>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default PokemonDetails