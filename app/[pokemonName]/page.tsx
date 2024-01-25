// pokemonName

import { PokemonImage } from '@/components/pokemon-image'
import { Progress } from '@/components/ui/progress'
import { getPokemon } from '@/lib/PokemonApi'
import { Pokemon } from '@/types/Pokemon.types'
import Image from 'next/image'
// pokemonName = "Pikachu" -> Show the Pikachu Page.

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  // Object destructuring
  const { pokemonName } = params
  const Pokemon: Pokemon = await getPokemon(pokemonName)

  // get the Api data for pikachu

  return (
    <>
      <h1 className='text-4xl text-bold pt-4 text-center capitalize'>{Pokemon.name}</h1>
      <div className='m-4' style={{ position: 'relative', width: '300px', height: '300px' }}>
        <PokemonImage image={Pokemon.sprites.front_default} name={Pokemon.name} />
      </div>
      <h3>Weight: {Pokemon.weight}</h3>
      <h3>Height: {Pokemon.height}</h3>
      <div className='flex-col'>
        {Pokemon.stats.map((stat) => {
          const statName = stat.stat.name
          const statValue = stat.base_stat
          return (
            <div className='flex items-stretch' style={{ width: '500px' }} key={statName}>
              <h3 className='p-3 w-2/4'>
                {statName}: {statValue}
              </h3>
              <Progress className='w-2/4 m-auto' value={statValue} />
            </div>
          )
        })}
      </div>
    </>
  )
}