/*
Container and presentation patterns

The Container and presentation pattern is a pattern that aims to separate the presentation logic from the business
logic in a react code, thereby making it modular, testable, and one that follows the separations of concern principle.
Mostly in react applications, there arise cases where we are required to fetch data from a backend/store or to compute
a logic and represent the resultant of that computation on a react component. In these cases, the container and
presentation pattern shines as it can be used to categorize the components into two namely:
- The container component, which acts as the component responsible for the data fetching or computation.
- The presentation component, whose job is to render the fetched data or computed value on the UI (user interface).
*/

// An example of Container and presentation pattern is shown below:

import React, { useState, useEffect } from "react";
import { Character } from "./types";
import CharacterList from "./CharacterList";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
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
  }, []);

  return <CharacterList loading={isLoading} error={error} characters={characters} />;
};

export default StarWarsCharactersContainer;

// The component is responsible for displaying the characters.

import React from "react";
import { Character } from "./types";

interface CharacterListProps {
  loading: boolean;
  error: boolean;
  users: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ loading, error, characters }) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error occurred. Unable to load characters</div>;
  if (!characters) return null;

  return (
    <ul>
      {characters.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
