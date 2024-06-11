import React, { FC } from 'react'

import { Character } from 'your_character'

interface CharacterListProps {
  loading: boolean
  error: boolean
  characters: Character[]
}

export const CharacterList: FC<CharacterListProps> = ({ loading, error, characters }) => {
  if (loading && !error) return <div>Loading...</div>
  if (!loading && error) return <div>Error occurred. Unable to load characters!</div>
  if (!characters) return null

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  )
}
