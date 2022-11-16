import { Image, Text, Wrapper } from "./Type.style";

import bug from "../../assets/types/bug.svg";
import dark from "../../assets/types/dark.svg";
import dragon from "../../assets/types/dragon.svg";
import electric from "../../assets/types/electric.svg";
import fairy from "../../assets/types/fairy.svg";
import fighting from "../../assets/types/fighting.svg";
import fire from "../../assets/types/fire.svg";
import flying from "../../assets/types/flying.svg";
import ghost from "../../assets/types/ghost.svg";
import grass from "../../assets/types/grass.svg";
import ground from "../../assets/types/ground.svg";
import ice from "../../assets/types/ice.svg";
import normal from "../../assets/types/normal.svg";
import poison from "../../assets/types/poison.svg";
import psychic from "../../assets/types/psychic.svg";
import rock from "../../assets/types/rock.svg";
import steel from "../../assets/types/steel.svg";
import water from "../../assets/types/water.svg";

interface Type {
  type: string;
}

const Type: React.FC<Type> = ({ type }) => {

 const getTypeImage = (type: string) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
    //   case "all types":
    //     return all;
      default:
        return null;
    }
 }

  return (
    <Wrapper className={type}>
      <Image src={getTypeImage(type)} alt={type} />
      <Text>{type}</Text>
    </Wrapper>
  );
};

export default Type;
