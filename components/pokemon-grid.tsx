'use client'
import { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { PokemonCard } from './pokemon-card'
import { Result } from '@/types/Pokemon.types'

// <PokemonGrid pokemonList={data}>

interface PokemonGridProps {
  pokemonList: Result[]
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('')

  //filter the text
  const searchFilter = (pokemonList: Result[]) => {
    return pokemonList.filter((pokemon: Result) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  const filteredPokemonList = searchFilter(pokemonList)

  return (
    <>
      <div>
        <h3 className='text-2xl py-6 text-center'>Search for your</h3>
        <div className='grid 2-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='pokemonName'>Pokemon Name</Label>
          <Input
            type='text'
            value={searchText}
            autoComplete='off'
            id='pokemonName'
            placeholder='Charizard, Pikachu, etc...'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Collection</h3>
      </div>
      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
        {filteredPokemonList.map((pokemon: Result, index) => {
          return <PokemonCard name={pokemon.name} key={index} url={pokemon.url} />
        })}
      </div>
    </>
  )
}
