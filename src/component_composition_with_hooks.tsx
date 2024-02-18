/*
Component composition with Hooks

We can isolate all stateful logic—a type of logic that needs reactive state variable(s)—and compose or use it in the
components using custom hooks. As a result, the code is more modularized and testable because the hooks are loosely
tied to the component and can therefore be tested separately.
*/

// An example of component composition with hooks is shown below:

import { useState, useEffect } from "react";
import { Character } from "./types";

export const useFetchStarWarsCharacters = () => {
  const [characters, setCharacters] = useState<Character>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const controller = new AbortController();

  const getCharacters = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json",
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          signal: controller.signal
        }
      );

      const data = await response.json();

      setIsLoading(false);
      if (!data) return;
      setCharacters(data);
    } catch(err) {
      setError(true);
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getCharacters();

    return () => {
      controller.abort();
    }
  }, []);

  return [characters, isLoading, error];
};

/*
After creating the custom hook, we will import it into our StarWarsCharactersContainer component and use it.
*/

// Importing the custom hook to a component and fetch the characters.

import React from "react";
import { useFetchStarWarsCharacters } from "./useFetchStarWarsCharacters";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, isLoading, error] = useFetchStarWarsCharacters();

  return <CharacterList loading={isLoading} error={error} characters={characters} />;
};

export default StarWarsCharactersContainer;
