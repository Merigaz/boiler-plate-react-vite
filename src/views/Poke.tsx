

import { useQuery } from "react-query";
import Pokecard from "../components/Pokecard";
import getPokemon from "../components/settings/plugins/Useaxios";



function Poke() {
  const { data, isLoading } = useQuery('pokemon', getPokemon)
 
  console.log (data);
  let args: any = {
    data, isLoading
  };
    return (
      <>
      
      <Pokecard />
      
      </>
      
      )

}

export default Poke;