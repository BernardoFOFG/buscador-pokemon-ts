import { type } from "os";

export interface FormData {
    pokeName: string;
}

export interface PokeData {
    name?: string;
    stats?: statsType[];
    sprites?: spritesType;
    types?: typesType[];
}

export interface statsType {
    base_stat: string;
    stat: {
        name: string;
    }
}

export interface spritesType {
    back_default?: string;
    front_default: string;
}

export interface typesType {
    type: {
        type: {
            name: ""
        }
    }
}