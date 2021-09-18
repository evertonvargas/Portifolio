import { NextApiRequest, NextApiResponse } from "next";

export default function handler (request: NextApiRequest, response: NextApiResponse){
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      link: "https://www.pokemon.com/br/pokedex/bulbasaur"
    },
    {
      id: 2,
      name: "charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      link: "https://www.pokemon.com/br/pokedex/charmander"
    },
    {
      id: 3,
      name: "Pikachu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      link: "https://www.pokemon.com/br/pokedex/pikachu"
    },
    {
      id: 4,
      name: "Pidgeotto",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
      link: "https://www.pokemon.com/br/pokedex/pidgeotto"
    }
  ]

  return response.status(200).json(pokemons);
}
