import { theme } from "../../theme/theme";
import {
  Wrapper,
  Text,
  Image,
  Types,
  DetailsContainer,
} from "./PokemonSingle.style";
import { Link } from "react-router-dom";
import image from "../../assets/types/bug.svg";
import Type from "../Type/Type";
interface PokemonSingle {
  key?: number | string;
  details: {
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
  };
}

const PokemonSingle: React.FC<PokemonSingle> = ({ details }) => {
  let typesArray = details.types.map((item) => item.type.name);
  // let colors = details.types.map(item => theme.colors.item.type.name)
  let colors: string[] = [];

  for (const [key, value] of Object.entries(theme.colors)) {
    typesArray.map((type) => {
      if (type === key) colors.push(value);
    });
  }

  const image1 = details.sprites.other.dream_world.front_default;
  const image2 = details.sprites.other["official-artwork"].front_default;

  let style = {
    background:
      colors.length === 2
        ? `linear-gradient(${colors[0]},${colors[1]})`
        : colors[0],
  };
  return (
    <Link to={`pokemon/${details.id}`}>
      <Wrapper types={typesArray} style={style}>
        <Image src={image1 !== null ? image1 : image2} alt="Pokemon Image" loading="lazy"/>
        <DetailsContainer>
          <Text>#{details.id}</Text>
          <Text>{details.name}</Text>
          <Types>
            {details.types.map((item, index) => {
              return <Type key={index} type={item.type.name} />;
            })}
          </Types>
        </DetailsContainer>
      </Wrapper>
    </Link>
  );
};

export default PokemonSingle;
