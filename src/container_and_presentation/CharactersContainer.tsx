import React, { FC, useState, useEffect } from 'react'

import { Character } from 'your_character'

import { CharacterList } from './CharacterList'

export const CharactersContainer: FC = () => {
  const [characters, setCharacters] = useState<Character>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const getCharacters = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('your_api_end_point')
      const data = await response.json()

      setIsLoading(false)
      if (!data) return
      setCharacters(data)
    } catch(err) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return <CharacterList loading={isLoading} error={isError} characters={characters} />
}
