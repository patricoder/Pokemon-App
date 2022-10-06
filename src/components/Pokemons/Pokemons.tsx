import { Wrapper, Container } from "./Pokemons.styles";
import { useState, useEffect } from "react";
import PokemonSingle from "../PokemonSingle/PokemonSingle";

export interface Pokemons {
  name: string;
  url: string;
  weight: number;
  height: number;
  id: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemons>>([]);
  //   const [pokemonsWithDetails, setPokemonsWithDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  // fetch(`${process.env.REACT_APP_API_ENDPOINT}/pokemon?limit=100000&offset=0`)
  // fetch(`${process.env.REACT_APP_API_ENDPOINT}/region`)
  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/pokemon/1`);

  const fetchPokemons = () => {
    //download all pokemons
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((res) => {
        if (res.ok && res.status === 200) {
          setLoading(false);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.results);
        data.results.map((item: Pokemons) => {
          return fetch(item.url)
            .then((res) => {
              if (res.ok && res.status === 200) {
                return res.json();
              }
            })
            .then((data) => {
              setPokemons((prevState) => [...prevState, data]);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    return () => {
      fetchPokemons();
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        {loading ? (
          <>loading...</>
        ) : (
          <>
            {pokemons.map((item) => {
              console.log(item);
              return <PokemonSingle key={item.id} details={item}/>;
            })}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Pokemons;
