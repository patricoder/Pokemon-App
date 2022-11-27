import React from "react";
import { Select, Option } from "./Filters.styles";
import { regions } from "../HomePage/HomePage.data";

interface Filter {
  setLimit: any;
  setOffset: any;
  setPokemons: any;
}

const Filters: React.FC<Filter> = ({ setLimit, setOffset, setPokemons }) => {
  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filteredRegion = regions.filter(
      (item) => item.name === e.target.value && item
    )[0];
    setPokemons([]);
    setOffset(filteredRegion.offset);
    setLimit(filteredRegion.limit);
    console.log(filteredRegion);
  };

  return (
    <Select onChange={handleChangeRegion}>
      {regions.map((item) => {
        return (
          <Option key={item.limit} defaultValue={item.name}>
            {item.name}
          </Option>
        );
      })}
    </Select>
  );
};

export default Filters;
