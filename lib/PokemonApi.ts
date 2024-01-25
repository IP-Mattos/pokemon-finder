import { Pokemon, Pokemons, Result } from '@/types/Pokemon.types'

// getPokemonList -> Get the firts 151 Pokemon
const POKEMON_API_URL = 'https://pokeapi.co/api/v2/'

export async function getPokemonList() {
  const response = await fetch(`${POKEMON_API_URL}pokemon?offset=0&limit=151`)
  const data: Pokemons = await response.json()

  return data.results
}

// getPokemon -> given a string "pikachu", get the information of pikachu

export async function getPokemon(name: string) {
  // pokemon/ditto
  const response = await fetch(`${POKEMON_API_URL}pokemon/${name}`)
  const data: Pokemon = await response.json()

  return data
}
