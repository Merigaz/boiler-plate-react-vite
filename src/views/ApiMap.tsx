import postAddress from "../components/settings/plugins/Useaxios"
import { useEffect } from "react";
import MMap from "../components/MMap";




function ApiMap() {

  useEffect(() => {
    async function fetchCoordinates()  {
     
      const { data} = await postAddress ();
      console.log (data);
    }
    fetchCoordinates();
}, []);


  return (
    <>
     <div>
      <p>Fetching coordinates...</p>
    </div>
      <MMap/>
    </>
  );
}
export default ApiMap;

