
export interface PokeData {
    name?: string;
    id?: number;
    stats?: statsType[];
    sprites?: spritesType;
    types?: typesType[];
    abilities?: attacksType[];
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
        name: string;
    }
}

export interface attacksType {
    ability: {
        name: string;
    }
}