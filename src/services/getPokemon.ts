import type { Pokemon } from "../types";

export const getPokemon = (pokemonId: number): Promise<Pokemon> => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error("Error fetching Pokemon:", error)
        })