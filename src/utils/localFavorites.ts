import { Pokemon } from '../interfaces/pokemon-full';
const toggleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    //validamos de que exista en el arreglo
    const index = favorites.indexOf(id);

    if (index === -1) {
        console.log('Agregando');
        favorites.push(id);
    } else {
        console.log('Removiendo');
        favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
    return favorites.includes(id);
}

const pokemons = (): number[] => {
    const ids = JSON.parse(localStorage.getItem("favorites") || "[]")
    return ids
}

export const localfavorite = {
    toggleFavorite,
    existInFavorites,
    pokemons
}

export default localfavorite;
