import { Sprites } from './pokemon-full';

export interface PokemonInfo {
  id: number;
  name: string;
  image: string;
  sprites: Sprites;
  bg: string;
  type: string;
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    level: number;
    name: string;
  }[];
}
