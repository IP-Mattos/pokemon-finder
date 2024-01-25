import { Pokemon, Pokemons, Result } from '@/types/Pokemon.types'

// getPokemonList -> Get the firts 151 Pokemon
const POKEMON_API_URL = 'https://pokeapi.co/api/v2/'

export async function getPokemonList() {
  const response = await fetch(`${POKEMON_API_URL}pokemon?offset=0&limit=151`)
  const data: Pokemons = await response.json()
  const mock: Result = {
    name: 'gotica en proceso 😦',
    url: '/gotica.jpg'
  }
  data.results.push(mock)
  return data.results
}

// getPokemon -> given a string "pikachu", get the information of pikachu

export async function getPokemon(name: string) {
  // pokemon/ditto
  const mock: Pokemon = {
    height: 69,
    id: 666,
    name: 'gotica en proceso dice ser...',
    sprites: {
      front_default: '/gotica.jpg'
    },
    stats: [
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'Mentirosa (Todas mienten 😭)',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        }
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'Nerd 🤓👉',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'Puta',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'Peruana 🦅',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'Tkm 💗 nah',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        }
      }
    ],
    weight: 69
  }

  if (name === 'gotica') return mock
  const response = await fetch(`${POKEMON_API_URL}pokemon/${name}`)
  const data: Pokemon = await response.json()

  return data
}
