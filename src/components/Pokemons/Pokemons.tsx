import { Wrapper, Container } from "./Pokemons.styles";
import { useState, useEffect } from "react";
import PokemonSingle from "../PokemonSingle/PokemonSingle";
import Loading from "../Loading/Loading";

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
  species: {
    url: string;
  };
}

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemons>>([]);
  //   const [pokemonsWithDetails, setPokemonsWithDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
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
        data.results.map((item: Pokemons) => {
          return fetch(item.url)
            .then((res) => {
              if (res.ok && res.status === 200) {
                return res.json();
              }
            })
            .then((data) => {
              setPokemons((prevState) => [...prevState, data]);
              setFetched(!fetched);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    return () => {
      !fetched && fetchPokemons();
    };
  }, []);
  return (
    <Wrapper>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            {pokemons.map((item) => {
              return <PokemonSingle key={item.id} details={item} />;
            })}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Pokemons;
