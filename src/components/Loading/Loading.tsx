import { Wrapper, Image } from "./Loading.styles";
import pokeball from "../../assets/pokeball.svg";
const Loading = () => {
  return (
    <Wrapper>
      <Image src={pokeball} alt="pokeball-image"/>
    </Wrapper>
  );
};

export default Loading;
