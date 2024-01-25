/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

// pikachu, -> localhost:3000/pikachu

interface PokemonCardProps {
  name: string
  url: string
}

// <PokemonCard name="pikachu"/>
export function PokemonCard({ name, url }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className='group rounded-lg border border-transparent m-3 px-5 gap-3 dark:border-gray-500 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      key={name + 'Card'}
    >
      <h2 className={`text-2xl font-semibold text-center capitalize`}>{name} </h2>
      <img
        className='w-full'
        src={
          name === 'gotica'
            ? url
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`
        }
        alt={name}
      />
    </Link>
  )
}
