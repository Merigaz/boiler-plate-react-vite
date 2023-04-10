import { GoogleMap} from "@react-google-maps/api";
import { useState } from "react";

function MMap() {
  const geocoder = new google.maps.Geocoder();
  const addresses = [

    { address: "Calle72#47,Barranquilla,Colombia", index: 0 },
  
    { address: "Calle75#45-9,Barranquilla,Colombia", index: 1 },
  
    { address: "carrera26b2#74-44,Silencio,Barranquilla,Colombia", index: 2 }
  
  ];;
  addresses.forEach(({ address, index }) => {

    geocoder.geocode({ address }, (results, status) => {
  
      if (status == google.maps.GeocoderStatus.OK) {
  
        console.log(`Address ${index}: ${results[0].formatted_address}`);
  
        console.log(`Latitude ${index}: ${results[0].geometry.location.lat()}`);
  
        console.log(`Longitude ${index}: ${results[0].geometry.location.lng()}`);
  
      } else {
  
        alert(`Geocode was not successful for Address ${index}: ${status}`);
  
      }
  
    });
  
  });
  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };

  
  return (
    
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} options={{
        mapId: (import.meta.env.VITE_MAP_ID),
      }} /> 
      
   
  );
}

export default MMap;
