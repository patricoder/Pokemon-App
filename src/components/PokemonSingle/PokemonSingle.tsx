import { theme } from "../../theme/theme";
import { Wrapper, Text, Image, Types, DetailsContainer, Icon } from "./PokemonSingle.style";

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
      };
    };
    types: {
      type: {
        name: string;
      };
    }[];
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

  let style = {
    background:
      colors.length === 2
        ? `linear-gradient(${colors[0]},${colors[1]})`
        : colors[0],
  };

  return (
    <Wrapper types={typesArray} style={style}>
      <Image
        src={details.sprites.other.dream_world.front_default}
        alt="Pokemon Image"
      />
      <DetailsContainer>
        <Text>#{details.id}</Text>
        <Text>{details.name}</Text>
        <Types>
          {details.types.map((item, index) => {
            return (
              <Icon src={} />
              <Text className={item.type.name} key={index}>
                {item.type.name}
              </Text>
            );
          })}
        </Types>
      </DetailsContainer>
    </Wrapper>
  );
};

export default PokemonSingle;

//
