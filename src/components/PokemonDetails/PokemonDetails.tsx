import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Col,
  Container,
  Header,
  Image,
  Wrapper,
  Text,
  Row,
  Bold,
  StatTitle,
  StatDesc,
  ProgressContainer,
  StatDescContent,
  ProgressBar,
  PokeBasicCol,
} from "./PokemonDetails.styles";
// import arrow from "../../assets/arrow-left.svg";
import axios from "axios";
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";
import Type from "../Type/Type";
import Loading from "../Loading/Loading";

interface Pokemon {
  status: number;
  data: {
    name: string;
    height: string;
    weight: string;
    types: {
      type: {
        name: string;
        url: string;
      };
    }[];
    abilities: {
      ability: {
        name: string;
      };
    }[];
    image: string;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
        ["official-artwork"]: {
          front_default: string;
        };
      };
    };
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  };
}

interface Details {
  status: number;
  data: {
    genera: {
      genus: string;
      language: {
        name: string;
      };
    }[];
    evolution_chain: {
      url: string;
    };
  };
}

interface EvoChain {
  data: {
    chain: {
      evolves_to?: {
        species: { name: string; url: string };
        evolves_to?: {
          species: { name: string; url: string };
          evolves_to?: {
            species: { name: string; url: string };
          }[];
        }[];
      }[];
      species: { name: string; url: string };
    };
  };
}

// interface Damage {
//   status: number;
//   data: {};
// }

interface Evolution {
  name: string;
  url: string;
}

const PokemonDetails: React.FC = () => {
  const [evo, setEvo] = useState<Evolution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [info, setInfo] = useState({
    name: "",
    height: "",
    weight: "",
    types: [""],
    abilities: [""],
    generation: "",
    image: "",
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
  });
  const { id } = useParams();

  const getInfo = async () => {
    const response: Pokemon = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/pokemon/${id}`
    );
    const details: Details = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/pokemon-species/${id}`
    );

    const damage = await axios.get(response.data.types[0].type.url);

    const types = response.data.types.map((obj) => obj.type.name);
    const abilities = response.data.abilities.map((obj) => obj.ability.name);
    const generation = details.data.genera.filter(
      (item) => item.language.name === "en" && item.genus
    )[0].genus;

    const stats = response.data.stats.map((item) => item);
    setMaxValue(Math.max(...stats.map((item) => item.base_stat)));

    const image1 = response.data.sprites.other.dream_world.front_default;
    const image2 = response.data.sprites.other["official-artwork"].front_default;
    setInfo({
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      types,
      abilities,
      generation,
      image: image1 !== null ? image1 : image2,
      stats,
    });

    const chain: EvoChain = await axios.get(
      `${details.data.evolution_chain.url}`
    );
    let evoArr = [];
    let evoData = chain.data.chain;

    do {
      evoArr.push(evoData.species);
      setEvo(evoArr);
      //@ts-ignore
      evoData = evoData.evolves_to[0];
      //@ts-ignore
    } while (evoData && evoData.hasOwnProperty("evolves_to") !== undefined);

    if (
      response.status === 200 &&
      details.status === 200 &&
      damage.status === 200
    ) {
      setLoading(false);
      console.log(evo, evoArr);
    }
  };

  useEffect(() => {
    if (loading) {
      getInfo();
    }
  }, []);
  return (
    <>
      {!loading ? (
        <Wrapper>
          <Header className={info.types[0]}>
            <Container className="header">
              <Col className="nav-col">
                <ColorSwitcher />
                <Link to="/" className="arrow-image">
                  ←
                </Link>
              </Col>
              <Text className="poke-name">{info.name}</Text>
            </Container>
          </Header>
          <Container className="main">
            <PokeBasicCol>
              <Row>
                <Bold>ID</Bold>
                {id}
              </Row>
              <Row>
                <Bold>Height</Bold>
                {info.height}
              </Row>
              <Row>
                <Bold>Weight</Bold>
                {info.weight}
              </Row>
              <Row>
                <Bold>Abilities</Bold>
                {id}
              </Row>
              <Row>
                <Bold>Type</Bold>
                {info.types.map((item) => {
                  return <Type type={item} key={info.types.indexOf(item)} />;
                })}
              </Row>
              <Row>
                <Bold>Forms</Bold>
              </Row>
            </PokeBasicCol>
            <Col>
              <Image src={info.image} alt="poke-image" />
            </Col>
            <Col>
              {info.stats.map((item, index) => {
                return (
                  <Row key={index}>
                    <StatTitle>{item.stat.name}</StatTitle>
                    <StatDesc>
                      <StatDescContent>{item.base_stat}</StatDescContent>
                      <ProgressContainer>
                        <ProgressBar
                          width={
                            maxValue <= 100
                              ? item.base_stat
                              : Math.floor((item.base_stat * 100) / maxValue)
                          }
                        />
                      </ProgressContainer>
                    </StatDesc>
                  </Row>
                );
              })}
            </Col>
          </Container>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PokemonDetails;

//  <Col>
//               <p>first col</p>
//               <p>ID: {id}</p>
//               <p>Height: {info.height}</p>
//               <p>Weight: {info.weight}</p>
//               <p>Typ:</p>
//               {info.types.map((item, index) => {
//                 return <p key={index}>{item}</p>;
//               })}
//             </Col>
//             <Col>
//               <p>mid col</p>
//               <p>{info.generation}</p>
//               <Image src={info.image} alt={info.name} />
//             </Col>
