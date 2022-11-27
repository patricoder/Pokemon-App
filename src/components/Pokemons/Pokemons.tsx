import { Wrapper, Container } from "./Pokemons.styles";
import { useState, useEffect } from "react";
import PokemonSingle from "../PokemonSingle/PokemonSingle";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";

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
      ["official-artwork"]: {
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
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(151);
  const [offset, setOffset] = useState<number>(0);

  const fetchPokemons = (controller: any) => {
    console.log("##fetch");
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/pokemon?limit=${limit}&offset=${offset}`,
      {
        signal: controller.signal,
      }
    )
      .then((res) => {
        if (res.ok && res.status === 200) {
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
            })
            .catch((error) => console.log(error));
        });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setPokemons([]);
    const controller = new AbortController();
    console.log("##render", controller.signal);
    fetchPokemons(controller);

    return () => {
      controller.abort();
      console.log("##cln");
    };
  }, [limit, offset]);
  return (
    <Wrapper>
      <Filters
        setLimit={setLimit}
        setOffset={setOffset}
        setPokemons={setPokemons}
      />
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
