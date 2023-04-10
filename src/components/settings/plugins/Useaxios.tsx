import axios from "axios";

async function getPokemon() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  return data
}
async function postAddress(address:any) {
  
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${import.meta.env.VITE_API_KEY}`;
  const response = await fetch(geocodingApiUrl)
  console.log (response);
  const data = await response.json();
  
  return { data};
}
export default getPokemon; postAddress;