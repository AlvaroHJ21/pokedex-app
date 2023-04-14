import { Sprites } from './pokemon-full';

export interface PokemonInfo {
    id: number;
    name: string;
    image: string;
    sprites: Sprites;
    bg: string;
}
