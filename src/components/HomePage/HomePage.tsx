import { Wrapper } from "./HomePage.styles";
import { useState, useEffect } from 'react'
import Header from "../Header/Header";
import Pokemons from "../Pokemons/Pokemons";
const HomePage = () => {

const [pokemons, setPokemons] = useState();
const [loading, setLoading] = useState(true);

useEffect(()=> {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/pokemon?limit=100000&offset=0`)
    .then(res => {
        if(res.ok && res.status === 200) {
            setLoading(false);
            return res.json();
        }
    })
    .then(data => {
        setPokemons(data);
        console.log(data)
    })
    .catch(error => console.log(error))
}, [])


 
    return (
        <Wrapper>
            <Header />
            <Pokemons/>
        </Wrapper>
    );
};

export default HomePage;