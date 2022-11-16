import { Wrapper } from "./HomePage.styles";
import Header from "../Header/Header";
import Pokemons from "../Pokemons/Pokemons";
const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Pokemons />
    </Wrapper>
  );
};

export default HomePage;
